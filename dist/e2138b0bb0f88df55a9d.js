(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{412:function(e,t,s){},413:function(e,t,s){},414:function(e,t,s){},415:function(e,t,s){},416:function(e,t,s){},464:function(e,t,s){"use strict";var n=s(412);s.n(n).a},465:function(e,t,s){"use strict";var n=s(413);s.n(n).a},466:function(e,t,s){"use strict";var n=s(414);s.n(n).a},467:function(e,t,s){"use strict";var n=s(415);s.n(n).a},468:function(e,t,s){"use strict";var n=s(416);s.n(n).a},476:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e.showResult?s("TEST_RESULT",{attrs:{countOfCorrect:e.countOfCorrect,countOfQuestions:e.questions.length,finalMark:e.finalMark},on:{showUsersAnswers:e.showAnswers}}):s("div",{staticClass:"passing_test"},[s("div",{staticClass:"passing_test__breadcrumbs-wrap"},[s("ul",{staticClass:"passing_test__breadcrumbs-list"},e._l(e.questions,function(t,n){return s("li",{ref:"breadcrumb",refInFor:!0,staticClass:"passing_test__breadcrumbs-item breadcrumb",on:{click:function(e){}}},[s("div",{staticClass:"breadcrumb__content",on:{click:function(s){return e.changeCurrentQuestion(s,t,n)}}},[e._v(e._s(n+1))])])}),0)]),s("div",{staticClass:"passing_test__question-wrap"},[s("div",{staticClass:"passing_test__question question"},[s("div",{staticClass:"question__text-wrap"},[s("p",{staticClass:"question__text"},[e._v(e._s(e.currentQuestion.question.text))])]),e.currentQuestion.question.img?s("div",{staticClass:"question__img-wrap"},[s("div",{staticClass:"question__img",style:{"background-image":"url("+e.currentQuestion.question.img+")"}})]):e._e()]),s("div",{staticClass:"passing_test__answers"},[s("div",{staticClass:"passing_test_answers_label"},[e._v("Варианты ответов")]),"multipleAnswer"===e.currentQuestion.type?s("MULTY_ANSWER",{attrs:{question_id:e.currentQuestion.question.question_id,answers:e.currentQuestion.answers},on:{changeAnswer:e.setAnswerWithUsersSelect_multy}}):e._e(),"oneAnswer"===e.currentQuestion.type?s("ONE_ANSWER",{attrs:{question_id:e.currentQuestion.question.question_id,answers:e.currentQuestion.answers},on:{changeAnswer_one:e.setAnswerWithUsersSelect_one}}):e._e(),"handwritingAnswer"===e.currentQuestion.type?s("HANDWRITING_ANSWER",{attrs:{keywords:e.currentQuestion.keywordsArray,question_id:e.currentQuestion.question.question_id,userHandwriteAnswer:e.currentQuestion.userHandwriteAnswer},on:{saveHandwrite:e.saveUsersHandwriteAnswer}}):e._e()],1),s("div",{staticClass:"passing_test__answers_next-wrap"},[e.activeQuestion==e.questions.length-1?s("button",{staticClass:"passing_test__answers_next btn",attrs:{type:"button"},on:{click:e.completeTest}},[e._v("Завершить тестирование")]):s("button",{staticClass:"passing_test__answers_next btn",attrs:{type:"button"},on:{click:e.setNextQuestion}},[e._v("Следующий вопрос")])])])])],1)};n._withStripped=!0;var r=s(29),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"passing_test__answers-list"},e._l(e.answers,function(t){return s("li",{ref:"answersList",refInFor:!0,staticClass:"passing_test__answers-item answer",class:{answer__active:t.selectedByStudent}},[s("div",{staticClass:"answer__text-wrap",on:{click:function(s){return e.selectAnswer(s,t)}}},[s("p",{staticClass:"answer__text",class:{answerTextWithImg:t.imgURL}},[e._v(e._s(t.text))]),s("div",{staticClass:"answer__checkbox-wrap"},[s("div",{ref:"checkbox_list",refInFor:!0,staticClass:"answer__checkbox",class:{answer__checkbox_active:t.selectedByStudent}})]),t.imgURL?s("div",{staticClass:"question__img-wrap"},[s("label",{staticClass:"question__img",style:{"background-image":"url("+t.imgURL+")"}})]):e._e()])])}),0)};i._withStripped=!0;var a={props:{answers:Array,question_id:Number},data:function(){return{countOfCorrect:0,selectedCorrectByUser:0,isAnswerCorrect:!1}},methods:{validationAfterUpdate:function(){var e=0;this.answers.forEach(function(t){!0===t.selectedByStudent&&e++}),this.selectedCorrectByUser=e,this.selectedCorrectByUser===this.countOfCorrect?this.isAnswerCorrect=!0:this.isAnswerCorrect=!1},countCorrentAnswer:function(e){var t=0;e.forEach(function(e){!0===e.correct&&t++}),this.countOfCorrect=t},validationAnswer:function(e,t){return t?e?this.selectedCorrectByUser--:this.selectedCorrectByUser++:e?this.selectedCorrectByUser++:this.selectedCorrectByUser--,this.selectedCorrectByUser===this.countOfCorrect?this.isAnswerCorrect=!0:this.isAnswerCorrect=!1,this.isAnswerCorrect},selectAnswer:function(e,t){var s;if(console.log(e.target.className),"answer__text-wrap"!==e.target.className)switch(e.target.tagName){case"LABEL":s=this.validationAnswer(t.correct,t.selectedByStudent),console.log(s),t.selectedByStudent=!t.selectedByStudent,this.$emit("changeAnswer",t,this.question_id,s),e.target.parentNode.parentNode.parentNode.classList.toggle("answer__active"),e.target.parentNode.previousSibling.firstChild.classList.toggle("answer__checkbox_active");break;case"DIV":s=this.validationAnswer(t.correct,t.selectedByStudent),console.log(s),t.selectedByStudent=!t.selectedByStudent,this.$emit("changeAnswer",t,this.question_id,s),e.target.parentNode.parentNode.parentNode.classList.toggle("answer__active"),e.target.classList.toggle("answer__checkbox_active");break;case"P":s=this.validationAnswer(t.correct,t.selectedByStudent),console.log(s),t.selectedByStudent=!t.selectedByStudent,this.$emit("changeAnswer",t,this.question_id,s),e.target.parentElement.parentElement.classList.toggle("answer__active"),e.target.nextSibling.firstChild.classList.toggle("answer__checkbox_active")}},setActiveAnswer:function(e,t,s){for(var n=0;n<e.length;n++)t[n].selectedByStudent?(e[n].classList.add("answer__active"),s[n].classList.add("answer__checkbox_active")):(e[n].classList.remove("answer__active"),s[n].classList.remove("answer__checkbox_active"))}},created:function(){this.countCorrentAnswer(this.answers)},mounted:function(){},updated:function(){console.log("updated"),this.$refs.answersList.forEach(function(e){e.classList.remove("answer__active")}),this.$refs.checkbox_list.forEach(function(e){e.classList.remove("answer__checkbox_active")}),this.setActiveAnswer(this.$refs.answersList,this.answers,this.$refs.checkbox_list)},watch:{answers:function(e){this.countCorrentAnswer(e),this.selectedCorrectByUser=0,this.isAnswerCorrect=!1,this.validationAfterUpdate()}}},c=(s(464),s(52)),o=Object(c.a)(a,i,[],!1,null,"c43611b4",null);o.options.__file="src/admin/components/passing_test_-answer_multy.vue";var u=o.exports,l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"passing_test__answers-list"},e._l(e.answers,function(t){return s("li",{ref:"answersList",refInFor:!0,staticClass:"passing_test__answers-item answer",class:{answer__active:t.selectedByStudent}},[s("div",{staticClass:"answer__text-wrap",on:{click:function(s){return e.selectAnswer(s,t)}}},[s("p",{staticClass:"answer__text",class:{answerTextWithImg:t.imgURL}},[e._v(e._s(t.text))]),s("div",{staticClass:"answer__checkbox-wrap"},[s("div",{ref:"checkbox_list",refInFor:!0,staticClass:"answer__checkbox",class:{answer__checkbox_active:t.selectedByStudent}})]),t.imgURL?s("div",{staticClass:"question__img-wrap"},[s("label",{staticClass:"question__img",style:{"background-image":"url("+t.imgURL+")"}})]):e._e()])])}),0)};l._withStripped=!0;var _={props:{answers:Array,question_id:Number},data:function(){return{selectedCorrectByUser:0,isAnswerCorrect:!1}},methods:{countCorrentAnswer:function(e){var t=0;e.forEach(function(e){!0===e.correct&&t++}),this.countOfCorrect=t},setUserAnswer:function(e){this.answers.map(function(t){return t.answer_id==e.answer_id?t.selectedByStudent=!0:t.selectedByStudent=!1,t}),console.log(this.answers)},resetActiveStyle:function(){this.$refs.answersList.forEach(function(e){e.classList.remove("answer__active")}),this.$refs.checkbox_list.forEach(function(e){e.classList.remove("answer__checkbox_active")})},validationAnswer:function(e){return this.isAnswerCorrect=!!e,this.isAnswerCorrect},selectAnswer:function(e,t){var s;if("answer__text-wrap"!==e.target.className)switch(e.target.tagName){case"LABEL":this.resetActiveStyle(),s=this.validationAnswer(t.correct),console.log(s),this.$emit("changeAnswer_one",t,this.question_id,s),e.target.parentNode.parentNode.parentNode.classList.toggle("answer__active"),e.target.parentNode.previousSibling.firstChild.classList.toggle("answer__checkbox_active");break;case"DIV":this.resetActiveStyle(),s=this.validationAnswer(t.correct),console.log(s),this.$emit("changeAnswer_one",t,this.question_id,s),e.target.parentNode.parentNode.parentNode.classList.toggle("answer__active"),e.target.classList.toggle("answer__checkbox_active");break;case"P":this.resetActiveStyle(),s=this.validationAnswer(t.correct),console.log(s),this.$emit("changeAnswer_one",t,this.question_id,s),e.target.parentElement.parentElement.classList.toggle("answer__active"),e.target.nextSibling.firstChild.classList.toggle("answer__checkbox_active")}},setActiveAnswer:function(e,t,s){for(var n=0;n<e.length;n++)t[n].selectedByStudent?(e[n].classList.add("answer__active"),s[n].classList.add("answer__checkbox_active")):(e[n].classList.remove("answer__active"),s[n].classList.remove("answer__checkbox_active"))}},created:function(){this.countCorrentAnswer(this.answers)},mounted:function(){},updated:function(){console.log("updated"),this.$refs.answersList.forEach(function(e){e.classList.remove("answer__active")}),this.$refs.checkbox_list.forEach(function(e){e.classList.remove("answer__checkbox_active")}),this.setActiveAnswer(this.$refs.answersList,this.answers,this.$refs.checkbox_list)},watch:{answers:function(e){console.log("anwers changed")}}},d=(s(465),Object(c.a)(_,l,[],!1,null,"55c4e8dc",null));d.options.__file="src/admin/components/passing_test-answer_one.vue";var h=d.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"handwrite-wrap"},[e._m(0),s("div",{staticClass:"handwrite__text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.usersAnswer,expression:"usersAnswer"}],staticClass:"handwrite__text",attrs:{type:"text",disabled:e.editMode},domProps:{value:e.usersAnswer},on:{input:function(t){t.target.composing||(e.usersAnswer=t.target.value)}}}),e.editMode?e._e():s("div",{staticClass:"handwrite__actions_save",on:{click:e.saveAnswer}}),e.editMode?s("div",{staticClass:"handwrite__actions_edit",on:{click:function(t){e.editMode=!e.editMode}}}):e._e()])])};w._withStripped=!0;var f={props:{question_id:Number,userHandwriteAnswer:String,keywords:Array},data:function(){return{usersAnswer:"",editMode:!1}},methods:{deleteSpaceFromString:function(e){for(;""==e[e.length-1];)console.log("последний элемент пустой"),e.splice(e.length-1,1)},validationAnswer:function(e){for(var t=0,s=(e=e.toLowerCase()).split(" ");""==s[s.length-1];)s.splice(s.length-1,1);for(var n=0;n<this.keywords.length;n++)s.includes(this.keywords[n])&&t++;return this.keywords.length-1<=t},saveAnswer:function(){this.editMode=!this.editMode;var e=this.validationAnswer(this.usersAnswer);console.log(e),this.$emit("saveHandwrite",this.usersAnswer,this.question_id,e)}},created:function(){},mounted:function(){console.log(this.userHandwriteAnswer),console.log("nounted"),this.usersAnswer=this.userHandwriteAnswer,""!=this.userHandwriteAnswer&&(this.editMode=!0)},updated:function(){},watch:{}},v=(s(466),Object(c.a)(f,w,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"handwrite__label-wrap"},[t("label",{staticClass:"handwrite__label"},[this._v("Введите ваш ответ")])])}],!1,null,"03127414",null));v.options.__file="src/admin/components/pasing_test-answer_hand.vue";var g=v.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"result"},[s("div",{staticClass:"result-wrap"},[e._m(0),s("div",{staticClass:"result__mark-wrap"},[e.finalMark?s("h1",{staticClass:"result__mark"},[e._v(e._s(e.finalMark))]):s("h1",{staticClass:"result__mark"},[e._v("Не сдал ")])]),s("div",{staticClass:"result_btn-wrap"},[s("button",{staticClass:"result__btn btn",attrs:{type:"button"},on:{click:e.showAnswers}},[e._v("Просмотр ответов")])])])])};p._withStripped=!0;var m={props:{countOfCorrect:Number,countOfQuestions:Number,finalMark:Number},data:function(){return{}},methods:{showAnswers:function(){this.$emit("showUsersAnswers")}},mounted:function(){}},b=(s(467),Object(c.a)(m,p,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"result__label-wrap"},[t("label",{staticClass:"result__label"},[this._v("Ваша оценка")])])}],!1,null,"c1cb3a88",null));function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){C(e,t,s[t])})}return e}function C(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}b.options.__file="src/admin/components/passing_test_result_public.vue";var y={components:{MULTY_ANSWER:u,ONE_ANSWER:h,HANDWRITING_ANSWER:g,TEST_RESULT:b.exports},props:{},data:function(){return{showResult:!1,currentQuestion:"",activeQuestion:0,usersAnswer:[],questionsWithUsersAnswers:[],copyQuestions:"",breadcrumbs:[],countOfCorrect:0,finalMark:""}},methods:A({},Object(r.b)("helped",["setCompletedTestQuestions"]),Object(r.b)("results",["addNewResult"]),{calculateResult:function(){},showAnswers:function(){this.setCompletedTestQuestions(this.copyQuestions),this.$router.push("/completedTest")},completeTest:function(){console.log(this.copyQuestions),this.countOfCorrect=this.countCorrectAnswers(),console.log(this.countOfCorrect),this.calc(this.countOfCorrect);var e=A({},this.currentStudentData,{mark:this.finalMark});console.log(e),this.showResult=!0,this.addNewResult(e)},calculateMark:function(e,t,s,n,r){e<s&&(n=0),e==s?(r=e/t*100,console.log(e+" : precent of correct "+r),console.log("Оценка 25")):e>s&&(r=e/t*100,console.log(e+" : precent of correct "+r),55<r&&r<=60&&(console.log("оценка 26"),n+=1),60<r&&r<=65&&(console.log("оценка 27"),n+=2),65<r&&r<=70&&(console.log("оценка 28"),n+=3),70<r&&r<=75&&(console.log("оценка 29"),n+=4),75<r&&r<=80&&(console.log("оценка 30"),n+=5),80<r&&r<=85&&(console.log("оценка 31"),n+=6),85<r&&r<=90&&(console.log("оценка 32"),n+=7),90<r&&r<=95&&(console.log("оценка 33"),n+=8),95<r&&r<=100&&(console.log("оценка 34"),n+=9)),this.finalMark=n},calc:function(e){var t=this.questions.length;console.log(t);var s=this.questions.length/2;s=Math.floor(s),console.log(s+" = half"),console.log("correct = "+e);var n=0;switch(this.currentStudentData.test_level){case 1:n=25,this.calculateMark(e,t,s,n,void 0);break;case 2:n=35,this.calculateMark(e,t,s,n,void 0);break;case 3:n=45,this.calculateMark(e,t,s,n,void 0)}},countCorrectAnswers:function(){var e=0;return this.copyQuestions.forEach(function(t){console.log(t),t.isAnswerCorrect&&e++}),e},saveUsersHandwriteAnswer:function(e,t,s){console.log("emit event after select Handwrite");var n=this.copyQuestions.map(function(n){return console.log(n),n.question.question_id===t&&(n.isAnswerCorrect=s,n.userHandwriteAnswer=e),n});console.log(n),this.copyQuestions=n},setNextQuestion:function(){this.activeQuestion++,this.currentQuestion=this.copyQuestions[this.activeQuestion];for(var e=0;e<this.breadcrumbs.length;e++)e==this.activeQuestion?this.breadcrumbs[e].classList.add("breadcrumb--active"):this.breadcrumbs[e].classList.remove("breadcrumb--active")},setAnswerWithUsersSelect_one:function(e,t,s){console.log("emit event after select OneAsnwer");var n=this.questions.map(function(n){return n.question.question_id===t&&(n.isAnswerCorrect=s,n.answers.map(function(t){return t.answer_id==e.answer_id?t.selectedByStudent=!0:t.selectedByStudent=!1,t})),n});console.log(n),this.copyQuestions=n},setAnswerWithUsersSelect_multy:function(e,t,s){var n=this.questions.map(function(n){return n.question.question_id===t&&(n.isAnswerCorrect=s,n.answers.map(function(t){t.answer_id,e.answer_id})),n});this.copyQuestions=n},createQuestionsArrayWithUsersAnswers:function(e){var t=this.questions.forEach(function(e){return"handwritingAnswer"!==e.type?e.answers.forEach(function(e){return e.selectedByStudent=!1,e}):e.userHandwriteAnswer="",e});console.log(t)},changeCurrentQuestion:function(e,t,s){for(var n=0;n<this.breadcrumbs.length;n++)n==s?this.breadcrumbs[n].classList.add("breadcrumb--active"):this.breadcrumbs[n].classList.remove("breadcrumb--active");this.currentQuestion=t,this.activeQuestion=s},setCurrentQuestion:function(){this.currentQuestion=this.copyQuestions[this.activeQuestion]}}),computed:A({},Object(r.d)("helped",{questions:function(e){return e.questionsForCurrentPassingTest}}),Object(r.d)("helped",{currentStudentData:function(e){return e.currentTestStudentData}})),mounted:function(){this.breadcrumbs=this.$refs.breadcrumb,this.breadcrumbs[0].classList.add("breadcrumb--active");for(var e=1;e<this.breadcrumbs.length;e++)this.breadcrumbs[e].classList.remove("breadcrumb--active")},created:function(){this.copyQuestions=A({},this.questions),this.setCurrentQuestion(),this.createQuestionsArrayWithUsersAnswers(this.questions)}},k=(s(468),Object(c.a)(y,n,[],!1,null,"7da913f0",null));k.options.__file="src/admin/components/passing_test.vue";t.default=k.exports}}]);