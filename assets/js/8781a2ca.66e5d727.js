"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[54967],{30457:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>o});var n=c(85893),i=c(11151);const d={sidebar_position:0,slug:"/api/misc/create-docusaurus"},r="\ud83d\udce6 create-docusaurus",t={unversionedId:"api/misc/create-docusaurus",id:"api/misc/create-docusaurus",title:"\ud83d\udce6 create-docusaurus",description:"\u4e00\u4e2a\u811a\u624b\u67b6\u5b9e\u7528\u7a0b\u5e8f\uff0c\u5e2e\u52a9\u60a8\u7acb\u5373\u5efa\u7acb\u4e00\u4e2a\u529f\u80fd\u7684 Docusaurus \u5e94\u7528\u7a0b\u5e8f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/misc/create-docusaurus.mdx",sourceDirName:"api/misc",slug:"/api/misc/create-docusaurus",permalink:"/docusaurus-docs/docs/next/api/misc/create-docusaurus",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:0,frontMatter:{sidebar_position:0,slug:"/api/misc/create-docusaurus"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-mermaid",permalink:"/docusaurus-docs/docs/next/api/themes/@docusaurus/theme-mermaid"},next:{title:"\ud83d\udce6 eslint-plugin",permalink:"/docusaurus-docs/docs/next/api/misc/@docusaurus/eslint-plugin"}},a={},o=[{value:"\u4f7f\u7528",id:"usage",level:2},{value:"\u9009\u9879",id:"options",level:2},{value:"<code>-t, --typescript</code>",id:"typescript",level:3},{value:"<code>-g, --git-strategy</code>",id:"git-strategy",level:3},{value:"<code>-p, --package-manager</code>",id:"package-manager",level:3},{value:"<code>-s, --skip-install</code>",id:"skip-install",level:3}];function l(e){const s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",admonition:"admonition",h3:"h3"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"-create-docusaurus",children:"\ud83d\udce6 create-docusaurus"}),"\n",(0,n.jsx)(s.p,{children:"\u4e00\u4e2a\u811a\u624b\u67b6\u5b9e\u7528\u7a0b\u5e8f\uff0c\u5e2e\u52a9\u60a8\u7acb\u5373\u5efa\u7acb\u4e00\u4e2a\u529f\u80fd\u7684 Docusaurus \u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"\u4f7f\u7528"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npx create-docusaurus@latest [name] [template] [rootDir]\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"name"}),"\u53c2\u6570\u5c06\u88ab\u7528\u4f5c\u7ad9\u70b9\u7684\u8def\u5f84\uff0c\u4ee5\u53ca\u88ab\u521b\u5efa\u5e94\u7528\u7684 ",(0,n.jsx)(s.code,{children:"package.json"})," \u4e2d\u7684",(0,n.jsx)(s.code,{children:"name"}),"\u5b57\u6bb5\u3002\u5b83\u53ef\u4ee5\u662f\u7edd\u5bf9\u8def\u5f84\uff0c\u4e5f\u53ef\u4ee5\u662f\u76f8\u5bf9\u4e8e",(0,n.jsx)(s.code,{children:"rootDir"}),"\u7684\u8def\u5f84\u3002"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"template"}),"\u53c2\u6570\u53ef\u4ee5\u662f\u4e0b\u5217\u53c2\u6570\u4e4b\u4e00:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"classic"}),": \u4f7f\u7528\u7ecf\u5178\u6a21\u677f(\u63a8\u8350)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"facebook"}),": \u4f7f\u7528 Facebook/Meta \u6a21\u677f\uff0c\u5176\u4e2d\u5305\u542b\u4e00\u4e9b\u7279\u5b9a\u4e8e Meta \u7684\u8bbe\u7f6e"]}),"\n",(0,n.jsxs)(s.li,{children:["git repo URL(\u4ee5",(0,n.jsx)(s.code,{children:"https://"}),"\u6216",(0,n.jsx)(s.code,{children:"git@"}),"\u5f00\u5934)\uff0c\u53ef\u4ee5\u514b\u9686\u5230\u76ee\u6807"]}),"\n",(0,n.jsx)(s.li,{children:"\u76f8\u5bf9\u4e8e CWD \u7684\u672c\u5730\u6587\u4ef6\u8def\u5f84\uff0c\u5176\u4e2d\u5305\u542b\u8981\u590d\u5236\u5230\u76ee\u6807\u7684\u6587\u4ef6"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"rootDir"}),"\u5c06\u7528\u4e8e\u89e3\u6790\u7ad9\u70b9\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84\u3002\u9ed8\u8ba4\u4e3a CWD\u3002"]}),"\n",(0,n.jsx)(s.admonition,{type:"caution",children:(0,n.jsx)(s.p,{children:"\u8be5\u547d\u4ee4\u6700\u597d\u5728\u4ea4\u4e92\u5f0f shell \u4e2d\u4f7f\u7528\uff0c\u4ee5\u4fbf\u6240\u6709\u529f\u80fd\u90fd\u53ef\u7528\u3002"})}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"\u9009\u9879"}),"\n",(0,n.jsx)(s.h3,{id:"typescript",children:(0,n.jsx)(s.code,{children:"-t, --typescript"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5f53\u6a21\u677f\u53c2\u6570\u662f\u53ef\u8bc6\u522b\u7684\u540d\u79f0\u65f6\u4f7f\u7528\u3002\u76ee\u524d\uff0c\u53ea\u6709",(0,n.jsx)(s.code,{children:"classic"}),"\u63d0\u4f9b\u4e86 TypeScript \u7684\u53d8\u4f53\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"git-strategy",children:(0,n.jsx)(s.code,{children:"-g, --git-strategy"})}),"\n",(0,n.jsx)(s.p,{children:"\u5f53\u6a21\u677f\u53c2\u6570\u662f\u4e00\u4e2a git repo \u65f6\u4f7f\u7528\u3002\u5b83\u5fc5\u987b\u662f:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"deep"}),": \u4fdd\u7559\u5b8c\u6574\u7684 git \u5386\u53f2"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"shallow"}),": \u5e26",(0,n.jsx)(s.code,{children:"--depth=1"}),"\u7684\u514b\u9686"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"copy"}),": \u6d45\u5c42\u514b\u9686\uff0c\u4f46\u4e0d\u521b\u5efa git \u4ed3\u5e93"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"custom"}),": \u8f93\u5165\u81ea\u5b9a\u4e49 git \u514b\u9686\u547d\u4ee4\u3002\u6211\u4eec\u4f1a\u63d0\u793a\u60a8\u7684\u3002\u4f60\u53ef\u4ee5\u8fd9\u6837\u5199",(0,n.jsx)(s.code,{children:"git clone --depth 10"}),"\uff0c\u6211\u4eec\u4f1a\u9644\u52a0\u5b58\u50a8\u5e93 URL \u548c\u76ee\u6807\u76ee\u5f55\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"package-manager",children:(0,n.jsx)(s.code,{children:"-p, --package-manager"})}),"\n",(0,n.jsxs)(s.p,{children:["\u503c\u5e94\u8be5\u662f",(0,n.jsx)(s.code,{children:"npm"}),"\uff0c ",(0,n.jsx)(s.code,{children:"yarn"}),"\uff0c ",(0,n.jsx)(s.code,{children:"pnpm"}),"\u6216",(0,n.jsx)(s.code,{children:"bun"}),"\u4e2d\u7684\u4e00\u4e2a\u3002\u5982\u679c\u6ca1\u6709\u660e\u786e\u63d0\u4f9b\uff0cDocusaurus \u5c06\u6839\u636e:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5df2\u5b58\u5728\u4e8e CWD \u4e2d\u7684\u9501\u6587\u4ef6(\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6b63\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u8bbe\u7f6e\u7f51\u7ad9)"}),"\n",(0,n.jsxs)(s.li,{children:["\u7528\u4e8e\u8c03\u7528",(0,n.jsx)(s.code,{children:"create-docusaurus"}),"\u7684\u547d\u4ee4 (\u5982\u3002 ",(0,n.jsx)(s.code,{children:"npm init"}),", ",(0,n.jsx)(s.code,{children:"npx"}),", ",(0,n.jsx)(s.code,{children:"yarn create"}),", ",(0,n.jsx)(s.code,{children:"bunx"}),", \u7b49\u3002)"]}),"\n",(0,n.jsx)(s.li,{children:"\u4ea4\u4e92\u5f0f\u63d0\u793a\uff0c\u4ee5\u9632\u6240\u6709\u542f\u53d1\u5f0f\u90fd\u4e0d\u5b58\u5728"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"skip-install",children:(0,n.jsx)(s.code,{children:"-s, --skip-install"})}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679c\u63d0\u4f9b\uff0cDocusaurus \u5c06\u4e0d\u4f1a\u5728\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u540e\u81ea\u52a8\u5b89\u88c5\u4f9d\u8d56\u9879\u3002",(0,n.jsx)(s.code,{children:"--package-manager"}),"\u9009\u9879\u4ec5\u5728\u5b9e\u9645\u5b89\u88c5\u4f9d\u8d56\u9879\u65f6\u6709\u7528\u3002"]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},11151:(e,s,c)=>{c.d(s,{Zo:()=>t,ah:()=>d});var n=c(67294);const i=n.createContext({});function d(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function t({components:e,children:s,disableParentContext:c}){let t;return t=c?"function"==typeof e?e({}):e||r:d(e),n.createElement(i.Provider,{value:t},s)}}}]);