"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[4753],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2353:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={},l="Test Results for hydra-tui",u={unversionedId:"tests/hydra-tui/hspec-results",id:"tests/hydra-tui/hspec-results",title:"Test Results for hydra-tui",description:"Hydra.TUI.Options",source:"@site/benchmarks/tests/hydra-tui/hspec-results.md",sourceDirName:"tests/hydra-tui",slug:"/tests/hydra-tui/hspec-results",permalink:"/head-protocol/benchmarks/tests/hydra-tui/hspec-results",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/benchmarks/tests/hydra-tui/hspec-results.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Test Results for hydra-node",permalink:"/head-protocol/benchmarks/tests/hydra-node/hspec-results"},next:{title:"Test Results for plutus-cbor",permalink:"/head-protocol/benchmarks/tests/plutus-cbor/hspec-results"}},c={},p=[{value:"Hydra.TUI.Options",id:"hydratuioptions",level:2},{value:"Hydra.TUI",id:"hydratui",level:2},{value:"text rendering errors",id:"text-rendering-errors",level:3},{value:"text rendering tests",id:"text-rendering-tests",level:3},{value:"end-to-end smoke tests",id:"end-to-end-smoke-tests",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-results-for-hydra-tui"},"Test Results for hydra-tui"),(0,s.kt)("h2",{id:"hydratuioptions"},"Hydra.TUI.Options"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"parses --connect option"),(0,s.kt)("li",{parentName:"ul"},"parses --network-id option"),(0,s.kt)("li",{parentName:"ul"},"parses --cardano-signing-key option"),(0,s.kt)("li",{parentName:"ul"},"parses --node-socket option")),(0,s.kt)("h2",{id:"hydratui"},"Hydra.TUI"),(0,s.kt)("h3",{id:"text-rendering-errors"},"text rendering errors"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"should show not enough fuel message and suggestion")),(0,s.kt)("h3",{id:"text-rendering-tests"},"text rendering tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"should format time with whole values for every unit, not total values")),(0,s.kt)("h3",{id:"end-to-end-smoke-tests"},"end-to-end smoke tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"starts & renders"),(0,s.kt)("li",{parentName:"ul"},"display feedback long enough"),(0,s.kt)("li",{parentName:"ul"},"supports the init & abort Head life cycle"),(0,s.kt)("li",{parentName:"ul"},"supports the full Head life cycle"),(0,s.kt)("li",{parentName:"ul"},"doesn't allow multiple initializations")))}f.isMDXComponent=!0}}]);