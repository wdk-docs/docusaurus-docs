"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9080],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={},l="\u63d2\u4ef6",o={unversionedId:"advanced/plugins",id:"advanced/plugins",title:"\u63d2\u4ef6",description:"\u63d2\u4ef6\u662f Docusaurus 2 \u7ad9\u70b9\u529f\u80fd\u7684\u6784\u5efa\u6a21\u5757\u3002\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u7279\u6027\u3002\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u4f5c\u4e3a\u6346\u7ed1\u5305\u7684\u4e00\u90e8\u5206\u5de5\u4f5c\u548c\u5206\u53d1\u3002",source:"@site/docs/advanced/plugins.mdx",sourceDirName:"advanced",slug:"/advanced/plugins",permalink:"/docs/advanced/plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/plugins.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u4f53\u7cfb\u67b6\u6784",permalink:"/docs/advanced/architecture"},next:{title:"\u8def\u7531",permalink:"/docs/advanced/routing"}},u={},p=[{value:"\u521b\u5efa\u63d2\u4ef6",id:"creating-plugins",level:2},{value:"\u51fd\u6570\u5b9a\u4e49",id:"function-definition",level:3},{value:"\u6a21\u5757\u5b9a\u4e49",id:"module-definition",level:3},{value:"\u63d2\u4ef6\u7684\u8bbe\u8ba1",id:"plugin-design",level:2},{value:"\u4e3b\u9898\u8bbe\u8ba1",id:"theme-design",level:3}],s={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,r.kt)("p",null,"\u63d2\u4ef6\u662f Docusaurus 2 \u7ad9\u70b9\u529f\u80fd\u7684\u6784\u5efa\u6a21\u5757\u3002\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u6709\u81ea\u5df1\u7684\u7279\u6027\u3002\u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u4f5c\u4e3a\u6346\u7ed1\u5305\u7684\u4e00\u90e8\u5206\u5de5\u4f5c\u548c\u5206\u53d1\u3002"),(0,r.kt)("h2",{id:"creating-plugins"},"\u521b\u5efa\u63d2\u4ef6"),(0,r.kt)("p",null,"\u63d2\u4ef6\u662f\u4e00\u4e2a\u5e26\u6709\u4e24\u4e2a\u53c2\u6570\u7684\u51fd\u6570:",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\u3002\n\u5b83\u8fd4\u56de\u4e00\u4e2a\u63d2\u4ef6\u5b9e\u4f8b\u5bf9\u8c61(\u6216\u4e00\u4e2a promise)\u3002\n\u60a8\u53ef\u4ee5\u5c06\u63d2\u4ef6\u521b\u5efa\u4e3a\u51fd\u6570\u6216\u6a21\u5757\u3002\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/"},"\u63d2\u4ef6\u65b9\u6cd5\u53c2\u8003\u90e8\u5206"),"\u3002"),(0,r.kt)("h3",{id:"function-definition"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u63d2\u4ef6\u4f5c\u4e3a\u4e00\u4e2a\u51fd\u6570\u76f4\u63a5\u5305\u542b\u5728 Docusaurus \u914d\u7f6e\u6587\u4ef6\u4e2d:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: [\n    // highlight-start\n    async function myPlugin(context, options) {\n      // ...\n      return {\n        name: "my-plugin",\n        async loadContent() {\n          // ...\n        },\n        async contentLoaded({ content, actions }) {\n          // ...\n        },\n        /* other lifecycle API */\n      };\n    },\n    // highlight-end\n  ],\n};\n')),(0,r.kt)("h3",{id:"module-definition"},"\u6a21\u5757\u5b9a\u4e49"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u4f5c\u4e3a\u6a21\u5757\u8def\u5f84\uff0c\u5f15\u7528\u4e00\u4e2a\u5355\u72ec\u7684\u6587\u4ef6\u6216 npm \u5305:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: [\n    // without options:\n    "./my-plugin",\n    // or with options:\n    ["./my-plugin", options],\n  ],\n};\n')),(0,r.kt)("p",null,"\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"my-plugin"),"\u6587\u4ef6\u5939\u4e2d\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"\uff0c\u5982\u4e0b\u6240\u793a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-plugin/index.js"',title:'"my-plugin/index.js"'},'module.exports = async function myPlugin(context, options) {\n  // ...\n  return {\n    name: "my-plugin",\n    async loadContent() {\n      /* ... */\n    },\n    async contentLoaded({ content, actions }) {\n      /* ... */\n    },\n    /* other lifecycle API */\n  };\n};\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/__docusaurus/debug/metadata"},"\u8c03\u8bd5\u63d2\u4ef6\u7684\u5143\u6570\u636e\u9762\u677f"),"\u67e5\u770b\u6240\u6709\u5b89\u88c5\u5728\u4f60\u7f51\u7ad9\u4e0a\u7684\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u63d2\u4ef6\u6709\u51e0\u79cd\u7c7b\u578b:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package"),": \u60a8\u5b89\u88c5\u7684\u5916\u90e8\u8f6f\u4ef6\u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project"),": \u60a8\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u7684\u63d2\u4ef6\uff0c\u4f5c\u4e3a\u672c\u5730\u6587\u4ef6\u8def\u5f84\u63d0\u4f9b\u7ed9 Docusaurus"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"local"),": \u4f7f\u7528\u51fd\u6570\u5b9a\u4e49\u521b\u5efa\u7684\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"synthetic"),": Docusaurus \u5185\u90e8\u521b\u5efa\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"\u5047\u63d2\u4ef6"),"\uff0c\u6240\u4ee5\u6211\u4eec\u5229\u7528\u6211\u4eec\u7684\u6a21\u5757\u5316\u67b6\u6784\uff0c\u4e0d\u8ba9\u6838\u5fc3\u505a\u592a\u591a\u7279\u6b8a\u7684\u5de5\u4f5c\u3002\u60a8\u4e0d\u4f1a\u5728\u5143\u6570\u636e\u4e2d\u770b\u5230\u5b83\uff0c\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u5b9e\u73b0\u7ec6\u8282\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"useDocusaurusContext().siteMetadata.pluginVersions"),"\u5728\u5ba2\u6237\u7aef\u8bbf\u95ee\u5b83\u4eec\u3002"),(0,r.kt)("h2",{id:"plugin-design"},"\u63d2\u4ef6\u7684\u8bbe\u8ba1"),(0,r.kt)("p",null,"Docusaurus \u5b9e\u73b0\u7684\u63d2\u4ef6\u7cfb\u7edf\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u4fbf\u7684\u65b9\u5f0f\u6765\u8fde\u63a5\u5230\u7f51\u7ad9\u7684\u751f\u547d\u5468\u671f\uff0c\u4ee5\u4fee\u6539\u5f00\u53d1/\u6784\u5efa\u671f\u95f4\u53d1\u751f\u7684\u4e8b\u60c5\uff0c\u8fd9\u5305\u62ec(\u4f46\u4e0d\u9650\u4e8e)\u6269\u5c55 webpack \u914d\u7f6e\uff0c\u4fee\u6539\u52a0\u8f7d\u7684\u6570\u636e\uff0c\u4ee5\u53ca\u521b\u5efa\u8981\u5728\u9875\u9762\u4e2d\u4f7f\u7528\u7684\u65b0\u7ec4\u4ef6\u3002"),(0,r.kt)("h3",{id:"theme-design"},"\u4e3b\u9898\u8bbe\u8ba1"),(0,r.kt)("p",null,"\u5f53\u63d2\u4ef6\u52a0\u8f7d\u5b83\u4eec\u7684\u5185\u5bb9\u65f6\uff0c\u6570\u636e\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/lifecycle-apis#addRoute"},(0,r.kt)("inlineCode",{parentName:"a"},"createData")," + ",(0,r.kt)("inlineCode",{parentName:"a"},"addRoute")),"\u6216",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/lifecycle-apis#setGlobalData"},(0,r.kt)("inlineCode",{parentName:"a"},"setGlobalData")),"\u7b49\u64cd\u4f5c\u63d0\u4f9b\u7ed9\u5ba2\u6237\u7aef\u3002\n\u8fd9\u4e9b\u6570\u636e\u5fc5\u987b\u88ab",(0,r.kt)("em",{parentName:"p"},"\u5e8f\u5217\u5316"),"\u4e3a\u666e\u901a\u5b57\u7b26\u4e32\uff0c\u56e0\u4e3a",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/architecture"},"\u63d2\u4ef6\u548c\u4e3b\u9898\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e2d\u8fd0\u884c"),"\u3002\n\u4e00\u65e6\u6570\u636e\u5230\u8fbe\u5ba2\u6237\u7aef\uff0c\u5269\u4e0b\u7684\u90e8\u5206\u5bf9 React \u5f00\u53d1\u8005\u6765\u8bf4\u5c31\u5f88\u719f\u6089\u4e86:\u6570\u636e\u901a\u8fc7\u7ec4\u4ef6\u4f20\u9012\uff0c\u7ec4\u4ef6\u4e0e Webpack \u6346\u7ed1\u5728\u4e00\u8d77\uff0c\u5e76\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\u6e32\u67d3\u5230\u7a97\u53e3\u2026\u2026"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u7ec4 UI \u7ec4\u4ef6\u6765\u5448\u73b0\u5185\u5bb9\u3002"),"\n\u5927\u591a\u6570\u5185\u5bb9\u63d2\u4ef6\u9700\u8981\u4e0e\u4e3b\u9898\u914d\u5bf9\u624d\u80fd\u771f\u6b63\u6709\u7528\u3002UI \u662f\u4e00\u4e2a\u72ec\u7acb\u4e8e\u6570\u636e\u6a21\u5f0f\u7684\u5c42\uff0c\u8fd9\u4f7f\u5f97\u4ea4\u6362\u8bbe\u8ba1\u53d8\u5f97\u5bb9\u6613\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0cDocusaurus \u535a\u5ba2\u53ef\u80fd\u5305\u542b\u4e00\u4e2a\u535a\u5ba2\u63d2\u4ef6\u548c\u4e00\u4e2a\u535a\u5ba2\u4e3b\u9898\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u4eba\u4e3a\u7684\u4f8b\u5b50:\u5728\u5b9e\u8df5\u4e2d, ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic")," \u4e3a\u6587\u6863\u3001\u535a\u5ba2\u548c\u5e03\u5c40\u63d0\u4f9b\u4e3b\u9898\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // highlight-next-line\n  themes: ["theme-blog"],\n  plugins: ["plugin-content-blog"],\n};\n')),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Bootstrap \u6837\u5f0f\uff0c\u4f60\u53ef\u4ee5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"theme-blog-bootstrap"),"(\u53e6\u4e00\u4e2a\u865a\u6784\u7684\u4e0d\u5b58\u5728\u7684\u4e3b\u9898)\u66ff\u6362\u4e3b\u9898:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // highlight-next-line\n  themes: ["theme-blog-bootstrap"],\n  plugins: ["plugin-content-blog"],\n};\n')),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u867d\u7136\u4e3b\u9898\u4ece\u63d2\u4ef6\u63a5\u6536\u76f8\u540c\u7684\u6570\u636e\uff0c\u4f46\u4e3b\u9898\u5982\u4f55\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"render"),"\u6570\u636e\u4f5c\u4e3a UI \u53ef\u80fd\u4f1a\u6709\u5f88\u5927\u7684\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u867d\u7136\u4e3b\u9898\u4e0e\u63d2\u4ef6\u5171\u4eab\u5b8c\u5168\u76f8\u540c\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u4f46\u4e3b\u9898\u7684\u5b9e\u73b0\u53ef\u80fd\u4e0e\u57fa\u4e8e\u4e3b\u9898\u8bbe\u8ba1\u76ee\u6807\u7684\u63d2\u4ef6\u770b\u8d77\u6765\u975e\u5e38\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u4e3b\u9898\u65e8\u5728\u5b8c\u6210 Docusaurus \u7ad9\u70b9\u7684\u6784\u5efa\uff0c\u5e76\u63d0\u4f9b\u7ad9\u70b9\u3001\u63d2\u4ef6\u548c\u4e3b\u9898\u672c\u8eab\u4f7f\u7528\u7684\u7ec4\u4ef6\u3002\n\u4e3b\u9898\u4ecd\u7136\u50cf\u63d2\u4ef6\u4e00\u6837\uff0c\u66b4\u9732\u4e86\u4e00\u4e9b\u751f\u547d\u5468\u671f\u65b9\u6cd5\uff0c\u4f46\u6700\u6709\u53ef\u80fd\u7684\u662f\u4ed6\u4eec\u4e0d\u4f1a\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/lifecycle-apis#loadContent"},(0,r.kt)("inlineCode",{parentName:"a"},"loadContent")),"\uff0c\u56e0\u4e3a\u4ed6\u4eec\u53ea\u4ece\u63d2\u4ef6\u63a5\u6536\u6570\u636e\uff0c\u4f46\u4e0d\u751f\u6210\u6570\u636e\u81ea\u5df1;\u4e3b\u9898\u901a\u5e38\u4e5f\u4f34\u968f\u7740\u4e00\u4e2a\u5145\u6ee1\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"src/theme"),"\u76ee\u5f55\uff0c\u8fd9\u4e9b\u7ec4\u4ef6\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/extend-infrastructure#getThemePath"},(0,r.kt)("inlineCode",{parentName:"a"},"getThemePath")),"\u751f\u547d\u5468\u671f\u4e3a\u6838\u5fc3\u6240\u77e5\u3002\n\u603b\u7ed3:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u4e0e\u63d2\u4ef6\u5171\u4eab\u76f8\u540c\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u5728\u6240\u6709\u73b0\u6709\u63d2\u4ef6\u4e4b\u540e\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u901a\u8fc7\u63d0\u4f9b",(0,r.kt)("inlineCode",{parentName:"li"},"getThemePath"),"\u6765\u6dfb\u52a0\u7ec4\u4ef6\u522b\u540d\u3002")))}d.isMDXComponent=!0}}]);