(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{383:function(s,t,e){},384:function(s,t,e){},385:function(s,t,e){},386:function(s,t,e){},435:function(s,t,e){"use strict";var r=e(383);e.n(r).a},436:function(s,t,e){"use strict";var r=e(384);e.n(r).a},437:function(s,t,e){"use strict";var r=e(385);e.n(r).a},438:function(s,t,e){"use strict";var r=e(386);e.n(r).a},477:function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"container_"},[e("div",{staticClass:"passing_test__breadcrumbs-wrap"},[e("ul",{staticClass:"passing_test__breadcrumbs-list"},s._l(s.questions,function(t,r){return e("li",{ref:"breadcrumb",refInFor:!0,staticClass:"passing_test__breadcrumbs-item breadcrumb",class:{breadcrumb__correct:t.isAnswerCorrect,breadcrumb__wrong:!t.isAnswerCorrect},on:{click:function(s){}}},[e("div",{staticClass:"breadcrumb__content",on:{click:function(e){return s.changeCurrentQuestion(e,t,r)}}},[s._v(s._s(r+1))])])}),0)]),e("div",{staticClass:"passing_test__question-wrap"},[e("div",{staticClass:"passing_test__question question"},[e("div",{staticClass:"question__text-wrap"},[e("p",{staticClass:"question__text"},[s._v(s._s(s.currentQuestion.question.text))])]),s.currentQuestion.question.img?e("div",{staticClass:"question__img-wrap"},[e("div",{staticClass:"question__img",style:{"background-image":"url("+s.currentQuestion.question.img+")"}})]):s._e()]),e("div",{staticClass:"passing_test__answers"},[e("div",{staticClass:"passing_test_answers_label"},[s._v("Варианты ответов")]),"multipleAnswer"===s.currentQuestion.type?e("MULTY_ANSWER",{attrs:{question_id:s.currentQuestion.question.question_id,answers:s.currentQuestion.answers}}):s._e(),"oneAnswer"===s.currentQuestion.type?e("ONE_ANSWER",{attrs:{question_id:s.currentQuestion.question.question_id,answers:s.currentQuestion.answers}}):s._e(),"handwritingAnswer"===s.currentQuestion.type?e("HANDWRITING_ANSWER",{attrs:{keywords:s.currentQuestion.keywordsArray,question_id:s.currentQuestion.question.question_id,userHandwriteAnswer:s.currentQuestion.userHandwriteAnswer}}):s._e()],1),e("div",{staticClass:"passing_test__answers_next-wrap"},[s.activeQuestion==s.questions.length-1?e("button",{staticClass:"passing_test__answers_next btn",attrs:{type:"button"},on:{click:s.closeTest}},[s._v("Закрыть")]):e("button",{staticClass:"passing_test__answers_next btn",attrs:{type:"button"},on:{click:s.setNextQuestion}},[s._v("Следующий вопрос")])])])])};r._withStripped=!0;var n=e(29),i=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",{staticClass:"passing_test__answers-list"},s._l(s.answers,function(t){return e("li",{ref:"answersList",refInFor:!0,staticClass:"passing_test__answers-item answer",class:{answer__active:t.selectedByStudent}},[e("div",{staticClass:"answer__text-wrap"},[e("p",{staticClass:"answer__text",class:{answerTextWithImg:t.imgURL}},[s._v(s._s(t.text))]),e("div",{staticClass:"answer__checkbox-wrap"},[e("div",{ref:"checkbox_list",refInFor:!0,staticClass:"answer__checkbox"},[t.selectedByStudent?e("svg",{staticClass:"answer__checkbox_correct",staticStyle:{"enable-background":"new 0 0 342.357 342.357"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 342.357 342.357","xml:space":"preserve"}},[e("polygon",{attrs:{points:"290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "}})]):s._e()])]),t.imgURL?e("div",{staticClass:"question__img-wrap"},[e("label",{staticClass:"question__img",style:{"background-image":"url("+t.imgURL+")"}})]):s._e()])])}),0)};i._withStripped=!0;var a={props:{answers:Array,question_id:Number},data:function(){return{countOfCorrect:0,selectedCorrectByUser:0,isAnswerCorrect:!1}},methods:{setActiveAnswer:function(s,t,e){for(var r=0;r<s.length;r++)t[r].selectedByStudent?(s[r].classList.add("answer__active"),e[r].classList.add("answer__checkbox_active")):(s[r].classList.remove("answer__active"),e[r].classList.remove("answer__checkbox_active"))}},created:function(){},mounted:function(){},updated:function(){console.log("updated"),this.$refs.answersList.forEach(function(s){s.classList.remove("answer__active")}),this.$refs.checkbox_list.forEach(function(s){s.classList.remove("answer__checkbox_active")}),this.setActiveAnswer(this.$refs.answersList,this.answers,this.$refs.checkbox_list)},watch:{answers:function(s){}}},c=(e(435),e(52)),o=Object(c.a)(a,i,[],!1,null,"12ee9dc2",null);o.options.__file="src/scripts/completed_test-answer_multy.vue";var u=o.exports,_=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",{staticClass:"passing_test__answers-list"},s._l(s.answers,function(t){return e("li",{ref:"answersList",refInFor:!0,staticClass:"passing_test__answers-item answer",class:{answer__active:t.selectedByStudent}},[e("div",{staticClass:"answer__text-wrap"},[e("p",{staticClass:"answer__text",class:{answerTextWithImg:t.imgURL}},[s._v(s._s(t.text))]),e("div",{staticClass:"answer__checkbox-wrap"},[e("div",{ref:"checkbox_list",refInFor:!0,staticClass:"answer__checkbox",class:{answer__checkbox_active:t.selectedByStudent}})]),t.imgURL?e("div",{staticClass:"question__img-wrap"},[e("label",{staticClass:"question__img",style:{"background-image":"url("+t.imgURL+")"}})]):s._e()])])}),0)};_._withStripped=!0;var l={props:{answers:Array,question_id:Number},data:function(){return{selectedCorrectByUser:0,isAnswerCorrect:!1}},methods:{setActiveAnswer:function(s,t,e){for(var r=0;r<s.length;r++)t[r].selectedByStudent?(s[r].classList.add("answer__active"),e[r].classList.add("answer__checkbox_active")):(s[r].classList.remove("answer__active"),e[r].classList.remove("answer__checkbox_active"))}},created:function(){},mounted:function(){},updated:function(){console.log("updated"),this.$refs.answersList.forEach(function(s){s.classList.remove("answer__active")}),this.$refs.checkbox_list.forEach(function(s){s.classList.remove("answer__checkbox_active")}),this.setActiveAnswer(this.$refs.answersList,this.answers,this.$refs.checkbox_list)},watch:{answers:function(s){console.log("anwers changed")}}},d=(e(436),Object(c.a)(l,_,[],!1,null,"63760b3c",null));d.options.__file="src/scripts/completed_test-answer_one.vue";var w=d.exports,b=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"handwrite-wrap"},[s._m(0),e("div",{staticClass:"handwrite__text-wrap"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.usersAnswer,expression:"usersAnswer"}],staticClass:"handwrite__text",attrs:{type:"text",disabled:s.editMode},domProps:{value:s.usersAnswer},on:{input:function(t){t.target.composing||(s.usersAnswer=t.target.value)}}})])])};b._withStripped=!0;var h={props:{question_id:Number,userHandwriteAnswer:String,keywords:Array},data:function(){return{usersAnswer:"",editMode:!1}},methods:{},created:function(){},mounted:function(){console.log(this.userHandwriteAnswer),console.log("nounted"),this.usersAnswer=this.userHandwriteAnswer,""!=this.userHandwriteAnswer&&(this.editMode=!0)},updated:function(){},watch:{}},v=(e(437),Object(c.a)(h,b,[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"handwrite__label-wrap"},[t("label",{staticClass:"handwrite__label"},[this._v("Введите ваш ответ")])])}],!1,null,"d2b403ee",null));function p(s){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.forEach(function(t){f(s,t,e[t])})}return s}function f(s,t,e){return t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}v.options.__file="src/scripts/completed_test-answer_hand.vue";var m={components:{MULTY_ANSWER:u,ONE_ANSWER:w,HANDWRITING_ANSWER:v.exports},props:{},data:function(){return{currentQuestion:"",activeQuestion:0,usersAnswer:[],questionsWithUsersAnswers:[],copyQuestions:"",breadcrumbs:[]}},methods:{closeTest:function(){this.$router.push("./")},setNextQuestion:function(){this.activeQuestion++,this.currentQuestion=this.copyQuestions[this.activeQuestion];for(var s=0;s<this.breadcrumbs.length;s++)s==this.activeQuestion?this.breadcrumbs[s].classList.add("breadcrumb--active"):this.breadcrumbs[s].classList.remove("breadcrumb--active")},changeCurrentQuestion:function(s,t,e){for(var r=0;r<this.breadcrumbs.length;r++)r==e?this.breadcrumbs[r].classList.add("breadcrumb--active"):this.breadcrumbs[r].classList.remove("breadcrumb--active");this.currentQuestion=t,this.activeQuestion=e},setCurrentQuestion:function(){this.currentQuestion=this.copyQuestions[this.activeQuestion]}},computed:p({},Object(n.d)("helped",{questions:function(s){return s.completedTestQuestions}})),mounted:function(){this.breadcrumbs=this.$refs.breadcrumb,this.breadcrumbs[0].classList.add("breadcrumb--active");for(var s=1;s<this.breadcrumbs.length;s++)this.breadcrumbs[s].classList.remove("breadcrumb--active")},created:function(){this.copyQuestions=p({},this.questions),this.setCurrentQuestion(),this.questions.length||this.$router.push("/")}},g=(e(438),Object(c.a)(m,r,[],!1,null,"4a63ba86",null));g.options.__file="src/scripts/completed_test.vue";t.default=g.exports}}]);