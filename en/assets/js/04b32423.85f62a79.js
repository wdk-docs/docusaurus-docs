"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[6694],{25246:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=t(85893),i=t(11151),o=(t(51715),t(7626),t(89378));const r={description:"How Docusaurus works to build your app"},c="Architecture",a={unversionedId:"advanced/architecture",id:"version-2.4.1/advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/versioned_docs/version-2.4.1/advanced/architecture.mdx",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docusaurus-docs/en/docs/advanced/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/architecture.mdx",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/docusaurus-docs/en/docs/advanced/"},next:{title:"Plugins",permalink:"/docusaurus-docs/en/docs/advanced/plugins"}},d={},u=[];function l(e){const s=Object.assign({h1:"h1",p:"p",img:"img",ul:"ul",li:"li",code:"code",a:"a",strong:"strong"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"architecture",children:"Architecture"}),"\n","\n","\n",(0,n.jsx)(o.Z,{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Architecture overview",src:t(21501).Z+"",width:"2228",height:"2007"})})}),"\n",(0,n.jsx)(s.p,{children:"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."}),"\n",(0,n.jsx)(s.p,{children:"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as CommonJS that can be ",(0,n.jsx)(s.code,{children:"require"}),"'d."]}),"\n",(0,n.jsx)(s.li,{children:"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,n.jsx)(s.code,{children:"addRoute"}),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"}),", which itself is run in Node (hence you can use ",(0,n.jsx)(s.code,{children:"require"})," and pass callbacks as plugin options)."]}),"\n",(0,n.jsxs)(s.p,{children:["During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,n.jsx)(s.code,{children:"themeConfig"})," or ",(0,n.jsx)(s.code,{children:"baseUrl"})," through ",(0,n.jsx)(s.a,{href:"/docusaurus-docs/en/docs/docusaurus-core#useDocusaurusContext",children:(0,n.jsx)(s.code,{children:"useDocusaurusContext()"})}),". However, the ",(0,n.jsx)(s.code,{children:"siteConfig"})," object only contains ",(0,n.jsx)(s.strong,{children:"serializable values"})," (values that are preserved after ",(0,n.jsx)(s.code,{children:"JSON.stringify()"}),"). Functions, regexes, etc. would be lost on the client side. The ",(0,n.jsx)(s.code,{children:"themeConfig"})," is designed to be entirely serializable."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},21501:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"}}]);