module Hydra.NodeSpec where

import Hydra.Prelude
import Test.Hydra.Prelude

import Cardano.Crypto.DSIGN (SigDSIGN (SigMockDSIGN))
import Hydra.Chain (Chain (Chain), OnChainTx (..))
import Hydra.ClientInput (ClientInput (..))
import Hydra.HeadLogic (
  Effect,
  Environment (Environment),
  Event (..),
  HeadState (..),
  LogicError,
  SnapshotStrategy (..),
 )
import Hydra.Ledger (Party, Signed (UnsafeSigned), SigningKey, Tx, deriveParty)
import Hydra.Ledger.Simple (SimpleTx (..), simpleLedger, utxoRef, utxoRefs)
import Hydra.Logging (nullTracer)
import Hydra.Network (Network (..))
import Hydra.Network.Message (Message (..))
import qualified Hydra.Network.Message as Msg
import Hydra.Node (EventQueue (EventQueue, putEvent), HydraNode (..), createEventQueue, createHydraHead, isEmpty, processNextEvent, stepHydraNode)

spec :: Spec
spec =
  describe "Hydra Node" $ do
    it "throws an error given next snapshot is acked before current snapshot finishes" $ do
      pendingWith "Fix protocol error on out of order snapshot signing"
      -- TODO(SN): this is weird now
      node <- createHydraNode 20 [30, 10] SnapshotAfterEachTx []
      feedEvents node (prefix <> reducedEvents)
        >>= (`shouldSatisfy` isRight)

    it "emits only one ReqSn as leader even after multiple ReqTxs" $ do
      -- NOTE(SN): Sequence of parties in OnInitTx of 'prefix' is relevant, so
      -- 10 is the (initial) snapshot leader
      let tx1 = SimpleTx{txSimpleId = 1, txInputs = utxoRefs [2], txOutputs = utxoRefs [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
          tx2 = SimpleTx{txSimpleId = 2, txInputs = utxoRefs [1, 3, 4, 5, 6, 8, 9, 10, 11, 13], txOutputs = utxoRefs [14, 15]}
          tx3 = SimpleTx{txSimpleId = 3, txInputs = utxoRefs [7, 14], txOutputs = utxoRefs [16, 17, 18, 19, 20, 21, 22, 23]}
          events =
            prefix
              <> [ NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = tx1}}
                 , NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = tx2}}
                 , NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = tx3}}
                 ]
      node <- createHydraNode 10 [20, 30] SnapshotAfterEachTx events
      (node', getNetworkMessages) <- recordNetwork node
      runToCompletion node'
      getNetworkMessages `shouldReturn` [ReqSn 10 1 [tx1, tx2, tx3]]

oneReqSn :: [Message tx] -> Bool
oneReqSn = (== 1) . length . filter isReqSn
 where
  isReqSn = \case
    ReqSn{} -> True
    _ -> False

prefix :: [Event SimpleTx]
prefix =
  [ NetworkEvent{message = Connected{Msg.party = 30}}
  , NetworkEvent{message = Connected{Msg.party = 10}}
  , OnChainEvent
      { onChainTx = OnInitTx 10 [10, 20, 30]
      }
  , ClientEvent{clientInput = Commit (utxoRef 2)}
  , OnChainEvent{onChainTx = OnCommitTx 30 (utxoRef 3)}
  , OnChainEvent{onChainTx = OnCommitTx 20 (utxoRef 2)}
  , OnChainEvent{onChainTx = OnCommitTx 10 (utxoRef 1)}
  , OnChainEvent{onChainTx = OnCollectComTx}
  ]

reducedEvents :: [Event SimpleTx]
reducedEvents =
  [ NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = SimpleTx{txSimpleId = 1, txInputs = utxoRefs [2], txOutputs = utxoRefs [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}}}
  , NetworkEvent{message = ReqSn{Msg.party = 10, Msg.snapshotNumber = 1, Msg.transactions = [SimpleTx{txSimpleId = 1, txInputs = utxoRefs [2], txOutputs = utxoRefs [4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}]}}
  , NetworkEvent{message = AckSn{Msg.party = 10, signed = UnsafeSigned (SigMockDSIGN "b02393e9d7ded6c0" 10), Msg.snapshotNumber = 1}}
  , NetworkEvent{message = AckSn{Msg.party = 20, signed = UnsafeSigned (SigMockDSIGN "b02393e9d7ded6c0" 20), Msg.snapshotNumber = 1}}
  , NetworkEvent{message = AckSn{Msg.party = 30, signed = UnsafeSigned (SigMockDSIGN "b02393e9d7ded6c0" 30), Msg.snapshotNumber = 1}}
  , NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = SimpleTx{txSimpleId = 2, txInputs = utxoRefs [1, 3, 4, 5, 6, 8, 9, 10, 11, 13], txOutputs = utxoRefs [14, 15]}}}
  , NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = SimpleTx{txSimpleId = 3, txInputs = utxoRefs [7, 14], txOutputs = utxoRefs [16, 17, 18, 19, 20, 21, 22, 23]}}}
  , NetworkEvent{message = ReqTx{Msg.party = 10, Msg.transaction = SimpleTx{txSimpleId = 4, txInputs = utxoRefs [17, 18, 20, 21], txOutputs = utxoRefs [24, 25]}}}
  , NetworkEvent{message = AckSn{Msg.party = 30, signed = UnsafeSigned (SigMockDSIGN "c1a00d60aabde67a" 30), Msg.snapshotNumber = 2}}
  , NetworkEvent{message = ReqSn{Msg.party = 10, Msg.snapshotNumber = 2, Msg.transactions = [SimpleTx{txSimpleId = 2, txInputs = utxoRefs [1, 3, 4, 5, 6, 8, 9, 10, 11, 13], txOutputs = utxoRefs [14, 15]}, SimpleTx{txSimpleId = 3, txInputs = utxoRefs [7, 14], txOutputs = utxoRefs [16, 17, 18, 19, 20, 21, 22, 23]}, SimpleTx{txSimpleId = 4, txInputs = utxoRefs [17, 18, 20, 21], txOutputs = utxoRefs [24, 25]}]}}
  , NetworkEvent{message = AckSn{Msg.party = 30, signed = UnsafeSigned (SigMockDSIGN "7d81c3daff6fe561" 30), Msg.snapshotNumber = 3}}
  ]

runToCompletion :: Tx tx => HydraNode tx IO -> IO ()
runToCompletion node@HydraNode{eq = EventQueue{isEmpty}} =
  unlessM isEmpty $
    stepHydraNode nullTracer node >> runToCompletion node

-- | Try to update state of a node with a list of 'Event'
-- Returns Nothing if no event results in an 'Error' out come, or 'Just FeedError' if there's
-- any error.
feedEvents ::
  ( Tx tx
  , Traversable t
  ) =>
  HydraNode tx IO ->
  t (Event tx) ->
  IO (Either (FeedError tx) [Effect tx])
feedEvents node eventsList =
  atomically $ do
    (errs, effs) <- partitionEithers . toList <$> traverse (processNextEvent node) eventsList
    if null errs
      then pure $ Right $ concat effs
      else pure $ Left $ FeedError errs

newtype FeedError tx = FeedError [LogicError tx]
  deriving stock (Eq, Show, Generic)

instance Tx tx => Exception (FeedError tx)

createHydraNode ::
  MonadSTM m =>
  SigningKey ->
  [Party] ->
  SnapshotStrategy ->
  [Event SimpleTx] ->
  m (HydraNode SimpleTx m)
createHydraNode signingKey otherParties snapshotStrategy events = do
  let env =
        Environment
          party
          signingKey
          otherParties
          snapshotStrategy
  eq@EventQueue{putEvent} <- createEventQueue
  forM_ events putEvent
  hh <- createHydraHead ReadyState simpleLedger
  pure $
    HydraNode
      { eq
      , hn = Network{broadcast = const $ pure ()}
      , hh
      , oc = Chain (const $ pure ())
      , sendOutput = const $ pure ()
      , env
      }
 where
  party = deriveParty signingKey

recordNetwork :: HydraNode tx IO -> IO (HydraNode tx IO, IO [Message tx])
recordNetwork node = do
  ref <- newIORef []
  pure (patchedNode ref, queryMsgs ref)
 where
  recordMsg ref x = atomicModifyIORef' ref $ \old -> (old <> [x], ())

  patchedNode ref = node{hn = Network{broadcast = recordMsg ref}}

  queryMsgs = readIORef
