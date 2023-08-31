"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4694],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),r=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=r(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=r(t),p=i,b=m["".concat(u,".").concat(p)]||m[p]||d[p]||l;return t?a.createElement(b,s(s({ref:n},c),{},{components:t})):a.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var r=2;r<l;r++)s[r]=t[r];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68839:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),i=t(2728);const l={tableOfContentsInline:"tableOfContentsInline_prmo"};function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return a.createElement("div",{className:l.tableOfContentsInline},a.createElement(i.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null}))}},2728:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(87462),i=t(67294),l=t(20107);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function u(e){const n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>u(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),u=r(o,{anchorTopOffset:t.current}),c=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function d(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?i.createElement("ul",{className:l?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const p=i.memo(d);function b(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:u="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:d,...b}=e;const k=(0,l.L)(),v=c??k.tableOfContents.minHeadingLevel,x=d??k.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>o({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:x});return m((0,i.useMemo)((()=>{if(u&&r)return{linkClassName:u,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:x}}),[u,r,v,x])),i.createElement(p,(0,a.Z)({toc:h,className:t,linkClassName:u},b))}},45687:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),i=t(86010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function s(e){let{children:n,minHeight:t,url:s="http://localhost:3000",style:o,bodyStyle:u}=e;return a.createElement("div",{className:l.browserWindow,style:{...o,minHeight:t}},a.createElement("div",{className:l.browserWindowHeader},a.createElement("div",{className:l.buttons},a.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,i.Z)(l.browserWindowAddressBar,"text--truncate")},s),a.createElement("div",{className:l.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar})))),a.createElement("div",{className:l.browserWindowBody,style:u},n))}},32443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var a=t(87462),i=(t(67294),t(3905)),l=t(45687),s=t(68839);const o={id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},u="\u6807\u9898\u548c\u76ee\u5f55",r={unversionedId:"guides/markdown-features/toc",id:"guides/markdown-features/toc",title:"\u6807\u9898\u548c\u76ee\u5f55",description:"Customizing headings and table-of-contents in Markdown",source:"@site/docs/guides/markdown-features/markdown-features-toc.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/toc",permalink:"/docs/markdown-features/toc",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/markdown-features/markdown-features-toc.mdx",tags:[],version:"current",frontMatter:{id:"toc",description:"Customizing headings and table-of-contents in Markdown",slug:"/markdown-features/toc"},sidebar:"docs",previous:{title:"\u8b66\u544a",permalink:"/docs/markdown-features/admonitions"},next:{title:"\u8d44\u4ea7",permalink:"/docs/markdown-features/assets"}},c={},m=[{value:"Markdown \u6807\u9898",id:"markdown-headings",level:2},{value:"\u6807\u9898 IDs",id:"heading-ids",level:3},{value:"\u76ee\u5f55\u6807\u9898\u7ea7\u522b",id:"table-of-contents-heading-level",level:2},{value:"\u5185\u8054\u76ee\u5f55",id:"inline-table-of-contents",level:2},{value:"\u81ea\u5b9a\u4e49\u76ee\u5f55\u751f\u6210",id:"customizing-table-of-contents-generation",level:2},{value:"Example Section 1",id:"example-section-1",level:2},{value:"Example Subsection 1 a",id:"example-subsection-1-a",level:3},{value:"Example subsubsection 1 a I",id:"example-subsubsection-1-a-i",level:4},{value:"Example subsubsection 1 a II",id:"example-subsubsection-1-a-ii",level:4},{value:"Example subsubsection 1 a III",id:"example-subsubsection-1-a-iii",level:4},{value:"Example Subsection 1 b",id:"example-subsection-1-b",level:3},{value:"Example subsubsection 1 b I",id:"example-subsubsection-1-b-i",level:4},{value:"Example subsubsection 1 b II",id:"example-subsubsection-1-b-ii",level:4},{value:"Example subsubsection 1 b III",id:"example-subsubsection-1-b-iii",level:4},{value:"Example Subsection 1 c",id:"example-subsection-1-c",level:3},{value:"Example subsubsection 1 c I",id:"example-subsubsection-1-c-i",level:4},{value:"Example subsubsection 1 c II",id:"example-subsubsection-1-c-ii",level:4},{value:"Example subsubsection 1 c III",id:"example-subsubsection-1-c-iii",level:4},{value:"Example Section 2",id:"example-section-2",level:2},{value:"Example Subsection 2 a",id:"example-subsection-2-a",level:3},{value:"Example subsubsection 2 a I",id:"example-subsubsection-2-a-i",level:4},{value:"Example subsubsection 2 a II",id:"example-subsubsection-2-a-ii",level:4},{value:"Example subsubsection 2 a III",id:"example-subsubsection-2-a-iii",level:4},{value:"Example Subsection 2 b",id:"example-subsection-2-b",level:3},{value:"Example subsubsection 2 b I",id:"example-subsubsection-2-b-i",level:4},{value:"Example subsubsection 2 b II",id:"example-subsubsection-2-b-ii",level:4},{value:"Example subsubsection 2 b III",id:"example-subsubsection-2-b-iii",level:4},{value:"Example Subsection 2 c",id:"example-subsection-2-c",level:3},{value:"Example subsubsection 2 c I",id:"example-subsubsection-2-c-i",level:4},{value:"Example subsubsection 2 c II",id:"example-subsubsection-2-c-ii",level:4},{value:"Example subsubsection 2 c III",id:"example-subsubsection-2-c-iii",level:4},{value:"Example Section 3",id:"example-section-3",level:2},{value:"Example Subsection 3 a",id:"example-subsection-3-a",level:3},{value:"Example subsubsection 3 a I",id:"example-subsubsection-3-a-i",level:4},{value:"Example subsubsection 3 a II",id:"example-subsubsection-3-a-ii",level:4},{value:"Example subsubsection 3 a III",id:"example-subsubsection-3-a-iii",level:4},{value:"Example Subsection 3 b",id:"example-subsection-3-b",level:3},{value:"Example subsubsection 3 b I",id:"example-subsubsection-3-b-i",level:4},{value:"Example subsubsection 3 b II",id:"example-subsubsection-3-b-ii",level:4},{value:"Example subsubsection 3 b III",id:"example-subsubsection-3-b-iii",level:4},{value:"Example Subsection 3 c",id:"example-subsection-3-c",level:3},{value:"Example subsubsection 3 c I",id:"example-subsubsection-3-c-i",level:4},{value:"Example subsubsection 3 c II",id:"example-subsubsection-3-c-ii",level:4},{value:"Example subsubsection 3 c III",id:"example-subsubsection-3-c-iii",level:4}],d=(p="Code",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const b={toc:m},k="wrapper";function v(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6807\u9898\u548c\u76ee\u5f55"},"\u6807\u9898\u548c\u76ee\u5f55"),(0,i.kt)("h2",{id:"markdown-headings"},"Markdown \u6807\u9898"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5e38\u89c4\u7684 Markdown \u6807\u9898\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"## Level 2 title\n\n### Level 3 title\n\n#### Level 4 title\n")),(0,i.kt)("p",null,"\u6bcf\u4e2a Markdown \u6807\u9898\u5c06\u4f5c\u4e3a\u76ee\u5f55\u6761\u76ee\u51fa\u73b0\u3002"),(0,i.kt)("h3",{id:"heading-ids"},"\u6807\u9898 IDs"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u6807\u9898\u90fd\u6709\u4e00\u4e2a\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u6216\u663e\u5f0f\u6307\u5b9a\u7684 ID\u3002\u6807\u9898 id \u5141\u8bb8\u60a8\u94fe\u63a5\u5230 Markdown \u6216 JSX \u4e2d\u7684\u7279\u5b9a\u6587\u6863\u6807\u9898:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"[link](#heading-id)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Link to="#heading-id">link</Link>\n')),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDocusaurus \u5c06\u6839\u636e\u6807\u9898\u6587\u672c\u4e3a\u60a8\u751f\u6210\u6807\u9898 id\u3002\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"### Hello World"),"\u7684 ID \u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Hello - World"),"\u3002"),(0,i.kt)("p",null,"\u751f\u6210\u7684 id \u6709",(0,i.kt)("strong",{parentName:"p"},"\u4e00\u4e9b\u9650\u5236"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ID \u53ef\u80fd\u770b\u8d77\u6765\u4e0d\u592a\u597d"),(0,i.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u80fd\u5e0c\u671b\u5728\u4e0d\u66f4\u65b0\u73b0\u6709 ID \u7684\u60c5\u51b5\u4e0b",(0,i.kt)("strong",{parentName:"li"},"\u66f4\u6539\u6216\u7ffb\u8bd1"),"\u6587\u672c")),(0,i.kt)("p",null,"\u4e00\u4e2a\u7279\u6b8a\u7684 Markdown \u8bed\u6cd5\u53ef\u4ee5\u8ba9\u4f60\u8bbe\u7f6e\u4e00\u4e2a\u663e\u5f0f\u7684\u6807\u9898 id:"),(0,i.kt)(d,{language:"md",mdxType:"Code"},"### Hello World {#my-explicit-id}\n"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u4f7f\u7528",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/cli#docusaurus-write-heading-ids-sitedir"},(0,i.kt)("inlineCode",{parentName:"a"},"write-heading-ids")))," CLI \u547d\u4ee4\u4e3a\u6240\u6709 Markdown \u6587\u6863\u6dfb\u52a0\u663e\u5f0f id\u3002")),(0,i.kt)("admonition",{title:"Avoid colliding IDs",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u751f\u6210\u7684\u6807\u9898 ID \u5c06\u4fdd\u8bc1\u5728\u6bcf\u4e2a\u9875\u9762\u4e0a\u662f\u552f\u4e00\u7684\uff0c\u4f46\u5982\u679c\u4f7f\u7528\u81ea\u5b9a\u4e49 ID\uff0c\u8bf7\u786e\u4fdd\u6bcf\u4e2a\u6807\u9898\u5728\u6bcf\u4e2a\u9875\u9762\u4e0a\u53ea\u51fa\u73b0\u4e00\u6b21\uff0c\u5426\u5219\u5c06\u6709\u4e24\u4e2a\u5177\u6709\u76f8\u540c ID \u7684 DOM \u5143\u7d20\uff0c\u8fd9\u662f\u65e0\u6548\u7684 HTML \u8bed\u4e49\uff0c\u5e76\u5c06\u5bfc\u81f4\u4e00\u4e2a\u6807\u9898\u4e0d\u53ef\u94fe\u63a5\u3002")),(0,i.kt)("h2",{id:"table-of-contents-heading-level"},"\u76ee\u5f55\u6807\u9898\u7ea7\u522b"),(0,i.kt)("p",null,"\u6bcf\u4e2a Markdown \u6587\u6863\u5728\u53f3\u4e0a\u89d2\u663e\u793a\u4e00\u4e2a\u76ee\u5f55\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u8868\u53ea\u663e\u793a h2 \u548c h3 \u6807\u9898\uff0c\u8fd9\u5e94\u8be5\u8db3\u4ee5\u6982\u8ff0\u9875\u9762\u7ed3\u6784\u3002\u5982\u679c\u60a8\u9700\u8981\u66f4\u6539\u663e\u793a\u7684\u6807\u9898\u8303\u56f4\uff0c\u60a8\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6700\u5c0f\u548c\u6700\u5927\u6807\u9898\u7ea7\u522b-\u6bcf\u4e2a\u9875\u9762\u6216\u5168\u5c40\u3002"),(0,i.kt)("p",null,"To set the heading level for a particular page, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"toc_min_heading_level")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"toc_max_heading_level")," front matter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="myDoc.md"',title:'"myDoc.md"'},"---\n# Display h2 to h5 headings\ntoc_min_heading_level: 2\ntoc_max_heading_level: 5\n---\n")),(0,i.kt)("p",null,"To set the heading level for ",(0,i.kt)("em",{parentName:"p"},"all")," pages, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/themes/configuration#table-of-contents"},(0,i.kt)("inlineCode",{parentName:"a"},"themeConfig.tableOfContents"))," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    tableOfContents: {\n      // highlight-start\n      minHeadingLevel: 2,\n      maxHeadingLevel: 5,\n      // highlight-end\n    },\n  },\n};\n")),(0,i.kt)("p",null,"If you've set the options globally, you can still override them locally via front matter."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"themeConfig")," option would apply to all TOC on the site, including ",(0,i.kt)("a",{parentName:"p",href:"#inline-table-of-contents"},"inline TOC"),", but front matter options only affect the top-right TOC. You need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"minHeadingLevel")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeadingLevel")," props to customize each ",(0,i.kt)("inlineCode",{parentName:"p"},"<TOCInline />")," component.")),(0,i.kt)("h2",{id:"inline-table-of-contents"},"\u5185\u8054\u76ee\u5f55"),(0,i.kt)("p",null,"It is also possible to display an inline table of contents directly inside a Markdown document, thanks to MDX."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," variable is available in any MDX document and contains all the headings of an MDX document. By default, only ",(0,i.kt)("inlineCode",{parentName:"p"},"h2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"h3")," headings are displayed in the TOC. You can change which heading levels are visible by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"minHeadingLevel")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"maxHeadingLevel")," for individual ",(0,i.kt)("inlineCode",{parentName:"p"},"TOCInline")," components."),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," prettier-ignore "),"/}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />\n")),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(s.Z,{toc:m,mdxType:"TOCInline"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," global is just a list of heading items:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"declare const toc: {\n  value: string;\n  id: string;\n  level: number;\n}[];\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"toc")," global is a flat array, so you can easily cut out unwanted nodes or insert extra nodes, and create a new TOC tree."),(0,i.kt)("p",null,"{/",(0,i.kt)("em",{parentName:"p"}," prettier-ignore "),"/}"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline\n  // Only show h2 and h4 headings\n  toc={toc.filter((node) => node.level === 2 || node.level === 4)}\n  minHeadingLevel={2}\n  // Show h4 headings in addition to the default h2 and h3 headings\n  maxHeadingLevel={4}\n/>\n")),(0,i.kt)(l.Z,{mdxType:"BrowserWindow"},(0,i.kt)(s.Z,{toc:m.filter((e=>2===e.level||4===e.level)),minHeadingLevel:2,maxHeadingLevel:4,mdxType:"TOCInline"})),(0,i.kt)("h2",{id:"customizing-table-of-contents-generation"},"\u81ea\u5b9a\u4e49\u76ee\u5f55\u751f\u6210"),(0,i.kt)("p",null,"\u76ee\u5f55\u8868\u662f\u901a\u8fc7\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/plugins"},"Remark plugin"),"\u89e3\u6790 Markdown \u6e90\u4ee3\u7801\u751f\u6210\u7684\u3002\u5728\u5df2\u77e5\u7684\u8fb9\u7f18\u60c5\u51b5\u4e0b\uff0c\u5b83\u4f1a\u4ea7\u751f\u5047\u9633\u6027\u548c\u5047\u9634\u6027\u3002"),(0,i.kt)("p",null,"\u53ef\u9690\u85cf\u533a\u57df\u5185\u7684 Markdown \u6807\u9898\u4ecd\u7136\u4f1a\u663e\u793a\u5728 TOC \u4e2d\u3002\u4f8b\u5982\uff0c",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"Tabs")),"\u548c",(0,i.kt)("a",{parentName:"p",href:"/docs/markdown-features/tabs"},(0,i.kt)("inlineCode",{parentName:"a"},"details")),"\u4e2d\u7684\u6807\u9898\u5c06\u4e0d\u4f1a\u88ab\u6392\u9664\u3002"),(0,i.kt)("p",null,"\u975e Markdown \u6807\u9898\u5c06\u4e0d\u4f1a\u663e\u793a\u5728 TOC \u4e2d\u3002\u8fd9\u53ef\u4ee5\u6210\u4e3a\u4f60\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u7684\u4f18\u52bf\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'<details>\n<summary>\u4e00\u4e9b\u5305\u542b\u6807\u9898\u7684\u7ec6\u8282</summary>\n<h2 id="#heading-id">\u6211\u662f\u4e00\u4e2a\u4e0d\u4f1a\u51fa\u73b0\u5728TOC\u4e2d\u7684\u6807\u9898</h2>\n\nSome content...\n\n</details>\n')),(0,i.kt)("p",null,"\u4ece\u4eba\u4f53\u5de5\u7a0b\u5b66\u89d2\u5ea6\u63d2\u5165\u989d\u5916\u6807\u9898\u6216\u5ffd\u7565\u67d0\u4e9b\u6807\u9898\u7684\u80fd\u529b\u4ecd\u5728\u5f00\u53d1\u4e2d\u3002\u5982\u679c\u6b64\u529f\u80fd\u5bf9\u60a8\u5f88\u91cd\u8981\uff0c\u8bf7\u5728",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/6201"},"\u672c\u671f"),"\u4e2d\u62a5\u544a\u60a8\u7684\u7528\u4f8b\u3002."),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u53ea\u662f\u4e00\u4e9b\u865a\u62df\u5185\u5bb9\uff0c\u4ee5\u4fbf\u5728\u5f53\u524d\u9875\u9762\u4e0a\u63d0\u4f9b\u66f4\u591a\u7684\u76ee\u5f55\u9879\u3002")),(0,i.kt)("h2",{id:"example-section-1"},"Example Section 1"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h3",{id:"example-subsection-1-a"},"Example Subsection 1 a"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-1-a-i"},"Example subsubsection 1 a I"),(0,i.kt)("h4",{id:"example-subsubsection-1-a-ii"},"Example subsubsection 1 a II"),(0,i.kt)("h4",{id:"example-subsubsection-1-a-iii"},"Example subsubsection 1 a III"),(0,i.kt)("h3",{id:"example-subsection-1-b"},"Example Subsection 1 b"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-1-b-i"},"Example subsubsection 1 b I"),(0,i.kt)("h4",{id:"example-subsubsection-1-b-ii"},"Example subsubsection 1 b II"),(0,i.kt)("h4",{id:"example-subsubsection-1-b-iii"},"Example subsubsection 1 b III"),(0,i.kt)("h3",{id:"example-subsection-1-c"},"Example Subsection 1 c"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-1-c-i"},"Example subsubsection 1 c I"),(0,i.kt)("h4",{id:"example-subsubsection-1-c-ii"},"Example subsubsection 1 c II"),(0,i.kt)("h4",{id:"example-subsubsection-1-c-iii"},"Example subsubsection 1 c III"),(0,i.kt)("h2",{id:"example-section-2"},"Example Section 2"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h3",{id:"example-subsection-2-a"},"Example Subsection 2 a"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-2-a-i"},"Example subsubsection 2 a I"),(0,i.kt)("h4",{id:"example-subsubsection-2-a-ii"},"Example subsubsection 2 a II"),(0,i.kt)("h4",{id:"example-subsubsection-2-a-iii"},"Example subsubsection 2 a III"),(0,i.kt)("h3",{id:"example-subsection-2-b"},"Example Subsection 2 b"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-2-b-i"},"Example subsubsection 2 b I"),(0,i.kt)("h4",{id:"example-subsubsection-2-b-ii"},"Example subsubsection 2 b II"),(0,i.kt)("h4",{id:"example-subsubsection-2-b-iii"},"Example subsubsection 2 b III"),(0,i.kt)("h3",{id:"example-subsection-2-c"},"Example Subsection 2 c"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-2-c-i"},"Example subsubsection 2 c I"),(0,i.kt)("h4",{id:"example-subsubsection-2-c-ii"},"Example subsubsection 2 c II"),(0,i.kt)("h4",{id:"example-subsubsection-2-c-iii"},"Example subsubsection 2 c III"),(0,i.kt)("h2",{id:"example-section-3"},"Example Section 3"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h3",{id:"example-subsection-3-a"},"Example Subsection 3 a"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-3-a-i"},"Example subsubsection 3 a I"),(0,i.kt)("h4",{id:"example-subsubsection-3-a-ii"},"Example subsubsection 3 a II"),(0,i.kt)("h4",{id:"example-subsubsection-3-a-iii"},"Example subsubsection 3 a III"),(0,i.kt)("h3",{id:"example-subsection-3-b"},"Example Subsection 3 b"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-3-b-i"},"Example subsubsection 3 b I"),(0,i.kt)("h4",{id:"example-subsubsection-3-b-ii"},"Example subsubsection 3 b II"),(0,i.kt)("h4",{id:"example-subsubsection-3-b-iii"},"Example subsubsection 3 b III"),(0,i.kt)("h3",{id:"example-subsection-3-c"},"Example Subsection 3 c"),(0,i.kt)("p",null,"Lorem ipsum"),(0,i.kt)("h4",{id:"example-subsubsection-3-c-i"},"Example subsubsection 3 c I"),(0,i.kt)("h4",{id:"example-subsubsection-3-c-ii"},"Example subsubsection 3 c II"),(0,i.kt)("h4",{id:"example-subsubsection-3-c-iii"},"Example subsubsection 3 c III"))}v.isMDXComponent=!0}}]);