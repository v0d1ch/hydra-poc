"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[9726],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7651:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:15,title:"15. Configuration Through an Admin API\n",authors:[],tags:["Draft"]},s=void 0,c={permalink:"/head-protocol/ja/adr/15",source:"@site/adr/2022-03-17_015-admin-api.md",title:"15. Configuration Through an Admin API\n",description:"Status",date:"2022-03-17T00:00:00.000Z",formattedDate:"2022\u5e743\u670817\u65e5",tags:[{label:"Draft",permalink:"/head-protocol/ja/adr/tags/draft"}],readingTime:3.105,truncated:!1,authors:[],frontMatter:{slug:"15",title:"15. Configuration Through an Admin API\n",authors:[],tags:["Draft"]},prevItem:{title:"14. Token usage in Hydra Scripts\n",permalink:"/head-protocol/ja/adr/14"},nextItem:{title:"16. Keep Rejected ADRs\n",permalink:"/head-protocol/ja/adr/16"}},u={authorsImageUrls:[]},p=[{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Q&amp;A",id:"qa",level:2},{value:"Consequences",id:"consequences",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"status"},"Status"),(0,i.kt)("p",null,"Draft"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hydra-node currently requires a whole slew of command-line arguments to configure properly its networking layer: ",(0,i.kt)("inlineCode",{parentName:"li"},"--peer")," to connect to each peer, ",(0,i.kt)("inlineCode",{parentName:"li"},"--cardano-verification-key")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--hydra-verification-key")," to identify the peer on the L1 and L2 respectively."),(0,i.kt)("li",{parentName:"ul"},"This poses significant challenges for operating a ",(0,i.kt)("em",{parentName:"li"},"cluster")," of Hydra nodes as one needs to know beforehand everything about the cluster, then pass a large number of arguments to some program or docker-compose file, before any node can be started",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is a pain that's been felt first-hand for benchmarking and testing purpose"))),(0,i.kt)("li",{parentName:"ul"},"Having static network configuration is probably not sustainable in the long run, even if we don't add any fancy multihead capabilities to the node, as it would make it significantly harder to have automated creation of Heads."),(0,i.kt)("li",{parentName:"ul"},"There's been an ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/pull/222"},"attempt")," at providing a file-based network configuration but this was deemed unconvincing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/299.pdf"},"Hydra paper (sec. 4, p. 13)")," explicitly assumes the existence of a ",(0,i.kt)("em",{parentName:"li"},"setup")," phase",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This ",(0,i.kt)("em",{parentName:"li"},"setup")," is currently left aside, e.g. exchange of keys for setting up multisig and identifying peers. The ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/abailly-iohk/admin-api-adr/hydra-node/exe/hydra-node/Main.hs#L41"},"hydra-node")," executable is statically configured and those things are assumed to be known beforehand")))),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hydra-node exposes an ",(0,i.kt)("em",{parentName:"li"},"Administrative API"),' to enable configuration of the Hydra network using "standard" tools',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"API is exposed as a set of HTTP endpoints on some port, consuming and producing JSON data,"),(0,i.kt)("li",{parentName:"ul"},"It is documented as part of the User's Guide for Hydra Head"))),(0,i.kt)("li",{parentName:"ul"},"This API provides ",(0,i.kt)("em",{parentName:"li"},"commands")," and ",(0,i.kt)("em",{parentName:"li"},"queries")," to:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add/remove ",(0,i.kt)("em",{parentName:"li"},"peers")," providing their address and keys,"),(0,i.kt)("li",{parentName:"ul"},"List currently known peers and their connectivity status,"),(0,i.kt)("li",{parentName:"ul"},"Start/stop/reset the Hydra network"))),(0,i.kt)("li",{parentName:"ul"},"This API is implemented by a ",(0,i.kt)("em",{parentName:"li"},"new component")," accessible through a network port separate from current ",(0,i.kt)("em",{parentName:"li"},"Client API"),", that ",(0,i.kt)("em",{parentName:"li"},"configures")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"Network")," component")),(0,i.kt)("p",null,"The following picture sketches the proposed architectural change:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Architecture change",src:n(1322).Z,width:"5351",height:"2989"})),(0,i.kt)("h2",{id:"qa"},"Q&A"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Why a REST interface?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This API is an interface over a specific ",(0,i.kt)("em",{parentName:"li"},"resource")," controlled by the Hydra node, namely its knowledge of other peers with which new ",(0,i.kt)("em",{parentName:"li"},"Head_s can be opened. As such a proper REST interface (_not")," RPC-in-disguise) seems to make sense here, rather than stream/event-based ",(0,i.kt)("a",{parentName:"li",href:"/adr/3"},"duplex communication channels")),(0,i.kt)("li",{parentName:"ul"},"We can easily extend such an API with WebSockets to provide notifications (e.g. peers connectivity, setup events...)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Why a separate component?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We could imagine extending the existing ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/hydra/blob/9129c7c013fe2cdc77db048a54981e1ace0843b8/hydra-node/src/Hydra/API/Server.hs"},"APIServer")," interface with new messages related to this network configuration, however this seems to conflate different responsibilities in a single place: Configuring and managing the Hydra node itself, and configuring, managing, and interacting with the Head itself"),(0,i.kt)("li",{parentName:"ul"},'"Physical" separation of endpoints makes it easier to secure a very sensitive part of the node, namely its administration, e.g by ensuring this can only be accessed through a specific network interface, without relying on application level authentication mechanisms')))),(0,i.kt)("h2",{id:"consequences"},"Consequences"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's easy to deploy Hydra nodes with some standard configuration, then dynamically configure them, thus reducing the hassle of defining and configuring the Hydra network"),(0,i.kt)("li",{parentName:"ul"},"It makes it possible to ",(0,i.kt)("em",{parentName:"li"},"reconfigure")," a Hydra node with different peers"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("em",{parentName:"li"},"Client API")," should reflect the state of the network and disable ",(0,i.kt)("inlineCode",{parentName:"li"},"Init"),"ing a head if the network layer is not started",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In the long run, it should also have its scope reduced to represent only the possible interactions with a ",(0,i.kt)("em",{parentName:"li"},"Head"),", moving things related to network connectivity and setup to the Admin API"),(0,i.kt)("li",{parentName:"ul"},"In a ",(0,i.kt)("em",{parentName:"li"},"Managed Head")," scenario it would even make sense to have another layer of separation between the API to manage the life-cycle of the Head and the API to make transactions within the Head"))),(0,i.kt)("li",{parentName:"ul"},"Operational tools could be built easily on top of the API, for command-line or Web-based configuration")))}m.isMDXComponent=!0},1322:function(e,t,n){t.Z=n.p+"assets/images/0015-architecture-change-18873d5f6fa6f8237431a6cfa83a03e3.jpg"}}]);