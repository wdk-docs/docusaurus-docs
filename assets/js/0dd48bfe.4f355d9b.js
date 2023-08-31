"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[62228],{48380:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(85893),t=n(11151),o=n(16212);const r={description:"How to make your Docusaurus site maximally search-engine-friendly.",sidebar_label:"SEO",keywords:["seo","positioning"]},i="Search engine optimization (SEO)",d={unversionedId:"seo",id:"version-2.4.1/seo",title:"Search engine optimization (SEO)",description:"How to make your Docusaurus site maximally search-engine-friendly.",source:"@site/versioned_docs/version-2.4.1/seo.mdx",sourceDirName:".",slug:"/seo",permalink:"/docusaurus-docs/docs/seo",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{description:"How to make your Docusaurus site maximally search-engine-friendly.",sidebar_label:"SEO",keywords:["seo","positioning"]},sidebar:"docs",previous:{title:"Browser support",permalink:"/docusaurus-docs/docs/browser-support"},next:{title:"Using Plugins",permalink:"/docusaurus-docs/docs/using-plugins"}},c={},l=[{value:"Global metadata",id:"global-metadata",level:2},{value:"Single page metadata",id:"single-page-metadata",level:2},{value:"Static HTML generation",id:"static-html-generation",level:2},{value:"Image meta description",id:"image-meta-description",level:2},{value:"Rich search information",id:"rich-search-information",level:2},{value:"Robots file",id:"robots-file",level:2},{value:"Sitemap file",id:"sitemap-file",level:2},{value:"Human readable links",id:"human-readable-links",level:2},{value:"Structured content",id:"structured-content",level:2}];function h(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",code:"code",pre:"pre",admonition:"admonition",img:"img",strong:"strong"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"search-engine-optimization-seo",children:"Search engine optimization (SEO)"}),"\n","\n","\n",(0,a.jsx)(s.p,{children:"Docusaurus supports search engine optimization in a variety of ways."}),"\n",(0,a.jsx)(s.h2,{id:"global-metadata",children:"Global metadata"}),"\n",(0,a.jsxs)(s.p,{children:["Provide global meta attributes for the entire site through the ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/configuration#site-metadata",children:"site configuration"}),". The metadata will all be rendered in the HTML ",(0,a.jsx)(s.code,{children:"<head>"})," using the key-value pairs as the prop name and value."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    metadata: [{name: 'keywords', content: 'cooking, blog'}],\n    // This would become <meta name=\"keywords\" content=\"cooking, blog\"/> in the generated HTML\n  },\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus adds some metadata out-of-the-box. For example, if you have configured ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/i18n/introduction",children:"i18n"}),", you will get a ",(0,a.jsx)(s.a,{href:"https://developers.google.com/search/docs/advanced/crawling/localized-versions",children:(0,a.jsx)(s.code,{children:"hreflang"})})," alternate link."]}),"\n",(0,a.jsxs)(s.p,{children:["To read more about types of meta tags, visit ",(0,a.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta",children:"the MDN docs"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"single-page-metadata",children:"Single page metadata"}),"\n",(0,a.jsxs)(s.p,{children:["Similar to ",(0,a.jsx)(s.a,{href:"#global-metadata",children:"global metadata"}),", Docusaurus also allows for the addition of meta-information to individual pages. Follow ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/markdown-features/head-metadata",children:"this guide"})," for configuring the ",(0,a.jsx)(s.code,{children:"<head>"})," tag. In short:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-md",metastring:'title="my-markdown-page.md"',children:'# A cooking guide\n\n<head>\n  <meta name="keywords" content="cooking, blog"/>\n</head>\n\nSome content...\n'})}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus automatically adds ",(0,a.jsx)(s.code,{children:"description"}),", ",(0,a.jsx)(s.code,{children:"title"}),", canonical URL links, and other useful metadata to each Markdown page. They are configurable through front matter:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-md",children:"---\ntitle: Title for search engines; can be different from the actual heading\ndescription: A short description of this page\nimage: a thumbnail image to be shown in social media cards\nkeywords: [keywords, describing, the main topics]\n---\n"})}),"\n",(0,a.jsxs)(s.p,{children:["When creating your React page, adding these fields in ",(0,a.jsx)(s.code,{children:"Layout"})," would also improve SEO."]}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["Prefer to use front matter for fields like ",(0,a.jsx)(s.code,{children:"description"})," and ",(0,a.jsx)(s.code,{children:"keywords"}),": Docusaurus will automatically apply this to both ",(0,a.jsx)(s.code,{children:"description"})," and ",(0,a.jsx)(s.code,{children:"og:description"}),", while you would have to manually declare two metadata tags when using the ",(0,a.jsx)(s.code,{children:"<head>"})," tag."]})}),"\n",(0,a.jsxs)(s.p,{children:["For JSX pages, you can use the Docusaurus ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/docusaurus-core#head",children:(0,a.jsx)(s.code,{children:"<Head>"})})," component."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-jsx",metastring:'title="my-react-page.jsx"',children:'import React from \'react\';\nimport Layout from \'@theme/Layout\';\nimport Head from \'@docusaurus/Head\';\n\nexport default function page() {\n  return (\n    <Layout title="Page" description="A React page demo">\n      <Head>\n        <meta property="og:image" content="image.png" />\n      </Head>\n      {/* ... */}\n    </Layout>\n  );\n}\n'})}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["For convenience, the default theme ",(0,a.jsx)(s.code,{children:"<Layout>"})," component accept ",(0,a.jsx)(s.code,{children:"title"})," and ",(0,a.jsx)(s.code,{children:"description"})," as props."]})}),"\n",(0,a.jsx)(s.h2,{id:"static-html-generation",children:"Static HTML generation"}),"\n",(0,a.jsx)(s.p,{children:"Docusaurus is a static site generator\u2014HTML files are statically generated for every URL route, which helps search engines discover your content more easily."}),"\n",(0,a.jsx)(s.h2,{id:"image-meta-description",children:"Image meta description"}),"\n",(0,a.jsx)(s.p,{children:"The alt tag for an image tells the search engine what the image is about, and is used when the image can't be visually seen, e.g. when using a screen reader, or when the image is broken. Alt tags are commonly supported in Markdown."}),"\n",(0,a.jsx)(s.p,{children:"You may also add a title for your image\u2014this doesn't impact SEO much but is displayed as a tooltip when hovering above the image, usually used to provide hints."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-md",children:"![Docusaurus banner](./assets/docusaurus-asset-example-banner.png 'Image title')\n"})}),"\n",(0,a.jsx)(o.Z,{children:(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Docusaurus banner",src:n(21605).Z+"",title:"Image title",width:"422",height:"110"})})}),"\n",(0,a.jsx)(s.h2,{id:"rich-search-information",children:"Rich search information"}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus blogs support ",(0,a.jsx)(s.a,{href:"https://search.google.com/test/rich-results",children:"rich search results"})," out-of-the-box to get maximum search engine experience. The information is created depending on your meta information in blog/global configuration. In order to get the benefits of the rich search information, fill in the information about the post's publish date, authors, and image, etc. Read more about the meta-information ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/blog",children:"here"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"robots-file",children:"Robots file"}),"\n",(0,a.jsxs)(s.p,{children:["A ",(0,a.jsx)(s.code,{children:"robots.txt"})," file regulates search engines' behavior about which should be displayed and which shouldn't. You can provide it as ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/static-assets",children:"static asset"}),". The following would allow access to all sub-pages from all requests:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",metastring:'title="static/robots.txt"',children:"User-agent: *\nDisallow:\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Read more about the robots file in ",(0,a.jsx)(s.a,{href:"https://developers.google.com/search/docs/advanced/robots/intro",children:"the Google documentation"}),"."]}),"\n",(0,a.jsxs)(s.admonition,{type:"caution",children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Important"}),": the ",(0,a.jsx)(s.code,{children:"robots.txt"})," file does ",(0,a.jsx)(s.strong,{children:"not"})," prevent HTML pages from being indexed."]}),(0,a.jsxs)(s.p,{children:["To prevent your whole Docusaurus site from being indexed, use the ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/api/docusaurus-config#noIndex",children:(0,a.jsx)(s.code,{children:"noIndex"})})," site config. Some ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/deployment",children:"hosting providers"})," may also let you configure a ",(0,a.jsx)(s.code,{children:"X-Robots-Tag: noindex"})," HTTP header (GitHub Pages does not support this)."]}),(0,a.jsxs)(s.p,{children:["To prevent a single page from being indexed, use ",(0,a.jsx)(s.code,{children:'<meta name="robots" content="noindex">'})," as ",(0,a.jsx)(s.a,{href:"#single-page-metadata",children:"page metadata"}),". Read more about the ",(0,a.jsx)(s.a,{href:"https://developers.google.com/search/docs/advanced/robots/robots_meta_tag",children:"robots meta tag"}),"."]})]}),"\n",(0,a.jsx)(s.h2,{id:"sitemap-file",children:"Sitemap file"}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus provides the ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/api/plugins/@docusaurus/plugin-sitemap",children:(0,a.jsx)(s.code,{children:"@docusaurus/plugin-sitemap"})})," plugin, which is shipped with ",(0,a.jsx)(s.code,{children:"preset-classic"})," by default. It autogenerates a ",(0,a.jsx)(s.code,{children:"sitemap.xml"})," file which will be available at ",(0,a.jsx)(s.code,{children:"https://example.com/[baseUrl]/sitemap.xml"})," after the production build. This sitemap metadata helps search engine crawlers crawl your site more accurately."]}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:["The sitemap plugin automatically filters pages containing a ",(0,a.jsx)(s.code,{children:"noindex"})," ",(0,a.jsx)(s.a,{href:"https://developers.google.com/search/docs/advanced/robots/robots_meta_tag",children:"robots meta directive"}),"."]}),(0,a.jsxs)(s.p,{children:["For example, ",(0,a.jsx)(s.a,{href:"/examples/noIndex",children:(0,a.jsx)(s.code,{children:"/examples/noIndex"})})," is not included in the ",(0,a.jsx)(s.a,{href:"pathname:///sitemap.xml",children:"Docusaurus sitemap.xml file"})," because it contains the following ",(0,a.jsx)(s.a,{href:"#single-page-metadata",children:"page metadata"}),":"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:'<head>\n  <meta name="robots" content="noindex, nofollow" />\n</head>\n'})})]}),"\n",(0,a.jsx)(s.h2,{id:"human-readable-links",children:"Human readable links"}),"\n",(0,a.jsxs)(s.p,{children:["Docusaurus uses your file names as links, but you can always change that using slugs, see this ",(0,a.jsx)(s.a,{href:"/docusaurus-docs/docs/docs-introduction#document-id",children:"tutorial"})," for more details."]}),"\n",(0,a.jsx)(s.h2,{id:"structured-content",children:"Structured content"}),"\n",(0,a.jsxs)(s.p,{children:["Search engines rely on the HTML markup such as ",(0,a.jsx)(s.code,{children:"<h2>"}),", ",(0,a.jsx)(s.code,{children:"<table>"}),", etc., to understand the structure of your webpage. When Docusaurus renders your pages, semantic markup, e.g. ",(0,a.jsx)(s.code,{children:"<aside>"}),", ",(0,a.jsx)(s.code,{children:"<nav>"}),", ",(0,a.jsx)(s.code,{children:"<main>"}),", are used to divide the different sections of the page, helping the search engine to locate parts like sidebar, navbar, and the main page content."]}),"\n",(0,a.jsxs)(s.p,{children:["Most ",(0,a.jsx)(s.a,{href:"https://spec.commonmark.org/0.30/#atx-headings",children:"CommonMark"})," syntaxes have their corresponding HTML tags. By using Markdown consistently in your project, you will make it easier for search engines to understand your page content."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},16212:(e,s,n)=>{n.d(s,{Z:()=>c});var a=n(85893),t=(n(67294),n(86010));const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function r(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function i(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(s){r(e,s,n[s])}))}return e}function d(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,a)}return n}(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})),e}function c({children:e,minHeight:s,url:n="http://localhost:3000",style:r,bodyStyle:c}){return(0,a.jsxs)("div",{className:o.browserWindow,style:d(i({},r),{minHeight:s}),children:[(0,a.jsxs)("div",{className:o.browserWindowHeader,children:[(0,a.jsxs)("div",{className:o.buttons,children:[(0,a.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,t.Z)(o.browserWindowAddressBar,"text--truncate"),children:n}),(0,a.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:o.bar}),(0,a.jsx)("span",{className:o.bar}),(0,a.jsx)("span",{className:o.bar})]})})]}),(0,a.jsx)("div",{className:o.browserWindowBody,style:c,children:e})]})}},21605:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/docusaurus-asset-example-banner-63decf1180b7949f4c3d0f7b7ecfd162.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>o});var a=n(67294);const t=a.createContext({});function o(e){const s=a.useContext(t);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:o(e),a.createElement(t.Provider,{value:i},s)}}}]);