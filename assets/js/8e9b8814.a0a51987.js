"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[22479],{99419:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>d,metadata:()=>u,toc:()=>p});var t=r(85893),s=r(11151),i=r(51715),l=r(7626),c=r(91545),o=r(94926);const d={sidebar_position:3,slug:"/api/plugins/@docusaurus/plugin-content-pages"},a="\ud83d\udce6 plugin-content-pages",u={unversionedId:"api/plugins/plugin-content-pages",id:"api/plugins/plugin-content-pages",title:"\ud83d\udce6 plugin-content-pages",description:"Docusaurus \u7684\u9ed8\u8ba4\u9875\u9762\u63d2\u4ef6\u3002\u8fd9\u4e2a\u63d2\u4ef6\u7684\u7ecf\u5178\u6a21\u677f\u5e26\u6709\u9ed8\u8ba4\u914d\u7f6e\u3002\u8fd9\u4e2a\u63d2\u4ef6\u63d0\u4f9b\u4e86\u521b\u5efa\u9875\u9762\u529f\u80fd\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/plugins/plugin-content-pages.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-content-pages",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-content-pages",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/api/plugins/@docusaurus/plugin-content-pages"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-blog",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-content-blog"},next:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-client-redirects"}},h={},p=[{value:"Installation",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3},{value:"Markdown \u5143\u6570\u636e",id:"markdown-front-matter",level:2},{value:"i18n",id:"i18n",level:2},{value:"\u7ffb\u8bd1\u6587\u4ef6\u4f4d\u7f6e",id:"translation-files-location",level:3},{value:"\u793a\u4f8b\u6587\u4ef6\u7cfb\u7edf\u7ed3\u6784",id:"example-file-system-structure",level:3}];function j(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",admonition:"admonition",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",em:"em",h3:"h3",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-plugin-content-pages",children:"\ud83d\udce6 plugin-content-pages"}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["Docusaurus \u7684\u9ed8\u8ba4\u9875\u9762\u63d2\u4ef6\u3002\u8fd9\u4e2a\u63d2\u4ef6\u7684\u7ecf\u5178\u6a21\u677f\u5e26\u6709\u9ed8\u8ba4\u914d\u7f6e\u3002\u8fd9\u4e2a\u63d2\u4ef6\u63d0\u4f9b\u4e86",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/creating-pages",children:"\u521b\u5efa\u9875\u9762"}),"\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-content-pages\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-content-pages\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-content-pages\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u9884\u8bbe\u7684",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"}),"\uff0c\u4f60\u4e0d\u9700\u8981\u5c06\u8fd9\u4e2a\u63d2\u4ef6\u4f5c\u4e3a\u4f9d\u8d56\u9879\u5b89\u88c5\u3002"]}),(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u914d\u7f6e\u6b64\u63d2\u4ef6\u3002"})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u53d7\u5b57\u6bb5:"}),"\n",(0,t.jsx)(c.Z,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u5b57"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"path"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'src/pages'"})}),(0,t.jsx)(n.td,{children:"Path to data on filesystem relative to site dir. Components in this directory will be automatically converted to pages."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"routeBasePath"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'/'"})}),(0,t.jsxs)(n.td,{children:["URL route for the pages section of your site. ",(0,t.jsx)(n.strong,{children:"DO NOT"})," include a trailing slash."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"include"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"['**/*.{js,jsx,ts,tsx,md,mdx}']"})}),(0,t.jsx)(n.td,{children:"Matching files will be included and processed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"exclude"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"See example configuration"})}),(0,t.jsx)(n.td,{children:"No route will be created for matching files."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mdxPageComponent"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'@theme/MDXPage'"})}),(0,t.jsx)(n.td,{children:"Component used by each MDX page."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"remarkPlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:"Remark plugins passed to MDX."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rehypePlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:"Rehype plugins passed to MDX."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"beforeDefaultRemarkPlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:"Custom Remark plugins passed to MDX before the default Docusaurus Remark plugins."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"beforeDefaultRehypePlugins"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"any[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:"Custom Rehype plugins passed to MDX before the default Docusaurus Rehype plugins."})]})]})]})}),"\n",(0,t.jsx)(n.h3,{id:"ex-config",children:"\u793a\u4f8b\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u6216\u63d2\u4ef6\u9009\u9879\u6765\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u5927\u591a\u6570 Docusaurus \u7528\u6237\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"})}),"\n","\n",(0,t.jsx)(o.Z,{pluginName:"@docusaurus/plugin-content-pages",presetOptionName:"pages",code:'{\n  path: "src/pages",\n  routeBasePath: "",\n  include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],\n  exclude: ["**/_*.{js,jsx,ts,tsx,md,mdx}", "**/_*/**", "**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**"],\n  mdxPageComponent: "@theme/MDXPage",\n  remarkPlugins: [require("remark-math")],\n  rehypePlugins: [],\n  beforeDefaultRemarkPlugins: [],\n  beforeDefaultRehypePlugins: [],\n}'}),"\n",(0,t.jsx)(n.h2,{id:"markdown-front-matter",children:"Markdown \u5143\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:["Markdown \u9875\u9762\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b Markdown ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/markdown-features#front-matter",children:"\u9875\u524d"}),"\u5143\u6570\u636e\u5b57\u6bb5\uff0c\u5728\u4e24\u8fb9\u7528\u4e00\u884c",(0,t.jsx)(n.code,{children:"---"}),"\u62ec\u8d77\u6765\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u53d7\u5b57\u6bb5:"}),"\n",(0,t.jsx)(c.Z,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u5b57"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"title"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Markdown title"}),(0,t.jsx)(n.td,{children:"The blog post title."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"description"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"The first line of Markdown content"}),(0,t.jsxs)(n.td,{children:["The description of your page, which will become the ",(0,t.jsx)(n.code,{children:'<meta name="description" content="..."/>'})," and ",(0,t.jsx)(n.code,{children:'<meta property="og:description" content="..."/>'})," in ",(0,t.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keywords"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsxs)(n.td,{children:["Keywords meta tag, which will become the ",(0,t.jsx)(n.code,{children:'<meta name="keywords" content="keyword1,keyword2,..."/>'})," in ",(0,t.jsx)(n.code,{children:"<head>"}),", used by search engines."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"image"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"undefined"})}),(0,t.jsx)(n.td,{children:"Cover or thumbnail image that will be used when displaying the link to your post."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"wrapperClassName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Class name to be added to the wrapper element to allow targeting specific page content."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hide_table_of_contents"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Whether to hide the table of contents to the right."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"draft"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:"Draft pages will only be available during development."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"unlisted"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})}),(0,t.jsx)(n.td,{children:'Unlisted pages will be available in both development and production. They will be "hidden" in production, not indexed, excluded from sitemaps, and can only be accessed by users having a direct link.'})]})]})]})}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5b50:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",children:"---\ntitle: Markdown Page\ndescription: Markdown page SEO description\nwrapperClassName: markdown-page\nhide_table_of_contents: false\ndraft: true\n---\n\nMarkdown page content\n"})}),"\n",(0,t.jsx)(n.h2,{id:"i18n",children:"i18n"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\u9605\u8bfb",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/i18n/introduction",children:"i18n \u4ecb\u7ecd"}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"translation-files-location",children:"\u7ffb\u8bd1\u6587\u4ef6\u4f4d\u7f6e"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Base path"}),": ",(0,t.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Multi-instance path"}),": ",(0,t.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages-[pluginId]"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JSON files"}),": extracted with ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/cli#docusaurus-write-translations-sitedir",children:(0,t.jsx)(n.code,{children:"docusaurus write-translations"})})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Markdown files"}),": ",(0,t.jsx)(n.code,{children:"website/i18n/[locale]/docusaurus-plugin-content-pages"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example-file-system-structure",children:"\u793a\u4f8b\u6587\u4ef6\u7cfb\u7edf\u7ed3\u6784"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"website/i18n/[locale]/docusaurus-plugin-content-pages\n\u2502\n\u2502 # translations for website/src/pages\n\u251c\u2500\u2500 first-markdown-page.md\n\u2514\u2500\u2500 second-markdown-page.md\n"})})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(j,e)})):j(e)}},7626:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(85893),s=(r(67294),r(86010));const i={tabItem:"tabItem_Ymn6"};function l({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,r),hidden:n,children:e})}},51715:(e,n,r)=>{r.d(n,{Z:()=>N});var t=r(85893),s=r(67294),i=r(86010),l=r(8241),c=r(16550),o=r(40841),d=r(2834),a=r(35715),u=r(95417);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function j(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function x(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return j(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const r=(0,c.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,d._X)(t),l=(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(p(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[i,l]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=x(e),[l,c]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,a]=b({queryString:r,groupId:t}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),j=(()=>{const e=null!=d?d:h;return g({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),a(e),p(e)}),[a,p,i]),tabValues:i}}var m=r(90980);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){v(e,n,r[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function k({className:e,block:n,selectedValue:r,selectValue:s,tabValues:c}){const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),a=e=>{const n=e.currentTarget,t=o.indexOf(n),i=c[t].value;i!==r&&(d(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[o.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:c.map((({value:e,label:n,attributes:s})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>o.push(e),onKeyDown:u,onClick:a},s),{className:(0,i.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:r}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function D(e){const n=f(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,t.jsx)(k,w({},e,n)),(0,t.jsx)(P,w({},e,n))]})}function N(e){const n=(0,m.Z)();return(0,t.jsx)(D,O(w({},e),{children:j(e.children)}),String(n))}},91545:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(85893),s=r(67294),i=r(16550);const l={apiTable:"apiTable_e8hp"};function c({name:e,children:n},r){const l=function(e){let n=e;for(;(0,s.isValidElement)(n);)[n]=s.Children.toArray(n.props.children);return n}(n),c=e?`${e}-${l}`:l,o=`#${c}`,d=(0,i.k6)();return(0,t.jsx)("tr",{id:c,tabIndex:0,ref:d.location.hash===o?r:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||d.push(o)},onKeyDown:e=>{"Enter"===e.key&&d.push(o)},children:n.props.children})}const o=s.forwardRef(c);function d({children:e,name:n}){const[r,i]=s.Children.toArray(e.props.children),c=(0,s.useRef)(null);(0,s.useEffect)((()=>{var e;null===(e=c.current)||void 0===e||e.focus()}),[c]);const d=s.Children.map(i.props.children,(e=>(0,t.jsx)(o,{name:n,ref:c,children:e})));return(0,t.jsxs)("table",{className:l.apiTable,children:[r,(0,t.jsx)("tbody",{children:d})]})}},94926:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(85893),s=(r(67294),r(61596)),i=r(97203),l=r(27692),c=r(51715),o=r(7626),d=r(92101);const a=void 0;function u({code:e,pluginName:n,presetOptionName:r}){const u=(0,i.zu)(a).path;return(0,t.jsxs)(c.Z,{groupId:"api-config-ex",children:[(0,t.jsxs)(o.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,t.jsx)("p",{children:(0,t.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,t.jsx)(s.Z,{to:`${u}/using-plugins#docusauruspreset-classic`,children:(0,t.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,t.jsx)(d.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${r}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,t.jsxs)(o.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,t.jsx)("p",{children:(0,t.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,t.jsx)(d.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${n}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},92101:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(85893),s=(r(67294),r(50191));function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e){return(0,t.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}({},e))}},5379:(e,n,r)=>{r.d(n,{Z:()=>u});var t={};r.r(t),r.d(t,{ButtonExample:()=>d});var s=r(67294),i=r(85893);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function d(e){return(0,i.jsx)("button",o(c({type:"button"},e),{style:c({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}const u=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}({React:s},s,t)}}]);