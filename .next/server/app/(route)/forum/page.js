(()=>{var e={};e.id=817,e.ids=[817],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},44493:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>x,tree:()=>d});var s=r(50482),a=r(69108),i=r(62563),o=r.n(i),n=r(68300),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["(route)",{children:["forum",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,89131)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/forum/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,44009)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/forum/page.tsx"],u="/(route)/forum/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(route)/forum/page",pathname:"/forum",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},35091:(e,t,r)=>{Promise.resolve().then(r.bind(r,99014))},99014:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(95344),a=r(3729),i=r(23673),o=r(11453);let n=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{className:"relative w-full overflow-auto",children:s.jsx("table",{ref:r,className:(0,o.cn)("w-full caption-bottom text-sm",e),...t})}));n.displayName="Table";let l=a.forwardRef(({className:e,...t},r)=>s.jsx("thead",{ref:r,className:(0,o.cn)("[&_tr]:border-b",e),...t}));l.displayName="TableHeader";let d=a.forwardRef(({className:e,...t},r)=>s.jsx("tbody",{ref:r,className:(0,o.cn)("[&_tr:last-child]:border-0",e),...t}));d.displayName="TableBody",a.forwardRef(({className:e,...t},r)=>s.jsx("tfoot",{ref:r,className:(0,o.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let c=a.forwardRef(({className:e,...t},r)=>s.jsx("tr",{ref:r,className:(0,o.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));c.displayName="TableRow";let u=a.forwardRef(({className:e,...t},r)=>s.jsx("th",{ref:r,className:(0,o.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));u.displayName="TableHead";let p=a.forwardRef(({className:e,...t},r)=>s.jsx("td",{ref:r,className:(0,o.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));p.displayName="TableCell",a.forwardRef(({className:e,...t},r)=>s.jsx("caption",{ref:r,className:(0,o.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption";var x=r(40883);let m=function(){let{TimeAgo:e}=(0,x.I)();return s.jsx("div",{className:"",children:(0,s.jsxs)(i.Zb,{children:[s.jsx(i.Ol,{children:s.jsx(i.ll,{children:"Форум"})}),s.jsx(i.aY,{children:(0,s.jsxs)(n,{children:[s.jsx(l,{children:(0,s.jsxs)(c,{children:[s.jsx(u,{className:"",children:"Название форума"}),s.jsx(u,{children:"Последняя активность"}),s.jsx(u,{className:"text-right",children:"Количество дискуссий"})]})}),s.jsx(d,{children:[{title:"Пластик",lastUpdate:"January 5, 2024 14:00",discussions:"23123"},{title:"Стекло",lastUpdate:"March 12, 2024 10:00",discussions:"12414"},{title:"Металл",lastUpdate:"March 12, 2024 11:00",discussions:"200"},{title:"Картон",lastUpdate:"March 11, 2024 9:00",discussions:"1234"},{title:"Бумага",lastUpdate:"March 9, 2024 17:00",discussions:"441"},{title:"Дерево",lastUpdate:"April 1, 2023 20:00",discussions:"515"}].map((t,r)=>(0,s.jsxs)(c,{children:[s.jsx(p,{className:"font-medium",children:t.title}),s.jsx(p,{children:s.jsx(e,{date:t.lastUpdate,locale:"ru"})}),s.jsx(p,{className:"text-right",children:t.discussions})]},r))})]})})]})})}},23673:(e,t,r)=>{"use strict";r.d(t,{Ol:()=>n,Zb:()=>o,aY:()=>d,ll:()=>l});var s=r(95344),a=r(3729),i=r(11453);let o=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));o.displayName="Card";let n=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));n.displayName="CardHeader";let l=a.forwardRef(({className:e,...t},r)=>s.jsx("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));l.displayName="CardTitle",a.forwardRef(({className:e,...t},r)=>s.jsx("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let d=a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("px-6 pt-0",e),...t}));d.displayName="CardContent",a.forwardRef(({className:e,...t},r)=>s.jsx("div",{ref:r,className:(0,i.cn)("flex items-center px-6 pt-0",e),...t})).displayName="CardFooter"},89131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>a,default:()=>o});let s=(0,r(86843).createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/forum/page.tsx`),{__esModule:a,$$typeof:i}=s,o=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(70337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,486,337,883,381],()=>r(44493));module.exports=s})();