webpackJsonp([1],{0:function(e,t){},"3n7u":function(e,t){},"6KXt":function(e,t){},BXZX:function(e,t){},HNRE:function(e,t){},JIBf:function(e,t,r){"use strict";var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-menu",{staticClass:"el-menu-demo mainnav",staticStyle:{},attrs:{mode:"horizontal"}},[r("el-menu-item",{attrs:{index:"1"}},[r("i",{staticClass:"icon iconfont icon-shouye1"}),e._v("首页")]),e._v(" "),r("el-menu-item",{attrs:{index:"2"}},[r("i",{staticClass:"icon iconfont icon-tongxunlu"}),e._v("通讯录")]),e._v(" "),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"icon iconfont icon-gongzuotai"}),e._v("工作台\n        ")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-1"}},[e._v("职员")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-2"}},[e._v("打卡")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-3"}},[e._v("打卡")]),e._v(" "),r("el-submenu",{attrs:{index:"3-4"}},[r("template",{slot:"title"},[e._v("\n                查看\n            ")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-4-1"}},[e._v("所有职员")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-4-2"}},[e._v("往期记录")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-4-3"}},[e._v("打卡")])],2)],2),e._v(" "),r("el-menu-item",{attrs:{index:"4"}},[r("i",{staticClass:"icon iconfont icon-icon-test"}),e._v("个人中心")]),e._v(" "),r("el-menu-item",{attrs:{index:"5"}},[r("i",{staticClass:"icon iconfont icon-shezhi"}),e._v("设置")])],1)},staticRenderFns:[]};t.a=n},MGzU:function(e,t){},NHnr:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=n("7+uW"),a=n("mfsf"),i={name:"leftview",data:function(){return{isCollapse:!0,startTime:"",endTime:"",time:""}},mounted:function(){var e=document.body.clientHeight;document.getElementById("order-list").style.height=e+"px",this.startTime()},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},startTime:function(){var e=new Date,r=e.getHours(),n=e.getMinutes(),s=e.getSeconds();n=checkTime(n),s=checkTime(s),this.time=r+":"+n+":"+s,t=setTimeout("startTime()",500)},checkTime:function(e){return e<10&&(e="0"+e),e}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-tabs",{staticClass:"tableone",attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"早到榜"}},[r("el-tag",[e._v("王珍")]),e._v(" "),r("el-tag",{attrs:{type:"success"}},[e._v("张紫嫣")]),r("br"),r("br"),e._v(" "),r("el-tag",{attrs:{type:"info"}},[e._v("周婵")]),e._v(" "),r("el-tag",{attrs:{type:"warning"}},[e._v("周旭波")]),e._v(" "),r("el-tag",{attrs:{type:"danger"}},[e._v("唐宇航")])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"迟到榜"}},[r("el-tag",{attrs:{type:"danger"}},[e._v("王珍")]),e._v(" "),r("el-tag",{attrs:{type:"danger"}},[e._v("周婵")])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"日历"}},[e._v("我在做什么")]),e._v(" "),r("el-tab-pane",{attrs:{label:"该弄啥"}},[e._v("不知道了")])],1),e._v(" "),r("p",{staticClass:"work"},[r("small",[e._v("北京时间：")]),e._v(e._s(e.time)+"\r\n    ")])],1)},staticRenderFns:[]};var l=n("VU/8")(i,o,!1,function(e){n("6KXt")},null,null).exports,u={name:"office",components:{leftview:l},data:function(){return{students:[{name:"王珍",stuId:1},{name:"周婵",stuId:2},{name:"周旭波",stuId:3},{name:"唐宇航",stuId:4},{name:"张紫嫣",stuId:5}]}}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-container",[t("el-aside",{staticStyle:{width:"auto"}},[t("leftview")],1),this._v(" "),t("el-main")],1)],1)},staticRenderFns:[]};var m=n("VU/8")(u,c,!1,function(e){n("HNRE")},null,null).exports,d={name:"App",components:{mainnav:a.default,leftview:l},mounted:function(){document.body.clientHeight}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-header",[t("div",{staticClass:"head"},[t("mainnav")],1)]),this._v(" "),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]};var p=n("VU/8")(d,f,!1,function(e){n("3n7u")},null,null).exports,v=n("/ocq"),h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},h,!1,function(e){n("MGzU")},"data-v-3a1de6c6",null).exports;var _={data:function(){return{username:"",aaa:""}},methods:{asd:function(){console.log(this.username),this.aaa=this.username},open:function(){this.$notify({title:"注册成功",message:"恭喜您，加入了我们！",type:"success"})},errorinfo:function(){this.$message({message:"输入有误，请重新输入！",type:"woring"})},prompt:function(){this.$message({showClose:!0,message:"请输入您的真实有效信息"})}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginbox"},[r("form",{staticClass:"smart-green",attrs:{action:"",id:"form1"}},[e._m(0),e._v(" "),r("label",{attrs:{for:""}},[r("span",[e._v("User name:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"",id:"username",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),r("p",{staticClass:"logining"},[r("el-button",{attrs:{id:"log",plain:""},on:{click:e.open}},[r("router-link",{staticClass:"button",attrs:{plain:"",id:"button",to:"/office"}},[e._v("登录")])],1),e._v(" "),r("el-button",{attrs:{id:"register",type:"submit",plain:!0},on:{click:e.prompt}},[r("router-link",{staticClass:"button",attrs:{id:"button",to:"/register"}},[e._v("注册")])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("Please Login "),t("span",[this._v("Please fill all the texts in the fields then click the button.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("Keyword:")]),this._v(" "),t("input",{attrs:{type:"password",name:"",id:"password",placeholder:"密码"}})])}]};var b=n("VU/8")(_,g,!1,function(e){n("BXZX")},"data-v-17bae538",null).exports,F=n("SGtb"),k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{ref:"ruleForm2",staticClass:"smart-green form",attrs:{action:"",model:e.ruleForm2,onsubmit:"return validate_form(this)",method:"post"}},[e._m(0),e._v(" "),r("label",{attrs:{for:""}},[r("span",[e._v("用户名:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("label",{attrs:{for:""}},[r("span",[e._v("邮箱验证码:")]),r("input",{attrs:{id:"send",type:"button",value:"send"},on:{click:e.send}}),e._v(" "),r("input",{attrs:{type:"password",name:"",id:"PIN",placeholder:"密码"}})]),e._v(" "),r("p",{staticClass:"logining"},[r("el-button",{attrs:{id:"register",type:"submit",plain:""},on:{click:e.register}},[r("router-link",{staticClass:"button",attrs:{to:e.link,id:"button"}},[e._v("注册")])],1),e._v(" "),r("input",{staticClass:"reset",attrs:{type:"reset",value:"重置"}})],1)]),e._v(" "),r("p",{attrs:{id:"errorinfo"}},[e._v(e._s(e.regmsg))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("Register Information "),t("span",[this._v("Please fill all the texts in the fields then click the button.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("初始密码:")]),this._v(" "),t("input",{attrs:{type:"password",name:"",id:"password",placeholder:"密码"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("再次输入密码:")]),this._v(" "),t("input",{attrs:{type:"password",name:"",id:"password2",placeholder:"密码"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("QQ邮箱:")]),this._v(" "),t("input",{attrs:{type:"email",name:"",id:"QQmail",placeholder:"密码"}})])}]};var w=function(e){n("R8Xh")},y=n("VU/8")(F.a,k,!1,w,"data-v-c819302e",null).exports,x={data:function(){var e=this;return{ruleForm2:{pass:"",checkPass:"",verification:"",name:"",email:""},rules2:{pass:[{validator:function(t,r,n){""===r?n(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.ruleForm2.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],name:[{validator:function(e,t,r){if(!t)return r(new Error("用户名不能为空"))},trigger:"blur"}],email:[{validator:function(e,t,r){if(!t)return r(new Error("邮箱不能为空"))},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},$={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm2 dynamicValidateForm",staticClass:"demo-ruleForm form1",attrs:{model:e.ruleForm2,action:"","status-icon":"",rules:e.rules2,"label-width":"100px",method:"post"}},[r("p",[e._v("Register")]),e._v(" "),r("el-form-item",{attrs:{label:"用户名",required:"true",prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"username"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",required:"true",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"password"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"true",label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"input same password"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"true",label:"邮箱",prop:"email"}},[r("el-input",{attrs:{type:"email",placeholder:"QQemail"},model:{value:e.ruleForm2.email,callback:function(t){e.$set(e.ruleForm2,"email",t)},expression:"ruleForm2.email"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"true",label:"验证码",prop:"verification"}},[r("el-input",{model:{value:e.ruleForm2.checkVerification,callback:function(t){e.$set(e.ruleForm2,"checkVerification",t)},expression:"ruleForm2.checkVerification"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]};var E=n("VU/8")(x,$,!1,function(e){n("atPB")},"data-v-7f52a3e6",null).exports,P={data:function(){var e=this;return{ruleForm2:{pass:"",checkPass:"",name:"",email:""},rules2:{pass:[{validator:function(t,r,n){""===r?n(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.ruleForm2.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],Verification:[{validator:checkVerification,trigger:"blur"}],name:[{validator:function(e,t,r){if(!t)return r(new Error("用户名不能为空"))},trigger:"blur"}],email:[{validator:checkEmail,trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm2 dynamicValidateForm",staticClass:"demo-ruleForm form1",attrs:{model:e.ruleForm2,action:"","status-icon":"",rules:e.rules2,"label-width":"100px",method:"post"}},[r("p",[e._v("Register")]),e._v(" "),r("el-form-item",{attrs:{label:"用户名",required:"true",prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"username"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]};var R=n("VU/8")(P,C,!1,function(e){n("zQhP")},null,null).exports;s.default.use(v.a);var V=new v.a({routes:[{path:"/office",name:"office",component:m},{path:"/",name:"login",component:b},{path:"/register",name:"register",component:y},{path:"/regi",name:"reg",component:E},{path:"/fff",name:"fff",component:R}]}),Q=n("zL8q"),I=n.n(Q),U=(n("tvR6"),n("8+8L")),q=n("7t+N"),B=n.n(q);window.jquery=window.$=B.a,s.default.config.productionTip=!1,s.default.use(I.a),s.default.use(U.a),new s.default({el:"#app",router:V,components:{App:p},template:"<App/>"})},R8Xh:function(e,t){},SGtb:function(e,t,r){"use strict";(function(e){t.a={data:function(){return{username:"",ruleForm2:"",regmsg:"错误提示",sendmsg:"暂时测试",link:""}},methods:{Verification:function(){this.$notify({title:"注册成功",message:"恭喜您，成功加入我们",type:"success"}),this.link="./office",document.forms[0].submit()},regerror:function(){this.$notify.error({title:"注册失败",message:"请再次重新输入"})},senderror:function(){this.$message(this.sendmsg)},validate_required:function(e,t){return null!=e.value&&""!=value||(alert(t),!1)},validate_form:function(e){var t=this.elements.email;if(0==validate_required(t,"email must be filled out"))return email.focus(),!1},resetForm:function(e){this.$refs[e].resetFields()},register:function(){var t=e("#username").val(),r=e("#password").val(),n=e("#password2").val(),s=e("#QQmail").val(),a=e("#PIN").val();document.getElementById("register").disabled=!0,setTimeout(function(){document.getElementById("register").disabled=!1},6e4),e.ajax({url:"RegisterServlet?method=register","请求方式":"post",data:"username="+t+"&password="+r+"&QQmail="+s+"&PIN="+a+"&password2="+n,success:function(e,t){"1"==e?this.Verification():this.regmsg=e},error:function(e,t,r){}})},send:function(){var t=e("#QQmail").val();e.ajax({url:"RegisterServlet?method=send","请求方式":"post",data:"QQmail="+t,success:function(e,t){this.sendmsg=e,this.senderror()},error:function(e,t,r){}})}}}}).call(t,r("7t+N"))},ZCdg:function(e,t){},atPB:function(e,t){},mfsf:function(e,t,r){"use strict";var n=r("ZCdg"),s=r.n(n),a=r("JIBf");var i=function(e){r("nFzB")},o=r("VU/8")(s.a,a.a,!1,i,null,null);t.default=o.exports},nFzB:function(e,t){},tvR6:function(e,t){},zQhP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.db45db32e0fb8861ac44.js.map