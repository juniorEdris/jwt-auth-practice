"use strict";(self.webpackChunksocial_crud_app=self.webpackChunksocial_crud_app||[]).push([[576],{2576:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var s=n(4165),r=n(5861),a=n(4942),i=n(1413),l=n(885),o=n(3418),c=n(2791),u=n(9758),d=n(8720),m=n(8021),x=n(2596),v=n(1460),h=n(184),f=function(e){var t=e.children,n=e.customClasses,s=void 0===n?"":n,r=e.menuBtnClasses,a=void 0===r?"":r,i=e.menuClasses,l=void 0===i?"":i,o=(e.handleEdit,e.handleDelete),u=void 0===o?function(){}:o;return(0,h.jsx)("div",{className:s,children:(0,h.jsxs)(x.v,{as:"div",className:"relative ".concat(l),children:[(0,h.jsx)("div",{children:(0,h.jsx)(x.v.Button,{className:a,children:t})}),(0,h.jsx)(v.u,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,h.jsxs)(x.v.Items,{className:"absolute right-0 mt-2 w-[185px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(x.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)("button",{type:"button",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group w-full rounded-md px-2 py-2 font-medium text-base capitalize"),onClick:u,children:"delete"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(x.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)("button",{type:"button",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group w-full rounded-md px-2 py-2 font-medium text-base capitalize"),children:"help"})}})})]})})]})})},p=n(2298),g=n(9593),j=function(e){var t=e.open,n=e.title,s=void 0===n?"Give a title":n,r=e.children,a=e.customPanelClasses,i=e.headerSection,l=function(){null===t||void 0===t||t.setIsOpen(!1)};return(0,h.jsx)("div",{children:(0,h.jsx)(v.u,{appear:!0,show:null===t||void 0===t?void 0:t.isOpen,as:c.Fragment,children:(0,h.jsxs)(g.V,{as:"div",className:"relative z-10",onClose:l,children:[(0,h.jsx)(v.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,h.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,h.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,h.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,h.jsx)(v.u.Child,{as:c.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,h.jsxs)(g.V.Panel,{className:"w-full transform overflow-hidden p-6 text-center align-middle shadow-xl transition-all ".concat(a),children:[" ",i?(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsx)(g.V.Title,{as:"h3",className:"text-xl font-medium leading-6 text-gray-900",children:s}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 text-right",onClick:l,children:(0,h.jsx)(p.mV,{})})})]}):null,(0,h.jsx)("div",{className:"mt-3",children:r})]})})})})]})})})},b=function(e){var t=e.comments,n=void 0===t?[]:t;return(0,h.jsx)("div",{className:"",children:null===n||void 0===n?void 0:n.map((function(e){return(0,h.jsxs)("div",{className:"flex items-center gap-1 my-2",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(p.m1,{src:"".concat(null===e||void 0===e?void 0:e.userImage),alt:null===e||void 0===e?void 0:e.userName,customClasses:"w-9 h-9"})}),(0,h.jsxs)("div",{className:"flex items-start flex-col flex-1",children:[(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"",children:(0,h.jsx)(p.ad,{heading:null===e||void 0===e?void 0:e.userName})})}),(0,h.jsxs)("div",{className:"w-full",children:[(0,h.jsx)("div",{className:"py-1 px-2 bg-slate-200 rounded-lg block",children:(0,h.jsx)(p.go,{text:null===e||void 0===e?void 0:e.comment,customClasses:"my-1 text-normal mx-2"})}),(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)("span",{className:"cursor-pointer",children:(0,h.jsx)(p.nf,{customClasses:"w-4 h-4"})}),(0,h.jsx)("span",{className:"",children:(0,h.jsx)(p.Zp,{time:null===e||void 0===e?void 0:e.createdAt})})]})]})]})]},null===e||void 0===e?void 0:e.id)}))})},y=n(763),N=function(e){var t=e.id,n=(0,c.useState)(""),a=(0,l.Z)(n,2),i=a[0],x=a[1],v=(0,m.a)({queryKey:["comments"],queryFn:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.W.get("/api/comments/".concat(t)).then((function(e){return e.data.data})).catch((function(e){return console.error(e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),f=v.isLoading,g=v.data,j=(0,o.D)({mutationKey:"mutateComments",mutationFn:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.W.post("/api/create-comment/".concat(t),n).then(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.E.invalidateQueries(["comments"]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){return x("")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e){console.log({err:e}),alert("Mutation unsuccessful!")}}),N=j.mutate,w=j.error,Z=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({comment:i});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("div",{className:"mb-3",children:(0,h.jsx)(p.nL,{heading:"Comments"})}),(0,y.size)(null===g||void 0===g?void 0:g.comments)>1?(0,h.jsx)("div",{className:"",children:(0,h.jsx)(b,{comments:null===g||void 0===g?void 0:g.comments})}):null,f?"Comment is loading":null,(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("div",{className:"my-2",children:(0,h.jsx)(p.Kx,{rows:3,customClasses:"block w-full text-sm text-gray-800 bg-white border-2 p-2 resize-none rounded-lg",handleTextarea:function(e){x(e.target.value)},value:i,placeholder:"write your comment"})}),w?(0,h.jsx)("small",{className:"text-red-700",children:w}):null,(0,h.jsx)("div",{className:"",children:(0,h.jsx)(p.T2,{title:"Publish post",customClasses:"focus:ring-blue-20 text-sm font-medium hover:bg-blue-800 disabled:bg-blue-200 disabled:hover:disabled:bg-blue-200 text-white bg-blue-700 ",disabled:(0,y.size)(i)<0,handleMutate:Z})})]})]})})},w=function(e){var t,n,a,i=e.post,m=localStorage.getItem("user"),x=(0,c.useState)(!1),v=(0,l.Z)(x,2),g=v[0],b=v[1],y=(0,c.useState)(!1),w=(0,l.Z)(y,2),Z=w[0],k=w[1],C=(0,c.useState)(!1),F=(0,l.Z)(C,2),S=F[0],I=F[1],P=(0,c.useState)(0),T=(0,l.Z)(P,2),z=(T[0],T[1]),D=(0,c.useState)(!1),E=(0,l.Z)(D,2),B=E[0],_=E[1],K=(0,o.D)({mutationKey:"postDelete",mutationFn:function(e){return d.W.post("/api/delete/post/".concat(e)).then(function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.E.invalidateQueries(["posts"]);case 2:return e.next=4,_((function(e){return!e}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log({error:e}),alert("Post delete unsuccessful!")}))},onError:function(e){console.log({err:e}),alert("Post delete unsuccessful!")}}),O=K.mutate,W=K.isLoading,L=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(null===i||void 0===i?void 0:i._id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"bg-white shadow-lg rounded-lg my-4 ",children:[(0,h.jsxs)("div",{className:"px-4 py-6",children:[(0,h.jsxs)("div",{className:"flex items-center gap-1 mb-3",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(p.m1,{src:i.userImage,alt:"avatar"})}),(0,h.jsxs)("div",{className:"flex items-start justify-between w-full",children:[(0,h.jsxs)("div",{className:"flex items-start flex-col gap-1",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(p.ad,{heading:null===i||void 0===i?void 0:i.userName})}),(0,h.jsx)(p.Zp,{time:i.createdAt})]}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("span",{className:"cursor-pointer",tabIndex:0,role:"button",children:(0,h.jsx)(f,{menuClasses:"w-full",handleDelete:function(){return _((function(e){return!e}))},children:(0,h.jsx)(p.wz,{})})})})]})]}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)(p.go,{text:null===i||void 0===i?void 0:i.text,customClasses:"text-lg font-normal capitalize"}),null!==i&&void 0!==i&&i.imageName?(0,h.jsx)("div",{className:"cursor-pointer",onClick:function(){return b((function(e){return!e}))},children:(0,h.jsx)(p.Ee,{customClasses:"h-[340px] w-[100%] object-cover shadow",src:i.imageName,alt:null!==(t=i.text)&&void 0!==t?t:"Post"})}):null]}),m?(0,h.jsxs)("div",{className:"my-3 flex gap-5 items-center",children:[(0,h.jsx)("div",{className:"flex items-center mr-2 text-gray-700 text-lg cursor-pointer",onClick:function(){return k((function(e){return!e}))},children:Z?(0,h.jsx)(p.SX,{}):(0,h.jsx)(p.nf,{})}),(0,h.jsx)("div",{className:"flex items-center mr-2 text-gray-700 text-lg cursor-pointer",onClick:function(){return I((function(e){return!e}))},children:S?(0,h.jsx)(p.DG,{}):(0,h.jsx)(p.k5,{})})]}):null,m?(0,h.jsx)(h.Fragment,{children:S?(0,h.jsx)("div",{className:"border-t-2 border-t-slate-200",children:(0,h.jsx)(N,{id:null===i||void 0===i?void 0:i._id,setTotalComment:z})}):null}):null]}),(0,h.jsx)(j,{open:{isOpen:g,setIsOpen:b},customPanelClasses:"max-w-[80%]",title:null!==(n=null===i||void 0===i?void 0:i.text)&&void 0!==n?n:"",children:(0,h.jsx)(p.Ee,{customClasses:"w-full",src:null===i||void 0===i?void 0:i.imageName,alt:null!==(a=null===i||void 0===i?void 0:i.text)&&void 0!==a?a:"Post"})}),(0,h.jsx)(j,{open:{isOpen:B,setIsOpen:_},customPanelClasses:"max-w-[500px] bg-white rounded-lg",title:"Delete Modal",children:(0,h.jsxs)("div",{className:"py-5",children:[(0,h.jsx)("div",{className:"mb-5",children:(0,h.jsx)(p.nL,{customClasses:"text-2xl",heading:"You want to delete this post?"})}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)(p.T2,{customClasses:"justify-center mr-3 w-[100px] focus:ring-red-20 text-sm text-white font-medium hover:bg-red-800 text-white bg-red-700",title:"Delete",handleMutate:L,disabled:W}),(0,h.jsx)(p.PZ,{title:"Cancel",customClasses:"justify-center w-[100px] focus:ring-blue-20 text-sm font-medium bg-blue-700 hover:bg-blue-800 text-white",handleClose:function(){return _((function(e){return!e}))},disabled:W})]})]})})]})},Z=function(){var e=(0,m.a)({queryKey:["posts"],queryFn:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.W.get("/api/posts").then((function(e){return e.data.data})).catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),t=(e.isLoading,e.error,e.data);return(0,h.jsx)("div",{children:function(){var e;return(0,h.jsx)("div",{className:"",children:null===t||void 0===t||null===(e=t.posts)||void 0===e?void 0:e.map((function(e,t){return(0,h.jsx)(w,{post:e},t)}))})}()})},k=function(e){var t=e.post,n=e.handlePost,s=e.handlePostSubmit,r=e.activeBtn;return(0,h.jsx)("div",{children:(0,h.jsxs)("form",{children:[(0,h.jsx)("div",{className:"flex items-center gap-2 mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600",children:(0,h.jsxs)("div",{className:"flex-1 bg-white rounded-b-lg dark:bg-gray-800",children:[(0,h.jsx)("label",{for:"editor",className:"sr-only",children:"Publish post"}),(0,h.jsx)(p.Kx,{name:"text",rows:"6",customClasses:"block w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 p-2 resize-none",placeholder:"Write an post...",value:null===t||void 0===t?void 0:t.text,handleTextarea:function(e){return n(e)}})]})}),(0,h.jsx)(p.T2,{title:"Publish post",customClasses:"inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-20 hover:bg-blue-800 disabled:bg-blue-200 disabled:hover:disabled:bg-blue-200",disabled:!r,handleMutate:s})]})})},C=function(){return(0,h.jsx)("div",{children:(0,h.jsx)("h1",{className:"text-xl font-medium text-center",children:"Section on process"})})},F=n(7689),S=n(1087),I=function(e){var t=e.children,n=e.customClasses,s=void 0===n?"":n,r=e.menuBtnClasses,a=void 0===r?"":r,i=e.menuClasses,l=void 0===i?"":i,o=e.handleButton,u=void 0===o?function(){}:o;return(0,h.jsx)("div",{className:s,children:(0,h.jsxs)(x.v,{as:"div",className:"relative ".concat(l),children:[(0,h.jsx)("div",{children:(0,h.jsx)(x.v.Button,{className:a,children:t})}),(0,h.jsx)(v.u,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,h.jsxs)(x.v.Items,{className:"absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(x.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)(S.rU,{to:"/profile",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),children:"profile"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(x.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)(S.rU,{to:"/help",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),children:"help"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(x.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)(S.rU,{to:"/settings",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),children:"settings"})}})}),(0,h.jsx)("div",{className:"px-1 py-1 ",children:(0,h.jsx)(x.v.Item,{children:function(e){var t=e.active;return(0,h.jsx)("button",{type:"button",className:"".concat(t?"bg-sky-600 text-white":"text-gray-900"," group flex w-full items-center rounded-md px-2 py-2 font-medium text-base capitalize"),onClick:u,children:"logout"})}})})]})})]})})},P=function(){var e=(0,F.s0)(),t=JSON.parse(localStorage.getItem("user")),n=(0,c.useState)(t||null),a=(0,l.Z)(n,2),i=(a[0],a[1]),m=(0,o.D)({mutationKey:"logout",mutationFn:function(){return d.W.post("/api/logout").then((function(t){localStorage.removeItem("user"),i(null),e("/auth",{replace:!0}),u.E.invalidateQueries(["posts"])})).catch((function(e){console.log({error:e}),alert("Logout unsuccessful!")}))},onError:function(e){console.log({err:e}),alert("Logout unsuccessful!")}}).mutate;console.log();var x=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{children:[t?(0,h.jsx)(I,{menuBtnClasses:"w-full",handleButton:x,children:(0,h.jsxs)("div",{className:"flex justify-between items-center bg-white drop-shadow-lg rounded-lg my-4 p-2",children:[(0,h.jsx)("span",{className:"text-lg font-medium",children:null===t||void 0===t?void 0:t.name}),(0,h.jsx)(p.m1,{customClasses:"w-12 h-12 rounded-full object-cover shadow",src:null===t||void 0===t?void 0:t.profileImage,alt:"Profile avatar"})]})}):(0,h.jsx)("div",{className:"",children:(0,h.jsx)(S.rU,{to:"/auth",className:"text-lg font-medium",children:(0,h.jsxs)("div",{className:"flex justify-center items-center gap-2 bg-white hover:bg-sky-700 hover:text-white drop-shadow-lg rounded-lg my-4 p-2",children:["Sign in",(0,h.jsx)(p.m5,{customClasses:"w-8 h-8"})]})})}),(0,h.jsx)("div",{})]})},T=function(){var e=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,t=(0,c.useState)({text:"",file:null}),n=(0,l.Z)(t,2),m=n[0],x=n[1],v=(0,o.D)({mutationKey:"publishPost",mutationFn:function(e){return d.W.post("/api/create/post",e).then((function(e){u.E.invalidateQueries(["posts"])}))},onSuccess:function(){x((function(e){return(0,i.Z)((0,i.Z)({},e),{},{text:"",file:null})}))},onError:function(e){console.log({err:e}),alert("Mutation unsuccessful!")}}).mutate,f=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.file){e.next=7;break}return(t=new FormData).append("file",m.file),e.next=5,d.W.post("/api/upload",t);case 5:return n=e.sent,e.abrupt("return",n);case 7:return e.abrupt("return","");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(m.text.length>0||m.file)){e.next=7;break}return e.next=3,f();case 3:return t=e.sent,n=t?t.data.file:"",e.next=7,v({text:m.text,imageName:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,h.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_minmax(500px,_1fr)_300px] gap-4 ",children:[(0,h.jsx)("div",{className:"px-5 hidden lg:block",children:(0,h.jsx)(C,{})}),(0,h.jsxs)("div",{className:"px-5",children:[(0,h.jsx)("div",{className:"mb-4",children:(0,h.jsx)("div",{children:(0,h.jsx)("h2",{className:"text-2xl font-medium text-center",children:"News Feed"})})}),e?(0,h.jsx)("div",{className:"",children:(0,h.jsx)(k,{post:m,handlePost:function(e){"file"!==e.target.name?x((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e.target.name,e.target.value))})):x((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,a.Z)({},e.target.name,e.target.files[0]))}))},handlePostSubmit:p,activeBtn:m.text.length>0||m.file})}):null,(0,h.jsx)("div",{className:"my-3",children:(0,h.jsx)(Z,{})})]}),(0,h.jsxs)("div",{className:"px-5 hidden md:block",children:[" ",(0,h.jsx)(P,{})]})]})}}}]);
//# sourceMappingURL=576.5e939f6f.chunk.js.map