(()=>{var e={};e.id=924,e.ids=[924],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},52609:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=t(50482),i=t(69108),a=t(62563),o=t.n(a),l=t(68300),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(r,n);let c=["",{children:["(route)",{children:["profile",{children:["favourites",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,543)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/favourites/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,38578)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,44009)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/favourites/page.tsx"],u="/(route)/profile/favourites/page",p={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(route)/profile/favourites/page",pathname:"/profile/favourites",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7301:(e,r,t)=>{Promise.resolve().then(t.bind(t,34180))},47845:(e,r,t)=>{Promise.resolve().then(t.bind(t,59372))},34180:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(95344);t(3729);var i=t(14871),a=t(23673),o=t(50909),l=t(56506),n=t(8428),c=t(87548);let d=function(){(0,n.usePathname)();let{isSignedIn:e,user:r}=(0,c.aF)();return r?e?(0,s.jsxs)("aside",{className:"flex flex-col gap-3 p-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)(i.Avatar,{className:"border w-20 h-20",children:[s.jsx(i.AvatarImage,{src:r?.imageUrl}),s.jsx(i.AvatarFallback,{children:r?.firstName})]}),s.jsx(a.ll,{children:r?.firstName?r.firstName:r?.username}),(0,s.jsxs)("div",{className:"flex gap-3 items-center justify-around",children:[s.jsx("span",{children:"0,0"}),s.jsx("span",{className:"w-[65px]",children:"Нет отзывов"})]})]}),s.jsx(o.Separator,{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx(l.default,{href:"/profile/posts",children:"Мои объявления"}),s.jsx(l.default,{href:"/profile/reviews",children:"Мои отзывы"}),s.jsx(l.default,{href:"/profile/favourites",children:"Избранное"})]}),s.jsx(o.Separator,{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx(l.default,{href:"/profile/messages",children:"Сообщения"}),s.jsx(l.default,{href:"/profile/notifications",children:"Уведомления"})]}),s.jsx(o.Separator,{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx(l.default,{href:"/profile/management",children:"Управление профилем"}),s.jsx(l.default,{href:"/profile/settings",children:"Настройки"})]})]}):s.jsx("div",{className:"h-[80vh] bg-gray-300",children:"Loading..."}):null}},59372:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(95344),i=t(3729),a=t(23673),o=t(87548),l=t(97381),n=t(70751);let c=function(){let[e,r]=(0,i.useState)([]),{user:t}=(0,o.aF)();(0,i.useEffect)(()=>{t&&c()},[t]);let c=()=>{l.Z.getFavoritesPostsByUserId(t?.id).then(e=>{r(e?.data.data)})};return t?(0,s.jsxs)("div",{className:"w-full",children:[s.jsx(a.ll,{className:"mb-5",children:"Избранные объявления"}),s.jsx("div",{className:"w-full flex flex-col gap-5",children:e.length>0&&e.map((e,r)=>s.jsx(n.Z,{post:e},r))})]}):null}},50909:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Separator:()=>p});var s=t(95344),i=t(3729),a=t(65651),o=t(62409);let l="horizontal",n=["horizontal","vertical"],c=(0,i.forwardRef)((e,r)=>{let{decorative:t,orientation:s=l,...n}=e,c=d(s)?s:l;return(0,i.createElement)(o.WV.div,(0,a.Z)({"data-orientation":c},t?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},n,{ref:r}))});function d(e){return n.includes(e)}c.propTypes={orientation(e,r,t){let s=e[r],i=String(s);return s&&!d(s)?Error(`Invalid prop \`orientation\` of value \`${i}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${l}\`.`):null}};var u=t(11453);let p=i.forwardRef(({className:e,orientation:r="horizontal",decorative:t=!0,...i},a)=>s.jsx(c,{ref:a,decorative:t,orientation:r,className:(0,u.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",e),...i}));p.displayName=c.displayName},543:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>i,default:()=>o});let s=(0,t(86843).createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/favourites/page.tsx`),{__esModule:i,$$typeof:a}=s,o=s.default},38578:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var s=t(25036);t(40002);let i=(0,t(86843).createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/profile/components/sidebar.tsx`),{__esModule:a,$$typeof:o}=i,l=i.default;var n=t(44551);let c=function({children:e}){return s.jsx(n.Zb,{children:(0,s.jsxs)("div",{className:"flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0",children:[s.jsx(n.Ol,{className:"-mx-4 lg:w-1/5",children:s.jsx(l,{})}),s.jsx(n.aY,{className:"flex-1 py-6 w-full",children:e})]})})}},44551:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>l,SZ:()=>c,Zb:()=>o,aY:()=>d,eW:()=>u,ll:()=>n});var s=t(25036),i=t(40002),a=t(72245);let o=i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...r}));o.displayName="Card";let l=i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",e),...r}));l.displayName="CardHeader";let n=i.forwardRef(({className:e,...r},t)=>s.jsx("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));n.displayName="CardTitle";let c=i.forwardRef(({className:e,...r},t)=>s.jsx("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",e),...r}));c.displayName="CardDescription";let d=i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("px-6 pt-0",e),...r}));d.displayName="CardContent";let u=i.forwardRef(({className:e,...r},t)=>s.jsx("div",{ref:t,className:(0,a.cn)("flex items-center px-6 pt-0",e),...r}));u.displayName="CardFooter"},72245:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var s=t(70990),i=t(81774);function a(...e){return(0,i.m6)((0,s.W)(e))}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,486,337,345,608,883,48,381,17],()=>t(52609));module.exports=s})();