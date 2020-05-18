<template lang="pug">
  .wrapper-
    .keywords__add
      .keywords__add_label-wrap
        label(for="input-tag").keywords__add_label Ключевое слово
      .keywords__add_text-wrap
        input(type="text" name="tag" id="input-tag" v-model='keyword').keywords__add_text
        button(type="button" @click="addKeyword").addKeyword.btn +
      //- div.error-input()
    .addWorks__tags-list-wrap(v-if="keywordsArray.length")
      ul.addWorks__tags-list()
        li(v-for="(item,index) in keywordsArray" v-if="keywordsArray.length!=0 && item!=''" ).addWorks__tags-item {{item}}
          .deleteTag(@click="removeKeyword(index)") x
    .actions__button-wrap
      button(@click="endWorkWithQUestion").actions__button-end Завершить
      button(@click="subitQuestion").save.btn Создать вопрос
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  props: {
    currentLevel: Object,
    currentQuestion: String,
    questionPhotoURl: String
  },
  data() {
    return {
      questionWithPhoto: false,
      question: {},
      question_title: "",
      typeOfQuestion: "",
      currentQuestion_id: "",
      editQuestion: false,
      editQuestionMode: false,
      keyword: "",
      showInputAnswer: false,
      keywordsArray: []
    };
  },
  methods: {
    ...mapActions("tooltips", ["showTooltip", "hideTooltip"]),
    endWorkWithQUestion() {
      this.$emit("emitEndWork");
    },

    addKeyword() {
      if (this.keyword) {
        console.log(this.keyword.length);
        // while (this.keyword.lastIndexOf(" ") != -1) {
        //   // console.log("empty");
        //   this.keyword = this.keyword.slice(0, this.keyword.length - 1);
        // }
        this.keyword = this.keyword.trim();

        console.log(this.keyword.length);
        this.keywordsArray.push(this.keyword.toLowerCase());
        this.keyword = "";
        this.showTooltip({
          type: "success",
          text: "Ключевое слово добавлено"
        });
      } else {
        this.showTooltip({
          type: "error",
          text: "Введите ключевое слово"
        });
      }
    },
    removeKeyword(currentKeyword) {
      console.log(currentKeyword);
      this.keywordsArray.splice(currentKeyword, 1);
      this.showTooltip({
        type: "success",
        text: "Ключевое слово успешно удалено"
      });
      console.log(this.keywordsArray);
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
    resetData() {
      this.questionWithPhoto = false;
      this.question = {};
      this.question_title = "";
      this.typeOfQuestion = "";
      this.currentQuestion_id = "";
      this.editQuestion = false;
      this.editQuestionMode = false;
      this.keyword = "";
      this.showInputAnswer = false;
      this.keywordsArray = [];
    },
    subitQuestion() {
      console.log(this.keywordsArray);
      if (this.keywordsArray.length) {
        let qId = this.question_id(
          this.currentLevel.levelId,
          this.currentLevel.testid
        );

        if (qId === "empty") {
          this.currentQuestion_id = 1;
        } else {
          this.currentQuestion_id = qId + 1;
        }

        const questionWithKeywords = {
          type: "handwritingAnswer",
          question: {
            text: this.currentQuestion,
            img: this.questionPhotoURl,
            question_id: Date.now()
            // question_id: this.currentQuestion_id
          },
          keywordsArray: this.keywordsArray,
          level_id: this.currentLevel.levelId,
          test_id: this.currentLevel.testid
        };

        console.log(questionWithKeywords);
        this.addNew(questionWithKeywords);
        this.resetData();
        this.$emit("emitResetData");
        this.showTooltip({
          type: "success",
          text: "Вопрос успешно создан"
        });
      } else {
        this.showTooltip({
          type: "error",
          text: "Сначала добавьте ключевые слова"
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
    }
  },
  computed: {
    ...mapGetters("questions", ["question_id"])
  },
  watch: {
    questionWithPhoto: function(status) {
      if (!status) {
        this.questionPhotoURl = "";
      }
    }
  }
};
</script>
<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.keywords__add_label {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
.keywords__add_text {
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  width: 100%;
  margin-bottom: 1.875rem;
  @include tablets {
    font-size: 20px;
  }
}
.keywords__add_text-wrap {
  display: flex;
}
/////////////-------------

.wrapper {
  width: 100%;
  /* height: 300px; */
  background: white;
  margin-bottom: 20px;
}
.question {
  display: flex;
  flex-direction: column;
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
  margin-bottom: 20px; */
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

.addWorks__tags-list {
  display: flex;
}
.addWorks__tags-item {
  padding: 5px 15px;
  background-color: #f4f4f4;
  border-radius: 15px;
  margin-right: 10px;
  padding-right: 30px;
  position: relative;
  display: flex;
  &:last-child {
    margin-right: 0px;
  }
}
.deleteTag {
  position: absolute;
  right: 10%;
  cursor: pointer;
  font-weight: 700;
  top: 4px;
}
.addWorks__tags-list-wrap {
  /* margin-bottom: 10px; */
}
.addWorks__label-wrap {
  display: flex;
  flex-direction: column;
}
.addKeyword {
  margin-bottom: 30px;
}
.keywords__input {
  margin-bottom: 20px;
}
.actions__button-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.actions__button-end {
  margin-right: 10px;
}
</style>