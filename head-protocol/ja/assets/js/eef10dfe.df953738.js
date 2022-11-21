"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[7174],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1026:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:3},s="API Behavior",l={unversionedId:"behavior",id:"behavior",title:"API Behavior",description:"This page documents the behavior of a hydra-node at the API layer. That is, how the system behaves given ClientInputs and what ServerOutputs are produced in response to it. See also the API reference for more details about individual API messages.",source:"@site/core-concepts/behavior.md",sourceDirName:".",slug:"/behavior",permalink:"/head-protocol/ja/core-concepts/behavior",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/core-concepts/behavior.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"\u30ec\u30a4\u30e4\u30fc2\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3",permalink:"/head-protocol/ja/core-concepts/layer-two"},next:{title:"Hydra\u30cd\u30c3\u30c8\u30ef\u30fc\u30ad\u30f3\u30b0",permalink:"/head-protocol/ja/core-concepts/networking"}},c={},u=[{value:"Replay of past server outputs",id:"replay-of-past-server-outputs",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-behavior"},"API Behavior"),(0,o.kt)("p",null,"This page documents the behavior of a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," at the API layer. That is, how the system behaves given ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/haddock/hydra-node/Hydra-API-ClientInput.html#t:ClientInput"},"ClientInputs")," and what ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/haddock/hydra-node/Hydra-API-ServerOutput.html#t:ServerOutput"},"ServerOutputs")," are produced in response to it. See also the ",(0,o.kt)("a",{parentName:"p",href:"https://hydra.family/head-protocol/api-reference/"},"API reference")," for more details about individual API messages."),(0,o.kt)("p",null,"The formalism uses ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/UML_state_machine"},"UML statechart")," language where transitions are labeled: ",(0,o.kt)("inlineCode",{parentName:"p"},"input [condition] / output"),". When two outputs (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),") are expected we write ",(0,o.kt)("inlineCode",{parentName:"p"},"A,B"),", while ",(0,o.kt)("inlineCode",{parentName:"p"},"{A,B}")," denotes mutual exclusiveness of outputs."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.plantuml.com/plantuml/png/ZP6zJWCn383tF8Ldr8gz0oggG7G112UMgaEANMefSKw92zSYtftaKbrBOM3pp_UTVSuqgOswzSvi60d8jxe3fFGQkLKEOipYOWdZyHNCXPMjuptB6qpw52xXYIpkcZ0BthCQymFwBLKiQpLGmZCZAxSircNsUXLYGU_8uZoLx4_yeIM1oS2Lr9Y-U6pUqqVJPUIpwLwoYwEccylx8RhfMew4NwDdiMtQ19q5MNFqXFKpPSZCXKG8aneCmshPc4Fx51oG84f92GUe_AALiDN7a1Al76LweUm9MfiI9R1hfGYOTST2o-EHgsRCcJvsjDQJmzNsi45VvdtPinAL_z-3Jabmwzqt",alt:null})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.plantuml.com/plantuml/uml/ZP6zJWCn383tF8Ldr8gz0oggG7G112UMgaEANMefSKw92zSYtftaKbrBOM3pp_UTVSuqgOswzSvi60d8jxe3fFGQkLKEOipYOWdZyHNCXPMjuptB6qpw52xXYIpkcZ0BthCQymFwBLKiQpLGmZCZAxSircNsUXLYGU_8uZoLx4_yeIM1oS2Lr9Y-U6pUqqVJPUIpwLwoYwEccylx8RhfMew4NwDdiMtQ19q5MNFqXFKpPSZCXKG8aneCmshPc4Fx51oG84f92GUe_AALiDN7a1Al76LweUm9MfiI9R1hfGYOTST2o-EHgsRCcJvsjDQJmzNsi45VvdtPinAL_z-3Jabmwzqt"},"Edit this diagram")),(0,o.kt)("p",null,"Not pictured is the ",(0,o.kt)("inlineCode",{parentName:"p"},"CommandFailed")," output, which is implicit emitted whenever an input is used when no transition below applies. Also non-state-changing or life-cycle relevant inputs like ",(0,o.kt)("inlineCode",{parentName:"p"},"GetUTxO")," are not mentioned, as well as outputs like ",(0,o.kt)("inlineCode",{parentName:"p"},"Greetings"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"InvalidInput"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerConnected"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerDisconnected")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"GetUTxOResponse"),"."),(0,o.kt)("p",null,"A special case is the ",(0,o.kt)("inlineCode",{parentName:"p"},"RolledBack")," output. This means that the chain rolled back, and it includes timestamp and a counter (same as other API client messages) so it is easier to construct the timeline."),(0,o.kt)("h2",{id:"replay-of-past-server-outputs"},"Replay of past server outputs"),(0,o.kt)("p",null,"When a ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," restarts, it will load it's history from persistence and replay previous server outputs to enable clients to re-establish their state upon re-connection. If that happens, obviously some of these outputs are not relevant anymore. One example of this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerConnected")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PeerDisconnected"),". To make it possible to determine the end of replayed history, client applications can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Greetings"),", which will be emitted on every ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-node")," start. See the ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra-tui")," example client for how this is handled."))}h.isMDXComponent=!0}}]);