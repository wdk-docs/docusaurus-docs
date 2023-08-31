"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[85694],{22725:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=n(85893),i=n(11151);const t={title:"Docusaurus 2.1",authors:["slorber"],tags:["release"],image:"./img/social-card.png"},r=void 0,a={permalink:"/docusaurus-docs/blog/2022/09/01/docusaurus-2.1",editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",source:"@site/blog/2022-09-01-docusaurus-2.1/index.mdx",title:"Docusaurus 2.1",description:"We are happy to announce Docusaurus 2.1, our very first minor version release.",date:"2022-09-01T00:00:00.000Z",formattedDate:"2022\u5e749\u67081\u65e5",tags:[{label:"release",permalink:"/docusaurus-docs/blog/tags/release"}],readingTime:1.725,hasTruncateMarker:!0,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",twitter:"sebastienlorber",email:"lorber.sebastien@gmail.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"Docusaurus 2.1",authors:["slorber"],tags:["release"],image:"./img/social-card.png"},unlisted:!1,prevItem:{title:"Docusaurus 2.2",permalink:"/docusaurus-docs/blog/releases/2.2"},nextItem:{title:"Announcing Docusaurus 2.0",permalink:"/docusaurus-docs/blog/2022/08/01/announcing-docusaurus-2.0"}},c={image:n(86126).Z,authorsImageUrls:[void 0]},d=[{value:"Highlights",id:"highlights",level:2},{value:"DocCardList improvements",id:"doccardlist-improvements",level:3},{value:"<code>noindex</code> improvements",id:"noindex-improvements",level:3},{value:"Overriding default meta tags",id:"overriding-default-meta-tags",level:3},{value:"Ukrainian translations",id:"ukrainian-translations",level:3},{value:"Other changes",id:"other-changes",level:2}];function l(e){const s=Object.assign({p:"p",strong:"strong",a:"a",img:"img",h2:"h2",h3:"h3",code:"code",pre:"pre",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["We are happy to announce ",(0,o.jsx)(s.strong,{children:"Docusaurus 2.1"}),", our very first minor version release."]}),"\n",(0,o.jsxs)(s.p,{children:["The upgrade should be easy: as explained in our ",(0,o.jsx)(s.a,{href:"/community/release-process",children:"release process documentation"}),", minor versions respect ",(0,o.jsx)(s.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"Docusaurus 2.1 social card",src:n(86126).Z+"",width:"1200",height:"600"})}),"\n",(0,o.jsx)(s.h2,{id:"highlights",children:"Highlights"}),"\n",(0,o.jsx)(s.h3,{id:"doccardlist-improvements",children:"DocCardList improvements"}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/8008",children:"#8008"}),", we simplified the usage of the",(0,o.jsx)(s.code,{children:"<DocCardList>"})," component, that is notably used on sidebar category generated index pages."]}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"items"})," prop is now optional, and will be automatically inferred from the content of the parent sidebar category:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-diff",children:"import DocCardList from '@theme/DocCardList';\n- import {useCurrentSidebarCategory} from '@docusaurus/theme-common';\n\n- <DocCardList items={useCurrentSidebarCategory().items}/>\n+ <DocCardList/>\n"})}),"\n",(0,o.jsx)(s.p,{children:"Also, we made it possible to use it on any document, including regular docs not linked to any sidebar category."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{alt:"simplified DocCardList component",src:n(6333).Z+"",width:"1062",height:"489"})}),"\n",(0,o.jsxs)(s.h3,{id:"noindex-improvements",children:[(0,o.jsx)(s.code,{children:"noindex"})," improvements"]}),"\n",(0,o.jsxs)(s.p,{children:["We improved the support of the ",(0,o.jsxs)(s.a,{href:"https://developers.google.com/search/docs/advanced/crawling/block-indexing",children:[(0,o.jsx)(s.code,{children:"noindex"})," meta ",(0,o.jsx)(s.code,{children:"robots"})," directive"]}),", a way to signal search engines you don't want a specific page to be indexed."]}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7963",children:"#7963"}),", we allow ",(0,o.jsx)(s.code,{children:"noindex"})," to be configured on a per-docs-version basis."]}),"\n",(0,o.jsxs)(s.p,{children:["Use the following plugin options to tell crawlers you don't want the ",(0,o.jsx)(s.code,{children:"1.0.0"})," version to be indexed:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-jsx",children:"const options = {\n  versions: {\n    '1.0.0': {\n      noIndex: true,\n    },\n  },\n};\n"})}),"\n",(0,o.jsx)(s.p,{children:"In practice, Docusaurus will add the following meta to each page of that version:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-html",children:'<meta name="robots" content="noindex, nofollow" />\n'})}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7964",children:"#7964"}),", we also fixed a bug where the sitemap plugin would still contain pages that have a ",(0,o.jsx)(s.code,{children:"noindex"})," directive. Now the sitemap plugin will reliably filter out all the pages containing ",(0,o.jsx)(s.code,{children:"noindex"})," directives."]}),"\n",(0,o.jsx)(s.h3,{id:"overriding-default-meta-tags",children:"Overriding default meta tags"}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7952",children:"#7952"}),", it becomes possible to override default html meta tags you couldn't before:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-jsx",children:'<>\n  {siteConfig.noIndex && <meta name="robots" content="nofollow, noindex" />}\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n</>\n'})}),"\n",(0,o.jsxs)(s.p,{children:["It is now possible to use ",(0,o.jsx)(s.code,{children:"<Head>"})," or ",(0,o.jsx)(s.code,{children:"themeConfig.metadata"}),":"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["to override the ",(0,o.jsx)(s.code,{children:"viewport"})," meta"]}),"\n",(0,o.jsxs)(s.li,{children:["to override the ",(0,o.jsx)(s.code,{children:"robots"})," meta: you could mark your site as ",(0,o.jsx)(s.code,{children:"noIndex"}),", but except for specific pages that should be indexed"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"ukrainian-translations",children:"Ukrainian translations"}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.a,{href:"https://github.com/facebook/docusaurus/pull/7953",children:"#7953"}),", we added default classic theme translations for the Ukrainian language."]}),"\n",(0,o.jsx)(s.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,o.jsxs)(s.p,{children:["Check the ",(0,o.jsx)(s.a,{href:"/changelog/2.1.0",children:"2.1.0 changelog entry"})," for an exhaustive list of changes."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},6333:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/doc-card-list-e52d727eadceb3d21cfc0f851f09aa93.png"},86126:(e,s,n)=>{n.d(s,{Z:()=>o});const o=n.p+"assets/images/social-card-8dc2413b4f9e86328bf77575e91171d7.png"},11151:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>t});var o=n(67294);const i=o.createContext({});function t(e){const s=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||r:t(e),o.createElement(i.Provider,{value:a},s)}}}]);