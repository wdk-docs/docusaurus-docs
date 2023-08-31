"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[56704],{12720:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var c=n(85893),d=n(11151);const r={slug:"/creating-pages",sidebar_label:"\u9875\u9762"},t="\u521b\u5efa\u9875\u9762",o={unversionedId:"guides/creating-pages",id:"guides/creating-pages",title:"\u521b\u5efa\u9875\u9762",description:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5728 Docusaurus \u4e2d\u521b\u5efa\u9875\u9762\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/creating-pages.mdx",sourceDirName:"guides",slug:"/creating-pages",permalink:"/docusaurus-docs/docs/next/creating-pages",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/creating-pages.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/creating-pages",sidebar_label:"\u9875\u9762"},sidebar:"docs",previous:{title:"Guides",permalink:"/docusaurus-docs/docs/next/category/guides"},next:{title:"Introduction",permalink:"/docusaurus-docs/docs/next/docs-introduction"}},i={},l=[{value:"\u6dfb\u52a0 React \u9875\u9762",id:"add-a-react-page",level:2},{value:"\u6dfb\u52a0 Markdown \u9875\u9762",id:"add-a-markdown-page",level:2},{value:"\u8def\u7531",id:"routing",level:2},{value:"\u91cd\u590d\u7684\u8def\u7ebf",id:"duplicate-routes",level:3}];function a(e){const s=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",admonition:"admonition",a:"a",h2:"h2",pre:"pre",ul:"ul",li:"li",h3:"h3"},(0,d.ah)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"\u521b\u5efa\u9875\u9762",children:"\u521b\u5efa\u9875\u9762"}),"\n",(0,c.jsx)(s.p,{children:"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u5728 Docusaurus \u4e2d\u521b\u5efa\u9875\u9762\u3002"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"@docusaurus/plugin-content-pages"}),"\u63d2\u4ef6\u4f7f\u60a8\u80fd\u591f\u521b\u5efa",(0,c.jsx)(s.strong,{children:"\u4e00\u6b21\u6027\u72ec\u7acb\u9875\u9762"}),"\uff0c\u5982\u5c55\u793a\u9875\u9762\uff0c\u6e38\u4e50\u573a\u9875\u9762\u6216\u652f\u6301\u9875\u9762\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 React \u7ec4\u4ef6\uff0c\u6216\u8005 Markdown\u3002"]}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:["\u9875\u9762\u6ca1\u6709\u4fa7\u8fb9\u680f\uff0c\u53ea\u6709",(0,c.jsx)(s.a,{href:"/docusaurus-docs/docs/next/docs-introduction",children:"docs"})," do."]})}),"\n",(0,c.jsx)(s.admonition,{type:"info",children:(0,c.jsxs)(s.p,{children:["\u67e5\u770b",(0,c.jsx)(s.a,{href:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-content-pages",children:"Pages Plugin API \u53c2\u8003\u6587\u6863"}),"\u4ee5\u83b7\u53d6\u8be6\u5c3d\u7684\u9009\u9879\u5217\u8868\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"add-a-react-page",children:"\u6dfb\u52a0 React \u9875\u9762"}),"\n",(0,c.jsx)(s.p,{children:"React \u88ab\u7528\u4f5c\u521b\u5efa\u9875\u9762\u7684 UI \u5e93\u3002\u6bcf\u4e2a\u9875\u9762\u7ec4\u4ef6\u90fd\u5e94\u8be5\u5bfc\u51fa\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u5229\u7528 React \u7684\u8868\u73b0\u529b\u6765\u6784\u5efa\u4e30\u5bcc\u7684\u4ea4\u4e92\u5f0f\u5185\u5bb9\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u521b\u5efa\u6587\u4ef6 ",(0,c.jsx)(s.code,{children:"/src/pages/helloReact.js"}),":"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-jsx",metastring:'title="/src/pages/helloReact.js"',children:'import React from "react";\nimport Layout from "@theme/Layout";\n\nexport default function Hello() {\n  return (\n    <Layout title="Hello" description="Hello React Page">\n      <div\n        style={{\n          display: "flex",\n          justifyContent: "center",\n          alignItems: "center",\n          height: "50vh",\n          fontSize: "20px",\n        }}\n      >\n        <p>\n          Edit <code>pages/helloReact.js</code> and save to reload.\n        </p>\n      </div>\n    </Layout>\n  );\n}\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u4fdd\u5b58\u6587\u4ef6\u540e\uff0c\u5f00\u53d1\u670d\u52a1\u5668\u5c06\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u66f4\u6539\u3002\u73b0\u5728\u6253\u5f00",(0,c.jsx)(s.a,{href:"http://localhost:3000/helloReact",children:(0,c.jsx)(s.code,{children:"http://localhost:3000/helloReact"})}),"\uff0c\u60a8\u5c06\u770b\u5230\u521a\u521a\u521b\u5efa\u7684\u65b0\u9875\u9762\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u6bcf\u4e2a\u9875\u9762\u90fd\u6ca1\u6709\u4efb\u4f55\u6837\u5f0f\u3002\u5982\u679c\u4f60\u60f3\u8ba9\u5bfc\u822a\u680f\u548c/\u6216\u9875\u811a\u51fa\u73b0\uff0c\u4f60\u9700\u8981\u4ece",(0,c.jsx)(s.code,{children:"@theme/Layout"}),"\u4e2d\u5bfc\u5165",(0,c.jsx)(s.code,{children:"Layout"}),"\u7ec4\u4ef6\uff0c\u5e76\u5c06\u5185\u5bb9\u5305\u88c5\u5728\u8be5\u7ec4\u4ef6\u4e2d\u3002"]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u7528",(0,c.jsx)(s.code,{children:".tsx"}),"\u6269\u5c55\u540d(",(0,c.jsx)(s.code,{children:"helloReact.tsx"}),")\u6765\u521b\u5efa TypeScript \u9875\u9762\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"add-a-markdown-page",children:"\u6dfb\u52a0 Markdown \u9875\u9762"}),"\n",(0,c.jsxs)(s.p,{children:["\u521b\u5efa\u6587\u4ef6 ",(0,c.jsx)(s.code,{children:"/src/pages/helloMarkdown.md"}),":"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-md",metastring:'title="/src/pages/helloMarkdown.md"',children:"---\ntitle: my hello page title\ndescription: my hello page description\nhide_table_of_contents: true\n---\n\n# Hello\n\nHow are you?\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\uff0c\u5c06\u5728",(0,c.jsx)(s.a,{href:"http://localhost:3000/helloMarkdown",children:(0,c.jsx)(s.code,{children:"http://localhost:3000/helloMarkdown"})}),"\u521b\u5efa\u4e00\u4e2a\u9875\u9762\u3002"]}),"\n",(0,c.jsx)(s.p,{children:"Markdown \u9875\u9762\u4e0d\u5982 React \u9875\u9762\u7075\u6d3b\uff0c\u56e0\u4e3a\u5b83\u603b\u662f\u4f7f\u7528\u4e3b\u9898\u5e03\u5c40\u3002"}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd9\u662f\u4e00\u4e2a",(0,c.jsx)(s.a,{href:"/examples/markdownPageExample",children:"Markdown \u9875\u9762\u793a\u4f8b"}),"."]}),"\n",(0,c.jsx)(s.admonition,{type:"tip",children:(0,c.jsxs)(s.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u5728 Markdown \u9875\u9762\u4e2d\u4f7f\u7528 React \u7684\u5168\u90e8\u529f\u80fd\uff0c\u53c2\u8003",(0,c.jsx)(s.a,{href:"https://mdxjs.com/",children:"MDX"}),"\u6587\u6863\u3002"]})}),"\n",(0,c.jsx)(s.h2,{id:"routing",children:"\u8def\u7531"}),"\n",(0,c.jsxs)(s.p,{children:["\u5982\u679c\u60a8\u719f\u6089\u5176\u4ed6\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668(\u5982 Jekyll \u548c Next)\uff0c\u90a3\u4e48\u60a8\u4f1a\u5bf9\u8fd9\u79cd\u8def\u7531\u65b9\u6cd5\u611f\u5230\u719f\u6089\u3002\u4f60\u5728",(0,c.jsx)(s.code,{children:"/src/pages/"}),"\u76ee\u5f55\u4e0b\u521b\u5efa\u7684\u4efb\u4f55 JavaScript \u6587\u4ef6\u90fd\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a\u7f51\u7ad9\u9875\u9762\uff0c\u9075\u5faa",(0,c.jsx)(s.code,{children:"/src/pages/"}),"\u76ee\u5f55\u5c42\u6b21\u7ed3\u6784\u3002\u4f8b\u5982:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"/src/pages/index.js"})," \u2192 ",(0,c.jsx)(s.code,{children:"[baseUrl]"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"/src/pages/foo.js"})," \u2192 ",(0,c.jsx)(s.code,{children:"[baseUrl]/foo"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"/src/pages/foo/test.js"})," \u2192 ",(0,c.jsx)(s.code,{children:"[baseUrl]/foo/test"})]}),"\n",(0,c.jsxs)(s.li,{children:[(0,c.jsx)(s.code,{children:"/src/pages/foo/index.js"})," \u2192 ",(0,c.jsx)(s.code,{children:"[baseUrl]/foo/"})]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u5728\u8fd9\u4e2a\u57fa\u4e8e\u7ec4\u4ef6\u7684\u5f00\u53d1\u65f6\u4ee3\uff0c\u9f13\u52b1\u5c06\u6837\u5f0f\u3001\u6807\u8bb0\u548c\u884c\u4e3a\u4e00\u8d77\u653e\u7f6e\u5230\u7ec4\u4ef6\u4e2d\u3002\u6bcf\u4e2a\u9875\u9762\u90fd\u662f\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u5982\u679c\u60a8\u9700\u8981\u4f7f\u7528\u81ea\u5df1\u7684\u6837\u5f0f\u81ea\u5b9a\u4e49\u9875\u9762\u8bbe\u8ba1\uff0c\u6211\u4eec\u5efa\u8bae\u5c06\u60a8\u7684\u6837\u5f0f\u4e0e\u9875\u9762\u7ec4\u4ef6\u5171\u540c\u653e\u7f6e\u5728\u5176\u5355\u72ec\u7684\u76ee\u5f55\u4e2d\u3002\u4f8b\u5982\uff0c\u8981\u521b\u5efa\u4e00\u4e2a",(0,c.jsx)(s.code,{children:"\u652f\u6301"}),"\u9875\u9762\uff0c\u60a8\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u4e4b\u4e00:"]}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["\u6dfb\u52a0\u4e00\u4e2a",(0,c.jsx)(s.code,{children:"/src/pages/support.js"}),"\u6587\u4ef6"]}),"\n",(0,c.jsxs)(s.li,{children:["\u521b\u5efa\u4e00\u4e2a",(0,c.jsx)(s.code,{children:"/src/pages/support/"}),"\u76ee\u5f55\u548c",(0,c.jsx)(s.code,{children:"/src/pages/support/index.js"}),"\u6587\u4ef6\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(s.p,{children:["\u540e\u8005\u662f\u9996\u9009\uff0c\u56e0\u4e3a\u5b83\u7684\u597d\u5904\u662f\u5141\u8bb8\u60a8\u5c06\u4e0e\u8be5\u9875\u76f8\u5173\u7684\u6587\u4ef6\u653e\u5728\u8be5\u76ee\u5f55\u4e2d\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a CSS \u6a21\u5757\u6587\u4ef6(",(0,c.jsx)(s.code,{children:"styles.module.css"}),')\u7684\u6837\u5f0f\u53ea\u80fd\u5728"Support"\u9875\u9762\u4e0a\u4f7f\u7528\u3002']}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.p,{children:["\u8fd9\u53ea\u662f\u4e00\u4e2a\u63a8\u8350\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u60a8\u4ecd\u7136\u9700\u8981\u5728\u7ec4\u4ef6\u6a21\u5757\u4e2d\u624b\u52a8\u5bfc\u5165 CSS \u6a21\u5757\u6587\u4ef6(",(0,c.jsx)(s.code,{children:"support/index.js"}),")."]})}),"\n",(0,c.jsxs)(s.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u4ee5",(0,c.jsx)(s.code,{children:"_"}),"\u5f00\u5934\u7684 Markdown \u6216 JavaScript \u6587\u4ef6\u90fd\u5c06\u88ab\u5ffd\u7565\uff0c\u5e76\u4e14\u4e0d\u4f1a\u4e3a\u8be5\u6587\u4ef6\u521b\u5efa\u8def\u7531(\u8bf7\u53c2\u9605",(0,c.jsx)(s.code,{children:"exclude"}),"\u9009\u9879)\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"my-website\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u251c\u2500\u2500 index.js\n\u2502       \u251c\u2500\u2500 _ignored.js\n\u2502       \u251c\u2500\u2500 _ignored-folder\n\u2502       \u2502   \u251c\u2500\u2500 Component1.js\n\u2502       \u2502   \u2514\u2500\u2500 Component2.js\n\u2502       \u2514\u2500\u2500 support\n\u2502           \u251c\u2500\u2500 index.js\n\u2502           \u2514\u2500\u2500 styles.module.css\n.\n"})}),"\n",(0,c.jsx)(s.admonition,{type:"caution",children:(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"src/pages/"}),"\u76ee\u5f55\u4e0b\u7684\u6240\u6709 JavaScript/TypeScript \u6587\u4ef6\u90fd\u4f1a\u6709\u76f8\u5e94\u7684\u7f51\u7ad9\u8def\u5f84\u751f\u6210\u3002\u5982\u679c\u4f60\u60f3\u5728\u8be5\u76ee\u5f55\u4e2d\u521b\u5efa\u53ef\u91cd\u7528\u7684\u7ec4\u4ef6\uff0c\u4f7f\u7528",(0,c.jsx)(s.code,{children:"exclude"}),"\u9009\u9879(\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ee5",(0,c.jsx)(s.code,{children:"_"}),"\u4e3a\u524d\u7f00\u7684\u6587\u4ef6\u3001\u6d4b\u8bd5\u6587\u4ef6(",(0,c.jsx)(s.code,{children:".test.js"}),")\u548c",(0,c.jsx)(s.code,{children:"__tests__"}),"\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u4e0d\u4f1a\u88ab\u8f6c\u6362\u4e3a\u9875\u9762)\u3002"]})}),"\n",(0,c.jsx)(s.h3,{id:"duplicate-routes",children:"\u91cd\u590d\u7684\u8def\u7ebf"}),"\n",(0,c.jsxs)(s.p,{children:["\u60a8\u53ef\u80fd\u4f1a\u610f\u5916\u5730\u521b\u5efa\u591a\u4e2a\u9875\u9762\uff0c\u8fd9\u4e9b\u9875\u9762\u65e8\u5728\u901a\u8fc7\u540c\u4e00\u8def\u7531\u8bbf\u95ee\u3002\u5f53\u8fd9\u79cd\u60c5\u51b5\u53d1\u751f\u65f6\uff0cDocusaurus \u4f1a\u5728\u8fd0\u884c",(0,c.jsx)(s.code,{children:"yarn start"}),"\u6216",(0,c.jsx)(s.code,{children:"yarn build"}),"\u65f6\u8b66\u544a\u4f60\u91cd\u590d\u7684\u8def\u7531\uff0c\u4f46\u7f51\u7ad9\u4ecd\u7136\u4f1a\u6210\u529f\u6784\u5efa\u3002\u6700\u540e\u521b\u5efa\u7684\u9875\u9762\u5c06\u53ef\u4ee5\u8bbf\u95ee\uff0c\u4f46\u5b83\u5c06\u8986\u76d6\u5176\u4ed6\u51b2\u7a81\u7684\u9875\u9762\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u5e94\u8be5\u4fee\u6539\u6216\u5220\u9664\u4efb\u4f55\u51b2\u7a81\u7684\u8def\u7531\u3002"]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,d.ah)(),e.components);return s?(0,c.jsx)(s,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}},11151:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>r});var c=n(67294);const d=c.createContext({});function r(e){const s=c.useContext(d);return c.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||t:r(e),c.createElement(d.Provider,{value:o},s)}}}]);