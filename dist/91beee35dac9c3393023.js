(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{390:function(t,e,s){},391:function(t,e,s){},392:function(t,e,s){},393:function(t,e,s){},394:function(t,e,s){},395:function(t,e,s){},396:function(t,e,s){},402:function(t,e,s){},403:function(t,e,s){},415:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"current_level-wrapper"},[t._m(0),s("div",{staticClass:"current_level__content"},[s("div",{staticClass:"current_level__content-top"},[s("div",{staticClass:"current_level__files",style:{"background-image":"url("+this.questionPhotoURl+")"}},[s("div",{staticClass:"current_level__file-upload"},[s("label",{staticClass:"current_level__load-text",attrs:{for:"photoFile"}},[s("p",[t._v("Изображение для вопроса")]),s("div",{staticClass:"dropzone",attrs:{id:"drop1"}}),s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoFile",accept:"image/*"},on:{change:t.loadPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("Загрузить")])])])]),s("div",{staticClass:"current_level-data"},[t._m(1),s("div",{staticClass:"question__input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQuestion,expression:"currentQuestion"}],staticClass:"question__input",attrs:{type:"text"},domProps:{value:t.currentQuestion},on:{input:function(e){e.target.composing||(t.currentQuestion=e.target.value)}}})]),t._m(2),s("div",{staticClass:"current_level__question-wrap"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.typeOfQuestion,expression:"typeOfQuestion"}],staticClass:"current_level__question-select",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.typeOfQuestion=e.target.multiple?s:s[0]}}},[s("option",{staticClass:"current_level__question-option",attrs:{value:"oneAnswer"}},[t._v("Однозначный ответ")]),s("option",{staticClass:"current_level__question-option",attrs:{value:"multipleAnswer"}},[t._v("Множественный ответ")]),s("option",{staticClass:"current_level__question-option",attrs:{value:"handwritingAnswer"}},[t._v("Свободный ответ")])])])])]),s("div",{staticClass:"current_level__topic-wrap"},["handwritingAnswer"!=t.typeOfQuestion?s("h1",{staticClass:"current_level__topic"},[t._v("Добавление ответов")]):s("h1",{staticClass:"current_level__topic"},[t._v("Добавление ключевых слов")])]),s("div",{staticClass:"current_level__content-bottom"},["handwritingAnswer"!=t.typeOfQuestion?s("div",{staticClass:"current_level__files current_level__files--answer",style:{"background-image":"url("+this.answerPhotoURl+")"}},[s("div",{staticClass:"current_level__file-upload"},[s("label",{staticClass:"current_level__load-text",attrs:{for:"photoAnswerFile"}},[s("p",[t._v("Изображение для ответа")]),""===t.answerPhotoURl?s("div",{staticClass:"dropzone",attrs:{id:"drop1"}},[s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoAnswerFile",accept:"image/*"},on:{change:t.loadAnwerPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("Загрузить")])]):s("div",{staticClass:"dropzone"},[s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoAnswerFile",accept:"image/*"},on:{change:t.changeAnswerPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("Изменить")])])])])]):t._e(),"handwritingAnswer"!==t.typeOfQuestion?s("div",{staticClass:"current_level-data"},["oneAnswer"===t.typeOfQuestion?s("ONE_ANSWER",{attrs:{prevAnswerPhotoURl:t.prevAnswerPhotoURl,answerPhotoURl:t.answerPhotoURl,questionPhotoURl:t.questionPhotoURl,currentQuestion:t.currentQuestion,currentLevel:t.currentLevel},on:{resetAnswerUrl:t.dropAnswerURL,showCurrentAnswerIMG:t.setAnswerURL,emitResetData:t.resetData}}):t._e(),"multipleAnswer"===t.typeOfQuestion?s("MULTIPLE_ANSWER",{attrs:{prevAnswerPhotoURl:t.prevAnswerPhotoURl,answerPhotoURl:t.answerPhotoURl,questionPhotoURl:t.questionPhotoURl,currentQuestion:t.currentQuestion,currentLevel:t.currentLevel},on:{resetAnswerUrl:t.dropAnswerURL,showCurrentAnswerIMG:t.setAnswerURL,emitResetData:t.resetData}}):t._e(),s("div",{staticClass:"current_level__btn-wrap"},[s("button",{staticClass:"save btn",on:{click:t.subitQuestion}},[t._v("Завершить")])])],1):t._e(),"handwritingAnswer"===t.typeOfQuestion?s("div",{staticClass:"current_level-data--hand"},[s("HANDWRITING_ANSWER",{attrs:{currentLevel:t.currentLevel}}),s("div",{staticClass:"current_level__btn-wrap"},[s("button",{staticClass:"save btn",on:{click:t.subitQuestion}},[t._v("Завершить")])])],1):t._e()])])])};n._withStripped=!0;var r=s(51),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper-"},[s("div",{staticClass:"question"},[t._m(0),s("div",{staticClass:"answers__wrapper"},t._l(t.answers,function(e,n){return t.answers.length?s("ul",{staticClass:"answers__list"},[s("ANSWER_ITEM",{attrs:{answer:e,answers:t.answers,answerPhotoURl:t.answerPhotoURl,prevAnswerPhotoURl:t.prevAnswerPhotoURl},on:{emitSetCorrectAnswer:t.setCorrectAnswer,emitShowAnswerImg:t.showAnswerImg,emitDropAnswerURL:t.resetAnswerUrl}})],1):t._e()}),0),s("div",{staticClass:"answer_new"},[s("div",{staticClass:"answer_new__data"},[t._m(1),s("div",{staticClass:"answer_new__input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentAnswer,expression:"currentAnswer"}],staticClass:"answer_new__input",attrs:{type:"text"},domProps:{value:t.currentAnswer},on:{input:function(e){e.target.composing||(t.currentAnswer=e.target.value)}}}),s("div",{staticClass:"answer_new__actions"},[s("button",{staticClass:"answer_new__btn answer_new__btn",on:{click:t.addAnswer}},[t._v("Добавить ответ")])])])])])]),s("button",{staticClass:"save",attrs:{type:"submit"},on:{click:t.subitQuestion}},[t._v("Сохранить вопрос")])])};i._withStripped=!0;var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"answers__item answer"},[s("div",{staticClass:"answer__text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer.text,expression:"answer.text"}],staticClass:"answers__text",attrs:{type:"text"},domProps:{value:t.answer.text},on:{input:function(e){e.target.composing||t.$set(t.answer,"text",e.target.value)}}})]),s("div",{staticClass:"answer__correct-wrap"},[s("input",{staticClass:"answer__correct",attrs:{type:"radio",name:"isCorrect",id:"isCorrect"},domProps:{value:t.answer.text},on:{change:t.setCorrectAnswer}})]),t.editAnswer?t._e():s("div",{staticClass:"answer__actions"},[s("div",{staticClass:"answer__actions-photo",on:{click:function(e){return t.showAnswerImg(t.answer)}}}),s("div",{staticClass:"answer__actions-delete"})]),t.editAnswer?s("div",{staticClass:"answer__actions"},[s("div",{staticClass:"answer__actions-save",on:{click:function(e){return t.changeAnswer(t.answer)}}}),s("div",{staticClass:"answer__actions-cancel",on:{click:function(e){return t.cancelChangeAnswer(t.answer)}}})]):t._e()])};o._withStripped=!0;var a={props:{answer:Object,answers:Array,answerPhotoURl:String,prevAnswerPhotoURl:String},data:function(){return{editAnswer:!1}},methods:{cancelChangeAnswer:function(t){var e=this;this.answers.forEach(function(s){s.answer_id===t.answer_id&&(s.imgURL=e.prevAnswerPhotoURl)}),this.editAnswer=!1,this.$emit("emitDropAnswerURL")},changeAnswer:function(t){var e=this;console.log(t),this.answers.forEach(function(s){s.answer_id===t.answer_id&&(s.imgURL=e.answerPhotoURl)}),this.editAnswer=!1,this.$emit("emitDropAnswerURL")},showAnswerImg:function(t){this.editAnswer=!0,this.$emit("emitShowAnswerImg",{answer:t})},setCorrectAnswer:function(t){console.log(this.answers),console.log(t.target.value),console.log(t.target.checked);var e=this.answers.map(function(e){return e.text===t.target.value?(e.correct=t.target.checked,e):(e.correct=!1,e)});console.log(e),this.$emit("emitSetCorrectAnswer",{updatedAnswers:e})}}},l=(s(421),s(50)),c=Object(l.a)(a,o,[],!1,null,"79b6aca6",null);function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){h(t,e,s[e])})}return t}function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}c.options.__file="src/admin/components/answer_item-one.vue";var w={components:{ANSWER_ITEM:c.exports},props:{currentLevel:Object,currentQuestion:String,questionPhotoURl:String,answerPhotoURl:String,prevAnswerPhotoURl:String},data:function(){return{answerWithPhoto:!1,questionWithPhoto:!1,currentAnswer:"",question:{},showInputAnswer:!1,answers:[],typeOfQuestion:"",isCorrectAnswerSet:!1,currentQuestion_id:"",editQuestion:!1,editQuestionMode:!1,editAnswer:!1}},methods:u({resetAnswerUrl:function(){this.$emit("resetAnswerUrl")},changeAnswer:function(t){var e=this;console.log(t),this.answers.forEach(function(s){s.answer_id===t.answer_id&&(s.imgURL=e.answerPhotoURl)}),this.editAnswer=!1},showAnswerImg:function(t){console.log(t);var e=t.answer;this.$emit("showCurrentAnswerIMG",{answer:e})},saveChangedAnswer:function(t,e){console.log(this.editAnswer),this.editAnswer=!this.editAnswer,console.log(this.editAnswer),this.answers.filter(function(s){return s.answer_id===t?(s.text=e,s):s})},editCurrentQuestion:function(){this.editQuestion=!1},saveEditedQuestion:function(){this.editQuestion=!0},loadPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.questionPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}}},Object(r.b)("questions",["addNew"]),{setCorrectAnswer:function(t){this.answers=t.updatedAnswers,this.isCorrectAnswerSet=!0},resetData:function(){this.answerWithPhoto=!1,this.questionWithPhoto=!1,this.currentAnswer="",this.question={},this.question_title="",this.showInputAnswer=!1,this.answers=[],this.typeOfQuestion=""},subitQuestion:function(){if(this.isCorrectAnswerSet){var t=this.question_id(this.currentLevel.levelId,this.currentLevel.testid);this.currentQuestion_id="empty"===t?1:t+1;var e={type:"oneAnswer",question:{text:this.currentQuestion,img:this.questionPhotoURl,question_id:this.currentQuestion_id},answers:this.answers,level_id:this.currentLevel.levelId,test_id:this.currentLevel.testid};console.log(e),this.addNew(e),this.resetData(),this.$emit("emitResetData")}else alert("Выберите верный вариант ответа")},addQuestion:function(){console.log(this.currentQuestion),""===this.currentQuestion&&alert("EMPTY"),""===this.currentQuestion&&""===this.questionPhotoURl?alert("Добавьте текст или изображение"):(this.showInputAnswer=!this.showInputAnswer,this.editQuestion=!this.editQuestion,this.editQuestionMode=!this.editQuestionMode)},addAnswer:function(){if(this.currentAnswer||this.answerPhotoURl){var t={text:this.currentAnswer,correct:!1,imgURL:this.answerPhotoURl,answer_id:this.answers.length+1};this.answers.push(t),this.currentAnswer=""}else alert("Добавьте текст или изображение");this.$emit("resetAnswerUrl")}}),computed:u({},Object(r.c)("questions",["question_id"])),watch:{questionWithPhoto:function(t){t||(this.questionPhotoURl="")},answerPhotoURl:function(t){console.log(t)}}},d=(s(422),Object(l.a)(w,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"answers__title-wrap"},[e("h2",{staticClass:"asnwers__title"},[this._v("Список ответов")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"answer_new__topic-wrap"},[e("label",{staticClass:"answer_new__topic"},[this._v("Введите текст ответа")])])}],!1,null,"0dfde438",null));d.options.__file="src/admin/components/oneAnswer.vue";var _=d.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper-"},[s("div",{staticClass:"question__wrapper"},[t._m(0),s("div",{staticClass:"answers__wrapper"},t._l(t.answers,function(e,n){return t.answers.length?s("ul",{staticClass:"answers__list"},[s("ANSWER_ITEM",{attrs:{answer:e,answers:t.answers,answerPhotoURl:t.answerPhotoURl,prevAnswerPhotoURl:t.prevAnswerPhotoURl},on:{emitSetCorrectAnswer:t.setCorrectAnswer,emitShowAnswerImg:t.showAnswerImg,emitDropAnswerURL:t.resetAnswerUrl}})],1):t._e()}),0),s("div",{staticClass:"answer_new"},[s("div",{staticClass:"answer_new__data"},[t._m(1),s("div",{staticClass:"answer_new__input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentAnswer,expression:"currentAnswer"}],staticClass:"answer_new__input",attrs:{type:"text"},domProps:{value:t.currentAnswer},on:{input:function(e){e.target.composing||(t.currentAnswer=e.target.value)}}}),s("div",{staticClass:"answer_new__actions"},[s("button",{staticClass:"answer_new__btn answer_new__btn",on:{click:t.addAnswer}},[t._v("Добавить ответ")])])])])])]),s("button",{staticClass:"save",on:{click:t.subitQuestion}},[t._v("Сохранить вопрос")])])};v._withStripped=!0;var p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"answers__item answer"},[s("div",{staticClass:"answer__text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.answer.text,expression:"answer.text"}],staticClass:"answers__text",attrs:{type:"text"},domProps:{value:t.answer.text},on:{input:function(e){e.target.composing||t.$set(t.answer,"text",e.target.value)}}})]),s("div",{staticClass:"answer__correct-wrap"},[s("input",{staticClass:"answer__correct",attrs:{type:"checkbox",name:"isCorrect",id:"isCorrect"},domProps:{value:t.answer.text},on:{change:t.setCorrectAnswer}})]),t.editAnswer?t._e():s("div",{staticClass:"answer__actions"},[s("div",{staticClass:"answer__actions-photo",on:{click:function(e){return t.showAnswerImg(t.answer)}}}),s("div",{staticClass:"answer__actions-delete"})]),t.editAnswer?s("div",{staticClass:"answer__actions"},[s("div",{staticClass:"answer__actions-save",on:{click:function(e){return t.changeAnswer(t.answer)}}}),s("div",{staticClass:"answer__actions-cancel",on:{click:function(e){return t.cancelChangeAnswer(t.answer)}}})]):t._e()])};p._withStripped=!0;var f={props:{answer:Object,answers:Array,answerPhotoURl:String,prevAnswerPhotoURl:String},data:function(){return{editAnswer:!1}},methods:{cancelChangeAnswer:function(t){var e=this;this.answers.forEach(function(s){s.answer_id===t.answer_id&&(s.imgURL=e.prevAnswerPhotoURl)}),this.editAnswer=!1,this.$emit("emitDropAnswerURL")},changeAnswer:function(t){var e=this;console.log(t),this.answers.forEach(function(s){s.answer_id===t.answer_id&&(s.imgURL=e.answerPhotoURl)}),this.editAnswer=!1,this.$emit("emitDropAnswerURL")},showAnswerImg:function(t){this.editAnswer=!0,this.$emit("emitShowAnswerImg",{answer:t})},setCorrectAnswer:function(t){console.log(this.answers),console.log(t.target.value),console.log(t.target.checked);var e=this.answers.map(function(e){return e.text===t.target.value?(e.correct=t.target.checked,e):e});console.log(e),this.$emit("emitSetCorrectAnswer",{updatedAnswers:e})}}},m=(s(423),Object(l.a)(f,p,[],!1,null,"25097750",null));function g(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){A(t,e,s[e])})}return t}function A(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}m.options.__file="src/admin/components/answer_item-multy.vue";var b={components:{ANSWER_ITEM:m.exports},props:{currentLevel:Object,currentQuestion:String,questionPhotoURl:String,answerPhotoURl:String,prevAnswerPhotoURl:String},data:function(){return{answerWithPhoto:!1,questionWithPhoto:!1,currentAnswer:"",question:{},question_title:"",showInputAnswer:!1,answers:[],typeOfQuestion:"",isCorrectAnswerSet:!1,currentQuestion_id:"",editQuestion:!1,editQuestionMode:!1,editAnswer:!1}},methods:g({resetAnswerUrl:function(){this.$emit("resetAnswerUrl")},changeAnswer:function(t){var e=this;console.log(t),this.answers.forEach(function(s){s.answer_id===t.answer_id&&(s.imgURL=e.answerPhotoURl)}),this.editAnswer=!1},showAnswerImg:function(t){console.log(t);var e=t.answer;this.$emit("showCurrentAnswerIMG",{answer:e})},saveChangedAnswer:function(t,e){console.log(this.editAnswer),this.editAnswer=!this.editAnswer,console.log(this.editAnswer),this.answers.filter(function(s){return s.answer_id===t?(s.text=e,s):s})},editCurrentQuestion:function(){this.editQuestion=!1},saveEditedQuestion:function(){this.editQuestion=!0},loadAnswerPhoto:function(t){var e=this,s=t.target.files[0],n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.answerPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},loadPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.questionPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}}},Object(r.b)("questions",["addNew"]),{setCorrectAnswer:function(t){this.answers=t.updatedAnswers,this.isCorrectAnswerSet=!0},resetData:function(){this.answerWithPhoto=!1,this.question={},this.question_title="",this.showInputAnswer=!1,this.answers=[],this.typeOfQuestion=""},subitQuestion:function(){if(console.log(this.answers),this.isCorrectAnswerSet){var t=this.question_id(this.currentLevel.levelId,this.currentLevel.testid);this.currentQuestion_id="empty"===t?1:t+1;var e={type:"multipleAnswer",question:{text:this.currentQuestion,img:this.questionPhotoURl,question_id:this.currentQuestion_id},answers:this.answers,level_id:this.currentLevel.levelId,test_id:this.currentLevel.testid};console.log(e),this.addNew(e),this.resetData(),this.$emit("emitResetData")}else alert("Выберите верный вариант ответа")},addQuestion:function(){console.log(this.currentQuestion),""===this.currentQuestion&&alert("EMPTY"),""===this.currentQuestion&&""===this.questionPhotoURl?alert("Добавьте текст или изображение"):(this.showInputAnswer=!this.showInputAnswer,this.editQuestion=!this.editQuestion,this.editQuestionMode=!this.editQuestionMode)},addAnswer:function(){if(this.currentAnswer||this.answerPhotoURl){var t={text:this.currentAnswer,correct:!1,imgURL:this.answerPhotoURl,answer_id:this.answers.length+1};this.answers.push(t),this.currentAnswer=""}else alert("Добавьте текст или изображение");console.log(this.answers),this.$emit("resetAnswerUrl")}}),computed:g({},Object(r.c)("questions",["question_id"])),watch:{questionWithPhoto:function(t){t||(this.questionPhotoURl="")}}},C=(s(424),Object(l.a)(b,v,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"answers__title-wrap"},[e("h2",{staticClass:"asnwers__title"},[this._v("Список ответов")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"answer_new__topic-wrap"},[e("label",{staticClass:"answer_new__topic"},[this._v("Введите текст ответа")])])}],!1,null,"2210c204",null));C.options.__file="src/admin/components/multipleAnswer.vue";var y=C.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper-"},[s("div",{staticClass:"keywords__add"},[t._m(0),s("div",{staticClass:"keywords__add_text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"keywords__add_text",attrs:{type:"text",name:"tag",id:"input-tag"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),s("button",{staticClass:"addKeyword btn",attrs:{type:"button"},on:{click:t.addKeyword}},[t._v("+")])])]),t.keywordsArray.length?s("div",{staticClass:"addWorks__tags-list-wrap"},[s("ul",{staticClass:"addWorks__tags-list"},t._l(t.keywordsArray,function(e,n){return 0!=t.keywordsArray.length&&""!=e?s("li",{staticClass:"addWorks__tags-item"},[t._v(t._s(e)),s("div",{staticClass:"deleteTag",on:{click:function(e){return t.removeKeyword(n)}}},[t._v("x")])]):t._e()}),0)]):t._e(),s("button",{staticClass:"save",on:{click:t.subitQuestion}},[t._v("Сохранить вопрос")])])};function U(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){Q(t,e,s[e])})}return t}function Q(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}R._withStripped=!0;var P={props:{currentLevel:Object},data:function(){return{questionPhotoURl:"",questionWithPhoto:!1,question:{},currentQuestion:"",question_title:"",typeOfQuestion:"",currentQuestion_id:"",editQuestion:!1,editQuestionMode:!1,keyword:"",showInputAnswer:!1,keywordsArray:[]}},methods:U({addKeyword:function(){this.keyword?(this.keywordsArray.push(this.keyword),this.keyword=""):alert("Введите что-то")},removeKeyword:function(t){console.log(t),this.keywordsArray.splice(t,1),console.log(this.keywordsArray)},editCurrentQuestion:function(){this.editQuestion=!1},saveEditedQuestion:function(){this.editQuestion=!0},loadPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.questionPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}}},Object(r.b)("questions",["addNew"]),{resetData:function(){this.questionPhotoURl="",this.questionWithPhoto=!1,this.question={},this.currentQuestion="",this.question_title="",this.typeOfQuestion="",this.currentQuestion_id="",this.editQuestion=!1,this.editQuestionMode=!1,this.keyword="",this.showInputAnswer=!1,this.keywordsArray=[]},subitQuestion:function(){console.log(this.keywordsArray);var t=this.question_id(this.currentLevel.levelId,this.currentLevel.testid);this.currentQuestion_id="empty"===t?1:t+1;var e={type:"handwritingAnswer",question:{text:this.currentQuestion,img:this.questionPhotoURl,question_id:this.currentQuestion_id},keywordsArray:this.keywordsArray,level_id:this.currentLevel.levelId,test_id:this.currentLevel.testid};console.log(e),this.addNew(e),this.resetData()},addQuestion:function(){console.log(this.currentQuestion),""===this.currentQuestion&&alert("EMPTY"),""===this.currentQuestion&&""===this.questionPhotoURl?alert("Добавьте текст или изображение"):(this.showInputAnswer=!this.showInputAnswer,this.editQuestion=!this.editQuestion,this.editQuestionMode=!this.editQuestionMode)}}),computed:U({},Object(r.c)("questions",["question_id"])),watch:{questionWithPhoto:function(t){t||(this.questionPhotoURl="")}}},O=(s(425),Object(l.a)(P,R,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"keywords__add_label-wrap"},[e("label",{staticClass:"keywords__add_label",attrs:{for:"input-tag"}},[this._v("Ключевое слово")])])}],!1,null,"df64ff6a",null));function q(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}O.options.__file="src/admin/components/handwritingAnswer.vue";var S={components:{ONE_ANSWER:_,MULTIPLE_ANSWER:y,HANDWRITING_ANSWER:O.exports},props:{currentLevel:Object},data:function(){return{typeOfQuestion:"multipleAnswer",currentQuestion:"",questionPhotoURl:"",answerPhotoURl:"",prevAnswerPhotoURl:"",currentAnswer:""}},methods:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){q(t,e,s[e])})}return t}({},Object(r.b)("helped",["changeCurrentTestStatus","changeCurrentLevelStatus"]),{resetData:function(){this.currentQuestion="",this.questionPhotoURl="",this.answerPhotoURl=""},setAnswerURL:function(t){this.currentAnswer=t,console.log(this.currentAnswer),this.answerPhotoURl=t.answer.imgURL,console.log(this.answerPhotoURl)},dropAnswerURL:function(){console.log("dropURL"),this.answerPhotoURl=""},loadPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.questionPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},loadAnwerPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.answerPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},changeAnswerPhoto:function(t){var e=this;this.prevAnswerPhotoURl=this.answerPhotoURl;var s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.answerPhotoURl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},subitQuestion:function(){this.changeCurrentLevelStatus(!1),this.changeCurrentTestStatus(!0)}})},I=(s(426),Object(l.a)(S,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_level__topic-wrap"},[e("h1",{staticClass:"current_level__topic"},[this._v("Добавление вопроса")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"question__title-wrapper"},[e("label",{staticClass:"question__label question__title",attrs:{for:"question__title"}},[this._v("Введите вопрос")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"current_level__question-wrap"},[e("label",{staticClass:"current_level__question-label",attrs:{for:"question__type"}},[this._v("Выберите тип вопроса")])])}],!1,null,"37495f06",null));I.options.__file="src/admin/components/currentLevelInTestGroup.vue";e.a=I.exports},416:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"currentTest"},[s("ul",{staticClass:"currentTest__list"},t._l(+t.currentTestGroup.level,function(e,n){return s("li",{staticClass:"currentTest__item level"},[s("div",{staticClass:"level__title-wrap"},[s("h2",{staticClass:"level__title"},[t._v("Уровень "+t._s(n+1))])]),s("div",{staticClass:"level__actions"},[s("button",{staticClass:"level__actions_btn",on:{click:function(e){return t.addQuestions(n+1)}}},[t._v("Добавить вопросы")]),s("button",{staticClass:"level__actions_btn",on:{click:t.downloadQuestions}},[t._v("Загрузить вопрос")]),s("button",{staticClass:"level__actions_btn",on:{click:function(e){return t.showQuestions(n+1)}}},[t._v("Показать вопросы")])])])}),0)])};n._withStripped=!0;var r=s(51);function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){o(t,e,s[e])})}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var a={props:{currentTestGroup:Object,levelsCount:Number},data:function(){return{levelId:"",filteredQuestions:[]}},methods:i({},Object(r.b)("helped",["changeShowQuestionsStatus"]),{filterQuestion:function(t,e,s){return t.filter(function(t){if(t.level_id===e&&t.test_id===s)return t;console.log("nOOO")})},addQuestions:function(t){this.levelId=t;var e={levelId:t,testid:this.currentTestGroup.id};this.$emit("addNewQuestion",e)},downloadQuestions:function(){this.$router.push("./questions")},showQuestions:function(t){this.$emit("showAllQuestionsInGroup",t,this.currentTestGroup.id)}}),computed:i({},Object(r.d)("questions",{questions:function(t){return t.questions}}),Object(r.d)("helped",{showQuestionsStatus:function(t){return t.showQuestions}}))},l=(s(420),s(50)),c=Object(l.a)(a,n,[],!1,null,"40e51fa4",null);c.options.__file="src/admin/components/currentTestGroup.vue";e.a=c.exports},417:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"questions"},[s("ul",{staticClass:"breadcrumbs_list"},t._l(t.questions,function(e,n){return s("li",{ref:"breadcrumb",refInFor:!0,staticClass:"breadcrumbs_item breadcrumb"},[s("div",{staticClass:"breadcrumb_item",on:{click:function(s){return t.changeCurrentQuestion(s,e,n)}}},[t._v(t._s(n+1))])])}),0),s("div",{staticClass:"questions__close",on:{click:t.closeSection}},[t._v("X")]),s("div",{staticClass:"questions__list-wrap"},[t.questions.length?s("div",{staticClass:"questions__list"},[s("div",{staticClass:"questions__item question"},[s("QUESTION_ITEM",{attrs:{qText:t.qText,item:t.item.question,test_id:t.item.test_id,level_id:t.item.level_id}}),"handwritingAnswer"!==t.item.type?s("div",{staticClass:"answer__content"},[s("div",{staticClass:"answers__title"},[t._v("Просмотр ответов")]),s("div",{staticClass:"answers__data"},[s("div",{staticClass:"answers__data_img"},[s("div",{staticClass:"current_level__files",style:{"background-image":"url("+t.currentAnswerImgUrl+")"}},[s("div",{staticClass:"current_level__file-upload"},[s("label",{staticClass:"current_level__load-text",attrs:{for:"photoFile"}},[s("p",[t._v("Изображение для вопроса")]),""==t.currentAnswerImgUrl?s("div",{staticClass:"dropzone",attrs:{id:"drop1"}},[s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoFile",accept:"image/*"},on:{change:t.loadAnwerPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("Загрузить")])]):s("div",{staticClass:"dropzone"},[s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoFile",accept:"image/*"},on:{change:t.changeAnswerPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("Изменить")])])])])])]),s("div",{staticClass:"answers__data_content"},[s("ul",{staticClass:"answers__list"},t._l(t.item.answers,function(e){return s("li",{staticClass:"answers__item answer"},[s("ANSWER_ITEM",{attrs:{typeOfQuestion:t.item.type,answerLength:t.item.answers.length,question_id:t.item.question.question_id,answer:e,test_id:t.item.test_id,level_id:t.item.level_id,answerImgUrl:t.currentAnswerImgUrl},on:{setAnswerImgURL:t.setCurrentAnswerIMG,emitResetAnswerImgUrl:t.resetAnswerImgUrl}})],1)}),0),s("ADD_NEW_ANSWER",{attrs:{answerLength:t.item.answers.length,question_id:t.item.question.question_id,test_id:t.item.test_id,level_id:t.item.level_id,currentAnswerImgUrl:t.currentAnswerImgUrl,answerImgUrl:t.currentAnswerImgUrl},on:{emitResetAnswerImgUrl:t.resetAnswerImgUrl}})],1)])]):s("div",[s("KEYWORDS_ANSWER",{attrs:{keywords:t.item.keywordsArray,typeOfQuestion:t.item.type}})],1)],1)]):t._e()])])};n._withStripped=!0;var r=s(51),i=s(412),o=s(388),a=s(413),l=s(414),c=s(418);function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){h(t,e,s[e])})}return t}function h(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var w={components:{QUESTION_ITEM:i.a,ANSWER_ITEM:o.a,ADD_NEW_ANSWER:a.a,KEYWORDS_ANSWER:l.a,CURRENT_QUESTION:c.a},props:{questions:Array},data:function(){return{activeQuestion:0,qText:"",item:"",showQImg:!1,showAImg:!1,isTestOpen:!1,currentQuestionID:1,currentAnswerImgUrl:"",breadcrumbs:[]}},methods:u({},Object(r.b)("helped",["changeCurrentTestStatus","changeCurrentLevelStatus","changeShowQuestionsStatus"]),{setCurrentQuestion:function(){this.item=this.questions[this.activeQuestion]},changeCurrentQuestion:function(t,e,s){console.log(t.target);for(var n=0;n<this.breadcrumbs.length;n++)n==s?this.breadcrumbs[n].classList.add("breadcrumb--active"):this.breadcrumbs[n].classList.remove("breadcrumb--active");this.item=e,this.qText=e.question.text},loadAnwerPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.currentAnswerImgUrl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},changeAnswerPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.currentAnswerImgUrl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},resetAnswerImgUrl:function(){this.currentAnswerImgUrl=""},setCurrentAnswerIMG:function(t){this.currentAnswerImgUrl=t},closeSection:function(){this.changeShowQuestionsStatus(!1),this.changeCurrentTestStatus(!0)}}),computed:u({},Object(r.d)("helped",{showQuestions:function(t){return t.showQuestions}})),created:function(){this.setCurrentQuestion()},mounted:function(){console.log(this.$refs.breadcrumb),this.breadcrumbs=this.$refs.breadcrumb,this.breadcrumbs[0].classList.add("breadcrumb--active");for(var t=1;t<this.breadcrumbs.length;t++)this.breadcrumbs[t].classList.remove("breadcrumb--active")}},d=(s(432),s(50)),_=Object(d.a)(w,n,[],!1,null,"f264a962",null);_.options.__file="src/admin/components/allQuestionsForTest.vue";e.a=_.exports},420:function(t,e,s){"use strict";var n=s(390);s.n(n).a},421:function(t,e,s){"use strict";var n=s(391);s.n(n).a},422:function(t,e,s){"use strict";var n=s(392);s.n(n).a},423:function(t,e,s){"use strict";var n=s(393);s.n(n).a},424:function(t,e,s){"use strict";var n=s(394);s.n(n).a},425:function(t,e,s){"use strict";var n=s(395);s.n(n).a},426:function(t,e,s){"use strict";var n=s(396);s.n(n).a},432:function(t,e,s){"use strict";var n=s(402);s.n(n).a},433:function(t,e,s){"use strict";var n=s(403);s.n(n).a},443:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"actionsCurrentTest-wraper"},[t.isTestOpen?s("div",{staticClass:"backToTest",on:{click:t.backToTest}},[t._v("Back")]):t._e(),t.isCurrentLevelOpen?s("CURRENT_LEVEL_IN_TEST_GROUP",{attrs:{currentLevel:this.currentLevelInTestGroup}}):t._e(),t.isTestOpen?s("CURRENT_TEST_GROUP",{attrs:{currentTestGroup:this.currentTestGroup,levelsCount:+this.currentTestGroup.level},on:{showAllQuestionsInGroup:t.showAllQuestionsInGroup,addNewQuestion:t.addQuestion}}):t._e(),t.showQuestions?s("ALL_QUESTIONS_IN_GROUP",{attrs:{questions:t.filteredQuestions}}):t._e()],1)])};n._withStripped=!0;var r=s(51),i=s(416),o=s(415),a=s(417);function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){c(t,e,s[e])})}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={components:{CURRENT_TEST_GROUP:i.a,CURRENT_LEVEL_IN_TEST_GROUP:o.a,ALL_QUESTIONS_IN_GROUP:a.a},data:function(){return{showAllTests:!0,currentLevelInTestGroup:{},filteredQuestions:[],obj:{level:"3",name:"Тут название теста",group:""}}},methods:l({},Object(r.b)("tests",["addNew"]),Object(r.b)("helped",["changeCurrentTestStatus","changeCurrentLevelStatus","changeShowQuestionsStatus","setCurrentLevelInTestGroup","setCurrentTestGroup"]),{backToTest:function(){this.$router.push("./tests")},showAllQuestionsInGroup:function(t,e){console.log(t),console.log(e),this.changeShowQuestionsStatus(!0),this.changeCurrentTestStatus(!1);var s=this.filterQuestion(this.questions,t,e);this.filteredQuestions=s,console.log(this.filteredQuestions)},filterQuestion:function(t,e,s){return t.filter(function(t){if(console.log(t),t.level_id===e&&t.test_id===s)return console.log("correct == equal "),console.log(t),t;console.log("incorrect == equal"),console.log(t)})},addQuestion:function(t){console.log(t),this.currentLevelInTestGroup=l({},t),console.log("my event !!"),this.changeCurrentTestStatus(!this.isTestOpen),this.changeCurrentLevelStatus(!this.isCurrentLevelOpen)}}),computed:l({},Object(r.d)("groups",{groups:function(t){return t.groups}}),Object(r.d)("tests",{tests:function(t){return t.tests}}),Object(r.d)("helped",{currentTestGroup:function(t){return t.currentTestGroup}}),Object(r.d)("helped",{isCurrentLevelOpen:function(t){return t.isCurrentLevelOpen}}),Object(r.d)("helped",{isTestOpen:function(t){return t.isTestOpen}}),Object(r.d)("helped",{showQuestions:function(t){return t.showQuestions}}),Object(r.d)("questions",{questions:function(t){return t.questions}}))},h=(s(433),s(50)),w=Object(h.a)(u,n,[],!1,null,"74880cfa",null);w.options.__file="src/admin/components/pages/actionsWithCurrentTest.vue";e.default=w.exports}}]);