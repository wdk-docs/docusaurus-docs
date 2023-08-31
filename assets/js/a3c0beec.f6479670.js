"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[70102],{64228:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=n(85893),a=n(11151),l=n(16212),t=n(53058);const o={id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},c="Headings and Table of contents",d={unversionedId:"guides/markdown-features/toc",id:"version-3.0.0-alpha.0/guides/markdown-features/toc",title:"Headings and Table of contents",description:"Customizing headings and table-of-contents in Markdown",source:"@site/versioned_docs/version-3.0.0-alpha.0/guides/markdown-features/markdown-features-toc.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/toc",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/toc",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},sidebar:"docs",previous:{title:"Admonitions",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/admonitions"},next:{title:"Assets",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/assets"}},u={},r=[{value:"Markdown headings",id:"markdown-headings",level:2},{value:"Heading IDs",id:"heading-ids",level:3},{value:"Table of contents heading level",id:"table-of-contents-heading-level",level:2},{value:"Inline table of contents",id:"inline-table-of-contents",level:2},{value:"Customizing table of contents generation",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}];function b(e){const s=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",strong:"strong",ul:"ul",li:"li",admonition:"admonition",a:"a",em:"em",hr:"hr",h4:"h4"},(0,a.ah)(),e.components),{Code:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Code",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"headings-and-table-of-contents",children:"Headings and Table of contents"}),"\n",(0,i.jsx)(s.h2,{id:"markdown-headings",children:"Markdown headings"}),"\n",(0,i.jsx)(s.p,{children:"You can use regular Markdown headings."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n"})}),"\n",(0,i.jsx)(s.p,{children:"Each Markdown heading will appear as a table of contents entry."}),"\n",(0,i.jsx)(s.h3,{id:"heading-ids",children:"Heading IDs"}),"\n",(0,i.jsx)(s.p,{children:"Each heading has an ID that can be automatically generated or explicitly specified. Heading IDs allow you to link to a specific document heading in Markdown or JSX:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:"[link](#heading-id)\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:'<Link to="#heading-id">link</Link>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["By default, Docusaurus will generate heading IDs for you, based on the heading text. For example, ",(0,i.jsx)(s.code,{children:"### Hello World"})," will have ID ",(0,i.jsx)(s.code,{children:"hello-world"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Generated IDs have ",(0,i.jsx)(s.strong,{children:"some limitations"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"The ID might not look good"}),"\n",(0,i.jsxs)(s.li,{children:["You might want to ",(0,i.jsx)(s.strong,{children:"change or translate"})," the text without updating the existing ID"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["A special Markdown syntax lets you set an ",(0,i.jsx)(s.strong,{children:"explicit heading id"}),":"]}),"\n",(0,i.jsx)(n,{language:"md",children:"### Hello World {#my-explicit-id}\n"}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Use the ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/cli#docusaurus-write-heading-ids-sitedir",children:(0,i.jsx)(s.code,{children:"write-heading-ids"})})})," CLI command to add explicit IDs to all your Markdown documents."]})}),"\n",(0,i.jsx)(s.admonition,{title:"Avoid colliding IDs",type:"caution",children:(0,i.jsx)(s.p,{children:"Generated heading IDs will be guaranteed to be unique on each page, but if you use custom IDs, make sure each one appears exactly once on each page, or there will be two DOM elements with the same ID, which is invalid HTML semantics, and will lead to one heading being unlinkable."})}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents-heading-level",children:"Table of contents heading level"}),"\n",(0,i.jsx)(s.p,{children:"Each Markdown document displays a table of contents on the top-right corner. By default, this table only shows h2 and h3 headings, which should be sufficient for an overview of the page structure. In case you need to change the range of headings displayed, you can customize the minimum and maximum heading level \u2014 either per page or globally."}),"\n",(0,i.jsxs)(s.p,{children:["To set the heading level for a particular page, use the ",(0,i.jsx)(s.code,{children:"toc_min_heading_level"})," and ",(0,i.jsx)(s.code,{children:"toc_max_heading_level"})," front matter."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",metastring:'title="myDoc.md"',children:"---\n# Display h2 to h5 headings\ntoc_min_heading_level: 2\ntoc_max_heading_level: 5\n---\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To set the heading level for ",(0,i.jsx)(s.em,{children:"all"})," pages, use the ",(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/api/themes/configuration#table-of-contents",children:(0,i.jsx)(s.code,{children:"themeConfig.tableOfContents"})})," option."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    tableOfContents: {\n      // highlight-start\n      minHeadingLevel: 2,\n      maxHeadingLevel: 5,\n      // highlight-end\n    },\n  },\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"If you've set the options globally, you can still override them locally via front matter."}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"themeConfig"})," option would apply to all TOC on the site, including ",(0,i.jsx)(s.a,{href:"#inline-table-of-contents",children:"inline TOC"}),", but front matter options only affect the top-right TOC. You need to use the ",(0,i.jsx)(s.code,{children:"minHeadingLevel"})," and ",(0,i.jsx)(s.code,{children:"maxHeadingLevel"})," props to customize each ",(0,i.jsx)(s.code,{children:"<TOCInline />"})," component."]})}),"\n",(0,i.jsx)(s.h2,{id:"inline-table-of-contents",children:"Inline table of contents"}),"\n",(0,i.jsx)(s.p,{children:"It is also possible to display an inline table of contents directly inside a Markdown document, thanks to MDX."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"toc"})," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,i.jsx)(s.code,{children:"h2"})," and ",(0,i.jsx)(s.code,{children:"h3"})," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,i.jsx)(s.code,{children:"minHeadingLevel"})," or ",(0,i.jsx)(s.code,{children:"maxHeadingLevel"})," for individual ",(0,i.jsx)(s.code,{children:"TOCInline"})," components."]}),"\n","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n"})}),"\n","\n","\n",(0,i.jsx)(l.Z,{children:(0,i.jsx)(t.Z,{toc:r})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"toc"})," global is just a list of heading items:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Note that the ",(0,i.jsx)(s.code,{children:"toc"})," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."]}),"\n","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-jsx",children:"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n"})}),"\n",(0,i.jsx)(l.Z,{children:(0,i.jsx)(t.Z,{toc:r.filter((e=>2===e.level||4===e.level)),minHeadingLevel:2,maxHeadingLevel:4})}),"\n",(0,i.jsx)(s.h2,{id:"customizing-table-of-contents-generation",children:"Customizing table of contents generation"}),"\n",(0,i.jsxs)(s.p,{children:["The table-of-contents is generated by parsing the Markdown source with a ",(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/plugins",children:"Remark plugin"}),". There are known edge-cases where it generates false-positives and false-negatives."]}),"\n",(0,i.jsxs)(s.p,{children:["Markdown headings within hideable areas will still show up in the TOC. For example, headings within ",(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/tabs",children:(0,i.jsx)(s.code,{children:"Tabs"})})," and ",(0,i.jsx)(s.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features#details",children:(0,i.jsx)(s.code,{children:"details"})})," will not be excluded."]}),"\n",(0,i.jsx)(s.p,{children:"Non-Markdown headings will not show up in the TOC. This can be used to your advantage to tackle the aforementioned issue."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-md",children:'<details>\n<summary>Some details containing headings</summary>\n<h2 id="#heading-id">I\'m a heading that will not show up in the TOC</h2>\n\nSome content...\n\n</details>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["The ability to ergonomically insert extra headings or ignore certain headings is a work-in-progress. If this feature is important to you, please report your use-case in ",(0,i.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/issues/6201",children:"this issue"}),"."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsx)(s.p,{children:"Below is just some dummy content to have more table of contents items available on the current page."})}),"\n",(0,i.jsx)(s.h2,{id:"example-section-1",children:"Example Section 1"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-1-a",children:"Example Subsection 1 a"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-a-i",children:"Example subsubsection 1 a I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-a-ii",children:"Example subsubsection 1 a II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-a-iii",children:"Example subsubsection 1 a III"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-1-b",children:"Example Subsection 1 b"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-b-i",children:"Example subsubsection 1 b I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-b-ii",children:"Example subsubsection 1 b II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-b-iii",children:"Example subsubsection 1 b III"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-1-c",children:"Example Subsection 1 c"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-c-i",children:"Example subsubsection 1 c I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-c-ii",children:"Example subsubsection 1 c II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-1-c-iii",children:"Example subsubsection 1 c III"}),"\n",(0,i.jsx)(s.h2,{id:"example-section-2",children:"Example Section 2"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-2-a",children:"Example Subsection 2 a"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-a-i",children:"Example subsubsection 2 a I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-a-ii",children:"Example subsubsection 2 a II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-a-iii",children:"Example subsubsection 2 a III"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-2-b",children:"Example Subsection 2 b"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-b-i",children:"Example subsubsection 2 b I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-b-ii",children:"Example subsubsection 2 b II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-b-iii",children:"Example subsubsection 2 b III"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-2-c",children:"Example Subsection 2 c"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-c-i",children:"Example subsubsection 2 c I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-c-ii",children:"Example subsubsection 2 c II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-2-c-iii",children:"Example subsubsection 2 c III"}),"\n",(0,i.jsx)(s.h2,{id:"example-section-3",children:"Example Section 3"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-3-a",children:"Example Subsection 3 a"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-a-i",children:"Example subsubsection 3 a I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-a-ii",children:"Example subsubsection 3 a II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-a-iii",children:"Example subsubsection 3 a III"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-3-b",children:"Example Subsection 3 b"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-b-i",children:"Example subsubsection 3 b I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-b-ii",children:"Example subsubsection 3 b II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-b-iii",children:"Example subsubsection 3 b III"}),"\n",(0,i.jsx)(s.h3,{id:"example-subsection-3-c",children:"Example Subsection 3 c"}),"\n",(0,i.jsx)(s.p,{children:"Lorem ipsum"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-c-i",children:"Example subsubsection 3 c I"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-c-ii",children:"Example subsubsection 3 c II"}),"\n",(0,i.jsx)(s.h4,{id:"example-subsubsection-3-c-iii",children:"Example subsubsection 3 c III"})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(b,e)})):b(e)}},16212:(e,s,n)=>{n.d(s,{Z:()=>d});var i=n(85893),a=(n(67294),n(86010));const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function o(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(s){t(e,s,n[s])}))}return e}function c(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,i)}return n}(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})),e}function d({children:e,minHeight:s,url:n="http://localhost:3000",style:t,bodyStyle:d}){return(0,i.jsxs)("div",{className:l.browserWindow,style:c(o({},t),{minHeight:s}),children:[(0,i.jsxs)("div",{className:l.browserWindowHeader,children:[(0,i.jsxs)("div",{className:l.buttons,children:[(0,i.jsx)("span",{className:l.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:l.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:l.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,a.Z)(l.browserWindowAddressBar,"text--truncate"),children:n}),(0,i.jsx)("div",{className:l.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:l.bar}),(0,i.jsx)("span",{className:l.bar}),(0,i.jsx)("span",{className:l.bar})]})})]}),(0,i.jsx)("div",{className:l.browserWindowBody,style:d,children:e})]})}}}]);