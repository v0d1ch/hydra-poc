"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1861],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},d="Hydra development",l={unversionedId:"getting-started/developing-on-hydra",id:"getting-started/developing-on-hydra",title:"Hydra development",description:"This guide is meant to be a tutorial on how to develop an application on Hydra. It will assume the reader is already familiar with developing a DApp on Cardano and will focus on the differences between the two.",source:"@site/docs/getting-started/developing-on-hydra.md",sourceDirName:"getting-started",slug:"/getting-started/developing-on-hydra",permalink:"/head-protocol/ja/docs/getting-started/developing-on-hydra",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/docs/getting-started/developing-on-hydra.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528(Docker\u306a\u3057)",permalink:"/head-protocol/ja/docs/getting-started/demo/without-docker"},next:{title:"Glossary",permalink:"/head-protocol/ja/docs/getting-started/glossary"}},h={},c=[{value:"On-chain code",id:"on-chain-code",level:2},{value:"Off-chain code",id:"off-chain-code",level:2},{value:"Testing",id:"testing",level:2}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hydra-development"},"Hydra development"),(0,r.kt)("p",null,"This guide is meant to be a tutorial on how to develop an application on Hydra. It will assume the reader is already familiar with developing a DApp on Cardano and will focus on the differences between the two."),(0,r.kt)("h2",{id:"on-chain-code"},"On-chain code"),(0,r.kt)("p",null,"On-chain code will be exactly the same between Cardano and a hydra head. This is one of the main selling points of the hydra design (heads are also called isomorphic state channels) the only caveat being that (at the time of writing 07/22) Hydra Heads do not support validity ranges for transactions, the reason for this is there is currently no notion of time inside of a Hydra Head. See also this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/196"},"feature on the roadmap")),(0,r.kt)("h2",{id:"off-chain-code"},"Off-chain code"),(0,r.kt)("p",null,"Here is where the differences will begin. Currently, there is no ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/214"},"support for the PAB"),". When it comes to hydra, the luxaries of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," monad are not available, so the developer will not have access to similar tools."),(0,r.kt)("p",null,"Instead, transactions will need to be constructed and submitted to the Hydra Node in CBOR format. The interface to speak to a Hydra Node is a websocket, and developers must build applications that connect to these websockets in order to send and receive events through them."),(0,r.kt)("p",null,"The Hydra node will emit several commands through this websocket: the API is defined ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/api-reference"},"here"),".\nThe API reference is divided into two sections: Pub and Sub.\nThe first one describes the commands that a hydra node will accept, while the second one describes the events that will be emitted through the websocket."),(0,r.kt)("p",null,"An important event developers will be interested in is ",(0,r.kt)("inlineCode",{parentName:"p"},"SnaphotConfirmed"),". This event is emitted once all the participants of the head, have seen and signed a transaction submitted by one of them."),(0,r.kt)("p",null,"Once a transaction lands inside a snapshot, it is confirmed and there are no chances for it to be rolled back. This is an important distinction from L1: in that case, when a node sees a transaction there is still a chance that it might be rolled back (where the probability of this goes to 0 as more blocks are added), in the hydra world, the only way to make a snapshot is to have every single node in the head approve of it.\nThis is a synchronous process and requires all the head participants to be online all the time, the tradeoff is that there is no uncertainty or possibility of rollbacks. Once the Hydra Head has been open long enough that the opening transaction has become final, the moment the snapshot is confirmed there is no going back. See also this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/hydra/issues/185"},"feature on the roadmap"),"."),(0,r.kt)("p",null,"For the Pub side of the API, an important endpoint will be ",(0,r.kt)("inlineCode",{parentName:"p"},"NewTx"),". This is used to submit a transaction to the node. There are a couple of ways the transaction can be submitted, but a simple and familiar way should be to build the transaction built with ",(0,r.kt)("inlineCode",{parentName:"p"},"Cardano.Api"),", sign & serialize it to CBOR and submit that through the websocket."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Testing inside the hydra head can be quite different than for working with the PAB, the reason is you will not have access to EmulatorTrace or a pre-deployed playground environment to test."),(0,r.kt)("p",null,"Instead, it is possible to spin up a local cardano devnet, as well as and a cluster of hydra-nodes programmatically and run tests directly on that.\nThe hydra-cluster package is used within Hydra to do end-to-end tests on the protocol and hence is a nice blueprint for this setup. It's library component provides functions to spin up the required nodes, send API inputs and run assertions on the API output. Should you be missing something or need more configurability, feel free to open a feature request and we are happy to support you."),(0,r.kt)("p",null,"A couple of steps are required to set up the initial environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We want to spin up a local Cardano devnet comprised by a single block producer. This can be done with ",(0,r.kt)("inlineCode",{parentName:"p"},"withCardanoDevnet")," which takes the a working directory where blocks and logs will be stored, as well as a callback that gets access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"RunningNode"),". Note that the devnet will use credentials and configuration from the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-cluster/config/"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the callback, we can then spin up a cluster of hydra-nodes using ",(0,r.kt)("inlineCode",{parentName:"p"},"withHydraCluster"),". This will require the cardano-node socket, which can be obtained from the running node instance, and a set of cardano and hydra keys which can also be easily generated through helpers exposed by ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-cluster"),"."))),(0,r.kt)("p",null,"Let's walk through a simple example, with comments explaining the setup we just described.\nThis test will spin up a single cardano node, and a pair of hydra nodes (Alice and Bob)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- Tracer is an instance of https://hackage.haskell.org/package/contra-tracer and is used by several\n-- hydra components to deal with logs in a structured way\nit "spins up two hydra nodes" -> do\n  let tracer = stdoutTracer\n  -- Set a timeout for the whole test to fail\n  failAfter 60 $\n    -- We create a temporary directory to contain all the files required to spin up a node\n    withTempDir "cardano-node-tmp-dir" $ \\tmpDir -> do\n      -- This starts the cardano devnetas described above\n      withCardanoDevnet (contramap FromCardanoNode tracer) tmpDir $ \\(RunningNode{nodeSocket}) -> do\n        -- We generate pairs of cardano keys for alice and bob, this pair is a tuple of verification and signing key\n        aliceKeys <- generate genKeyPair\n        bobKeys <- generate genKeyPair\n\n        -- Here we generate signing keys for hydra used to sign transactions on layer 2 only\n        let aliceSk = generateSigningKey "alice"\n            bobSk = generateSigningKey "bob"\n\n        let cardanoKeys = [aliceKeys, bobKeys]\n            hydraKeys = [aliceSk, bobSk]\n\n        -- Hydra nodes take an id as one of their arguments, it is used to identify them with the head protocol\n        let firstNodeId = 0\n\n        -- This will spin up `n` hydra nodes, where `n` is the length of the cardanoKeys list\n        -- (which needs to match the length of hydraKeys)\n        withHydraCluster tracer tmpDir nodeSocket firstNodeId cardanoKeys hydraKeys $ \\nodes -> do\n          pure ()\n')),(0,r.kt)("p",null,"At this point, we are ready to start sending commands to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-cluster")," programmatically.\nHydra-cluster also exposes a ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," function, which takes an instance of the hydra-node and uses its websocket connection to send commands to the process.\nRemember that we must handle the whole head initialisation inside the test as well, so the first step will always be for one of the two nodes to ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," an ",(0,r.kt)("inlineCode",{parentName:"p"},"Init")," command to start the opening of the head."),(0,r.kt)("p",null,"Finally, hydra-node exposes several useful functions to wait for output from the hydra nodes themselves, both these functions have a timeout so they will function as assertions from a testing point of view; that is, if the node does not output what we expect within a certain timeframe, an error will be thrown and the whole test will fail."),(0,r.kt)("p",null,"Remember the nodes will always produce output in JSON format, so all the assertions will expect some form of ",(0,r.kt)("inlineCode",{parentName:"p"},"Aeson.Value")," to check against. For example, after we submit a transaction to the node, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"waitMatch")," to parse the ",(0,r.kt)("inlineCode",{parentName:"p"},"SnaphotConfirmed")," event and extract the transactions present in that snapshot to check if it contains the transaction we just sent."),(0,r.kt)("p",null,"For more details about the ",(0,r.kt)("inlineCode",{parentName:"p"},"hydra-cluster")," functions (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"waitFor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"waitMatch"),"), visit the ",(0,r.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/haddock/hydra-cluster/HydraNode.html"},"haddock")))}u.isMDXComponent=!0}}]);