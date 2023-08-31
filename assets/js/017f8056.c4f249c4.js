"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[98716],{25410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var o=n(85893),a=n(11151);const s={mdx:{format:"md"},date:"2019-07-14T19:00"},i="2.0.0-alpha.20",c={permalink:"/docusaurus-docs/changelog/2.0.0-alpha.20",source:"@site/changelog/source/2.0.0-alpha.20.md",title:"2.0.0-alpha.20",description:"- Add copy codeblock button",date:"2019-07-14T19:00:00.000Z",formattedDate:"2019\u5e747\u670814\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{mdx:{format:"md"},date:"2019-07-14T19:00"},unlisted:!1,prevItem:{title:"2.0.0-alpha.21",permalink:"/docusaurus-docs/changelog/2.0.0-alpha.21"},nextItem:{title:"2.0.0-alpha.19",permalink:"/docusaurus-docs/changelog/2.0.0-alpha.19"},listPageLink:"/docusaurus-docs/changelog/page/5"},l={authorsImageUrls:[]},r=[];function d(e){const t=Object.assign({ul:"ul",li:"li",code:"code"},(0,a.ah)(),e.components);return(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Add copy codeblock button"}),"\n",(0,o.jsx)(t.li,{children:"Add Google analytics and Google gtag plugins."}),"\n",(0,o.jsxs)(t.li,{children:["Move source components to ",(0,o.jsx)(t.code,{children:"/src"}),". Please create a ",(0,o.jsx)(t.code,{children:"website/src"})," directory and move your ",(0,o.jsx)(t.code,{children:"/pages"})," and ",(0,o.jsx)(t.code,{children:"/theme"})," code into it. This is to make it easier to integrate your website with external build/static analysis tooling (you can now just pass in ",(0,o.jsx)(t.code,{children:"src/**/*.js"})," as the path to process)."]}),"\n",(0,o.jsx)(t.li,{children:"Adde more documentation thanks to @wgao19."}),"\n",(0,o.jsx)(t.li,{children:"Deprecate the current docs plugin. The docs plugin as of 2.0.0-alpha.19 is heavily based on V1 specifications and we intend to create a better one that fixes some of the inconsistencies in V1. If you have swizzled any doc components, you will have to update their names. You are highly encourages to not swizzle the legacy doc components until we have completed the new docs plugin."}),"\n",(0,o.jsx)(t.li,{children:"Separate v2 init command to new package @docusaurus/init"}),"\n",(0,o.jsx)(t.li,{children:"Render 404.html page"}),"\n",(0,o.jsx)(t.li,{children:"Improve SEO"}),"\n",(0,o.jsx)(t.li,{children:"Clicking on the logo in the mobile sliding navigation will now bring you to the homepage."}),"\n",(0,o.jsxs)(t.li,{children:["Performance\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Disable webpack output pathinfo. Webpack has the ability to generate path info in the output bundle. However, this puts garbage collection pressure on projects that bundle thousands of modules. Not very useful for our case"}),"\n",(0,o.jsx)(t.li,{children:"Drop cache-loader in CI and test environment because it has an initial overhead. We always start from scratch in vm instance like CI so cache-loader is useless"}),"\n",(0,o.jsx)(t.li,{children:"Better splitchunks and babel default webpack config"}),"\n"]}),"\n"]}),"\n"]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>c,ah:()=>s});var o=n(67294);const a=o.createContext({});function s(e){const t=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function c({components:e,children:t,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:s(e),o.createElement(a.Provider,{value:c},t)}}}]);