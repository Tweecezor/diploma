(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{505:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answers__wrapper"},["oneAnswer"===t.typeOfQuestion||"multipleAnswer"===t.typeOfQuestion?s("div",{staticClass:"answers__data"},[t._m(0),s("div",{staticClass:"answers__data_content"},[s("div",{staticClass:"answers__data_text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentAnswer.text,expression:"currentAnswer.text"}],staticClass:"answers__data_text",attrs:{type:"text",disabled:!t.editMode},domProps:{value:t.currentAnswer.text},on:{input:function(e){e.target.composing||t.$set(t.currentAnswer,"text",e.target.value)}}})]),"oneAnswer"===t.typeOfQuestion?s("div",{staticClass:"answers__data_correct-wrap"},[s("input",{staticClass:"answers__data_status",attrs:{type:"radio",name:t.question_id,disabled:!t.editMode},domProps:{value:t.currentAnswer.answer_id,checked:t.answer.correct},on:{change:t.setCorrectAnswer}})]):t._e(),"multipleAnswer"===t.typeOfQuestion?s("div",{staticClass:"answers__data_correct-wrap"},[s("input",{staticClass:"answers__data_status",attrs:{type:"checkbox",name:t.question_id,disabled:!t.editMode},domProps:{value:t.currentAnswer.answer_id,checked:t.answer.correct},on:{change:t.setCorrectAnswer}})]):t._e(),t.editMode||t.editPhotoMode?t._e():s("div",{staticClass:"answers__actions",class:{answers__actions__disabled:t.isActiveModeActive}},[s("div",{staticClass:"icon_wrap",on:{click:t.setEditMode}},[s("myIcon",{staticClass:"answers__actions_correct",attrs:{iconName:"pencil"}})],1),s("div",{staticClass:"icon_wrap",on:{click:function(e){return t.setAnswerImgUrl(t.answer)}}},[s("myIcon",{staticClass:"answer__actions-photo",attrs:{iconName:"add_image"}})],1),s("div",{staticClass:"icon_wrap",on:{click:t.deleteCurrentAnswer}},[s("myIcon",{staticClass:"answers__actions_trash",attrs:{iconName:"trash"}})],1)]),t.editMode?s("div",{staticClass:"answers__actions"},[s("div",{staticClass:"icon_wrap",on:{click:t.updateCurrentAnswer}},[s("myIcon",{staticClass:"answers__actions_update",attrs:{iconName:"done"}})],1),s("div",{staticClass:"icon_wrap",on:{click:t.cancelUpdate}},[s("myIcon",{staticClass:"answers__actions_cancel",attrs:{iconName:"cancel"}})],1)]):t._e(),t.editPhotoMode?s("div",{staticClass:"answers__actions"},[s("div",{staticClass:"icon_wrap",on:{click:t.saveNewImg}},[s("myIcon",{staticClass:"answers__actions_update",attrs:{iconName:"done"}})],1),s("div",{staticClass:"icon_wrap",on:{click:t.cancelImgUpdate}},[s("myIcon",{staticClass:"answers__actions_cancel",attrs:{iconName:"cancel"}})],1)]):t._e()])]):t._e()])};n._withStripped=!0;var r=s(51),i=s(479);function a(t,e,s,n,r,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,r)}function o(t){return function(){var e=this,s=arguments;return new Promise(function(n,r){var i=t.apply(e,s);function o(t){a(i,n,r,o,c,"next",t)}function c(t){a(i,n,r,o,c,"throw",t)}o(void 0)})}}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){u(t,e,s[e])})}return t}function u(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={props:{answer:Object,test_id:Number,level_id:Number,question_id:Number,answerLength:Number,typeOfQuestion:String,answerImgUrl:String,_id:String},components:{myIcon:i.a},data:function(){return{editPhotoMode:!1,editMode:!1,newAnswer:"",newAnswerImgURL:"",showQImg:!1,currentAnswer:c({},this.answer),showAImg:!1,prevCorrectAnswer:{correct:this.answer.correct,text:this.answer.text},newImg:!1,prevAnswerImgUrl:""}},methods:c({},Object(r.b)("tooltips",["showTooltip","hideTooltip"]),Object(r.b)("questions",["changeAnswerStatus","updateAnswer","addNewAnswer","deleteAnswer"]),Object(r.b)("helped",["setEditStatus"]),{setEditMode:function(){this.isActiveModeActive||(this.editMode=!0,this.setEditStatus(!0))},cancelImgUpdate:function(){console.log("cancel"),this.editPhotoMode=!1,this.$emit("emitResetAnswerImgUrl"),this.setEditStatus(!1)},saveNewImg:function(){var t=o(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.editPhotoMode=!1,t.next=4,this.updateAnswer((u(e={text:this.currentAnswer.text,imgURL:this.answerImgUrl,answer_id:this.currentAnswer.answer_id,level_id:this.level_id,test_id:this.test_id,question_id:this.question_id},"imgURL",this.answerImgUrl),u(e,"_id",this._id),e));case 4:this.showTooltip({type:"success",text:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e"}),this.$emit("emitResetAnswerImgUrl"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.showTooltip({type:"error",text:t.t0});case 11:this.setEditStatus(!1);case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(){return t.apply(this,arguments)}}(),setAnswerImgUrl:function(t){this.isActiveModeActive||(this.editPhotoMode=!0,console.log(this.answer.imgURL),this.prevAnswerImgUrl=this.answer.imgURL,this.$emit("setAnswerImgURL",t.imgURL),this.setEditStatus(!0))},newAnswerAdd:function(){var t={answer:{text:this.newAnswer,correct:!1,imgURL:this.newAnswerImgURL,answer_id:Date.now()},test_id:this.test_id,level_id:this.level_id,question_id:this.question_id};console.log(t),this.addNewAnswer(t)},loadImg:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.newImg=s;var n=t.target.files[0];console.log(n);var r=new FileReader;try{r.readAsDataURL(n),r.onload=function(){e.currentAnswer.imgURL=r.result}}catch(t){alert(t.message),console.log(t.message.errors.photo),console.log(this.currentAnswer.imgURL)}},deleteImg:function(){this.currentAnswer.imgURL=""},deleteCurrentAnswer:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isActiveModeActive){t.next=10;break}return t.prev=1,t.next=4,this.deleteAnswer({answer_id:this.currentAnswer.answer_id,level_id:this.level_id,test_id:this.test_id,question_id:this.question_id,_id:this._id});case 4:this.showTooltip({type:"success",text:"\u041e\u0442\u0432\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.showTooltip({type:"error",text:t.t0});case 10:case"end":return t.stop()}},t,this,[[1,7]])}));return function(){return t.apply(this,arguments)}}(),updateCurrentAnswer:function(){var t=o(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.updateAnswer((u(e={text:this.currentAnswer.text,imgURL:this.currentAnswer.imgURL,answer_id:this.currentAnswer.answer_id,level_id:this.level_id,test_id:this.test_id,question_id:this.question_id},"imgURL",this.currentAnswer.imgURL),u(e,"_id",this._id),e));case 3:this.editMode=!this.editMode,this.newImg=!1,this.showAImg=!1,this.showTooltip({type:"success",text:"\u041e\u0442\u0432\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),this.showTooltip({type:"error",text:t.t0});case 12:this.setEditStatus(!1);case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(){return t.apply(this,arguments)}}(),cancelUpdate:function(){var t=o(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{this.changeAnswerStatus({text:this.prevCorrectAnswer.text,correct:this.prevCorrectAnswer.correct,test_id:this.test_id,level_id:this.level_id,question_id:this.question_id}),this.currentAnswer=c({},this.answer),this.editMode=!this.editMode,this.showTooltip({type:"success",text:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b"}),this.setEditStatus(!1)}catch(t){this.showTooltip({type:"error",text:t})}case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),showAnswerImage:function(){this.showAImg=!this.showAImg},setCorrectAnswer:function(){var t=o(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.changeAnswerStatus({answer_id:+e.target.value,correct:e.target.checked,test_id:this.test_id,level_id:this.level_id,question_id:this.question_id,type:this.typeOfQuestion,_id:this._id});case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}},t,this,[[0,5]])}));return function(e){return t.apply(this,arguments)}}()}),watch:{answer:function(t){this.currentAnswer=c({},this.answer)}},mounted:function(){this.setEditStatus(!1)},computed:c({},Object(r.d)("helped",{isActiveModeActive:function(t){return t.isEditActive}}))},d=(s(585),s(10)),_=Object(d.a)(l,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"answers__data_label-wrap"},[e("label",{staticClass:"answers__data_label"},[this._v("\u0422\u0435\u043a\u0441\u0442 \u043e\u0442\u0432\u0435\u0442\u0430")])])}],!1,null,"4fecaa3c",null);_.options.__file="src/admin/components/answer-item.vue";e.a=_.exports},527:function(t,e,s){},528:function(t,e,s){},529:function(t,e,s){},530:function(t,e,s){},531:function(t,e,s){},558:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[t._m(0),s("div",{staticClass:"question__content"},[s("div",{staticClass:"question__data"},[s("div",{staticClass:"questions__data_content"},[s("div",{staticClass:"question__data_text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.currentQuestion.text,expression:"currentQuestion.text"}],staticClass:"question__input question__text",attrs:{type:"text",disabled:!t.isActiveModeActive},domProps:{value:t.currentQuestion.text},on:{input:function(e){e.target.composing||t.$set(t.currentQuestion,"text",e.target.value)}}})]),t.editMode?s("div",{staticClass:"question__actions"},[s("svg",{staticClass:"question__actions_save",staticStyle:{"enable-background":"new 0 0 342.357 342.357"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 342.357 342.357","xml:space":"preserve"},on:{click:t.updateCurrentQuestion}},[s("polygon",{attrs:{points:"290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "}})]),t._v(" "),s("svg",{staticClass:"question__actions_cancel",attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1000 1000","enable-background":"new 0 0 1000 1000","xml:space":"preserve"},on:{click:t.cancelUpdate}},[s("g",[s("path",{attrs:{d:"M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"}})])])]):s("div",{staticClass:"question__actions",class:{questions__actions__disabled:t.isActiveModeActive}},[s("div",{staticClass:"icon_wrap",on:{click:t.setEditMode}},[s("myIcon",{staticClass:"question__actions_correct",attrs:{iconName:"pencil"}})],1),s("div",{staticClass:"icon_wrap",on:{click:t.deleteQuestion}},[s("myIcon",{staticClass:"question__actions_trash",attrs:{iconName:"trash"}})],1)])])]),t.currentQuestion.img?s("div",{staticClass:"question__image",on:{click:t.showQuestionImage}},[t._m(1),t.currentQuestion.img&&t.showQImg?s("div",{staticClass:"question_image_img-wrap"},[s("div",{staticClass:"question_image_img",style:{"background-image":"url("+t.currentQuestion.img+")"}})]):t._e()]):t._e()])])};n._withStripped=!0;var r=s(51),i=s(505),a=s(479);function o(t,e,s,n,r,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,r)}function c(t){return function(){var e=this,s=arguments;return new Promise(function(n,r){var i=t.apply(e,s);function a(t){o(i,n,r,a,c,"next",t)}function c(t){o(i,n,r,a,c,"throw",t)}a(void 0)})}}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){l(t,e,s[e])})}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={components:{ANSWER_ITEM:i.a,myIcon:a.a},props:{item:Object,test_id:Number,level_id:Number,qText:String,_id:String},data:function(){return{showQImg:!1,editMode:!1,currentQuestion:u({},this.item)}},methods:u({},Object(r.b)("helped",["changeCurrentTestStatus","changeCurrentLevelStatus","changeShowQuestionsStatus","setEditStatus"]),Object(r.b)("questions",["updateQuestion","deleteCurrentQuestion"]),Object(r.b)("tooltips",["showTooltip","hideTooltip"]),{setEditMode:function(){this.isActiveModeActive||(this.editMode=!0,this.setEditStatus(!0))},showQuestionImage:function(){this.showQImg=!this.showQImg},showAnswerImage:function(){this.showAImg=!this.showAImg},deleteQuestion:function(){var t=c(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isActiveModeActive){t.next=12;break}return t.prev=1,e={_id:this._id,level_id:this.level_id,test_id:this.test_id,question_id:this.currentQuestion.question_id},t.next=5,this.deleteCurrentQuestion(e);case 5:this.showTooltip({type:"success",text:"\u0412\u043e\u043f\u0440\u043e\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u0442\u0435\u0441\u0442\u0430"}),this.$emit("closeQuestion"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),this.showTooltip({type:"error",text:t.t0});case 12:case"end":return t.stop()}},t,this,[[1,9]])}));return function(){return t.apply(this,arguments)}}(),updateCurrentQuestion:function(){var t=c(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={level_id:this.level_id,test_id:this.test_id,newQuestionTitle:this.currentQuestion.text,question_id:this.currentQuestion.question_id,img:this.currentQuestion.img,_id:this._id},t.prev=1,t.next=4,this.updateQuestion(e);case 4:this.editMode=!this.editMode,this.showTooltip({type:"success",text:"\u0422\u0435\u043a\u0441\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),this.showTooltip({type:"error",text:t.t0});case 11:this.setEditStatus(!1);case 12:case"end":return t.stop()}},t,this,[[1,8]])}));return function(){return t.apply(this,arguments)}}(),cancelUpdate:function(){this.currentQuestion=u({},this.item),this.editMode=!this.editMode,this.showTooltip({type:"success",text:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b"}),this.setEditStatus(!1)}}),computed:u({},Object(r.d)("helped",{showQuestions:function(t){return t.showQuestions}}),Object(r.d)("helped",{isActiveModeActive:function(t){return t.isEditActive}})),watch:{item:function(t){console.log(t),this.currentQuestion=u({},this.item)}}},_=(s(586),s(10)),w=Object(_.a)(d,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"question__title-wrap"},[e("h1",{staticClass:"question__title"},[this._v("\u0422\u0435\u043a\u0441\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"question__image_label-wrap"},[e("div",{staticClass:"question__image_label"},[this._v("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u0430")])])}],!1,null,"2558cc8c",null);w.options.__file="src/admin/components/question-item.vue";e.a=w.exports},559:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"answer__add"},[t._m(0),s("div",{staticClass:"answer__add_text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newAnswer,expression:"newAnswer"}],staticClass:"answer__add_text",attrs:{type:"text"},domProps:{value:t.newAnswer},on:{input:function(e){e.target.composing||(t.newAnswer=e.target.value)}}}),s("div",{on:{click:t.newAnswerAdd}},[s("myIcon",{staticClass:"answer__add_icon",attrs:{iconName:"add"}})],1)])])};n._withStripped=!0;var r=s(51),i=s(479);function a(t,e,s,n,r,i,a){try{var o=t[i](a),c=o.value}catch(t){return void s(t)}o.done?e(c):Promise.resolve(c).then(n,r)}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={props:{test_id:Number,level_id:Number,question_id:Number,answerLength:Number,currentAnswerImgUrl:String,_id:String},components:{myIcon:i.a},data:function(){return{newAnswer:"",newAnswerImgURL:""}},methods:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){o(t,e,s[e])})}return t}({},Object(r.b)("tooltips",["showTooltip","hideTooltip"]),Object(r.b)("questions",["changeAnswerStatus","updateAnswer","addNewAnswer"]),{newAnswerAdd:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={answer:{text:this.newAnswer,correct:!1,imgURL:this.currentAnswerImgUrl,answer_id:Date.now()},test_id:this.test_id,level_id:this.level_id,question_id:this.question_id,_id:this._id},t.prev=1,t.next=4,this.addNewAnswer(e);case 4:this.showTooltip({type:"success",text:"\u041e\u0442\u0432\u0435\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"}),this.newAnswer="",this.$emit("emitResetAnswerImgUrl"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),this.showTooltip({type:"error",text:t.t0});case 12:case"end":return t.stop()}},t,this,[[1,9]])}),function(){var e=this,s=arguments;return new Promise(function(n,r){var i=t.apply(e,s);function o(t){a(i,n,r,o,c,"next",t)}function c(t){a(i,n,r,o,c,"throw",t)}o(void 0)})});return function(){return e.apply(this,arguments)}}()})},u=(s(587),s(10)),l=Object(u.a)(c,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"answer__add_title-wrap"},[e("label",{staticClass:"answer__add_title"},[this._v("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043e\u0442\u0432\u0435\u0442")])])}],!1,null,"110d762d",null);l.options.__file="src/admin/components/answerAddNew.vue";e.a=l.exports},560:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keywords_wrap"},[t._m(0),t._m(1),s("div",{staticClass:"addWorks__tags-list-wrap"},[s("ul",{staticClass:"addWorks__tags-list"},t._l(t.keywords,function(e,n){return 0!=t.keywords.length&&""!=e?s("li",{staticClass:"addWorks__tags-item"},[t._v(t._s(e)),s("div",{staticClass:"deleteTag",on:{click:function(e){return t.removeKeyword(n)}}},[t._v("x")])]):t._e()}),0)]),s("div",{staticClass:"keywords__add_text-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"keywords__add_text",attrs:{type:"text",name:"tag",id:"input-tag"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),s("button",{staticClass:"addKeyword btn",attrs:{type:"button"},on:{click:t.addKeyword}},[t._v("+")])])])};n._withStripped=!0;var r=s(51);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var a={props:{keywords:Array,typeOfQuestion:String,_id:String},data:function(){return{keyword:""}},methods:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){i(t,e,s[e])})}return t}({},Object(r.b)("questions",["changeKeywords"]),{removeKeyword:function(t){this.keywords.splice(t,1);var e={_id:this._id,keywords:this.keywords};this.changeKeywords(e)},addKeyword:function(){this.keywords.push(this.keyword);var t={_id:this._id,keywords:this.keywords};this.changeKeywords(t),this.keyword=""}})},o=(s(588),s(10)),c=Object(o.a)(a,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"keywords__title-wrap"},[e("h2",{staticClass:"keywords__title"},[this._v("\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0441\u043b\u043e\u0432")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"keywords__add"},[e("div",{staticClass:"keywords__add_label-wrap"},[e("label",{staticClass:"keywords__add_label",attrs:{for:"input-tag"}},[this._v("\u041a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e")])])])}],!1,null,"27443fd0",null);c.options.__file="src/admin/components/keywordsAnswer.vue";e.a=c.exports},565:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"questions__item question"},[s("QUESTION_ITEM",{attrs:{item:t.currentItem.question,test_id:t.currentItem.test_id,level_id:t.currentItem.level_id}}),"handwritingAnswer"!==t.currentItem.type?s("div",{staticClass:"answer__content"},[s("div",{staticClass:"answers__title"},[t._v("\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043e\u0442\u0432\u0435\u0442\u043e\u0432")]),s("div",{staticClass:"answers__data"},[s("div",{staticClass:"answers__data_img"},[s("div",{staticClass:"current_level__files",style:{"background-image":"url("+t.currentAnswerImgUrl+")"}},[s("div",{staticClass:"current_level__file-upload"},[s("label",{staticClass:"current_level__load-text",attrs:{for:"photoFile"}},[s("p",[t._v("\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u043e\u043f\u0440\u043e\u0441\u0430")]),""==t.currentAnswerImgUrl?s("div",{staticClass:"dropzone",attrs:{id:"drop1"}},[s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoFile",accept:"image/*"},on:{change:t.loadAnwerPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c")])]):s("div",{staticClass:"dropzone"},[s("input",{staticClass:"current_level__file-input",attrs:{type:"file",id:"photoFile",accept:"image/*"},on:{change:t.changeAnswerPhoto}}),s("div",{staticClass:"current_level__file-btn btn"},[t._v("\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c")])])])])])]),s("div",{staticClass:"answers__data_content"},[s("ul",{staticClass:"answers__list"},t._l(t.currentItem.answers,function(e){return s("li",{staticClass:"answers__item answer"},[s("ANSWER_ITEM",{attrs:{typeOfQuestion:t.item.type,answerLength:t.item.answers.length,question_id:t.item.question.question_id,answer:e,test_id:t.item.test_id,level_id:t.item.level_id,answerImgUrl:t.currentAnswerImgUrl},on:{setAnswerImgURL:t.setCurrentAnswerIMG,emitResetAnswerImgUrl:t.resetAnswerImgUrl}})],1)}),0),s("ADD_NEW_ANSWER",{attrs:{answerLength:t.currentItem.answers.length,question_id:t.currentItem.question.question_id,test_id:t.currentItem.test_id,level_id:t.currentItem.level_id,currentAnswerImgUrl:t.currentAnswerImgUrl,answerImgUrl:t.currentAnswerImgUrl},on:{emitResetAnswerImgUrl:t.resetAnswerImgUrl}})],1)])]):s("div",[s("KEYWORDS_ANSWER",{attrs:{keywords:t.currentItem.keywordsArray,typeOfQuestion:t.currentItem.type}})],1)],1)};n._withStripped=!0;var r=s(51),i=s(558),a=s(505),o=s(559),c=s(560);function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){l(t,e,s[e])})}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={components:{QUESTION_ITEM:i.a,ANSWER_ITEM:a.a,ADD_NEW_ANSWER:o.a,KEYWORDS_ANSWER:c.a},props:{item:Object},data:function(){return{showQImg:!1,showAImg:!1,isTestOpen:!1,currentQuestionID:1,currentAnswerImgUrl:"",currentItem:u({},this.item)}},methods:u({},Object(r.b)("helped",["changeCurrentTestStatus","changeCurrentLevelStatus","changeShowQuestionsStatus"]),{loadAnwerPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.currentAnswerImgUrl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},changeAnswerPhoto:function(t){var e=this,s=t.target.files[0];console.log(s);var n=new FileReader;try{n.readAsDataURL(s),n.onload=function(){e.currentAnswerImgUrl=n.result}}catch(t){alert(t.message),console.log(t.message.errors.photo)}},resetAnswerImgUrl:function(){this.currentAnswerImgUrl=""},setCurrentAnswerIMG:function(t){this.currentAnswerImgUrl=t},closeSection:function(){this.changeShowQuestionsStatus(!1)}}),computed:u({},Object(r.d)("helped",{showQuestions:function(t){return t.showQuestions}}))},_=(s(589),s(10)),w=Object(_.a)(d,n,[],!1,null,"f585c714",null);w.options.__file="src/admin/components/currentQuestionOnLevel.vue";e.a=w.exports},585:function(t,e,s){"use strict";var n=s(527);s.n(n).a},586:function(t,e,s){"use strict";var n=s(528);s.n(n).a},587:function(t,e,s){"use strict";var n=s(529);s.n(n).a},588:function(t,e,s){"use strict";var n=s(530);s.n(n).a},589:function(t,e,s){"use strict";var n=s(531);s.n(n).a}}]);