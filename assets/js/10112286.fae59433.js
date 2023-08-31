"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[30808],{84341:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=s(85893),t=s(11151),a=s(16212),c=s(51715),l=s(7626),o=s(10905),i=s(63278),u=s(87500);const d={id:"assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},h="\u8d44\u4ea7",m={unversionedId:"guides/markdown-features/assets",id:"guides/markdown-features/assets",title:"\u8d44\u4ea7",description:"Handling assets in Docusaurus Markdown",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/markdown-features/markdown-features-assets.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/assets",permalink:"/docusaurus-docs/docs/next/markdown-features/assets",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},sidebar:"docs",previous:{title:"\u6807\u9898\u548c\u76ee\u5f55",permalink:"/docusaurus-docs/docs/next/markdown-features/toc"},next:{title:"Markdown \u94fe\u63a5",permalink:"/docusaurus-docs/docs/next/markdown-features/links"}},p={},g=[{value:"\u56fe\u7247",id:"images",level:2},{value:"\u6587\u4ef6",id:"files",level:2},{value:"\u5185\u8054 SVGs",id:"inline-svgs",level:2},{value:"\u4e3b\u9898\u56fe\u7247",id:"themed-images",level:2},{value:"GitHub \u98ce\u683c\u7684\u4e3b\u9898\u56fe\u50cf",id:"github-style-themed-images",level:3},{value:"\u9759\u6001\u7684\u8d44\u4ea7",id:"static-assets",level:2}];function b(e){const r=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",div:"div",img:"img",admonition:"admonition",a:"a",h3:"h3",ol:"ol",li:"li"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"\u8d44\u4ea7",children:"\u8d44\u4ea7"}),"\n","\n",(0,n.jsx)(r.p,{children:"\u6709\u65f6\u4f60\u60f3\u76f4\u63a5\u4ece Markdown \u6587\u4ef6\u94fe\u63a5\u5230\u8d44\u6e90(\u4f8b\u5982 docx \u6587\u4ef6\uff0c\u56fe\u50cf\u2026)\uff0c\u4f7f\u7528\u5b83\u53ef\u4ee5\u65b9\u4fbf\u5730\u5c06\u8d44\u6e90\u653e\u5728 Markdown \u6587\u4ef6\u65c1\u8fb9\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u8ba9\u6211\u4eec\u60f3\u8c61\u4e00\u4e0b\u4e0b\u9762\u7684\u6587\u4ef6\u7ed3\u6784:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"# Your doc\n/website/docs/myFeature.mdx\n\n# Some assets you want to use\n/website/docs/assets/docusaurus-asset-example-banner.png\n/website/docs/assets/docusaurus-asset-example.docx\n"})}),"\n",(0,n.jsx)(r.h2,{id:"images",children:"\u56fe\u7247"}),"\n",(0,n.jsxs)(r.p,{children:["\u53ef\u4ee5\u7528\u4e09\u79cd\u4e0d\u540c\u7684\u65b9\u5f0f\u663e\u793a\u56fe\u50cf",(0,n.jsx)(r.div,{})," \u8bed\u6cd5\u3001CJS require \u8bed\u6cd5\u6216 ES imports \u8bed\u6cd5\u3002"]}),"\n",(0,n.jsxs)(c.Z,{children:[(0,n.jsxs)(l.Z,{value:"Markdown \u8bed\u6cd5",children:[(0,n.jsx)(r.p,{children:"\u4f7f\u7528\u7b80\u5355\u7684 Markdown \u8bed\u6cd5\u663e\u793a\u56fe\u50cf:"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-md",children:"![Example banner](./assets/docusaurus-asset-example-banner.png)\n"})})]}),(0,n.jsxs)(l.Z,{value:"CommonJS require",children:[(0,n.jsxs)(r.p,{children:["\u5728 JSX \u56fe\u50cf\u6807\u7b7e\u4e2d\u4f7f\u7528\u5185\u8054 CommonJS ",(0,n.jsx)(r.code,{children:"require"}),"\u663e\u793a\u56fe\u50cf:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'<img src={require("./assets/docusaurus-asset-example-banner.png").default} alt="Example banner" />\n'})})]}),(0,n.jsxs)(l.Z,{value:"Import \u58f0\u660e",children:[(0,n.jsxs)(r.p,{children:["\u4f7f\u7528 ES ",(0,n.jsx)(r.code,{children:"import"}),"\u8bed\u6cd5\u548c JSX image \u6807\u7b7e\u663e\u793a\u56fe\u50cf:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import myImageUrl from "./assets/docusaurus-asset-example-banner.png";\n\n<img src={myImageUrl} alt="Example banner" />;\n'})})]})]}),"\n",(0,n.jsx)(r.p,{children:"\u4ee5\u4e0a\u6240\u6709\u7684\u7ed3\u679c\u663e\u793a\u56fe\u50cf:"}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.img,{alt:"My image alternative text",src:s(31234).Z+"",width:"422",height:"110"})})}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528",(0,n.jsx)(r.a,{href:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-ideal-image",children:"@docusaurus/plugin-ideal-image"}),"\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4e13\u7528\u7684 image \u7ec4\u4ef6\uff0c\u5982\u6587\u6863\u6240\u8ff0\u3002"]})}),"\n",(0,n.jsx)(r.h2,{id:"files",children:"\u6587\u4ef6"}),"\n",(0,n.jsxs)(r.p,{children:["\u4ee5\u540c\u6837\u7684\u65b9\u5f0f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,n.jsx)(r.code,{children:"require"}),"\u6765\u94fe\u63a5\u5230\u73b0\u6709\u7684\u8d44\u6e90\uff0c\u5e76\u5728",(0,n.jsx)(r.code,{children:"video"}),"\u3001",(0,n.jsx)(r.code,{children:"a"}),"\u951a\u94fe\u63a5\u7b49\u4e2d\u4f7f\u7528\u8fd4\u56de\u7684 URL\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-md",children:"# My Markdown page\n\n<a target=\"\\_blank\" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a>\n\nor\n\n[Download this docx using Markdown](./assets/docusaurus-asset-example.docx)\n"})}),"\n",(0,n.jsxs)(a.Z,{children:[(0,n.jsx)("a",{target:"_blank",href:s(83986).Z,children:"Download this docx"}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{target:"_blank",href:s(77994).Z+"",children:"Download this docx using Markdown"})})]}),"\n",(0,n.jsx)(r.admonition,{title:"Markdown \u94fe\u63a5\u603b\u662f\u6587\u4ef6\u8def\u5f84",type:"info",children:(0,n.jsxs)(r.p,{children:["\u5982\u679c\u60a8\u4f7f\u7528 Markdown \u56fe\u50cf\u6216\u94fe\u63a5\u8bed\u6cd5\uff0c\u6240\u6709\u8d44\u6e90\u8def\u5f84\u5c06\u88ab Docusaurus \u89e3\u6790\u4e3a\u6587\u4ef6\u8def\u5f84\uff0c\u5e76\u81ea\u52a8\u8f6c\u6362\u4e3a",(0,n.jsx)(r.code,{children:"require()"}),"\u8c03\u7528\u3002\u4f60\u4e0d\u9700\u8981\u5728 Markdown \u4e2d\u4f7f\u7528",(0,n.jsx)(r.code,{children:"require()"}),"\uff0c\u9664\u975e\u4f60\u4f7f\u7528 JSX \u8bed\u6cd5\uff0c\u4f60\u5fc5\u987b\u81ea\u5df1\u5904\u7406\u3002"]})}),"\n",(0,n.jsx)(r.h2,{id:"inline-svgs",children:"\u5185\u8054 SVGs"}),"\n",(0,n.jsx)(r.p,{children:"Docusaurus \u652f\u6301\u5f00\u7bb1\u5373\u7528\u7684\u5185\u8054 SVGs\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import DocusaurusSvg from "./docusaurus.svg";\n\n<DocusaurusSvg />;\n'})}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(o.Z,{})}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u60a8\u60f3\u901a\u8fc7 CSS \u66f4\u6539 SVG \u56fe\u50cf\u7684\u4e00\u90e8\u5206\uff0c\u8fd9\u53ef\u80fd\u5f88\u6709\u7528\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u5f53\u524d\u4e3b\u9898\u66f4\u6539 SVG \u7684\u4e00\u79cd\u989c\u8272\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import DocusaurusSvg from "./docusaurus.svg";\n\n<DocusaurusSvg className="themedDocusaurus" />;\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-css",children:'[data-theme="light"] .themedDocusaurus [fill="#FFFF50"] {\n  fill: greenyellow;\n}\n\n[data-theme="dark"] .themedDocusaurus [fill="#FFFF50"] {\n  fill: seagreen;\n}\n'})}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(o.Z,{className:"themedDocusaurus"})}),"\n",(0,n.jsx)(r.h2,{id:"themed-images",children:"\u4e3b\u9898\u56fe\u7247"}),"\n",(0,n.jsxs)(r.p,{children:["Docusaurus \u652f\u6301\u4e3b\u9898\u56fe\u50cf:",(0,n.jsx)(r.code,{children:"ThemedImage"}),"\u7ec4\u4ef6(\u5305\u542b\u5728\u4e3b\u9898\u4e2d)\u5141\u8bb8\u60a8\u6839\u636e\u5f53\u524d\u4e3b\u9898\u5207\u6362\u56fe\u50cf\u6e90\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import ThemedImage from "@theme/ThemedImage";\n\n<ThemedImage\n  alt="Docusaurus themed image"\n  // highlight-start\n  sources={{\n    light: useBaseUrl("/img/docusaurus_light.svg"),\n    dark: useBaseUrl("/img/docusaurus_dark.svg"),\n  }}\n  // highlight-end\n/>;\n'})}),"\n","\n","\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(u.Z,{alt:"Docusaurus themed image",sources:{light:(0,i.Z)("/img/docusaurus_keytar.svg"),dark:(0,i.Z)("/img/docusaurus_speed.svg")}})}),"\n",(0,n.jsx)(r.h3,{id:"github-style-themed-images",children:"GitHub \u98ce\u683c\u7684\u4e3b\u9898\u56fe\u50cf"}),"\n",(0,n.jsxs)(r.p,{children:["GitHub \u4f7f\u7528\u81ea\u5df1\u7684",(0,n.jsx)(r.a,{href:"https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/",children:"\u56fe\u50cf\u4e3b\u9898\u65b9\u6cd5"}),"\u4e0e\u8def\u5f84\u7247\u6bb5\uff0c\u4f60\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5b9e\u73b0\u81ea\u5df1\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u8981\u4f7f\u7528\u8def\u5f84\u7247\u6bb5\u6765\u5207\u6362\u56fe\u50cf\u7684\u53ef\u89c1\u6027(\u5bf9\u4e8e GitHub\uff0c\u5b83\u662f",(0,n.jsx)(r.code,{children:"#gh-dark-mode-only"}),"\u548c",(0,n.jsx)(r.code,{children:"#gh-light-mode-only"}),")\uff0c\u5728\u4f60\u7684\u81ea\u5b9a\u4e49 CSS \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9(\u5982\u679c\u4f60\u4e0d\u60f3\u4e0e GitHub \u8026\u5408\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684\u540e\u7f00):"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-css",metastring:'title="src/css/custom.css"',children:'[data-theme="light"] img[src$="#gh-dark-mode-only"],\n[data-theme="dark"] img[src$="#gh-light-mode-only"] {\n  display: none;\n}\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-md",children:"![Docusaurus themed image](/img/docusaurus_keytar.svg#gh-light-mode-only)![Docusaurus themed image](/img/docusaurus_speed.svg#gh-dark-mode-only)\n"})}),"\n",(0,n.jsx)(a.Z,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{alt:"Docusaurus themed image",src:s(3375).Z+"#gh-light-mode-only",width:"200",height:"200"}),(0,n.jsx)(r.img,{alt:"Docusaurus themed image",src:s(37216).Z+"#gh-dark-mode-only",width:"250",height:"200"})]})}),"\n",(0,n.jsx)(r.h2,{id:"static-assets",children:"\u9759\u6001\u7684\u8d44\u4ea7"}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c Markdown \u94fe\u63a5\u6216\u56fe\u50cf\u5177\u6709\u7edd\u5bf9\u8def\u5f84\uff0c\u5219\u8be5\u8def\u5f84\u5c06\u88ab\u89c6\u4e3a\u6587\u4ef6\u8def\u5f84\uff0c\u5e76\u5c06\u4ece\u9759\u6001\u76ee\u5f55\u4e2d\u89e3\u6790\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u914d\u7f6e\u4e86",(0,n.jsx)(r.a,{href:"/docusaurus-docs/docs/next/static-assets",children:"\u9759\u6001\u76ee\u5f55"}),"\u4e3a",(0,n.jsx)(r.code,{children:"['public', 'static']"}),"\uff0c\u90a3\u4e48\u5bf9\u4e8e\u4e0b\u9762\u7684\u56fe\u50cf:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-md",metastring:'title="my-doc.md"',children:"![An image from the static](/img/docusaurus.png)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Docusaurus \u5c06\u5c1d\u8bd5\u5728",(0,n.jsx)(r.code,{children:"static/img/docusaurus.png"}),"\u548c",(0,n.jsx)(r.code,{children:"public/img/docusaurus.png"}),"\u4e2d\u67e5\u627e\u5b83\u3002\u7136\u540e\u94fe\u63a5\u5c06\u88ab\u8f6c\u6362\u4e3a",(0,n.jsx)(r.code,{children:"require()"}),"\u8c03\u7528\uff0c\u800c\u4e0d\u662f\u4fdd\u7559\u4e3a URL\u3002\u8fd9\u5728\u4e24\u4e2a\u65b9\u9762\u662f\u53ef\u53d6\u7684:"]}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"\u4f60\u4e0d\u9700\u8981\u62c5\u5fc3\u57fa\u7840 URL, Docusaurus \u4f1a\u5728\u63d0\u4f9b\u8d44\u4ea7\u65f6\u5904\u7406\u8fd9\u4e2a\u95ee\u9898;"}),"\n",(0,n.jsx)(r.li,{children:"\u56fe\u50cf\u8fdb\u5165 Webpack \u7684\u6784\u5efa\u7ba1\u9053\uff0c\u5176\u540d\u79f0\u5c06\u6dfb\u52a0\u4e00\u4e2a\u6563\u5217\uff0c\u8fd9\u4f7f\u6d4f\u89c8\u5668\u80fd\u591f\u79ef\u6781\u7f13\u5b58\u56fe\u50cf\u5e76\u63d0\u9ad8\u7ad9\u70b9\u7684\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u6253\u7b97\u7f16\u5199 URLs\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,n.jsx)(r.code,{children:"pathname://"}),"\u534f\u8bae\u6765\u7981\u7528\u81ea\u52a8\u8d44\u4ea7\u94fe\u63a5\u3002"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-md",children:"![banner](pathname:///img/docusaurus-asset-example-banner.png)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6b64\u94fe\u63a5\u5c06\u751f\u6210\u4e3a",(0,n.jsx)(r.code,{children:'<img src="/img/docusaurus-asset-example-banner.png" alt="banner" />'}),"\uff0c\u65e0\u9700\u4efb\u4f55\u5904\u7406\u6216\u6587\u4ef6\u662f\u5426\u5b58\u5728\u68c0\u67e5\u3002"]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,t.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(b,e)})):b(e)}},10905:(e,r,s)=>{s.d(r,{Z:()=>c});var n,t=s(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},a.apply(this,arguments)}const c=e=>{let{title:r,titleId:s,...c}=e;return t.createElement("svg",a({width:200,height:200,viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":s},c),r?t.createElement("title",{id:s},r):null,n||(n=t.createElement("g",{fill:"none",fillRule:"evenodd"},t.createElement("path",{fill:"#FFF",d:"M99 52h84v34H99z"}),t.createElement("path",{d:"M23 163c-7.398 0-13.843-4.027-17.303-10A19.886 19.886 0 0 0 3 163c0 11.046 8.954 20 20 20h20v-20H23z",fill:"#3ECC5F"}),t.createElement("path",{d:"M112.98 57.376 183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23c-.022 0-.042.003-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142c0 .021-.003.042-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 0 1 103 68c0-5.621 4.37-10.273 9.98-10.624",fill:"#3ECC5F"}),t.createElement("path",{fill:"#3ECC5F",d:"M143 183h30v-40h-30z"}),t.createElement("path",{d:"M193 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 190.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5",fill:"#44D860"}),t.createElement("path",{fill:"#3ECC5F",d:"M153 123h30v-20h-30z"}),t.createElement("path",{d:"M193 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032",fill:"#44D860"}),t.createElement("path",{d:"M63 55.5a2.5 2.5 0 0 1-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 1 1-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 0 1-2.5 2.5",fill:"#000"}),t.createElement("path",{d:"M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z",fill:"#FFFF50"}),t.createElement("path",{d:"M168.02 124h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0-49.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 19.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 0 0-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773v-2z",fill:"#000"}),t.createElement("path",{fill:"#3ECC5F",d:"M83 183h40v-40H83z"}),t.createElement("path",{d:"M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 140.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5",fill:"#44D860"}),t.createElement("path",{fill:"#3ECC5F",d:"M83 123h40v-20H83z"}),t.createElement("path",{d:"M133 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032",fill:"#44D860"}),t.createElement("path",{d:"M143 41.75c-.16 0-.33-.02-.49-.05a2.52 2.52 0 0 1-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.16.02-.33.05-.49.03-.16.08-.31.139-.47.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.65-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a3.802 3.802 0 0 1-.309-.38c-.09-.14-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.66-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49-.03.16-.08.32-.14.47-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19",fill:"#000"}))))}},83986:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},77994:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},7626:(e,r,s)=>{s.d(r,{Z:()=>c});var n=s(85893),t=(s(67294),s(86010));const a={tabItem:"tabItem_Ymn6"};function c({children:e,hidden:r,className:s}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:e})}},51715:(e,r,s)=>{s.d(r,{Z:()=>S});var n=s(85893),t=s(67294),a=s(86010),c=s(8241),l=s(16550),o=s(40841),i=s(2834),u=s(35715),d=s(95417);function h(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function m(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})),e}function p(e){var r,s;return null!==(s=null===(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==s?s:[]}function g(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=r?r:function(e){return p(e).map((({props:{value:e,label:r,attributes:s,default:n}})=>({value:e,label:r,attributes:s,default:n})))}(s);return function(e){const r=(0,u.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function b({value:e,tabValues:r}){return r.some((r=>r.value===e))}function f({queryString:e=!1,groupId:r}){const s=(0,l.k6)(),n=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),a=(0,i._X)(n),c=(0,t.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(s.location.search);r.set(n,e),s.replace(m(function(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(r){h(e,r,s[r])}))}return e}({},s.location),{search:r.toString()}))}),[n,s]);return[a,c]}function j(e){const{defaultValue:r,queryString:s=!1,groupId:n}=e,a=g(e),[c,l]=(0,t.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var s;const n=null!==(s=r.find((e=>e.default)))&&void 0!==s?s:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[i,u]=f({queryString:s,groupId:n}),[h,m]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,n]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:n}),p=(()=>{const e=null!=i?i:h;return b({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{p&&l(p)}),[p]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,a]),tabValues:a}}var x=s(90980);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function y(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(r){w(e,r,s[r])}))}return e}function O(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})),e}function k({className:e,block:r,selectedValue:s,selectValue:t,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,c.o5)(),u=e=>{const r=e.currentTarget,n=o.indexOf(r),a=l[n].value;a!==s&&(i(r),t(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;var s;r=null!==(s=o[n])&&void 0!==s?s:o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;var n;r=null!==(n=o[s])&&void 0!==n?n:o[o.length-1];break}}null==r||r.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},e),children:l.map((({value:e,label:r,attributes:t})=>(0,n.jsx)("li",O(y({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},t),{className:(0,a.Z)("tabs__item",v.tabItem,null==t?void 0:t.className,{"tabs__item--active":s===e}),children:null!=r?r:e}),e)))})}function D({lazy:e,children:r,selectedValue:s}){const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function E(e){const r=j(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,n.jsx)(k,y({},e,r)),(0,n.jsx)(D,y({},e,r))]})}function S(e){const r=(0,x.Z)();return(0,n.jsx)(E,O(y({},e),{children:p(e.children)}),String(r))}},16212:(e,r,s)=>{s.d(r,{Z:()=>i});var n=s(85893),t=(s(67294),s(86010));const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function c(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function l(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),n.forEach((function(r){c(e,r,s[r])}))}return e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))})),e}function i({children:e,minHeight:r,url:s="http://localhost:3000",style:c,bodyStyle:i}){return(0,n.jsxs)("div",{className:a.browserWindow,style:o(l({},c),{minHeight:r}),children:[(0,n.jsxs)("div",{className:a.browserWindowHeader,children:[(0,n.jsxs)("div",{className:a.buttons,children:[(0,n.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,t.Z)(a.browserWindowAddressBar,"text--truncate"),children:s}),(0,n.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:a.bar}),(0,n.jsx)("span",{className:a.bar}),(0,n.jsx)("span",{className:a.bar})]})})]}),(0,n.jsx)("div",{className:a.browserWindowBody,style:i,children:e})]})}},31234:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/docusaurus-asset-example-banner-63decf1180b7949f4c3d0f7b7ecfd162.png"},3375:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/docusaurus_keytar-0cb85c4468d358b2028c7ab2a38aa3ff.svg"},37216:(e,r,s)=>{s.d(r,{Z:()=>n});const n=s.p+"assets/images/docusaurus_speed-3cf95ee960d17fd7f1d2714e0d7525b2.svg"},11151:(e,r,s)=>{s.d(r,{Zo:()=>l,ah:()=>a});var n=s(67294);const t=n.createContext({});function a(e){const r=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function l({components:e,children:r,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||c:a(e),n.createElement(t.Provider,{value:l},r)}}}]);