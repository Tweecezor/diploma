<template lang="pug">
  .answer__add
    .answer__add_title-wrap
      label.answer__add_title Добавить новый ответ
    .answer__add_text-wrap
      input(type="text" v-model="newAnswer").answer__add_text
      button(@click="newAnswerAdd").btn +
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    // answer: Object,
    test_id: Number,
    level_id: Number,
    question_id: Number,
    answerLength: Number,
    currentAnswerImgUrl: String
  },
  data() {
    return {
      newAnswer: "",
      newAnswerImgURL: ""
    };
  },
  methods: {
    ...mapActions("questions", [
      "changeAnswerStatus",
      "updateAnswer",
      "addNewAnswer"
    ]),
    newAnswerAdd() {
      let newAnswer = {
        answer: {
          text: this.newAnswer,
          correct: false,
          imgURL: this.currentAnswerImgUrl,
          answer_id: this.answerLength + 1
        },
        test_id: this.test_id,
        level_id: this.level_id,
        question_id: this.question_id
      };
      console.log(newAnswer);
      this.newAnswer = "";
      this.addNewAnswer(newAnswer);
      this.$emit("emitResetAnswerImgUrl");
    }
    // loadImg(e) {
    //   // console.log(isNewImg);
    //   // this.newImg = isNewImg;
    //   const file = e.target.files[0];
    //   console.log(file);
    //   const reader = new FileReader();
    //   try {
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       this.currentAnswer.imgURL = reader.result;
    //     };
    //   } catch (error) {
    //     alert(error.message);
    //     console.log(error.message.errors.photo);
    //     console.log(this.currentAnswer.imgURL);
    //   }
    // },
    // deleteImg() {
    //   this.currentAnswer.imgURL = "";
    // },
  }
};
</script>
<style lang="postcss" scoped>
.answer__add_title {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
.answer__add_text-wrap {
  display: flex;
}
.answer__add_text {
  width: 100%;
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
}
</style>