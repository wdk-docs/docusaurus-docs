"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[58697],{61452:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=s(85893),t=s(11151);const i={id:"introduction",sidebar_label:"Introduction",slug:"/docs-introduction"},d="Docs Introduction",c={unversionedId:"guides/docs/introduction",id:"version-2.1.0/guides/docs/introduction",title:"Docs Introduction",description:"The docs feature provides users with a way to organize Markdown files in a hierarchical format.",source:"@site/versioned_docs/version-2.1.0/guides/docs/docs-introduction.mdx",sourceDirName:"guides/docs",slug:"/docs-introduction",permalink:"/docusaurus-docs/docs/2.1.0/docs-introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-introduction.mdx",tags:[],version:"2.1.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"introduction",sidebar_label:"Introduction",slug:"/docs-introduction"},sidebar:"docs",previous:{title:"Pages",permalink:"/docusaurus-docs/docs/2.1.0/creating-pages"},next:{title:"Create a doc",permalink:"/docusaurus-docs/docs/2.1.0/create-doc"}},r={},a=[{value:"Docs-only mode",id:"docs-only-mode",level:2}];function l(e){const o=Object.assign({h1:"h1",p:"p",admonition:"admonition",a:"a",ol:"ol",li:"li",h2:"h2",pre:"pre",code:"code",strong:"strong"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"docs-introduction",children:"Docs Introduction"}),"\n",(0,n.jsx)(o.p,{children:"The docs feature provides users with a way to organize Markdown files in a hierarchical format."}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["Check the ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.1.0/api/plugins/@docusaurus/plugin-content-docs",children:"Docs Plugin API Reference documentation"})," for an exhaustive list of options."]})}),"\n",(0,n.jsx)(o.p,{children:"Your site's documentation is organized by four levels, from lowest to highest:"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Individual pages."}),"\n",(0,n.jsx)(o.li,{children:"Sidebars."}),"\n",(0,n.jsx)(o.li,{children:"Versions."}),"\n",(0,n.jsx)(o.li,{children:"Plugin instances."}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["The guide will introduce them in that order: starting from ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.1.0/create-doc",children:"how individual pages can be configured"}),", to ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.1.0/sidebar",children:"how to create a sidebar or multiple ones"}),", to ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.1.0/versioning",children:"how to create and manage versions"}),", to ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.1.0/docs-multi-instance",children:"how to use multiple docs plugin instances"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"docs-only-mode",children:"Docs-only mode"}),"\n",(0,n.jsx)(o.p,{children:"A freshly initialized Docusaurus site has the following structure:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"example.com/                                -> generated from `src/pages/index.js`\n\nexample.com/docs/intro                      -> generated from `docs/intro.md`\nexample.com/docs/tutorial-basics/...        -> generated from `docs/tutorial-basics/...`\n...\n\nexample.com/blog/2021/08/26/welcome         -> generated from `blog/2021-08-26-welcome/index.md`\nexample.com/blog/2021/08/01/mdx-blog-post   -> generated from `blog/2021-08-01-mdx-blog-post.mdx`\n...\n"})}),"\n",(0,n.jsxs)(o.p,{children:["All docs will be served under the subroute ",(0,n.jsx)(o.code,{children:"docs/"}),". But what if ",(0,n.jsx)(o.strong,{children:"your site only has docs"}),", or you want to prioritize your docs by putting them at the root?"]}),"\n",(0,n.jsx)(o.p,{children:"Assume that you have the following in your configuration:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    '@docusaurus/preset-classic',\n    {\n      docs: {\n        /* docs plugin options */\n      },\n      blog: {\n        /* blog plugin options */\n      },\n      // ...\n    },\n  ],\n};\n"})}),"\n",(0,n.jsx)(o.p,{children:"To enter docs-only mode, change it to like this:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    '@docusaurus/preset-classic',\n    {\n      docs: {\n        // highlight-next-line\n        routeBasePath: '/', // Serve the docs at the site's root\n        /* other docs plugin options */\n      },\n      // highlight-next-line\n      blog: false, // Optional: disable the blog plugin\n      // ...\n    },\n  ],\n};\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Note that you ",(0,n.jsx)(o.strong,{children:"don't necessarily have to give up on using the blog"})," or other plugins; all that ",(0,n.jsx)(o.code,{children:"routeBasePath: '/'"})," does is that instead of serving the docs through ",(0,n.jsx)(o.code,{children:"https://example.com/docs/some-doc"}),", they are now at the site root: ",(0,n.jsx)(o.code,{children:"https://example.com/some-doc"}),". The blog, if enabled, can still be accessed through the ",(0,n.jsx)(o.code,{children:"blog/"})," subroute."]}),"\n",(0,n.jsxs)(o.p,{children:["Don't forget to put some page at the root (",(0,n.jsx)(o.code,{children:"https://example.com/"}),") through adding the front matter:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-md",metastring:'title="docs/intro.md"',children:"---\n# highlight-next-line\nslug: /\n---\n\nThis page will be the home page when users visit https://example.com/.\n"})}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:["If you added ",(0,n.jsx)(o.code,{children:"slug: /"})," to a doc to make it the homepage, you should delete the existing homepage at ",(0,n.jsx)(o.code,{children:"./src/pages/index.js"}),", or else there will be two files mapping to the same route!"]})}),"\n",(0,n.jsx)(o.p,{children:"Now, the site's structure will be like the following:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"example.com/                       -> generated from `docs/intro.md`\nexample.com/tutorial-basics/...    -> generated from `docs/tutorial-basics/...`\n...\n"})}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:['There\'s also a "blog-only mode" for those who only want to use the blog feature of Docusaurus 2. You can use the same method detailed above. Follow the setup instructions on ',(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.1.0/blog#blog-only-mode",children:"Blog-only mode"}),"."]})})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,t.ah)(),e.components);return o?(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,o,s)=>{s.d(o,{Zo:()=>c,ah:()=>i});var n=s(67294);const t=n.createContext({});function i(e){const o=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const d={};function c({components:e,children:o,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||d:i(e),n.createElement(t.Provider,{value:c},o)}}}]);