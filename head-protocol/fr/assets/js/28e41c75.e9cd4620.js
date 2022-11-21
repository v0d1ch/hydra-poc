"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[1957],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},77:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={slug:17,title:"17. Use UDP protocol for Hydra networking\n",authors:[],tags:["Draft"]},l=void 0,u={permalink:"/head-protocol/fr/adr/17",source:"@site/adr/2022-03-28_017-udp-networking.md",title:"17. Use UDP protocol for Hydra networking\n",description:"Status",date:"2022-03-28T00:00:00.000Z",formattedDate:"28 mars 2022",tags:[{label:"Draft",permalink:"/head-protocol/fr/adr/tags/draft"}],readingTime:1.5,truncated:!1,authors:[],frontMatter:{slug:"17",title:"17. Use UDP protocol for Hydra networking\n",authors:[],tags:["Draft"]},prevItem:{title:"16. Keep Rejected ADRs\n",permalink:"/head-protocol/fr/adr/16"},nextItem:{title:"18. Single state in Hydra.Node.\n",permalink:"/head-protocol/fr/adr/18"}},c={authorsImageUrls:[]},d=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Details",id:"details",level:2},{value:"Consequences",id:"consequences",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"status"},"Status"),(0,a.kt)("p",null,"Draft"),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"Current Hydra networking layer is based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/input-output-hk/ouroboros-network/tree/master/ouroboros-network-framework"},"Ouroboros network framework")," networking stack which, among other features, provides:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An abstraction of stream-based duplex communication channels called a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/ouroboros-network/blob/6c15a8093bac34091ad96af2b8b0d1f7fe54b732/ouroboros-network-framework/src/Ouroboros/Network/Snocket.hs"},"Snocket"),","),(0,a.kt)("li",{parentName:"ol"},"A Multiplexing connection manager that manages a set of equivalent peers, maintains connectivity, and ensures diffusion of messages to/from all peers,"),(0,a.kt)("li",{parentName:"ol"},"Typed protocols for expressing the logic of message exchanges as a form of ",(0,a.kt)("em",{parentName:"li"},"state machine"),".")),(0,a.kt)("p",null,"While it's been working mostly fine so far, the abstractions and facilities provided by this network layer are not well suited for Hydra Head networking. Some of the questions and shortcomings are discussed in a document on ",(0,a.kt)("a",{parentName:"p",href:"/core-concepts/networking"},"Networking Requirements"),", and as the Hydra Head matures it seems time is ripe for overhauling current network implementation to better suite current and future Hydra Head networks needs."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hydra Head nodes communicate by sending messages to other nodes using ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/User_Datagram_Protocol"},"UDP")," protocol")),(0,a.kt)("h2",{id:"details"},"Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"How do nodes know each other?"),": This is unspecified by this ADR and left for future work, it is assumed that a Hydra node operator knows the IP:Port address of its peers before opening a Head with them"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Are messages encrypted?"),": This should probably be the case in order to ensure Heads' privacy but is also left for future work"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"How are nodes identified?"),": At the moment they are identified by their IP:Port pair. As we implement more of the setup process from section 4 of the Hydra Head paper, we should identify nodes by some public key(hash) and resolve the actual IP:Port pair using some other mechanism")),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node's ",(0,a.kt)("em",{parentName:"li"},"HeadLogic")," handles lost, duplicates, and out-of-order messages using ",(0,a.kt)("em",{parentName:"li"},"retry")," and ",(0,a.kt)("em",{parentName:"li"},"timeout")," mechanisms"),(0,a.kt)("li",{parentName:"ul"},"Messages should carry a unique identifier, eg. source node and index"),(0,a.kt)("li",{parentName:"ul"},"Protocol, eg. messages format, is documented")))}m.isMDXComponent=!0}}]);