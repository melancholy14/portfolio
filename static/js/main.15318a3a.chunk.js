(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{109:function(e,a,t){var n={"./crime-map/main.webp":110};function l(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=109},110:function(e,a,t){e.exports=t.p+"static/media/main.7a9f3872.webp"},112:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(17),o=t.n(r),c=t(5),i=(t(61),t(10)),s=t(9),m=function(e){return e.app},d=function(e){return e.profile},u=t(13);var p=function(e){var a=e.className,t=e.iconClassName,n=Object(c.c)(d),r=n.loading,o=n.data||{},i=o.blog,m=o.html_url;return l.a.createElement("div",{className:a},r&&l.a.createElement("div",null),!r&&[{href:"mailto:melancholy8914@gmail.com",Icon:s.d},{href:m,Icon:u.c},{href:i,Icon:u.d}].map((function(e){var a=e.href,n=e.Icon;return l.a.createElement("a",{key:a,href:a,target:"_blank",rel:"noopener noreferrer",className:t},l.a.createElement(n,{size:"2rem"}))})))},f=t(20);var v=function(e){var a=e.className,t=e.children,n=Object(f.a)(e,["className","children"]);return l.a.createElement("h1",Object.assign({},n,{className:"text-3xl xl:text-4xl font-jua font-bold uppercase ".concat(a||"")}),t)};var g=function(e){var a=e.show,t=e.onClose,n=e.children;return l.a.createElement("div",{className:"".concat(a?"visible":"invisible"," transition-visibility duration-75 fixed w-full h-full z-50 left-0 top-0 w-full bg-opacity-25 bg-black")},l.a.createElement("div",{className:"bg-white text-gray-800 opacity-95 ".concat(a?"w-full md:w-7/12 lg:w-5/12":"w-0"," transition-width duration-75 p-12 h-full rounded-tr-3xl rounded-br-3xl")},l.a.createElement("div",{className:"flex justify-end"},l.a.createElement("button",{type:"button",onClick:t},l.a.createElement(s.b,{size:"2rem"}))),n))},x=t(113),h=t(24),b=t(16),w=t(37),E={en:{translation:t(38)},ko:{translation:t(39)}},y=[{text:"KO",code:"ko"},{text:"EN",code:"en"}];h.a.use(w.a).use(b.e).init({resources:E,keySeparator:!1,interpolation:{escapeValue:!1}});h.a;var N=function(e){var a=e.color,t=void 0===a?"white":a,n=Object(x.a)().i18n;return l.a.createElement(l.a.Fragment,null,y.map((function(e,a){var r,o=e.text,c=e.code;return l.a.createElement("button",{type:"button",className:"border ".concat("white"===t?"border-white":""," p-2 focus:outline-none ").concat(0===a?"rounded-tl-xl rounded-bl-xl":""," ").concat(a===y.length-1?"rounded-tr-xl rounded-br-xl":""," ").concat(c===n.language?"white"===t?"bg-white text-gray-700":"bg-gray-700 text-white":""),onClick:(r=c,function(){n.changeLanguage(r)}),key:c},o)})))};var S=function(e){var a=e.show,t=e.onClose;return l.a.createElement(g,{show:a,onClose:t},l.a.createElement("div",{className:"flex flex-col justify-between h-full"},l.a.createElement("div",{className:"flex flex-col"},["skills-experience","project","about"].map((function(e){return l.a.createElement("a",{key:e,href:"#".concat(e),className:"uppercase text-4xl md:text-5xl xl:text-6xl m-4 md:m-8",onClick:t},"#".concat(e.replace("-"," & ")))}))),l.a.createElement("div",{className:"flex items-center justify-between md:justify-end"},l.a.createElement(p,{className:"flex items-center justify-start m-4 ml-2 md:hidden",iconClassName:"mx-4"}),l.a.createElement("div",{className:"block lg:hidden"},l.a.createElement(N,{color:"black"})))))};var k=function(e){var a=e.className,t=e.children,r=Object(n.useState)(!1),o=Object(i.a)(r,2),d=o[0],u=o[1],f=Object(c.c)(m).bgClassName,v=function(){return u(!d)};return l.a.createElement("div",{className:"transition duration-500 text-white font-mono\n      ".concat(f||"","\n      ").concat(a||"")},l.a.createElement("div",{className:"container"},l.a.createElement("button",{type:"button",className:"fixed top-0 left-0 m-4 lg:m-6 xl:m-12 z-20",onClick:v},l.a.createElement(s.e,{size:"3rem"})),t,l.a.createElement("div",{className:"fixed top-0 right-0 m-4 lg:m-6 xl:m-12 z-20 hidden lg:block"},l.a.createElement(N,null)),l.a.createElement(p,{className:"fixed bottom-0 left-0 m-4 lg:m-6 xl:m-12 hidden md:flex flex-col z-20",iconClassName:"my-4"})),l.a.createElement(S,{show:d,onClose:v}))};var j=function(e){var a=e.id,t=e.title,n=e.className,r=e.children;return l.a.createElement("div",{className:"w-4/5 flex flex-col ".concat(n||"")},t&&l.a.createElement(v,{id:a},t),r)},O=t(14),C=Object(O.b)({name:"app",initialState:{bgClassName:"bg-teal-900"},reducers:{setBackgroundClass:function(e,a){e.bgClassName=a.payload}}}),I=C.actions.setBackgroundClass,R=C.reducer;function T(e){var a=Object(n.useRef)(null),t=Object(c.b)();return Object(n.useEffect)((function(){var n=function(){var n=window.scrollY,l=a.current||{},r=l.offsetTop,o=void 0===r?0:r,c=l.offsetHeight,i=void 0===c?0:c;n>=o-i&&n<o+i/3&&t(I(e))};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[t,e]),{divRef:a}}var J=t(11),D=t(43),A=(t(67),[{text:"Coffee",Icon:J.a},{text:"Beer",Icon:u.b},{text:"Travel",Icon:s.a},{text:"Solving Problems",Icon:s.c}]);var W=function(){var e=Object(n.useState)(-1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)("pattern-dots-lg"),c=Object(i.a)(o,2),s=c[0],m=c[1],d=T("bg-blue-900").divRef,u=Object(x.a)().t;Object(n.useEffect)((function(){var e=setInterval((function(){r((function(a){return a===A.length-1?(clearInterval(e),a):a+1}))}),1200);return function(){clearInterval(e)}}),[]),Object(n.useEffect)((function(){var e=function(){window.innerWidth>=1280?m("pattern-dots-xl"):m("pattern-dots-lg")};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var p=function(e){return e===A.length-1};return l.a.createElement(j,{className:"h-screen m-auto"},l.a.createElement("div",{className:"relative font-jua lg:text-4xl text-2xl flex h-full",ref:d},l.a.createElement("div",{className:"w-full"},l.a.createElement("div",{className:"w-1/2 lg:w-1/3 lg:h-1/2 lg:ml-1/4 mt-1/3 lg:mt-4/33 ".concat(s," text-orange-600 uppercase")},l.a.createElement("div",{className:"text-white ml-2/5 md:ml-3/5 pt-1/3 w-7/4 md:w-33/20"},l.a.createElement("span",{className:"font-bold text-4xl md:text-5xl lg:text-6xl"},u("Misol Goh")),l.a.createElement("br",null),l.a.createElement("span",{className:"text-yellow-500 font-semibold text-3xl md:text-4xl lg:text-5xl"},u("Software Developer")),l.a.createElement("br",null),l.a.createElement("span",null,"loves"),l.a.createElement("div",{className:"h-15 text-2xl md:text-3xl lg:text-4xl"},A.map((function(e,a){var n=e.text,r=e.Icon;return l.a.createElement("div",{key:n,className:"flex items-center ".concat(a===t?"block animate__animated animate__flipInX":"hidden"," ").concat(p(a)?"text-red-300":"")},l.a.createElement("span",{className:"mr-1 lg:mr-3"},u(n)),l.a.createElement(r,null))}))),l.a.createElement("div",{className:"text-2xl py-4 h-17"},p(t)&&l.a.createElement("div",{className:"flex items-center flex-col md:flex-row animate__animated animate__zoomIn"},l.a.createElement("span",{className:"mr-3"},u("Wanna know more"),"?"),l.a.createElement("span",{className:"mr-3 font-extrabold"},u("Scroll down")),l.a.createElement(D.a,null))))))))},B=t(44),L=t(46),P=t.n(L),M={loading:!0,data:void 0,error:void 0},F=Object(O.b)({name:"profile",initialState:M,reducers:{loadRequest:function(e){e.loading=!0},loadSuccess:function(e,a){e.loading=!1,e.data=a.payload},loadFailure:function(e,a){e.loading=!1,e.error=a.payload}}}),_=F.actions,z=_.loadRequest,U=_.loadSuccess,K=_.loadFailure,Q=F.reducer;var V=function(){var e=Object(c.c)(d),a=e.loading,t=e.data,r=e.error,o=Object(c.b)(),i=Object(x.a)().t;if(Object(n.useEffect)((function(){o((function(e){e(z()),P()("https://api.github.com/users/melancholy14").then((function(a){e(U(a.data))})).catch((function(a){console.error(a),e(K(a))}))}))}),[o]),r)return l.a.createElement("div",null,"Something went wrong!");var s=t||{},m=s.avatar_url,u=s.name;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"transition duration-700 ease-in-out ".concat(a?"opacity-0 hidden":"opacity-100")},l.a.createElement("img",{src:m,className:"rounded-full mb-12 shadow-xl",alt:"avatar"}),l.a.createElement(v,{className:"xl:text-5xl"},u&&i(u)),l.a.createElement("p",{className:"flex items-center justify-center italic text-xl md:hidden"},l.a.createElement("span",{className:"ml-2"},"melancholy14@hotmail.com")),l.a.createElement(p,{className:"flex items-center justify-center my-2 md:hidden",iconClassName:"mx-4"})),a&&l.a.createElement("div",{className:"w-40 mx-auto my-20"},l.a.createElement(B.ClockLoader,{size:150})))};var G=function(){var e=Object(x.a)().t;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null,e("A well-organised and confident post-grad Software Engineer would help you to solve your problem in a nice way"),"."),l.a.createElement("hr",{className:"border-red-300 m-6"}),l.a.createElement("div",null,l.a.createElement("ul",{className:"list-disc text-xl ml-4"},[{point:"Motivating",love:"keeps myself inspiring"},{point:"Communicating",love:"keeps people updated"},{point:"Organising",love:"keeps structures easy to understand"},{point:"Self-Taught",love:"loves to learn and try it"}].map((function(a){var t=a.point,n=a.love;return l.a.createElement("li",{key:t},l.a.createElement("span",{className:"text-3xl font-jua text-orange-300"},e(t)),": ",e(n))})))),l.a.createElement("hr",{className:"border-red-300 m-6"}),l.a.createElement("div",{className:"text-xl"},e("Are you interested on me"),"?",l.a.createElement("a",{href:"mailto:melancholy14@hotmail.com",target:"_blank",rel:"noopener noreferrer",className:"mx-2 underline"},e("Send me an email")),":)")))};var q=function(){var e=T("bg-red-800").divRef;return l.a.createElement(j,{id:"about",title:"#ABOUT",className:"mx-auto mt-24 pb-12 xl:mt-40 xl:pb-20"},l.a.createElement("div",{className:"flex flex-col md:flex-row",ref:e},l.a.createElement("div",{className:"w-full md:w-1/2 lg:w-1/3 p-4 lg:p-10 text-center"},l.a.createElement(V,null)),l.a.createElement("div",{className:"w-full md:w-1/2 lg:w-2/3 p-4 lg:p-10 text-base xl:text-2xl lg:text-xl"},l.a.createElement(G,null))))},X=t(25),H=t(47);var Y=Object(n.memo)((function(e){var a=e.data,t=a.title,n=a.url,r=a.image,o=a.descriptions,c=Object(x.a)().t;return l.a.createElement("div",{className:"shadow-xl p-4 rounded-3xl relative bg-cover",style:{backgroundImage:"url(".concat(r,")")}},l.a.createElement("div",{className:"bg-white text-black lg:w-1/3 md:w-1/2 p-4 rounded-2xl opacity-75"},l.a.createElement(v,null,c(t)),n&&l.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"italic xl:text-xl lg:text-md break-all"},n),l.a.createElement("ul",{className:"p-4 pr-0 list-disc"},o.map((function(e){return l.a.createElement("li",{key:e},c(e))})))))})),$=H.map((function(e){var a=e.image,n=Object(f.a)(e,["image"]);return Object(X.a)(Object(X.a)({},n),{},{image:a&&t(109)("./".concat(a))})}));var Z=function(){var e=T("bg-green-800").divRef;return l.a.createElement(j,{id:"project",title:"#Personal Project",className:"mx-auto my-24 xl:my-40"},l.a.createElement("div",{ref:e},$.map((function(e){return l.a.createElement(Y,{key:e.id,data:e})}))))},ee=t(49),ae=t(48);var te=function(e){var a=e.data,t=a.position,r=a.company,o=a.specs,s=Object(n.useState)(!1),d=Object(i.a)(s,2),u=d[0],p=d[1],f=Object(c.c)(m).bgClassName,v=Object(x.a)().t;return l.a.createElement("div",{className:"".concat(u?"pattern-diagonal-lines-sm":""," my-4 md:mx-4 rounded-xl")},l.a.createElement("div",{className:"p-4 rounded-xl ".concat(u?"shadow-inner transform translate-x-4 -translate-y-4 ".concat("bg-orange-800"===f?"bg-red-800":"bg-indigo-800"):"shadow-2xl"),onMouseOver:function(){return p(!0)},onMouseLeave:function(){return p(!1)}},l.a.createElement("p",{className:"text-xl md:text-2xl font-bold font-jua text-yellow-500"},v(t)),l.a.createElement("p",{className:"text-lg italic"},r),l.a.createElement("hr",{className:"border-2 border-orange-500 my-3 mx-2"}),l.a.createElement("div",null,l.a.createElement("p",{className:"flex flex-wrap font-jua text-gray-200 text-xl"},o.map((function(e){return l.a.createElement("span",{key:e,className:"mx-3 font-bold italic"},v(e))}))))))};var ne=function(){var e=Object(x.a)().t;return l.a.createElement("div",{className:"text-base md:text-lg lg:text-xl flex flex-col justify-center my-4 xl:w-1/3"},l.a.createElement("p",{className:"mb-3"},e("My main area is")," ",l.a.createElement("span",{className:"text-orange-300 font-semibold"},e("the frontend development of the web")),"."),l.a.createElement("p",{className:"mb-3"},l.a.createElement("span",{className:"font-jua font-bold"},e("React"),", ",e("Javascript"),","," ",e("CSS Frameworks such as TailwindCSS"),", ",e("jQuery"))," ",e("and so on"),"."),l.a.createElement("p",{className:"mb-6"},e("In addition, I have many full-stack experiences with")," ",l.a.createElement("span",{className:"font-jua font-bold"},e("NodeJS"),", ",e("Spring Boot")," ",e("and")," ",e("WordPress")),"."),l.a.createElement("div",{className:"flex items-center justify-start"},l.a.createElement(J.g,{className:"w-12 h-12"}),l.a.createElement(J.c,{className:"w-12 h-12"}),l.a.createElement(J.f,{className:"w-12 h-12"}),l.a.createElement(J.b,{className:"w-12 h-12"}),l.a.createElement(J.e,{className:"w-12 h-12"}),l.a.createElement(J.h,{className:"w-12 h-12"}),l.a.createElement(J.d,{className:"w-12 h-12"}),l.a.createElement(u.a,{className:"w-12 h-12"})))};var le=function(){var e=Object(n.useState)(2),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),s=c[0],m=c[1],d=T("bg-orange-800").divRef;return Object(n.useEffect)((function(){window.innerWidth<768&&r(1);var e=function(){var e=2;e=window.innerWidth<=768?1:2,r(e)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){var e=[];ae.forEach((function(a,n){var l=n%t;e[l]=e[l]?[].concat(Object(ee.a)(e[l]),[a]):[a]})),m(e)}),[t]),l.a.createElement(j,{id:"skills-experience",title:"#Skills & Experience",className:"mx-auto my-24 xl:my-40"},l.a.createElement("div",{className:"flex flex-col xl:flex-row",ref:d},l.a.createElement(ne,null),l.a.createElement("div",{className:"relative flex lg:w-2/3"},s.map((function(e){return l.a.createElement("div",{key:e[0].company,className:"flex flex-col",style:{width:"calc(100%/".concat(s.length,")")}},e.map((function(e){return l.a.createElement(te,{key:e.company,data:e})})))})))))};t(111);var re=function(){return l.a.createElement("div",{className:"overflow-auto"},l.a.createElement(k,null,l.a.createElement(W,null),l.a.createElement(le,null),l.a.createElement(Z,null),l.a.createElement(q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object(O.a)({reducer:{app:R,profile:Q}});o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(c.a,{store:oe},l.a.createElement(re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e){e.exports=JSON.parse('{"Misol Goh":"Misol Goh","Software Developer":"Software Developer","Coffee":"Coffee","Beer":"Beer","Travel":"Travel","Solving Problems":"Solving Problems","Wanna know more":"Wanna know more","Scroll down":"Scroll down","My main area is":"My main area is","the frontend development of the web":"the frontend development of the web","React":"React","Javascript":"Javascript","CSS Frameworks such as TailwindCSS":"CSS Frameworks such as TailwindCSS","jQuery":"jQuery","and so on":"and so on","In addition, I have many full-stack experiences with":"In addition, I have many full-stack experiences with","NodeJS":"NodeJS","Spring Boot":"Spring Boot","and":"and","WordPress":"WordPress","Typescript":"Typescript","Redux":"Redux","BackboneJS":"BackboneJS","Java":"Java","Web Developer":"Web Developer","Software Development Engineer":"Software Development Engineer","Full-Stack Developer":"Full-Stack Developer","Vue":"Vue","Django":"Django","Cypress":"Cypress","uk crime map":"uk crime map","The React-based crime searching system using a location, criminal types, and a date.":"The React-based crime searching system using a location, criminal types, and a date.","Communicated with UK police (data.police.uk) using RESTful API":"Communicated with UK police (data.police.uk) using RESTful API","Applied LeafletJS for showing the result of search a user tried through a map":"Applied LeafletJS for showing the result of search a user tried through a map","A well-organised and confident post-grad Software Engineer would help you to solve your problem in a nice way":"A well-organised and confident post-grad Software Engineer would help you to solve your problem in a nice way.","Motivating":"Motivating","keeps myself inspiring":"keeps myself inspiring","Communicating":"Communicating","keeps people updated":"keeps people updated","Organising":"Organising","keeps structures easy to understand":"keeps structures easy to understand","Self-Taught":"Self-Taught","loves to learn and try it":"loves to learn and try it","Are you interested on me":"Are you interested on me","Send me an email":"Send me an email"}')},39:function(e){e.exports=JSON.parse('{"Misol Goh":"\uace0\ubbf8\uc194","Software Developer":"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790","Coffee":"\ucee4\ud53c","Beer":"\ub9e5\uc8fc","Travel":"\uc5ec\ud589","Solving Problems":"\ubb38\uc81c \ud574\uacb0","Wanna know more":"\ub354 \uc54c\uace0 \uc2f6\uc73c\uc2e0\uac00\uc694","Scroll down":"\uc2a4\ud06c\ub864\uc744 \ub0b4\ub824\ubcf4\uc138\uc694","My main area is":"\uba54\uc778 \uac1c\ubc1c \ubd84\uc57c\ub294","the frontend development of the web":"\uc6f9 \ud504\ub860\ud2b8\uc5d4\ub4dc\uc785\ub2c8\ub2e4","React":"\ub9ac\uc561\ud2b8","Javascript":"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8","CSS Frameworks such as TailwindCSS":"TailwindCSS \ub4f1 CSS \ud504\ub808\uc784\uc6cc\ud06c","jQuery":"\uc81c\uc774\ucffc\ub9ac","and so on":"\uadf8 \uc678 \uae30\ud0c0 \ub4f1\ub4f1","In addition, I have many full-stack experiences with":"\ub610\ud55c, \ud480\uc2a4\ud0dd \uac1c\ubc1c \uacbd\ud5d8\ub3c4 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4:","NodeJS":"\ub178\ub4dcJS","Spring Boot":"\uc2a4\ud504\ub9c1\ubd80\ud2b8","and":",","WordPress":"\uc6cc\ub4dc\ud504\ub808\uc2a4","Typescript":"\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8","Redux":"\ub9ac\ub355\uc2a4","BackboneJS":"\ubc31\ubcf8JS","Java":"\uc790\ubc14","Web Developer":"\uc6f9 \uac1c\ubc1c\uc790","Software Development Engineer":"\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4","Full-Stack Developer":"\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790","Vue":"\ubdf0","Django":"\uc7a5\uace0","Cypress":"\uc0ac\uc774\ud504\ub7ec\uc2a4","uk crime map":"uk \ubc94\uc8c4 \uc9c0\ub3c4","The React-based crime searching system using a location, criminal types, and a date.":"\uc8fc\uc18c, \ubc94\uc8c4 \uc885\ub958, \ub0a0\uc9dc\ub97c \uae30\uc900\uc73c\ub85c \uac80\uc0c9\ud560 \uc218 \uc788\ub294, \ub9ac\uc561\ud2b8 \uae30\ubc18\uc758 \ubc88\uc8c4 \uac80\uc0c9 \uc2dc\uc2a4\ud15c","Communicated with UK police (data.police.uk) using RESTful API":"UK \uacbd\ucc30\uc774 \uc81c\uacf5\ud558\ub294 \ub370\uc774\ud130 (data.police.uk)\ub97c RESTful API\ub85c \ud1b5\uc2e0","Applied LeafletJS for showing the result of search a user tried through a map":"\uac80\uc0c9 \uacb0\uacfc\ub97c \uc9c0\ub3c4 \uc704\uc5d0 \ubcf4\uc5ec\uc8fc\uae30 \uc704\ud574 LeafletJS \uc801\uc6a9","A well-organised and confident post-grad Software Engineer would help you to solve your problem in a nice way":"\uc870\uc9c1\uc801\uc774\uace0 \uacbd\ud5d8 \ub9ce\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c\uc790\uac00 \ub2f9\uc2e0\uc758 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294\ub370 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4","Motivating":"\ub3d9\uae30\ubd80\uc5ec","keeps myself inspiring":"\uc2a4\uc2a4\ub85c\ub97c \uafb8\uc900\ud788 \ub3c5\ub824\ud569\ub2c8\ub2e4.","Communicating":"\uc758\uc0ac\uc18c\ud1b5","keeps people updated":"\uc0ac\ub78c\ub4e4\uacfc \uafb8\uc900\ud788 \uc18c\ud1b5\ud569\ub2c8\ub2e4.","Organising":"\uc870\uc9c1\uc801\uc778","keeps structures easy to understand":"\uc2dc\uc2a4\ud15c\uc744 \uc774\ud574\ud558\uae30 \uc27d\uac8c \ub9cc\ub4e4\uae30 \uc704\ud574 \ub178\ub825\ud569\ub2c8\ub2e4.","Self-Taught":"\uc790\uae30\uac1c\ubc1c","loves to learn and try it":"\ubc30\uc6b0\uace0 \uc2dc\ub3c4\ud558\ub294\ub370 \uc8fc\uc800\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","Are you interested on me":"\ud639\uc2dc \uc800\uc5d0 \ub300\ud574 \ub354 \uad81\uae08\ud558\uc2e0\uac00\uc694?","Send me an email":"\uc5f0\ub77d\uc8fc\uc138\uc694"}')},47:function(e){e.exports=JSON.parse('[{"id":"crime-map","title":"uk crime map","url":"https://melancholy14.github.io/react-crime-map","image":"crime-map/main.webp","descriptions":["The React-based crime searching system using a location, criminal types, and a date.","Communicated with UK police (data.police.uk) using RESTful API","Applied LeafletJS for showing the result of search a user tried through a map"]}]')},48:function(e){e.exports=JSON.parse('[{"position":"Full-Stack Developer","company":"Databank","summary":"Part of a tech team responsible for developing and building a web application.","achievement":"","specs":["React","Typescript","Vue","Django","Cypress"]},{"position":"Web Developer","company":"Innovattic","summary":"Part of a tech team responsible for developing and building a front-end application.","achievement":"Led developing the admin panel of the micro learning system","specs":["React","Typescript","NodeJS","WordPress"]},{"position":"Software Development Engineer","company":"Trenbe","summary":"Led Front-end side of the system as a main front-end developer using React and Redux.","achievement":"By applied React, a more dynamic and flexible user interface was introduced to customers.","specs":["React","Redux","AWS"]},{"position":"Web Developer","company":"University of Southampton","summary":"Developed web interfaces for a project related to changing the platform from desktop-based into web-based; an argumentation-based analytics system.","achievement":"Led Client side of a web-based argumentation-based analytics system.","specs":["D3","BackboneJS"]},{"position":"Full-Stack Developer","company":"IMOXION Co., Ltd","summary":"Part of the technical team responsible for designing, building and maintaining an email system","achievement":"Applied CKEditor to the system resulting in improved performance on writing an email","specs":["Java","Spring Boot","jQuery"]}]')},50:function(e,a,t){e.exports=t(112)},61:function(e,a,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.15318a3a.chunk.js.map