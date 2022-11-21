"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7698],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,u=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(u,i(i({ref:t},h),{},{components:a})):n.createElement(u,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6473:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={},s="Handling Rollbacks",c={unversionedId:"rollbacks/index",id:"rollbacks/index",title:"Handling Rollbacks",description:"Rollbacks are an integral part of the behaviour of the Cardano chain: Any application built on top of Cardano and synchronizing its behaviour with the chain must be prepared to occasionally observe such rollbacks and Hydra is no exception.",source:"@site/core-concepts/rollbacks/index.md",sourceDirName:"rollbacks",slug:"/rollbacks/",permalink:"/head-protocol/core-concepts/rollbacks/",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/rollbacks/index.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Hydra Networking",permalink:"/head-protocol/core-concepts/networking"},next:{title:"Frequently Asked Questions",permalink:"/head-protocol/core-concepts/faq/"}},h={},d=[{value:"What are rollbacks really?",id:"what-are-rollbacks-really",level:2},{value:"How do they impact Hydra Node?",id:"how-do-they-impact-hydra-node",level:2},{value:"How do we handle them?",id:"how-do-we-handle-them",level:2}],p={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"handling-rollbacks"},"Handling Rollbacks"),(0,r.kt)("p",null,"Rollbacks are an integral part of the behaviour of the Cardano chain: Any application built on top of Cardano and synchronizing its behaviour with the chain must be prepared to occasionally observe such ",(0,r.kt)("em",{parentName:"p"},"rollbacks")," and Hydra is no exception."),(0,r.kt)("p",null,"This short document explains what rollbacks are and where they come from, and how Hydra Heads handle them."),(0,r.kt)("h2",{id:"what-are-rollbacks-really"},"What are rollbacks really?"),(0,r.kt)("p",null,"Rollbacks happen on the Cardano chain, or any other truly decentralised blockchain for that matter, because it is essentially  ",(0,r.kt)("em",{parentName:"p"},"asynchronous")," in nature, eg. each node has its own view of the state of chain which it updates by communicating with other nodes, exchanging messages about known blocks, and this process takes time. New blocks are produced, which may be valid or invalid, and the state of the chain is ",(0,r.kt)("em",{parentName:"p"},"eventually consistent"),", all nodes agreeing on the state of the chain only after some number of blocks have been processed."),(0,r.kt)("p",null,"Actually, ",(0,r.kt)("em",{parentName:"p"},"Rollbacks")," is a misnomer and we should rather talk about ",(0,r.kt)("em",{parentName:"p"},"forks"),". Let's see what this means from the perspective of three nodes running a Hydra Head. The following picture represents each node's view of the Layer 1 chain."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(3350).Z,width:"4939",height:"3239"})),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"immutable part")," is guaranteed to be identical on all nodes, being ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," blocks in the past from current ",(0,r.kt)("em",{parentName:"p"},"tip")," (on the mainnet ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," is 2160). Here, node 2 receives a new block that's identical node 1 but node 3 receives a different block. Eventually, as node 3's chain is shorter than the other's it will be superseded by a longer one hence ",(0,r.kt)("em",{parentName:"p"},"rolled back"),"."),(0,r.kt)("p",null,"What happens for the node's ",(0,r.kt)("em",{parentName:"p"},"Direct Chain")," observer is detailed in the following picture:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(4273).Z,width:"4939",height:"3239"})),(0,r.kt)("p",null,"When new blocks are available, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChainSync")," client receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"RollForward")," message with each new block. When a fork happens, it will first receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"RollBackward")," message with a ",(0,r.kt)("em",{parentName:"p"},"point"),", which identifies the slot and block hash at which point the chain has been rolled back (abstracted as a single number in the figure), then resume receiving new blocks through ",(0,r.kt)("inlineCode",{parentName:"p"},"RollForward")," messages."),(0,r.kt)("h2",{id:"how-do-they-impact-hydra-node"},"How do they impact Hydra Node?"),(0,r.kt)("p",null,"Rollbacks are problematic because, when a transaction is observed on-chain, it potentially changes the state of the Head, first by ",(0,r.kt)("em",{parentName:"p"},"Initialising")," it, then collecting the ",(0,r.kt)("em",{parentName:"p"},"Commits"),", opening the head through the ",(0,r.kt)("em",{parentName:"p"},"CollectCom")," transaction and ultimately ",(0,r.kt)("em",{parentName:"p"},"Closing")," it and ",(0,r.kt)("em",{parentName:"p"},"Fanoutting")," the Head's final UTxO."),(0,r.kt)("p",null,"The following picture illustrates the issue of a rollback leading to potentially conflicting ",(0,r.kt)("inlineCode",{parentName:"p"},"Commit"),"  transactions:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(8666).Z,width:"4939",height:"3239"})),(0,r.kt)("p",null,"If the Head does not properly handle the rollback, then it risks being in an inconsistent state w.r.t other nodes taking part in the Head. It is thus important that a rollback observed at the level of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Direct")," chain component be propagated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"HeadLogic")," in order for the latter to reset its state to be consistent with whatever happened on layer 1."),(0,r.kt)("p",null,"The consequences of a rollback on the Head's state are different depending at which point the Head is rolled back:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If the rollback happens before or after the Head is open, eg. before the ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectCom")," transaction or after the ",(0,r.kt)("inlineCode",{parentName:"li"},"Close"),", then things are relatively straightforward: We can just reset the Head's state to the point it was before the rolled back transaction was observed,"),(0,r.kt)("li",{parentName:"ol"},"If it happens while the Head is open, eg. the ",(0,r.kt)("inlineCode",{parentName:"li"},"CollectCom")," transaction is rolled back, it's much more problematic because the node has already started exchanging messages with its peers and its state no longer depends only on the chain.")),(0,r.kt)("h2",{id:"how-do-we-handle-them"},"How do we handle them?"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udee0 Hydra currently handles rollback gracefully in simple cases, eg. case 1 above, and does not try to do anything clever when a ",(0,r.kt)("inlineCode",{parentName:"p"},"CollectCom")," happens which can lead easily to a Head becoming stale: Because one node is desynchronised from other nodes (it has observed a rollback of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Collectcom")," transaction, reset its state before that, thus lost track of everything that happened while the Head was open), it will be necessary to close the head."))),(0,r.kt)("p",null,"Rollbacks are handled in a very simple way in the Head, as the following sequence diagram shows:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(7639).Z,width:"4939",height:"3239"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a relevant transaction is observed, eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"OnInit")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"OnCommit")," in the case depicted above, it induces a new ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadState")," which is linked to the ",(0,r.kt)("em",{parentName:"li"},"previous")," state,"),(0,r.kt)("li",{parentName:"ul"},"When a rollback is observed on-chain, the ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadLogic")," is notified with ",(0,r.kt)("inlineCode",{parentName:"li"},"Rollback")," event telling the number of steps that need to be rolled-back: The ",(0,r.kt)("inlineCode",{parentName:"li"},"HeadLogic")," layer does not need to care about the details of what a ",(0,r.kt)("inlineCode",{parentName:"li"},"Point Block"),' is on-chain, it only stores a sequence of state that can be easily "rolled back" to a previous state.')))}m.isMDXComponent=!0},3350:function(e,t,a){t.Z=a.p+"assets/images/rollbacks-1-6f82628f5596e94e392e900079056ec0.jpg"},4273:function(e,t,a){t.Z=a.p+"assets/images/rollbacks-2-7ecc9b20cb887261db87180040fe79ba.jpg"},8666:function(e,t,a){t.Z=a.p+"assets/images/rollbacks-3-9b053577585720457d34d61f6243a5fe.jpg"},7639:function(e,t,a){t.Z=a.p+"assets/images/rollbacks-4-fb35e9daf9f01e85a97b55a465479cf4.jpg"}}]);