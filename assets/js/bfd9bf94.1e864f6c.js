"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7802],{14526:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),i=a(92053);function l(e){return t.createElement(i.Z,e)}},94395:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var t=a(87462),i=(a(67294),a(3905)),l=a(14526);const o={sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},p="\ud83d\udce6 plugin-pwa",r={unversionedId:"api/plugins/plugin-pwa",id:"api/plugins/plugin-pwa",title:"\ud83d\udce6 plugin-pwa",description:"Docusaurus \u63d2\u4ef6\u6dfb\u52a0 PWA \u652f\u6301\u4f7f\u7528Workbox\u3002\u8fd9\u4e2a\u63d2\u4ef6\u53ea\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u751f\u6210\u4e00\u4e2a Service Worker\uff0c\u5e76\u5141\u8bb8\u4f60\u521b\u5efa\u5b8c\u5168\u7b26\u5408 pwa \u7684\u6587\u6863\u7ad9\u70b9\uff0c\u652f\u6301\u79bb\u7ebf\u548c\u5b89\u88c5\u3002",source:"@site/docs/api/plugins/plugin-pwa.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-pwa",permalink:"/docs/api/plugins/@docusaurus/plugin-pwa",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/plugins/plugin-pwa.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/api/plugins/@docusaurus/plugin-pwa"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-ideal-image",permalink:"/docs/api/plugins/@docusaurus/plugin-ideal-image"},next:{title:"\ud83d\udce6 plugin-sitemap",permalink:"/docs/api/plugins/@docusaurus/plugin-sitemap"}},s={},u=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u6e10\u8fdb\u5f0f Web \u5e94\u7528",id:"progressive-web-app",level:2},{value:"\u5e94\u7528\u5b89\u88c5\u652f\u6301",id:"app-installation-support",level:2},{value:"\u79bb\u7ebf\u6a21\u5f0f (precaching)",id:"offline-mode-precaching",level:2},{value:"\u9009\u9879",id:"options",level:2},{value:"<code>debug</code>",id:"debug",level:3},{value:"<code>offlineModeActivationStrategies</code>",id:"offlinemodeactivationstrategies",level:3},{value:"<code>injectManifestConfig</code>",id:"injectmanifestconfig",level:3},{value:"<code>pwaHead</code>",id:"pwahead",level:3},{value:"<code>swCustom</code>",id:"swcustom",level:3},{value:"<code>swRegister</code>",id:"swregister",level:3},{value:"Manifest \u4f8b\u5b50",id:"manifest-example",level:2},{value:"\u81ea\u5b9a\u4e49\u91cd\u65b0\u52a0\u8f7d\u5f39\u51fa",id:"customizing-reload-popup",level:2}],m={toc:u},d="wrapper";function c(e){let{components:n,...o}=e;return(0,i.kt)(d,(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-plugin-pwa"},"\ud83d\udce6 plugin-pwa"),(0,i.kt)("p",null,"Docusaurus \u63d2\u4ef6\u6dfb\u52a0 PWA \u652f\u6301\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox"},"Workbox"),"\u3002\u8fd9\u4e2a\u63d2\u4ef6\u53ea\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u751f\u6210\u4e00\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers"},"Service Worker"),"\uff0c\u5e76\u5141\u8bb8\u4f60\u521b\u5efa\u5b8c\u5168\u7b26\u5408 pwa \u7684\u6587\u6863\u7ad9\u70b9\uff0c\u652f\u6301\u79bb\u7ebf\u548c\u5b89\u88c5\u3002"),(0,i.kt)("h2",{id:"installation"},"\u5b89\u88c5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-pwa\n")),(0,i.kt)("h2",{id:"configuration"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/add-manifest/"},"PWA \u6e05\u5355"),"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"./static/manifest.json"),"\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u6700\u5c0f\u7684 PWA \u914d\u7f6e\u4fee\u6539",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\uff0c\u5982\u4e0b\u6240\u793a:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-pwa",\n      {\n        debug: true,\n        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],\n        pwaHead: [\n          {\n            tagName: "link",\n            rel: "icon",\n            href: "/img/docusaurus.png",\n          },\n          {\n            tagName: "link",\n            rel: "manifest",\n            href: "/manifest.json", // your PWA manifest\n          },\n          {\n            tagName: "meta",\n            name: "theme-color",\n            content: "rgb(37, 194, 160)",\n          },\n        ],\n      },\n    ],\n  ],\n};\n')),(0,i.kt)("h2",{id:"progressive-web-app"},"\u6e10\u8fdb\u5f0f Web \u5e94\u7528"),(0,i.kt)("p",null,"\u5b89\u88c5 service worker \u5e76\u4e0d\u8db3\u4ee5\u4f7f\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6210\u4e3a PWA\u3002\u4f60\u9700\u8981\u81f3\u5c11\u5305\u62ec\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest"},"Web App Manifest"),"\uff0c\u5e76\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," (",(0,i.kt)("a",{parentName:"p",href:"#pwaHead"},"Options > pwaHead"),")\u4e2d\u6709\u6b63\u786e\u7684\u6807\u7b7e\u3002"),(0,i.kt)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/lighthouse"},"Lighthouse"),"\u5728\u7ad9\u70b9\u4e0a\u8fd0\u884c\u5ba1\u8ba1\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u60a8\u7684\u7ad9\u70b9\u6210\u4e3a PWA \u6240\u9700\u6761\u4ef6\u7684\u66f4\u8be6\u5c3d\u7684\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/progressive-web-apps/checklist"},"PWA Checklist"),"\u3002"),(0,i.kt)("h2",{id:"app-installation-support"},"\u5e94\u7528\u5b89\u88c5\u652f\u6301"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u6d4f\u89c8\u5668\u652f\u6301\u5b83\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u5c06 Docusaurus \u7ad9\u70b9\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u5b89\u88c5\u8fc7\u7a0b\u7684\u5c4f\u5e55\u8bb0\u5f55\u3002\u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f\u4e2d\u4f1a\u51fa\u73b0\u4e00\u4e2a\u6309\u94ae\uff0c\u70b9\u51fb\u540e\u4f1a\u663e\u793a\u4e00\u4e2a\u5bf9\u8bdd\u6846\uff0c\u8be2\u95ee`\u5b89\u88c5\u6b64\u5e94\u7528\u7a0b\u5e8f?`\u70b9\u51fb`\u5b89\u88c5`\u6309\u94ae\u540e\uff0c\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u6253\u5f00\u4e00\u4e2a\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6253\u5f00Docusaurus\u4e3b\u9875\u3002",src:a(1887).Z,width:"640",height:"505"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u9700\u8981 HTTPS \u534f\u8bae\u548c\u6709\u6548\u7684\u6e05\u5355\u3002")),(0,i.kt)("h2",{id:"offline-mode-precaching"},"\u79bb\u7ebf\u6a21\u5f0f (precaching)"),(0,i.kt)("p",null,"\u6211\u4eec\u5141\u8bb8\u7528\u6237\u79bb\u7ebf\u6d4f\u89c8 Docusaurus \u7f51\u7ad9\uff0c\u901a\u8fc7\u4f7f\u7528 service-worker \u8bf4\u6559\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/modules/workbox-precaching"},"workbox-precaching"),"\u9875\u9762\u89e3\u91ca\u4e86\u8fd9\u4e2a\u60f3\u6cd5:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"service worker \u7684\u4e00\u4e2a\u7279\u6027\u662f\u80fd\u591f\u5728 service worker \u5b89\u88c5\u65f6\u5c06\u4e00\u7ec4\u6587\u4ef6\u4fdd\u5b58\u5230\u7f13\u5b58\u4e2d\u3002\u8fd9\u901a\u5e38\u88ab\u79f0\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"\u8bf4\u6559"),"\uff0c\u56e0\u4e3a\u4f60\u5728\u4f7f\u7528 service worker \u4e4b\u524d\u7f13\u5b58\u5185\u5bb9\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"\u8fd9\u6837\u505a\u7684\u4e3b\u8981\u539f\u56e0\u662f\uff0c\u5b83\u4f7f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u63a7\u5236\u7f13\u5b58\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u53ef\u4ee5\u51b3\u5b9a\u4f55\u65f6\u548c\u591a\u957f\u65f6\u95f4\u7684\u6587\u4ef6\u7f13\u5b58\uff0c\u5e76\u63d0\u4f9b\u7ed9\u6d4f\u89c8\u5668\uff0c\u800c\u4e0d\u9700\u8981\u901a\u8fc7\u7f51\u7edc\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u7528\u6765\u521b\u5efa\u79bb\u7ebf\u5de5\u4f5c\u7684 web \u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("p",{parentName:"blockquote"},"Workbox \u901a\u8fc7\u7b80\u5316 API \u548c\u786e\u4fdd\u8d44\u6e90\u88ab\u9ad8\u6548\u4e0b\u8f7d\uff0c\u7701\u53bb\u4e86\u5927\u91cf\u7e41\u91cd\u7684\u8bf4\u6559\u5de5\u4f5c\u3002")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53\u7ad9\u70b9\u4f5c\u4e3a\u5e94\u7528\u7a0b\u5e8f\u5b89\u88c5\u65f6\uff0c\u79bb\u7ebf\u6a21\u5f0f\u662f\u542f\u7528\u7684\u3002\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u89c1",(0,i.kt)("inlineCode",{parentName:"p"},"offlineModeActivationStrategies"),"\u9009\u9879\u3002"),(0,i.kt)("p",null,"\u5728\u7ad9\u70b9\u88ab\u9884\u4f20\u4e4b\u540e\uff0cservice worker \u5c06\u4e3a\u4ee5\u540e\u7684\u8bbf\u95ee\u63d0\u4f9b\u7f13\u5b58\u7684\u54cd\u5e94\u3002\u5f53\u65b0\u7684\u6784\u5efa\u4e0e\u65b0\u7684 service worker \u4e00\u8d77\u90e8\u7f72\u65f6\uff0c\u65b0\u7684 service worker \u5c06\u5f00\u59cb\u5b89\u88c5\uff0c\u5e76\u6700\u7ec8\u8fdb\u5165\u7b49\u5f85\u72b6\u6001\u3002\u5728\u6b64\u7b49\u5f85\u72b6\u6001\u4e2d\uff0c\u5c06\u663e\u793a\u4e00\u4e2a\u91cd\u65b0\u52a0\u8f7d\u5f39\u51fa\u7a97\u53e3\uff0c\u5e76\u8981\u6c42\u7528\u6237\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u4ee5\u83b7\u53d6\u65b0\u5185\u5bb9\u3002\u76f4\u5230\u7528\u6237\u6e05\u7a7a\u4e86\u5e94\u7528\u7f13\u5b58\u6216\u8005\u70b9\u51fb\u4e86\u5f39\u51fa\u7a97\u53e3\u4e0a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u91cd\u65b0\u52a0\u8f7d"),"\u6309\u94ae\uff0cservice worker \u624d\u4f1a\u7ee7\u7eed\u63d0\u4f9b\u65e7\u7684\u5185\u5bb9\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u79bb\u7ebf\u6a21\u5f0f/\u9884\u4f20\u9700\u8981\u63d0\u524d\u4e0b\u8f7d\u7ad9\u70b9\u7684\u6240\u6709\u9759\u6001\u8d44\u4ea7\uff0c\u5e76\u4e14\u4f1a\u6d88\u8017\u4e0d\u5fc5\u8981\u7684\u5e26\u5bbd\u3002\u5bf9\u6240\u6709\u7c7b\u578b\u7684\u7ad9\u70b9\u90fd\u6fc0\u6d3b\u5b83\u53ef\u80fd\u4e0d\u662f\u4e00\u4e2a\u597d\u4e3b\u610f\u3002")),(0,i.kt)("h2",{id:"options"},"\u9009\u9879"),(0,i.kt)("h3",{id:"debug"},(0,i.kt)("inlineCode",{parentName:"h3"},"debug")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("p",null,"\u6253\u5f00\u8c03\u8bd5\u6a21\u5f0f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Workbox logs"),(0,i.kt)("li",{parentName:"ul"},"Additional Docusaurus logs"),(0,i.kt)("li",{parentName:"ul"},"Unoptimized SW file output"),(0,i.kt)("li",{parentName:"ul"},"Source maps")),(0,i.kt)("h3",{id:"offlinemodeactivationstrategies"},(0,i.kt)("inlineCode",{parentName:"h3"},"offlineModeActivationStrategies")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"('appInstalled' | 'mobile' | 'saveData'| 'queryString' | 'always')[]")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"['appInstalled', 'queryString', 'standalone']"))),(0,i.kt)("p",null,"\u5f00\u542f\u79bb\u7ebf\u6a21\u5f0f\u7684\u7b56\u7565:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"appInstalled"),": \u6fc0\u6d3b\u7528\u6237\u5df2\u5b89\u88c5\u7684\u7f51\u7ad9\u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f(\u4e0d\u662f 100%\u53ef\u9760)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"standalone"),": \u4e3a\u72ec\u7acb\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u7528\u6237\u6fc0\u6d3b(\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4e00\u65e6\u5b89\u88c5\u4e86 PWA)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"queryString"),": \u5982\u679c queryString \u5305\u542b",(0,i.kt)("inlineCode",{parentName:"li"},"offlineMode=true"),"\u5219\u6fc0\u6d3b(\u65b9\u4fbf PWA \u8c03\u8bd5)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mobile"),": \u79fb\u52a8\u7528\u6237\u6fc0\u6d3b (",(0,i.kt)("inlineCode",{parentName:"li"},"width <= 996px"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"saveData"),": \u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"navigator.connection.saveData === true"),"\u6fc0\u6d3b\u7528\u6237"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"always"),": \u5bf9\u6240\u6709\u7528\u6237\u6fc0\u6d3b")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u8bf7\u8c28\u614e\u4f7f\u7528:\u6709\u4e9b\u7528\u6237\u53ef\u80fd\u4e0d\u559c\u6b22\u88ab\u8feb\u4f7f\u7528\u79bb\u7ebf\u6a21\u5f0f\u3002")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\u65e0\u6cd5\u68c0\u6d4b\u9875\u9762\u662f\u5426\u4ee5\u53ef\u9760\u7684\u65b9\u5f0f\u5448\u73b0\u4e3a PWA\u3002"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"appinstalled"),"\u4e8b\u4ef6\u5df2",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3c/manifest/pull/836"},"\u4ece\u89c4\u8303\u4e2d\u5220\u9664"),"\uff0c\u800c",(0,i.kt)("a",{parentName:"p",href:"https://web.dev/get-installed-related-apps/"},(0,i.kt)("inlineCode",{parentName:"a"},"navigator.getInstalledRelatedApps()"))," API \u4ec5\u652f\u6301\u6700\u8fd1\u7684 Chrome \u7248\u672c\uff0c\u5e76\u4e14\u9700\u8981\u5728 manifest \u4e2d\u58f0\u660e",(0,i.kt)("inlineCode",{parentName:"p"},"related_applications"),"\u3002"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://petelepage.com/blog/2019/07/is-my-pwa-installed/"},"'\u72ec\u7acb'\u7b56\u7565"),"\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u540e\u5907\u6fc0\u6d3b\u79bb\u7ebf\u6a21\u5f0f(\u81f3\u5c11\u5728\u8fd0\u884c\u5df2\u5b89\u88c5\u7684\u5e94\u7528\u7a0b\u5e8f\u65f6)\u3002")),(0,i.kt)("h3",{id:"injectmanifestconfig"},(0,i.kt)("inlineCode",{parentName:"h3"},"injectManifestConfig")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/workbox/reference/workbox-build/#type-InjectManifestOptions"},"Workbox options"),"\u4f20\u9012\u7ed9",(0,i.kt)("inlineCode",{parentName:"p"},"Workbox.injectmanifest()"),"\u3002\u8fd9\u4f7f\u60a8\u53ef\u4ee5\u63a7\u5236\u54ea\u4e9b\u8d44\u4ea7\u5c06\u88ab\u9884\u4f20\uff0c\u54ea\u4e9b\u8d44\u4ea7\u53ef\u4ee5\u79bb\u7ebf\u4f7f\u7528\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"InjectManifestOptions")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"{}"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-pwa",\n      {\n        injectManifestConfig: {\n          manifestTransforms: [\n            //...\n          ],\n          modifyURLPrefix: {\n            //...\n          },\n          // We already add regular static assets (HTML, images...) to be available offline\n          // You can add more files according to your needs\n          globPatterns: ["**/*.{pdf,docx,xlsx}"],\n          // ...\n        },\n      },\n    ],\n  ],\n};\n')),(0,i.kt)("h3",{id:"pwahead"},(0,i.kt)("inlineCode",{parentName:"h3"},"pwaHead")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"({ tagName: string; [attributeName: string]: string })[]")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"[]"))),(0,i.kt)("p",null,"\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"tagName"),"\u548c\u7528\u4e8e\u6ce8\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"<head>"),"\u6807\u7b7e\u7684\u5c5e\u6027\u7684\u952e\u503c\u5bf9\u7684\u5bf9\u8c61\u6570\u7ec4\u3002\u4ece\u6280\u672f\u4e0a\u8bb2\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b83\u6ce8\u5165\u4efb\u4f55\u5934\u90e8\u6807\u7b7e\uff0c\u4f46\u5b83\u6700\u9002\u5408\u7528\u4e8e\u4f7f\u60a8\u7684\u7ad9\u70b9\u7b26\u5408 PWA \u7684\u6807\u7b7e\u3002\u8fd9\u91cc\u6709\u4e00\u4e2a\u6807\u7b7e\u5217\u8868\uff0c\u4f7f\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5b8c\u5168\u517c\u5bb9:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-pwa",\n      {\n        pwaHead: [\n          {\n            tagName: "link",\n            rel: "icon",\n            href: "/img/docusaurus.png",\n          },\n          {\n            tagName: "link",\n            rel: "manifest",\n            href: "/manifest.json",\n          },\n          {\n            tagName: "meta",\n            name: "theme-color",\n            content: "rgb(37, 194, 160)",\n          },\n          {\n            tagName: "meta",\n            name: "apple-mobile-web-app-capable",\n            content: "yes",\n          },\n          {\n            tagName: "meta",\n            name: "apple-mobile-web-app-status-bar-style",\n            content: "#000",\n          },\n          {\n            tagName: "link",\n            rel: "apple-touch-icon",\n            href: "/img/docusaurus.png",\n          },\n          {\n            tagName: "link",\n            rel: "mask-icon",\n            href: "/img/docusaurus.svg",\n            color: "rgb(37, 194, 160)",\n          },\n          {\n            tagName: "meta",\n            name: "msapplication-TileImage",\n            content: "/img/docusaurus.png",\n          },\n          {\n            tagName: "meta",\n            name: "msapplication-TileColor",\n            content: "#000",\n          },\n        ],\n      },\n    ],\n  ],\n};\n')),(0,i.kt)("h3",{id:"swcustom"},(0,i.kt)("inlineCode",{parentName:"h3"},"swCustom")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string | undefined")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,i.kt)("p",null,"\u7528\u4e8e\u5176\u4ed6\u5de5\u4f5c\u6846\u89c4\u5219\u3002\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u505a service worker \u80fd\u505a\u7684\u4efb\u4f55\u4e8b\u60c5\uff0c\u5e76\u5145\u5206\u5229\u7528\u5de5\u4f5c\u76d2\u5e93\u7684\u5f3a\u5927\u529f\u80fd\u3002\u4ee3\u7801\u662f\u7ecf\u8fc7\u7f16\u8bd1\u7684\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5728\u8fd9\u91cc\u4f7f\u7528\u73b0\u4ee3 ES6+\u8bed\u6cd5\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u8981\u4ece\u5916\u90e8\u8def\u7531\u7f13\u5b58\u6587\u4ef6:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { registerRoute } from "workbox-routing";\nimport { StaleWhileRevalidate } from "workbox-strategies";\n\n// default fn export receiving some useful params\nexport default function swCustom(params) {\n  const {\n    debug, // :boolean\n    offlineMode, // :boolean\n  } = params;\n\n  // Cache responses from external resources\n  registerRoute((context) => {\n    return [/graph\\.facebook\\.com\\/.*\\/picture/, /netlify\\.com\\/img/, /avatars1\\.githubusercontent/].some((regex) =>\n      context.url.href.match(regex)\n    );\n  }, new StaleWhileRevalidate());\n}\n')),(0,i.kt)("p",null,"\u8be5\u6a21\u5757\u5e94\u8be5\u6709\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"default"),"\u51fd\u6570\u5bfc\u51fa\uff0c\u5e76\u63a5\u6536\u4e00\u4e9b\u53c2\u6570\u3002"),(0,i.kt)("h3",{id:"swregister"},(0,i.kt)("inlineCode",{parentName:"h3"},"swRegister")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"string | false")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"'docusaurus-plugin-pwa/src/registerSW.js'"))),(0,i.kt)("p",null,"\u5728 Docusaurus \u5e94\u7528\u7a0b\u5e8f\u4e4b\u524d\u6dfb\u52a0\u4e00\u4e2a\u6761\u76ee\uff0c\u4ee5\u4fbf\u5728\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u4e4b\u524d\u8fdb\u884c\u6ce8\u518c\u3002\u9ed8\u8ba4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"registerSW.js"),"\u6587\u4ef6\u8db3\u4ee5\u8fdb\u884c\u7b80\u5355\u7684\u6ce8\u518c\u3002"),(0,i.kt)("p",null,"\u4f20\u9012",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\u5c06\u5b8c\u5168\u7981\u7528\u6ce8\u518c\u3002"),(0,i.kt)("h2",{id:"manifest-example"},"Manifest \u4f8b\u5b50"),(0,i.kt)("p",null,"Docusaurus \u9057\u5740\u6e05\u5355\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u79cd\u7075\u611f:"),(0,i.kt)(l.Z,{className:"language-json",mdxType:"CodeBlock"},JSON.stringify(a(8047),null,2)),(0,i.kt)("h2",{id:"customizing-reload-popup"},"\u81ea\u5b9a\u4e49\u91cd\u65b0\u52a0\u8f7d\u5f39\u51fa"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@theme/PwaReloadPopup"),"\u7ec4\u4ef6\u662f\u5728\u4e00\u4e2a\u65b0\u7684 service worker \u7b49\u5f85\u5b89\u88c5\u65f6\u5448\u73b0\u7684\uff0c\u6211\u4eec\u5efa\u8bae\u91cd\u65b0\u52a0\u8f7d\u7ed9\u7528\u6237\u3002\u4f60\u53ef\u4ee5",(0,i.kt)("a",{parentName:"p",href:"/docs/swizzling"},"swizzle"),"\u8fd9\u4e2a\u7ec4\u4ef6\u5e76\u5b9e\u73b0\u4f60\u81ea\u5df1\u7684 UI\u3002\u5b83\u5c06\u63a5\u6536\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"onReload"),"\u56de\u8c03\u4f5c\u4e3a\u5c5e\u6027\uff0c\u5b83\u5e94\u8be5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"reload"),"\u6309\u94ae\u88ab\u70b9\u51fb\u65f6\u88ab\u8c03\u7528\u3002\u8fd9\u5c06\u544a\u8bc9 service worker \u5b89\u88c5\u7b49\u5f85\u7684 service worker \u5e76\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e3b\u9898\u5305\u62ec\u91cd\u8f7d\u5f39\u51fa\u7a97\u53e3\u7684\u5b9e\u73b0\uff0c\u5e76\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://infima.dev/docs/components/alert"},"Infima Alerts"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u91cd\u88c5\u8fc7\u7a0b\u7684\u5c4f\u5e55\u8bb0\u5f55\u3002\u7a97\u53e3\u7684\u53f3\u4e0b\u89d2\u4f1a\u663e\u793a\u4e00\u4e2a\u8b66\u544a\u6846\uff0c\u63d0\u793a`\u65b0\u5185\u5bb9\u53ef\u7528`\u3002\u70b9\u51fb`\u5237\u65b0`\u6309\u94ae\u540e\uff0c\u9875\u9762\u4e3b\u6807\u9898\u7531`\u7b80\u4ecb`\u53d8\u4e3a`PWA:)`\u3002",src:a(28592).Z,width:"1000",height:"502"})),(0,i.kt)("p",null,"\u60a8\u7684\u7ec4\u4ef6\u53ef\u4ee5\u5448\u73b0",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uff0c\u4f46\u4e0d\u5efa\u8bae\u8fd9\u6837\u505a:\u7528\u6237\u5c06\u65e0\u6cd5\u83b7\u5f97\u6700\u65b0\u7684\u5185\u5bb9\u3002"))}c.isMDXComponent=!0},1887:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/pwa_install-169e763a3e99bb01e41be11c1a4af51f.gif"},28592:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/pwa_reload-6af462b35d0ed752c44ad0899559bedf.gif"},8047:e=>{e.exports=JSON.parse('{"name":"Docusaurus v2","short_name":"Docusaurus","theme_color":"#2196f3","background_color":"#424242","display":"standalone","scope":"./","start_url":"./index.html","related_applications":[{"platform":"webapp","url":"https://docusaurus.io/manifest.json"}],"icons":[{"src":"img/icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"img/icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"img/icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"img/icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"img/icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"img/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"img/icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"img/icons/icon-512x512.png","sizes":"512x512","type":"image/png"}]}')}}]);