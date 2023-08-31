"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[83812],{63134:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=t(85893),i=t(11151);const a={description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},r="\u9759\u6001\u7684\u8d44\u4ea7",o={unversionedId:"static-assets",id:"static-assets",title:"\u9759\u6001\u7684\u8d44\u4ea7",description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/static-assets.mdx",sourceDirName:".",slug:"/static-assets",permalink:"/docusaurus-docs/docs/next/static-assets",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/static-assets.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{description:"Static assets are the non-code files that are directly copied to the build output. Learn about how they are handled and what the best practices of using static assets are."},sidebar:"docs",previous:{title:"\u6405\u62cc",permalink:"/docusaurus-docs/docs/next/swizzling"},next:{title:"\u641c\u7d22",permalink:"/docusaurus-docs/docs/next/search"}},c={},d=[{value:"Referencing your static asset",id:"referencing-your-static-asset",level:2},{value:"In JSX",id:"in-jsx",level:3},{value:"In Markdown",id:"in-markdown",level:3},{value:"In CSS",id:"in-css",level:3},{value:"Caveats",id:"caveats",level:2}];function l(e){const s=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",ul:"ul",li:"li",pre:"pre",h2:"h2",h3:"h3",a:"a",admonition:"admonition"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"\u9759\u6001\u7684\u8d44\u4ea7",children:"\u9759\u6001\u7684\u8d44\u4ea7"}),"\n",(0,n.jsx)(s.p,{children:"Static assets are the non-code files that are directly copied to the build output. They include images, stylesheets, favicons, fonts, etc."}),"\n",(0,n.jsxs)(s.p,{children:["By default, you are suggested to put these assets in the ",(0,n.jsx)(s.code,{children:"static"})," folder. Every file you put into ",(0,n.jsx)(s.strong,{children:"that directory will be copied"})," into the root of the generated ",(0,n.jsx)(s.code,{children:"build"})," folder with the directory hierarchy preserved. E.g. if you add a file named ",(0,n.jsx)(s.code,{children:"sun.jpg"})," to the static folder, it will be copied to ",(0,n.jsx)(s.code,{children:"build/sun.jpg"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"This means that:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["for site ",(0,n.jsx)(s.code,{children:"baseUrl: '/'"}),", the image ",(0,n.jsx)(s.code,{children:"/static/img/docusaurus.png"})," will be served at ",(0,n.jsx)(s.code,{children:"/img/docusaurus.png"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["for site ",(0,n.jsx)(s.code,{children:"baseUrl: '/subpath/'"}),", the image ",(0,n.jsx)(s.code,{children:"/static/img/docusaurus.png"})," will be served at ",(0,n.jsx)(s.code,{children:"/subpath/img/docusaurus.png"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["You can customize the static directory sources in ",(0,n.jsx)(s.code,{children:"docusaurus.config.js"}),". For example, we can add ",(0,n.jsx)(s.code,{children:"public"})," as another possible path:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'module.exports = {\n  title: "My site",\n  staticDirectories: ["public", "static"],\n  // ...\n};\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Now, all files in ",(0,n.jsx)(s.code,{children:"public"})," as well as ",(0,n.jsx)(s.code,{children:"static"})," will be copied to the build output."]}),"\n",(0,n.jsx)(s.h2,{id:"referencing-your-static-asset",children:"Referencing your static asset"}),"\n",(0,n.jsx)(s.h3,{id:"in-jsx",children:"In JSX"}),"\n",(0,n.jsxs)(s.p,{children:["In JSX, you can reference assets from the ",(0,n.jsx)(s.code,{children:"static"})," folder in your code using absolute URLs, but this is not ideal because changing the site ",(0,n.jsx)(s.code,{children:"baseUrl"})," will ",(0,n.jsx)(s.strong,{children:"break those links"}),". For the image ",(0,n.jsx)(s.code,{children:'<img src="/img/docusaurus.png" />'})," served at ",(0,n.jsx)(s.code,{children:"https://example.com/test"}),", the browser will try to resolve it from the URL root, i.e. as ",(0,n.jsx)(s.code,{children:"https://example.com/img/docusaurus.png"}),", which will fail because it's actually served at ",(0,n.jsx)(s.code,{children:"https://example.com/test/img/docusaurus.png"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["You can ",(0,n.jsx)(s.code,{children:"import()"})," or ",(0,n.jsx)(s.code,{children:"require()"})," the static asset (recommended), or use the ",(0,n.jsx)(s.code,{children:"useBaseUrl"})," utility function: both prepend the ",(0,n.jsx)(s.code,{children:"baseUrl"})," to paths for you."]}),"\n",(0,n.jsx)(s.p,{children:"Examples:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="MyComponent.js"',children:'import DocusaurusImageUrl from "@site/static/img/docusaurus.png";\n\n<img src={DocusaurusImageUrl} />;\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="MyComponent.js"',children:'<img src={require("@site/static/img/docusaurus.png").default} />\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="MyComponent.js"',children:'import useBaseUrl from "@docusaurus/useBaseUrl";\n\n<img src={useBaseUrl("/img/docusaurus.png")} />;\n'})}),"\n",(0,n.jsx)(s.p,{children:"You can also import SVG files: they will be transformed into React components."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-jsx",metastring:'title="MyComponent.js"',children:'import DocusaurusLogoWithKeytar from "@site/static/img/docusaurus_keytar.svg";\n\n<DocusaurusLogoWithKeytar title="Docusaurus Logo" className="logo" />;\n'})}),"\n",(0,n.jsx)(s.h3,{id:"in-markdown",children:"In Markdown"}),"\n",(0,n.jsxs)(s.p,{children:["In Markdown, you can stick to using absolute paths when writing links or images ",(0,n.jsx)(s.strong,{children:"in Markdown syntax"})," because Docusaurus handles them as ",(0,n.jsx)(s.code,{children:"require"})," calls instead of URLs when parsing the Markdown. See ",(0,n.jsx)(s.a,{href:"/docusaurus-docs/docs/next/markdown-features/assets",children:"Markdown static assets"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-md",children:"You write a link like this: [Download this document](/files/note.docx)\n\nDocusaurus changes that to: <a href={require('static/files/note.docx')}>Download this document</a>\n"})}),"\n",(0,n.jsx)(s.admonition,{title:"use Markdown syntax",type:"caution",children:(0,n.jsxs)(s.p,{children:["Docusaurus will only parse links that are in Markdown syntax. If your asset references are using the JSX tag ",(0,n.jsx)(s.code,{children:"<a>"})," / ",(0,n.jsx)(s.code,{children:"<img>"}),", nothing will be done."]})}),"\n",(0,n.jsx)(s.h3,{id:"in-css",children:"In CSS"}),"\n",(0,n.jsxs)(s.p,{children:["In CSS, the ",(0,n.jsx)(s.code,{children:"url()"})," function is commonly used to reference assets like fonts and images. To reference a static asset, use absolute paths:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-css",children:'@font-face {\n  font-family: "Caroline";\n  src: url("/font/Caroline.otf");\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"static/font/Caroline.otf"})," asset will be loaded by the bundler."]}),"\n",(0,n.jsxs)(s.admonition,{title:"important takeaway",type:"warning",children:[(0,n.jsxs)(s.p,{children:["One important takeaway: ",(0,n.jsx)(s.strong,{children:"never hardcode your base URL!"})," The base URL is considered an implementation detail and should be easily changeable. All paths, even when they look like URL slugs, are actually file paths."]}),(0,n.jsx)(s.p,{children:"If you find the URL slug mental model more understandable, here's a rule of thumb:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Pretend you have a base URL like ",(0,n.jsx)(s.code,{children:"/test/"})," when writing JSX so you don't use an absolute URL path like ",(0,n.jsx)(s.code,{children:'src="/img/thumbnail.png"'})," but instead ",(0,n.jsx)(s.code,{children:"require"})," the asset."]}),"\n",(0,n.jsxs)(s.li,{children:["Pretend it's ",(0,n.jsx)(s.code,{children:"/"})," when writing Markdown or CSS so you always use absolute paths without the base URL."]}),"\n"]})]}),"\n",(0,n.jsx)(s.h2,{id:"caveats",children:"Caveats"}),"\n",(0,n.jsx)(s.p,{children:"Keep in mind that:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["By default, none of the files in the ",(0,n.jsx)(s.code,{children:"static"})," folder will be post-processed, hashed, or minified.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["However, as we've demonstrated above, we are usually able to convert them to ",(0,n.jsx)(s.code,{children:"require"})," calls for you so they do get processed. This is good for aggressive caching and better user experience."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Missing files referenced via hard-coded absolute paths will not be detected at compilation time and will result in a 404 error."}),"\n",(0,n.jsxs)(s.li,{children:["By default, GitHub Pages runs published files through ",(0,n.jsx)(s.a,{href:"https://jekyllrb.com/",children:"Jekyll"}),". Since Jekyll will discard any files that begin with ",(0,n.jsx)(s.code,{children:"_"}),", it is recommended that you disable Jekyll by adding an empty file named ",(0,n.jsx)(s.code,{children:".nojekyll"})," file to your ",(0,n.jsx)(s.code,{children:"static"})," directory if you are using GitHub pages for hosting."]}),"\n"]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>a});var n=t(67294);const i=n.createContext({});function a(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||r:a(e),n.createElement(i.Provider,{value:o},s)}}}]);