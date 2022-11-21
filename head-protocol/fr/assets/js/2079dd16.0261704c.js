"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5830],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7294),i=r(9960),o=r(3725),a=r(6010),c="cardContainer_woeA",u="cardContainerLink_iOSj",s="cardTitle_pNjP",l="cardDescription_qC_k",d=r(3919),p=r(5999);function f(e){var t=e.href,r=e.children,o=(0,a.Z)("card margin-bottom--lg padding--lg",c,t&&u);return t?n.createElement(i.Z,{href:t,className:o},r):n.createElement("div",{className:o},r)}function m(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},r," ",i),n.createElement("div",{className:(0,a.Z)("text--truncate",l),title:o},o))}function g(e){var t=e.item,r=(0,o.Wl)(t);return n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function y(e){var t,r=e.item,i=(0,d.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(h,{item:e}))})))}},7270:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(5360),c=r(3725),u=["components"],s={sidebar_position:1},l="Prise en main",d={unversionedId:"getting-started/index",id:"getting-started/index",title:"Prise en main",description:"",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/head-protocol/fr/docs/getting-started/",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/head-protocol/fr/docs/getting-started/installation"}},p={},f=[],m={toc:f};function g(e){var t=e.components,r=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prise-en-main"},"Prise en main"),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);