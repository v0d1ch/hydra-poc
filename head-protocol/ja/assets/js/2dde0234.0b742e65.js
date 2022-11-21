"use strict";(self.webpackChunkhydra_head_protocol_docs=self.webpackChunkhydra_head_protocol_docs||[]).push([[5791],{9257:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7294),r=t(1736),o="terminalWindow_wGrl",i="terminalWindowHeader_o9Cs",d="terminalWindowBody_tzdS",l="buttons_IGLB",s="dot_fGZE";function c(e){var n=e.children,t=e.minHeight,c="string"==typeof n?a.createElement(r.Z,null,n):n;return a.createElement("div",{className:o,style:{minHeight:t}},a.createElement("div",{className:i},a.createElement("div",{className:l},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}}))),a.createElement("div",{className:d},c))}},934:function(e,n,t){t.r(n),t.d(n,{assets:function(){return N},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return f}});var a=t(7462),r=t(3366),o=t(7294),i=t(3905),d=t(9257),l=t(2389),s=t(3725),c=t(6010),p="tabItem_LplD";function u(e){var n,t,r,i=e.lazy,d=e.block,l=e.defaultValue,u=e.values,m=e.groupId,k=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=u?u:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===l?l:null!=(n=null!=l?l:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.UB)(),f=N.tabGroupChoices,b=N.setTabGroupChoices,w=(0,o.useState)(y),C=w[0],T=w[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var _=f[m];null!=_&&_!==C&&h.some((function(e){return e.value===_}))&&T(_)}var D=function(e){var n=e.currentTarget,t=x.indexOf(n),a=h[t].value;a!==C&&(E(n),T(a),null!=m&&b(m,a))},Z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},k)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:D,onClick:D},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(n)},e))}function k(e){var n=e.children,t=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}var v=["components"],h={sidebar_position:3},g="\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528(Docker\u306a\u3057)",y={unversionedId:"getting-started/demo/without-docker",id:"getting-started/demo/without-docker",title:"\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528(Docker\u306a\u3057)",description:"Docker\u30b3\u30f3\u30c6\u30ca\u306a\u3057\u3067\u3001\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3068\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30c7\u30e2\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/demo/without-docker.md",sourceDirName:"getting-started/demo",slug:"/getting-started/demo/without-docker",permalink:"/head-protocol/ja/docs/getting-started/demo/without-docker",editUrl:"https://github.com/input-output-hk/hydra/tree/master/docs/i18n/ja/docusaurus-plugin-content-docs/current/getting-started/demo/without-docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Docker\u3067\u4f7f\u7528",permalink:"/head-protocol/ja/docs/getting-started/demo/with-docker"},next:{title:"Hydra development",permalink:"/head-protocol/ja/docs/getting-started/developing-on-hydra"}},N={},f=[{value:"\u6e96\u5099",id:"\u6e96\u5099",level:2},{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u8a2d\u5b9a",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u8a2d\u5b9a",level:2},{value:"Seeding The Network",id:"seeding-the-network",level:2},{value:"Setting-up The Hydra Network",id:"setting-up-the-hydra-network",level:2},{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u69cb\u7bc9",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u69cb\u7bc9",level:2},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u5b9f\u884c",id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u5b9f\u884c",level:2}],b={toc:f};function w(e){var n=e.components,t=(0,r.Z)(e,v);return(0,i.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528docker\u306a\u3057"},"\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3067\u4f7f\u7528(Docker\u306a\u3057)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Docker\u30b3\u30f3\u30c6\u30ca\u306a\u3057\u3067\u3001\u5b9f\u884c\u30d5\u30a1\u30a4\u30eb\u3068\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30c7\u30e2\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002")),(0,i.kt)("h2",{id:"\u6e96\u5099"},"\u6e96\u5099"),(0,i.kt)("p",null,"\u30b9\u30b3\u30fc\u30d7\u306b\u300ccardano-node\u300d\u3001\u300chydra-node\u300d\u3001\u304a\u3088\u3073\u300chydra-tui\u300d\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 \u6b21\u306e\u3044\u305a\u308c\u304b\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-shell demo")," \u3092\u4f7f\u7528\u3059\u308b\u304b\u3001"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cabal build")," \u3068 ",(0,i.kt)("inlineCode",{parentName:"li"},"cabal exec")," \u3092\u5b9f\u884c\u3057\u307e\u3059 (\u3055\u3089\u306b\u5f15\u6570\u3092\u6e21\u3059\u524d\u306b ",(0,i.kt)("inlineCode",{parentName:"li"},"--")," \u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044)\u3002")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"tmux \u30e6\u30fc\u30b6\u30fc\u5411\u3051\u306e\u30d2\u30f3\u30c8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"demo")," nix-shell \u306b\u306f\u3001\u4ee5\u4e0b\u306e\u3059\u3079\u3066\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3059\u308b\u8907\u6570\u306e\u30a6\u30a3\u30f3\u30c9\u30a6\u3068\u30da\u30a4\u30f3\u3067\u65b0\u3057\u3044 ",(0,i.kt)("inlineCode",{parentName:"p"},"tmux")," \u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u958b\u59cb\u3059\u308b ",(0,i.kt)("inlineCode",{parentName:"p"},"run-hydra-demo")," \u30b9\u30af\u30ea\u30d7\u30c8\u304c\u3042\u308a\u307e\u3059!"))),(0,i.kt)("p",null,"\u4ee5\u964d\u306e\u3059\u3079\u3066\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u30ea\u30dd\u30b8\u30c8\u30ea\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," \u30d5\u30a9\u30eb\u30c0\u304b\u3089\u5b9f\u884c\u3055\u308c\u308b\u304b\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3055\u308c\u308b\u305f\u3081\u3001\u7d9a\u884c\u3059\u308b\u524d\u306b\u5fc5\u305a ",(0,i.kt)("inlineCode",{parentName:"p"},"cd demo")," \u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"nix-direnv \u30e6\u30fc\u30b6\u30fc\u5411\u3051\u306e\u30d2\u30f3\u30c8")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"demo/.envrc")," \u3092\u8a31\u53ef\u3059\u308b\u3068\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"demo/")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u3044\u308b\u3068\u304d\u306f\u3044\u3064\u3067\u3082 nix \u30b7\u30a7\u30eb\u74b0\u5883\u3092\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u308c\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"cd demo")," \u306e\u5f8c\u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"direnv allow")," \u3067\u30aa\u30d7\u30c8\u30a4\u30f3\u3057\u307e\u3059\u3002"))),(0,i.kt)("h2",{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u8a2d\u5b9a"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u8a2d\u5b9a"),(0,i.kt)("p",null,"\u307e\u305a\u3001\u5358\u4e00\u306e ",(0,i.kt)("inlineCode",{parentName:"p"},"cardano-node")," \u958b\u767a\u30cd\u30c3\u30c8 \u3092\u7528\u610f\u3057\u3001\u3053\u306e\u8a2d\u5b9a\u3092\u4f7f\u3063\u3066\u8d77\u52d5\u3057\u307e\u3059\u3002\u30ab\u30ec\u30f3\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b ",(0,i.kt)("inlineCode",{parentName:"p"},"devnet")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304c\u4f5c\u6210\u3055\u308c\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./prepare-devnet.sh\ncd devnet\nmkdir ipc\ncabal exec cardano-node -- run \\\n  --config cardano-node.json \\\n  --topology topology.json \\\n  --database-path db \\\n  --socket-path node.socket \\\n  --shelley-operational-certificate opcert.cert \\\n  --shelley-kes-key kes.skey \\\n  --shelley-vrf-key vrf.skey\n"))),(0,i.kt)("h2",{id:"seeding-the-network"},"Seeding The Network"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"seed-devnet.sh")," script by passing it the path/command to a cardano-cli and hydra-node executable to use, instead of having it using the Docker container. For example:"),(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export CARDANO_NODE_SOCKET_PATH=devnet/node.socket\n./seed-devnet.sh $(which cardano-cli) $(which hydra-node)"\n'))),(0,i.kt)("p",null,"Note, should you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cabal"),", pass the invocation for example like this ",(0,i.kt)("inlineCode",{parentName:"p"},'"cabal exec hydra-node --"'),"."),(0,i.kt)("h2",{id:"setting-up-the-hydra-network"},"Setting-up The Hydra Network"),(0,i.kt)("p",null,"\u6b21\u306b\u30013\u3064\u306e\u7570\u306a\u308b\u7aef\u672b\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"demo/")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u304b\u30893\u3064\u306e Hydra \u30ce\u30fc\u30c9\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We are trying to force ipv4 addresses by using ",(0,i.kt)("inlineCode",{parentName:"p"},"--peer 127.0.0.1"),".\nIf you don't see any connected peers in the tui it probably means that your system is configured to use ipv6."))),(0,i.kt)(m,{mdxType:"Tabs"},(0,i.kt)(k,{value:"Alice",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source .env && hydra-node \\\n  --node-id 1 --port 5001 --api-port 4001 --monitoring-port 6001 \\\n  --peer 127.0.0.1:5002 \\\n  --peer 127.0.0.1:5003 \\\n  --hydra-signing-key alice.sk \\\n  --hydra-verification-key bob.vk \\\n  --hydra-verification-key carol.vk \\\n  --cardano-signing-key devnet/credentials/alice.sk \\\n  --cardano-verification-key devnet/credentials/bob.vk \\\n  --cardano-verification-key devnet/credentials/carol.vk \\\n  --ledger-genesis devnet/genesis-shelley.json \\\n  --ledger-protocol-parameters devnet/protocol-parameters.json \\\n  --network-id 42 \\\n  --node-socket devnet/node.socket\n")))),(0,i.kt)(k,{value:"Bob",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source .env && hydra-node \\\n  --node-id 2 --port 5002 --api-port 4002 --monitoring-port 6002 \\\n  --peer 127.0.0.1:5001 \\\n  --peer 127.0.0.1:5003 \\\n  --hydra-signing-key bob.sk \\\n  --hydra-verification-key alice.vk \\\n  --hydra-verification-key carol.vk \\\n  --cardano-signing-key devnet/credentials/bob.sk \\\n  --cardano-verification-key devnet/credentials/alice.vk \\\n  --cardano-verification-key devnet/credentials/carol.vk \\\n  --ledger-genesis devnet/genesis-shelley.json \\\n  --ledger-protocol-parameters devnet/protocol-parameters.json \\\n  --network-id 42 \\\n  --node-socket devnet/node.socket\n")))),(0,i.kt)(k,{value:"Carol",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"source .env && hydra-node \\\n  --node-id 3 --port 5003 --api-port 4003 --monitoring-port 6003 \\\n  --peer 127.0.0.1:5001 \\\n  --peer 127.0.0.1:5002 \\\n  --hydra-signing-key carol.sk \\\n  --hydra-verification-key alice.vk \\\n  --hydra-verification-key bob.vk \\\n  --cardano-signing-key devnet/credentials/carol.sk \\\n  --cardano-verification-key devnet/credentials/alice.vk \\\n  --cardano-verification-key devnet/credentials/bob.vk \\\n  --ledger-genesis devnet/genesis-shelley.json \\\n  --ledger-protocol-parameters devnet/protocol-parameters.json \\\n  --network-id 42 \\\n  --node-socket devnet/node.socket\n"))))),(0,i.kt)("p",null,"\u3046\u307e\u304f\u3044\u3051\u3070\u3001\u30c1\u30a7\u30fc\u30f3\u306b\u63a5\u7d9a\u3055\u308c\u305f\u30ce\u30fc\u30c9\u306f\u30ed\u30b0\u53ce\u96c6\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u69cb\u7bc9"},"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u69cb\u7bc9"),(0,i.kt)("p",null,"Docker\u30b3\u30f3\u30c6\u30ca\u3092\u4f7f\u7528\u3059\u308b\u4ee3\u308f\u308a\u306b\u3001\u4f7f\u7528\u3059\u308bcardano-cli\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u3078\u306e\u30d1\u30b9\u3092\u6e21\u3059\u3053\u3068\u3067\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"seed-devnet.sh"),"\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u4f8b\u3048\u3070\uff1a"),(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},"./seed-devnet.sh $(which cardano-cli)"),(0,i.kt)("h2",{id:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u5b9f\u884c"},"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306e\u5b9f\u884c"),(0,i.kt)("p",null,"hydra-tui\u3092\u4f7f\u3063\u3066\u30ce\u30fc\u30c9\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30a2\u30ea\u30b9\u306e\u30cf\u30a4\u30c9\u30e9\u30ce\u30fc\u30c9\u3068\u5f7c\u5973\u306e\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30af\u30ec\u30c7\u30f3\u30b7\u30e3\u30eb\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3002"),(0,i.kt)(d.Z,{mdxType:"TerminalWindow"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cabal exec hydra-tui -- \\\n  --connect 0.0.0.0:4001 \\\n  --cardano-signing-key devnet/credentials/alice.sk \\\n  --network-id 42 \\\n  --node-socket devnet/node.socket\n"))),(0,i.kt)("p",null,"\u30dd\u30fc\u30c8 ",(0,i.kt)("inlineCode",{parentName:"p"},"4001")," \u3092 ",(0,i.kt)("inlineCode",{parentName:"p"},"4002")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"4003")," \u306b\u7f6e\u304d\u63db\u3048\u3066\u4ed6\u306e2\u30ce\u30fc\u30c9\u306b\u63a5\u7d9a\u3057\u3001 ",(0,i.kt)("inlineCode",{parentName:"p"},"alice.sk")," \u3092\u305d\u308c\u305e\u308c ",(0,i.kt)("inlineCode",{parentName:"p"},"bob.sk")," \u307e\u305f\u306f ",(0,i.kt)("inlineCode",{parentName:"p"},"carol.sk")," \u306b\u7f6e\u304d\u63db\u3048\u3066\u304f\u3060\u3055\u3044\u3002"))}w.isMDXComponent=!0}}]);