"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[76128],{35346:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>p});var n=t(85893),a=t(11151),r=t(16212),i=t(51715),o=t(7626),l=t(10905),c=t(63278),u=t(87500);const d={id:"assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},h="Assets",m={unversionedId:"guides/markdown-features/assets",id:"version-2.4.1/guides/markdown-features/assets",title:"Assets",description:"Handling assets in Docusaurus Markdown",source:"@site/versioned_docs/version-2.4.1/guides/markdown-features/markdown-features-assets.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/assets",permalink:"/docusaurus-docs/en/docs/markdown-features/assets",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-assets.mdx",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"assets",description:"Handling assets in Docusaurus Markdown",slug:"/markdown-features/assets"},sidebar:"docs",previous:{title:"Headings and Table of contents",permalink:"/docusaurus-docs/en/docs/markdown-features/toc"},next:{title:"Markdown links",permalink:"/docusaurus-docs/en/docs/markdown-features/links"}},g={},p=[{value:"Images",id:"images",level:2},{value:"Files",id:"files",level:2},{value:"Inline SVGs",id:"inline-svgs",level:2},{value:"Themed Images",id:"themed-images",level:2},{value:"GitHub-style themed images",id:"github-style-themed-images",level:3},{value:"Static assets",id:"static-assets",level:2}];function f(e){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h2:"h2",img:"img",admonition:"admonition",a:"a",h3:"h3",ol:"ol",li:"li"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"assets",children:"Assets"}),"\n","\n",(0,n.jsx)(s.p,{children:"Sometimes you want to link to assets (e.g. docx files, images...) directly from Markdown files, and it is convenient to co-locate the asset next to the Markdown file using it."}),"\n",(0,n.jsx)(s.p,{children:"Let's imagine the following file structure:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"# Your doc\n/website/docs/myFeature.mdx\n\n# Some assets you want to use\n/website/docs/assets/docusaurus-asset-example-banner.png\n/website/docs/assets/docusaurus-asset-example.docx\n"})}),"\n",(0,n.jsx)(s.h2,{id:"images",children:"Images"}),"\n",(0,n.jsx)(s.p,{children:"You can display images in three different ways: Markdown syntax, CJS require, or ES imports syntax."}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsxs)(o.Z,{value:"Markdown syntax",children:[(0,n.jsx)(s.p,{children:"Display images using simple Markdown syntax:"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"![Example banner](./assets/docusaurus-asset-example-banner.png)\n"})})]}),(0,n.jsxs)(o.Z,{value:"CommonJS require",children:[(0,n.jsxs)(s.p,{children:["Display images using inline CommonJS ",(0,n.jsx)(s.code,{children:"require"})," in JSX image tag:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"<img\n  src={require('./assets/docusaurus-asset-example-banner.png').default}\n  alt=\"Example banner\"\n/>\n"})})]}),(0,n.jsxs)(o.Z,{value:"Import statement",children:[(0,n.jsxs)(s.p,{children:["Display images using ES ",(0,n.jsx)(s.code,{children:"import"})," syntax and JSX image tag:"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"import myImageUrl from './assets/docusaurus-asset-example-banner.png';\n\n<img src={myImageUrl} alt=\"Example banner\" />;\n"})})]})]}),"\n",(0,n.jsx)(s.p,{children:"All of the above result in displaying the image:"}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"My image alternative text",src:t(21605).Z+"",width:"422",height:"110"})})}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsxs)(s.p,{children:["If you are using ",(0,n.jsx)(s.a,{href:"/docusaurus-docs/en/docs/api/plugins/@docusaurus/plugin-ideal-image",children:"@docusaurus/plugin-ideal-image"}),", you need to use the dedicated image component, as documented."]})}),"\n",(0,n.jsx)(s.h2,{id:"files",children:"Files"}),"\n",(0,n.jsxs)(s.p,{children:["In the same way, you can link to existing assets by ",(0,n.jsx)(s.code,{children:"require"}),"'ing them and using the returned URL in ",(0,n.jsx)(s.code,{children:"video"}),"s, ",(0,n.jsx)(s.code,{children:"a"})," anchor links, etc."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"# My Markdown page\n\n<a target=\"\\_blank\" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a>\n\nor\n\n[Download this docx using Markdown](./assets/docusaurus-asset-example.docx)\n"})}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("a",{target:"_blank",href:t(38816).Z,children:"Download this docx"}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{target:"_blank",href:t(2421).Z+"",children:"Download this docx using Markdown"})})]}),"\n",(0,n.jsx)(s.admonition,{title:"Markdown links are always file paths",type:"info",children:(0,n.jsxs)(s.p,{children:["If you use the Markdown image or link syntax, all asset paths will be resolved as file paths by Docusaurus and automatically converted to ",(0,n.jsx)(s.code,{children:"require()"})," calls. You don't need to use ",(0,n.jsx)(s.code,{children:"require()"})," in Markdown unless you use the JSX syntax, which you do have to handle yourself."]})}),"\n",(0,n.jsx)(s.h2,{id:"inline-svgs",children:"Inline SVGs"}),"\n",(0,n.jsx)(s.p,{children:"Docusaurus supports inlining SVGs out of the box."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg />;\n"})}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(l.Z,{})}),"\n",(0,n.jsx)(s.p,{children:"This can be useful if you want to alter the part of the SVG image via CSS. For example, you can change one of the SVG colors based on the current theme."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"import DocusaurusSvg from './docusaurus.svg';\n\n<DocusaurusSvg className=\"themedDocusaurus\" />;\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:"[data-theme='light'] .themedDocusaurus [fill='#FFFF50'] {\n  fill: greenyellow;\n}\n\n[data-theme='dark'] .themedDocusaurus [fill='#FFFF50'] {\n  fill: seagreen;\n}\n"})}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(l.Z,{className:"themedDocusaurus"})}),"\n",(0,n.jsx)(s.h2,{id:"themed-images",children:"Themed Images"}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus supports themed images: the ",(0,n.jsx)(s.code,{children:"ThemedImage"})," component (included in the themes) allows you to switch the image source based on the current theme."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",children:"import ThemedImage from '@theme/ThemedImage';\n\n<ThemedImage\n  alt=\"Docusaurus themed image\"\n  // highlight-start\n  sources={{\n    light: useBaseUrl('/img/docusaurus_light.svg'),\n    dark: useBaseUrl('/img/docusaurus_dark.svg'),\n  }}\n  // highlight-end\n/>;\n"})}),"\n","\n","\n",(0,n.jsx)(r.Z,{children:(0,n.jsx)(u.Z,{alt:"Docusaurus themed image",sources:{light:(0,c.Z)("/img/docusaurus_keytar.svg"),dark:(0,c.Z)("/img/docusaurus_speed.svg")}})}),"\n",(0,n.jsx)(s.h3,{id:"github-style-themed-images",children:"GitHub-style themed images"}),"\n",(0,n.jsxs)(s.p,{children:["GitHub uses its own ",(0,n.jsx)(s.a,{href:"https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/",children:"image theming approach"})," with path fragments, which you can easily implement yourself."]}),"\n",(0,n.jsxs)(s.p,{children:["To toggle the visibility of an image using the path fragment (for GitHub, it's ",(0,n.jsx)(s.code,{children:"#gh-dark-mode-only"})," and ",(0,n.jsx)(s.code,{children:"#gh-light-mode-only"}),"), add the following to your custom CSS (you can also use your own suffix if you don't want to be coupled to GitHub):"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",metastring:'title="src/css/custom.css"',children:"[data-theme='light'] img[src$='#gh-dark-mode-only'],\n[data-theme='dark'] img[src$='#gh-light-mode-only'] {\n  display: none;\n}\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"![Docusaurus themed image](/img/docusaurus_keytar.svg#gh-light-mode-only)![Docusaurus themed image](/img/docusaurus_speed.svg#gh-dark-mode-only)\n"})}),"\n",(0,n.jsx)(r.Z,{children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{alt:"Docusaurus themed image",src:t(3375).Z+"#gh-light-mode-only",width:"200",height:"200"}),(0,n.jsx)(s.img,{alt:"Docusaurus themed image",src:t(37216).Z+"#gh-dark-mode-only",width:"250",height:"200"})]})}),"\n",(0,n.jsx)(s.h2,{id:"static-assets",children:"Static assets"}),"\n",(0,n.jsxs)(s.p,{children:["If a Markdown link or image has an absolute path, the path will be seen as a file path and will be resolved from the static directories. For example, if you have configured ",(0,n.jsx)(s.a,{href:"/docusaurus-docs/en/docs/static-assets",children:"static directories"})," to be ",(0,n.jsx)(s.code,{children:"['public', 'static']"}),", then for the following image:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",metastring:'title="my-doc.md"',children:"![An image from the static](/img/docusaurus.png)\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Docusaurus will try to look for it in both ",(0,n.jsx)(s.code,{children:"static/img/docusaurus.png"})," and ",(0,n.jsx)(s.code,{children:"public/img/docusaurus.png"}),". The link will then be converted to a ",(0,n.jsx)(s.code,{children:"require()"})," call instead of staying as a URL. This is desirable in two regards:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"You don't have to worry about the base URL, which Docusaurus will take care of when serving the asset;"}),"\n",(0,n.jsx)(s.li,{children:"The image enters Webpack's build pipeline and its name will be appended by a hash, which enables browsers to aggressively cache the image and improves your site's performance."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["If you intend to write URLs, you can use the ",(0,n.jsx)(s.code,{children:"pathname://"})," protocol to disable automatic asset linking."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"![banner](pathname:///img/docusaurus-asset-example-banner.png)\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This link will be generated as ",(0,n.jsx)(s.code,{children:'<img src="/img/docusaurus-asset-example-banner.png" alt="banner" />'}),", without any processing or file existence checking."]})]})}const b=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},10905:(e,s,t)=>{t.d(s,{Z:()=>i});var n,a=t(67294);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}const i=e=>{let{title:s,titleId:t,...i}=e;return a.createElement("svg",r({width:200,height:200,viewBox:"0 0 200 200",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},i),s?a.createElement("title",{id:t},s):null,n||(n=a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"#FFF",d:"M99 52h84v34H99z"}),a.createElement("path",{d:"M23 163c-7.398 0-13.843-4.027-17.303-10A19.886 19.886 0 0 0 3 163c0 11.046 8.954 20 20 20h20v-20H23z",fill:"#3ECC5F"}),a.createElement("path",{d:"M112.98 57.376 183 53V43c0-11.046-8.954-20-20-20H73l-2.5-4.33c-1.112-1.925-3.889-1.925-5 0L63 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L53 23l-2.5-4.33c-1.111-1.925-3.889-1.925-5 0L43 23c-.022 0-.042.003-.065.003l-4.142-4.141c-1.57-1.571-4.252-.853-4.828 1.294l-1.369 5.104-5.192-1.392c-2.148-.575-4.111 1.389-3.535 3.536l1.39 5.193-5.102 1.367c-2.148.576-2.867 3.259-1.296 4.83l4.142 4.142c0 .021-.003.042-.003.064l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 53l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 63l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 73l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 83l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 93l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 103l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 113l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 123l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 133l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 143l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 153l-4.33 2.5c-1.925 1.111-1.925 3.889 0 5L23 163c0 11.046 8.954 20 20 20h120c11.046 0 20-8.954 20-20V83l-70.02-4.376A10.645 10.645 0 0 1 103 68c0-5.621 4.37-10.273 9.98-10.624",fill:"#3ECC5F"}),a.createElement("path",{fill:"#3ECC5F",d:"M143 183h30v-40h-30z"}),a.createElement("path",{d:"M193 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 190.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5",fill:"#44D860"}),a.createElement("path",{fill:"#3ECC5F",d:"M153 123h30v-20h-30z"}),a.createElement("path",{d:"M193 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 183 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032",fill:"#44D860"}),a.createElement("path",{d:"M63 55.5a2.5 2.5 0 0 1-2.5-2.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5a2.5 2.5 0 1 1-5 0c0-6.893 5.607-12.5 12.5-12.5S65.5 46.107 65.5 53a2.5 2.5 0 0 1-2.5 2.5",fill:"#000"}),a.createElement("path",{d:"M103 183h60c11.046 0 20-8.954 20-20V93h-60c-11.046 0-20 8.954-20 20v70z",fill:"#FFFF50"}),a.createElement("path",{d:"M168.02 124h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0-49.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 19.814h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2m0 20h-50.04a1 1 0 1 1 0-2h50.04a1 1 0 1 1 0 2M183 61.611c-.012 0-.022-.006-.034-.005-3.09.105-4.552 3.196-5.842 5.923-1.346 2.85-2.387 4.703-4.093 4.647-1.889-.068-2.969-2.202-4.113-4.46-1.314-2.594-2.814-5.536-5.963-5.426-3.046.104-4.513 2.794-5.807 5.167-1.377 2.528-2.314 4.065-4.121 3.994-1.927-.07-2.951-1.805-4.136-3.813-1.321-2.236-2.848-4.75-5.936-4.664-2.994.103-4.465 2.385-5.763 4.4-1.373 2.13-2.335 3.428-4.165 3.351-1.973-.07-2.992-1.51-4.171-3.177-1.324-1.873-2.816-3.993-5.895-3.89-2.928.1-4.399 1.97-5.696 3.618-1.232 1.564-2.194 2.802-4.229 2.724a1 1 0 0 0-.072 2c3.017.101 4.545-1.8 5.872-3.487 1.177-1.496 2.193-2.787 4.193-2.855 1.926-.082 2.829 1.115 4.195 3.045 1.297 1.834 2.769 3.914 5.731 4.021 3.103.104 4.596-2.215 5.918-4.267 1.182-1.834 2.202-3.417 4.15-3.484 1.793-.067 2.769 1.35 4.145 3.681 1.297 2.197 2.766 4.686 5.787 4.796 3.125.108 4.634-2.62 5.949-5.035 1.139-2.088 2.214-4.06 4.119-4.126 1.793-.042 2.728 1.595 4.111 4.33 1.292 2.553 2.757 5.445 5.825 5.556l.169.003c3.064 0 4.518-3.075 5.805-5.794 1.139-2.41 2.217-4.68 4.067-4.773v-2z",fill:"#000"}),a.createElement("path",{fill:"#3ECC5F",d:"M83 183h40v-40H83z"}),a.createElement("path",{d:"M143 158c-.219 0-.428.037-.639.064-.038-.15-.074-.301-.116-.451A5 5 0 0 0 140.32 148a4.96 4.96 0 0 0-3.016 1.036 26.531 26.531 0 0 0-.335-.336 4.955 4.955 0 0 0 1.011-2.987 5 5 0 0 0-9.599-1.959c-.148-.042-.297-.077-.445-.115.027-.211.064-.42.064-.639a5 5 0 0 0-5-5 5 5 0 0 0-5 5c0 .219.037.428.064.639-.148.038-.297.073-.445.115a4.998 4.998 0 0 0-9.599 1.959c0 1.125.384 2.151 1.011 2.987-3.717 3.632-6.031 8.693-6.031 14.3 0 11.046 8.954 20 20 20 9.339 0 17.16-6.41 19.361-15.064.211.027.42.064.639.064a5 5 0 0 0 5-5 5 5 0 0 0-5-5",fill:"#44D860"}),a.createElement("path",{fill:"#3ECC5F",d:"M83 123h40v-20H83z"}),a.createElement("path",{d:"M133 115.5a2.5 2.5 0 1 0 0-5c-.109 0-.214.019-.319.032-.02-.075-.037-.15-.058-.225a2.501 2.501 0 0 0-.963-4.807c-.569 0-1.088.197-1.508.518a6.653 6.653 0 0 0-.168-.168c.314-.417.506-.931.506-1.494a2.5 2.5 0 0 0-4.8-.979A9.987 9.987 0 0 0 123 103c-5.522 0-10 4.478-10 10s4.478 10 10 10c.934 0 1.833-.138 2.69-.377a2.5 2.5 0 0 0 4.8-.979c0-.563-.192-1.077-.506-1.494.057-.055.113-.111.168-.168.42.321.939.518 1.508.518a2.5 2.5 0 0 0 .963-4.807c.021-.074.038-.15.058-.225.105.013.21.032.319.032",fill:"#44D860"}),a.createElement("path",{d:"M143 41.75c-.16 0-.33-.02-.49-.05a2.52 2.52 0 0 1-.47-.14c-.15-.06-.29-.14-.431-.23-.13-.09-.259-.2-.38-.31-.109-.12-.219-.24-.309-.38s-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.16.02-.33.05-.49.03-.16.08-.31.139-.47.061-.15.141-.29.231-.43.09-.13.2-.26.309-.38.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.65-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.11.12.22.25.31.38.09.14.17.28.23.43.06.16.11.31.14.47.029.16.05.33.05.49 0 .66-.271 1.31-.73 1.77-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19m20-1.25c-.66 0-1.3-.27-1.771-.73a3.802 3.802 0 0 1-.309-.38c-.09-.14-.17-.28-.231-.43a2.619 2.619 0 0 1-.189-.96c0-.66.27-1.3.729-1.77.121-.11.25-.22.38-.31.141-.09.281-.17.431-.23.149-.06.31-.11.47-.14.32-.07.66-.07.98 0 .159.03.32.08.47.14.149.06.29.14.43.23.13.09.259.2.38.31.459.47.73 1.11.73 1.77 0 .16-.021.33-.05.49-.03.16-.08.32-.14.47-.07.15-.14.29-.23.43-.09.13-.2.26-.31.38-.121.11-.25.22-.38.31-.14.09-.281.17-.43.23a2.565 2.565 0 0 1-.96.19",fill:"#000"}))))}},38816:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},2421:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/files/docusaurus-asset-example-93ea653de6d8636f7254aecab1adbcce.docx"},7626:(e,s,t)=>{t.d(s,{Z:()=>i});var n=t(85893),a=(t(67294),t(86010));const r={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:s,className:t}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,t),hidden:s,children:e})}},51715:(e,s,t)=>{t.d(s,{Z:()=>E});var n=t(85893),a=t(67294),r=t(86010),i=t(8241),o=t(16550),l=t(40841),c=t(2834),u=t(35715),d=t(95417);function h(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function m(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})),e}function g(e){var s,t;return null!==(t=null===(s=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===s?void 0:s.filter(Boolean))&&void 0!==t?t:[]}function p(e){const{values:s,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=s?s:function(e){return g(e).map((({props:{value:e,label:s,attributes:t,default:n}})=>({value:e,label:s,attributes:t,default:n})))}(t);return function(e){const s=(0,u.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function f({value:e,tabValues:s}){return s.some((s=>s.value===e))}function b({queryString:e=!1,groupId:s}){const t=(0,o.k6)(),n=function({queryString:e=!1,groupId:s}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:e,groupId:s}),r=(0,c._X)(n),i=(0,a.useCallback)((e=>{if(!n)return;const s=new URLSearchParams(t.location.search);s.set(n,e),t.replace(m(function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(s){h(e,s,t[s])}))}return e}({},t.location),{search:s.toString()}))}),[n,t]);return[r,i]}function x(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,r=p(e),[i,o]=(0,a.useState)((()=>function({defaultValue:e,tabValues:s}){if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const n=null!==(t=s.find((e=>e.default)))&&void 0!==t?t:s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:r}))),[c,u]=b({queryString:t,groupId:n}),[h,m]=function({groupId:e}){const s=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,n]=(0,d.Nk)(s);return[t,(0,a.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:n}),g=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var j=t(90980);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function v(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(s){w(e,s,t[s])}))}return e}function k(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})),e}function O({className:e,block:s,selectedValue:t,selectValue:a,tabValues:o}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const s=e.currentTarget,n=l.indexOf(s),r=o[n].value;r!==t&&(c(s),a(r))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;var t;s=null!==(t=l[n])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var n;s=null!==(n=l[t])&&void 0!==n?n:l[l.length-1];break}}null==s||s.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},e),children:o.map((({value:e,label:s,attributes:a})=>(0,n.jsx)("li",k(v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},a),{className:(0,r.Z)("tabs__item",y.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===e}),children:null!=s?s:e}),e)))})}function D({lazy:e,children:s,selectedValue:t}){const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function S(e){const s=x(e);return(0,n.jsxs)("div",{className:(0,r.Z)("tabs-container",y.tabList),children:[(0,n.jsx)(O,v({},e,s)),(0,n.jsx)(D,v({},e,s))]})}function E(e){const s=(0,j.Z)();return(0,n.jsx)(S,k(v({},e),{children:g(e.children)}),String(s))}},16212:(e,s,t)=>{t.d(s,{Z:()=>c});var n=t(85893),a=(t(67294),t(86010));const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(s){i(e,s,t[s])}))}return e}function l(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})),e}function c({children:e,minHeight:s,url:t="http://localhost:3000",style:i,bodyStyle:c}){return(0,n.jsxs)("div",{className:r.browserWindow,style:l(o({},i),{minHeight:s}),children:[(0,n.jsxs)("div",{className:r.browserWindowHeader,children:[(0,n.jsxs)("div",{className:r.buttons,children:[(0,n.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,a.Z)(r.browserWindowAddressBar,"text--truncate"),children:t}),(0,n.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:r.bar}),(0,n.jsx)("span",{className:r.bar}),(0,n.jsx)("span",{className:r.bar})]})})]}),(0,n.jsx)("div",{className:r.browserWindowBody,style:c,children:e})]})}},3375:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/docusaurus_keytar-0cb85c4468d358b2028c7ab2a38aa3ff.svg"},37216:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/docusaurus_speed-3cf95ee960d17fd7f1d2714e0d7525b2.svg"},21605:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/docusaurus-asset-example-banner-63decf1180b7949f4c3d0f7b7ecfd162.png"},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>r});var n=t(67294);const a=n.createContext({});function r(e){const s=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:r(e),n.createElement(a.Provider,{value:o},s)}}}]);