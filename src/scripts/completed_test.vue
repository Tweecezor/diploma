<template lang="pug">
  .container_
    .passing_test__breadcrumbs-wrap
      ul.passing_test__breadcrumbs-list
        li.passing_test__breadcrumbs-item.breadcrumb( :class="{breadcrumb__correct:question.isAnswerCorrect,breadcrumb__wrong:!question.isAnswerCorrect}" ref="breadcrumb" v-for="(question,pos) in questions" @click="")
          .breadcrumb__content(@click="changeCurrentQuestion($event,question,pos)") {{pos+1}}
      //- pre {{questions}}
      //- pre {{currentQuestion}}
    .passing_test__question-wrap
      .passing_test__question.question
        .question__text-wrap
          p.question__text {{currentQuestion.question.text}}
        .question__img-wrap(v-if="currentQuestion.question.img")
          .question__img(:style="{'background-image':`url(${currentQuestion.question.img})`}")
      .passing_test__answers
        .passing_test_answers_label Варианты ответов
        MULTY_ANSWER(
          v-if="currentQuestion.type==='multipleAnswer'"
          :question_id="currentQuestion.question.question_id"
          :answers="currentQuestion.answers"
          
        )
        ONE_ANSWER(
          v-if="currentQuestion.type==='oneAnswer'"
          :question_id="currentQuestion.question.question_id"
          :answers="currentQuestion.answers"
          
        )
        HANDWRITING_ANSWER( 
          v-if="currentQuestion.type==='handwritingAnswer'"
          :keywords="currentQuestion.keywordsArray"
          :question_id="currentQuestion.question.question_id"
          :userHandwriteAnswer="currentQuestion.userHandwriteAnswer"
          
        )
      .passing_test__answers_next-wrap
        button(type="button" @click="closeTest" v-if="activeQuestion == questions.length-1").passing_test__answers_next.btn Закрыть
        button(type="button" @click="setNextQuestion" v-else).passing_test__answers_next.btn Следующий вопрос


    //- pre {{questions}}
</template>

<script>
import { mapActions, mapState } from "vuex";
import MULTY_ANSWER from "./completed_test-answer_multy";
import ONE_ANSWER from "./completed_test-answer_one";
import HANDWRITING_ANSWER from "./completed_test-answer_hand";
export default {
  components: {
    MULTY_ANSWER,
    ONE_ANSWER,
    HANDWRITING_ANSWER
  },
  props: {},
  data() {
    return {
      currentQuestion: "",
      activeQuestion: 0,
      usersAnswer: [], //массив из ответов студента. Изначально забиваем его на каждый вопрос ложным и потом меняем.
      questionsWithUsersAnswers: [],
      copyQuestions: "",
      breadcrumbs: []
    };
  },
  methods: {
    closeTest() {
      this.$router.push("./");
    },
    // completeTest() {
    //   console.log(this.copyQuestions);
    // },

    // saveUsersHandwriteAnswer(answerText, question_id, isAnswerCorrect) {
    //   console.log("emit event after select Handwrite");
    //   let updatedQuestions = this.questions.map(item => {
    //     console.log(item);
    //     if (item.question.question_id === question_id) {
    //       item.isAnswerCorrect = isAnswerCorrect;
    //       item.userHandwriteAnswer = answerText;
    //     }
    //     return item;
    //   });
    //   console.log(updatedQuestions);
    //   this.copyQuestions = updatedQuestions;
    // },
    setNextQuestion() {
      this.activeQuestion++;

      this.currentQuestion = this.copyQuestions[this.activeQuestion];
      for (var i = 0; i < this.breadcrumbs.length; i++) {
        i == this.activeQuestion
          ? this.breadcrumbs[i].classList.add("breadcrumb--active")
          : this.breadcrumbs[i].classList.remove("breadcrumb--active");
      }
      // this.changeCurrentQuestion(
      //   this.copyQuestions[this.activeQuestion],
      //   this.activeQuestion
      // );
    },
    // setAnswerWithUsersSelect_one(answer, question_id, isAnswerCorrect) {
    //   console.log("emit event after select OneAsnwer");
    //   let updatedQuestions = this.questions.map(item => {
    //     // console.log(item);
    //     if (item.question.question_id === question_id) {
    //       item.isAnswerCorrect = isAnswerCorrect;
    //       item.answers.map(item => {
    //         if (item.answer_id == answer.answer_id) {
    //           item.selectedByStudent = true;
    //         } else {
    //           item.selectedByStudent = false;
    //         }
    //         return item;
    //       });
    //     }
    //     return item;
    //   });
    //   console.log(updatedQuestions);
    //   this.copyQuestions = updatedQuestions;
    // },
    // setAnswerWithUsersSelect_multy(answer, question_id, isAnswerCorrect) {
    //   // console.log("emit event after select MultyAsnwer");
    //   // console.log(answer);
    //   let updatedQuestions = this.questions.map(item => {
    //     // console.log(item);

    //     // console.log(question_id);
    //     if (item.question.question_id === question_id) {
    //       item.isAnswerCorrect = isAnswerCorrect;
    //       item.answers.map(prevAnswer => {
    //         prevAnswer.answer_id == answer.answer_id ? answer : prevAnswer;
    //       });
    //     }
    //     return item;
    //   });
    //   // console.log(updatedQuestions);
    //   // console.log(this.questions);
    //   this.copyQuestions = updatedQuestions;
    // },
    // selectAnswer(e, answer) {
    //   console.log(e.target.innerText);
    //   console.log(answer.correct);
    // },
    // createQuestionsArrayWithUsersAnswers(questions) {
    //   let newQuestionsArray = questions.forEach(item => {
    //     // console.log(item);
    //     if (item.type !== "handwritingAnswer") {
    //       item.answers.forEach(answer => {
    //         answer.selectedByStudent = false;
    //         return answer;
    //       });
    //     } else {
    //       item.userHandwriteAnswer = "";
    //     }
    //     return item;
    //   });
    //   console.log(newQuestionsArray);
    //   // this.questionsWithUsersAnswers = newQuestionsArray;
    // },
    changeCurrentQuestion(e, question, id) {
      // console.log(e.target);

      for (var i = 0; i < this.breadcrumbs.length; i++) {
        i == id
          ? this.breadcrumbs[i].classList.add("breadcrumb--active")
          : this.breadcrumbs[i].classList.remove("breadcrumb--active");
      }
      this.currentQuestion = question;
      this.activeQuestion = id;
    },
    setCurrentQuestion() {
      this.currentQuestion = this.copyQuestions[this.activeQuestion];
    }
  },
  computed: {
    ...mapState("helped", {
      questions: state => state.completedTestQuestions
    })
  },
  mounted() {
    this.breadcrumbs = this.$refs.breadcrumb;
    this.breadcrumbs[0].classList.add("breadcrumb--active");
    for (var i = 1; i < this.breadcrumbs.length; i++) {
      this.breadcrumbs[i].classList.remove("breadcrumb--active");
    }
  },
  created() {
    this.copyQuestions = { ...this.questions };
    this.setCurrentQuestion();
    if (!this.questions.length) {
      this.$router.push("/");
    }
    // this.createQuestionsArrayWithUsersAnswers(this.questions);
  }
};
</script>

<style lang="postcss" scoped>
@import url("../styles/mixins.pcss");
.passing_test__breadcrumbs-list {
  display: flex;
  margin-bottom: 20px;
}
.breadcrumb {
  width: 1.25rem;
  line-height: 1.25rem;
  background: #fff;
  border: 1px solid #414c63;
  border-radius: 2px;
  text-align: center;
  margin-right: 0.3125rem;
  color: #414c63;
}
.passing_test__question-wrap {
  background: white;
  border: 1px solid #efefef;
  -webkit-box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.17);
  box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.17);
  border-radius: 6px;
  padding: 25px;
}
.question {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.question__img-wrap {
  width: 80%;
  margin: 0 auto;
  height: 300px;
  border: 1px dashed;
}
.question__img {
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.question__text {
  width: 100%;
  background-color: transparent;
  color: #414c63;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.875rem;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  margin-bottom: 1.875rem;
}
.passing_test_answers_label {
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #414c63;
  margin-bottom: 1.875rem;
  font-size: 1.125rem;
  font-weight: 700;
}
.passing_test__answers {
  margin-bottom: 30px;
}
.passing_test__answers_next-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.breadcrumb {
  &:hover {
    cursor: pointer;
    color: #db9600;
    border: 1px solid #db9600;
  }
}
.breadcrumb__correct {
  color: green;
  border: 1px solid green;
}
.breadcrumb__wrong {
  color: red;
  border: 1px solid red;
}
.breadcrumb--active {
  color: #db9600;
  border: 1px solid #db9600;
}
</style>
