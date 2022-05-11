{-# LANGUAGE DuplicateRecordFields #-}
{-# OPTIONS_GHC -Wno-orphans #-}

module Hydra.Chain.Direct.Contract.Contest where

import Hydra.Cardano.Api
import Hydra.Prelude hiding (label)

import Cardano.Api.UTxO as UTxO
import Hydra.Chain.Direct.Contract.Mutation (Mutation (..), SomeMutation (..))
import Hydra.Chain.Direct.Fixture (genForParty, testNetworkId, testPolicyId)
import Hydra.Chain.Direct.Tx (assetNameFromVerificationKey, contestTx, mkHeadOutput)
import qualified Hydra.Contract.HeadState as Head
import Hydra.Crypto (aggregate, sign, toPlutusSignatures)
import qualified Hydra.Crypto as Hydra
import qualified Hydra.Data.Party as OnChain
import Hydra.Ledger.Cardano (genOneUTxOFor, genVerificationKey, hashTxOuts)
import Hydra.Party (Party, deriveParty, partyToChain)
import Hydra.Snapshot (Snapshot (..), SnapshotNumber)
import Plutus.Orphans ()
import Plutus.V1.Ledger.Api (BuiltinByteString, toBuiltin, toData)
import Test.Hydra.Fixture (aliceSk, bobSk, carolSk)
import Test.QuickCheck (elements, oneof, suchThat)
import Test.QuickCheck.Gen (choose)
import Test.QuickCheck.Instances ()

--
-- ContestTx
--

healthyContestTx :: (Tx, UTxO)
healthyContestTx =
  (tx, lookupUTxO)
 where
  tx =
    contestTx
      somePartyCardanoVerificationKey
      healthySnapshot
      (healthySignature healthySnapshotNumber)
      (headInput, headResolvedInput, headDatum, healthyOnChainParties)

  headInput = generateWith arbitrary 42

  headResolvedInput =
    mkHeadOutput testNetworkId testPolicyId headTxOutDatum
      & addParticipationTokens healthyParties

  headTxOutDatum = toUTxOContext (mkTxOutDatum healthyContestDatum)

  headDatum = fromPlutusData $ toData healthyContestDatum

  lookupUTxO = UTxO.singleton (headInput, headResolvedInput)

addParticipationTokens :: [Party] -> TxOut CtxUTxO -> TxOut CtxUTxO
addParticipationTokens parties (TxOut addr val datum) =
  TxOut addr val' datum
 where
  val' =
    val
      <> valueFromList
        [ (AssetId testPolicyId (assetNameFromVerificationKey cardanoVk), 1)
        | cardanoVk <- genForParty genVerificationKey <$> parties
        ]

healthySnapshot :: Snapshot Tx
healthySnapshot =
  Snapshot
    { number = healthySnapshotNumber
    , utxo = healthyContestUTxO
    , confirmed = []
    }

healthyContestUTxO :: UTxO
healthyContestUTxO =
  (genOneUTxOFor somePartyCardanoVerificationKey `suchThat` (/= healthyUTxO))
    `generateWith` 42

healthySnapshotNumber :: SnapshotNumber
healthySnapshotNumber = 4

healthyClosedSnapshotNumber :: SnapshotNumber
healthyClosedSnapshotNumber = 3

healthyContestDatum :: Head.State
healthyContestDatum =
  Head.Closed
    { snapshotNumber = fromIntegral healthyClosedSnapshotNumber
    , utxoHash = healthyUTxOHash
    , parties = healthyOnChainParties
    }

healthyUTxOHash :: BuiltinByteString
healthyUTxOHash = toBuiltin $ hashTxOuts mempty

healthyUTxO :: UTxO
healthyUTxO = genOneUTxOFor somePartyCardanoVerificationKey `generateWith` 42

somePartyCardanoVerificationKey :: VerificationKey PaymentKey
somePartyCardanoVerificationKey = flip generateWith 42 $ do
  genForParty genVerificationKey <$> elements healthyParties

healthySigningKeys :: [Hydra.SigningKey]
healthySigningKeys = [aliceSk, bobSk, carolSk]

healthyParties :: [Party]
healthyParties = deriveParty <$> healthySigningKeys

healthyOnChainParties :: [OnChain.Party]
healthyOnChainParties = partyToChain <$> healthyParties

healthySignature :: SnapshotNumber -> Hydra.MultiSignature (Snapshot Tx)
healthySignature number = aggregate [sign sk snapshot | sk <- healthySigningKeys]
 where
  snapshot = healthySnapshot{number}

-- TODO: Test the same mutations as in CloseMutation
data ContestMutation
  = MutateSignatureButNotSnapshotNumber
  | MutateToNonNewerSnapshot
  deriving (Generic, Show, Enum, Bounded)

genContestMutation :: (Tx, UTxO) -> Gen SomeMutation
genContestMutation (_tx, _utxo) =
  -- FIXME: using 'closeRedeemer' here is actually too high-level and reduces
  -- the power of the mutators, we should test at the level of the validator.
  -- That is, using the on-chain types. 'closeRedeemer' is also not used
  -- anywhere after changing this and can be moved into the closeTx
  oneof
    [ -- SomeMutation MutateSignatureButNotSnapshotNumber . ChangeHeadRedeemer <$> do
      --     contestRedeemer (number healthySnapshot) <$> (arbitrary :: Gen (Hydra.MultiSignature (Snapshot Tx)))
      -- ,
      SomeMutation MutateToNonNewerSnapshot . ChangeHeadRedeemer <$> do
        mutatedSnapshotNumber <- choose (0, toInteger healthyClosedSnapshotNumber)
        pure $
          Head.Contest
            { snapshotNumber = mutatedSnapshotNumber
            , utxoHash = healthyUTxOHash
            , signature = toPlutusSignatures $ healthySignature (fromInteger mutatedSnapshotNumber)
            }
    ]

-- where
--  contestRedeemer snapshotNumber sig =
--    Head.Contest
--      { snapshotNumber = toInteger snapshotNumber
--      , signature = toPlutusSignatures sig
--      , utxoHash = ""
--      }
