(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{503:function(t,e,s){},507:function(t,e,s){"use strict";var r=s(503);s.n(r).a},563:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"current_test_back",on:{click:function(e){return t.$emit("closeTest")}}},[s("myIcon",{staticClass:"arrow_icon",attrs:{iconName:"arrow"}})],1),s("div",{staticClass:"current_test_info"},[t._m(0),s("div",{staticClass:"current_test_actions-wrap"},[s("div",{staticClass:"current_test_actions-level"},[t._m(1),s("ul",{staticClass:"current_test_level_list"},t._l(+t.currentTest.level,function(e){return s("li",{ref:"levelList",refInFor:!0,staticClass:"current_test_level_item level",on:{click:function(s){return t.selectLevel(s,e)}}},[s("button",{staticClass:"level__btn"},[t._v(t._s(e))]),s("ul",{staticClass:"stars"},t._l(e,function(t){return s("li",{staticClass:"star",class:[{three_star:3===e},{"mr-8":2===e},{"mr-8":3===e}]},[s("myIcon",{attrs:{iconName:"star2"}})],1)}),0)])}),0)]),s("div",{staticClass:"current_test_actions-fullname"},[t._m(2),s("select",{staticClass:"current_test_select",on:{change:function(e){return t.selectStudent(e)}}},[s("option",[t._v("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0424\u0418\u041e")]),t._l(t.studentsInCurrentGroup,function(e){return s("option",{attrs:{id:e.student_id},domProps:{value:e.fullName}},[t._v(t._s(e.fullName))])})],2),s("div",{staticClass:"current_test_start-wrap"},[s("button",{staticClass:"current_test_start btn",attrs:{type:"button"},on:{click:t.startTest}},[t._v("\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")])])])])])])};r._withStripped=!0;var n=s(51),i=s(504);function c(t,e,s,r,n,i,c){try{var u=t[i](c),a=u.value}catch(t){return void s(t)}u.done?e(a):Promise.resolve(a).then(r,n)}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){a(t,e,s[e])})}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={props:{currentTest:Object,questions:Array,studentsInCurrentGroup:Array},components:{myIcon:i.a},data:function(){return{selectedLevel:"",selectedStudent:"",student_id:"",filteredQuestionsByLevel:"",description:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0442\u0440\u0435\u0445 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0442\u0435\u0441\u0442\u0430. 1 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0446\u0435\u043d\u043a\u0435 25-34. 2 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0446\u0435\u043d\u043a\u0435 35-44. 3 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0446\u0435\u043d\u043a\u0435 45-54.\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432."}},methods:u({},Object(n.b)("helped",["setQuestionsForCurrentPassingTest","setCurrentTestStudentData"]),Object(n.b)("tooltips",["showTooltip","hideTooltip"]),{filterQuestionsByLevel:function(t){var e=this.$_.cloneDeep(this.questions);return console.log(e),e.filter(function(e){return e.level_id===t?e:""})},startTest:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e,s,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.selectedStudent&&""!==this.selectedLevel){t.next=3;break}return this.showTooltip({type:"error",text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0442\u0435\u0441\u0442\u0430 \u0438 \u0424\u0418\u041e"}),t.abrupt("return");case 3:return t.prev=3,t.next=6,this.$axios.post("https://young-anchorage-15160.herokuapp.com/api/passingTest/addUser",{fullName:this.selectedStudent,group_id:this.currentTest.group_id,student_id:this.student_id});case 6:e=t.sent,s=e.data.user._id,r={fullName:this.selectedStudent,test_level:this.selectedLevel,group:this.currentTest.group,test_id:this.currentTest.id,test_name:this.currentTest.name,testTime:this.currentTest.time,group_id:this.currentTest.group_id,student_id:this.student_id,_id:s},this.filteredQuestionsByLevel=this.filterQuestionsByLevel(this.selectedLevel),this.setCurrentTestStudentData(r),n=this.shuffle(this.filteredQuestionsByLevel),console.log(n),this.setQuestionsForCurrentPassingTest(n),this.$router.push("./passingTest"),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(3),this.showTooltip({type:"error",text:"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0436\u0435 \u043d\u0430\u0447\u0430\u043b \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"});case 20:case"end":return t.stop()}},t,this,[[3,17]])}),function(){var e=this,s=arguments;return new Promise(function(r,n){var i=t.apply(e,s);function u(t){c(i,r,n,u,a,"next",t)}function a(t){c(i,r,n,u,a,"throw",t)}u(void 0)})});return function(){return e.apply(this,arguments)}}(),selectStudent:function(t){var e=this;this.studentsInCurrentGroup.forEach(function(s){s.fullName===t.target.value&&(e.student_id=s.student_id)}),this.selectedStudent=t.target.value},selectLevel:function(t,e){this.selectedLevel=e,this.$refs.levelList.forEach(function(t){t.firstChild.classList.remove("level__value--active")}),t.target.classList.add("level__value--active")},shuffle:function(t){for(var e,s,r=t.length-1;r>0;r--)s=t[e=Math.floor(Math.random()*(r+1))],t[e]=t[r],t[r]=s;return t}}),computed:u({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("tests",{tests:function(t){return t.tests}}),Object(n.d)("helped",{isCurrentLevelOpen:function(t){return t.isCurrentLevelOpen}}),Object(n.d)("helped",{isTestOpen:function(t){return t.isTestOpen}}),Object(n.d)("helped",{showQuestions:function(t){return t.showQuestions}})),mounted:function(){},watch:{questions:function(t){console.log(t)}}},o=(s(507),s(10)),d=Object(o.a)(l,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_test_info__desc-wrap"},[e("div",{staticClass:"current_test_info__desc"},[e("div",{staticClass:"desc"},[e("div",{staticClass:"desc__txt"},[this._v("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0442\u0440\u0435\u0445 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0442\u0435\u0441\u0442\u0430. ")]),e("div",{staticClass:"desc__txt"},[this._v("1 \u0443\u0440\u043e\u0432\u0435\u043d\u044c - \u043e\u0446\u0435\u043d\u043a\u0430 25-34. ")]),e("div",{staticClass:"desc__txt"},[this._v("2 \u0443\u0440\u043e\u0432\u0435\u043d\u044c -  \u043e\u0446\u0435\u043d\u043a\u0430 35-44. ")]),e("div",{staticClass:"desc__txt"},[this._v("3 \u0443\u0440\u043e\u0432\u0435\u043d\u044c - \u043e\u0446\u0435\u043d\u043a\u0430 45-54.")]),e("div",[this._v("\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432. \u0416\u0435\u043b\u0430\u0435\u043c \u0443\u0434\u0430\u0447\u0438!")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_test_label-wrap"},[e("label",{staticClass:"current_test_label"},[this._v("\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0442\u0435\u0441\u0442\u0430")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_test_label-wrap-fio"},[e("label",{staticClass:"current_test_label"},[this._v("\u0424\u0418\u041e")])])}],!1,null,"68e6971e",null);d.options.__file="src/scripts/tests_preview_public.vue";e.default=d.exports}}]);