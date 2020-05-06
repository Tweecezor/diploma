<template lang="pug">
  .handwrite-wrap
    //- pre {{userHandwriteAnswer}}
    //- pre {{keywords}}
    .handwrite__label-wrap
      label.handwrite__label Введите ваш ответ
    .handwrite__text-wrap

      input(type="text" v-model="usersAnswer" :disabled="editMode").handwrite__text
      //- .handwrite__actions_save(v-if="!editMode" @click="saveAnswer")
      .handwrite__actions
        <svg version="1.1" v-if="!editMode"  @click="saveAnswer" class="handwrite__actions_save" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
          <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
        </svg>
        //- .handwrite__actions_edit(v-if="editMode" @click="editMode = !editMode")
        <svg v-if="editMode" @click="editMode = !editMode" class="handwrite__actions_edit" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
          <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
        </svg>

  
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
    deleteSpaceFromString(arrayOfAnswers) {
      while (arrayOfAnswers[arrayOfAnswers.length - 1] == "") {
        console.log("последний элемент пустой");
        arrayOfAnswers.splice(arrayOfAnswers.length - 1, 1);
      }
    },
    validationAnswer(answer) {
      // console.log(answer);
      var countCorrectKeyword = 0;
      var correctAnswer = false;
      answer = answer.toLowerCase();
      // console.log(answer);
      let arrayOfAnswerWords = answer.split(" ");
      // console.log(arrayOfAnswerWords[arrayOfAnswerWords.length - 1] == "");
      while (arrayOfAnswerWords[arrayOfAnswerWords.length - 1] == "") {
        // console.log("последний элемент пустой");
        arrayOfAnswerWords.splice(arrayOfAnswerWords.length - 1, 1);
      }
      // console.log(this.keywords);
      for (var i = 0; i < this.keywords.length; i++) {
        // console.log(arrayOfAnswerWords.includes(this.keywords[i]));
        arrayOfAnswerWords.includes(this.keywords[i])
          ? countCorrectKeyword++
          : "";
      }
      this.keywords.length - 1 <= countCorrectKeyword
        ? (correctAnswer = true)
        : (correctAnswer = false);
      // console.log(countCorrectKeyword);
      // console.log(correctAnswer);
      return correctAnswer;
      // console.log(answer);
    },
    saveAnswer() {
      this.editMode = !this.editMode;
      let correctAnswer = this.validationAnswer(this.usersAnswer);
      console.log(correctAnswer);
      this.$emit(
        "saveHandwrite",
        this.usersAnswer,
        this.question_id,
        correctAnswer
      );
    }
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
.handwrite__actions {
  display: flex;
  align-items: flex-end;
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
  margin-right: 10px;
}
.handwrite__text-wrap {
  display: flex;
  margin-bottom: 1.875rem;
  /* align-istems: center; */
}
.handwrite__actions_save {
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: #edb947;
  /* &:before {
    content: "";
    background: svg-load("tick.svg", fill= "#edb947") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.handwrite__actions_edit {
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: #434573;
  /* &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#434573") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
</style>