"use strict";exports.id=17,exports.ids=[17],exports.modules={70751:(e,t,a)=>{a.d(t,{Z:()=>w});var s=a(95344),r=a(3729),l=a(23673),o=a(89410),i=a(76755),d=a(80508),c=a(55794),n=a(51354),f=a(14871),u=a(56506),m=a(40883),p=a(87548),h=a(97381),x=a(53330),g=a(11453);let j=x.zt,b=x.fC,v=x.xz,N=r.forwardRef(({className:e,sideOffset:t=4,...a},r)=>s.jsx(x.VY,{ref:r,sideOffset:t,className:(0,g.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a}));N.displayName=x.VY.displayName;var y=a(5203);let w=function({post:e}){var t;let{isLoaded:a,user:x}=(0,p.aF)(),[g,w]=(0,r.useState)(!1);(0,r.useEffect)(()=>{w(!1),x&&e.attributes.users_favorites?.data[0]?.attributes.identificator===x?.id&&w(!0)},[x,e]);let{TimeAgo:$}=(0,m.I)(),C=async(e,t)=>{try{let a=await h.Z.updateFavoritesByUserAndPostId(e,t);console.log(a),w(!g)}catch(e){console.error(e)}};return a?s.jsx(l.Zb,{className:"w-full rounded-xl h-[200px] transition duration-300 ease-in-out hover:shadow-lg hover:bg-opacity-50",children:(0,s.jsxs)(l.aY,{className:"flex justify-between px-0 h-full",children:[(0,s.jsxs)("div",{className:"flex h-full",children:[s.jsx("div",{className:"h-full relative w-64",children:s.jsx(o.default,{className:"rounded-l-xl",src:e.attributes.images?.data[0]?.attributes.url,alt:"photo",objectFit:"cover",layout:"fill"})}),(0,s.jsxs)("div",{className:"ml-3",children:[s.jsx(u.default,{href:`/posts?postId=${e.id}`,children:s.jsx(l.ll,{className:"my-4 w-[350px]",children:s.jsx(j,{children:(0,s.jsxs)(b,{children:[s.jsx(v,{children:(t=e.attributes.title).length>25?t.substring(0,25)+"...":t}),s.jsx(N,{children:s.jsx("p",{children:e.attributes.title})})]})})})}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)("span",{className:"font-bold text-black text-lg",children:[e.attributes.price,"₽"]}),(0,s.jsxs)("p",{children:[e.attributes.stock," шт. в наличии"]}),(0,s.jsxs)("div",{className:"flex items-center",children:[s.jsx(d.Z,{size:15})," ",e.attributes.location]}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[s.jsx(c.Z,{size:15})," ",s.jsx($,{date:e.attributes.createdAt,locale:"ru"})]})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col items-end justify-between p-5",children:[s.jsx(y.CH,{children:s.jsx(n.Z,{className:`cursor-pointer ${g&&"fill-black"}`,onClick:()=>C(e.id,x?.id)})}),(0,s.jsxs)("div",{className:"flex gap-2 mt-auto items-center",children:[(0,s.jsxs)(f.Avatar,{className:"border",children:[s.jsx(f.AvatarImage,{src:e.attributes.author?.data?.attributes?.profile_image_url}),s.jsx(f.AvatarFallback,{children:"AV"})]}),(0,s.jsxs)("div",{children:[s.jsx("p",{className:"font-medium text-black",children:e.attributes.author?.data?.attributes.first_name??e.attributes.author?.data?.attributes.username}),(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[s.jsx(({rating:e})=>{let t=[];for(let a=1;a<=5;a++)a<=Math.round(e)?t.push(s.jsx(i.Z,{size:12,className:"fill-black"},a)):t.push(s.jsx(i.Z,{size:12},a));return s.jsx("div",{className:"flex",children:t})},{rating:4}),s.jsx("span",{className:"text-sm",children:"13300"})]}),(0,s.jsxs)("span",{className:"text-sm",children:["зарегистрирован:","\n",s.jsx($,{date:e.attributes.author?.data?.attributes.createdAt,locale:"ru"})]})]})]})]})]})}):s.jsx("div",{children:"Loading..."})}},97381:(e,t,a)=>{a.d(t,{Z:()=>o});let s=a(53608).Z.create({baseURL:"http://localhost:1337/api"}),r=()=>s.get("posts?populate=*&sort=id").catch(e=>console.error("Ошибка при получении объявлений:",e)),l=async e=>{if(""===e)return r();try{let t=`
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
    `;return(await s.post("/graphql",{query:t,variables:{searchTerm:e}},{baseURL:"http://localhost:1337"})).data.data.search}catch(e){console.error("Ошибка при попытке поиска объявлений:",e)}},o={getPosts:r,getPostByPostId:e=>s.get(`posts/${e}?populate=*`).catch(e=>console.error("Ошибка при получении объявления:",e)),getCategories:()=>s.get("categories?populate=*&sort=id").catch(e=>console.error("Ошибка при получении категорий:",e)),getPostsByUserId:e=>s.get(`posts?populate=*&filters[author][identificator][$eq]=${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),uploadPhoto:e=>{let t=new FormData;return t.append("files",e),s.post("upload",t,{headers:{"Content-Type":"multipart/form-data"}})},createPost:e=>s.post("posts",{data:{...e}}).catch(e=>console.error("Ошибка при создании объявления:",e)),deletePhoto:e=>s.delete(`upload/files/${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),getFavoritesPostsByUserId:e=>s.get(`posts?populate=*&filters[users_favorites][identificator][$eq]=${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),getPostsByCategory:e=>s.get(`posts?populate=*&filters[category][name][$eq]=${e}`).catch(e=>console.error("Ошибка при получении объявлений:",e)),getUserIdByIdentificator:e=>s.get(`/users?populate=*&filters[identificator][$eq]=${e}`).catch(e=>console.error("Ошибка при получении пользователя:",e)),getPostsBySearch:l,updateFavoritesByUserAndPostId:async(e,t)=>{try{let a;let r=await s.get(`/users?filters[identificator][$eq]=${t}`);console.log(r);let l=r.data.length>0?r.data[0].id:null;if(!l){console.log("Пользователь не найден");return}let o=(await s.get(`/posts/${e}?populate=users_favorites`)).data.data.attributes.users_favorites.data;a=o.some(e=>e.id===l)?o.filter(e=>e.id!==l):[...o,{id:l}];let i=await s.put(`/posts/${e}`,{data:{users_favorites:a}});console.log("Изменения в избранных сохранены",i)}catch(e){console.error("Ошибка при обновлении списка избранных:",e)}},findOrCreateRoom:async(e,t,a)=>{try{let r=await s.get(`/rooms?filters[$and][0][users]=${e}&filters[$and][1][users]=${t}`,{headers:{Authorization:`Bearer ${a}`}});if(r.data.data.length>0)return r.data.data[0];return(r=await s.post("/rooms",{data:{users:[e,t]}})).data.data}catch(e){throw console.error("Ошибка при попытке найти или создать комнату:",e),e}},getMessages:(e,t)=>s.get(`/messages?filters[room]=${e}`,{headers:{Authorization:`Bearer ${t}`}}).catch(e=>console.error("Ошибка при получении сообщений:",e))}},14871:(e,t,a)=>{a.r(t),a.d(t,{Avatar:()=>i,AvatarFallback:()=>c,AvatarImage:()=>d});var s=a(95344),r=a(3729),l=a(33320),o=a(11453);let i=r.forwardRef(({className:e,...t},a)=>s.jsx(l.fC,{ref:a,className:(0,o.cn)("relative flex h-14 w-14 shrink-0 overflow-hidden rounded-full",e),...t}));i.displayName=l.fC.displayName;let d=r.forwardRef(({className:e,...t},a)=>s.jsx(l.Ee,{ref:a,className:(0,o.cn)("aspect-square h-full w-full",e),...t}));d.displayName=l.Ee.displayName;let c=r.forwardRef(({className:e,...t},a)=>s.jsx(l.NY,{ref:a,className:(0,o.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...t}));c.displayName=l.NY.displayName},23673:(e,t,a)=>{a.d(t,{Ol:()=>i,Zb:()=>o,aY:()=>c,ll:()=>d});var s=a(95344),r=a(3729),l=a(11453);let o=r.forwardRef(({className:e,...t},a)=>s.jsx("div",{ref:a,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));o.displayName="Card";let i=r.forwardRef(({className:e,...t},a)=>s.jsx("div",{ref:a,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",e),...t}));i.displayName="CardHeader";let d=r.forwardRef(({className:e,...t},a)=>s.jsx("h3",{ref:a,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));d.displayName="CardTitle",r.forwardRef(({className:e,...t},a)=>s.jsx("p",{ref:a,className:(0,l.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let c=r.forwardRef(({className:e,...t},a)=>s.jsx("div",{ref:a,className:(0,l.cn)("px-6 pt-0",e),...t}));c.displayName="CardContent",r.forwardRef(({className:e,...t},a)=>s.jsx("div",{ref:a,className:(0,l.cn)("flex items-center px-6 pt-0",e),...t})).displayName="CardFooter"},73881:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(70337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};