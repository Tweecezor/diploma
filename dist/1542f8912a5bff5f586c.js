(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{506:function(t,e,s){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("MyIcon",{staticClass:"test__icon",attrs:{iconName:this.generateIconName}})};r._withStripped=!0;var n={components:{MyIcon:s(479).a},props:{max:{type:Number,default:3},min:{type:Number,default:1}},computed:{randomInteger:function(){var t=this.min,e=this.max,s=t+Math.random()*(e+1-t);return Math.floor(s)},generateIconName:function(){return"test_bg_".concat(this.randomInteger)},getIconNumber:function(){return this.generateIconName.split("_")[2]}}},i=s(10),a=Object(i.a)(n,r,[],!1,null,"956e2c28",null);a.options.__file="src/admin/components/randomIcon.vue";e.a=a.exports},554:function(t,e,s){},555:function(t,e,s){},556:function(t,e,s){},557:function(t,e,s){},614:function(t,e,s){"use strict";var r=s(554);s.n(r).a},615:function(t,e,s){"use strict";var r=s(555);s.n(r).a},616:function(t,e,s){"use strict";var r=s(556);s.n(r).a},617:function(t,e,s){"use strict";var r=s(557);s.n(r).a},624:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container container__settings"},[s("div",{staticClass:"settings__sidebar sidebar"},[s("ul",{staticClass:"sidebar__list"},t._l(["\u0422\u0435\u0441\u0442\u044b","\u0414\u0430\u043d\u043d\u044b\u0435"],function(e,r){return s("li",{ref:"sidebar_item",refInFor:!0,staticClass:"sidebar__item sidebar__item_content",on:{click:function(s){return t.changeContent(e,r)}}},[s("div",{staticClass:"sidebar__text"},[t._v(t._s(e))])])}),0)]),s("div",{staticClass:"settings__content"},["\u0414\u0430\u043d\u043d\u044b\u0435"===t.currentMenuItem?s("div",{staticClass:"settings__content_data"},[s("USERS_DATA")],1):t._e(),"\u0422\u0435\u0441\u0442\u044b"===t.currentMenuItem?s("div",{staticClass:"settings__content_test"},[s("ALL_TESTS")],1):t._e()])])};r._withStripped=!0;var n=s(51),i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container_settings"},[this.tests.length?e("ul",{staticClass:"tests__list"},this._l(this.tests,function(t){return e("li",{staticClass:"tests__item test"},[e("randomIcon",{staticClass:"test__icon_1"}),e("randomIcon",{staticClass:"test__icon_2",attrs:{min:4,max:5}}),e("CURRENT_TEST",{attrs:{test:t}})],1)}),0):e("div",{staticClass:"no_content"},[e("myIcon",{staticClass:"no_content_icon",attrs:{iconName:"notFound"}}),e("div",{staticClass:"no_content_text"},[this._v("\u0422\u0435\u0441\u0442\u044b \u0435\u0449\u0435 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u044b")])],1)])};i._withStripped=!0;var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container_"},[s("div",{staticClass:"test__name"},[t.editMode?s("div",[t._m(0),s("div",{staticClass:"test__input_name-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTest.name,expression:"currentTest.name"}],staticClass:"test__input_name test__input",attrs:{disabled:!t.editMode},domProps:{value:t.currentTest.name},on:{input:function(e){e.target.composing||t.$set(t.currentTest,"name",e.target.value)}}})])]):s("div",{staticClass:"test__name_text"},[t._v(t._s(t.currentTest.name))])]),s("div",{staticClass:"test__group"},[t._m(1),s("div",{staticClass:"test__input_group-wrap"},[t.editMode?s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTest.group,expression:"currentTest.group"}],staticClass:"test__input_group test__input",attrs:{disabled:""},domProps:{value:t.currentTest.group},on:{input:function(e){e.target.composing||t.$set(t.currentTest,"group",e.target.value)}}}):s("div",{staticClass:"test__group_text"},[t._v(t._s(t.currentTest.group))])])]),s("div",{staticClass:"test__info_row"},[s("div",{staticClass:"test__time"},[t._m(2),s("div",{staticClass:"test__input_time-wrap"},[t.editMode?s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentTest.time,expression:"currentTest.time"}],staticClass:"test__input_time test__input",attrs:{disabled:!t.editMode},domProps:{value:t.currentTest.time},on:{input:function(e){e.target.composing||t.$set(t.currentTest,"time",e.target.value)}}})]):s("div",{staticClass:"test__text"},[t._v(t._s(t.currentTest.time))])])]),s("div",{staticClass:"test__access"},[s("div",{staticClass:"test__label-wrapper"},[s("div",{staticClass:"test__label-wrap test__label-select test__label"},[t._v("\u0414\u043e\u0441\u0442\u0443\u043f")]),t.editMode?s("select",{ref:"selectBox",staticClass:"test__input_access-wrap",attrs:{disabled:!t.editMode},on:{change:t.changeAccess}},[s("option",{staticClass:"test__access-option",attrs:{value:"false"}},[t._v("\u0417\u0430\u043a\u0440\u044b\u0442")]),s("option",{staticClass:"test__access-option",attrs:{value:"true"},domProps:{selected:t.currentTest.access}},[t._v("\u041e\u0442\u043a\u0440\u044b\u0442")])]):s("div",{staticClass:"test__text"},[t._v(t._s(t.showAccess(t.currentTest.access)))])])])]),t.editMode?s("div",{staticClass:"test__actions"},[s("div",{staticClass:"group__desc-correct-wrap save"},[s("label",{staticClass:"group__desc_label",attrs:{for:"deleteIcon"},on:{click:t.saveSettings}},[t._v("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")]),s("div",{staticClass:"icon icon_save",on:{click:t.saveSettings}},[s("myIcon",{attrs:{iconName:"done"}})],1)]),s("div",{staticClass:"group__desc-correct-wrap cancel"},[s("label",{staticClass:"group__desc_label",attrs:{for:"deleteIcon"},on:{click:t.cancelEdited}},[t._v("\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c")]),s("div",{staticClass:"icon",on:{click:t.cancelEdited}},[s("myIcon",{attrs:{iconName:"cancel"}})],1)])]):s("div",{staticClass:"test__actions",class:{group__desc__disabled:t.isActiveModeActive}},[s("div",{staticClass:"group__desc-correct-wrap edit"},[s("label",{staticClass:"group__desc_label",attrs:{for:"editIcon"},on:{click:function(e){return t.correctTest(t.test)}}},[t._v("\u041f\u0440\u0430\u0432\u0438\u0442\u044c")]),s("div",{staticClass:"icon",on:{click:function(e){return t.correctTest(t.test)}}},[s("myIcon",{attrs:{iconName:"pencil"}})],1)]),s("div",{staticClass:"group__desc-correct-wrap remove"},[s("label",{staticClass:"group__desc_label",attrs:{for:"deleteIcon"},on:{click:function(e){return t.deleteTest(t.test)}}},[t._v("\u0423\u0434\u0430\u043b\u0438\u0442\u044c")]),s("div",{staticClass:"icon",on:{click:function(e){return t.deleteTest(t.test)}}},[s("myIcon",{attrs:{iconName:"trash"}})],1)])])])};a._withStripped=!0;var o=s(479),c=s(506);function u(t,e,s,r,n,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(r,n)}function l(t){return function(){var e=this,s=arguments;return new Promise(function(r,n){var i=t.apply(e,s);function a(t){u(i,r,n,a,o,"next",t)}function o(t){u(i,r,n,a,o,"throw",t)}a(void 0)})}}function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){p(t,e,s[e])})}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var _={components:{myIcon:o.a,randomIcon:c.a},props:{test:Object},data:function(){return{testTime:"",changeStatus:!1,testAccess:!1,editMode:!1,currentTest:""}},methods:d({},Object(n.b)("helped",["changeShowGroupStatus"]),Object(n.b)("groups",["fetchGroups"]),Object(n.b)("tooltips",["showTooltip"]),Object(n.b)("tests",["setNewSettingsToTest","deleteCurrentTest"]),Object(n.b)("helped",["setEditStatus"]),{showAccess:function(t){return t?"\u041e\u0442\u043a\u0440\u044b\u0442":"\u0417\u0430\u043a\u0440\u044b\u0442"},cancelEdited:function(){this.isActiveModeActive&&(this.editMode=!this.editMode,this.setEditStatus(!1),this.currentTest=d({},this.test),this.changeStatus&&console.log(this.$refs.selectBox.value))},correctTest:function(t){this.isActiveModeActive||(this.editMode=!this.editMode,this.setEditStatus(!0))},deleteTest:function(){var t=l(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isActiveModeActive){t.next=10;break}return t.prev=1,t.next=4,this.deleteCurrentTest(e._id);case 4:this.showTooltip({type:"success",text:"\u0422\u0435\u0441\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.showTooltip({type:"error",text:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438"});case 10:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}(),changeAccess:function(t){console.log(t.target.value),this.testAccess=t.target.value,this.changeStatus=!0},saveSettings:function(){if(this.isActiveModeActive){var t;try{t=this.changeStatus?d({},this.currentTest,{access:this.testAccess,time:+this.currentTest.time}):d({},this.currentTest,{access:this.test.access,time:+this.currentTest.time}),this.showTooltip({type:"success",text:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b"}),this.setNewSettingsToTest(t)}catch(t){this.showTooltip({type:"error",text:"\u041e\u0448\u0438\u0431\u043a\u0430"})}this.editMode=!this.editMode,this.setEditStatus(!1)}}}),computed:d({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("tests",{tests:function(t){return t.tests}}),Object(n.d)("helped",{showAddGroup:function(t){return t.showAddGroup}}),Object(n.d)("helped",{isActiveModeActive:function(t){return t.isEditActive}})),mounted:function(){var t=l(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.setEditStatus(!1),this.currentTest=d({},this.test);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},v=(s(614),s(10)),h=Object(v.a)(_,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__label-wrap"},[e("label",{staticClass:"test__label"},[this._v("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__label-wrap"},[e("label",{staticClass:"test__label"},[this._v("\u0414\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u044b")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__label-wrap"},[e("label",{staticClass:"test__label"},[this._v("\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c")])])}],!1,null,"7e0d8eb0",null);function f(t,e,s,r,n,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(r,n)}function m(t){return function(){var e=this,s=arguments;return new Promise(function(r,n){var i=t.apply(e,s);function a(t){f(i,r,n,a,o,"next",t)}function o(t){f(i,r,n,a,o,"throw",t)}a(void 0)})}}function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){b(t,e,s[e])})}return t}function b(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}h.options.__file="src/admin/components/settings__currentTest.vue";var w={components:{CURRENT_TEST:h.exports,randomIcon:c.a,myIcon:o.a},data:function(){return{testAccess:!1}},methods:g({},Object(n.b)("helped",["changeShowGroupStatus"]),Object(n.b)("groups",["fetchGroups"]),Object(n.b)("tests",["fetchTests"])),computed:g({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("tests",{tests:function(t){return t.tests}}),Object(n.d)("helped",{showAddGroup:function(t){return t.showAddGroup}})),mounted:function(){var t=m(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),created:function(){var t=m(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchTests(localStorage.getItem("creatorId"));case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},C=(s(615),Object(v.a)(w,i,[],!1,null,"653983d3",null));C.options.__file="src/admin/components/settings__allTests.vue";var y=C.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container_"},[s("div",{staticClass:"user__container"},[s("div",{staticClass:"user__content"},[s("div",{staticClass:"user__login-wrap"},[s("h1",{staticClass:"user__login"},[t._v("\u041b\u043e\u0433\u0438\u043d")]),s("div",{staticClass:"user__login_input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.login,expression:"user.login"}],staticClass:"user__login_input user__input",attrs:{type:"text"},domProps:{value:t.user.login},on:{input:function(e){e.target.composing||t.$set(t.user,"login",e.target.value)}}})])]),s("div",{staticClass:"user__password-wrap"},[s("h1",{staticClass:"user__password"},[t._v("\u041f\u0430\u0440\u043e\u043b\u044c")]),t._m(0),s("div",{staticClass:"user__password_input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"user__input user__password_input",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(1),s("div",{staticClass:"user__password_input-wrap-"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordRepeat,expression:"passwordRepeat"}],staticClass:"user__input user__password_input",attrs:{type:"password"},domProps:{value:t.passwordRepeat},on:{input:function(e){e.target.composing||(t.passwordRepeat=e.target.value)}}})])])]),s("div",{staticClass:"user__image"},[s("label",{staticClass:"user__image-wrap",style:{"background-image":"url("+t.currentAvatar+")"},attrs:{for:"avatar"}},[s("div",{staticClass:"btn user__image_file"},[t._v("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")])]),s("input",{staticClass:"user__file",attrs:{id:"avatar",type:"file",name:"photo",accept:"image/*"},on:{change:t.loadAvatar}}),s("div",{staticClass:"user__save"},[s("div",{staticClass:"user__save_btn btn",on:{click:t.save}},[t._v("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")])])])])])};function T(t,e,s,r,n,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(r,n)}function j(t){return function(){var e=this,s=arguments;return new Promise(function(r,n){var i=t.apply(e,s);function a(t){T(i,r,n,a,o,"next",t)}function o(t){T(i,r,n,a,o,"throw",t)}a(void 0)})}}function S(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){x(t,e,s[e])})}return t}function x(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}O._withStripped=!0;var A={components:{},data:function(){return{password:"",passwordRepeat:"",login:"",currentAvatar:"",photoUser:""}},methods:S({},Object(n.b)("helped",["changeShowGroupStatus"]),Object(n.b)("user",["changeUsersData"]),Object(n.b)("groups",["fetchGroups"]),Object(n.b)("tooltips",["showTooltip","hideTooltip"]),{showAddNew:function(){this.changeShowGroupStatus(!0)},loadAvatar:function(t){var e=this,s=t.target.files[0];console.log(s),this.photoUser=s;var r=new FileReader;try{r.readAsDataURL(s),console.log(r),r.onload=function(){e.currentAvatar=r.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},save:function(){var t=j(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.password===this.passwordRepeat){t.next=4;break}this.showTooltip({type:"error",text:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"}),t.next=17;break;case 4:return t.prev=4,e={password:this.password,login:this.user.login,id:this.user._id,photoUser:this.photoUser},t.next=8,this.changeUsersData(e);case 8:this.showTooltip({type:"success",text:"\u041f\u0430\u0440\u043e\u043b\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d"}),this.password="",this.passwordRepeat="",t.next=17;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0),this.showTooltip({type:"error",text:t.t0});case 17:case"end":return t.stop()}},t,this,[[4,13]])}));return function(){return t.apply(this,arguments)}}()}),computed:S({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("helped",{showAddGroup:function(t){return t.showAddGroup}}),Object(n.d)("user",{user:function(t){return t.user}})),mounted:function(){var t=j(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.currentAvatar=this.user.photoUser;case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},I=(s(616),Object(v.a)(A,O,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user__label-wrap"},[e("label",{staticClass:"user__password_label"},[this._v("\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user__label-wrap"},[e("label",{staticClass:"user__password_label"},[this._v("\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c")])])}],!1,null,"6dc6c2e2",null));function E(t,e,s,r,n,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(r,n)}function P(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){k(t,e,s[e])})}return t}function k(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}I.options.__file="src/admin/components/settings__usersData.vue";var M={components:{ALL_TESTS:y,USERS_DATA:I.exports},data:function(){return{currentMenuItem:"\u0422\u0435\u0441\u0442\u044b",sidebarItems:[]}},methods:P({},Object(n.b)("helped",["changeShowGroupStatus"]),Object(n.b)("groups",["fetchGroups"]),{showAddNew:function(){this.changeShowGroupStatus(!0)},changeContent:function(t,e){this.currentMenuItem=t;for(var s=0;s<this.sidebarItems.length;s++)this.sidebarItems[s].classList.remove("sidebar__item_content__active"),s===e&&this.sidebarItems[s].classList.add("sidebar__item_content__active")}}),computed:P({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("helped",{showAddGroup:function(t){return t.showAddGroup}})),mounted:function(){var t,e=(t=regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.sidebarItems=this.$refs.sidebar_item,this.sidebarItems[0].classList.add("sidebar__item_content__active");case 2:case"end":return t.stop()}},t,this)}),function(){var e=this,s=arguments;return new Promise(function(r,n){var i=t.apply(e,s);function a(t){E(i,r,n,a,o,"next",t)}function o(t){E(i,r,n,a,o,"throw",t)}a(void 0)})});return function(){return e.apply(this,arguments)}}()},R=(s(617),Object(v.a)(M,r,[],!1,null,"5818acb3",null));R.options.__file="src/admin/components/settings.vue";e.default=R.exports}}]);