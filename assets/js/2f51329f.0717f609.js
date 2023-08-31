"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[66123],{4635:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var d=t(85893),n=t(11151);const s={id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},r="\u5934\u5143\u6570\u636e",o={unversionedId:"guides/markdown-features/head-metadata",id:"guides/markdown-features/head-metadata",title:"\u5934\u5143\u6570\u636e",description:"Declaring page-specific head metadata through MDX",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/markdown-features/markdown-features-head-metadata.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/head-metadata",permalink:"/docusaurus-docs/docs/next/markdown-features/head-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-head-metadata.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},sidebar:"docs",previous:{title:"\u56fe\u8868",permalink:"/docusaurus-docs/docs/next/markdown-features/diagrams"},next:{title:"\u6837\u5f0f\u548c\u5e03\u5c40",permalink:"/docusaurus-docs/docs/next/styling-layout"}},i={},c=[{value:"\u81ea\u5b9a\u4e49\u5934\u90e8\u5143\u6570\u636e",id:"customizing-head-metadata",level:2},{value:"Markdown \u9875\u9762\u63cf\u8ff0",id:"markdown-page-description",level:2}];function l(e){const a=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",admonition:"admonition",a:"a",strong:"strong"},(0,n.ah)(),e.components),{Head:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.h1,{id:"\u5934\u5143\u6570\u636e",children:"\u5934\u5143\u6570\u636e"}),"\n",(0,d.jsx)(a.h2,{id:"customizing-head-metadata",children:"\u81ea\u5b9a\u4e49\u5934\u90e8\u5143\u6570\u636e"}),"\n",(0,d.jsxs)(a.p,{children:["Docusaurus \u81ea\u52a8\u4e3a\u60a8\u5728",(0,d.jsx)(a.code,{children:"<html>"}),"\uff0c ",(0,d.jsx)(a.code,{children:"<head>"}),"\u548c",(0,d.jsx)(a.code,{children:"<body>"}),"\u4e2d\u8bbe\u7f6e\u6709\u7528\u7684\u9875\u9762\u5143\u6570\u636e\u3002\u53ef\u4ee5\u5728 Markdown \u6587\u4ef6\u4e2d\u4f7f\u7528",(0,d.jsx)(a.code,{children:"<head>"}),"\u6807\u7b7e\u6dfb\u52a0\u989d\u5916\u7684\u5143\u6570\u636e(\u6216\u8986\u76d6\u73b0\u6709\u7684\u5143\u6570\u636e):"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-md",metastring:'title="markdown-features-head-metadata.mdx"',children:'---\nid: head-metadata\ntitle: Head Metadata\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <html className="some-extra-html-class" />\n  <body className="other-extra-body-class" />\n  <title>Head Metadata customized title!</title>\n  <meta charSet="utf-8" />\n  <meta name="twitter:card" content="summary" />\n  <link rel="canonical" href="https://docusaurus.io/docs/markdown-features/head-metadata" />\n</head>\n\x3c!-- highlight-end --\x3e\n\n# \u5934\u5143\u6570\u636e\n\nMy text\n'})}),"\n",(0,d.jsxs)(t,{children:[(0,d.jsx)("html",{className:"some-extra-html-class"}),(0,d.jsx)("body",{className:"other-extra-body-class"}),(0,d.jsx)("title",{children:"Head Metadata customized title!"}),(0,d.jsx)("meta",{charSet:"utf-8"}),(0,d.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,d.jsx)("link",{rel:"canonical",href:"https://docusaurus.io/docs/markdown-features/head-metadata"})]}),"\n",(0,d.jsxs)(a.p,{children:["\u8fd9\u4e2a",(0,d.jsx)(a.code,{children:"<head>"}),"\u58f0\u660e\u5df2\u7ecf\u88ab\u6dfb\u52a0\u5230\u5f53\u524d\u7684 Markdown \u6587\u6863\u4e2d\u4f5c\u4e3a\u6f14\u793a\u3002\u6253\u5f00\u4f60\u7684 DevTools \u6d4f\u89c8\u5668\uff0c\u68c0\u67e5\u8fd9\u4e2a\u9875\u9762\u7684\u5143\u6570\u636e\u662f\u5982\u4f55\u53d7\u5230\u5f71\u54cd\u7684\u3002"]}),"\n",(0,d.jsx)(a.admonition,{type:"note",children:(0,d.jsxs)(a.p,{children:["\u6b64\u529f\u80fd\u6784\u5efa\u5728 Docusaurus ",(0,d.jsx)(a.a,{href:"/docusaurus-docs/docs/next/docusaurus-core#head",children:(0,d.jsx)(a.code,{children:"<Head>"})}),"\u7ec4\u4ef6\u4e4b\u4e0a\u3002\u8bf7\u53c2\u9605",(0,d.jsx)(a.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"}),"\u83b7\u53d6\u8be6\u5c3d\u7684\u6587\u6863\u3002"]})}),"\n",(0,d.jsx)(a.admonition,{title:"\u5bf9\u4e8e\u5e38\u89c4\u7684 SEO\uff0c\u4f60\u4e0d\u9700\u8981\u8fd9\u4e2a",type:"tip",children:(0,d.jsxs)(a.p,{children:["\u5185\u5bb9\u63d2\u4ef6(\u4f8b\u5982 docs \u548c blog)\u63d0\u4f9b\u4e86\u50cf",(0,d.jsx)(a.code,{children:"description"}),"\u3001",(0,d.jsx)(a.code,{children:"keywords"}),"\u548c",(0,d.jsx)(a.code,{children:"image"}),"\u8fd9\u6837\u7684\u524d\u9762\u5185\u5bb9\u9009\u9879\uff0c\u8fd9\u4e9b\u9009\u9879\u5c06\u81ea\u52a8\u5e94\u7528\u4e8e",(0,d.jsx)(a.code,{children:"description"}),"\u548c",(0,d.jsx)(a.code,{children:"og:description"}),"\uff0c\u800c\u5f53\u4f60\u4f7f\u7528",(0,d.jsx)(a.code,{children:"<head>"}),"\u6807\u7b7e\u65f6\uff0c\u4f60\u5fc5\u987b\u624b\u52a8\u58f0\u660e\u4e24\u4e2a\u5143\u6570\u636e\u6807\u7b7e\u3002"]})}),"\n",(0,d.jsx)(a.h2,{id:"markdown-page-description",children:"Markdown \u9875\u9762\u63cf\u8ff0"}),"\n",(0,d.jsxs)(a.p,{children:["Markdown \u9875\u9762\u7684\u63cf\u8ff0\u5143\u6570\u636e\u53ef\u4ee5\u5728\u6bd4\u6807\u9898\u5143\u6570\u636e\u66f4\u591a\u7684\u5730\u65b9\u4f7f\u7528\u3002\u4f8b\u5982\uff0cdocs \u63d2\u4ef6\u7684",(0,d.jsx)(a.a,{href:"/docusaurus-docs/docs/next/sidebar/items#generated-index-page",children:"\u751f\u6210\u7684\u5206\u7c7b\u7d22\u5f15"}),"\u4f7f\u7528\u6587\u6863\u5361\u7684\u63cf\u8ff0\u5143\u6570\u636e\u3002"]}),"\n",(0,d.jsx)(a.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u63cf\u8ff0\u662f\u7b2c\u4e00\u4e2a\u5185\u5bb9\u4e30\u5bcc\u7684\u884c\uff0c\u7ecf\u8fc7\u4e00\u4e9b\u52aa\u529b\u5c06\u5176\u8f6c\u6362\u4e3a\u7eaf\u6587\u672c\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u6587\u4ef6\u2026"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-md",children:"# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})}),"\n",(0,d.jsxs)(a.p,{children:['...\u4f1a\u6709\u9ed8\u8ba4\u7684\u63cf\u8ff0\u5417"Main content... May contain some links or emphasis". \u7136\u800c\uff0c',(0,d.jsx)(a.strong,{children:"\u5b83\u5e76\u6ca1\u6709\u88ab\u8bbe\u8ba1\u6210\u529f\u80fd\u9f50\u5168"}),"\u3002\u5982\u679c\u65e0\u6cd5\u63d0\u4f9b\u5408\u7406\u7684\u63cf\u8ff0\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u9996\u9875\u5185\u5bb9\u660e\u786e\u63d0\u4f9b:"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-md",children:"---\ndescription: This description will override the default.\n---\n\n# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,d.jsx)(a,Object.assign({},e,{children:(0,d.jsx)(l,e)})):l(e)}},11151:(e,a,t)=>{t.d(a,{Zo:()=>o,ah:()=>s});var d=t(67294);const n=d.createContext({});function s(e){const a=d.useContext(n);return d.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const r={};function o({components:e,children:a,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:s(e),d.createElement(n.Provider,{value:o},a)}}}]);