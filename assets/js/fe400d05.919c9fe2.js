"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[67009],{11649:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var d=s(85893),i=s(11151);const c={slug:"/sidebar/multiple-sidebars"},r="\u4f7f\u7528\u591a\u4e2a\u4fa7\u8fb9\u680f",o={unversionedId:"guides/docs/sidebar/multiple-sidebars",id:"guides/docs/sidebar/multiple-sidebars",title:"\u4f7f\u7528\u591a\u4e2a\u4fa7\u8fb9\u680f",description:"\u60a8\u53ef\u4ee5\u4e3a\u60f3\u8981\u7ec4\u5408\u5728\u4e00\u8d77\u7684\u6bcf\u4e00\u7ec4 Markdown \u6587\u4ef6\u521b\u5efa\u4e00\u4e2a\u4fa7\u8fb9\u680f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/docs/sidebar/multiple-sidebars.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/multiple-sidebars",permalink:"/docusaurus-docs/docs/next/sidebar/multiple-sidebars",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/sidebar/multiple-sidebars"},sidebar:"docs",previous:{title:"\u81ea\u52a8\u751f\u6210",permalink:"/docusaurus-docs/docs/next/sidebar/autogenerated"},next:{title:"\u7248\u672c\u63a7\u5236",permalink:"/docusaurus-docs/docs/next/versioning"}},a={},l=[{value:"\u7406\u89e3\u4fa7\u8fb9\u680f\u5173\u8054",id:"sidebar-association",level:2},{value:"\u751f\u6210\u5206\u9875",id:"generating-pagination",level:2},{value:"<code>ref</code>\u9879",id:"sidebar-item-ref",level:2}];function t(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",admonition:"admonition",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",h2:"h2",ol:"ol"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u4f7f\u7528\u591a\u4e2a\u4fa7\u8fb9\u680f",children:"\u4f7f\u7528\u591a\u4e2a\u4fa7\u8fb9\u680f"}),"\n",(0,d.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u4e3a\u60f3\u8981\u7ec4\u5408\u5728\u4e00\u8d77\u7684",(0,d.jsx)(n.strong,{children:"\u6bcf\u4e00\u7ec4 Markdown \u6587\u4ef6"}),"\u521b\u5efa\u4e00\u4e2a\u4fa7\u8fb9\u680f\u3002"]}),"\n",(0,d.jsxs)(n.admonition,{type:"tip",children:[(0,d.jsx)(n.p,{children:"Docusaurus \u7f51\u7ad9\u5c31\u662f\u4e00\u4e2a\u4f7f\u7528\u591a\u4e2a\u4fa7\u8fb9\u680f\u7684\u597d\u4f8b\u5b50:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/docusaurus-docs/docs/next/",children:"Docs"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"/docusaurus-docs/docs/next/cli",children:"API"})}),"\n"]})]}),"\n",(0,d.jsx)(n.p,{children:"\u8003\u8651\u4e00\u4e0b\u8fd9\u4e2a\u4f8b\u5b50:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:'module.exports = {\n  tutorialSidebar: {\n    "Category A": ["doc1", "doc2"],\n  },\n  apiSidebar: ["doc3", "doc4"],\n};\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u6d4f\u89c8",(0,d.jsx)(n.code,{children:"doc1"}),"\u6216",(0,d.jsx)(n.code,{children:"doc2"}),"\u65f6\uff0c\u5c06\u663e\u793a",(0,d.jsx)(n.code,{children:"tutorials sidebar"}),";\u5f53\u6d4f\u89c8",(0,d.jsx)(n.code,{children:"doc3"}),"\u6216",(0,d.jsx)(n.code,{children:"doc4"}),"\u65f6\uff0c\u5c06\u663e\u793a",(0,d.jsx)(n.code,{children:"apiSidebar"}),"\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"sidebar-association",children:"\u7406\u89e3\u4fa7\u8fb9\u680f\u5173\u8054"}),"\n",(0,d.jsxs)(n.p,{children:["\u6309\u7167\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u5982\u679c",(0,d.jsx)(n.code,{children:"commonDoc"}),"\u540c\u65f6\u5305\u542b\u5728\u4e24\u4e2a\u4fa7\u8fb9\u680f\u4e2d:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:'module.exports = {\n  tutorialSidebar: {\n    "Category A": ["doc1", "doc2", "commonDoc"],\n  },\n  apiSidebar: ["doc3", "doc4", "commonDoc"],\n};\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Docusaurus \u5982\u4f55\u77e5\u9053\u6d4f\u89c8",(0,d.jsx)(n.code,{children:"commonDoc"}),"\u65f6\u663e\u793a\u54ea\u4e2a\u8fb9\u680f?\u7b54\u6848:\u5b83\u4e0d\u4f1a\uff0c\u6211\u4eec\u4e5f\u4e0d\u80fd\u4fdd\u8bc1\u5b83\u4f1a\u9009\u62e9\u54ea\u4e2a\u4fa7\u8fb9\u680f\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u5f53\u60a8\u5c06\u6587\u6863 Y \u6dfb\u52a0\u5230\u4fa7\u680f X \u65f6\uff0c\u5b83\u521b\u5efa\u4e86\u4e00\u4e2a\u53cc\u5411\u7ed1\u5b9a:\u4fa7\u680f X \u5305\u542b\u5230\u6587\u6863 Y \u7684\u94fe\u63a5\uff0c\u5f53\u6d4f\u89c8\u6587\u6863 Y \u65f6\uff0c\u5c06\u663e\u793a\u4fa7\u680f X\u3002\u4f46\u6709\u65f6\uff0c\u6211\u4eec\u60f3\u8981\u6253\u7834\u5176\u4e2d\u4e00\u4e2a\u9690\u5f0f\u7ed1\u5b9a:"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"*\u6211\u5982\u4f55\u751f\u6210\u4e00\u4e2a\u94fe\u63a5\u5230\u6587\u6863 Y \u5728\u4fa7\u8fb9\u680f X \u6ca1\u6709\u4f7f\u4fa7\u8fb9\u680f X \u663e\u793a\u5728 Y \u4e0a?*\u4f8b\u5982\uff0c\u5f53\u6211\u50cf\u4e0a\u9762\u7684\u4f8b\u5b50\u4e00\u6837\u5728\u591a\u4e2a\u4fa7\u8fb9\u680f\u4e2d\u5305\u542b\u6587\u6863 Y \u65f6\uff0c\u6211\u60f3\u660e\u786e\u5730\u544a\u8bc9 Docusaurus \u663e\u793a\u4e00\u4e2a\u4fa7\u8fb9\u680f?"}),"\n",(0,d.jsxs)(n.li,{children:["*\u6211\u5982\u4f55\u4f7f\u8fb9\u680f X \u663e\u793a\u65f6\uff0c\u6d4f\u89c8\u6587\u6863 Y\uff0c\u4f46\u8fb9\u680f X \u4e0d\u5e94\u8be5\u5305\u542b\u5230 Y \u7684\u94fe\u63a5?*\u4f8b\u5982\uff0c\u5f53 Y \u662f",(0,d.jsx)(n.code,{children:"\u6587\u6863\u4e3b\u9875"}),"\u65f6\uff0c\u4fa7\u8fb9\u680f\u7eaf\u7cb9\u7528\u4e8e\u5bfc\u822a?"]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["\u524d\u4e8b\u9879\u9009\u9879",(0,d.jsx)(n.code,{children:"displayed_sidebar"}),"\u5c06\u5f3a\u5236\u8bbe\u7f6e\u4fa7\u8fb9\u680f\u5173\u8054\u3002\u5bf9\u4e8e\u76f8\u540c\u7684\u793a\u4f8b\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528 doc \u7b80\u5199\uff0c\u800c\u65e0\u9700\u4efb\u4f55\u7279\u6b8a\u914d\u7f6e:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:'module.exports = {\n  tutorialSidebar: {\n    "Category A": ["doc1", "doc2"],\n  },\n  apiSidebar: ["doc3", "doc4"],\n};\n'})}),"\n",(0,d.jsx)(n.p,{children:"And then add a front matter:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-md",metastring:'title="commonDoc.md"',children:"---\ndisplayed_sidebar: apiSidebar\n---\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5b83\u660e\u786e\u5730\u544a\u8bc9 Docusaurus \u5728\u6d4f\u89c8",(0,d.jsx)(n.code,{children:"commonDoc"}),"\u65f6\u663e\u793a",(0,d.jsx)(n.code,{children:"apiSidebar"}),"\u3002\u4f7f\u7528\u540c\u6837\u7684\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u4e0d\u5305\u542b\u6587\u6863 Y \u7684\u4fa7\u8fb9\u680f X \u51fa\u73b0\u5728\u6587\u6863 Y \u4e0a:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-md",metastring:'title="home.md"',children:"---\ndisplayed_sidebar: tutorialSidebar\n---\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u5373\u4f7f\u5f53",(0,d.jsx)(n.code,{children:"tutorialSidebar"}),"\u4e0d\u5305\u542b\u5230",(0,d.jsx)(n.code,{children:"home"}),"\u7684\u94fe\u63a5\u65f6\uff0c\u5b83\u4ecd\u7136\u4f1a\u5728\u67e5\u770b",(0,d.jsx)(n.code,{children:"home"}),"\u65f6\u663e\u793a\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u8bbe\u7f6e",(0,d.jsx)(n.code,{children:"displayed_sidebar: null"}),"\uff0c\u5219\u4e0d\u4f1a\u5728\u6b64\u9875\u9762\u4e0a\u663e\u793a\u4efb\u4f55\u8fb9\u680f\uff0c\u968f\u540e\u4e5f\u4e0d\u4f1a\u5206\u9875\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"generating-pagination",children:"\u751f\u6210\u5206\u9875"}),"\n",(0,d.jsxs)(n.p,{children:["Docusaurus \u4f7f\u7528\u4fa7\u8fb9\u680f\u5728\u6bcf\u4e2a\u6587\u6863\u9875\u9762\u7684\u5e95\u90e8\u751f\u6210",(0,d.jsx)(n.code,{children:"\u4e0b\u4e00\u4e2a"}),"\u548c",(0,d.jsx)(n.code,{children:"\u4e0a\u4e00\u4e2a"}),"\u5206\u9875\u94fe\u63a5\u3002\u5b83\u4e25\u683c\u4f7f\u7528\u663e\u793a\u7684\u8fb9\u680f:\u5982\u679c\u6ca1\u6709\u5173\u8054\u7684\u8fb9\u680f\uff0c\u5b83\u4e5f\u4e0d\u4f1a\u751f\u6210\u5206\u9875\u3002\u7136\u800c\uff0c\u94fe\u63a5\u4e3a",(0,d.jsx)(n.code,{children:"next"}),"\u548c",(0,d.jsx)(n.code,{children:"previous"}),"\u7684\u6587\u6863\u4e0d\u80fd\u4fdd\u8bc1\u663e\u793a\u76f8\u540c\u7684\u8fb9\u680f:\u5b83\u4eec\u5305\u542b\u5728\u8fd9\u4e2a\u8fb9\u680f\u4e2d\uff0c\u4f46\u5728\u5b83\u4eec\u7684\u524d\u9762\uff0c\u5b83\u4eec\u53ef\u80fd\u6709\u4e0d\u540c\u7684",(0,d.jsx)(n.code,{children:"displayed_sidebar"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679c\u901a\u8fc7\u8bbe\u7f6e",(0,d.jsx)(n.code,{children:"displayed_sidebar"})," front matter \u6765\u663e\u793a\u4fa7\u8fb9\u680f\uff0c\u5e76\u4e14\u8be5\u4fa7\u8fb9\u680f\u4e0d\u5305\u542b\u6587\u6863\u672c\u8eab\uff0c\u5219\u4e0d\u4f1a\u663e\u793a\u5206\u9875\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u7528",(0,d.jsx)(n.code,{children:"pagination_next"}),"\u548c",(0,d.jsx)(n.code,{children:"pagination_prev"}),"\u81ea\u5b9a\u4e49\u5206\u9875\u3002\u8003\u8651\u4e00\u4e0b\u8fd9\u4e2a\u8fb9\u680f:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:'module.exports = {\n  tutorial: [\n    "introduction",\n    {\n      installation: ["windows", "linux", "macos"],\n    },\n    "getting-started",\n  ],\n};\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"windows"}),"\u4e0a\u7684\u5206\u9875 next \u94fe\u63a5\u6307\u5411",(0,d.jsx)(n.code,{children:"linux"}),"\uff0c\u4f46\u8fd9\u6ca1\u6709\u610f\u4e49:\u60a8\u53ef\u80fd\u5e0c\u671b\u8bfb\u8005\u5728\u5b89\u88c5\u540e\u7ee7\u7eed",(0,d.jsx)(n.code,{children:"\u5165\u95e8"}),"\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\u5206\u9875:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-md",metastring:'title="windows.md"',children:"---\n# highlight-next-line\npagination_next: getting-started\n---\n\n# Installation on Windows\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,d.jsx)(n.code,{children:"pagination_next: null"}),"\u6216",(0,d.jsx)(n.code,{children:"pagination_prev: null"}),"\u6765\u7981\u7528\u663e\u793a\u5206\u9875\u94fe\u63a5\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5206\u9875\u6807\u7b7e\u662f\u4fa7\u8fb9\u680f\u6807\u7b7e\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u6807\u9898",(0,d.jsx)(n.code,{children:"pagination_label"}),"\u6765\u5b9a\u5236\u8be5\u6587\u6863\u5728\u5206\u9875\u4e2d\u7684\u663e\u793a\u65b9\u5f0f\u3002"]}),"\n",(0,d.jsxs)(n.h2,{id:"sidebar-item-ref",children:[(0,d.jsx)(n.code,{children:"ref"}),"\u9879"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"ref"}),"\u7c7b\u578b\u5728\u6240\u6709\u65b9\u9762\u90fd\u4e0e",(0,d.jsxs)(n.a,{href:"/docusaurus-docs/docs/next/sidebar/items#sidebar-item-doc",children:[(0,d.jsx)(n.code,{children:"doc"})," type"]}),"\u76f8\u540c\uff0c\u9664\u4e86\u5b83\u4e0d\u53c2\u4e0e\u751f\u6210\u5bfc\u822a\u5143\u6570\u636e\u3002\u5b83\u53ea\u5c06\u81ea\u5df1\u6ce8\u518c\u4e3a\u94fe\u63a5\u3002\u5f53[\u751f\u6210\u5206\u9875](# generated -pagination)\u548c",(0,d.jsx)(n.a,{href:"#sidebar-association",children:"\u663e\u793a\u4fa7\u8fb9\u680f"}),"\u65f6\uff0c",(0,d.jsx)(n.code,{children:"ref"}),"\u9879\u88ab\u5b8c\u5168\u5ffd\u7565\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5f53\u60a8\u5e0c\u671b\u4ece\u591a\u4e2a\u4fa7\u8fb9\u680f\u94fe\u63a5\u5230\u540c\u4e00\u6587\u6863\u65f6\uff0c\u5b83\u7279\u522b\u6709\u7528\u3002\u6587\u6863\u53ea\u5c5e\u4e8e\u4e00\u4e2a\u4fa7\u8fb9\u680f(\u6ce8\u518c\u4e3a",(0,d.jsx)(n.code,{children:"type: 'doc'"}),"\u6216\u81ea\u52a8\u751f\u6210\u76ee\u5f55\u7684\u4fa7\u8fb9\u680f)\uff0c\u4f46\u5b83\u7684\u94fe\u63a5\u5c06\u51fa\u73b0\u5728\u5b83\u6ce8\u518c\u7684\u6240\u6709\u4fa7\u8fb9\u680f\u4e2d\u3002"]}),"\n",(0,d.jsx)(n.p,{children:"\u8003\u8651\u4e00\u4e0b\u8fd9\u4e2a\u4f8b\u5b50:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: {\n    'Category A': [\n      'doc1',\n      'doc2',\n      // highlight-next-line\n      {type: 'ref', id: 'commonDoc'},\n      'doc5',\n    ],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u8ba4\u4e3a",(0,d.jsx)(n.code,{children:"ref"}),"\u7c7b\u578b\u76f8\u5f53\u4e8e\u505a\u4ee5\u4e0b\u4e8b\u60c5:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u4e3a commonDoc \u8bbe\u7f6e",(0,d.jsx)(n.code,{children:"displayed_sidebar: tutorialSidebar"})," (",(0,d.jsx)(n.code,{children:"ref"}),"\u5728\u4fa7\u680f\u5173\u8054\u4e2d\u88ab\u5ffd\u7565)"]}),"\n",(0,d.jsxs)(n.li,{children:["\u4e3a",(0,d.jsx)(n.code,{children:"doc2"}),"\u8bbe\u7f6e",(0,d.jsx)(n.code,{children:"pagination_next: doc5"}),"\uff0c\u4e3a",(0,d.jsx)(n.code,{children:"doc5"}),"\u8bbe\u7f6e",(0,d.jsx)(n.code,{children:"pagination_prev: doc2"})," (",(0,d.jsx)(n.code,{children:"ref"}),"\u5728\u5206\u9875\u751f\u6210\u4e2d\u88ab\u5ffd\u7565)"]}),"\n"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}},11151:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>c});var d=s(67294);const i=d.createContext({});function c(e){const n=d.useContext(i);return d.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||r:c(e),d.createElement(i.Provider,{value:o},n)}}}]);