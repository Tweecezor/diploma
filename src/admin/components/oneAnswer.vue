<template lang="pug">
.wrapper-
  //- pre {{answerPhoto}}
  //- pre {{questionPhotoFile}}
  //- pre {{answerPhotoURl}}
  //- pre {{isCorrectAnswerSet}}
  .question
    .answer_new
      .answer_new__data
        .answer_new__topic-wrap
          label.answer_new__topic Введите текст ответа
        .answer_new__input-wrap
          input.answer_new__input(type="text", v-model="currentAnswer")
          .answer_new__actions
            button.answer_new__btn.answer_new__btn(@click="addAnswer") Добавить ответ
    .answers__title-wrap
      h2.asnwers__title Список ответов
    .answers__wrapper
      ul.answers__list(v-if="answers.length", v-for="(answer, id) in answers") 
        ANSWER_ITEM(
          :answer="answer",
          :answers="answers",
          :answerPhotoURl="answerPhotoURl",
          :prevAnswerPhotoURl="prevAnswerPhotoURl",
          v-on:emitSetCorrectAnswer="setCorrectAnswer",
          v-on:emitShowAnswerImg="showAnswerImg",
          v-on:emitDropAnswerURL="resetAnswerUrl",
          v-on:emitDeleteAnswer="deleteCurrentAnswer"
        )
  .actions__button-wrap
    button.actions__button-end(@click="endWorkWithQUestion") Завершить
    button.save.btn(@click="subitQuestion") Создать вопрос
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import ANSWER_ITEM from "./answer_item-one";
export default {
  components: {
    ANSWER_ITEM,
  },
  props: {
    currentLevel: Object,
    currentQuestion: String,
    questionPhotoURl: String,
    answerPhotoURl: String,
    prevAnswerPhotoURl: String,
    // answerPhoto: File,
    // questionID: Number,
  },
  data() {
    return {
      // correct: false,
      answerWithPhoto: false,
      // answerPhotoURl: "",
      // questionPhotoURl: "",
      questionWithPhoto: false,
      currentAnswer: "",
      question: {},
      // currentQuestion: "",
      // question_title: "",
      showInputAnswer: false,
      answers: [],
      typeOfQuestion: "",
      isCorrectAnswerSet: false,
      currentQuestion_id: "",
      editQuestion: false,
      editQuestionMode: false,
      editAnswer: false,
      // answersPhoto: new FormData(),
    };
  },
  methods: {
    ...mapActions("tooltips", ["showTooltip", "hideTooltip"]),

    endWorkWithQUestion() {
      this.$emit("emitEndWork");
    },

    resetAnswerUrl() {
      this.$emit("resetAnswerUrl");
    },
    deleteCurrentAnswer(answer) {
      this.answers = this.answers.filter((item) => {
        console.log(item);
        return item.answer_id !== answer.answer_id ? item : "";
      });
      this.showTooltip({
        type: "success",
        text: "Ответ успешно удален",
      });
    },
    changeAnswer(answer) {
      console.log(answer);
      this.answers.forEach((item) => {
        if (item.answer_id === answer.answer_id) {
          item.imgURL = this.answerPhotoURl;
        }
      });
      this.editAnswer = false;
    },
    showAnswerImg(answer) {
      console.log(answer);
      let currentAnswer = answer.answer;
      this.$emit("showCurrentAnswerIMG", { answer: currentAnswer });
    },
    saveChangedAnswer(id, newAnswerText) {
      console.log(this.editAnswer);
      this.editAnswer = !this.editAnswer;
      console.log(this.editAnswer);
      this.answers.filter((item) => {
        if (item.answer_id === id) {
          item.text = newAnswerText;
          return item;
        } else {
          return item;
        }
      });
    },
    editCurrentQuestion() {
      this.editQuestion = false;
    },
    saveEditedQuestion() {
      this.editQuestion = true;
    },
    loadPhoto(e) {
      const file = e.target.files[0];
      console.log(file);
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.questionPhotoURl = reader.result;
        };
      } catch (error) {
        alert(error.message);
        console.log(error.message.errors.photo);
      }
    },
    ...mapActions("questions", ["addNew"]),
    // ...mapActions("helped", [
    //   "changeCurrentTestStatus",
    //   "changeCurrentLevelStatus"
    // ]),
    setCorrectAnswer(updatedAnswers) {
      this.answers = updatedAnswers.updatedAnswers;
      this.isCorrectAnswerSet = true;
    },
    resetData() {
      this.answerWithPhoto = false;
      // this.answerPhotoURl = "";
      // this.questionPhotoURl = "";
      this.questionWithPhoto = false;
      this.currentAnswer = "";
      this.question = {};
      // this.currentQuestion = "";
      this.question_title = "";
      this.showInputAnswer = false;
      this.answers = [];
      this.typeOfQuestion = "";
      this.isCorrectAnswerSet = false;
    },
    subitQuestion() {
      if (this.isCorrectAnswerSet) {
        let qId = this.question_id(
          this.currentLevel.levelId,
          this.currentLevel.testid
        );
        if (qId === "empty") {
          this.currentQuestion_id = 1;
        } else {
          this.currentQuestion_id = qId + 1;
        }

        const questionWithAnswers = {
          type: "oneAnswer",
          // fileQuestion: this.questionPhotoFile,
          questionID: this.questionID,
          creatorId: localStorage.getItem("creatorId"),
          question: {
            text: this.currentQuestion,
            img: this.questionPhotoURl,
            question_id: Date.now(),
          },
          answers: this.answers,
          level_id: this.currentLevel.levelId,
          test_id: this.currentLevel.testid,
        };

        console.log(questionWithAnswers);
        this.addNew(questionWithAnswers);
        this.resetData();
        this.$emit("emitResetData");
        this.showTooltip({
          type: "success",
          text: "Вопрос успешно создан",
        });
      } else {
        this.showTooltip({
          type: "error",
          text: "Выберите верный вариант ответа",
        });
      }
    },
    addQuestion() {
      console.log(this.currentQuestion);
      if (this.currentQuestion === "") {
        alert("EMPTY");
      }
      if (this.currentQuestion === "" && this.questionPhotoURl === "") {
        alert("Добавьте текст или изображение");
      } else {
        this.showInputAnswer = !this.showInputAnswer;
        this.editQuestion = !this.editQuestion;
        this.editQuestionMode = !this.editQuestionMode;
      }
    },
    addAnswer() {
      if (!this.currentAnswer && !this.answerPhotoURl) {
        alert("Добавьте текст или изображение");
      } else {
        let answer = {
          text: this.currentAnswer,
          correct: false,
          imgURL: this.answerPhotoURl,
          // imgURL: "this.answerPhotoURl",
          answer_id: Date.now(),
        };
        // this.answersPhoto.append(answer.answer_id, this.answerPhoto);
        this.answers.push(answer);
        this.currentAnswer = "";
      }
      this.$emit("resetAnswerUrl");
    },
  },
  mounted() {
    // this.answersPhoto.append("questionID", this.questionID);
  },
  computed: {
    ...mapGetters("questions", ["question_id"]),
  },
  watch: {
    questionWithPhoto: function (status) {
      // console.log(status);
      if (!status) {
        // console.log(this.photoURl);
        this.questionPhotoURl = "";
      }
    },
    answerPhotoURl: function (url) {
      // console.log(url);
    },
  },
};
</script>
<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.wrapper- {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.wrapper {
  width: 100%;
  /* height: 300px; */
  background: white;
  margin-bottom: 20px;
}
.question {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.question__title-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.button-wrapper {
  display: flex;
  justify-self: flex-end;
}
.save {
  /* margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  color: darkblue; */
}
.question__type {
  margin-bottom: 10px;
}
.question_img {
  width: 200px;
  height: 200px;
  background: red;
  border-radius: 50%;
}
.input_question_img {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.question_avatar {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.answer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.addAnswer__button {
  width: 100px;
  margin-top: 20px;
}
.question__change_img {
  color: red;
  text-align: center;
}
.question__actions {
  display: flex;
}
.question__input {
  width: 100%;
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  margin-bottom: 10px;
}
.questions__actions_img {
  display: flex;
}

.asnwers__title {
  /* padding-bottom: 1.25rem; */
  border-bottom: 1px solid #414c63;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  margin-top: -5px;
}
.answers__item {
  display: flex;
  flex-direction: row;
}
.answer_new__data {
  width: 100%;
}
.answer_new__topic {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
.answer__text-wrap {
  width: 75%;
  margin-right: 2%;
}
.answer__correct-wrap {
  margin-right: 2%;
}
.answers__text {
  /* width: 100%; */
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  /* margin-bottom: 1.875rem; */
  margin-bottom: 15px;
  width: 100%;
}
.answer__actions-edit {
  /* padding-right: 50px; */
  position: relative;
  margin-right: 25px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.answer__actions-photo {
  /* padding-right: 50px; */
  position: relative;
  margin-right: 25px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:before {
    content: "";
    background: svg-load("photo.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.answer__actions-delete {
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  &:before {
    content: "";
    background: svg-load("trash.svg", fill= "red") center center no-repeat /
      contain;
    width: 18px;
    height: 18px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.answer__actions-save {
  position: relative;
  margin-right: 20px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  &:before {
    content: "";
    background: svg-load("tick.svg", fill= "green") center center no-repeat /
      contain;
    width: 18px;
    height: 18px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.answer__actions-cancel {
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 13px;
    height: 13px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.answer_new__input {
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  width: 100%;
  @include tablets {
    font-size: 20px;
  }
}
.answer_new {
  display: flex;
  margin-bottom: 30px;
}
.answers__wrapper {
  /* min-height: 200px; */
}
.answer_new__input-wrap {
  display: flex;
  width: 100%;
}
.answer__correct {
  height: 100%;
}
.answer__actions {
  width: 15%;
  display: flex;
  position: relative;
  margin-top: 10px;
}
.actions__button-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.actions__button-end {
  margin-right: 10px;
}
.answer_new__btn {
  /* display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 1.25rem;
  position: relative; */
}
</style>
