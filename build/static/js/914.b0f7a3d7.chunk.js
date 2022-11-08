"use strict";(self.webpackChunksocial_crud_app=self.webpackChunksocial_crud_app||[]).push([[914],{3914:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var s=n(4165),r=n(5861),a=n(4942),i=n(1413),l=n(885),o=n(3418),c=n(2791),u=n(9758),d=n(8720),m=n(8021),x=n(2298),v=n(1460),f=n(9593),h=n(184),p=function(e){var t=e.open,n=e.title,s=void 0===n?"Give a title":n,r=e.children,a=e.customPanelClasses,i=e.headerSection,l=function(){null===t||void 0===t||t.setIsOpen(!1)};return(0,h.jsx)("div",{children:(0,h.jsx)(v.u,{appear:!0,show:null===t||void 0===t?void 0:t.isOpen,as:c.Fragment,children:(0,h.jsxs)(f.V,{as:"div",className:"relative z-10",onClose:l,children:[(0,h.jsx)(v.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,h.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,h.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,h.jsx)(v.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsxs)(f.V.Panel,{className:"w-full transform overflow-hidden p-6 text-center align-middle shadow-xl transition-all ".concat(a),children:[" ",i?(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsx)(f.V.Title,{as:"h3",className:"text-xl font-medium leading-6 text-gray-900",children:s}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-right",onClick:l,children:(0,h.jsx)(x.mV,{})})})]}):null,(0,h.jsx)("div",{className:"mt-3",children:r})]})})})})]})})})},g=function(e){var t=e.comments,n=void 0===t?[]:t;return(0,h.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.map((function(e){return(0,h.jsxs)("div",{className:"flex items-center gap-1 my-2",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(x.m1,{src:"".concat(null===e||void 0===e?void 0:e.userImage),alt:null===e||void 0===e?void 0:e.userName,customClasses:"w-9 h-9"})}),(0,h.jsxs)("div",{className:"flex items-start flex-col flex-1",children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"",children:(0,h.jsx)(x.ad,{heading:null===e||void 0===e?void 0:e.userName})})}),(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsx)("div",{className:"py-1 px-2 bg-slate-200 rounded-lg block",children:(0,h.jsx)(x.go,{text:null===e||void 0===e?void 0:e.comment,customClasses:"my-1 text-normal mx-2"})}),(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)("span",{className:"cursor-pointer",children:(0,h.jsx)(x.nf,{customClasses:"w-4 h-4"})}),(0,h.jsx)("span",{className:"",children:(0,h.jsx)(x.Zp,{time:null===e||void 0===e?void 0:e.createdAt})})]})]})]})]},null===e||void 0===e?void 0:e.id)}))})},j=n(763),b=function(e){var t=e.id,n=(0,c.useState)(""),a=(0,l.Z)(n,2),i=a[0],v=a[1],f=(0,m.a)({queryKey:["comments"],queryFn:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.W.get("/api/comments/".concat(t)).then((function(e){return e.data.data})).catch((function(e){return console.error(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),p=f.isLoading,b=f.data,y=(0,o.D)({mutationKey:"mutateComments",mutationFn:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.W.post("/api/create-comment/".concat(t),n).then(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.E.invalidateQueries(["comments"]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){return v("")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e){console.log({err:e}),alert("Mutation unsuccessful!")}}),N=y.mutate,w=y.error,Z=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({comment:i});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("div",{className:"mb-3",children:(0,h.jsx)(x.nL,{heading:"Comments"})}),(0,j.size)(null===b||void 0===b?void 0:b.comments)>1?(0,h.jsx)("div",{className:"",children:(0,h.jsx)(g,{comments:null===b||void 0===b?void 0:b.comments})}):null,p?"Comment is loading":null,(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("div",{className:"my-2",children:(0,h.jsx)(x.Kx,{rows:3,customClasses:"block w-full text-sm text-gray-800 bg-white border-2 p-2 resize-none rounded-lg",handleTextarea:function(e){v(e.target.value)},value:i,placeholder:"write your comment"})}),w?(0,h.jsx)("small",{className:"text-red-700",children:w}):null,(0,h.jsx)("div",{className:"",children:(0,h.jsx)(x.T2,{title:"Publish post",customClasses:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-20 hover:bg-blue-800 disabled:bg-blue-200 disabled:hover:disabled:bg-blue-200",disabled:(0,j.size)(i)<0,handleMutate:Z})})]})]})})},y=function(e){var t,n,s,r=e.post,a=localStorage.getItem("user"),i=(0,c.useState)(!1),o=(0,l.Z)(i,2),u=o[0],d=o[1],m=(0,c.useState)(!1),v=(0,l.Z)(m,2),f=v[0],g=v[1],j=(0,c.useState)(!1),y=(0,l.Z)(j,2),N=y[0],w=y[1],Z=(0,c.useState)(0),k=(0,l.Z)(Z,2),C=(k[0],k[1]);return(0,h.jsxs)("div",{className:"bg-white shadow-lg rounded-lg my-4 ",children:[(0,h.jsxs)("div",{className:"px-4 py-6",children:[(0,h.jsxs)("div",{className:"flex items-start gap-1 mb-3",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(x.m1,{src:r.userImage,alt:"avatar"})}),(0,h.jsxs)("div",{className:"flex items-start flex-col gap-1",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(x.ad,{heading:null===r||void 0===r?void 0:r.userName})}),(0,h.jsx)(x.Zp,{time:r.createdAt})]})]}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)(x.go,{text:null===r||void 0===r?void 0:r.text,customClasses:"text-lg font-normal capitalize"}),null!==r&&void 0!==r&&r.imageName?(0,h.jsx)("div",{className:"cursor-pointer",onClick:function(){return d((function(e){return!e}))},children:(0,h.jsx)(x.Ee,{customClasses:"h-[340px] w-[100%] object-cover shadow",src:r.imageName,alt:null!==(t=r.text)&&void 0!==t?t:"Post"})}):null]}),a?(0,h.jsxs)("div",{className:"my-3 flex gap-5 items-center",children:[(0,h.jsx)("div",{className:"flex items-center mr-2 text-gray-700 text-lg cursor-pointer",onClick:function(){return g((function(e){return!e}))},children:f?(0,h.jsx)(x.SX,{}):(0,h.jsx)(x.nf,{})}),(0,h.jsx)("div",{className:"flex items-center mr-2 text-gray-700 text-lg cursor-pointer",onClick:function(){return w((function(e){return!e}))},children:N?(0,h.jsx)(x.DG,{}):(0,h.jsx)(x.k5,{})})]}):null,a?(0,h.jsx)(h.Fragment,{children:N?(0,h.jsx)("div",{className:"border-t-2 border-t-slate-200",children:(0,h.jsx)(b,{id:null===r||void 0===r?void 0:r._id,setTotalComment:C})}):null}):null]}),(0,h.jsx)(p,{open:{isOpen:u,setIsOpen:d},customPanelClasses:"max-w-[80%]",title:null!==(n=null===r||void 0===r?void 0:r.text)&&void 0!==n?n:"",children:(0,h.jsx)(x.Ee,{customClasses:"w-full",src:null===r||void 0===r?void 0:r.imageName,alt:null!==(s=null===r||void 0===r?void 0:r.text)&&void 0!==s?s:"Post"})})]})},N=function(){var e=(0,m.a)({queryKey:["posts"],queryFn:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.W.get("/api/posts").then((function(e){return e.data.data})).catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),t=(e.isLoading,e.error,e.data);return(0,h.jsx)("div",{children:function(){var e;return(0,h.jsx)("div",{className:"",children:null===t||void 0===t||null===(e=t.posts)||void 0===e?void 0:e.map((function(e,t){return(0,h.jsx)(y,{post:e},t)}))})}()})},w=function(e){var t=e.post,n=e.handlePost,s=e.handlePostSubmit,r=e.activeBtn;return(0,h.jsx)("div",{children:(0,h.jsxs)("form",{children:[(0,h.jsx)("div",{className:"flex items-center gap-2 mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600",children:(0,h.jsxs)("div",{className:"flex-1 bg-white rounded-b-lg dark:bg-gray-800",children:[(0,h.jsx)("label",{for:"editor",className:"sr-only",children:"Publish post"}),(0,h.jsx)(x.Kx,{name:"text",rows:"6",customClasses:"block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 p-2 resize-none",placeholder:"Write an post...",value:null===t||void 0===t?void 0:t.text,handleTextarea:function(e){return n(e)}})]})}),(0,h.jsx)(x.T2,{title:"Publish post",customClasses:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-20 hover:bg-blue-800 disabled:bg-blue-200 disabled:hover:disabled:bg-blue-200",disabled:!r,handleMutate:s})]})})},Z=function(){return(0,h.jsx)("div",{children:(0,h.jsx)("h1",{className:"text-xl font-medium text-center",children:"Section on process"})})},k=n(7689),C=n(1087),S=n(2596),F=function(e){var t=e.children,n=e.customClasses,s=void 0===n?"":n,r=e.menuBtnClasses,a=void 0===r?"":r,i=e.menuClasses,l=void 0===i?"":i,o=e.handleButton,u=void 0===o?function(){}:o;return(0,h.jsx)("div",{className:s,children:(0,h.jsxs)(S.v,{as:"div",className:"relative ".concat(l),children:[(0,h.jsx)("div",{children:(0,h.jsx)(S.v.Button,{className:a,children:t})}),(0,h.jsx)(v.u,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,h.jsxs)(S.v.Items,{className:"absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(S.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)(C.rU,{to:"/profile",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),children:"profile"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(S.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)(C.rU,{to:"/help",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),children:"help"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(S.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)(C.rU,{to:"/settings",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),children:"settings"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(S.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)("button",{type:"button",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),onClick:u,children:"logout"})}})})]})})]})})},I=function(){var e=(0,k.s0)(),t=JSON.parse(localStorage.getItem("user")),n=(0,c.useState)(t||null),a=(0,l.Z)(n,2),i=(a[0],a[1]),m=(0,o.D)({mutationKey:"logout",mutationFn:function(){return d.W.post("/api/logout").then((function(t){localStorage.removeItem("user"),i(null),e("/auth",{replace:!0}),u.E.invalidateQueries(["posts"])})).catch((function(e){console.log({error:e}),alert("Logout unsuccessful!")}))},onError:function(e){console.log({err:e}),alert("Logout unsuccessful!")}}).mutate;console.log();var v=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[t?(0,h.jsx)(F,{menuBtnClasses:"w-full",handleButton:v,children:(0,h.jsxs)("div",{className:"flex justify-between items-center bg-white drop-shadow-lg rounded-lg my-4 p-2",children:[(0,h.jsx)("span",{className:"text-lg font-medium",children:null===t||void 0===t?void 0:t.name}),(0,h.jsx)(x.m1,{customClasses:"w-12 h-12 rounded-full object-cover shadow",src:null===t||void 0===t?void 0:t.profileImage,alt:"Profile avatar"})]})}):(0,h.jsx)("div",{className:"",children:(0,h.jsx)(C.rU,{to:"/auth",className:"text-lg font-medium",children:(0,h.jsxs)("div",{className:"flex justify-center items-center gap-2 bg-white hover:bg-sky-700 hover:text-white drop-shadow-lg rounded-lg my-4 p-2",children:["Sign in",(0,h.jsx)(x.m5,{customClasses:"w-8 h-8"})]})})}),(0,h.jsx)("div",{})]})},P=function(){var e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,t=(0,c.useState)({text:"",file:null}),n=(0,l.Z)(t,2),m=n[0],x=n[1],v=(0,o.D)({mutationKey:"publishPost",mutationFn:function(e){return d.W.post("/api/create/post",e).then((function(e){u.E.invalidateQueries(["posts"])}))},onSuccess:function(){x((function(e){return(0,i.Z)((0,i.Z)({},e),{},{text:"",file:null})}))},onError:function(e){console.log({err:e}),alert("Mutation unsuccessful!")}}).mutate,f=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.file){e.next=7;break}return(t=new FormData).append("file",m.file),e.next=5,d.W.post("/api/upload",t);case 5:return n=e.sent,e.abrupt("return",n);case 7:return e.abrupt("return","");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.text.length>0||m.file)){e.next=7;break}return e.next=3,f();case 3:return t=e.sent,n=t?t.data.file:"",e.next=7,v({text:m.text,imageName:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_minmax(500px,_1fr)_300px] gap-4 ",children:[(0,h.jsx)("div",{className:"px-5 hidden lg:block",children:(0,h.jsx)(Z,{})}),(0,h.jsxs)("div",{className:"px-5",children:[(0,h.jsx)("div",{className:"mb-4",children:(0,h.jsx)("div",{children:(0,h.jsx)("h2",{className:"text-2xl font-medium text-center",children:"News Feed"})})}),e?(0,h.jsx)("div",{className:"",children:(0,h.jsx)(w,{post:m,handlePost:function(e){"file"!==e.target.name?x((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e.target.name,e.target.value))})):x((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e.target.name,e.target.files[0]))}))},handlePostSubmit:p,activeBtn:m.text.length>0||m.file})}):null,(0,h.jsx)("div",{className:"my-3",children:(0,h.jsx)(N,{})})]}),(0,h.jsxs)("div",{className:"px-5 hidden md:block",children:[" ",(0,h.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=914.b0f7a3d7.chunk.js.map