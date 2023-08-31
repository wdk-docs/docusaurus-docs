"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[70355],{57222:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var n=s(85893),t=s(11151);const d={id:"create-doc",description:"Create a Markdown Document",slug:"/create-doc"},r="Create a doc",i={unversionedId:"guides/docs/create-doc",id:"version-2.3.1/guides/docs/create-doc",title:"Create a doc",description:"Create a Markdown Document",source:"@site/versioned_docs/version-2.3.1/guides/docs/docs-create-doc.mdx",sourceDirName:"guides/docs",slug:"/create-doc",permalink:"/docusaurus-docs/docs/2.3.1/create-doc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-create-doc.mdx",tags:[],version:"2.3.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"create-doc",description:"Create a Markdown Document",slug:"/create-doc"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docusaurus-docs/docs/2.3.1/docs-introduction"},next:{title:"Sidebar",permalink:"/docusaurus-docs/docs/2.3.1/sidebar"}},c={},a=[{value:"Doc front matter",id:"doc-front-matter",level:2},{value:"Doc tags",id:"doc-tags",level:2},{value:"Organizing folder structure",id:"organizing-folder-structure",level:2},{value:"Document ID",id:"document-id",level:3},{value:"Doc URLs",id:"doc-urls",level:3},{value:"Sidebars",id:"sidebars",level:3}];function l(e){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",admonition:"admonition",a:"a",h2:"h2",h3:"h3",strong:"strong",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"create-a-doc",children:"Create a doc"}),"\n",(0,n.jsxs)(o.p,{children:["Create a Markdown file, ",(0,n.jsx)(o.code,{children:"greeting.md"}),", and place it under the ",(0,n.jsx)(o.code,{children:"docs"})," directory."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"website # root directory of your site\n\u251c\u2500\u2500 docs\n\u2502   \u2514\u2500\u2500 greeting.md\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 ...\n"})}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-md",children:"---\ndescription: Create a doc page with rich content.\n---\n\n# Hello from Docusaurus\n\nAre you ready to create the documentation site for your open source project?\n\n## Headers\n\nwill show up on the table of contents on the upper right\n\nSo that your users will know what this page is all about without scrolling down or even without reading too much.\n\n## Only h2 and h3 will be in the TOC by default.\n\nYou can configure the TOC heading levels either per-document or in the theme configuration.\n\nThe headers are well-spaced so that the hierarchy is clear.\n\n- lists will help you\n- present the key points\n- that you want your users to remember\n  - and you may nest them\n    - multiple times\n"})}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsxs)(o.p,{children:["All files prefixed with an underscore (",(0,n.jsx)(o.code,{children:"_"}),") under the ",(0,n.jsx)(o.code,{children:"docs"}),' directory are treated as "partial" pages and will be ignored by default.']}),(0,n.jsxs)(o.p,{children:["Read more about ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.3.1/markdown-features/react#importing-markdown",children:"importing partial pages"}),"."]})]}),"\n",(0,n.jsx)(o.h2,{id:"doc-front-matter",children:"Doc front matter"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.3.1/markdown-features#front-matter",children:"front matter"})," is used to provide additional metadata for your doc page. Front matter is optional\u2014Docusaurus will be able to infer all necessary metadata without the front matter. For example, the ",(0,n.jsx)(o.a,{href:"#dog-tags",children:"doc tags"})," feature introduced below requires using front matter. For all possible fields, see ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.3.1/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter",children:"the API documentation"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"doc-tags",children:"Doc tags"}),"\n",(0,n.jsxs)(o.p,{children:["Optionally, you can add tags to your doc pages, which introduces another dimension of categorization in addition to the ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.3.1/sidebar",children:"docs sidebar"}),". Tags are passed in the front matter as a list of labels:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-md",metastring:'"your-doc-page.md"',children:"---\nid: doc-with-tags\ntitle: A doc with tags\ntags:\n  - Demo\n  - Getting started\n---\n"})}),"\n",(0,n.jsxs)(o.admonition,{type:"tip",children:[(0,n.jsxs)(o.p,{children:["Tags can also be declared with ",(0,n.jsx)(o.code,{children:"tags: [Demo, Getting started]"}),"."]}),(0,n.jsxs)(o.p,{children:["Read more about all the possible ",(0,n.jsx)(o.a,{href:"https://www.w3schools.io/file/yaml-arrays/",children:"Yaml array syntaxes"}),"."]})]}),"\n",(0,n.jsx)(o.h2,{id:"organizing-folder-structure",children:"Organizing folder structure"}),"\n",(0,n.jsxs)(o.p,{children:["How the Markdown files are arranged under the ",(0,n.jsx)(o.code,{children:"docs"})," folder can have multiple impacts on Docusaurus content generation. However, most of them can be decoupled from the file structure."]}),"\n",(0,n.jsx)(o.h3,{id:"document-id",children:"Document ID"}),"\n",(0,n.jsxs)(o.p,{children:["Every document has a unique ",(0,n.jsx)(o.code,{children:"id"}),". By default, a document ",(0,n.jsx)(o.code,{children:"id"})," is the name of the document (without the extension) relative to the root docs directory."]}),"\n",(0,n.jsxs)(o.p,{children:["For example, the ID of ",(0,n.jsx)(o.code,{children:"greeting.md"})," is ",(0,n.jsx)(o.code,{children:"greeting"}),", and the ID of ",(0,n.jsx)(o.code,{children:"guide/hello.md"})," is ",(0,n.jsx)(o.code,{children:"guide/hello"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"website # Root directory of your site\n\u2514\u2500\u2500 docs\n   \u251c\u2500\u2500 greeting.md\n   \u2514\u2500\u2500 guide\n      \u2514\u2500\u2500 hello.md\n"})}),"\n",(0,n.jsxs)(o.p,{children:["However, the ",(0,n.jsx)(o.strong,{children:"last part"})," of the ",(0,n.jsx)(o.code,{children:"id"})," can be defined by the user in the front matter. For example, if ",(0,n.jsx)(o.code,{children:"guide/hello.md"}),"'s content is defined as below, its final ",(0,n.jsx)(o.code,{children:"id"})," is ",(0,n.jsx)(o.code,{children:"guide/part1"}),"."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-md",children:"---\nid: part1\n---\n\nLorem ipsum\n"})}),"\n",(0,n.jsx)(o.p,{children:"The ID is used to refer to a document when hand-writing sidebars, or when using docs-related layout components or hooks."}),"\n",(0,n.jsx)(o.h3,{id:"doc-urls",children:"Doc URLs"}),"\n",(0,n.jsxs)(o.p,{children:["By default, a document's URL location is its file path relative to the ",(0,n.jsx)(o.code,{children:"docs"})," folder. Use the ",(0,n.jsx)(o.code,{children:"slug"})," front matter to change a document's URL."]}),"\n",(0,n.jsx)(o.p,{children:"For example, suppose your site structure looks like this:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"website # Root directory of your site\n\u2514\u2500\u2500 docs\n    \u2514\u2500\u2500 guide\n        \u2514\u2500\u2500 hello.md\n"})}),"\n",(0,n.jsxs)(o.p,{children:["By default ",(0,n.jsx)(o.code,{children:"hello.md"})," will be available at ",(0,n.jsx)(o.code,{children:"/docs/guide/hello"}),". You can change its URL location to ",(0,n.jsx)(o.code,{children:"/docs/bonjour"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-md",children:"---\nslug: /bonjour\n---\n\nLorem ipsum\n"})}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"slug"})," will be appended to the doc plugin's ",(0,n.jsx)(o.code,{children:"routeBasePath"}),", which is ",(0,n.jsx)(o.code,{children:"/docs"})," by default. See ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.3.1/docs-introduction#docs-only-mode",children:"Docs-only mode"})," for how to remove the ",(0,n.jsx)(o.code,{children:"/docs"})," part from the URL."]}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsx)(o.p,{children:"It is possible to use:"}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["absolute slugs: ",(0,n.jsx)(o.code,{children:"slug: /mySlug"}),", ",(0,n.jsx)(o.code,{children:"slug: /"}),"..."]}),"\n",(0,n.jsxs)(o.li,{children:["relative slugs: ",(0,n.jsx)(o.code,{children:"slug: mySlug"}),", ",(0,n.jsx)(o.code,{children:"slug: ./../mySlug"}),"..."]}),"\n"]})]}),"\n",(0,n.jsxs)(o.p,{children:["If you want a document to be available at the root, and have a path like ",(0,n.jsx)(o.code,{children:"https://docusaurus.io/docs/"}),", you can use the slug front matter:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-md",children:"---\nid: my-home-doc\nslug: /\n---\n\nLorem ipsum\n"})}),"\n",(0,n.jsx)(o.h3,{id:"sidebars",children:"Sidebars"}),"\n",(0,n.jsxs)(o.p,{children:["When using ",(0,n.jsx)(o.a,{href:"/docusaurus-docs/docs/2.3.1/sidebar/autogenerated",children:"autogenerated sidebars"}),", the file structure will determine the sidebar structure."]}),"\n",(0,n.jsxs)(o.p,{children:["Our recommendation for file system organization is: make your file system mirror the sidebar structure (so you don't need to handwrite your ",(0,n.jsx)(o.code,{children:"sidebars.js"})," file), and use the ",(0,n.jsx)(o.code,{children:"slug"})," front matter to customize URLs of each document."]})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,t.ah)(),e.components);return o?(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,o,s)=>{s.d(o,{Zo:()=>i,ah:()=>d});var n=s(67294);const t=n.createContext({});function d(e){const o=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const r={};function i({components:e,children:o,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:d(e),n.createElement(t.Provider,{value:i},o)}}}]);