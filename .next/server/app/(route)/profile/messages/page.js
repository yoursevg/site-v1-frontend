(()=>{var e={};e.id=199,e.ids=[199],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},70061:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>f,tree:()=>c});var s=t(50482),o=t(69108),a=t(62563),l=t.n(a),n=t(68300),i={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);t.d(r,i);let c=["",{children:["(route)",{children:["profile",{children:["messages",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,90390)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/messages/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,38578)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,44009)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/messages/page.tsx"],u="/(route)/profile/messages/page",p={require:t,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(route)/profile/messages/page",pathname:"/profile/messages",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7301:(e,r,t)=>{Promise.resolve().then(t.bind(t,34180))},94649:(e,r,t)=>{Promise.resolve().then(t.bind(t,14871)),Promise.resolve().then(t.bind(t,98945)),Promise.resolve().then(t.bind(t,50909))},34180:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(95344);t(3729);var o=t(14871),a=t(23673),l=t(50909),n=t(56506),i=t(8428),c=t(87548);let d=function(){(0,i.usePathname)();let{isSignedIn:e,user:r}=(0,c.aF)();return r?e?(0,s.jsxs)("aside",{className:"flex flex-col gap-3 p-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)(o.Avatar,{className:"border w-20 h-20",children:[s.jsx(o.AvatarImage,{src:r?.imageUrl}),s.jsx(o.AvatarFallback,{children:r?.firstName})]}),s.jsx(a.ll,{children:r?.firstName?r.firstName:r?.username}),(0,s.jsxs)("div",{className:"flex gap-3 items-center justify-around",children:[s.jsx("span",{children:"0,0"}),s.jsx("span",{className:"w-[65px]",children:"Нет отзывов"})]})]}),s.jsx(l.Separator,{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx(n.default,{href:"/profile/posts",children:"Мои объявления"}),s.jsx(n.default,{href:"/profile/reviews",children:"Мои отзывы"}),s.jsx(n.default,{href:"/profile/favourites",children:"Избранное"})]}),s.jsx(l.Separator,{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx(n.default,{href:"/profile/messages",children:"Сообщения"}),s.jsx(n.default,{href:"/profile/notifications",children:"Уведомления"})]}),s.jsx(l.Separator,{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx(n.default,{href:"/profile/management",children:"Управление профилем"}),s.jsx(n.default,{href:"/profile/settings",children:"Настройки"})]})]}):s.jsx("div",{className:"h-[80vh] bg-gray-300",children:"Loading..."}):null}},14871:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Avatar:()=>n,AvatarFallback:()=>c,AvatarImage:()=>i});var s=t(95344),o=t(3729),a=t(33320),l=t(11453);let n=o.forwardRef(({className:e,...r},t)=>s.jsx(a.fC,{ref:t,className:(0,l.cn)("relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full",e),...r}));n.displayName=a.fC.displayName;let i=o.forwardRef(({className:e,...r},t)=>s.jsx(a.Ee,{ref:t,className:(0,l.cn)("aspect-square h-full w-full",e),...r}));i.displayName=a.Ee.displayName;let c=o.forwardRef(({className:e,...r},t)=>s.jsx(a.NY,{ref:t,className:(0,l.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...r}));c.displayName=a.NY.displayName},23673:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>n,Zb:()=>l,aY:()=>c,ll:()=>i});var s=t(95344),o=t(3729),a=t(11453);let l=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));l.displayName="Card";let n=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...r}));n.displayName="CardHeader";let i=o.forwardRef(({className:e,...r},t)=>s.jsx("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));i.displayName="CardTitle",o.forwardRef(({className:e,...r},t)=>s.jsx("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",e),...r})).displayName="CardDescription";let c=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("px-6 pt-0",e),...r}));c.displayName="CardContent",o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("flex items-center px-6 pt-0",e),...r})).displayName="CardFooter"},98945:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ScrollArea:()=>$,ScrollBar:()=>B});var s=t(95344),o=t(3729),a=t(65651),l=t(62409),n=t(43234),i=t(98462),c=t(31405),d=t(2256),u=t(3975),p=t(16069),f=t(2633),m=t(85222);let g="ScrollArea",[h,x]=(0,i.b)(g),[v,w]=h(g),b=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,type:s="hover",dir:n,scrollHideDelay:i=600,...d}=e,[p,f]=(0,o.useState)(null),[m,g]=(0,o.useState)(null),[h,x]=(0,o.useState)(null),[w,b]=(0,o.useState)(null),[y,S]=(0,o.useState)(null),[j,_]=(0,o.useState)(0),[E,N]=(0,o.useState)(0),[P,C]=(0,o.useState)(!1),[R,T]=(0,o.useState)(!1),A=(0,c.e)(r,e=>f(e)),W=(0,u.gm)(n);return(0,o.createElement)(v,{scope:t,type:s,dir:W,scrollHideDelay:i,scrollArea:p,viewport:m,onViewportChange:g,content:h,onContentChange:x,scrollbarX:w,onScrollbarXChange:b,scrollbarXEnabled:P,onScrollbarXEnabledChange:C,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:R,onScrollbarYEnabledChange:T,onCornerWidthChange:_,onCornerHeightChange:N},(0,o.createElement)(l.WV.div,(0,a.Z)({dir:W},d,{ref:A,style:{position:"relative","--radix-scroll-area-corner-width":j+"px","--radix-scroll-area-corner-height":E+"px",...e.style}})))}),y=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,children:s,...n}=e,i=w("ScrollAreaViewport",t),d=(0,o.useRef)(null),u=(0,c.e)(r,d,i.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(l.WV.div,(0,a.Z)({"data-radix-scroll-area-viewport":""},n,{ref:u,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"}},s)))}),S="ScrollAreaScrollbar",j=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...s}=e,l=w(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:n,onScrollbarYEnabledChange:i}=l,c="horizontal"===e.orientation;return(0,o.useEffect)(()=>(c?n(!0):i(!0),()=>{c?n(!1):i(!1)}),[c,n,i]),"hover"===l.type?(0,o.createElement)(_,(0,a.Z)({},s,{ref:r,forceMount:t})):"scroll"===l.type?(0,o.createElement)(E,(0,a.Z)({},s,{ref:r,forceMount:t})):"auto"===l.type?(0,o.createElement)(N,(0,a.Z)({},s,{ref:r,forceMount:t})):"always"===l.type?(0,o.createElement)(P,(0,a.Z)({},s,{ref:r})):null}),_=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...s}=e,l=w(S,e.__scopeScrollArea),[i,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=l.scrollArea,r=0;if(e){let t=()=>{window.clearTimeout(r),c(!0)},s=()=>{r=window.setTimeout(()=>c(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",t),e.addEventListener("pointerleave",s),()=>{window.clearTimeout(r),e.removeEventListener("pointerenter",t),e.removeEventListener("pointerleave",s)}}},[l.scrollArea,l.scrollHideDelay]),(0,o.createElement)(n.z,{present:t||i},(0,o.createElement)(N,(0,a.Z)({"data-state":i?"visible":"hidden"},s,{ref:r})))}),E=(0,o.forwardRef)((e,r)=>{var t;let{forceMount:s,...l}=e,i=w(S,e.__scopeScrollArea),c="horizontal"===e.orientation,d=V(()=>p("SCROLL_END"),100),[u,p]=(t={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,r)=>{let s=t[e][r];return null!=s?s:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>p("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,i.scrollHideDelay,p]),(0,o.useEffect)(()=>{let e=i.viewport,r=c?"scrollLeft":"scrollTop";if(e){let t=e[r],s=()=>{let s=e[r];t!==s&&(p("SCROLL"),d()),t=s};return e.addEventListener("scroll",s),()=>e.removeEventListener("scroll",s)}},[i.viewport,c,p,d]),(0,o.createElement)(n.z,{present:s||"hidden"!==u},(0,o.createElement)(P,(0,a.Z)({"data-state":"hidden"===u?"hidden":"visible"},l,{ref:r,onPointerEnter:(0,m.M)(e.onPointerEnter,()=>p("POINTER_ENTER")),onPointerLeave:(0,m.M)(e.onPointerLeave,()=>p("POINTER_LEAVE"))})))}),N=(0,o.forwardRef)((e,r)=>{let t=w(S,e.__scopeScrollArea),{forceMount:s,...l}=e,[i,c]=(0,o.useState)(!1),d="horizontal"===e.orientation,u=V(()=>{if(t.viewport){let e=t.viewport.offsetWidth<t.viewport.scrollWidth,r=t.viewport.offsetHeight<t.viewport.scrollHeight;c(d?e:r)}},10);return X(t.viewport,u),X(t.content,u),(0,o.createElement)(n.z,{present:s||i},(0,o.createElement)(P,(0,a.Z)({"data-state":i?"visible":"hidden"},l,{ref:r})))}),P=(0,o.forwardRef)((e,r)=>{let{orientation:t="vertical",...s}=e,l=w(S,e.__scopeScrollArea),n=(0,o.useRef)(null),i=(0,o.useRef)(0),[c,d]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=U(c.viewport,c.content),p={...s,sizes:c,onSizesChange:d,hasThumb:!!(u>0&&u<1),onThumbChange:e=>n.current=e,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:e=>i.current=e};function f(e,r){return function(e,r,t,s="ltr"){let o=I(t),a=r||o/2,l=t.scrollbar.paddingStart+a,n=t.scrollbar.size-t.scrollbar.paddingEnd-(o-a),i=t.content-t.viewport;return H([l,n],"ltr"===s?[0,i]:[-1*i,0])(e)}(e,i.current,c,r)}return"horizontal"===t?(0,o.createElement)(C,(0,a.Z)({},p,{ref:r,onThumbPositionChange:()=>{if(l.viewport&&n.current){let e=Y(l.viewport.scrollLeft,c,l.dir);n.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}})):"vertical"===t?(0,o.createElement)(R,(0,a.Z)({},p,{ref:r,onThumbPositionChange:()=>{if(l.viewport&&n.current){let e=Y(l.viewport.scrollTop,c);n.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}})):null}),C=(0,o.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:s,...l}=e,n=w(S,e.__scopeScrollArea),[i,d]=(0,o.useState)(),u=(0,o.useRef)(null),p=(0,c.e)(r,u,n.onScrollbarXChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(W,(0,a.Z)({"data-orientation":"horizontal"},l,{ref:p,sizes:t,style:{bottom:0,left:"rtl"===n.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===n.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":I(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.x),onDragScroll:r=>e.onDragScroll(r.x),onWheelScroll:(r,t)=>{if(n.viewport){let s=n.viewport.scrollLeft+r.deltaX;e.onWheelScroll(s),function(e,r){return e>0&&e<r}(s,t)&&r.preventDefault()}},onResize:()=>{u.current&&n.viewport&&i&&s({content:n.viewport.scrollWidth,viewport:n.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:M(i.paddingLeft),paddingEnd:M(i.paddingRight)}})}}))}),R=(0,o.forwardRef)((e,r)=>{let{sizes:t,onSizesChange:s,...l}=e,n=w(S,e.__scopeScrollArea),[i,d]=(0,o.useState)(),u=(0,o.useRef)(null),p=(0,c.e)(r,u,n.onScrollbarYChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(W,(0,a.Z)({"data-orientation":"vertical"},l,{ref:p,sizes:t,style:{top:0,right:"ltr"===n.dir?0:void 0,left:"rtl"===n.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":I(t)+"px",...e.style},onThumbPointerDown:r=>e.onThumbPointerDown(r.y),onDragScroll:r=>e.onDragScroll(r.y),onWheelScroll:(r,t)=>{if(n.viewport){let s=n.viewport.scrollTop+r.deltaY;e.onWheelScroll(s),function(e,r){return e>0&&e<r}(s,t)&&r.preventDefault()}},onResize:()=>{u.current&&n.viewport&&i&&s({content:n.viewport.scrollHeight,viewport:n.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:M(i.paddingTop),paddingEnd:M(i.paddingBottom)}})}}))}),[T,A]=h(S),W=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,sizes:s,hasThumb:n,onThumbChange:i,onThumbPointerUp:u,onThumbPointerDown:p,onThumbPositionChange:f,onDragScroll:g,onWheelScroll:h,onResize:x,...v}=e,b=w(S,t),[y,j]=(0,o.useState)(null),_=(0,c.e)(r,e=>j(e)),E=(0,o.useRef)(null),N=(0,o.useRef)(""),P=b.viewport,C=s.content-s.viewport,R=(0,d.W)(h),A=(0,d.W)(f),W=V(x,10);function L(e){E.current&&g({x:e.clientX-E.current.left,y:e.clientY-E.current.top})}return(0,o.useEffect)(()=>{let e=e=>{let r=e.target;(null==y?void 0:y.contains(r))&&R(e,C)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[P,y,C,R]),(0,o.useEffect)(A,[s,A]),X(y,W),X(b.content,W),(0,o.createElement)(T,{scope:t,scrollbar:y,hasThumb:n,onThumbChange:(0,d.W)(i),onThumbPointerUp:(0,d.W)(u),onThumbPositionChange:A,onThumbPointerDown:(0,d.W)(p)},(0,o.createElement)(l.WV.div,(0,a.Z)({},v,{ref:_,style:{position:"absolute",...v.style},onPointerDown:(0,m.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),E.current=y.getBoundingClientRect(),N.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",b.viewport&&(b.viewport.style.scrollBehavior="auto"),L(e))}),onPointerMove:(0,m.M)(e.onPointerMove,L),onPointerUp:(0,m.M)(e.onPointerUp,e=>{let r=e.target;r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=N.current,b.viewport&&(b.viewport.style.scrollBehavior=""),E.current=null})})))}),L="ScrollAreaThumb",z=(0,o.forwardRef)((e,r)=>{let{forceMount:t,...s}=e,l=A(L,e.__scopeScrollArea);return(0,o.createElement)(n.z,{present:t||l.hasThumb},(0,o.createElement)(q,(0,a.Z)({ref:r},s)))}),q=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,style:s,...n}=e,i=w(L,t),d=A(L,t),{onThumbPositionChange:u}=d,p=(0,c.e)(r,e=>d.onThumbChange(e)),f=(0,o.useRef)(),g=V(()=>{f.current&&(f.current(),f.current=void 0)},100);return(0,o.useEffect)(()=>{let e=i.viewport;if(e){let r=()=>{if(g(),!f.current){let r=O(e,u);f.current=r,u()}};return u(),e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r)}},[i.viewport,g,u]),(0,o.createElement)(l.WV.div,(0,a.Z)({"data-state":d.hasThumb?"visible":"hidden"},n,{ref:p,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:(0,m.M)(e.onPointerDownCapture,e=>{let r=e.target.getBoundingClientRect(),t=e.clientX-r.left,s=e.clientY-r.top;d.onThumbPointerDown({x:t,y:s})}),onPointerUp:(0,m.M)(e.onPointerUp,d.onThumbPointerUp)}))}),D="ScrollAreaCorner",k=(0,o.forwardRef)((e,r)=>{let t=w(D,e.__scopeScrollArea),s=!!(t.scrollbarX&&t.scrollbarY);return"scroll"!==t.type&&s?(0,o.createElement)(Z,(0,a.Z)({},e,{ref:r})):null}),Z=(0,o.forwardRef)((e,r)=>{let{__scopeScrollArea:t,...s}=e,n=w(D,t),[i,c]=(0,o.useState)(0),[d,u]=(0,o.useState)(0),p=!!(i&&d);return X(n.scrollbarX,()=>{var e;let r=(null===(e=n.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;n.onCornerHeightChange(r),u(r)}),X(n.scrollbarY,()=>{var e;let r=(null===(e=n.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;n.onCornerWidthChange(r),c(r)}),p?(0,o.createElement)(l.WV.div,(0,a.Z)({},s,{ref:r,style:{width:i,height:d,position:"absolute",right:"ltr"===n.dir?0:void 0,left:"rtl"===n.dir?0:void 0,bottom:0,...e.style}})):null});function M(e){return e?parseInt(e,10):0}function U(e,r){let t=e/r;return isNaN(t)?0:t}function I(e){let r=U(e.viewport,e.content),t=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-t)*r,18)}function Y(e,r,t="ltr"){let s=I(r),o=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,a=r.scrollbar.size-o,l=r.content-r.viewport,n=(0,f.u)(e,"ltr"===t?[0,l]:[-1*l,0]);return H([0,l],[0,a-s])(n)}function H(e,r){return t=>{if(e[0]===e[1]||r[0]===r[1])return r[0];let s=(r[1]-r[0])/(e[1]-e[0]);return r[0]+s*(t-e[0])}}let O=(e,r=()=>{})=>{let t={left:e.scrollLeft,top:e.scrollTop},s=0;return function o(){let a={left:e.scrollLeft,top:e.scrollTop},l=t.left!==a.left,n=t.top!==a.top;(l||n)&&r(),t=a,s=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(s)};function V(e,r){let t=(0,d.W)(e),s=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(s.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(t,r)},[t,r])}function X(e,r){let t=(0,d.W)(r);(0,p.b)(()=>{let r=0;if(e){let s=new ResizeObserver(()=>{cancelAnimationFrame(r),r=window.requestAnimationFrame(t)});return s.observe(e),()=>{window.cancelAnimationFrame(r),s.unobserve(e)}}},[e,t])}var F=t(11453);let $=o.forwardRef(({className:e,children:r,...t},o)=>(0,s.jsxs)(b,{ref:o,className:(0,F.cn)("relative overflow-hidden",e),...t,children:[s.jsx(y,{className:"h-full w-full rounded-[inherit]",children:r}),s.jsx(B,{}),s.jsx(k,{})]}));$.displayName=b.displayName;let B=o.forwardRef(({className:e,orientation:r="vertical",...t},o)=>s.jsx(j,{ref:o,orientation:r,className:(0,F.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",e),...t,children:s.jsx(z,{className:"relative flex-1 rounded-full bg-border"})}));B.displayName=j.displayName},50909:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Separator:()=>p});var s=t(95344),o=t(3729),a=t(65651),l=t(62409);let n="horizontal",i=["horizontal","vertical"],c=(0,o.forwardRef)((e,r)=>{let{decorative:t,orientation:s=n,...i}=e,c=d(s)?s:n;return(0,o.createElement)(l.WV.div,(0,a.Z)({"data-orientation":c},t?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},i,{ref:r}))});function d(e){return i.includes(e)}c.propTypes={orientation(e,r,t){let s=e[r],o=String(s);return s&&!d(s)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${n}\`.`):null}};var u=t(11453);let p=o.forwardRef(({className:e,orientation:r="horizontal",decorative:t=!0,...o},a)=>s.jsx(c,{ref:a,decorative:t,orientation:r,className:(0,u.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",e),...o}));p.displayName=c.displayName},99365:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var s=t(40002),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(e,r)=>{let t=(0,s.forwardRef)(({color:t="currentColor",size:l=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:c="",children:d,...u},p)=>(0,s.createElement)("svg",{ref:p,...o,width:l,height:l,stroke:t,strokeWidth:i?24*Number(n)/Number(l):n,className:["lucide",`lucide-${a(e)}`,c].join(" "),...u},[...r.map(([e,r])=>(0,s.createElement)(e,r)),...Array.isArray(d)?d:[d]]));return t.displayName=`${e}`,t}},38578:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(25036);t(40002);let o=(0,t(86843).createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/components/sidebar.tsx`),{__esModule:a,$$typeof:l}=o,n=o.default;var i=t(44551);let c=function({children:e}){return s.jsx(i.Zb,{children:(0,s.jsxs)("div",{className:"flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0",children:[s.jsx(i.Ol,{className:"-mx-4 lg:w-1/5",children:s.jsx(n,{})}),s.jsx(i.aY,{className:"flex-1 py-6 w-full",children:e})]})})}},90390:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>_});var s=t(25036),o=t(40002),a=t(44551),l=t(72245);let n=o.forwardRef(({className:e,type:r,...t},o)=>s.jsx("input",{type:r,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:o,...t}));n.displayName="Input";/**
 * @license lucide-react v0.356.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,t(99365).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var c=t(86843);let d=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/scroll-area.tsx`),{__esModule:u,$$typeof:p}=d;d.default;let f=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/scroll-area.tsx#ScrollArea`);(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/scroll-area.tsx#ScrollBar`);let m=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/avatar.tsx`),{__esModule:g,$$typeof:h}=m;m.default;let x=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/avatar.tsx#Avatar`),v=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/avatar.tsx#AvatarImage`),w=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/avatar.tsx#AvatarFallback`),b=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/separator.tsx`),{__esModule:y,$$typeof:S}=b;b.default;let j=(0,c.createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/components/ui/separator.tsx#Separator`),_=function(){return(0,s.jsxs)("div",{children:[s.jsx(a.ll,{children:"Мои сообщения"}),(0,s.jsxs)("div",{className:"flex w-full mt-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"relative",children:[s.jsx(n,{className:"pl-8 rounded-none border-r-0 border-l-0 border-b-0",placeholder:"Поиск"}),s.jsx("div",{className:"absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none",children:s.jsx(i,{size:19,className:"text-gray-500 focus:text-black"})})]}),s.jsx(f,{className:"h-[600px] w-72 rounded-t-none border border-r-0",children:s.jsx("div",{className:"",children:[{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"},{name:"Григорий",last_message:"Привет, дружище, как дела?",last_message_time:"28 янв",image_url:"/user.jpeg"}].map((e,r)=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex gap-2 items-center py-1 px-2 cursor-pointer hover:bg-gray-200 transition ease-linear",children:[(0,s.jsxs)(x,{className:"border",children:[s.jsx(v,{src:"/user.jpeg"}),s.jsx(w,{children:"AVTR"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[s.jsx("span",{className:"font-medium",children:e.name}),s.jsx("span",{className:"text-sm",children:e.last_message_time})]}),s.jsx("div",{className:"text-sm",children:e.last_message.slice(0,30)+"..."})]})]}),s.jsx(j,{className:""})]},r))})})]}),s.jsx("div",{className:"w-full max-w-[600px] mx-auto border",children:"content"})]})]})}},44551:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>n,SZ:()=>c,Zb:()=>l,aY:()=>d,eW:()=>u,ll:()=>i});var s=t(25036),o=t(40002),a=t(72245);let l=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));l.displayName="Card";let n=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...r}));n.displayName="CardHeader";let i=o.forwardRef(({className:e,...r},t)=>s.jsx("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));i.displayName="CardTitle";let c=o.forwardRef(({className:e,...r},t)=>s.jsx("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",e),...r}));c.displayName="CardDescription";let d=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("px-6 pt-0",e),...r}));d.displayName="CardContent";let u=o.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("flex items-center px-6 pt-0",e),...r}));u.displayName="CardFooter"},72245:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var s=t(70990),o=t(81774);function a(...e){return(0,o.m6)((0,s.W)(e))}},73881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var s=t(70337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},2633:(e,r,t)=>{"use strict";function s(e,[r,t]){return Math.min(t,Math.max(r,e))}t.d(r,{u:()=>s})},33320:(e,r,t)=>{"use strict";t.d(r,{Ee:()=>v,NY:()=>w,fC:()=>x});var s=t(65651),o=t(3729),a=t(98462),l=t(2256),n=t(16069),i=t(62409);let c="Avatar",[d,u]=(0,a.b)(c),[p,f]=d(c),m=(0,o.forwardRef)((e,r)=>{let{__scopeAvatar:t,...a}=e,[l,n]=(0,o.useState)("idle");return(0,o.createElement)(p,{scope:t,imageLoadingStatus:l,onImageLoadingStatusChange:n},(0,o.createElement)(i.WV.span,(0,s.Z)({},a,{ref:r})))}),g=(0,o.forwardRef)((e,r)=>{let{__scopeAvatar:t,src:a,onLoadingStatusChange:c=()=>{},...d}=e,u=f("AvatarImage",t),p=function(e){let[r,t]=(0,o.useState)("idle");return(0,n.b)(()=>{if(!e){t("error");return}let r=!0,s=new window.Image,o=e=>()=>{r&&t(e)};return t("loading"),s.onload=o("loaded"),s.onerror=o("error"),s.src=e,()=>{r=!1}},[e]),r}(a),m=(0,l.W)(e=>{c(e),u.onImageLoadingStatusChange(e)});return(0,n.b)(()=>{"idle"!==p&&m(p)},[p,m]),"loaded"===p?(0,o.createElement)(i.WV.img,(0,s.Z)({},d,{ref:r,src:a})):null}),h=(0,o.forwardRef)((e,r)=>{let{__scopeAvatar:t,delayMs:a,...l}=e,n=f("AvatarFallback",t),[c,d]=(0,o.useState)(void 0===a);return(0,o.useEffect)(()=>{if(void 0!==a){let e=window.setTimeout(()=>d(!0),a);return()=>window.clearTimeout(e)}},[a]),c&&"loaded"!==n.imageLoadingStatus?(0,o.createElement)(i.WV.span,(0,s.Z)({},l,{ref:r})):null}),x=m,v=g,w=h}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,486,337,345,381],()=>t(70061));module.exports=s})();