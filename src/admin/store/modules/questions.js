export default {
  namespaced: true,
  state: {
    questions: [],
    // questions: [
    //   {
    //     type: "oneAnswer",
    //     question: {
    //       text: "qwd",
    //       img: "",
    //       question_id: 7,
    //     },
    //     answers: [
    //       {
    //         text: "12",
    //         correct: true,
    //         imgURL: "",
    //         answer_id: 1,
    //       },
    //     ],
    //     level_id: 1,
    //     test_id: 1,
    //   },
    //   {
    //     type: "multipleAnswer",
    //     question: {
    //       text: "qwef",
    //       img: "",
    //       question_id: 8,
    //     },
    //     answers: [
    //       {
    //         text: "ewf",
    //         correct: true,
    //         imgURL: "",
    //         answer_id: 1,
    //       },
    //       {
    //         text: "heu",
    //         correct: false,
    //         imgURL: "",
    //         answer_id: 2,
    //       },
    //     ],
    //     level_id: 1,
    //     test_id: 1,
    //   },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "12",
    //     img: "",
    //     question_id: 9,
    //   },
    //   answers: [
    //     {
    //       text: "qwd",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "qd",
    //     img: "",
    //     question_id: 10,
    //   },
    //   answers: [
    //     {
    //       text: "we",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "wef",
    //     img: "",
    //     question_id: 11,
    //   },
    //   answers: [
    //     {
    //       text: "wef",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "12",
    //     img: "",
    //     question_id: 12,
    //   },
    //   answers: [
    //     {
    //       text: "wqd",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "123",
    //     img: "",
    //     question_id: 13,
    //   },
    //   answers: [
    //     {
    //       text: "eqw",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "qwd",
    //     img: "",
    //     question_id: 14,
    //   },
    //   answers: [
    //     {
    //       text: "qwd",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "qwe",
    //     img: "",
    //     question_id: 15,
    //   },
    //   answers: [
    //     {
    //       text: "wef",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // {
    //   type: "oneAnswer",
    //   question: {
    //     text: "wef",
    //     img: "",
    //     question_id: 16,
    //   },
    //   answers: [
    //     {
    //       text: "wef",
    //       correct: true,
    //       imgURL: "",
    //       answer_id: 1,
    //     },
    //   ],
    //   level_id: 1,
    //   test_id: 1,
    // },
    // ],
  },
  actions: {
    async deleteCurrentQuestion(store, deletedQuestion) {
      try {
        // console.log(deletedQuestion);
        await this.$axios.delete(
          `http://localhost:3002/api/questions/${deletedQuestion._id}`
        );
        store.commit("DELETE_QUESTION", deletedQuestion);
      } catch (error) {}
    },
    async deleteAnswer(store, deletedAnswer) {
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/questions/answer/delete/${
            deletedAnswer._id
          }`,
          deletedAnswer
        );
        store.commit("DELETE_ANSWER", deletedAnswer);
      } catch (error) {}
    },
    addNew(store, newQuestion) {
      // console.log(newQuestion);
      store.commit("ADD_NEW_QUESTIONS", newQuestion);
    },
    async updateQuestion(store, updatedQuestion) {
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/questions/${updatedQuestion._id}`,
          updatedQuestion
        );
        store.commit("UPDATE_QUESTION", updatedQuestion);
      } catch (error) {
        throw new Error();
      }
    },
    async changeAnswerStatus(store, newCorrectAnswer) {
      console.log(newCorrectAnswer);
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/questions/answer/correct/${
            newCorrectAnswer._id
          }`,
          newCorrectAnswer
        );
        store.commit("CHANGE_ANSWER_STATUS", newCorrectAnswer);
      } catch (error) {}
    },
    async updateAnswer(store, updatedAnswer) {
      console.log(updatedAnswer);
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/questions/answer/${updatedAnswer._id}`,
          updatedAnswer
        );
        store.commit("UPDATE_ANSWER", updatedAnswer);
      } catch (error) {
        throw new Error(error);
      }
    },

    async addNewAnswer(store, newAnswer) {
      console.log(newAnswer);
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/questions/answer/add/${newAnswer._id}`,
          newAnswer
        );
        store.commit("ADD_NEW_ANSWER", newAnswer);
      } catch (error) {}
    },

    async changeKeywords(store, newKeywordsArray) {
      // console.log(newKeywordsArray);
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/questions/answer/keywords/${
            newKeywordsArray._id
          }`,
          newKeywordsArray
        );
        store.commit("CHANGE_KEYWORDS", newKeywordsArray);
      } catch (error) {}
    },
    async fetchQuestions(store) {
      const response = await this.$axios.get(
        "http://localhost:3002/api/questions"
      );
      const questions = response.data;
      store.commit("SET_QUESTIONS", questions);
    },
  },
  mutations: {
    DELETE_QUESTION(state, deletedQuestion) {
      console.log(state.questions);
      state.questions = state.questions.filter((item) => {
        console.log(item);
        return item._id !== deletedQuestion._id ? item : "";
      });
      console.log(state.questions);
    },

    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    DELETE_ANSWER(state, deletedAnswer) {
      console.log(deletedAnswer);
      // console.log(state.questions);
      state.questions = state.questions.map((item) => {
        if (
          item.level_id === deletedAnswer.level_id &&
          item.test_id === deletedAnswer.test_id
        ) {
          item.answers = item.answers.filter((answer) => {
            return answer.answer_id != deletedAnswer.answer_id ? answer : "";
          });
        }
        return item;
      });
      console.log(state.questions);
    },
    CHANGE_KEYWORDS(state, newKeywordsArray) {
      state.questions.map((item) => {
        // console.log(item);
      });
    },
    ADD_NEW_ANSWER(state, newAnswer) {
      console.log(newAnswer);
      state.questions.map((item) => {
        // console.log(item);
        if (
          item.test_id === newAnswer.test_id &&
          item.level_id === newAnswer.level_id &&
          item.question.question_id === newAnswer.question_id
        ) {
          let answers = item.answers;
          console.log(answers);
          answers.push(newAnswer.answer);
        }
        return item;
      });
      console.log(state.questions);
    },
    async ADD_NEW_QUESTIONS(state, newQuestion) {
      try {
        console.log(newQuestion);
        state.questions.push(newQuestion);
        await this.$axios.post(
          "http://localhost:3002/api/questions",
          newQuestion
        );
        console.log(state.questions);
      } catch (error) {
        console.log("ERRRORORORORO");
      }
    },
    UPDATE_ANSWER(state, updatedAnswer) {
      // console.log(updatedAnswer);
      state.questions.map((item) => {
        // console.log(item);
        if (
          item.test_id === updatedAnswer.test_id &&
          item.level_id === updatedAnswer.level_id &&
          item.question.question_id === updatedAnswer.question_id
        ) {
          let answers = item.answers;
          answers.map((item) => {
            // console.log(item);
            if (item.answer_id === updatedAnswer.answer_id) {
              item.text = updatedAnswer.text;
              item.imgURL = updatedAnswer.imgURL;
              return item;
            } else {
              return item;
            }
          });
        }
        return item;
      });
    },
    CHANGE_ANSWER_STATUS(state, newCorrectAnswer) {
      console.log(newCorrectAnswer);
      state.questions.map((item) => {
        if (
          item.test_id === newCorrectAnswer.test_id &&
          item.level_id === newCorrectAnswer.level_id &&
          item.question.question_id === newCorrectAnswer.question_id
        ) {
          let answers = item.answers;
          answers.map((item) => {
            console.log(item);
            // console.log(newCorrectAnswer);
            switch (newCorrectAnswer.type) {
              case "oneAnswer":
                if (item.answer_id === newCorrectAnswer.answer_id) {
                  item.correct = newCorrectAnswer.correct;
                  return item;
                } else {
                  item.correct = !newCorrectAnswer.correct;
                  return item;
                }
              case "multipleAnswer":
                // console.log("multy");
                // console.log(newCorrectAnswer.text);
                // console.log(newCorrectAnswer.correct);
                if (item.answer_id === newCorrectAnswer.answer_id) {
                  item.correct = newCorrectAnswer.correct;
                  return item;
                } else {
                  return item;
                }
              default:
            }
          });
        }
        return item;
      });
      console.log(state.questions);
    },
    UPDATE_QUESTION(state, updatedQuestion) {
      console.log(updatedQuestion);
      // console.log(state.questions);
      // setTimeout(() => {
      state.questions = state.questions.map((item) => {
        // console.log(item);
        if (
          item.test_id === updatedQuestion.test_id &&
          item.level_id === updatedQuestion.level_id &&
          item.question.question_id == updatedQuestion.question_id
        ) {
          item.question.text = updatedQuestion.newQuestionTitle;
        } else {
        }

        return item;
      });
    },
  },
  getters: {
    question_id: (state) => (level_id, test_id) => {
      let ID = "empty";
      state.questions.forEach((item) => {
        if (item.level_id === level_id && item.test_id === test_id) {
          ID = item.question.question_id;
        }
      });
      return ID;
    },
    uniqueQuestions: (state) => {
      let filter = [];
      let arr = state.questions;
      console.log(arr.length);
      var uniq;
      for (var i = 0; i < arr.length; i++) {
        uniq = true;
        for (var j = i + 1; j < arr.length; j++) {
          if (
            arr[i].question.text === arr[j].question.text &&
            arr[i].type === arr[j].type
          ) {
            uniq = false;
          }
        }
        if (uniq) {
          filter.push(arr[i]);
        }
      }
      return filter;
    },
  },
};
