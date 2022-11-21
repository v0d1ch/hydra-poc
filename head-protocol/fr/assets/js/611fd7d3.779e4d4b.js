"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[6816],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7891:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_label:"Basic Hydra Head",sidebar_position:2},s="Basic Hydra Head",d={unversionedId:"basic/index",id:"basic/index",title:"Basic Hydra Head",description:"This document is a work in progress",source:"@site/topologies/basic/index.md",sourceDirName:"basic",slug:"/basic/",permalink:"/head-protocol/fr/topologies/basic/",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/topologies/basic/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Basic Hydra Head",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Topologies",permalink:"/head-protocol/fr/topologies/"},next:{title:"Delegated Head",permalink:"/head-protocol/fr/topologies/delegated-head/"}},l={},p=[],u={toc:p};function h(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-hydra-head"},"Basic Hydra Head"),(0,o.kt)("p",null,"\ud83d\udee0\ufe0f This document is a work in progress"),(0,o.kt)("p",null,"This document explains the deployment architecture of a basic Hydra Head. It\nserves as a reference to other topologies discussed in this chapter and is\nschematically depicted below:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(2914).Z,alt:"Basic Hydra Head",height:400})),(0,o.kt)("p",null,"The basic setup of a Hydra Head consists of several ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),"s, each connected to the Cardano network through a (not pictured) ",(0,o.kt)("inlineCode",{parentName:"p"},"cardano-node"),". A Hydra client (like the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-tui"),") would connect, usually via a local connection, to a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," to open a Hydra Head using an off-chain network. The picture shows two Hydra Heads (blue and green) opened between two distinct sets of ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),"s, where the lines indicate Hydra network connections and circles represent a Hydra Head state and credentials - summarized by a socalled ",(0,o.kt)("em",{parentName:"p"},"Hydra Head Party"),". "),(0,o.kt)("p",null,"Not shown in the picture are multiple, logical Hydra Heads being open in the same ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node"),", which is very likely something we will support eventually and allow for re-using network connections between ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," processes."),(0,o.kt)("p",null,"Each head, the blue or green one, can progress independently and requires a signature of all the respective ",(0,o.kt)("em",{parentName:"p"},"Hydra Parties")," of each head. That is, 2 signatures in the green Head and 4 signatures in the blue Head."))}h.isMDXComponent=!0},2914:function(e,t,n){t.Z=n.p+"assets/images/basic-hydra-head-31e4fded6123899b955e2ec45ad63e78.jpg"}}]);