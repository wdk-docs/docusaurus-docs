"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[67763],{34477:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(85893),t=n(11151);const o={slug:"/migration"},r="\u79fb\u6c11\u6982\u8ff0",a={unversionedId:"migration/migration-overview",id:"migration/migration-overview",title:"\u79fb\u6c11\u6982\u8ff0",description:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/migration/migration-overview.mdx",sourceDirName:"migration",slug:"/migration",permalink:"/docusaurus-docs/docs/next/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/migration-overview.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/migration"},sidebar:"docs",previous:{title:"\u5ba2\u6237\u7aef\u67b6\u6784",permalink:"/docusaurus-docs/docs/next/advanced/client"},next:{title:"\u81ea\u52a8\u8fc1\u79fb",permalink:"/docusaurus-docs/docs/next/migration/automated"}},u={},c=[{value:"Main differences",id:"main-differences",level:2},{value:"Docusaurus 1 structure",id:"docusaurus-1-structure",level:2},{value:"Docusaurus 2 structure",id:"docusaurus-2-structure",level:2},{value:"Migration process",id:"migration-process",level:2},{value:"Automated migration process",id:"automated-migration-process",level:2},{value:"Manual migration process",id:"manual-migration-process",level:2},{value:"Support",id:"support",level:2},{value:"Example migration PRs",id:"example-migration-prs",level:2}];function l(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",pre:"pre",code:"code",admonition:"admonition",ul:"ul",li:"li",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"\u79fb\u6c11\u6982\u8ff0",children:"\u79fb\u6c11\u6982\u8ff0"}),"\n",(0,i.jsx)(s.p,{children:"This doc guides you through migrating an existing Docusaurus 1 site to Docusaurus 2."}),"\n",(0,i.jsx)(s.p,{children:"We try to make this as easy as possible, and provide a migration CLI."}),"\n",(0,i.jsx)(s.h2,{id:"main-differences",children:"Main differences"}),"\n",(0,i.jsx)(s.p,{children:"Docusaurus 1 is a pure documentation site generator, using React as a server-side template engine, but not loading React on the browser."}),"\n",(0,i.jsx)(s.p,{children:"Docusaurus 2, rebuilt from the ground up, generates a single-page-application, using the full power of React in the browser. It allows for more customizability but preserved the best parts of Docusaurus 1 - easy to get started, versioned docs, and i18n."}),"\n",(0,i.jsxs)(s.p,{children:["Beyond that, Docusaurus 2 is a ",(0,i.jsx)(s.strong,{children:"performant static site generator"})," and can be used to create common content-driven websites (e.g. Documentation, Blogs, Product Landing and Marketing Pages, etc) extremely quickly."]}),"\n",(0,i.jsxs)(s.p,{children:["While our main focus will still be helping you get your documentations right and well, it is possible to build any kind of website using Docusaurus 2 as it is just a React application. ",(0,i.jsx)(s.strong,{children:"Docusaurus can now be used to build any website, not just documentation websites."})]}),"\n",(0,i.jsx)(s.h2,{id:"docusaurus-1-structure",children:"Docusaurus 1 structure"}),"\n",(0,i.jsx)(s.p,{children:"Your Docusaurus 1 site should have the following structure:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 core\n    \u2502   \u2514\u2500\u2500 Footer.js\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 pages\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 siteConfig.js\n    \u2514\u2500\u2500 static\n"})}),"\n",(0,i.jsx)(s.h2,{id:"docusaurus-2-structure",children:"Docusaurus 2 structure"}),"\n",(0,i.jsx)(s.p,{children:"After the migration, your Docusaurus 2 site could look like:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sh",children:"\u251c\u2500\u2500 docs\n\u2514\u2500\u2500 website\n    \u251c\u2500\u2500 blog\n    \u251c\u2500\u2500 src\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u251c\u2500\u2500 css\n    \u2502   \u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 static\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 sidebars.json\n    \u251c\u2500\u2500 docusaurus.config.js\n"})}),"\n",(0,i.jsxs)(s.admonition,{type:"info",children:[(0,i.jsxs)(s.p,{children:["This migration does not change the ",(0,i.jsx)(s.code,{children:"/docs"})," folder location, but Docusaurus v2 sites generally have the ",(0,i.jsx)(s.code,{children:"/docs"})," folder inside ",(0,i.jsx)(s.code,{children:"/website"})]}),(0,i.jsxs)(s.p,{children:["You are free to put the ",(0,i.jsx)(s.code,{children:"/docs"})," folder anywhere you want after having migrated to v2."]})]}),"\n",(0,i.jsx)(s.h2,{id:"migration-process",children:"Migration process"}),"\n",(0,i.jsx)(s.p,{children:"There are multiple things to migrate to obtain a fully functional Docusaurus 2 website:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"packages"}),"\n",(0,i.jsx)(s.li,{children:"CLI commands"}),"\n",(0,i.jsx)(s.li,{children:"site configuration"}),"\n",(0,i.jsx)(s.li,{children:"Markdown files"}),"\n",(0,i.jsx)(s.li,{children:"sidebars file"}),"\n",(0,i.jsx)(s.li,{children:"pages, components and CSS"}),"\n",(0,i.jsx)(s.li,{children:"versioned docs"}),"\n",(0,i.jsx)(s.li,{children:"i18n support \ud83d\udea7"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"automated-migration-process",children:"Automated migration process"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/next/migration/automated",children:"migration CLI"})," will handle many things of the migration for you."]}),"\n",(0,i.jsx)(s.p,{children:"However, some parts can't easily be automated, and you will have to fallback to the manual process."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"We recommend running the migration CLI, and complete the missing parts thanks to the manual migration process."})}),"\n",(0,i.jsx)(s.h2,{id:"manual-migration-process",children:"Manual migration process"}),"\n",(0,i.jsx)(s.p,{children:"Some parts of the migration can't be automated (particularly the pages), and you will have to migrate them manually."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/next/migration/manual",children:"manual migration guide"})," will give you all the manual steps."]}),"\n",(0,i.jsx)(s.h2,{id:"support",children:"Support"}),"\n",(0,i.jsxs)(s.p,{children:["For any questions, you can ask in the ",(0,i.jsxs)(s.a,{href:"https://discord.gg/C3P6CxMMxY",children:[(0,i.jsx)(s.code,{children:"#migration-v1-to-v2"})," Discord channel"]}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Feel free to tag ",(0,i.jsx)(s.a,{href:"https://github.com/slorber",children:"@slorber"})," in any migration PRs if you would like us to have a look."]}),"\n",(0,i.jsxs)(s.p,{children:["We also have volunteers willing to ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/1834",children:"help you migrate your v1 site"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"example-migration-prs",children:"Example migration PRs"}),"\n",(0,i.jsxs)(s.p,{children:["You might want to refer to our migration PRs for ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/create-react-app/pull/7785",children:"Create React App"})," and ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/flux/pull/471",children:"Flux"})," as examples of how a migration for a basic Docusaurus v1 site can be done."]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>o});var i=n(67294);const t=i.createContext({});function o(e){const s=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:o(e),i.createElement(t.Provider,{value:a},s)}}}]);