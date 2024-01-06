(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{6568:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guide/zkapp",function(){return t(8680)}])},8680:function(e,s,t){"use strict";t.r(s),t.d(s,{__toc:function(){return c}});var n=t(4246),l=t(9304),r=t(9714),o=t(4637);t(8233);var a=t(1441),i=t(2308);let c=[{depth:2,value:"Supported frontend frameworks",id:"supported-frontend-frameworks"},{depth:2,value:"Svelte",id:"svelte"},{depth:3,value:"Usage steps",id:"usage-steps"},{depth:2,value:"React",id:"react"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",em:"em",h3:"h3",ol:"ol",pre:"pre",code:"code",span:"span"},(0,a.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Mina Wallet Adapter for zkApps"}),"\n",(0,n.jsx)(s.p,{children:"This guide provides a quick setup for integrating the Wallet Adapter into a zkApp, utilizing any of the supported frontend frameworks mentioned below."}),"\n",(0,n.jsx)(s.h2,{id:"supported-frontend-frameworks",children:"Supported frontend frameworks"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#svelte",children:"Svelte"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#react",children:"React"})}),"\n",(0,n.jsxs)(s.li,{children:["Vue ",(0,n.jsx)(s.em,{children:"(coming soon)"})]}),"\n",(0,n.jsxs)(s.li,{children:["Angular ",(0,n.jsx)(s.em,{children:"(coming soon)"})]}),"\n",(0,n.jsxs)(s.li,{children:["Vanila JS ",(0,n.jsx)(s.em,{children:"(coming soon)"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"svelte",children:"Svelte"}),"\n",(0,n.jsxs)(s.p,{children:["Follow the steps below to seamlessly integrate the Wallet Adapter into your zkApp with just a few lines of code. Refer to the ",(0,n.jsx)(s.a,{href:"../packages/starter/svelte/svelte-kit-example/",children:"example starter project"})," for the complete reference source code."]}),"\n",(0,n.jsx)(s.h3,{id:"usage-steps",children:"Usage steps"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Install dependency. Only a single package is required."}),"\n"]}),"\n",(0,n.jsxs)(i.mQ,{items:["npm","pnpm","yarn","bun"],storageKey:"selectedPackageManager",children:[(0,n.jsx)(i.OK,{children:(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"npm"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"mina-wallet-adapter-ui-svelte"})]})})})}),(0,n.jsx)(i.OK,{children:(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"mina-wallet-adapter-ui-svelte"})]})})})}),(0,n.jsx)(i.OK,{children:(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"yarn"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"mina-wallet-adapter-ui-svelte"})]})})})}),(0,n.jsx)(i.OK,{children:(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",hasCopyCode:!0,children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bun"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"mina-wallet-adapter-ui-svelte"})]})})})})]}),"\n",(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsxs)(s.li,{children:["Import the ",(0,n.jsx)(s.code,{children:"adapterId"})," constant, wallet components, and store. The CSS file is optional; import it if you prefer the default theme. It can be replaced with a project-specific stylesheet."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { AdapterId"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" WalletProvider"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" WalletMultiButton"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" walletStore } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mina-wallet-adapter-ui-svelte"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"mina-wallet-adapter-ui-svelte/dist/wallet-adapter.css"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Optional. Only for the default look"})]})]})}),"\n",(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsxs)(s.li,{children:["Utilize the components as HTML elements within the page document. Pass the list of wallet adapters to display as a parameter to the ",(0,n.jsx)(s.code,{children:"WalletProvider"})," component. The ",(0,n.jsx)(s.code,{children:"WalletMultiButton"}),' component will show the "Connect Wallet" button and handle the entire connection workflow.']}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"svelte","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"svelte","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"WalletProvider"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"AdapterId"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"AURO"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"AdapterId"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"METAMASK"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"}"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"autoConnect"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} />"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"WalletMultiButton"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.jsxs)(s.ol,{start:"4",children:["\n",(0,n.jsxs)(s.li,{children:["Get the wallet connection state and invoke connected wallet methods through the ",(0,n.jsx)(s.code,{children:"walletStore"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"svelte","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"svelte","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {#"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" $"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"walletStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".connected}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Connected. Wallet address is {$"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"walletStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".publicKey}.</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"on"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"click"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"walletStore"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".signTransaction"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")}>Sign a Transaction</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:'>You are not connected. Click "Connect Wallet" button to connect.</'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  {/"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.jsx)(s.h2,{id:"react",children:"React"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"WIP.."})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/docs/guide/zkapp.md",route:"/docs/guide/zkapp",timestamp:1704390591e3,pageMap:[{kind:"Meta",data:{index:{title:"Home",display:"hidden",theme:{layout:"raw",breadcrumb:!1,toc:!1,sidebar:!1,pagination:!1,timestamp:!1,footer:!0}},docs:{title:"Docs",type:"page"}}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Meta",data:{intro:"Introduction",guide:"Guide",design:"Design",starter:"Starter Kits",faq:"FAQs",integrations:"Integrations"}},{kind:"Folder",name:"design",route:"/docs/design",children:[{kind:"Meta",data:{architecture:"Architecture","wallet-standard":"Wallet Standard",binding:"UI Bindings",component:"Components",hook:"Hooks",style:"Styling"}},{kind:"MdxPage",name:"architecture",route:"/docs/design/architecture"},{kind:"MdxPage",name:"binding",route:"/docs/design/binding"},{kind:"MdxPage",name:"component",route:"/docs/design/component"},{kind:"MdxPage",name:"hook",route:"/docs/design/hook"},{kind:"MdxPage",name:"style",route:"/docs/design/style"},{kind:"MdxPage",name:"wallet-standard",route:"/docs/design/wallet-standard"}]},{kind:"MdxPage",name:"design",route:"/docs/design"},{kind:"MdxPage",name:"faq",route:"/docs/faq"},{kind:"Folder",name:"guide",route:"/docs/guide",children:[{kind:"Meta",data:{zkapp:"Use in zkApps",wallet:"Integrate in Wallets",build:"Develop Locally"}},{kind:"MdxPage",name:"build",route:"/docs/guide/build"},{kind:"MdxPage",name:"wallet",route:"/docs/guide/wallet"},{kind:"MdxPage",name:"zkapp",route:"/docs/guide/zkapp"}]},{kind:"MdxPage",name:"guide",route:"/docs/guide"},{kind:"MdxPage",name:"integrations",route:"/docs/integrations"},{kind:"MdxPage",name:"intro",route:"/docs/intro"},{kind:"Folder",name:"starter",route:"/docs/starter",children:[{kind:"Meta",data:{svelte:"For Svelte",react:"For React"}},{kind:"MdxPage",name:"react",route:"/docs/starter/react"},{kind:"MdxPage",name:"svelte",route:"/docs/starter/svelte"}]},{kind:"MdxPage",name:"starter",route:"/docs/starter"}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Mina Wallet Adapter for zkApps",headings:c},pageNextRoute:"/docs/guide/zkapp",nextraLayout:r.ZP,themeConfig:o.Z};s.default=(0,l.j)(d)},4637:function(e,s,t){"use strict";var n=t(4246);t(7378);let l={logo:(0,n.jsx)("span",{children:"Mina Wallet Adapter"}),project:{link:"https://github.com/aztemi/mina-wallet-adapter"},docsRepositoryBase:"https://github.com/aztemi/mina-wallet-adapter/tree/main/site",editLink:{text:"Edit this page on GitHub →"},search:{placeholder:"Search Docs ..."},footer:{text:(0,n.jsxs)("small",{children:["\xa9 ",new Date().getFullYear()," AZTemi."]})}};s.Z=l}},function(e){e.O(0,[774,330,888,179],function(){return e(e.s=6568)}),_N_E=e.O()}]);