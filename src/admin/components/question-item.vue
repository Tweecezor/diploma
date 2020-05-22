<template lang="pug">
  .question 
    //- pre {{item}}
    //- pre {{currentQuestion}}
    //- pre {{test_id}}
    //- pre {{level_id}}
    //- pre {{qText}}
    //- pre {{isActiveModeActive}}  
    //- input(type="text" v-model="qText")
    //- input(type="text" v-model="item.text")
    .question__title-wrap
      h1.question__title Просмотр вопроса
    .question__content
      .question__data
        .question__data_label-wrap
          label.question__data_label Текст вопроса
        .questions__data_content
          .question__data_text-wrap
            //- input(type="text" v-model="item.text") 
            input(type="text" v-model="currentQuestion.text" :disabled="!isActiveModeActive").question__input.question__text
          .question__actions(v-if="!editMode" :class="{questions__actions__disabled:isActiveModeActive}")
            <svg @click="setEditMode" class="question__actions_correct" version="1.1" id="editIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
              <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
            </svg>
            //- .question__actions_correct(@click="editMode = true") 
            <svg  class="question__actions_trash" @click="deleteQuestion" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
              <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
            </svg>
            //- .question__actions_trash(@click="deleteQuestion") 
          .question__actions(v-else)
            //- .question__actions_save(@click="updateCurrentQuestion") 
            <svg version="1.1" @click="updateCurrentQuestion" class="question__actions_save" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
              <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
            </svg>
            //- .question__actions_cancel(@click="cancelUpdate") 
            <svg version="1.1" @click="cancelUpdate" class="question__actions_cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
              <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
            </svg>
      .question__image(@click="showQuestionImage" v-if="currentQuestion.img") 
        .question__image_label-wrap 
          .question__image_label Показать изображение вопроса
        .question_image_img-wrap(v-if="currentQuestion.img && showQImg")
          .question_image_img(:style="{'background-image':`url(${currentQuestion.img})`}")
      //- ANSWER_ITEM(:answers="curr")
    //- hr
    //- .answers
    //-   div.answers__title Ответы
    //-   ul(v-for="answer in item.answers").answers__list
    //-     li.answers__item.answer
    //-       span.answer__text {{answer.text}}
    //-       input(type="radio" name="isCorrect" :disabled="!editMode" :checked="answer.correct").answer__status
    //-       div(@click="showAnswerImage" v-if="answer.imgURL") Показать изображение ответа
    //-         div(v-if="answer.imgURL && showAImg").answer_img 
    //-           .answer_avatar(:style="{'background-image':`url(${answer.imgURL})`}")
</template>

<script>
import { mapActions, mapState } from "vuex";
import ANSWER_ITEM from "./answer-item";
export default {
  components: {
    ANSWER_ITEM,
  },
  props: {
    item: Object,
    test_id: Number,
    level_id: Number,
    qText: String,
    _id: String,
  },
  data() {
    return {
      showQImg: false,
      // showAImg: false,
      editMode: false,
      currentQuestion: { ...this.item },

      // isTestOpen:false
    };
  },
  methods: {
    ...mapActions("helped", [
      "changeCurrentTestStatus",
      "changeCurrentLevelStatus",
      "changeShowQuestionsStatus",
      "setEditStatus",
    ]),
    ...mapActions("questions", ["updateQuestion", "deleteCurrentQuestion"]),
    ...mapActions("tooltips", ["showTooltip", "hideTooltip"]),
    setEditMode() {
      if (!this.isActiveModeActive) {
        this.editMode = true;
        this.setEditStatus(true);
      }
    },
    showQuestionImage() {
      // console.log(this.showingImg);
      this.showQImg = !this.showQImg;
    },
    showAnswerImage() {
      this.showAImg = !this.showAImg;
    },
    // closeSection() {
    //   this.changeShowQuestionsStatus(false);
    // },
    deleteQuestion() {
      if (!this.isActiveModeActive) {
        let deletedQuestion = {
          _id: this._id,
          level_id: this.level_id,
          test_id: this.test_id,
          question_id: this.currentQuestion.question_id,
        };
        console.log(deletedQuestion);
        this.deleteCurrentQuestion(deletedQuestion);
      }
    },
    updateCurrentQuestion() {
      let updatedQuestion = {
        level_id: this.level_id,
        test_id: this.test_id,
        newQuestionTitle: this.currentQuestion.text,
        question_id: this.currentQuestion.question_id,
        img: this.currentQuestion.img,
        _id: this._id,
      };
      console.log(updatedQuestion);
      this.updateQuestion(updatedQuestion);
      this.editMode = !this.editMode;
      this.showTooltip({
        type: "success",
        text: "Текст вопроса успешно изменен",
      });
      this.setEditStatus(false);
    },
    cancelUpdate() {
      this.currentQuestion = { ...this.item };
      this.editMode = !this.editMode;
      this.showTooltip({
        type: "success",
        text: "Изменения отменены",
      });
      this.setEditStatus(false);
    },
  },
  computed: {
    ...mapState("helped", {
      showQuestions: (state) => state.showQuestions,
    }),
    ...mapState("helped", {
      isActiveModeActive: (state) => state.isEditActive,
    }),
  },
  watch: {
    item: function(item) {
      console.log(item);
      this.currentQuestion = { ...this.item };
    },
  },
};
</script>

<style lang="postcss" scoped>
.question {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.question__content {
  display: flex;
  flex-direction: column;
}
.question__data {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.question__actions {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.questions__data_content {
  display: flex;
}
.question__data_text-wrap {
  width: 100%;
  margin-right: 10px;
}
.question__image_label-wrap {
  margin-bottom: 10px;
}
.question_image_img-wrap {
  width: 80%;
  margin: 0 auto;
  height: 300px;
  border: 1px dashed;
}
.question_image_img {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;

  background-position: 50% 50%;
}

.questions {
  position: relative;
  width: 100%;
  /* padding: 40px; */
  margin-bottom: 20px;
  background: transparent;
  display: flex;
  flex-direction: column-reverse;
  /* display: flex; */
}
.questions__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.questions__item {
  width: 400px;
  background-color: white;
  min-height: 300px;
  border: 1px solid black;
}
.question_img {
  width: 100%;
  height: 200px;
}
.question_avatar {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.questions__empty {
  width: 100%;
  padding: 30px;
  background-color: white;
  height: 100px;
}
.questions__close {
  /* position: absolute;
  top: -10%;
  right: -5%; */
  text-align: right;
  color: black;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.question__input {
  padding: 20px;
}
.question__title {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #414c63;
  margin-bottom: 1.875rem;
  font-size: 1.125rem;
  font-weight: 700;
}
.question__text {
  width: 100%;
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  /* margin-bottom: 1.875rem;s */
}
.question__data {
  width: 100%;
}
.question__data_label-wrap {
  margin-bottom: 0.625rem;
}
.question__data_label {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
.question_aсtions {
  display: flex;
}
.question__actions_correct {
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: blue;
  /* &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.question__actions_trash {
  position: relative;
  /* margin-right: 20px; */
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: red;
  /* &:before {
    content: "";
    background: svg-load("trash.svg", fill= "red") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.question__actions_save {
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: green;
  /* &:before {
    content: "";
    background: svg-load("tick.svg", fill= "green") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.question__actions_cancel {
  position: relative;
  /* margin-right: 20px; */
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: red;
  /* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.questions__actions__disabled {
  svg {
    opacity: 0.5;
  }
}
</style>
