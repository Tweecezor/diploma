(window.webpackJsonp=window.webpackJsonp||[]).push([[11,15],{371:function(t,e,s){},373:function(t,e,s){"use strict";var r=s(371);s.n(r).a},374:function(t,e,s){},422:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("div",{staticClass:"current_test_back"},[t._v("BACK")]),s("div",{staticClass:"current_test_info"},[s("div",{staticClass:"current_test_info__desc-wrap"},[s("div",{staticClass:"current_test_info__desc"},[s("p",[t._v(t._s(t.description))])])]),s("div",{staticClass:"current_test_actions-wrap"},[s("div",{staticClass:"current_test_actions-level"},[t._m(0),s("ul",{staticClass:"current_test_level_list"},t._l(+t.currentTest.level,function(e){return s("li",{ref:"levelList",refInFor:!0,staticClass:"current_test_level_item level",on:{click:function(s){return t.selectLevel(s,e)}}},[s("div",{staticClass:"level__value"},[t._v(t._s(e))])])}),0)]),s("div",{staticClass:"current_test_actions-fullname"},[t._m(1),s("select",{staticClass:"current_test_select",on:{change:function(e){return t.selectStudent(e)}}},[s("option",[t._v("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0424\u0418\u041e")]),t._l(t.studentsInCurrentGroup,function(e){return s("option",{domProps:{value:e.fullName}},[t._v(t._s(e.fullName))])})],2),s("div",{staticClass:"current_test_start-wrap"},[s("button",{staticClass:"current_test_start btn",attrs:{type:"button"},on:{click:t.startTest}},[t._v("\xa0\u041d\u0430\u0447\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435")])])])])])])};r._withStripped=!0;var n=s(29);function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){u(t,e,s[e])})}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={props:{currentTest:Object,questions:Array,studentsInCurrentGroup:Array},data:function(){return{selectedLevel:"",selectedStudent:"",filteredQuestionsByLevel:"",description:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u0438\u043d \u0438\u0437 \u0442\u0440\u0435\u0445 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439 \u0442\u0435\u0441\u0442\u0430. 1 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0446\u0435\u043d\u043a\u0435 25-34. 2 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0446\u0435\u043d\u043a\u0435 35-44. 3 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u0446\u0435\u043d\u043a\u0435 45-54.\u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u0437\u0430\u0432\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432."}},methods:i({},Object(n.b)("helped",["setQuestionsForCurrentPassingTest","setCurrentTestStudentData"]),Object(n.b)("tooltips",["showTooltip","hideTooltip"]),{filterQuestionsByLevel:function(t){var e=this.$_.cloneDeep(this.questions);return console.log(e),e.filter(function(e){return e.level_id===t?e:""})},startTest:function(){if(""!==this.selectedStudent&&""!==this.selectedLevel){var t={fullName:this.selectedStudent,test_level:this.selectedLevel,group:this.currentTest.group,test_id:this.currentTest.id,test_name:this.currentTest.name};this.filteredQuestionsByLevel=this.filterQuestionsByLevel(this.selectedLevel),console.log(this.filteredQuestionsByLevel),console.log(t),this.setCurrentTestStudentData(t),this.setQuestionsForCurrentPassingTest(this.filteredQuestionsByLevel),this.$router.push("./passingTest")}else this.showTooltip({type:"error",text:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0442\u0435\u0441\u0442\u0430 \u0438 \u0424\u0418\u041e"})},selectStudent:function(t){this.selectedStudent=t.target.value},selectLevel:function(t,e){this.selectedLevel=e,this.$refs.levelList.forEach(function(t){t.firstChild.classList.remove("level__value--active")}),t.target.classList.add("level__value--active")}}),computed:i({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("tests",{tests:function(t){return t.tests}}),Object(n.d)("helped",{isCurrentLevelOpen:function(t){return t.isCurrentLevelOpen}}),Object(n.d)("helped",{isTestOpen:function(t){return t.isTestOpen}}),Object(n.d)("helped",{showQuestions:function(t){return t.showQuestions}})),mounted:function(){},watch:{questions:function(t){console.log(t)}}},o=(s(373),s(52)),c=Object(o.a)(l,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_test_label-wrap"},[e("label",{staticClass:"current_test_label"},[this._v("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0442\u0435\u0441\u0442\u0430")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_test_label-wrap"},[e("label",{staticClass:"current_test_label"},[this._v("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0424\u0418\u041e")])])}],!1,null,"68e6971e",null);c.options.__file="src/scripts/tests_preview_public.vue";e.default=c.exports},426:function(t,e,s){"use strict";var r=s(374);s.n(r).a},478:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-"},[s("div",{staticClass:"wrap"},[t.opened?t._e():s("div",{staticClass:"admin__content"},[s("div",{staticClass:"group_breadcrumbs"},[s("ul",{staticClass:"group_breadcrumbs__list"},t._l(t.groups,function(e,r){return s("li",{ref:"breadcrumb_group",refInFor:!0,staticClass:"group_breadcrumbs_item breadcrumb"},[s("div",{staticClass:"breadcrumb__text-wrap",on:{click:function(s){return t.filterTestByGroup(e,r)}}},[s("div",{staticClass:"breadcrumb__text"},[t._v(t._s(e.groupName))])])])}),0)]),s("div",{staticClass:"test__content"},[s("ul",{staticClass:"test__list"},t._l(t.currentTestsList,function(e){return s("li",{staticClass:"test__item"},[s("div",{staticClass:"test__header"},[t._m(0,!0),s("div",{staticClass:"test__name-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],staticClass:"test__name-input test__input",attrs:{type:"text",disabled:""},domProps:{value:e.name},on:{input:function(s){s.target.composing||t.$set(e,"name",s.target.value)}}})])]),s("div",{staticClass:"test__levels"},[t._m(1,!0),s("div",{staticClass:"test__levels-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"item.level"}],staticClass:"test__levels-input test__input",attrs:{type:"text",disabled:""},domProps:{value:e.level},on:{input:function(s){s.target.composing||t.$set(e,"level",s.target.value)}}})])]),s("div",{staticClass:"test__group"},[t._m(2,!0),s("div",{staticClass:"test__group-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.group,expression:"item.group"}],staticClass:"test__group-input test__input",attrs:{type:"text",disabled:""},domProps:{value:e.group},on:{input:function(s){s.target.composing||t.$set(e,"group",s.target.value)}}})])]),s("button",{staticClass:"btn",on:{click:function(s){return t.openTest(e)}}},[t._v("\u041e\u0442\u043a\u0440\u044b\u0442\u044c")])])}),0)])]),t.opened?s("TEST_PREVIEW",{attrs:{currentTest:t.currentTest,studentsInCurrentGroup:t.studentsInCurrentGroup,questions:t.filteredQuestions}}):t._e()],1)])};r._withStripped=!0;var n=s(29);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={components:{TEST_PREVIEW:s(422).default},data:function(){return{currentTestsList:[],studentsInCurrentGroup:[],currentTest:"",opened:!1,filteredQuestions:""}},methods:{openTest:function(t){var e;console.log(t),this.currentTest=t,console.log(),this.groups.filter(function(s){return s.groupName===t.group?e=s.studentsInGroup:""}),this.studentsInCurrentGroup=e,console.log(this.studentsInCurrentGroup),this.opened=!0,this.filteredQuestions=this.filterQuestionsByTest(t)},filterQuestionsByTest:function(t){console.log(t);var e=this.questions.filter(function(e){return e.test_id===t.id?e:""});return console.log(e),e},filterTestByGroup:function(t,e){console.log(t);var s=this.tests.filter(function(e){return e.group===t.groupName?e:""});console.log(s),this.currentTestsList=s,this.setActiveBreadcrumbGroup(e)},setActiveBreadcrumbGroup:function(t){for(var e=0;e<this.breadcrumbGroup.length;e++)e===t?this.breadcrumbGroup[e].firstChild.classList.add("breadcrumb--active"):this.breadcrumbGroup[e].firstChild.classList.remove("breadcrumb--active")}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),r.forEach(function(e){i(t,e,s[e])})}return t}({},Object(n.d)("groups",{groups:function(t){return t.groups}}),Object(n.d)("tests",{tests:function(t){return t.tests}}),Object(n.d)("helped",{isCurrentLevelOpen:function(t){return t.isCurrentLevelOpen}}),Object(n.d)("helped",{isTestOpen:function(t){return t.isTestOpen}}),Object(n.d)("helped",{showQuestions:function(t){return t.showQuestions}}),Object(n.d)("questions",{questions:function(t){return t.questions}}),Object(n.d)("results",{results:function(t){return t.results}})),mounted:function(){this.currentTestsList=this.tests,this.breadcrumbGroup=this.$refs.breadcrumb_group,console.log(this.breadcrumbGroup)}},l=(s(426),s(52)),o=Object(l.a)(u,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__name-wrap"},[e("label",{staticClass:"test__label"},[this._v("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__levels-wrap"},[e("label",{staticClass:"test__levels-label test__label"},[this._v("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0440\u043e\u0432\u043d\u0435\u0439")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"test__group-wrap"},[e("label",{staticClass:"test__group-label test__label"},[this._v("\u0414\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u044b")])])}],!1,null,"2214f847",null);o.options.__file="src/scripts/tests_public.vue";e.default=o.exports}}]);