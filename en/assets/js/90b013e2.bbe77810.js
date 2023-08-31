"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[12577],{40817:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var d=t(85893),n=t(11151);const s={id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},o="Head metadata",i={unversionedId:"guides/markdown-features/head-metadata",id:"version-3.0.0-alpha.0/guides/markdown-features/head-metadata",title:"Head metadata",description:"Declaring page-specific head metadata through MDX",source:"@site/versioned_docs/version-3.0.0-alpha.0/guides/markdown-features/markdown-features-head-metadata.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/head-metadata",permalink:"/docusaurus-docs/en/docs/3.0.0-alpha.0/markdown-features/head-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-head-metadata.mdx",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},sidebar:"docs",previous:{title:"Diagrams",permalink:"/docusaurus-docs/en/docs/3.0.0-alpha.0/markdown-features/diagrams"},next:{title:"Styling and Layout",permalink:"/docusaurus-docs/en/docs/3.0.0-alpha.0/styling-layout"}},r={},c=[{value:"Customizing head metadata",id:"customizing-head-metadata",level:2},{value:"Markdown page description",id:"markdown-page-description",level:2}];function l(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",admonition:"admonition",a:"a",strong:"strong"},(0,n.ah)(),e.components),{Head:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.h1,{id:"head-metadata",children:"Head metadata"}),"\n",(0,d.jsx)(a.h2,{id:"customizing-head-metadata",children:"Customizing head metadata"}),"\n",(0,d.jsxs)(a.p,{children:["Docusaurus automatically sets useful page metadata in ",(0,d.jsx)(a.code,{children:"<html>"}),", ",(0,d.jsx)(a.code,{children:"<head>"})," and ",(0,d.jsx)(a.code,{children:"<body>"})," for you. It is possible to add extra metadata (or override existing ones) with the ",(0,d.jsx)(a.code,{children:"<head>"})," tag in Markdown files:"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-md",metastring:'title="markdown-features-head-metadata.mdx"',children:'---\nid: head-metadata\ntitle: Head Metadata\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <html className="some-extra-html-class" />\n  <body className="other-extra-body-class" />\n  <title>Head Metadata customized title!</title>\n  <meta charSet="utf-8" />\n  <meta name="twitter:card" content="summary" />\n  <link rel="canonical" href="https://docusaurus.io/docs/markdown-features/head-metadata" />\n</head>\n\x3c!-- highlight-end --\x3e\n\n# Head Metadata\n\nMy text\n'})}),"\n",(0,d.jsxs)(t,{children:[(0,d.jsx)("html",{className:"some-extra-html-class"}),(0,d.jsx)("body",{className:"other-extra-body-class"}),(0,d.jsx)("title",{children:"Head Metadata customized title!"}),(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,d.jsx)("link",{rel:"canonical",href:"https://docusaurus.io/docs/markdown-features/head-metadata"})]}),"\n",(0,d.jsxs)(a.p,{children:["This ",(0,d.jsx)(a.code,{children:"<head>"})," declaration has been added to the current Markdown doc as a demo. Open your browser DevTools and check how this page's metadata has been affected."]}),"\n",(0,d.jsx)(a.admonition,{type:"note",children:(0,d.jsxs)(a.p,{children:["This feature is built on top of the Docusaurus ",(0,d.jsx)(a.a,{href:"/docusaurus-docs/en/docs/3.0.0-alpha.0/docusaurus-core#head",children:(0,d.jsx)(a.code,{children:"<Head>"})})," component. Refer to ",(0,d.jsx)(a.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"})," for exhaustive documentation."]})}),"\n",(0,d.jsx)(a.admonition,{title:"You don't need this for regular SEO",type:"tip",children:(0,d.jsxs)(a.p,{children:["Content plugins (e.g. docs and blog) provide front matter options like ",(0,d.jsx)(a.code,{children:"description"}),", ",(0,d.jsx)(a.code,{children:"keywords"}),", and ",(0,d.jsx)(a.code,{children:"image"}),", which will be automatically applied to both ",(0,d.jsx)(a.code,{children:"description"})," and ",(0,d.jsx)(a.code,{children:"og:description"}),", while you would have to manually declare two metadata tags when using the ",(0,d.jsx)(a.code,{children:"<head>"})," tag."]})}),"\n",(0,d.jsx)(a.h2,{id:"markdown-page-description",children:"Markdown page description"}),"\n",(0,d.jsxs)(a.p,{children:["The Markdown pages' description metadata may be used in more places than the head metadata. For example, the docs plugin's ",(0,d.jsx)(a.a,{href:"/docusaurus-docs/en/docs/3.0.0-alpha.0/sidebar/items#generated-index-page",children:"generated category index"})," uses the description metadata for the doc cards."]}),"\n",(0,d.jsx)(a.p,{children:"By default, the description is the first content-ful line, with some efforts to convert it to plain text. For example, the following file..."}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-md",children:"# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})}),"\n",(0,d.jsxs)(a.p,{children:['...will have the default description "Main content... May contain some links or emphasis". However, ',(0,d.jsx)(a.strong,{children:"it's not designed to be fully functional"}),". Where it fails to produce reasonable descriptions, you can explicitly provide one through front matter:"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-md",children:"---\ndescription: This description will override the default.\n---\n\n# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,d.jsx)(a,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>i,ah:()=>s});var d=t(67294);const n=d.createContext({});function s(e){const a=d.useContext(n);return d.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function i({components:e,children:a,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:s(e),d.createElement(n.Provider,{value:i},a)}}}]);