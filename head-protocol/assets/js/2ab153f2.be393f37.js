"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5708],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Layer 2 Solutions",c={unversionedId:"layer-two",id:"layer-two",title:"Layer 2 Solutions",description:"What does layer 2 mean? What types of layer 2 solutions exist?",source:"@site/core-concepts/layer-two.md",sourceDirName:".",slug:"/layer-two",permalink:"/head-protocol/core-concepts/layer-two",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/layer-two.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/head-protocol/core-concepts/"},next:{title:"API Behavior",permalink:"/head-protocol/core-concepts/behavior"}},p={},u=[{value:"State Channels",id:"state-channels",level:2},{value:"Examples",id:"examples",level:4},{value:"Side Chains",id:"side-chains",level:2},{value:"Examples",id:"examples-1",level:4},{value:"Rollups",id:"rollups",level:2},{value:"Examples",id:"examples-2",level:4}],h={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"layer-2-solutions"},"Layer 2 Solutions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"What does layer 2 mean? What types of layer 2 solutions exist? ")),(0,a.kt)("p",null,"In the blockchain industry, we talk about ",(0,a.kt)("strong",{parentName:"p"},"layer 2")," solution whenever we refer to a solution that overlays an existing protocol (the layer 1) to provide either additional functionality or performance benefits over the underlying protocol. In essence, they are generic purpose solutions built on top of a protocol to enable other applications. They provide a framework for developing decentralized applications with generally different trade-offs than the underlying layer 1 protocol."),(0,a.kt)("h2",{id:"state-channels"},"State Channels"),(0,a.kt)("p",null,"The Hydra head protocol is a layer 2 solution which belongs to the family of ",(0,a.kt)("strong",{parentName:"p"},"state channels"),", which is itself a descendant of ",(0,a.kt)("strong",{parentName:"p"},"payment channels"),". A payment channel allows for two or more parties to exchange funds according to a given off-chain protocol without having to commit all transactions to the underlying blockchain. They are historically one of the first kind of layer 2 solution to arise as an answer to scalability issues of permission-less ledgers (and consequently, they're also the most studied and known kind of solutions)."),(0,a.kt)("p",null,"State-channels extend the traditional concept of payment channels to support smart-contracts over off-chain channels. In such a setup, one or more parties are no longer limited to pure transactional payments, but they can execute full-blown scripts validations to handle complex logic, off-chain, only to later commit the result back to the layer 1. "),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lightning (Bitcoin);"),(0,a.kt)("li",{parentName:"ul"},"Perun (Ethereum, Polkadot, Cosmos);"),(0,a.kt)("li",{parentName:"ul"},"Sprites (Ethereum);"),(0,a.kt)("li",{parentName:"ul"},"And of course, our favorite: ",(0,a.kt)("strong",{parentName:"li"},"Hydra: Head")," (Cardano)!")),(0,a.kt)("h2",{id:"side-chains"},"Side Chains"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Side chains")," allow for transferring assets from a layer 1 protocol to a new chain with its own set of consensus rules. Usually, a side-chain provides either a simpler or more efficient consensus mechanism which allows for more scalability or which ease the implementation of new functionality harder to get adopted on the layer 1. Often, this comes at the price of decentralization or security, since side-chains are typically involving only few actors or committees at their root. "),(0,a.kt)("p",null,'Side chains are however "proper chains", with blocks produced by validator and usually, smart-contract capabilities. Therefore, unlike state-channels, they provide data-availability and often ways to participate into the validation and observation of the chain (in a state-channel, only participants of the channel really have a reliable view of what is going on in the channel). Entering a side-chain is usually done by burning or locking assets on the layer 1, to receive an equivalent counterpart on the side-chain network. '),(0,a.kt)("h4",{id:"examples-1"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Liquid Network (Bitcoin);"),(0,a.kt)("li",{parentName:"ul"},"RSK (Bitcoin);"),(0,a.kt)("li",{parentName:"ul"},"Polygon (Ethereum);"),(0,a.kt)("li",{parentName:"ul"},"Milkomeda (Cardano).")),(0,a.kt)("h2",{id:"rollups"},"Rollups"),(0,a.kt)("p",null,"Another major type of layer 2 solution is ",(0,a.kt)("strong",{parentName:"p"},"Rollups"),". They provide a way for moving transaction execution off-chain only to keep a much more compact representation of the execution on the layer 1. Rollups are typically driven by a central actor offering high availability and high computational capability off-chain while regularly leaving verifiable breadcrumbs on-chain (the rollups)."),(0,a.kt)("p",null,"In general, rollups come in two flavour: ",(0,a.kt)("strong",{parentName:"p"},"optimistic")," or ",(0,a.kt)("strong",{parentName:"p"},"zero-knowledge"),". In the former, rollups are posted on-chain optimistically and verification are done ",(0,a.kt)("em",{parentName:"p"},"a posteriori")," by independent validators. In case of disagreement, the dispute is resolved on-chain and the rollup publisher endure financial consequences. In zero-knowledge approaches, a succinct proof of execution is calculated off-chain, published alongside the rollup and controlled by on-chain validators (which thus enforce the rightful execution of the rollup). "),(0,a.kt)("h4",{id:"examples-2"},"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arbitrum (Ethereum);"),(0,a.kt)("li",{parentName:"ul"},"Optimism (Ethereum);"),(0,a.kt)("li",{parentName:"ul"},"Hermez (Ethereum);"),(0,a.kt)("li",{parentName:"ul"},"ZKSync (Ethereum).")))}d.isMDXComponent=!0}}]);