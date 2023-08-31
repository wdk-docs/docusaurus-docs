"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[48532],{55154:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=o(85893),t=o(11151);const r={id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},i="Markdown links",a={unversionedId:"guides/markdown-features/links",id:"version-3.0.0-alpha.0/guides/markdown-features/links",title:"Markdown links",description:"Links to other pages in Markdown",source:"@site/versioned_docs/version-3.0.0-alpha.0/guides/markdown-features/markdown-features-links.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/links",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/links",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-links.mdx",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"links",description:"Links to other pages in Markdown",slug:"/markdown-features/links"},sidebar:"docs",previous:{title:"Assets",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/assets"},next:{title:"MDX Plugins",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/plugins"}},d={},l=[];function c(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",a:"a",em:"em",ul:"ul",li:"li",admonition:"admonition"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"markdown-links",children:"Markdown links"}),"\n",(0,s.jsxs)(n.p,{children:["There are two ways of adding a link to another page: through a ",(0,s.jsx)(n.strong,{children:"URL path"})," and a ",(0,s.jsx)(n.strong,{children:"file path"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"- [URL path to another document](./installation)\n- [file path to another document](./installation.mdx)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["URL paths are unprocessed by Docusaurus, and you can see them as directly rendering to ",(0,s.jsx)(n.code,{children:'<a href="./installation">'}),", i.e. it will be resolved according to the page's URL location, rather than its file-system location."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to reference another Markdown file ",(0,s.jsx)(n.strong,{children:"included by the same plugin"}),", you could use the relative path of the document you want to link to. Docusaurus' Markdown loader will convert the file path to the target file's URL path (and hence remove the ",(0,s.jsx)(n.code,{children:".md"})," extension)."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you are in ",(0,s.jsx)(n.code,{children:"docs/folder/doc1.md"})," and you want to reference ",(0,s.jsx)(n.code,{children:"docs/folder/doc2.md"}),", ",(0,s.jsx)(n.code,{children:"docs/folder/subfolder/doc3.md"})," and ",(0,s.jsx)(n.code,{children:"docs/otherFolder/doc4.md"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="docs/folder/doc1.md"',children:"I am referencing a [document](doc2.mdx).\n\nReference to another [document in a subfolder](subfolder/doc3.mdx).\n\n[Relative document](../otherFolder/doc4.mdx) referencing works as well.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Relative file paths are resolved against the current file's directory. Absolute file paths, on the other hand, are resolved relative to the ",(0,s.jsx)(n.strong,{children:"content root"}),", usually ",(0,s.jsx)(n.code,{children:"docs/"}),", ",(0,s.jsx)(n.code,{children:"blog/"}),", or ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/i18n/tutorial",children:"localized ones"})," like ",(0,s.jsx)(n.code,{children:"i18n/zh-Hans/plugin-content-docs/current"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Absolute file paths can also be relative to the site directory. However, beware that links that begin with ",(0,s.jsx)(n.code,{children:"/docs/"})," or ",(0,s.jsx)(n.code,{children:"/blog/"})," are ",(0,s.jsx)(n.strong,{children:"not portable"})," as you would need to manually update them if you create new doc versions or localize them."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",children:"You can write [links](/otherFolder/doc4.mdx) relative to the content root (`/docs/`).\n\nYou can also write [links](/docs/otherFolder/doc4.mdx) relative to the site directory, but it's not recommended.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Using relative ",(0,s.jsx)(n.em,{children:"file"})," paths (with ",(0,s.jsx)(n.code,{children:".md"})," extensions) instead of relative ",(0,s.jsx)(n.em,{children:"URL"})," links provides the following benefits:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Links will keep working on the GitHub interface and many Markdown editors"}),"\n",(0,s.jsx)(n.li,{children:"You can customize the files' slugs without having to update all the links"}),"\n",(0,s.jsx)(n.li,{children:"Moving files around the folders can be tracked by your editor, and some editors may automatically update file links"}),"\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/versioning",children:"versioned doc"})," will link to another doc of the exact same version"]}),"\n",(0,s.jsxs)(n.li,{children:["Relative URL links are very likely to break if you update the ",(0,s.jsxs)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/api/docusaurus-config#trailingSlash",children:[(0,s.jsx)(n.code,{children:"trailingSlash"})," config"]})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Markdown file references only work when the source and target files are processed by the same plugin instance. This is a technical limitation of our Markdown processing architecture and will be fixed in the future. If you are linking files between plugins (e.g. linking to a doc page from a blog post), you have to use URL links."})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,n,o)=>{o.d(n,{Zo:()=>a,ah:()=>r});var s=o(67294);const t=s.createContext({});function r(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:o}){let a;return a=o?"function"==typeof e?e({}):e||i:r(e),s.createElement(t.Provider,{value:a},n)}}}]);