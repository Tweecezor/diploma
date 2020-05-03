<template lang="pug">
  ul.passing_test__answers-list 
    //- pre {{answers}}
    //- pre {{countOfCorrect}}
    //- pre {{selectedCorrectByUser}}
    //- pre {{isAnswerCorrect}}
    //- pre {{answers}}
    li.passing_test__answers-item.answer(
      v-for="answer in answers" 
      :class="{answer__active:answer.selectedByStudent}"
      ref="answersList"
    )
      .answer__text-wrap()
        //- pre {{answer.selectedByStudent}}
        //- pre {{answer.correct}}
        //- pre {{answer.selectedByStudent}}
        //- pre {{answer}}
        p.answer__text(:class="{answerTextWithImg:answer.imgURL}") {{answer.text}}
        .answer__checkbox-wrap
          .answer__checkbox( ref="checkbox_list" :class="{answer__checkbox_active:answer.selectedByStudent}")
        .question__img-wrap(v-if="answer.imgURL")
          label.question__img(:style="{'background-image':`url(${answer.imgURL})`}")
      
      //- pre {{answer.text}}
</template>

<script>
export default {
  props: {
    answers: Array,
    question_id: Number
  },
  data() {
    return {
      countOfCorrect: 0,
      selectedCorrectByUser: 0,
      isAnswerCorrect: false
    };
  },
  methods: {
    // validationAfterUpdate() {
    //   let count = 0;
    //   this.answers.forEach(item => {
    //     // console.log(item);
    //     item.selectedByStudent === true ? count++ : "";
    //   });
    //   this.selectedCorrectByUser = count;

    //   this.selectedCorrectByUser === this.countOfCorrect
    //     ? (this.isAnswerCorrect = true)
    //     : (this.isAnswerCorrect = false);
    // },
    // countCorrentAnswer(answers) {
    //   let count = 0;
    //   answers.forEach(item => {
    //     item.correct === true ? count++ : "";
    //   });
    //   this.countOfCorrect = count;
    //   // console.log(this.countOfCorrect);
    // },
    // validationAnswer(correct, selected) {
    //   // console.log(`ответ уже был выбран? - ${selected}`);
    //   if (!selected) {
    //     correct ? this.selectedCorrectByUser++ : this.selectedCorrectByUser--;
    //   } else {
    //     correct ? this.selectedCorrectByUser-- : this.selectedCorrectByUser++;
    //   }
    //   this.selectedCorrectByUser === this.countOfCorrect
    //     ? (this.isAnswerCorrect = true)
    //     : (this.isAnswerCorrect = false);
    //   return this.isAnswerCorrect;
    // },

    // selectAnswer(e, answer) {
    //   console.log(e.target.className);
    //   var isAnswerCorrect;
    //   if (e.target.className === "answer__text-wrap") {
    //     return;
    //   }
    //   switch (e.target.tagName) {
    //     case "LABEL":
    //       isAnswerCorrect = this.validationAnswer(
    //         answer.correct,
    //         answer.selectedByStudent
    //       );
    //       console.log(isAnswerCorrect);

    //       answer.selectedByStudent = !answer.selectedByStudent;
    //       this.$emit("changeAnswer", answer, this.question_id, isAnswerCorrect);
    //       e.target.parentNode.parentNode.parentNode.classList.toggle(
    //         "answer__active"
    //       );
    //       e.target.parentNode.previousSibling.firstChild.classList.toggle(
    //         "answer__checkbox_active"
    //       );

    //       break;

    //     case "DIV":
    //       isAnswerCorrect = this.validationAnswer(
    //         answer.correct,
    //         answer.selectedByStudent
    //       );
    //       console.log(isAnswerCorrect);

    //       answer.selectedByStudent = !answer.selectedByStudent;
    //       this.$emit("changeAnswer", answer, this.question_id, isAnswerCorrect);
    //       e.target.parentNode.parentNode.parentNode.classList.toggle(
    //         "answer__active"
    //       );
    //       e.target.classList.toggle("answer__checkbox_active");

    //       break;

    //     case "P":
    //       isAnswerCorrect = this.validationAnswer(
    //         answer.correct,
    //         answer.selectedByStudent
    //       );
    //       console.log(isAnswerCorrect);

    //       answer.selectedByStudent = !answer.selectedByStudent;
    //       this.$emit("changeAnswer", answer, this.question_id, isAnswerCorrect);
    //       e.target.parentElement.parentElement.classList.toggle(
    //         "answer__active"
    //       );
    //       e.target.nextSibling.firstChild.classList.toggle(
    //         "answer__checkbox_active"
    //       );

    //       break;
    //     default:
    //       break;
    //   }
    // },
    setActiveAnswer(answersList, answers, checkbox_list) {
      for (var i = 0; i < answersList.length; i++) {
        if (answers[i].selectedByStudent) {
          answersList[i].classList.add("answer__active");
          checkbox_list[i].classList.add("answer__checkbox_active");
        } else {
          answersList[i].classList.remove("answer__active");
          checkbox_list[i].classList.remove("answer__checkbox_active");
        }
      }
    }
  },
  created() {
    // this.countCorrentAnswer(this.answers);
  },
  mounted() {},
  updated() {
    console.log("updated");
    this.$refs.answersList.forEach(item => {
      item.classList.remove("answer__active");
    });
    this.$refs.checkbox_list.forEach(item => {
      item.classList.remove("answer__checkbox_active");
    });
    this.setActiveAnswer(
      this.$refs.answersList,
      this.answers,
      this.$refs.checkbox_list
    );
  },
  watch: {
    answers: function(answers) {
      // this.countCorrentAnswer(answers);
      // this.selectedCorrectByUser = 0;
      // this.isAnswerCorrect = false;
      // this.validationAfterUpdate();
    }
  }
};
</script>
<style lang="postcss" scoped>
.answer {
  margin-bottom: 1px;
  /* &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
    .answer__checkbox {
      border: 2px solid #434573;
    }
  } */
}
.answer__active {
  background-color: #efefef;
}
.answer__text-wrap {
  width: 100%;
  display: flex;
  position: relative;
  /* padding-top: 5px;
  padding-bottom: 5px; */
}
.answer__text {
  color: #414c63;
  font-weight: 600;
  padding: 5px;
  width: 100%;
}
.answer__checkbox-wrap {
  display: flex;
  align-items: center;
}
.answer__checkbox {
  position: absolute;
  right: 1.5%;
  height: 25px;
  width: 25px;
  border: 2px solid #dbdbdb;
  border-radius: 3px;
  &:hover {
    /* border: 2px solid #34b93d; */
  }
}
.answer__checkbox_active {
  position: absolute;
  right: 1.5%;
  cursor: pointer;
  border: 2px solid #434573;
  &:before {
    content: "";
    background: svg-load("tick.svg", fill= "#434573") center center no-repeat /
      contain;
    width: 15px;
    height: 15px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 16%;
  }
}
.question__img-wrap {
  width: 500px;
  width: 45%;
  height: 250px;
  /* border: 1px dashed #ccc; */
  padding: 7px;
}
.question__img {
  display: block;
  widht: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border: 1px dashed #000;
}
.answerTextWithImg {
  /* color: red; */
  width: 50%;
}
</style>