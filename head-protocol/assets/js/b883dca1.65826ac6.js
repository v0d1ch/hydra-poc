"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5889],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},307:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(5360),c=n(3725),s=["components"],l={sidebar_label:"Topologies",sidebar_position:1},d="Topologies",p={unversionedId:"index",id:"index",title:"Topologies",description:"Hydra Head is a well-defined Layer 2 consensus protocol as explained in the Core Concepts page, but this is not the end of the story and does not really define how to use this protocol and what topologies are possible. While example use cases should help in understanding the former, the topologies below explain some of the various ways in which Hydra Nodes and Hydra Heads could be deployed and interconnected.",source:"@site/topologies/index.md",sourceDirName:".",slug:"/",permalink:"/head-protocol/topologies/",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/topologies/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Topologies",sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Basic Hydra Head",permalink:"/head-protocol/topologies/basic/"}},u={},m=[],f={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topologies"},"Topologies"),(0,a.kt)("p",null,"Hydra Head is a well-defined Layer 2 consensus protocol as explained in the ",(0,a.kt)("a",{parentName:"p",href:"/core-concepts"},"Core Concepts")," page, but this is not the end of the story and does not really define ",(0,a.kt)("em",{parentName:"p"},"how to use")," this protocol and what ",(0,a.kt)("em",{parentName:"p"},"topologies")," are possible. While ",(0,a.kt)("a",{parentName:"p",href:"../use-cases"},"example use cases")," should help in understanding the former, the ",(0,a.kt)("em",{parentName:"p"},"topologies")," below explain some of the various ways in which Hydra Nodes and Hydra Heads could be deployed and interconnected."),(0,a.kt)("p",null,'As more users implement solutions on top of Hydra, this "catalog" of topologies shall expand to help newcomers find and build the deployment model that suits best their use case.'),(0,a.kt)(i.Z,{items:(0,c.Vq)().filter((function(e){return"index"!=e.docId})),mdxType:"DocCardList"}))}h.isMDXComponent=!0},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),o=n(9960),a=n(3725),i=n(6010),c="cardContainer_woeA",s="cardContainerLink_iOSj",l="cardTitle_pNjP",d="cardDescription_qC_k",p=n(3919),u=n(5999);function m(e){var t=e.href,n=e.children,a=(0,i.Z)("card margin-bottom--lg padding--lg",c,t&&s);return t?r.createElement(o.Z,{href:t,className:a},n):r.createElement("div",{className:a},n)}function f(e){var t=e.href,n=e.icon,o=e.title,a=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",l),title:o},n," ",o),r.createElement("div",{className:(0,i.Z)("text--truncate",d),title:a},a))}function h(e){var t=e.item,n=(0,a.Wl)(t);return r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function y(e){var t,n=e.item,o=(0,p.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function g(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(g,{item:e}))})))}}}]);