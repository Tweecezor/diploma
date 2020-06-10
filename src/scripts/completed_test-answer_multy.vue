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
        //- pre {{answer.correct}}
        .answer__text_content-wrap(:class="{answerTextWithImg:answer.imgURL}")
          p.answer__text {{answer.text}}
          .answer__checkbox-wrap
            .answer__checkbox( ref="checkbox_list" :class="{answer__checkbox_active:answer.selectedByStudent}")
              <svg v-if="answer.selectedByStudent" version="1.1"  class="answer__checkbox_correct" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
                <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
              </svg>
        .question__img-wrap(v-if="answer.imgURL")
          label.question__img(:style="{'background-image':`url(${answer.imgURL})`}")
      //- .answer__text-wrap()
      //-   .answer__checkbox-wrap 
      //-     p.answer__text(:class="{answerTextWithImg:answer.imgURL}") {{answer.text}}
      //-     .answer__checkbox-wrap
      //-       .answer__checkbox( ref="checkbox_list" :class="{answer__checkbox_active:answer.selectedByStudent}")
      //-         <svg v-if="answer.selectedByStudent" version="1.1"  class="answer__checkbox_correct" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
      //-           <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
      //-         </svg>
      //-   .question__img-wrap(v-if="answer.imgURL")
      //-     label.question__img(:style="{'background-image':`url(${answer.imgURL})`}")
      
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
@import url("../styles/mixins.pcss");
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
  @include tablets {
    flex-direction: column;
  }
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
  /* &:before {
    content: "";
    background: svg-load("tick.svg", fill= "#434573") center center no-repeat /
      contain;
    width: 15px;
    height: 15px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 16%;
  } */
}
/* .question__img-wrap {
  width: 500px;
  width: 45%;
  height: 250px;
 
  padding: 7px;
  @include tablets {
    width: 100%;
  }
}
.question__img {
  display: block;
  widht: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border: 1px dashed #000;
} */
/* .answerTextWithImg {
 
  width: 100%;
  @include tablets {
    width: 90%;
  }
} */
.answer__checkbox_correct {
  fill: #434573;
  width: 15px;
  height: 15px;
  width: 15px;
  height: 15px;
  opacity: initial;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.answer__text_content-wrap {
  display: flex;
  /* width: 50%; */
  width: 95%;
  @include tablets {
    width: 100%;
  }
}

.question__img-wrap {
  width: 500px;
  width: 45%;
  height: 250px;
  /* border: 1px dashed #ccc; */
  padding: 7px;
  /* margin-right: 5%; */
  @include tablets {
    width: 100%;
  }
}
.question__img {
  display: block;
  widht: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  border: 1px dashed #000;
}

.answer__text_content-wrap {
  display: flex;
  /* width: 50%; */
  width: 95%;
  @include tablets {
    width: 100%;
  }
}
.answerTextWithImg {
  /* color: red; */
  width: 50%;
  @include tablets {
    width: 95%;
  }
}
</style>