"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[43212],{10031:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(85893),s=i(11151);const o={slug:"/migration/automated"},a="Automated migration",r={unversionedId:"migration/migration-automated",id:"version-2.3.1/migration/migration-automated",title:"Automated migration",description:"The migration CLI automatically migrates your v1 website to a v2 website.",source:"@site/versioned_docs/version-2.3.1/migration/migration-automated.mdx",sourceDirName:"migration",slug:"/migration/automated",permalink:"/docusaurus-docs/docs/2.3.1/migration/automated",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/migration-automated.mdx",tags:[],version:"2.3.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/migration/automated"},sidebar:"docs",previous:{title:"Migration overview",permalink:"/docusaurus-docs/docs/2.3.1/migration"},next:{title:"Manual migration",permalink:"/docusaurus-docs/docs/2.3.1/migration/manual"}},d={},c=[{value:"Options",id:"options",level:4}];function l(e){const t=Object.assign({h1:"h1",p:"p",admonition:"admonition",ul:"ul",li:"li",code:"code",ol:"ol",a:"a",pre:"pre",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"automated-migration",children:"Automated migration"}),"\n",(0,n.jsx)(t.p,{children:"The migration CLI automatically migrates your v1 website to a v2 website."}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Manual work is still required after using the migration CLI, as we can't automate a full migration"})}),"\n",(0,n.jsx)(t.p,{children:"The migration CLI migrates:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Site configurations (from ",(0,n.jsx)(t.code,{children:"siteConfig.js"})," to ",(0,n.jsx)(t.code,{children:"docusaurus.config.js"}),")"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"package.json"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"sidebars.json"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/docs"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/blog"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"/static"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"versioned_sidebar.json"})," and ",(0,n.jsx)(t.code,{children:"/versioned_docs"})," if your site uses versioning"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"To use the migration CLI, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Before using the migration CLI, ensure that ",(0,n.jsx)(t.code,{children:"/docs"}),", ",(0,n.jsx)(t.code,{children:"/blog"}),", ",(0,n.jsx)(t.code,{children:"/static"}),", ",(0,n.jsx)(t.code,{children:"sidebars.json"}),", ",(0,n.jsx)(t.code,{children:"siteConfig.js"}),", ",(0,n.jsx)(t.code,{children:"package.json"})," follow the ",(0,n.jsx)(t.a,{href:"#",children:"structure"})," shown at the start of this page."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"To migrate your v1 website, run the migration CLI with the appropriate filesystem paths:"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# migration command format\nnpx @docusaurus/migrate migrate <v1 website directory> <desired v2 website directory>\n\n# example\nnpx @docusaurus/migrate migrate ./v1-website ./v2-website\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"To view your new website locally, go into your v2 website's directory and start your development server."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd ./v2-website\nyarn install\nyarn start\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsx)(t.p,{children:"The migration CLI updates existing files. Be sure to have committed them first!"})}),"\n",(0,n.jsx)(t.h4,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:"You can add option flags to the migration CLI to automatically migrate Markdown content and pages to v2. It is likely that you will still need to make some manual changes to achieve your desired result."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--mdx"})}),(0,n.jsx)(t.td,{children:"Add this flag to convert Markdown to MDX automatically"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"--page"})}),(0,n.jsx)(t.td,{children:"Add this flag to migrate pages automatically"})]})]})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# example using options\nnpx @docusaurus/migrate migrate --mdx --page ./v1-website ./v2-website\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"danger",children:[(0,n.jsx)(t.p,{children:"The migration of pages and MDX is still a work in progress."}),(0,n.jsxs)(t.p,{children:["We recommend you to try to run the pages without these options, commit, and then try to run the migration again with the ",(0,n.jsx)(t.code,{children:"--page"})," and ",(0,n.jsx)(t.code,{children:"--mdx"})," options."]}),(0,n.jsx)(t.p,{children:"This way, you'd be able to easily inspect and fix the diff."})]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,t,i)=>{i.d(t,{Zo:()=>r,ah:()=>o});var n=i(67294);const s=n.createContext({});function o(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:i}){let r;return r=i?"function"==typeof e?e({}):e||a:o(e),n.createElement(s.Provider,{value:r},t)}}}]);