webpackJsonp([1],{0:function(e,t){},"1gMo":function(e,t){},"3n7u":function(e,t){},JIBf:function(e,t,r){"use strict";var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-menu",{staticClass:"el-menu-demo mainnav",staticStyle:{},attrs:{mode:"horizontal"}},[r("el-menu-item",{attrs:{index:"1"}},[r("i",{staticClass:"icon iconfont icon-shouye1"}),e._v("首页")]),e._v(" "),r("el-menu-item",{attrs:{index:"2"}},[r("i",{staticClass:"icon iconfont icon-tongxunlu"}),e._v("通讯录")]),e._v(" "),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"icon iconfont icon-gongzuotai"}),e._v("工作台\n        ")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-1"}},[e._v("职员")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-2"}},[e._v("打卡")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-3"}},[e._v("打卡")]),e._v(" "),r("el-submenu",{attrs:{index:"3-4"}},[r("template",{slot:"title"},[e._v("\n                查看\n            ")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-4-1"}},[e._v("所有职员")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-4-2"}},[e._v("往期记录")]),e._v(" "),r("el-menu-item",{attrs:{index:"3-4-3"}},[e._v("打卡")])],2)],2),e._v(" "),r("el-menu-item",{attrs:{index:"4"}},[r("i",{staticClass:"icon iconfont icon-icon-test"}),e._v("个人中心")]),e._v(" "),r("el-menu-item",{attrs:{index:"5"}},[r("i",{staticClass:"icon iconfont icon-shezhi"}),e._v("设置")])],1)},staticRenderFns:[]};t.a=n},MGzU:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("mfsf"),s={name:"leftview",data:function(){return{isCollapse:!0,endTime:"",time:""}},mounted:function(){this.startTime()},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},startTime:function(){var e=this;this.endTime=setInterval(function(){var t=new Date,r=t.getHours(),n=t.getMinutes(),a=t.getSeconds();n=e.checkTime(n),a=e.checkTime(a),e.time=r+":"+n+":"+a},500)},stopInterval:function(){this.$message({message:this.time+"打卡成功",type:"success"})},checkTime:function(e){return e<10&&(e="0"+e),e}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-tabs",{staticClass:"tableone",attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"早到榜"}},[r("el-tag",[e._v("王珍")]),e._v(" "),r("el-tag",{attrs:{type:"success"}},[e._v("张紫嫣")]),r("br"),r("br"),e._v(" "),r("el-tag",{attrs:{type:"info"}},[e._v("周婵")]),e._v(" "),r("el-tag",{attrs:{type:"warning"}},[e._v("周旭波")]),e._v(" "),r("el-tag",{attrs:{type:"danger"}},[e._v("唐宇航")])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"迟到榜"}},[r("el-tag",{attrs:{type:"danger"}},[e._v("王珍")]),e._v(" "),r("el-tag",{attrs:{type:"danger"}},[e._v("周婵")])],1),e._v(" "),r("el-tab-pane",{attrs:{label:"日历"}},[e._v("我在做什么")]),e._v(" "),r("el-tab-pane",{attrs:{label:"该弄啥"}},[e._v("不知道了"+e._s(e.time))])],1),e._v(" "),r("p",{staticClass:"work"},[e._v("\r\n      "+e._s(e.time)+" "),r("el-button",{staticClass:"punch",on:{click:e.stopInterval}},[e._v("今日打卡")])],1)],1)},staticRenderFns:[]};var o=r("VU/8")(s,i,!1,function(e){r("1gMo")},null,null).exports,l={name:"office",components:{leftview:o},data:function(){return{students:[{name:"王珍",stuId:1},{name:"周婵",stuId:2},{name:"周旭波",stuId:3},{name:"唐宇航",stuId:4},{name:"张紫嫣",stuId:5}]}}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-container",[t("leftview")],1)],1)},staticRenderFns:[]};var c=r("VU/8")(l,u,!1,function(e){r("cHit")},null,null).exports,m={name:"App",components:{mainnav:a.default,leftview:o},mounted:function(){document.body.clientHeight}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-header",[t("div",{staticClass:"head"},[t("mainnav")],1)]),this._v(" "),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]};var d=r("VU/8")(m,f,!1,function(e){r("3n7u")},null,null).exports,p=r("/ocq"),v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(e){r("MGzU")},"data-v-3a1de6c6",null).exports;var h={data:function(){return{username:"",aaa:""}},methods:{asd:function(){console.log(this.username),this.aaa=this.username},open:function(){this.$notify({title:"登录成功",message:"恭喜您，成功进入！",type:"success"})},errorinfo:function(){this.$message({message:"输入有误，请重新输入！",type:"woring"})},prompt:function(){this.$message({showClose:!0,message:"请输入您的真实有效信息"})}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loginbox"},[r("form",{staticClass:"smart-green",attrs:{action:"LoginServlet",method:"post",id:"form1"}},[e._m(0),e._v(" "),r("label",{attrs:{for:""}},[r("span",[e._v("User name:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"",id:"username",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),r("p",{staticClass:"logining"},[r("el-button",{attrs:{id:"log",plain:"",type:"submit"},on:{click:e.open}},[r("router-link",{staticClass:"button",attrs:{plain:"",id:"button",to:""}},[e._v("登录")])],1),e._v(" "),r("el-button",{attrs:{id:"register",plain:!0},on:{click:e.prompt}},[r("router-link",{staticClass:"button",attrs:{id:"button",to:"/register"}},[e._v("注册")])],1)],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("Please Login "),t("span",[this._v("Please fill all the texts in the fields then click the button.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("Keyword:")]),this._v(" "),t("input",{attrs:{type:"password",name:"",id:"password",placeholder:"密码"}})])}]};var g=r("VU/8")(h,_,!1,function(e){r("pLUK")},"data-v-0ba122e4",null).exports,b=r("SGtb"),F={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{ref:"ruleForm2",staticClass:"smart-green form",attrs:{action:"",model:e.ruleForm2,onsubmit:"return validate_form(this)",method:"post"}},[e._m(0),e._v(" "),r("label",{attrs:{for:""}},[r("span",[e._v("用户名:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",placeholder:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),r("label",{attrs:{for:""}},[r("span",[e._v("QQ邮箱:")]),e._v(" "),r("input",{staticStyle:{width:"73%",float:"left"},attrs:{type:"email",name:"",id:"QQmail",placeholder:"email"}}),e._v(" "),r("input",{attrs:{id:"send",type:"button",value:"发送验证码"},on:{click:e.send}})]),e._v(" "),e._m(3),e._v(" "),r("p",{staticClass:"logining"},[r("el-button",{attrs:{id:"register",plain:""},on:{click:e.register}},[r("router-link",{staticClass:"button",attrs:{to:e.link,id:"button"}},[e._v("注册")])],1),e._v(" "),r("input",{staticClass:"reset",attrs:{type:"reset",value:"重置"}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("Register Information "),t("span",[this._v("Please fill all the texts in the fields then click the button.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("初始密码:")]),this._v(" "),t("input",{attrs:{type:"password",name:"",id:"password",placeholder:"password"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("再次输入密码:")]),this._v(" "),t("input",{attrs:{type:"password",name:"",id:"password2",placeholder:"password"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[t("span",[this._v("验证码:")]),this._v(" "),t("input",{attrs:{type:"text",name:"",id:"PIN",placeholder:"验证码"}})])}]};var k=function(e){r("V3Ax")},w=r("VU/8")(b.a,F,!1,k,"data-v-803f4036",null).exports,y={data:function(){var e=this;return{ruleForm2:{pass:"",checkPass:"",verification:"",name:"",email:""},rules2:{pass:[{validator:function(t,r,n){""===r?n(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.ruleForm2.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],name:[{validator:function(e,t,r){if(!t)return r(new Error("用户名不能为空"))},trigger:"blur"}],email:[{validator:function(e,t,r){if(!t)return r(new Error("邮箱不能为空"))},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm2 dynamicValidateForm",staticClass:"demo-ruleForm form1",attrs:{model:e.ruleForm2,action:"","status-icon":"",rules:e.rules2,"label-width":"100px",method:"post"}},[r("p",[e._v("Register")]),e._v(" "),r("el-form-item",{attrs:{label:"用户名",required:"true",prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"username"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",required:"true",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"password"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"true",label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"input same password"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"true",label:"邮箱",prop:"email"}},[r("el-input",{attrs:{type:"email",placeholder:"QQemail"},model:{value:e.ruleForm2.email,callback:function(t){e.$set(e.ruleForm2,"email",t)},expression:"ruleForm2.email"}})],1),e._v(" "),r("el-form-item",{attrs:{required:"true",label:"验证码",prop:"verification"}},[r("el-input",{model:{value:e.ruleForm2.checkVerification,callback:function(t){e.$set(e.ruleForm2,"checkVerification",t)},expression:"ruleForm2.checkVerification"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]};var $=r("VU/8")(y,x,!1,function(e){r("atPB")},"data-v-7f52a3e6",null).exports,P={data:function(){var e=this;return{ruleForm2:{pass:"",checkPass:"",name:"",email:""},rules2:{pass:[{validator:function(t,r,n){""===r?n(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.ruleForm2.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],Verification:[{validator:checkVerification,trigger:"blur"}],name:[{validator:function(e,t,r){if(!t)return r(new Error("用户名不能为空"))},trigger:"blur"}],email:[{validator:checkEmail,trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},C={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"ruleForm2 dynamicValidateForm",staticClass:"demo-ruleForm form1",attrs:{model:e.ruleForm2,action:"","status-icon":"",rules:e.rules2,"label-width":"100px",method:"post"}},[r("p",[e._v("Register")]),e._v(" "),r("el-form-item",{attrs:{label:"用户名",required:"true",prop:"name"}},[r("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"username"},model:{value:e.ruleForm2.name,callback:function(t){e.$set(e.ruleForm2,"name",t)},expression:"ruleForm2.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")])],1)],1)},staticRenderFns:[]};var E=r("VU/8")(P,C,!1,function(e){r("zQhP")},null,null).exports;n.default.use(p.a);var V=new p.a({routes:[{path:"/office",name:"office",component:c},{path:"/",name:"login",component:g},{path:"/register",name:"register",component:w},{path:"/regi",name:"reg",component:$},{path:"/fff",name:"fff",component:E}]}),I=r("zL8q"),Q=r.n(I),R=(r("tvR6"),r("8+8L")),U=r("7t+N"),q=r.n(U);window.jquery=window.$=q.a,n.default.config.productionTip=!1,n.default.use(Q.a),n.default.use(R.a),new n.default({el:"#app",router:V,components:{App:d},template:"<App/>"})},SGtb:function(e,t,r){"use strict";(function(e){t.a={data:function(){return{username:"",ruleForm2:"",regmsg:"errorinfo",sendmsg:"暂时测试",link:""}},methods:{Verification:function(){this.$notify({title:"注册成功",message:"恭喜您，成功加入我们",type:"success"}),this.link="./login"},regerror:function(){this.$notify.error({title:"注册失败",message:"请再次重新输入"})},senderror:function(){this.$message(this.sendmsg)},validate_required:function(e,t){return null!=e.value&&""!=value||(alert(t),!1)},validate_form:function(e){var t=this.elements.email;if(0==validate_required(t,"email must be filled out"))return email.focus(),!1},resetForm:function(e){this.$refs[e].resetFields()},register:function(){var t=e("#username").val(),r=e("#password").val(),n=e("#password2").val(),a=e("#QQmail").val(),s=(this.Verification(),e("#PIN").val());document.getElementById("register").disabled=!0,setTimeout(function(){document.getElementById("register").disabled=!1},6e3),e.ajax({url:"RegisterServlet?method=register","请求方式":"post",async:!0,data:"username="+t+"&password="+r+"&QQmail="+a+"&PIN="+s+"&password2="+n,success:function(e,t){alert(e)},error:function(e,t,r){}})},send:function(){var t=e("#QQmail").val();e("#send").css({"background-color":"#918d8f"}),e.ajax({url:"RegisterServlet?method=send","请求方式":"post",data:"QQmail="+t,success:function(e,t){alert(e)},error:function(e,t,r){}})}}}}).call(t,r("7t+N"))},V3Ax:function(e,t){},ZCdg:function(e,t){},atPB:function(e,t){},cHit:function(e,t){},mfsf:function(e,t,r){"use strict";var n=r("ZCdg"),a=r.n(n),s=r("JIBf");var i=function(e){r("nFzB")},o=r("VU/8")(a.a,s.a,!1,i,null,null);t.default=o.exports},nFzB:function(e,t){},pLUK:function(e,t){},tvR6:function(e,t){},zQhP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e64ee5b6b64d61760fc8.js.map