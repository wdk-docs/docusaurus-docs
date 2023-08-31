"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[81844],{51943:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=r(85893),t=r(11151),o=r(16212);const a={id:"introduction",description:"Docusaurus uses MDX. Find out more about Docusaurus-specific features when writing Markdown.",slug:"/markdown-features"},i="Markdown Features",d={unversionedId:"guides/markdown-features/introduction",id:"version-2.4.1/guides/markdown-features/introduction",title:"Markdown Features",description:"Docusaurus uses MDX. Find out more about Docusaurus-specific features when writing Markdown.",source:"@site/versioned_docs/version-2.4.1/guides/markdown-features/markdown-features-intro.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features",permalink:"/docusaurus-docs/docs/markdown-features",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"introduction",description:"Docusaurus uses MDX. Find out more about Docusaurus-specific features when writing Markdown.",slug:"/markdown-features"},sidebar:"docs",previous:{title:"Blog",permalink:"/docusaurus-docs/docs/blog"},next:{title:"MDX and React",permalink:"/docusaurus-docs/docs/markdown-features/react"}},c={},u=[{value:"Standard features",id:"standard-features",level:2},{value:"Front matter",id:"front-matter",level:2},{value:"Quotes",id:"quotes",level:2},{value:"Details",id:"details",level:2}];function l(e){const s=Object.assign({h1:"h1",p:"p",admonition:"admonition",h2:"h2",a:"a",pre:"pre",code:"code",strong:"strong",em:"em",img:"img",blockquote:"blockquote"},(0,t.ah)(),e.components),{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"markdown-features",children:"Markdown Features"}),"\n","\n","\n",(0,n.jsx)(s.p,{children:"Documentation is one of your product's interfaces with your users. A well-written and well-organized set of docs helps your users understand your product quickly. Our aligned goal here is to help your users find and understand the information they need, as quickly as possible."}),"\n",(0,n.jsx)(s.p,{children:"Docusaurus 2 uses modern tooling to help you compose your interactive documentation with ease. You may embed React components, or build live coding blocks where your users may play with the code on the spot. Start sharing your eureka moments with the code your audience cannot walk away from. It is perhaps the most effective way of attracting potential users."}),"\n",(0,n.jsx)(s.admonition,{type:"important",children:(0,n.jsx)(s.p,{children:"This section assumes you are using the official Docusaurus content plugins."})}),"\n",(0,n.jsx)(s.h2,{id:"standard-features",children:"Standard features"}),"\n",(0,n.jsx)(s.p,{children:"Markdown is a syntax that enables you to write formatted content in a readable syntax."}),"\n",(0,n.jsxs)(s.p,{children:["We use ",(0,n.jsx)(s.a,{href:"https://mdxjs.com/",children:"MDX"})," as the parsing engine, which can do much more than just parsing ",(0,n.jsx)(s.a,{href:"https://daringfireball.net/projects/markdown/syntax",children:"standard Markdown syntax"}),", like rendering React components inside your documents as well."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"### My Doc Section\n\nHello world message with some **bold** text, some _italic_ text, and a [link](/)\n\n![img alt](/img/docusaurus.png)\n"})}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("h3",{children:"My Doc Section"}),(0,n.jsxs)(s.p,{children:["Hello world message with some ",(0,n.jsx)(s.strong,{children:"bold"})," text, some ",(0,n.jsx)(s.em,{children:"italic"})," text and a ",(0,n.jsx)(s.a,{href:"/",children:"link"})]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"img alt",src:r(86326).Z+"",width:"200",height:"200"})})]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Markdown is declarative"}),(0,n.jsxs)(s.p,{children:["Some may assume a 1-1 correlation between Markdown and HTML, e.g., ",(0,n.jsx)(s.code,{children:"![Preview](/img/docusaurus.png)"})," will always become ",(0,n.jsx)(s.code,{children:'<img src="/img/docusaurus.png" alt="Preview" />'}),", as-is. However, ",(0,n.jsx)(s.em,{children:"that is not the case"}),"."]}),(0,n.jsxs)(s.p,{children:["The Markdown syntax ",(0,n.jsx)(s.code,{children:"![message](url)"})," only declaratively tells Docusaurus that an image needs to be inserted here, but we may do other things like transforming a ",(0,n.jsx)(s.a,{href:"/docusaurus-docs/docs/markdown-features/assets#images",children:"file path to URL path"}),", so the generated markup may differ from the output of other Markdown renderers, or a na\xefve hand-transcription to the equivalent JSX/HTML code."]}),(0,n.jsxs)(s.p,{children:["In general, you should only assume the ",(0,n.jsx)(s.em,{children:"semantics"})," of the markup (",(0,n.jsx)(s.code,{children:"```"})," fences become ",(0,n.jsx)(s.a,{href:"/docusaurus-docs/docs/markdown-features/code-blocks",children:"code blocks"}),"; ",(0,n.jsx)(s.code,{children:">"})," becomes ",(0,n.jsx)(s.a,{href:"#quotes",children:"quotes"}),", etc.), but not the actual compiled output."]})]}),"\n",(0,n.jsx)(s.h2,{id:"front-matter",children:"Front matter"}),"\n",(0,n.jsx)(s.p,{children:"Front matter is used to add metadata to your Markdown file. All content plugins have their own front matter schema, and use the front matter to enrich the default metadata inferred from the content or other configuration."}),"\n",(0,n.jsxs)(s.p,{children:["Front matter is provided at the very top of the file, enclosed by three dashes ",(0,n.jsx)(s.code,{children:"---"}),". The content is parsed as ",(0,n.jsx)(s.a,{href:"https://yaml.org/spec/1.2.2/",children:"YAML"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"---\ntitle: My Doc Title\nmore_data:\n  - Can be provided\n  - as: objects\n    or: arrays\n---\n"})}),"\n",(0,n.jsx)(s.h2,{id:"quotes",children:"Quotes"}),"\n",(0,n.jsx)(s.p,{children:"Markdown quotes are beautifully styled:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"> Easy to maintain open source documentation websites.\n>\n> \u2014 Docusaurus\n"})}),"\n",(0,n.jsx)(o.Z,{children:(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Easy to maintain open source documentation websites."}),"\n",(0,n.jsx)(s.p,{children:"\u2014 Docusaurus"}),"\n"]})}),"\n",(0,n.jsx)(s.h2,{id:"details",children:"Details"}),"\n",(0,n.jsxs)(s.p,{children:["Markdown can embed HTML elements, and ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details",children:(0,n.jsx)(s.code,{children:"details"})})," HTML elements are beautifully styled:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"### Details element example\n\n<details>\n  <summary>Toggle me!</summary>\n  <div>\n    <div>This is the detailed content</div>\n    <br/>\n    <details>\n      <summary>\n        Nested toggle! Some surprise inside...\n      </summary>\n      <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n    </details>\n  </div>\n</details>\n"})}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)("h3",{children:"Details element example"}),(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Toggle me!"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"This is the detailed content"}),(0,n.jsx)("br",{}),(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:(0,n.jsx)(s.p,{children:"Nested toggle! Some surprise inside..."})}),(0,n.jsx)("div",{children:"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"})]})]})]})]}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"In practice, those are not really HTML elements, but React JSX elements, which we'll cover next!"})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},16212:(e,s,r)=>{r.d(s,{Z:()=>c});var n=r(85893),t=(r(67294),r(86010));const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function a(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function i(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(s){a(e,s,r[s])}))}return e}function d(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,n)}return r}(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))})),e}function c({children:e,minHeight:s,url:r="http://localhost:3000",style:a,bodyStyle:c}){return(0,n.jsxs)("div",{className:o.browserWindow,style:d(i({},a),{minHeight:s}),children:[(0,n.jsxs)("div",{className:o.browserWindowHeader,children:[(0,n.jsxs)("div",{className:o.buttons,children:[(0,n.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,t.Z)(o.browserWindowAddressBar,"text--truncate"),children:r}),(0,n.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:o.bar}),(0,n.jsx)("span",{className:o.bar}),(0,n.jsx)("span",{className:o.bar})]})})]}),(0,n.jsx)("div",{className:o.browserWindowBody,style:c,children:e})]})}},86326:(e,s,r)=>{r.d(s,{Z:()=>n});const n="data:image/png;base64,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"},11151:(e,s,r)=>{r.d(s,{Zo:()=>i,ah:()=>o});var n=r(67294);const t=n.createContext({});function o(e){const s=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:o(e),n.createElement(t.Provider,{value:i},s)}}}]);