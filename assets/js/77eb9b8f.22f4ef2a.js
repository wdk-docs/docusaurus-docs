"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4724],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),g=i,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return t?a.createElement(m,r(r({ref:n},p),{},{components:t})):a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},91553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const o={sidebar_position:1,toc_max_heading_level:4},r="\u751f\u547d\u5468\u671f APIs",s={unversionedId:"api/plugin-methods/lifecycle-apis",id:"api/plugin-methods/lifecycle-apis",title:"\u751f\u547d\u5468\u671f APIs",description:"\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u63d2\u4ef6\u88ab\u5e76\u884c\u52a0\u8f7d\uff0c\u4ee5\u83b7\u53d6\u5b83\u4eec\u81ea\u5df1\u7684\u5185\u5bb9\u5e76\u5c06\u5b83\u4eec\u5448\u73b0\u7ed9\u8def\u7531\u3002\u63d2\u4ef6\u4e5f\u53ef\u4ee5\u914d\u7f6e webpack \u6216\u5bf9\u751f\u6210\u7684\u6587\u4ef6\u8fdb\u884c\u540e\u5904\u7406\u3002",source:"@site/docs/api/plugin-methods/lifecycle-apis.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/lifecycle-apis",permalink:"/docs/api/plugin-methods/lifecycle-apis",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/plugin-methods/lifecycle-apis.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:4},sidebar:"api",previous:{title:"\u63d2\u4ef6\u65b9\u6cd5\u53c2\u8003",permalink:"/docs/api/plugin-methods/"},next:{title:"\u6269\u5927\u57fa\u7840\u8bbe\u65bd",permalink:"/docs/api/plugin-methods/extend-infrastructure"}},l={},u=[{value:"<code>async loadContent()</code>",id:"loadContent",level:2},{value:"<code>async contentLoaded({content, actions})</code>",id:"contentLoaded",level:2},{value:"<code>content</code>",id:"content",level:3},{value:"<code>actions</code>",id:"actions",level:3},{value:"<code>addRoute(config: RouteConfig): void</code>",id:"addRoute",level:4},{value:"<code>createData(name: string, data: any): Promise&lt;string&gt;</code>",id:"createData",level:4},{value:"<code>setGlobalData(data: any): void</code>",id:"setGlobalData",level:4},{value:"<code>configureWebpack(config, isServer, utils, content)</code>",id:"configureWebpack",level:2},{value:"<code>config</code>",id:"config",level:3},{value:"<code>isServer</code>",id:"isServer",level:3},{value:"<code>utils</code>",id:"utils",level:3},{value:"<code>content</code>",id:"content-1",level:3},{value:"\u5408\u5e76\u7b56\u7565",id:"merge-strategy",level:3},{value:"\u914d\u7f6e\u5f00\u53d1\u670d\u52a1\u5668",id:"configuring-dev-server",level:3},{value:"<code>configurePostCss(options)</code>",id:"configurePostCss",level:2},{value:"<code>postBuild(props)</code>",id:"postBuild",level:2},{value:"<code>injectHtmlTags({content})</code>",id:"injectHtmlTags",level:2},{value:"<code>getClientModules()</code>",id:"getClientModules",level:2}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u751f\u547d\u5468\u671f-apis"},"\u751f\u547d\u5468\u671f APIs"),(0,i.kt)("p",null,"\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u63d2\u4ef6\u88ab\u5e76\u884c\u52a0\u8f7d\uff0c\u4ee5\u83b7\u53d6\u5b83\u4eec\u81ea\u5df1\u7684\u5185\u5bb9\u5e76\u5c06\u5b83\u4eec\u5448\u73b0\u7ed9\u8def\u7531\u3002\u63d2\u4ef6\u4e5f\u53ef\u4ee5\u914d\u7f6e webpack \u6216\u5bf9\u751f\u6210\u7684\u6587\u4ef6\u8fdb\u884c\u540e\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"loadContent"},(0,i.kt)("inlineCode",{parentName:"h2"},"async loadContent()")),(0,i.kt)("p",null,"\u63d2\u4ef6\u5e94\u8be5\u4f7f\u7528\u8fd9\u4e2a\u751f\u547d\u5468\u671f\u4ece\u6570\u636e\u6e90(\u6587\u4ef6\u7cfb\u7edf\u3001\u8fdc\u7a0b API\u3001\u65e0\u5934 CMS \u7b49)\u83b7\u53d6\u6570\u636e\u6216\u505a\u4e00\u4e9b\u670d\u52a1\u5668\u5904\u7406\u3002\u8fd4\u56de\u503c\u662f\u5b83\u9700\u8981\u7684\u5185\u5bb9\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u63d2\u4ef6\u8fd4\u56de 1 \u5230 10 \u4e4b\u95f4\u7684\u968f\u673a\u6574\u6570\u4f5c\u4e3a\u5185\u5bb9\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // highlight-start\n    async loadContent() {\n      return 1 + Math.floor(Math.random() * 10);\n    },\n    // highlight-end\n  };\n};\n')),(0,i.kt)("h2",{id:"contentLoaded"},(0,i.kt)("inlineCode",{parentName:"h2"},"async contentLoaded({content, actions})")),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"loadContent"),"\u4e2d\u52a0\u8f7d\u7684\u6570\u636e\u5c06\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"contentLoaded"),"\u4e2d\u4f7f\u7528\u3002\u5b83\u53ef\u4ee5\u88ab\u6e32\u67d3\u6210\u8def\u7531\uff0c\u6ce8\u518c\u4e3a\u5168\u5c40\u6570\u636e\uff0c\u7b49\u7b49\u3002"),(0,i.kt)("h3",{id:"content"},(0,i.kt)("inlineCode",{parentName:"h3"},"content")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"contentLoaded"),"\u5c06\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"loadContent"),"\u5b8c\u6210\u540e\u88ab\u8c03\u7528\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"loadContent()"),"\u7684\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"content"),"\u4f20\u9012\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"contentLoaded"),"\u3002"),(0,i.kt)("h3",{id:"actions"},(0,i.kt)("inlineCode",{parentName:"h3"},"actions")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"actions")," \u5305\u542b\u4e09\u4e2a\u51fd\u6570:"),(0,i.kt)("h4",{id:"addRoute"},(0,i.kt)("inlineCode",{parentName:"h4"},"addRoute(config: RouteConfig): void")),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u8981\u6dfb\u52a0\u5230\u7f51\u7ad9\u7684\u8def\u7531\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type RouteConfig = {\n  path: string;\n  component: string;\n  modules?: RouteModules;\n  routes?: RouteConfig[];\n  exact?: boolean;\n  priority?: number;\n};\ntype RouteModules = {\n  [module: string]: Module | RouteModules | RouteModules[];\n};\ntype Module =\n  | {\n      path: string;\n      __import?: boolean;\n      query?: ParsedUrlQueryInput;\n    }\n  | string;\n")),(0,i.kt)("h4",{id:"createData"},(0,i.kt)("inlineCode",{parentName:"h4"},"createData(name: string, data: any): Promise<string>")),(0,i.kt)("p",null,"\u4e00\u4e2a\u58f0\u660e\u5f0f\u56de\u8c03\uff0c\u7528\u4e8e\u521b\u5efa\u9759\u6001\u6570\u636e(\u901a\u5e38\u662f JSON \u6216\u5b57\u7b26\u4e32)\uff0c\u8fd9\u4e9b\u6570\u636e\u4ee5\u540e\u53ef\u4ee5\u4f5c\u4e3a\u5c5e\u6027\u63d0\u4f9b\u7ed9\u4f60\u7684\u8def\u7531\u3002\u83b7\u53d6\u8981\u5b58\u50a8\u7684\u6587\u4ef6\u540d\u548c\u6570\u636e\uff0c\u5e76\u8fd4\u56de\u5b9e\u9645\u6570\u636e\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u63d2\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"/friends"),"\u9875\u9762\uff0c\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"Your friends are: Yangshun, Sebastien"),"\u3002:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="website/src/components/Friends.js"',title:'"website/src/components/Friends.js"'},'import React from "react";\n\nexport default function FriendsComponent({ friends }) {\n  return <div>Your friends are {friends.join(",")}</div>;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-friends-plugin/src/index.js"',title:'"docusaurus-friends-plugin/src/index.js"'},'export default function friendsPlugin(context, options) {\n  return {\n    name: "docusaurus-friends-plugin",\n    // highlight-start\n    async contentLoaded({ content, actions }) {\n      const { createData, addRoute } = actions;\n      // Create friends.json\n      const friends = ["Yangshun", "Sebastien"];\n      const friendsJsonPath = await createData("friends.json", JSON.stringify(friends));\n\n      // Add the \'/friends\' routes, and ensure it receives the friends props\n      addRoute({\n        path: "/friends",\n        component: "@site/src/components/Friends.js",\n        modules: {\n          // propName -> JSON file path\n          friends: friendsJsonPath,\n        },\n        exact: true,\n      });\n    },\n    // highlight-end\n  };\n}\n')),(0,i.kt)("h4",{id:"setGlobalData"},(0,i.kt)("inlineCode",{parentName:"h4"},"setGlobalData(data: any): void")),(0,i.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u5141\u8bb8\u521b\u5efa\u4e00\u4e9b\u5168\u5c40\u63d2\u4ef6\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u4ece\u4efb\u4f55\u9875\u9762\u8bfb\u53d6\uff0c\u5305\u62ec\u5176\u4ed6\u63d2\u4ef6\u521b\u5efa\u7684\u9875\u9762\uff0c\u4ee5\u53ca\u60a8\u7684\u4e3b\u9898\u5e03\u5c40\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6570\u636e\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"p",href:"/docs/docusaurus-core#useGlobalData"},(0,i.kt)("inlineCode",{parentName:"a"},"useGlobalData")),"\u548c",(0,i.kt)("a",{parentName:"p",href:"/docs/docusaurus-core#usePluginData"},(0,i.kt)("inlineCode",{parentName:"a"},"usePluginData")),"\u94a9\u5b50\u88ab\u5ba2\u6237\u7aef/\u4e3b\u9898\u4ee3\u7801\u8bbf\u95ee\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5168\u7403\u6570\u636e\u662f\u2026\u5168\u5c40:\u5b83\u7684\u5927\u5c0f\u4f1a\u5f71\u54cd\u7f51\u7ad9\u6240\u6709\u9875\u9762\u7684\u52a0\u8f7d\u65f6\u95f4\uff0c\u6240\u4ee5\u5c3d\u91cf\u4fdd\u6301\u5c0f\u3002\u5c3d\u53ef\u80fd\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"createData"),"\u548c\u7279\u5b9a\u4e8e\u9875\u9762\u7684\u6570\u636e\u3002")),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u63d2\u4ef6\u521b\u5efa\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"/friends"),"\u9875\u9762\uff0c\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"Your friends are: Yangshun, Sebastien"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="website/src/components/Friends.js"',title:'"website/src/components/Friends.js"'},'import React from "react";\nimport { usePluginData } from "@docusaurus/useGlobalData";\n\nexport default function FriendsComponent() {\n  const { friends } = usePluginData("docusaurus-friends-plugin");\n  return <div>Your friends are {friends.join(",")}</div>;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-friends-plugin/src/index.js"',title:'"docusaurus-friends-plugin/src/index.js"'},'export default function friendsPlugin(context, options) {\n  return {\n    name: "docusaurus-friends-plugin",\n    // highlight-start\n    async contentLoaded({ content, actions }) {\n      const { setGlobalData, addRoute } = actions;\n      // Create friends global data\n      setGlobalData({ friends: ["Yangshun", "Sebastien"] });\n\n      // Add the \'/friends\' routes\n      addRoute({\n        path: "/friends",\n        component: "@site/src/components/Friends.js",\n        exact: true,\n      });\n    },\n    // highlight-end\n  };\n}\n')),(0,i.kt)("h2",{id:"configureWebpack"},(0,i.kt)("inlineCode",{parentName:"h2"},"configureWebpack(config, isServer, utils, content)")),(0,i.kt)("p",null,"\u4fee\u6539\u5185\u90e8 webpack \u914d\u7f6e\u3002\u5982\u679c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a JavaScript \u5bf9\u8c61\uff0c\u5b83\u5c06\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge"},(0,i.kt)("inlineCode",{parentName:"a"},"webpack-merge")),"\u88ab\u5408\u5e76\u5230\u6700\u7ec8\u914d\u7f6e\u4e2d\u3002\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u5c06\u88ab\u8c03\u7528\u5e76\u63a5\u6536",(0,i.kt)("inlineCode",{parentName:"p"},"config"),"\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"isServer"),"\u6807\u5fd7\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"configureWebpack"),"\u7684 API \u5c06\u5728\u5c06\u6765\u88ab\u4fee\u6539\u4ee5\u63a5\u53d7\u4e00\u4e2a\u5bf9\u8c61(",(0,i.kt)("inlineCode",{parentName:"p"},"configureWebpack({config, isServer, utils, content})"),")")),(0,i.kt)("h3",{id:"config"},(0,i.kt)("inlineCode",{parentName:"h3"},"config")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configureWebpack"),"\u88ab\u8c03\u7528\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"config"),"\u6839\u636e\u5ba2\u6237\u7aef/\u670d\u52a1\u5668\u6784\u5efa\u751f\u6210\u3002\u60a8\u53ef\u4ee5\u5c06\u5176\u89c6\u4e3a\u8981\u5408\u5e76\u7684\u57fa\u672c\u914d\u7f6e\u3002"),(0,i.kt)("h3",{id:"isServer"},(0,i.kt)("inlineCode",{parentName:"h3"},"isServer")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configureWebpack"),"\u5c06\u5728\u670d\u52a1\u5668\u6784\u5efa\u548c\u5ba2\u6237\u7aef\u6784\u5efa\u4e2d\u88ab\u8c03\u7528\u3002\u670d\u52a1\u5668\u6784\u5efa\u63a5\u6536",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5ba2\u6237\u7aef\u6784\u5efa\u63a5\u6536",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"isServer"),"\u3002"),(0,i.kt)("h3",{id:"utils"},(0,i.kt)("inlineCode",{parentName:"h3"},"utils")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configureWebpack"),"\u4e5f\u63a5\u6536\u4e00\u4e2a util \u5bf9\u8c61:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getStyleLoaders(isServer: boolean, cssOptions: {[key: string]: any}): Loader[]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getJSLoader(isServer: boolean, cacheOptions?: {}): Loader | null"))),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u6709\u6761\u4ef6\u5730\u8fd4\u56de\u60a8\u7684 webpack \u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u8fd9\u4e2a\u63d2\u4ef6\u4fee\u6539 webpack \u914d\u7f6e\u4e3a\u7f16\u8bd1",(0,i.kt)("inlineCode",{parentName:"p"},".foo"),"\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "custom-docusaurus-plugin",\n    // highlight-start\n    configureWebpack(config, isServer, utils) {\n      const { getJSLoader } = utils;\n      return {\n        module: {\n          rules: [\n            {\n              test: /\\.foo$/,\n              use: [getJSLoader(isServer), "my-custom-webpack-loader"],\n            },\n          ],\n        },\n      };\n    },\n    // highlight-end\n  };\n};\n')),(0,i.kt)("h3",{id:"content-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"content")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configureWebpack"),"\u5c06\u5728\u63d2\u4ef6\u52a0\u8f7d\u5185\u5bb9\u65f6\u88ab\u8c03\u7528\u3002"),(0,i.kt)("h3",{id:"merge-strategy"},"\u5408\u5e76\u7b56\u7565"),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge"},"webpack-merge"),"\u5c06\u63d2\u4ef6\u7684 Webpack \u914d\u7f6e\u90e8\u5206\u5408\u5e76\u5230\u5168\u5c40 Webpack \u914d\u7f6e\u4e2d\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u6307\u5b9a\u5408\u5e76\u7b56\u7565\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e2a webpack \u89c4\u5219\u88ab\u524d\u7f6e\u800c\u4e0d\u662f\u8ffd\u52a0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "custom-docusaurus-plugin",\n    configureWebpack(config, isServer, utils) {\n      return {\n        // highlight-start\n        mergeStrategy: { "module.rules": "prepend" },\n        module: { rules: [myRuleToPrepend] },\n        // highlight-end\n      };\n    },\n  };\n};\n')),(0,i.kt)("p",null,"\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"https://github.com/survivejs/webpack-merge#merging-with-strategies"},"webpack-merge \u7b56\u7565\u6587\u6863"),"\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002"),(0,i.kt)("h3",{id:"configuring-dev-server"},"\u914d\u7f6e\u5f00\u53d1\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8fd4\u56de",(0,i.kt)("inlineCode",{parentName:"p"},"devServer"),"\u5b57\u6bb5\u6765\u914d\u7f6e\u5f00\u53d1\u670d\u52a1\u5668\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "custom-docusaurus-plugin",\n    configureWebpack(config, isServer, utils) {\n      return {\n        // highlight-start\n        devServer: {\n          open: "/docs", // Opens localhost:3000/docs instead of localhost:3000/\n        },\n        // highlight-end\n      };\n    },\n  };\n};\n')),(0,i.kt)("h2",{id:"configurePostCss"},(0,i.kt)("inlineCode",{parentName:"h2"},"configurePostCss(options)")),(0,i.kt)("p",null,"\u5728\u5ba2\u6237\u7aef\u5305\u751f\u6210\u8fc7\u7a0b\u4e2d\u4fee\u6539\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/loaders/postcss-loader/#postcssoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"postcss-loader"),"\u7684",(0,i.kt)("inlineCode",{parentName:"a"},"postcssOptions")),"\u3002"),(0,i.kt)("p",null,"\u5e94\u8be5\u8fd4\u56de\u53d8\u5f02\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"postcssOptions"),"\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"postcssOptions"),"\u770b\u8d77\u6765\u50cf\u8fd9\u6837:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const postcssOptions = {\n  ident: "postcss",\n  plugins: [require("autoprefixer")],\n};\n')),(0,i.kt)("p",null,"\u4f8b\u5b50:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // highlight-start\n    configurePostCss(postcssOptions) {\n      // Appends new PostCSS plugin.\n      postcssOptions.plugins.push(require("postcss-import"));\n      return postcssOptions;\n    },\n    // highlight-end\n  };\n};\n')),(0,i.kt)("h2",{id:"postBuild"},(0,i.kt)("inlineCode",{parentName:"h2"},"postBuild(props)")),(0,i.kt)("p",null,"\u5f53(\u751f\u4ea7)\u6784\u5efa\u5b8c\u6210\u65f6\u8c03\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Props {\n  siteDir: string;\n  generatedFilesDir: string;\n  siteConfig: DocusaurusConfig;\n  outDir: string;\n  baseUrl: string;\n  headTags: string;\n  preBodyTags: string;\n  postBodyTags: string;\n  routesPaths: string[];\n  plugins: Plugin<any>[];\n  content: Content;\n}\n")),(0,i.kt)("p",null,"\u4f8b\u5b50:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // highlight-start\n    async postBuild({ siteConfig = {}, routesPaths = [], outDir }) {\n      // Print out to console all the rendered routes.\n      routesPaths.map((route) => {\n        console.log(route);\n      });\n    },\n    // highlight-end\n  };\n};\n')),(0,i.kt)("h2",{id:"injectHtmlTags"},(0,i.kt)("inlineCode",{parentName:"h2"},"injectHtmlTags({content})")),(0,i.kt)("p",null,"\u6ce8\u5165\u5934\u90e8\u548c/\u6216\u6b63\u6587 HTML \u6807\u7b7e\u5230 Docusaurus \u751f\u6210\u7684 HTML\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"injectHtmlTags"),"\u5c06\u88ab\u63d2\u4ef6\u52a0\u8f7d\u7684\u5185\u5bb9\u8c03\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function injectHtmlTags(): {\n  headTags?: HtmlTags;\n  preBodyTags?: HtmlTags;\n  postBodyTags?: HtmlTags;\n};\n\ntype HtmlTags = string | HtmlTagObject | (string | HtmlTagObject)[];\n\ntype HtmlTagObject = {\n  /**\n   * Attributes of the HTML tag\n   * E.g. `{'disabled': true, 'value': 'demo', 'rel': 'preconnect'}`\n   */\n  attributes?: {\n    [attributeName: string]: string | boolean;\n  };\n  /**\n   * The tag name e.g. `div`, `script`, `link`, `meta`\n   */\n  tagName: string;\n  /**\n   * The inner HTML\n   */\n  innerHTML?: string;\n};\n")),(0,i.kt)("p",null,"\u4f8b\u5b50:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    loadContent: async () => {\n      return { remoteHeadTags: await fetchHeadTagsFromAPI() };\n    },\n    // highlight-start\n    injectHtmlTags({ content }) {\n      return {\n        headTags: [\n          {\n            tagName: "link",\n            attributes: {\n              rel: "preconnect",\n              href: "https://www.github.com",\n            },\n          },\n          ...content.remoteHeadTags,\n        ],\n        preBodyTags: [\n          {\n            tagName: "script",\n            attributes: {\n              charset: "utf-8",\n              src: "/noflash.js",\n            },\n          },\n        ],\n        postBodyTags: [`<div> This is post body </div>`],\n      };\n    },\n    // highlight-end\n  };\n};\n')),(0,i.kt)("p",null,"\u6807\u7b7e\u5c06\u6dfb\u52a0\u5982\u4e0b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"headTags"),"\u5c06\u5728 config \u6dfb\u52a0\u7684\u811a\u672c\u4e4b\u540e\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"</head>"),"\u6807\u7b7e\u4e4b\u524d\u63d2\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preBodyTags"),"\u5c06\u88ab\u63d2\u5165\u5230\u4efb\u4f55\u5b50\u5143\u7d20\u4e4b\u524d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"<body>"),"\u6807\u7b7e\u4e4b\u540e\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postBodyTags"),"\u5c06\u88ab\u63d2\u5165\u5230\u6240\u6709\u5b50\u5143\u7d20\u4e4b\u540e\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"</body>"),"\u6807\u7b7e\u4e4b\u524d\u3002")),(0,i.kt)("h2",{id:"getClientModules"},(0,i.kt)("inlineCode",{parentName:"h2"},"getClientModules()")),(0,i.kt)("p",null,"\u8fd4\u56de\u8981\u5bfc\u5165\u5230\u5ba2\u6237\u7aef\u5305\u4e2d\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/client#client-modules"},"\u5ba2\u6237\u7aef\u6a21\u5757"),"\u7684\u8def\u5f84\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8981\u8ba9\u4f60\u7684\u4e3b\u9898\u4ece\u7528\u6237\u4f20\u5165\u7684 options \u4e2d\u52a0\u8f7d\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"customCss"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"customJs"),"\u6587\u4ef6\u8def\u5f84:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'},'const path = require("path");\n\nmodule.exports = function (context, options) {\n  const { customCss, customJs } = options || {};\n  return {\n    name: "name-of-my-theme",\n    // highlight-start\n    getClientModules() {\n      return [customCss, customJs];\n    },\n    // highlight-end\n  };\n};\n')))}c.isMDXComponent=!0}}]);