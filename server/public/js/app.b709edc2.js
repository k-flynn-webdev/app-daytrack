(function(t){function e(e){for(var n,a,r=e[0],u=e[1],c=e[2],p=0,f=[];p<r.length;p++)a=r[p],i[a]&&f.push(i[a][0]),i[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,r=1;r<s.length;r++){var u=s[r];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0064":function(t,e,s){"use strict";var n=s("05d8"),i=s.n(n);i.a},"00c7":function(t,e,s){"use strict";var n=s("d5ca"),i=s.n(n);i.a},"034f":function(t,e,s){"use strict";var n=s("64a9"),i=s.n(n);i.a},"03c0":function(t,e,s){},"05d8":function(t,e,s){},"143e":function(t,e,s){},"1c3d":function(t,e,s){"use strict";var n=s("7252"),i=s.n(n);i.a},"23a4":function(t,e,s){},"2aab":function(t,e,s){"use strict";var n=s("a176"),i=s.n(n);i.a},"2dd7":function(t,e,s){},"2fb8":function(t,e,s){"use strict";var n=s("ea4e"),i=s.n(n);i.a},3145:function(t,e,s){},"32b7":function(t,e,s){"use strict";var n=s("03c0"),i=s.n(n);i.a},"42f7":function(t,e,s){},5681:function(t,e,s){"use strict";var n=s("a5f9"),i=s.n(n);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("notification",{attrs:{session:this.$message.session}}),s("keep-alive",[s("nav-bar",{attrs:{session:this.$auth.session}})],1),s("router-view")],1)},o=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{attrs:{id:"navbar"}},[s("div",{staticClass:"toggle hover-scale",class:t.burgerState,on:{click:t.toggle}},[s("span",{staticClass:"span-1"}),s("span",{staticClass:"span-2"}),s("span",{staticClass:"span-3"})]),s("router-link",{staticClass:"bar-logo colour-text-light",attrs:{to:"/"}},[s("svg",{staticClass:"colour-navbar",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.4"},attrs:{height:"100%",viewBox:"0 0 30 60",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{staticClass:"colour-navbar",attrs:{id:"navbar_logo_bg",d:"M30,0.027l-30,-0.027l0,44.077l3.706,4.089l4.822,1.338l1.117,7.145l6.125,3.31l14.23,0.059l0,-59.991Z"}}),s("path",{staticClass:"text-light",staticStyle:{"fill-rule":"nonzero"},attrs:{id:"navbar_logo",d:"M15.77,59.959c-3.58,-0.233 -9.379,-1.663 -9.21,-9.738c-4.373,-0.662 -6.56,-3.061 -6.56,-7.196c0,-0.874 0.093,-1.815 0.278,-2.822l1.63,-9.145c1.193,-6.705 5.513,-10.058 12.961,-10.058c6.414,0 9.621,2.491 9.621,7.474c0,0.795 -0.079,1.657 -0.238,2.584l-1.63,9.145c-0.53,3.074 -1.624,5.44 -3.28,7.096c-1.657,1.657 -3.969,2.657 -6.938,3.002c-0.06,6.66 3.944,6.408 5.746,6.408l0,0.007l11.85,0.026l0,3.265l-11.85,-0.018l0,0.003c-0.367,0 -2.302,-0.016 -2.38,-0.033Zm-5.036,-15.662c1.326,0 2.386,-0.331 3.181,-0.993c0.795,-0.663 1.352,-1.882 1.67,-3.658l1.431,-8.031c0.079,-0.504 0.119,-0.954 0.119,-1.352c0,-2.067 -1.113,-3.101 -3.339,-3.101c-2.73,0.053 -4.347,1.538 -4.851,4.453l-1.391,8.031c-0.106,0.636 -0.159,1.299 -0.159,1.988c0,1.776 1.113,2.663 3.339,2.663Z"}})])]),s("div",{staticClass:"bar-fill-right"}),s("div",{staticClass:"content",class:{"is-active":t.contentState},on:{click:t.click}},[t.isLoggedIn?s("navbar-link",{attrs:{link:t.user_navbar()}}):t._e(),t._l(t.links_current,function(t){return s("navbar-link",{key:t.id,attrs:{link:t}})})],2)],1)},r=[],u=(s("7f7f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{staticClass:"title text-light is-link",attrs:{to:t.link.url}},[s("span",{staticClass:"is-name"},[t._v(" "+t._s(t.link.username)+" ")]),s("span",{staticClass:"is-title"},[t._v(" "+t._s(t.link.title)+" ")]),s("i",{class:t.link.icon})])}),c=[],l={name:"NavbarLink",props:{link:{username:String,title:String,icon:String,url:String}}},p=l,f=(s("e743"),s("2877")),d=Object(f["a"])(p,u,c,!1,null,null,null),m=d.exports,h={data:function(){return{contentState:!1,session_local:this.session,burgerState:"bars",links_non_user:[{title:"about",url:"/about",icon:"fab fa-uikit"},{title:"login",url:"/login",icon:"fab fa-uikit"},{title:"register",url:"/register",icon:"fab fa-uikit"}],links_user:[{title:"logout",url:"/logout",icon:"fab fa-uikit"}],links_current:[]}},props:{session:Object},computed:{isLoggedIn:function(){return this.session_local.active?this.user_login():this.user_logout(),this.session_local.active},username:function(){return this.user_name()}},methods:{toggle:function(t){this.contentState?this.close():this.open()},open:function(t){this.contentState=!0,this.burgerState="cross",setTimeout(function(){document.addEventListener("click",this.close)}.bind(this),200)},close:function(t){this.contentState=!1,this.burgerState="bars",document.removeEventListener("click",this.close)},click:function(t){this.contentState&&this.close()},user_name:function(){return void 0!==this.session_local.user?this.session_local.user.name:"none"},user_login:function(){this.links_current=this.links_user},user_logout:function(){this.links_current=this.links_non_user},user_navbar:function(){return{username:this.username,title:"",url:"/account",icon:"fab fa-uikit"}}},components:{"navbar-link":m}},g=h,v=(s("f733"),Object(f["a"])(g,a,r,!1,null,null,null)),_=v.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show_message?s("c-popup",{class:t.getClasses,attrs:{onClick:t.closeMessage}},[s("p",{attrs:{slot:"header"},slot:"header"},[t._v(" "+t._s(t.current_message.title)+" ")]),s("p",{staticClass:"text text-small number ",attrs:{slot:"options"},slot:"options"},[t._v(" "+t._s(t.numberOfMessages)+" ")]),s("p",{staticClass:"text"},[t._v(t._s(t.current_message.message))])]):t._e()},w=[],k=(s("6b54"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popup",staticClass:"test popup-fill",staticStyle:{"z-index":"50"}},[s("div",{staticClass:"fill-all shade",on:{click:t.clicked}}),s("div",{staticClass:"panel center-auto-h width-95 shadow",staticStyle:{position:"relative","z-index":"10"}},[s("header",[s("p",{staticClass:"title text-uppercase text-med"},[t._t("header")],2),t._t("options")],2),s("main",[t._t("default")],2),s("footer",[s("p",{staticClass:"text"},[t._t("footer")],2)])])])}),x=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel center-auto-h width-90 shadow"},[s("header",{class:{"no-split":t.no_split}},[s("p",{staticClass:"title text-uppercase text-blur"},[t._t("header")],2),t._t("options")],2),s("main",[t._t("default")],2),t._t("no-margin"),s("footer",[s("p",{staticClass:"text"},[t._t("footer")],2)])],2)},y=[];s("2dd7");var $={name:"cPanel",props:{no_split:Boolean}},S=$,T=Object(f["a"])(S,C,y,!1,null,null,null),O=T.exports;s("2dd7");var E={name:"cPopUp",data:function(){return{show:!1}},props:{onClick:Function},methods:{clicked:function(){void 0!==this.onClick&&this.onClick()}},mounted:function(){document.body.appendChild(this.$refs.popup)},components:{"c-panel":O}},I=E,q=(s("66f5"),Object(f["a"])(I,k,x,!1,null,"7864934d",null)),j=q.exports,P={name:"cNotification",props:{session:Object},data:function(){return{session_local:this.session,current_message:Object}},computed:{show_message:function(){return this.session_local.hasMessages&&this.showMessage(),this.session_local.hasMessages},numberOfMessages:function(){return this.session_local.messageCount>1?this.session_local.messageCount.toString():""},progressBar:function(){return 100===this.current_message.progress&&setTimeout(this.closeMessage,300),this.current_message.progress+"%"},getClasses:function(){var t=[];return t.push(this.current_message.isType),t}},methods:{showMessage:function(t){this.current_message=this.session_local.messages[0]},closeMessage:function(t){this.$message.remove(this.current_message)}},components:{"c-popup":j}},D=P,N=(s("2fb8"),Object(f["a"])(D,b,w,!1,null,null,null)),M=N.exports;s("23a4"),s("143e"),s("ff4e");var A={name:"App",created:function(){this.$request.set_SecureKey(this.$auth.session.token)},mounted:function(){document.title="day tracker"},components:{"nav-bar":_,notification:M}},R=A,L=(s("034f"),Object(f["a"])(R,i,o,!1,null,null,null)),K=L.exports,J=s("8c4f"),F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n\tAbout\n")])},B=[],U={name:"About",data:function(){return{msg:""}}},z=U,H=Object(f["a"])(z,F,B,!1,null,"1c704579",null),Z=H.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show_delete?s("c-popup",{attrs:{onClick:t.closeDelete}},[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\tDelete Account\n\t\t")]),s("p",{staticClass:"text"},[t._v(" Are you sure you want to delete ")]),s("p",{staticClass:"text"},[t._v(" this account? ")]),s("br"),s("div",{staticClass:"flex-row flex-row-between"},[s("c-button",{attrs:{onClick:t.closeDelete,type:"button"}},[t._v("\n\t\t\t\tClose\n\t\t\t")]),s("c-button",{staticClass:"colour-negative-bg",attrs:{type:"button",onClick:t.onDelete}},[t._v("\n\t\t\t\tDelete\n\t\t\t")])],1)]):t._e(),s("c-panel",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\tAccount\n\t\t")]),s("form",{staticClass:"form",attrs:{action:"/api/account/?_method=PUT",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.isEditing?s("c-account-input",{attrs:{Input:t.AccountInfo}}):s("c-account-text",{attrs:{Input:t.AccountInfo}}),s("div",{staticClass:"flex-row flex-row-between",class:{"is-edit":!t.isEditing}},[s("c-button",{staticClass:"colour-yellow",attrs:{onClick:t.onEdit,type:"button"}},[t._v("\n\t\t\t\t\t"+t._s(t.button_undo_label)+"\n\t\t\t\t")]),s("c-button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"colour-positive-bg",class:{"is-loading":t.waiting_update},attrs:{type:"submit"}},[t._v("\n\t\t\t\t\tUpdate \n\t\t\t\t")]),s("c-button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],staticClass:"colour-negative-bg",class:{"is-loading":t.waiting_delete},attrs:{type:"button",onClick:t.showDelete}},[t._v("\n\t\t\t\t\tDelete\n\t\t\t\t")])],1)],1)]),s("c-account-opts")],1)},W=[],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-input"},[t.NameShow?s("div",{staticClass:"field"},[s("p",{staticClass:"text label"},[t._v("Name:")]),s("input",{staticClass:"text",attrs:{type:"string",name:"name",placeholder:"Name",required:t.Input.Name.isRequired},domProps:{value:t.Input.Name.value}})]):t._e(),t.EmailShow?s("div",{staticClass:"field"},[s("p",{staticClass:"text label"},[t._v("Email:")]),s("input",{staticClass:"text",attrs:{type:"email",name:"email",placeholder:"Email",required:t.Input.Email.isRequired},domProps:{value:t.Input.Email.value}})]):t._e(),t.PasswordShow?s("div",{staticClass:"field"},[s("p",{staticClass:"text label"},[t._v("Password:")]),s("input",{staticClass:"text",attrs:{type:"password",name:"password",placeholder:"Password",required:t.Input.Password.isRequired},domProps:{value:t.Input.Password.value}})]):t._e()])},Y=[],G={name:"AccountInput",props:{Input:{Name:Object,Email:Object,Password:Object}},computed:{NameShow:function(){return!(void 0===this.Input.Name||!this.Input.Name.show)},EmailShow:function(){return!(void 0===this.Input.Email||!this.Input.Email.show)},PasswordShow:function(){return!(void 0===this.Input.Password||!this.Input.Password.show)}}},Q=G,tt=(s("2aab"),Object(f["a"])(Q,X,Y,!1,null,null,null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"account-text"},[t.NameShow?s("div",{staticClass:"field"},[s("p",{staticClass:"text label"},[t._v("Name:")]),s("p",{staticClass:"text account-text-item"},[t._v("\n\t\t\t"+t._s(t.Input.Name.value)+"\n\t\t")])]):t._e(),t.EmailShow?s("div",{staticClass:"field"},[s("p",{staticClass:"text label"},[t._v("Email:")]),s("p",{staticClass:"text account-text-item"},[t._v("\n\t\t\t"+t._s(t.Input.Email.value)+"\n\t\t")])]):t._e(),t.PasswordShow?s("div",{staticClass:"field"},[s("p",{staticClass:"text label"},[t._v("Password:")]),s("p",{staticClass:"text account-text-item"},[t._v("\n\t\t\t"+t._s(t.getPassword)+"\n\t\t")])]):t._e()])},nt=[],it={name:"AccountText",props:{Input:{Name:Object,Email:Object,Password:Object}},computed:{NameShow:function(){return!(void 0===this.Input.Name||!this.Input.Name.show)},EmailShow:function(){return!(void 0===this.Input.Email||!this.Input.Email.show)},PasswordShow:function(){return!(void 0===this.Input.Password||!this.Input.Password.show)},getPassword:function(){return"hidden"}}},ot=it,at=(s("5681"),Object(f["a"])(ot,st,nt,!1,null,"d1c0f190",null)),rt=at.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show_import?s("c-popup",{attrs:{onClick:t.closeModal}},[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\tImport\n\t\t")]),s("p",{staticClass:"text"},[t._v(" Add json items to this account.")]),s("br"),s("form",{staticClass:"form",attrs:{action:"/api/transaction/import",enctype:"multipart/form-data",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onImport(e)}}},[s("div",{staticClass:"field"},[s("div",{staticClass:"flex-row flex-row-between"},[s("p",{staticClass:"text label"},[t._v("File:")]),s("input",{staticClass:"button1 text input-file text-light1",attrs:{type:"file",name:"jsonUpload",placeholder:"File",required:"true"}})])]),s("div",{staticClass:"flex-row flex-row-between"},[s("c-button",{attrs:{type:"button",onClick:t.closeModal}},[t._v("\n\t\t\t\t\tClose\n\t\t\t\t")]),s("c-button",{class:{"is-loading":t.import_waiting,"is-success":t.import_success},attrs:{type:"submit",onClick:t.onImport}},[t._v("\n\t\t\t\t\tSend\n\t\t\t\t")])],1)])]):t._e(),s("c-panel",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\t\tOptions\n\t\t")]),s("div",{staticClass:"flex-row flex-row-between"},[s("p",{staticClass:"label"},[t._v("Transactions:")]),s("c-button",{staticClass:"colour-yellow",attrs:{type:"button",onClick:t.showModal}},[t._v("\n\t\t\t\tImport\n\t\t\t")]),s("c-button",{staticClass:"colour-yellow",attrs:{type:"button",onClick:t.onExport}},[t._v("\n\t\t\t\tExport\n\t\t\t")])],1)])],1)},ct=[],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"button fade-in",on:{click:t.clicked}},[s("p",{staticClass:"text text-light"},[t._t("default",[t._v(" \n\t\t \tSubmit \n\t\t")])],2),s("span",{staticClass:"loading"}),s("span",{staticClass:"loading"}),s("span",{staticClass:"loading"})])},pt=[],ft={name:"cButton",props:{onClick:Function},methods:{clicked:function(){void 0!==this.onClick&&this.onClick()}}},dt=ft,mt=(s("98bc"),Object(f["a"])(dt,lt,pt,!1,null,null,null)),ht=mt.exports,gt={name:"cAccountOptions",data:function(){return{show_import:!1,import_waiting:!1,import_success:!1}},methods:{closeModal:function(){this.show_import=!1,this.import_waiting=!1},showModal:function(){this.show_import=!0},onImport:function(t){if(void 0!==t){var e=this;e.import_waiting=!0,this.$request.request_url_form(t,function(t,s){e.reset_button(),e.closeModal(),t?e.$message.send({isType:"error",title:"error",message:t.message}):(e.import_success=!0,setTimeout(function(){e.$message.send({isType:"",title:"Result",message:s.message})},1e3))})}},onExport:function(){},reset_button:function(){var t=this;setTimeout(function(){t.import_waiting=!1,t.import_success=!1},1e3)}},components:{"c-button":ht,"c-panel":O,"c-popup":j}},vt=gt,_t=(s("c8d6"),Object(f["a"])(vt,ut,ct,!1,null,"977b057e",null)),bt=_t.exports,wt={name:"Account",data:function(){return{isEditing:!1,button_undo_label:"edit",waiting_update:!1,waiting_delete:!1,show_delete:!1,AccountInfo:{Name:{show:!0,isRequired:!0,value:"test"},Email:{show:!0,isRequired:!0,value:"test@test.com"},Password:{show:!0,isRequired:!0,value:"password"}}}},methods:{onEdit:function(){this.isEditing=!this.isEditing,this.button_undo_label=this.isEditing?"undo":"edit"},showDelete:function(){this.show_delete=!0},closeDelete:function(){this.show_delete=!1},onSubmit:function(t){var e=this;this.waiting_update=!0,this.$request.request_url_form(t,function(t,s){if(t)return e.reset_button(),void e.$auth.user_fail(function(){e.$message.send({isType:"error",title:"error",message:t.message})});e.reset_button(),e.$auth.user_success(s.token,function(){setTimeout(function(){e.$router.push("/"),e.$request.set_SecureKey(s.token),e.$message.send({isType:"success",title:"success",message:s.message})},1e3)})})},onDelete:function(t){var e=this,s={url:"/api/account/?_method=DELETE",method:"POST",body:""};this.waiting_delete=!0,this.$request.request_url(s,function(t,s){e.reset_button(),e.closeDelete(),t?e.$message.send({isType:"error",title:"error",message:t.message}):e.$auth.logout_success(function(){e.$request.set_SecureKey(""),e.$quid_bg.force_clear(),e.$router.push("/"),e.$message.send({isType:"success",title:"success",message:s.message})})})},reset_button:function(){var t=this;setTimeout(function(){t.waiting_update=!1,t.waiting_delete=!1},2e3)}},components:{"c-account-input":et,"c-account-text":rt,"c-account-opts":bt,"c-button":ht,"c-panel":O,"c-popup":j}},kt=wt,xt=(s("1c3d"),Object(f["a"])(kt,V,W,!1,null,"f79e587a",null)),Ct=xt.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-panel",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\tAccount Login\n\t")]),s("form",{staticClass:"form",attrs:{action:"/api/account/login",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("c-account-input",{attrs:{Input:t.AccountInfo}}),s("c-button",{class:{"is-loading":t.waiting,"is-success":t.success,"is-error":t.error}})],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n\t\tDont have an account, why not \n\t\t"),s("router-link",{attrs:{to:"/register"}},[t._v("register?")])],1)])},$t=[],St={name:"Login",data:function(){return{waiting:!1,success:!1,error:!1,AccountInfo:{Name:{show:!1,isRequired:!0,value:"test"},Email:{show:!0,isRequired:!0,value:"test@test.com"},Password:{show:!0,isRequired:!0,value:"password"}}}},methods:{onSubmit:function(t){var e=this;this.waiting=!0,this.$request.request_url_form(t,function(t,s){if(t)return e.error=!0,e.reset_button(),void e.$auth.user_fail(function(){e.$message.send({isType:"error",title:"error",message:t.message})});e.success=!0,e.reset_button(),e.$auth.user_success(s.token,function(){setTimeout(function(){e.$router.push("/"),e.$request.set_SecureKey(s.token)},1e3)})})},reset_button:function(){var t=this;setTimeout(function(){t.waiting=!1,t.success=!1,t.error=!1},2e3)}},components:{"c-account-input":et,"c-button":ht,"c-panel":O}},Tt=St,Ot=Object(f["a"])(Tt,yt,$t,!1,null,null,null),Et=Ot.exports,It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-panel",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\tAccount Demo\n\t")]),s("form",{staticClass:"form",attrs:{action:"/api/account/login",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("c-account-input",{attrs:{Input:t.AccountInfo}}),s("c-button",{class:{"is-loading":t.waiting,"is-success":t.success,"is-error":t.error}})],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("\n\t\tDont have an account, why not \n\t\t"),s("router-link",{attrs:{to:"/register"}},[t._v("register?")])],1)])},qt=[],jt={name:"LoginDemo",data:function(){return{waiting:!1,success:!1,error:!1,AccountInfo:{Name:{show:!1,isRequired:!1,value:"liveDemo"},Email:{show:!0,isRequired:!0,value:"liveDemo@email.com"},Password:{show:!0,isRequired:!0,value:"liveDemoPassword"}}}},methods:{onSubmit:function(t){var e=this;this.waiting=!0,this.$request.request_url_form(t,function(t,s){if(t)return e.error=!0,e.reset_button(),void e.$auth.user_fail(function(){e.$message.send({isType:"error",title:"error",message:t.message})});e.success=!0,e.reset_button(),e.$auth.user_success(s.token,function(){setTimeout(function(){e.$router.push("/"),e.$request.set_SecureKey(s.token)},1e3)})})},reset_button:function(){var t=this;setTimeout(function(){t.waiting=!1,t.success=!1,t.error=!1},2e3)}},components:{"c-account-input":et,"c-button":ht,"c-panel":O}},Pt=jt,Dt=Object(f["a"])(Pt,It,qt,!1,null,null,null),Nt=Dt.exports,Mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-panel",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\tAccount Logout\n\t")]),s("form",{staticClass:"form",attrs:{action:"/api/account/logout",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("c-button",{class:{"is-loading":t.waiting,"is-success":t.success,"is-error":t.error}},[t._v("\n\t\t\tLogout \n\t\t")])],1),s("div",{attrs:{slot:"footer"},slot:"footer"})])},At=[],Rt={name:"Logout",data:function(){return{waiting:!1,success:!1,error:!1}},methods:{onSubmit:function(t){var e=this;this.waiting=!0,this.$request.request_url_form(t,function(t,s){if(t)return e.error=!0,e.reset_button(),void e.$auth.logout_fail(function(){e.$message.send({isType:"error",title:"error",message:t.message})});e.success=!0,e.reset_button(),e.$auth.logout_success(function(){e.$request.set_SecureKey(""),e.$message.send({isType:"success",title:"success",message:s.message}),setTimeout(function(){e.$router.push("/")},1e3)})})},reset_button:function(){var t=this;setTimeout(function(){t.waiting=!1,t.success=!1,t.error=!1},2e3)}},components:{"c-button":ht,"c-panel":O}},Lt=Rt,Kt=Object(f["a"])(Lt,Mt,At,!1,null,null,null),Jt=Kt.exports,Ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("c-panel",[s("div",{attrs:{slot:"header"},slot:"header"},[t._v("\n\t\tAccount Register\n\t")]),s("form",{staticClass:"form",attrs:{action:"/api/account/create",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("c-account-input",{attrs:{Input:t.AccountInfo}}),s("c-button",{class:{"is-loading":t.waiting,"is-success":t.success,"is-error":t.error}},[t._v("\n\t\t\t\tCreate\n\t\t\t")])],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("div",[s("p",[t._v("\n\t\t\t\tAlready have an account, \n\t\t\t\t"),s("router-link",{attrs:{to:"/login"}},[t._v("login?")])],1)]),s("div",[s("p",[t._v("\n\t\t\t\tTry a\n\t\t\t\t"),s("router-link",{attrs:{to:"/demo"}},[t._v("demo?")])],1)])])])},Bt=[],Ut={name:"Register",data:function(){return{waiting:!1,success:!1,error:!1,AccountInfo:{Name:{show:!0,isRequired:!0,value:"test"},Email:{show:!0,isRequired:!0,value:"test@test.com"},Password:{show:!0,isRequired:!0,value:"password"}}}},methods:{onSubmit:function(t){var e=this;this.waiting=!0,this.$request.request_url_form(t,function(t,s){if(t)return e.error=!0,e.reset_button(),void e.$auth.user_fail(function(){e.$message.send({isType:"error",title:"error",message:t.message})});e.success=!0,e.reset_button(),e.$message.send({isType:"success",title:"success",message:s.message}),e.$auth.user_success(s.token,function(){setTimeout(function(){e.$router.push("/"),e.$request.set_SecureKey(s.token)},1e3)})})},reset_button:function(){var t=this;setTimeout(function(){t.waiting=!1,t.success=!1,t.error=!1},2e3)}},components:{"c-account-input":et,"c-button":ht,"c-panel":O}},zt=Ut,Ht=Object(f["a"])(zt,Ft,Bt,!1,null,null,null),Zt=Ht.exports,Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{position:"relative"}},[t.isLoggedIn?[s("c-task-input"),s("c-tasks-tags")]:[s("div",[t._v(" login please ")])],s("c-app-footer")],2)},Wt=[],Xt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tasks-holder"},[s("c-tags",{attrs:{tags:t.tags}}),s("transition-group",{attrs:{name:"task",tag:"span"}},t._l(t.tasks,function(e,n){return s("c-task",{key:e.date,style:t.get_style_task(n),attrs:{input:e}})}),1)],1)},Yt=[],Gt=(s("28a5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"width-85 center-auto-h"},[s("div",{staticClass:"task"},[s("div",{staticClass:"task-content"},[s("p",{staticClass:"text"},[t._v("\n\t\t\t\t"+t._s(t.input.task)+"\n\t\t\t")])]),s("div",{staticClass:"task-bottom"},[s("div",{staticClass:"task-tags"},t._l(t.get_tags,function(e,n){return s("p",{staticClass:"tag"},[t._v("\n\t\t\t\t\t\n\t\t\t\t\t"+t._s(t.prepare_tag(e))+"\n\n\t\t\t\t")])}),0),s("p",{staticClass:"date text-small"},[t._v("\n\t\t\t\t"+t._s(t.get_date)+"\n\t\t\t")])])])])}),Qt=[],te={name:"cTrack",props:{input:Object},data:function(){return{}},computed:{get_date:function(){var t=this.input.date.split("T"),e=t[0],s=t[1].split(".");return s=s[0].split(":"),e+"\n"+s[0]+":"+s[1]},get_tags:function(){return this.input.options}},methods:{prepare_tag:function(t){var e="#"+t;return e}},mounted:function(){}},ee=te,se=(s("8d29"),Object(f["a"])(ee,Gt,Qt,!1,null,"371a6d0d",null)),ne=se.exports,ie=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition-group",{staticClass:"tags width-85 center-auto-h",attrs:{name:"tag",tag:"div"}},t._l(t.tags_all,function(e,n){return s("div",{key:e,staticClass:"tag",on:{click:function(s){return t.tag_click(e)}}},[t._v("\n\n\t\t\t"+t._s(t.prepare_tag(e))+"\n\n\t")])}),0)},oe=[];function ae(t,e,s){for(var n=0;n<s.length;n++)if(s[n]==t&&e!==n)return!0}var re={name:"cTaskTags",data:function(){return{default:["work"]}},props:{tags:Array},computed:{tags_all:function(){for(var t=[],e=0;e<this.tags.length;e++)t.push(this.tags[e]);for(var s=0;s<this.default.length;s++)ae(this.default[s],s,this.tags)||t.push(this.default[s]);return t}},methods:{perpare_default:function(){},prepare_tag:function(t){var e="#"+t;return e},tag_click:function(t){this.$root.$emit("tag-click",t)}},mounted:function(){},components:{}},ue=re,ce=(s("7e82"),Object(f["a"])(ue,ie,oe,!1,null,"51e86bf9",null)),le=ce.exports,pe={methods:{onSubmit:function(t,e,s,n,i,o){var a=null!==n&&void 0!==n,r=null!==s&&void 0!==s;r&&s.$emit("state","waiting"),e.$request.request_url(t,function(t,e){return r&&s.$emit("state","reset"),t?(r&&s.$emit("state","error"),a&&n.$emit("message",{class:"error text-negative",message:t.message}),o(t)):(r&&s.$emit("state","success"),a&&n.$emit("message",{class:"success text-positive",message:e.message}),i(e))})}}},fe={name:"cTask",mixins:[pe],data:function(){return{attrs:{action:{},timing:5e3,max_timeouts:5,max_tasks:7,max_date_range:10},state:{timeouts:0},tasks:[],tags:[]}},computed:{},methods:{init:function(){var t={url:"/api/task/"+this.get_date_range(),method:"POST",JSON:!1,body:""};this.attrs.action=t,this.tasks_submit()},tasks_submit:function(){this.onSubmit(this.attrs.action,this,null,null,this.tasks_success,this.tasks_error)},tasks_success:function(t){for(var e=Math.min(this.attrs.max_tasks,t.data.items.length),s=[],n=0;n<t.data.items.length;n++)for(var i=0;i<t.data.items[n].options.length;i++)s.push(t.data.items[n].options[i]);function o(t,e,s){return s.indexOf(t)===e}if(this.tags=s.filter(o),this.tasks.length>e)for(var a=this.tasks.length-1;a>=e;a--)this.tasks.pop();for(var r=0;r<e;r++)this.$set(this.tasks,r,t.data.items[r])},tasks_error:function(t){if(this.state.timeouts<this.attrs.max_timeouts){var e=this;setTimeout(function(){console.log("retrying connection."),e.state.timeouts+=1,e.tasks_submit()},e.attrs.timing)}},get_date_range:function(){var t=new Date;t.setDate(t.getDate()+1);var e=new Date(t).toISOString().split("T")[0],s=new Date;s.setDate(s.getDate()-this.attrs.max_date_range);var n=new Date(s).toISOString().split("T")[0];return e+"/"+n},get_style_task:function(t){var e=1/this.tasks.length;return{opacity:1-t*e}},prepare_tag:function(t){var e="#"+t;return e}},mounted:function(){this.init(),this.$root.$on("tasks-change",this.tasks_submit)},components:{"c-task":ne,"c-tags":le}},de=fe,me=(s("32b7"),Object(f["a"])(de,Xt,Yt,!1,null,"58e74385",null)),he=me.exports,ge=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-input-panel"},[s("c-panel",{attrs:{no_split:!0}},[s("div",{attrs:{slot:"header"},slot:"header"}),s("form",{staticClass:"form",attrs:{action:"/api/task/create",method:"POST"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"field row-tight"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.task,expression:"input.task"}],ref:"task",staticClass:"input-margin input-note1 text-bold text",attrs:{type:"string",name:"task",placeholder:"task"},domProps:{value:t.input.task},on:{input:function(e){e.target.composing||t.$set(t.input,"task",e.target.value)}}})]),s("div",{staticClass:"field row-tight"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input.tags,expression:"input.tags"}],ref:"options",staticClass:"input-margin input-note1 text-bold text",attrs:{type:"string",name:"options",placeholder:"Tags eg #home new, done"},domProps:{value:t.input.tags},on:{input:function(e){e.target.composing||t.$set(t.input,"tags",e.target.value)}}}),s("c-button",{class:{"is-loading":t.input_waiting,"is-success":t.input_success,"is-error":t.input_error},attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\tAdd\n\t\t\t\t\t")])],1)])])],1)},ve=[];s("a481");function _e(t,e,s){for(var n=0;n<s.length;n++)if(s[n]==t&&e!==n)return!0}function be(t){for(var e=[],s=t.split(/[,# ]+/),n=0;n<s.length;n++){var i=s[n].trim();i.length>1&&(_e(i,n,s)||e.push(i))}return e}var we={name:"cTransactionInput",data:function(){return{type:"--",input_waiting:!1,input_success:!1,input_error:!1,input:{task:"",tags:""}}},computed:{contentSign:function(){return this.input.sign>0},contentState:function(){return this.input.display}},methods:{reset:function(){this.$refs.task.value="",this.$refs.options.value=""},onClick:function(){this.input.display=!1},reset_button:function(){var t=this;setTimeout(function(){t.input_waiting=!1,t.input_success=!1,t.input_error=!1},1500)},onSubmit:function(t){var e=this;this.input_waiting=!0,this.$request.request_url_form(t,function(t,s){if(e.reset_button(),t)return console.log("error"),console.log(t),e.input_error=!0,void e.$message.send({isType:"error",title:"error",message:t.message});e.input_success=!0,e.reset(),setTimeout(function(){e.$root.$emit("tasks-change")},750)})},update_tags:function(t){var e=be(this.input.tags),s=e.indexOf(t);-1===s&&(this.input.tags+=" "+t),s>=0&&(this.input.tags=this.input.tags.replace(t,"").trim())}},components:{"c-button":ht,"c-panel":O},mounted:function(){this.$root.$on("tag-click",this.update_tags)}},ke=we,xe=(s("9563"),Object(f["a"])(ke,ge,ve,!1,null,"4460cd93",null)),Ce=xe.exports,ye=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"anim-6 colour-bg-inv"},[s("div",{staticClass:"footer-content center-auto-h"},[s("p",{staticClass:"colour-fill-bg text text-center"},[t._v("Made with \n\n\t\t\t"),s("span",[s("svg",{staticClass:"icon",attrs:{viewBox:"0 0 907 828",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[s("path",{attrs:{d:"M730.084,312.85c4.226,113.133 -40.828,236.381 -79.883,320.702c-29.137,63.033 -92.165,103.467 -161.607,103.675c-58.148,0.184 -129.832,0.398 -188.066,0.573c-68.886,0.206 -131.752,-39.215 -161.569,-101.314c-43.597,-90.793 -96.522,-224.663 -88.059,-325.713"}}),s("path",{attrs:{d:"M710,410.13l137.329,0c0,0 27.947,188.444 -226.001,233.406"}})])]),t._v("\n\t\t\tby \n\n\t\t\t"),s("a",{staticClass:"colour-fill-accent",attrs:{target:"_blank",href:"https://github.com/k-flynn-webdev"}},[t._v(" k-flynn-webdev ")])])]),s("p",{staticClass:"colour-fill-bg text app-version"},[t._v("\n\t\tv: "+t._s(t.version)+"\n\t")])])},$e=[],Se={name:"cFooter",data:function(){return{version:""}},methods:{get_version:function(){this.version="0.2.5"}},mounted:function(){this.get_version()},beforeDestroy:function(){}},Te=Se,Oe=(s("00c7"),Object(f["a"])(Te,ye,$e,!1,null,"3f453860",null)),Ee=Oe.exports,Ie={name:"Index",data:function(){return{}},computed:{isLoggedIn:function(){return void 0!==this.$auth.session&&this.$auth.session.active}},components:{"c-app-footer":Ee,"c-tasks-tags":he,"c-task-input":Ce},mounted:function(){}},qe=Ie,je=(s("6e0c"),Object(f["a"])(qe,Vt,Wt,!1,null,"be915d36",null)),Pe=je.exports,De=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("Error 404")])},Ne=[],Me={name:"Missing",data:function(){return{msg:"Welcome to Your Vue.js App"}}},Ae=Me,Re=(s("0064"),Object(f["a"])(Ae,De,Ne,!1,null,"a7397ca2",null)),Le=Re.exports;n["a"].use(J["a"]);var Ke=new J["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Index",component:Pe},{path:"/about",name:"About",component:Z},{path:"/login",name:"Login",component:Et},{path:"/demo",name:"LoginDemo",component:Nt},{path:"/logout",name:"Logout",component:Jt},{path:"/register",name:"Register",component:Zt},{path:"/account",name:"Account",component:Ct},{path:"/*",name:"Missing",component:Le}]}),Je=s("2f62");n["a"].use(Je["a"]);var Fe=new Je["a"].Store({state:{},mutations:{},actions:{}});function Be(t){if(!1===t)return!1;var e={},s=[];return s=t.split("."),e.raw=t,e.payload=JSON.parse(window.atob(s[1])),e}function Ue(t,e){if(Ge.active=t,!1===e)return Ge.user={},void(Ge.token="");Ge.user=e.payload,Ge.token=e.raw}function ze(t){ns(t),Ue(!0,Be(t))}function He(){}function Ze(){is(),Ue(!1,!1)}function Ve(t,e){return ze(t),e()}function We(t){return He(),t()}function Xe(t){return He(),Ze(),t()}function Ye(t){return He(),Ze(),t()}var Ge={active:!1,user:{},token:""},Qe={session:Ge,user_success:Ve,user_fail:We,logout_success:Xe,logout_fail:Ye},ts={install:function(t){t.prototype.$auth=Qe}};function es(){var t=!1,e=Be(ss());!1!==e&&(t=!0),Ue(t,e)}function ss(){var t=window.localStorage.getItem("tokenString");return null!==t&&t}function ns(t){window.localStorage.setItem("tokenString",t)}function is(){window.localStorage.removeItem("tokenString")}es();var os={title:"",message:"",isType:"",id:0,progress:-1,finished:!1},as=0,rs={hasMessages:!1,messageCount:0,messages:[]};function us(){return as+1}function cs(t){t.progress+=16,t.progress>100&&(t.progress=100,t.finished=!0),t.progress<=99&&setTimeout(cs,150,t)}function ls(t){var e=JSON.parse(JSON.stringify(os));if(e.id=us(),as=e.id,void 0!==t.isType||null!==t.isType){var s=t.isType.toLowerCase();e.isType="is-"+s}"is-success"===e.isType&&(e.progress=0,setTimeout(cs,250,e)),e.title=t.title,e.message=t.message,rs.messages.push(e),ds()}function ps(t){for(var e=0;e<rs.messages.length;e++)if(rs.messages[e].id===t.id){rs.messages.splice(e,1);break}ds()}function fs(){rs.hasMessages=!1,rs.messageCount=0,rs.messages=[]}function ds(){rs.messageCount=rs.messages.length,rs.messages.length>0?rs.hasMessages=!0:rs.hasMessages=!1}var ms={send:ls,remove:ps,clear:fs,session:rs},hs={install:function(t){t.prototype.$message=ms}};function gs(t,e,s,n,i){var o=new XMLHttpRequest;o.open(e,t,!0),s&&o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.setRequestHeader("Authorization","Bearer "+bs()),o.send(n),o.onload=function(){if(this.status>=200&&this.status<300)return i(null,JSON.parse(this.responseText));var t={};try{t=JSON.parse(this.responseText.toString("ascii"))}catch(s){var e=this.statusText;return 0===e.length&&(e="No network connection."),i({status:this.status,message:this.statusText})}return i(t)},o.ontimeout=function(){return i(this.response)},o.onerror=function(){var t=this.statusText;return 0===t.length&&(t="No network connection."),i({status:this.status,message:t})}}var vs="";function _s(t){vs=!(t.length<10)&&t}function bs(){return vs}function ws(t,e){t.preventDefault();var s=t.target.action,n=t.target.method,i=new FormData(t.target);gs(s,n,!1,i,function(t,s){return t?e(t):e(null,s)})}function ks(t,e){var s={};void 0!=t.body&&(s=t.body),void 0!=t.content&&(s=t.content),gs(t.url,t.method,!1,s,function(t,s){return t?e(t):e(null,s)})}var xs={request_url:ks,request_url_form:ws,set_SecureKey:_s,get_SecureKey:bs},Cs={install:function(t){t.prototype.$request=xs}};n["a"].use(ts),n["a"].use(hs),n["a"].use(Cs),n["a"].config.productionTip=!1,n["a"].config.devtools=!0,new n["a"]({router:Ke,store:Fe,render:function(t){return t(K)}}).$mount("#app")},"5bb6":function(t,e,s){},"64a9":function(t,e,s){},"66f5":function(t,e,s){"use strict";var n=s("8388"),i=s.n(n);i.a},"6e0c":function(t,e,s){"use strict";var n=s("c0aa"),i=s.n(n);i.a},7252:function(t,e,s){},"7e82":function(t,e,s){"use strict";var n=s("42f7"),i=s.n(n);i.a},8388:function(t,e,s){},"8d29":function(t,e,s){"use strict";var n=s("edbf"),i=s.n(n);i.a},9563:function(t,e,s){"use strict";var n=s("3145"),i=s.n(n);i.a},"96ce":function(t,e,s){},"98bc":function(t,e,s){"use strict";var n=s("5bb6"),i=s.n(n);i.a},a176:function(t,e,s){},a5f9:function(t,e,s){},c0aa:function(t,e,s){},c8d6:function(t,e,s){"use strict";var n=s("f661"),i=s.n(n);i.a},d5ca:function(t,e,s){},d81b:function(t,e,s){},e743:function(t,e,s){"use strict";var n=s("96ce"),i=s.n(n);i.a},ea4e:function(t,e,s){},edbf:function(t,e,s){},f661:function(t,e,s){},f733:function(t,e,s){"use strict";var n=s("d81b"),i=s.n(n);i.a},ff4e:function(t,e,s){}});
//# sourceMappingURL=app.b709edc2.js.map