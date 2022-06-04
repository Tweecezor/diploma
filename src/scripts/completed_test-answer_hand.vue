<template lang="pug">
  .handwrite-wrap
    //- pre {{userHandwriteAnswer}}
    //- pre {{keywords}}
    .handwrite__label-wrap
      label.handwrite__label Введите ваш ответ
    .handwrite__text-wrap
      input(type="text" v-model="usersAnswer" :disabled="editMode").handwrite__text
      //- .handwrite__actions_save(v-if="!editMode" @click="saveAnswer")
      //- .handwrite__actions_edit(v-if="editMode" @click="editMode = !editMode")

  
</template>

<script>
export default {
  props: {
    question_id: Number,
    userHandwriteAnswer: String,
    keywords: Array
  },
  data() {
    return {
      // countOfCorrect: 0,
      // selectedCorrectByUser: 0,
      usersAnswer: "",
      editMode: false
    };
  },
  methods: {
    // deleteSpaceFromString(arrayOfAnswers) {
    //   while (arrayOfAnswers[arrayOfAnswers.length - 1] == "") {
    //     console.log("последний элемент пустой");
    //     arrayOfAnswers.splice(arrayOfAnswers.length - 1, 1);
    //   }
    // },
    // validationAnswer(answer) {
    //   // console.log(answer);
    //   var countCorrectKeyword = 0;
    //   var correctAnswer = false;
    //   answer = answer.toLowerCase();
    //   // console.log(answer);
    //   let arrayOfAnswerWords = answer.split(" ");
    //   // console.log(arrayOfAnswerWords[arrayOfAnswerWords.length - 1] == "");
    //   while (arrayOfAnswerWords[arrayOfAnswerWords.length - 1] == "") {
    //     // console.log("последний элемент пустой");
    //     arrayOfAnswerWords.splice(arrayOfAnswerWords.length - 1, 1);
    //   }
    //   // console.log(this.keywords);
    //   for (var i = 0; i < this.keywords.length; i++) {
    //     // console.log(arrayOfAnswerWords.includes(this.keywords[i]));
    //     arrayOfAnswerWords.includes(this.keywords[i])
    //       ? countCorrectKeyword++
    //       : "";
    //   }
    //   this.keywords.length - 1 <= countCorrectKeyword
    //     ? (correctAnswer = true)
    //     : (correctAnswer = false);
    //   // console.log(countCorrectKeyword);
    //   // console.log(correctAnswer);
    //   return correctAnswer;
    //   // console.log(answer);
    // },
    // saveAnswer() {
    //   this.editMode = !this.editMode;
    //   let correctAnswer = this.validationAnswer(this.usersAnswer);
    //   console.log(correctAnswer);
    //   this.$emit(
    //     "saveHandwrite",
    //     this.usersAnswer,
    //     this.question_id,
    //     correctAnswer
    //   );
    // }
  },
  created() {},
  mounted() {
    console.log(this.userHandwriteAnswer);
    console.log("nounted");

    this.usersAnswer = this.userHandwriteAnswer;
    if (this.userHandwriteAnswer != "") {
      this.editMode = true;
    }
  },
  updated() {},
  watch: {}
};
</script>
<style lang="postcss" scoped>
.handwrite-wrap {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.handwrite__label-wrap {
  margin-bottom: 0.625rem;
}
.handwrite__label {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
.handwrite__text {
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  width: 100%;
  margin-bottom: 1.875rem;
}
.handwrite__text-wrap {
  display: flex;
}
.handwrite__actions_save {
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:before {
    content: "";
    background: svg-load("tick.svg", fill= "#0078cf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.handwrite__actions_edit {
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#434573") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
</style>