(()=>{var e={};e.id=289,e.ids=[289],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},83626:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>l,originalPathname:()=>d,pages:()=>p,routeModule:()=>g,tree:()=>u});var s=r(50482),o=r(69108),a=r(62563),i=r.n(a),n=r(68300),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);r.d(t,c);let u=["",{children:["(route)",{children:["posts",{children:["create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,43906)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/posts/create/page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,44009)),"/Users/ggg/WebstormProjects/site-v1/next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/posts/create/page.tsx"],d="/(route)/posts/create/page",l={require:r,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(route)/posts/create/page",pathname:"/posts/create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},39607:(e,t,r)=>{Promise.resolve().then(r.bind(r,49613))},49613:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(95344),o=r(3729),a=r(97381);let i=()=>{let[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{a.Z.getCategories().then(e=>{t(e?.data.data.map(e=>e.attributes?.name))})},[]),s.jsx("div",{children:s.jsx("h1",{children:"Загрузка изображений"})})}},97381:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});let s=r(53608).Z.create({baseURL:"http://localhost:1337/api"}),o=()=>s.get("posts?populate=*&sort=id").catch(e=>console.error("Ошибка при получении объявлений:",e)),a=async e=>{if(""===e)return o();try{let t=`
      query SearchPosts($searchTerm: String!) {
        search(query: $searchTerm) {
          posts {
            data {
              id
              attributes {
                title
                createdAt
                price
                stock
                location
                description
                condition
                category {
                    data {
                        attributes {
                            name
                        }
                    }
                }
                author {
                  data {
                    attributes {
                      username
                      first_name
                      last_name
                      createdAt
                      identificator
                      profile_image_url
                    }
                  }
                }
                images {
                  data {
                    attributes {
                      url
                      formats
                    }
                  }
                }
                users_favorites {
                  data {
                    attributes {
                      identificator
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;return(await s.post("/graphql",{query:t,variables:{searchTerm:e}},{baseURL:"http://localhost:1337"})).data.data.search}catch(e){console.error("Ошибка при попытке поиска объявлений:",e)}},i={getPosts:o,getPostByPostId:e=>s.get(`posts/${e}?populate=*`).catch(e=>console.error("Ошибка при получении объявления:",e)),getCategories:()=>s.get("categories?populate=*&sort=id").catch(e=>console.error("Ошибка при получении категорий:",e)),getPostsByUserId:e=>s.get(`posts?populate=*&filters[author][identificator][$eq]=${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),uploadPhoto:e=>{let t=new FormData;return t.append("files",e),s.post("upload",t,{headers:{"Content-Type":"multipart/form-data"}})},createPost:e=>s.post("posts",{data:{...e}}).catch(e=>console.error("Ошибка при создании объявления:",e)),deletePhoto:e=>s.delete(`upload/files/${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),getFavoritesPostsByUserId:e=>s.get(`posts?populate=*&filters[users_favorites][identificator][$eq]=${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),getPostsByCategory:e=>s.get(`posts?populate=*&filters[category][name][$eq]=${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),getUserIdByIdentificator:e=>s.get(`/users?populate=*&filters[identificator][$eq]=${e}`).catch(e=>console.error("Ошибка при получении пользователя:",e)),getPostsBySearch:a,updateFavoritesByUserAndPostId:async(e,t)=>{try{let r;let o=await s.get(`/users?filters[identificator][$eq]=${t}`);console.log(o);let a=o.data.length>0?o.data[0].id:null;if(!a){console.log("Пользователь не найден");return}let i=(await s.get(`/posts/${e}?populate=users_favorites`)).data.data.attributes.users_favorites.data;r=i.some(e=>e.id===a)?i.filter(e=>e.id!==a):[...i,{id:a}];let n=await s.put(`/posts/${e}`,{data:{users_favorites:r}});console.log("Изменения в избранных сохранены",n)}catch(e){console.error("Ошибка при обновлении списка избранных:",e)}},findOrCreateRoom:async(e,t,r)=>{try{let o=await s.get(`/rooms?filters[$and][0][users]=${e}&filters[$and][1][users]=${t}`,{headers:{Authorization:`Bearer ${r}`}});if(o.data.data.length>0)return o.data.data[0];return(o=await s.post("/rooms",{data:{users:[e,t]}})).data.data}catch(e){throw console.error("Ошибка при попытке найти или создать комнату:",e),e}},getMessages:(e,t)=>s.get(`/messages?filters[room]=${e}`,{headers:{Authorization:`Bearer ${t}`}}).catch(e=>console.error("Ошибка при получении сообщений:",e)),sendMessage:({roomId:e,content:t,senderId:r,token:o})=>s.post("/messages",{data:{room:e,content:t,sender:r}},{headers:{Authorization:`Bearer ${o}`}}).then(e=>e.data).catch(e=>console.error("Ошибка при отправке сообщения:",e))}},43906:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>o,default:()=>i});let s=(0,r(86843).createProxy)(String.raw`/Users/ggg/WebstormProjects/site-v1/next/src/app/(route)/posts/create/page.tsx`),{__esModule:o,$$typeof:a}=s,i=s.default},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(70337);let o=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,486,337,608,381],()=>r(83626));module.exports=s})();