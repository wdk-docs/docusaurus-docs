"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,g=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),a=n(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>y});var o=n(87462),a=n(67294),r=n(86010),i=n(72957),s=n(16550),l=n(75238),c=n(33609),d=n(92560);function h(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=u(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,c]=g({queryString:n,groupId:o}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,d.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),p=(()=>{const e=l??h;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{p&&s(p)}),[p]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var p=n(51048);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),o=c[n].value;o!==s&&(h(t),l(o))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function E(e){const t=f(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},a.createElement(b,(0,o.Z)({},e,t)),a.createElement(w,(0,o.Z)({},e,t)))}function y(e){const t=(0,p.Z)();return a.createElement(E,(0,o.Z)({key:String(t)},e))}},43422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>z,contentTitle:()=>C,default:()=>M,frontMatter:()=>I,metadata:()=>N,toc:()=>D});var o=n(87462),a=n(67294),r=n(3905),i=(n(73992),n(18679),n(73935));const s=(e,t)=>e===t?.tagName?.toUpperCase?.(),l=e=>s("DIV",e)||s("SPAN",e),c=e=>s("IMG",e),d=e=>e.complete&&0!==e.naturalHeight,h=e=>s("SVG",e),u=({height:e,offset:t,width:n})=>Math.min((window.innerWidth-2*t)/n,(window.innerHeight-2*t)/e),m=({containerHeight:e,containerWidth:t,hasScalableSrc:n,offset:o,targetHeight:a,targetWidth:r})=>e&&t?!n&&a&&r?(({containerHeight:e,containerWidth:t,offset:n,targetHeight:o,targetWidth:a})=>{const r=u({height:o,offset:n,width:a}),i=a>o?a/t:o/e;return r>1?i:r*i})({containerHeight:e,containerWidth:t,offset:o,targetHeight:a,targetWidth:r}):u({height:e,offset:o,width:t}):1,g=/url(?:\(['"]?)(.*?)(?:['"]?\))/,f=e=>{if(e){if(c(e))return e.currentSrc;if(l(e)){const t=window.getComputedStyle(e).backgroundImage;if(t)return g.exec(t)?.[1]}}},p=({position:e,relativeNum:t})=>{const n=parseFloat(e);return e.endsWith("%")?t*n/100:n},v=/\.svg$/i,b=({hasZoomImg:e,imgSrc:t,isSvg:n,isZoomed:o,loadedImgEl:a,offset:r,shouldRefresh:i,targetEl:s})=>{const c=n||"data:image/svg+xml"===t?.slice?.(0,18)||e||!(!t||!v.test(t)),d=s.getBoundingClientRect(),h=window.getComputedStyle(s),u=null!=a&&l(s),g=null!=a&&!u,f=(({containerHeight:e,containerLeft:t,containerTop:n,containerWidth:o,hasScalableSrc:a,offset:r,targetHeight:i,targetWidth:s})=>{const l=m({containerHeight:e,containerWidth:o,hasScalableSrc:a,offset:r,targetHeight:i,targetWidth:s});return{top:n,left:t,width:o*l,height:e*l,transform:`translate(0,0) scale(${1/l})`}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:c,offset:r,targetHeight:a?.naturalHeight??d.height,targetWidth:a?.naturalWidth??d.width}),b=g?(({containerHeight:e,containerLeft:t,containerTop:n,containerWidth:o,hasScalableSrc:a,objectFit:r,objectPosition:i,offset:s,targetHeight:l,targetWidth:c})=>{if("scale-down"===r&&(r=c<=o&&l<=e?"none":"contain"),"cover"===r||"contain"===r){const d=o/c,h=e/l,u="cover"===r?Math.max(d,h):Math.min(d,h),[g="50%",f="50%"]=i.split(" "),v=p({position:g,relativeNum:o-c*u}),b=p({position:f,relativeNum:e-l*u}),w=m({containerHeight:l*u,containerWidth:c*u,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:n+b,left:t+v,width:c*u*w,height:l*u*w,transform:`translate(0,0) scale(${1/w})`}}if("none"===r){const[r="50%",d="50%"]=i.split(" "),h=p({position:r,relativeNum:o-c}),u=p({position:d,relativeNum:e-l}),g=m({containerHeight:l,containerWidth:c,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{top:n+u,left:t+h,width:c*g,height:l*g,transform:`translate(0,0) scale(${1/g})`}}if("fill"===r){const t=o/c,n=e/l,r=Math.max(t,n),i=m({containerHeight:l*r,containerWidth:c*r,hasScalableSrc:a,offset:s,targetHeight:l,targetWidth:c});return{width:o*i,height:e*i,transform:`translate(0,0) scale(${1/i})`}}return{}})({containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:c,objectFit:h.objectFit,objectPosition:h.objectPosition,offset:r,targetHeight:a.naturalHeight,targetWidth:a.naturalWidth}):void 0,w=u?(({backgroundPosition:e,backgroundSize:t,containerHeight:n,containerLeft:o,containerTop:a,containerWidth:r,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:c})=>{if("cover"===t||"contain"===t){const d=r/c,h=n/l,u="cover"===t?Math.max(d,h):Math.min(d,h),[g="50%",f="50%"]=e.split(" "),v=p({position:g,relativeNum:r-c*u}),b=p({position:f,relativeNum:n-l*u}),w=m({containerHeight:l*u,containerWidth:c*u,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:c});return{top:a+b,left:o+v,width:c*u*w,height:l*u*w,transform:`translate(0,0) scale(${1/w})`}}if("auto"===t){const[t="50%",d="50%"]=e.split(" "),h=p({position:t,relativeNum:r-c}),u=p({position:d,relativeNum:n-l}),g=m({containerHeight:l,containerWidth:c,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:c});return{top:a+u,left:o+h,width:c*g,height:l*g,transform:`translate(0,0) scale(${1/g})`}}{const[d="50%",h="50%"]=t.split(" "),u=p({position:d,relativeNum:r})/c,g=p({position:h,relativeNum:n})/l,f=Math.min(u,g),[v="50%",b="50%"]=e.split(" "),w=p({position:v,relativeNum:r-c*f}),E=p({position:b,relativeNum:n-l*f}),y=m({containerHeight:l*f,containerWidth:c*f,hasScalableSrc:i,offset:s,targetHeight:l,targetWidth:c});return{top:a+E,left:o+w,width:c*f*y,height:l*f*y,transform:`translate(0,0) scale(${1/y})`}}})({backgroundPosition:h.backgroundPosition,backgroundSize:h.backgroundSize,containerHeight:d.height,containerLeft:d.left,containerTop:d.top,containerWidth:d.width,hasScalableSrc:c,offset:r,targetHeight:a.naturalHeight,targetWidth:a.naturalWidth}):void 0,E=Object.assign({},f,b,w);if(o){const e=window.innerWidth/2,t=window.innerHeight/2,n=e-(parseFloat(String(E.left||0))+parseFloat(String(E.width||0))/2),o=t-(parseFloat(String(E.top||0))+parseFloat(String(E.height||0))/2);i&&(E.transitionDuration="0.01ms"),E.transform=`translate(${n}px,${o}px) scale(1)`}return E};let w;"undefined"!=typeof document&&(w=document.createElement("div"),w.setAttribute("data-rmiz-portal",""),document.body.appendChild(w));const E=["img","svg",'[role="img"]',"[data-zoom]"].map((e=>`${e}:not([aria-hidden="true"])`)).join(","),y={overflow:"",width:""};function S(e){return a.createElement(L,{...e})}class L extends a.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1},this.refContent=(0,a.createRef)(),this.refDialog=(0,a.createRef)(),this.refModalContent=(0,a.createRef)(),this.refModalImg=(0,a.createRef)(),this.refWrap=(0,a.createRef)(),this.imgEl=null,this.prevBodyAttrs=y,this.styleModalImg={},this.setId=()=>{const e=()=>Math.random().toString(16).slice(-4);this.setState({id:e()+e()+e()})},this.setAndTrackImg=()=>{const e=this.refContent.current;e&&(this.imgEl=e.querySelector(E),this.imgEl?(this.changeObserver?.disconnect?.(),this.imgEl?.addEventListener?.("load",this.handleImgLoad),this.imgEl?.addEventListener?.("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElObserver=new ResizeObserver((e=>{const t=e[0];t?.target&&(this.imgEl=t.target,this.setState({}))})),this.imgElObserver.observe(this.imgEl)):this.changeObserver||(this.changeObserver=new MutationObserver(this.setAndTrackImg),this.changeObserver.observe(e,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=e=>{const{isZoomed:t}=this.props;!e&&t?this.zoom():e&&!t&&this.unzoom()},this.handleImgLoad=()=>{const{imgEl:e}=this,t=f(e);if(!t)return;const n=new Image;c(e)&&(n.sizes=e.sizes,n.srcset=e.srcset),n.src=t;const o=()=>{this.setState({loadedImgEl:n})};n.decode().then(o).catch((()=>{d(n)?o():n.onload=o}))},this.handleZoom=()=>{this.props.onZoomChange?.(!0)},this.handleUnzoom=()=>{this.props.onZoomChange?.(!1)},this.handleDialogCancel=e=>{e.preventDefault()},this.handleDialogClick=e=>{e.target!==this.refModalContent.current&&e.target!==this.refModalImg.current||this.handleUnzoom()},this.handleKeyDown=e=>{"Escape"!==e.key&&27!==e.keyCode||(e.preventDefault(),e.stopPropagation(),this.handleUnzoom())},this.handleWheel=e=>{e.ctrlKey||(e.stopPropagation(),queueMicrotask((()=>{this.handleUnzoom()})))},this.handleTouchStart=e=>{1===e.changedTouches.length&&e.changedTouches[0]&&(this.touchYStart=e.changedTouches[0].screenY)},this.handleTouchMove=e=>{if(null!=this.touchYStart&&e.changedTouches[0]){this.touchYEnd=e.changedTouches[0].screenY;const t=Math.max(this.touchYStart,this.touchYEnd),n=Math.min(this.touchYStart,this.touchYEnd);Math.abs(t-n)>10&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchCancel=()=>{this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.zoom=()=>{this.bodyScrollDisable(),this.refDialog.current?.showModal?.(),this.setState({modalState:"LOADING"}),this.loadZoomImg(),window.addEventListener("wheel",this.handleWheel,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleZoomEnd,{once:!0})},this.handleZoomEnd=()=>{setTimeout((()=>{this.setState({modalState:"LOADED"}),window.addEventListener("resize",this.handleResize,{passive:!0})}),0)},this.unzoom=()=>{this.setState({modalState:"UNLOADING"}),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0),this.refModalImg.current?.addEventListener?.("transitionend",this.handleUnzoomEnd,{once:!0})},this.handleUnzoomEnd=()=>{setTimeout((()=>{window.removeEventListener("resize",this.handleResize),this.setState({shouldRefresh:!1,modalState:"UNLOADED"}),this.refDialog.current?.close?.(),this.bodyScrollEnable()}),0)},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const e=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${e}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=y},this.loadZoomImg=()=>{const{props:{zoomImg:e}}=this,t=e?.src;if(t){const n=new Image;n.sizes=e?.sizes??"",n.srcset=e?.srcSet??"",n.src=t;const o=()=>{this.setState({isZoomImgLoaded:!0})};n.decode().then(o).catch((()=>{d(n)?o():n.onload=o}))}},this.UNSAFE_handleSvg=()=>{const{imgEl:e,refModalImg:t,styleModalImg:n}=this;if(h(e)){const o=document.createElement("div");o.innerHTML=e.outerHTML;const a=o.firstChild;a.style.width=`${n.width||0}px`,a.style.height=`${n.height||0}px`,a.addEventListener("click",this.handleUnzoom),t.current?.firstChild?.remove?.(),t.current?.appendChild?.(a)}}}render(){const{handleDialogCancel:e,handleDialogClick:t,handleUnzoom:n,handleZoom:o,imgEl:r,props:{a11yNameButtonUnzoom:s,a11yNameButtonZoom:d,children:u,classDialog:m,IconUnzoom:g,IconZoom:p,isZoomed:v,wrapElement:E,ZoomContent:y,zoomImg:S,zoomMargin:L},refContent:k,refDialog:I,refModalContent:C,refModalImg:N,refWrap:z,state:{id:D,isZoomImgLoaded:O,loadedImgEl:T,modalState:M,shouldRefresh:Z}}=this,W=`rmiz-modal-${D}`,H=`rmiz-modal-img-${D}`,x=l(r),U=c(r),A=h(r),j=(e=>{if(e)return c(e)?e.alt??void 0:e.getAttribute("aria-label")??void 0})(r),P=f(r),R=U?r.sizes:void 0,$=U?r.srcset:void 0,V=!!S?.src,B=r&&(T||A)&&"none"!==window.getComputedStyle(r).display,q=j?`${d}: ${j}`:d,Y="LOADING"===M||"LOADED"===M,_=B?"found":"not-found",F="UNLOADED"===M||"UNLOADING"===M?"hidden":"visible",J={visibility:"UNLOADED"===M?"visible":"hidden"},G=(e=>{if(!e)return{};if(h(e)){const t=e.parentElement,n=e.getBoundingClientRect();if(t){const e=t.getBoundingClientRect();return{height:n.height,left:e.left-n.left,top:e.top-n.top,width:n.width}}return{height:n.height,left:n.left,width:n.width,top:n.top}}return{height:e.offsetHeight,left:e.offsetLeft,width:e.offsetWidth,top:e.offsetTop}})(r);this.styleModalImg=B?b({hasZoomImg:V,imgSrc:P,isSvg:A,isZoomed:v&&Y,loadedImgEl:T,offset:L,shouldRefresh:Z,targetEl:r}):{};let K=null;if(B){const e=U||x?a.createElement("img",{alt:j,sizes:R,src:P,srcSet:$,...O&&"LOADED"===M?S:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:H,ref:N,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):A?a.createElement("div",{"data-rmiz-modal-img":!0,ref:N,style:this.styleModalImg}):null,t=a.createElement("button",{"aria-label":s,"data-rmiz-btn-unzoom":"",onClick:n,type:"button"},a.createElement(g,null));K=y?a.createElement(y,{buttonUnzoom:t,modalState:M,img:e,onUnzoom:n}):a.createElement(a.Fragment,null,e,t)}return a.createElement(E,{"aria-owns":W,"data-rmiz":"",ref:z},a.createElement(E,{"data-rmiz-content":_,ref:k,style:J},u),B&&a.createElement(E,{"data-rmiz-ghost":"",style:G},a.createElement("button",{"aria-label":q,"data-rmiz-btn-zoom":"",onClick:o,type:"button"},a.createElement(p,null))),B&&null!=w&&(0,i.createPortal)(a.createElement("dialog",{"aria-labelledby":H,"aria-modal":"true",className:m,"data-rmiz-modal":"",id:W,onClick:t,onClose:n,onCancel:e,ref:I,role:"dialog"},a.createElement("div",{"data-rmiz-modal-overlay":F}),a.createElement("div",{"data-rmiz-modal-content":"",ref:C},K)),w))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){"UNLOADED"!==this.state.modalState&&this.bodyScrollEnable(),this.changeObserver?.disconnect?.(),this.imgElObserver?.disconnect?.(),this.imgEl?.removeEventListener?.("load",this.handleImgLoad),this.imgEl?.removeEventListener?.("click",this.handleZoom),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleZoomEnd),this.refModalImg.current?.removeEventListener?.("transitionend",this.handleUnzoomEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(e){this.UNSAFE_handleSvg(),this.handleIfZoomChanged(e.isZoomed)}}function k(e){const[t,n]=(0,a.useState)(!1);return a.createElement(S,{...e,isZoomed:t,onZoomChange:n})}L.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",IconUnzoom:function(){return a.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))},IconZoom:function(){return a.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))},wrapElement:"div",zoomMargin:0};const I={description:"Docusaurus\u5982\u4f55\u6784\u5efa\u4f60\u7684\u5e94\u7528"},C="\u4f53\u7cfb\u67b6\u6784",N={unversionedId:"advanced/architecture",id:"advanced/architecture",title:"\u4f53\u7cfb\u67b6\u6784",description:"Docusaurus\u5982\u4f55\u6784\u5efa\u4f60\u7684\u5e94\u7528",source:"@site/docs/advanced/architecture.mdx",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docs/advanced/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/architecture.mdx",tags:[],version:"current",frontMatter:{description:"Docusaurus\u5982\u4f55\u6784\u5efa\u4f60\u7684\u5e94\u7528"},sidebar:"docs",previous:{title:"\u9ad8\u7ea7\u6559\u7a0b",permalink:"/docs/advanced/"},next:{title:"\u63d2\u4ef6",permalink:"/docs/advanced/plugins"}},z={},D=[],O={toc:D},T="wrapper";function M(e){let{components:t,...a}=e;return(0,r.kt)(T,(0,o.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f53\u7cfb\u67b6\u6784"},"\u4f53\u7cfb\u67b6\u6784"),(0,r.kt)(k,{mdxType:"Zoom"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture overview",src:n(21501).Z,width:"2228",height:"2007"}))),(0,r.kt)("p",null,"\u8fd9\u5f20\u56fe\u5c55\u793a\u4e86 Docusaurus \u662f\u5982\u4f55\u6784\u5efa\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u3002\u6bcf\u4e2a\u63d2\u4ef6\u90fd\u6536\u96c6\u5b83\u4eec\u7684\u5185\u5bb9\u5e76\u53d1\u51fa JSON \u6570\u636e;\u4e3b\u9898\u63d0\u4f9b\u4e86\u4f5c\u4e3a\u8def\u7531\u6a21\u5757\u63a5\u6536 JSON \u6570\u636e\u7684\u5e03\u5c40\u7ec4\u4ef6\u3002\u6346\u7ed1\u5668\u6346\u7ed1\u6240\u6709\u7ec4\u4ef6\uff0c\u5e76\u53d1\u51fa\u4e00\u4e2a\u670d\u52a1\u5668\u6346\u7ed1\u5305\u548c\u4e00\u4e2a\u5ba2\u6237\u7aef\u6346\u7ed1\u5305\u3002"),(0,r.kt)("p",null,"\u867d\u7136\u4f60(\u65e0\u8bba\u662f\u63d2\u4ef6\u4f5c\u8005\u8fd8\u662f\u7f51\u7ad9\u521b\u5efa\u8005)\u4e00\u76f4\u5728\u5199 JavaScript\uff0c\u4f46\u8981\u8bb0\u4f4f JS \u5b9e\u9645\u4e0a\u662f\u5728\u4e0d\u540c\u7684\u73af\u5883\u4e2d\u8fd0\u884c\u7684:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u63d2\u4ef6\u751f\u547d\u5468\u671f\u65b9\u6cd5\u90fd\u5728 Node \u4e2d\u8fd0\u884c\u3002\u56e0\u6b64\uff0c\u5728\u6211\u4eec\u7684\u4ee3\u7801\u5e93\u4e2d\u652f\u6301 ES \u6a21\u5757\u4e4b\u524d\uff0c\u63d2\u4ef6\u6e90\u4ee3\u7801\u5fc5\u987b\u4ee5 CommonJS \u7684\u5f62\u5f0f\u63d0\u4f9b\uff0c\u53ef\u4ee5\u88ab",(0,r.kt)("inlineCode",{parentName:"li"},"require"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u4ee3\u7801\u4f7f\u7528 Webpack \u6784\u5efa\u3002\u5b83\u4eec\u53ef\u4ee5\u4f5c\u4e3a\u9075\u5faa esb \u7684 React \u7ea6\u5b9a\u63d0\u4f9b\u3002")),(0,r.kt)("p",null,"\u63d2\u4ef6\u4ee3\u7801\u548c\u4e3b\u9898\u4ee3\u7801\u4ece\u4e0d\u76f4\u63a5\u76f8\u4e92\u5bfc\u5165:\u5b83\u4eec\u53ea\u901a\u8fc7\u534f\u8bae\u8fdb\u884c\u901a\u4fe1(\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u901a\u8fc7 JSON \u4e34\u65f6\u6587\u4ef6\u548c\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"addRoute"),"\u7684\u8c03\u7528)\u3002\u4e00\u4e2a\u6709\u7528\u7684\u5fc3\u7406\u6a21\u578b\u662f\u60f3\u8c61\u63d2\u4ef6\u4e0d\u662f\u7528 JavaScript \u7f16\u5199\u7684\uff0c\u800c\u662f\u7528\u53e6\u4e00\u79cd\u8bed\u8a00(\u5982 Rust)\u7f16\u5199\u7684\u3002\u4e0e\u7528\u6237\u63d2\u4ef6\u4ea4\u4e92\u7684\u552f\u4e00\u65b9\u6cd5\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\uff0c\u5b83\u672c\u8eab\u5728 Node \u4e2d\u8fd0\u884c(\u56e0\u6b64\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"require"),"\u5e76\u5c06\u56de\u8c03\u4f5c\u4e3a\u63d2\u4ef6\u9009\u9879)\u3002"),(0,r.kt)("p",null,"\u5728\u6346\u7ed1\u671f\u95f4\uff0c\u914d\u7f6e\u6587\u4ef6\u672c\u8eab\u88ab\u5e8f\u5217\u5316\u548c\u6346\u7ed1\uff0c\u5141\u8bb8\u4e3b\u9898\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/docs/docusaurus-core#useDocusaurusContext"},(0,r.kt)("inlineCode",{parentName:"a"},"useDocusaurusContext()")),"\u8bbf\u95ee\u914d\u7f6e\u9009\u9879\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," \u3002\n\u7136\u800c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"siteConfig"),"\u5bf9\u8c61\u53ea\u5305\u542b",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u5e8f\u5217\u5316\u7684\u503c"),"(\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),"\u4e4b\u540e\u4fdd\u7559\u7684\u503c)\u3002\n\u51fd\u6570\u3001\u6b63\u5219\u8868\u8fbe\u5f0f\u7b49\u5c06\u5728\u5ba2\u6237\u7aef\u4e22\u5931\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"themeConfig"),"\u88ab\u8bbe\u8ba1\u6210\u5b8c\u5168\u53ef\u5e8f\u5217\u5316\u7684\u3002"))}M.isMDXComponent=!0},21501:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"}}]);