{ compiler ? "ghc8107"

, system ? builtins.currentSystem

, haskellNix ? import
    (builtins.fetchTarball
      "https://github.com/input-output-hk/haskell.nix/archive/0.0.64.tar.gz")
    { }

, iohkNix ? import
    (builtins.fetchTarball
      "https://github.com/input-output-hk/iohk-nix/archive/d31417fe8c8fbfb697b3ad4c498e17eb046874b9.tar.gz")
    { }

  # NOTE: use the 'repo' branch of CHaP which contains the index
, CHaP ? (builtins.fetchTarball
    "https://github.com/input-output-hk/cardano-haskell-packages/archive/ceaae5355c81453d7cb092acadec3441bf57ed11.tar.gz")

  # nixpkgs-unstable as also used by cardano-node, cardano-ledger et al
, nixpkgsSrc ? haskellNix.sources.nixpkgs-unstable
}:
let
  pkgs = import nixpkgsSrc (haskellNix.nixpkgsArgs // {
    overlays =
      # Haskell.nix (https://github.com/input-output-hk/haskell.nix)
      haskellNix.overlays
        # needed for cardano-crypto-class which uses a patched libsodium
        ++ iohkNix.overlays.crypto;
  });

  hsPkgs = pkgs.haskell-nix.project {
    src = pkgs.haskell-nix.haskellLib.cleanGit {
      name = "hydra";
      src = ./.;
    };
    projectFileName = "cabal.project";
    compiler-nix-name = compiler;

    inputMap = { "https://input-output-hk.github.io/cardano-haskell-packages" = CHaP; };

    modules = [
      # Set libsodium-vrf on cardano-crypto-{praos,class}. Otherwise they depend
      # on libsodium, which lacks the vrf functionality.
      ({ pkgs, lib, ... }:
        # Override libsodium with local 'pkgs' to make sure it's using
        # overriden 'pkgs', e.g. musl64 packages
        {
          packages.cardano-crypto-class.components.library.pkgconfig = lib.mkForce [ [ pkgs.libsodium-vrf pkgs.secp256k1 ] ];
          packages.cardano-crypto-praos.components.library.pkgconfig = lib.mkForce [ [ pkgs.libsodium-vrf ] ];
        }
      )
    ];
  };

  # Add cardano-node & cardano-cli for our shell environments.
  # This is stable as it doesn't mix dependencies with this code-base; the
  # fetched binaries are the "standard" builds that people test. This should be
  # fast as it mostly fetches Hydra (CI) caches without building much.
  cardano-node = import
    (pkgs.fetchgit {
      url = "https://github.com/input-output-hk/cardano-node";
      rev = "1.35.3";
      sha256 = "020fwimsm24yblr1fmnwx240wj8r3x715p89cpjgnnd8axwf32p0";
    })
    { };
in
{
  inherit compiler pkgs hsPkgs cardano-node;
}
