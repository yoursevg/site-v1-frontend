(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95,923,21],{3385:function(n,t,e){Promise.resolve().then(e.bind(e,8317)),Promise.resolve().then(e.bind(e,8999)),Promise.resolve().then(e.bind(e,747)),Promise.resolve().then(e.bind(e,1934))},8317:function(n,t,e){"use strict";e.r(t),e.d(t,{ClientClerkProvider:function(){return l}});var r=e(5782),i=e(7907),u=e(2265),o=e(9854),c=e(4015),s=e(1797);let f=()=>{let{push:n}=(0,i.useRouter)(),[t,e]=(0,u.useTransition)(),r=(0,u.useRef)(),o=(0,u.useRef)([]);return r.current||(r.current=(t,r)=>new Promise(i=>{o.current.push(i),e(()=>{n(t,r)})})),(0,u.useEffect)(()=>{var n;t||((null==o?void 0:null===(n=o.current)||void 0===n?void 0:n.length)&&o.current.forEach(n=>n()),o.current=[])},[t]),r.current},l=n=>{let{__unstable_invokeMiddlewareOnAuthStateChange:t=!0}=n,e=(0,i.useRouter)(),l=f();(0,c.G)(()=>{window.__unstable__onBeforeSetActive=()=>{t&&(e.refresh(),e.push(window.location.href))},window.__unstable__onAfterSetActive=()=>{e.refresh()}},[]);let a=(0,s.V)({...n,navigate:l});return u.createElement(o.f,{options:a},u.createElement(r.El,{...a}))}},9854:function(n,t,e){"use strict";e.d(t,{f:function(){return o},k:function(){return u}});var r=e(2265);let i=r.createContext(void 0);i.displayName="ClerkNextOptionsCtx";let u=()=>r.useContext(i).value,o=n=>{let{children:t,options:e}=n;return r.createElement(i.Provider,{value:{value:e}},t)}},8999:function(n,t,e){"use strict";e.r(t),e.d(t,{AuthenticateWithRedirectCallback:function(){return r.vn},ClerkLoaded:function(){return r.a7},ClerkLoading:function(){return r.qI},MultisessionAppSupport:function(){return r.KM},Protect:function(){return r.Cv},RedirectToCreateOrganization:function(){return r.gM},RedirectToOrganizationProfile:function(){return r.yB},RedirectToSignIn:function(){return r.N1},RedirectToSignUp:function(){return r.C2},RedirectToUserProfile:function(){return r.sO},SignedIn:function(){return r.CH},SignedOut:function(){return r.tj}});var r=e(5782)},747:function(n,t,e){"use strict";e.r(t),e.d(t,{EmailLinkErrorCode:function(){return r._L},MagicLinkErrorCode:function(){return r.X1},WithClerk:function(){return r._E},WithSession:function(){return r.CJ},WithUser:function(){return r.Gi},isClerkAPIResponseError:function(){return r.kD},isEmailLinkError:function(){return r.G1},isKnownError:function(){return r.sZ},isMagicLinkError:function(){return r.V9},isMetamaskError:function(){return r.ZC},useAuth:function(){return r.aC},useClerk:function(){return r.ll},useEmailLink:function(){return r.E2},useMagicLink:function(){return r.jS},useOrganization:function(){return r.o8},useOrganizationList:function(){return r.eW},useOrganizations:function(){return r.qi},useSession:function(){return r.kP},useSessionList:function(){return r.xo},useSignIn:function(){return r.zq},useSignUp:function(){return r.QS},useUser:function(){return r.aF},withClerk:function(){return r.r0},withSession:function(){return r.NA},withUser:function(){return r.ns}});var r=e(5782)},1934:function(n,t,e){"use strict";e.r(t),e.d(t,{CreateOrganization:function(){return r.Gp},OrganizationList:function(){return r.Bg},OrganizationProfile:function(){return r.A},OrganizationSwitcher:function(){return r.Li},SignIn:function(){return o},SignInButton:function(){return r.$d},SignInWithMetamaskButton:function(){return r.qu},SignOutButton:function(){return r.AM},SignUp:function(){return c},SignUpButton:function(){return r.gX},UserButton:function(){return r.l8},UserProfile:function(){return r.Iw}});var r=e(5782),i=e(2265),u=e(9854);let o=n=>{let{signInUrl:t}=(0,u.k)();return t?i.createElement(r.cL,{routing:"path",path:t,...n}):i.createElement(r.cL,{...n})},c=n=>{let{signUpUrl:t}=(0,u.k)();return t?i.createElement(r.Mo,{routing:"path",path:t,...n}):i.createElement(r.Mo,{...n})}},4015:function(n,t,e){"use strict";e.d(t,{G:function(){return i}});var r=e(2265);let i="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},1797:function(n,t,e){"use strict";e.d(t,{V:function(){return i}});var r=e(9079);let i=n=>({...n,frontendApi:n.frontendApi||r.env.NEXT_PUBLIC_CLERK_FRONTEND_API||"",publishableKey:n.publishableKey||"pk_test_bmF0aW9uYWwtcmF0LTU2LmNsZXJrLmFjY291bnRzLmRldiQ",clerkJSUrl:n.clerkJSUrl||r.env.NEXT_PUBLIC_CLERK_JS,clerkJSVersion:n.clerkJSVersion||r.env.NEXT_PUBLIC_CLERK_JS_VERSION,proxyUrl:n.proxyUrl||r.env.NEXT_PUBLIC_CLERK_PROXY_URL||"",domain:n.domain||r.env.NEXT_PUBLIC_CLERK_DOMAIN||"",isSatellite:n.isSatellite||"true"===r.env.NEXT_PUBLIC_CLERK_IS_SATELLITE,signInUrl:n.signInUrl||r.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL||"",signUpUrl:n.signUpUrl||r.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL||"",afterSignInUrl:n.afterSignInUrl||"/",afterSignUpUrl:n.afterSignUpUrl||"/",sdkMetadata:{name:"@clerk/nextjs",version:"4.29.9"}})},9079:function(n,t,e){"use strict";var r,i;n.exports=(null==(r=e.g.process)?void 0:r.env)&&"object"==typeof(null==(i=e.g.process)?void 0:i.env)?e.g.process:e(3127)},3127:function(n){!function(){var t={229:function(n){var t,e,r,i=n.exports={};function u(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function c(n){if(t===setTimeout)return setTimeout(n,0);if((t===u||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:u}catch(n){t=u}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var s=[],f=!1,l=-1;function a(){f&&r&&(f=!1,r.length?s=r.concat(s):l=-1,s.length&&d())}function d(){if(!f){var n=c(a);f=!0;for(var t=s.length;t;){for(r=s,s=[];++l<t;)r&&r[l].run();l=-1,t=s.length}r=null,f=!1,function(n){if(e===clearTimeout)return clearTimeout(n);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(n);try{e(n)}catch(t){try{return e.call(null,n)}catch(t){return e.call(this,n)}}}(n)}}function p(n,t){this.fun=n,this.array=t}function h(){}i.nextTick=function(n){var t=Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];s.push(new p(n,t)),1!==s.length||f||c(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(n){return[]},i.binding=function(n){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var u=e[n]={exports:{}},o=!0;try{t[n](u,u.exports,r),o=!1}finally{o&&delete e[n]}return u.exports}r.ab="//";var i=r(229);n.exports=i}()}},function(n){n.O(0,[554,971,69,744],function(){return n(n.s=3385)}),_N_E=n.O()}]);