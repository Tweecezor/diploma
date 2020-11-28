import { wrapIntoFormData } from "@/helpers/forms";
export default {
  namespaced: true,
  state: {
    questions: [],
    uniqQuestions: [],
  },
  actions: {
    async deleteCurrentQuestion(store, deletedQuestion) {
      try {
        const response = await this.$axios.delete(
          `api/questions/${deletedQuestion._id}`
        );
        const questions = response.data;
        store.commit("DELETE_QUESTION", questions);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async deleteAnswer(store, deletedAnswer) {
      try {
        await this.$axios.patch(
          `api/questions/answer/delete/${deletedAnswer._id}`,
          deletedAnswer
        );
        store.commit("DELETE_ANSWER", deletedAnswer);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async addNew(store, newQuestion) {
      // let { questionWithAnswers, answersPhoto } = data;
      // console.log(data);
      // const wrapedNewQuestion = wrapIntoFormData(answerPhotoFiles);
      // console.log(wrapedNewQuestion);
      try {
        let response = await this.$axios.post("api/questions", newQuestion);
        // await this.$axios.post(
        //   "http://localhost:3002/api/questions/photo/answers",
        //   answersPhoto
        // );
        let question = response.data;
        console.log(question);
        store.commit("ADD_NEW_QUESTIONS", question);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async updateQuestion(store, updatedQuestion) {
      try {
        await this.$axios.patch(
          `api/questions/${updatedQuestion._id}`,
          updatedQuestion
        );
        store.commit("UPDATE_QUESTION", updatedQuestion);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },

    async updateAnswer(store, updatedAnswer) {
      console.log(updatedAnswer);
      try {
        await this.$axios.patch(
          `api/questions/answer/${updatedAnswer._id}`,
          updatedAnswer
        );
        store.commit("UPDATE_ANSWER", updatedAnswer);
      } catch (error) {
        throw new Error(error);
      }
    },

    async addNewAnswer(store, newAnswer) {
      try {
        const response = await this.$axios.patch(
          `api/questions/answer/add/${newAnswer._id}`,
          newAnswer
        );
        let updatedAnswers = response.data;
        store.commit("ADD_NEW_ANSWER", { newAnswer, updatedAnswers });
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async changeAnswerStatus(store, newCorrectAnswer) {
      console.log(newCorrectAnswer);
      try {
        const response = await this.$axios.patch(
          `api/questions/answer/correct/${newCorrectAnswer._id}`,
          newCorrectAnswer
        );
        let updatedAnswers = response.data;
        store.commit("CHANGE_ANSWER_STATUS", {
          newCorrectAnswer,
          updatedAnswers,
        });
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async changeKeywords(store, newKeywordsArray) {
      try {
        await this.$axios.patch(
          `api/questions/answer/keywords/${newKeywordsArray._id}`,
          newKeywordsArray
        );
        store.commit("CHANGE_KEYWORDS", newKeywordsArray);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async fetchQuestions(store, creatorId) {
      try {
        const response = await this.$axios.get(`api/questions/${creatorId}`);
        const questions = response.data;
        store.commit("SET_QUESTIONS", questions);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    findUniqQuestions(store) {
      store.commit("SET_UNIQ_QUESTIONS");
    },
  },
  mutations: {
    DELETE_QUESTION(state, questions) {
      state.questions = questions;
      // state.questions = state.questions.filter((item) => {
      //   console.log(item);
      //   return item._id !== deletedQuestion._id ? item : "";
      // });
    },

    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    DELETE_ANSWER(state, deletedAnswer) {
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
    },
    CHANGE_KEYWORDS(state, newKeywordsArray) {
      state.questions.map((item) => {
        // console.log(item);
      });
    },
    ADD_NEW_ANSWER(state, data) {
      console.log(data);
      let updatedAnswers = data.updatedAnswers;
      let newAnswer = data.newAnswer;
      state.questions.map((item) => {
        if (
          item.test_id === newAnswer.test_id &&
          item.level_id === newAnswer.level_id &&
          item.question.question_id === newAnswer.question_id
        ) {
          // let answers = item.answers;
          // answers.push(newAnswer.answer);
          item.answers = updatedAnswers;
        }
        return item;
      });
    },
    async ADD_NEW_QUESTIONS(state, newQuestion) {
      state.questions.push(newQuestion);
    },
    UPDATE_ANSWER(state, updatedAnswer) {
      state.questions.map((item) => {
        if (
          item.test_id === updatedAnswer.test_id &&
          item.level_id === updatedAnswer.level_id &&
          item.question.question_id === updatedAnswer.question_id
        ) {
          let answers = item.answers;
          answers.map((item) => {
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
    CHANGE_ANSWER_STATUS(state, data) {
      console.log(newCorrectAnswer);
      let updatedAnswers = data.updatedAnswers;
      let newCorrectAnswer = data.newAnswer;
      state.questions.map((item) => {
        if (
          item.test_id === newCorrectAnswer.test_id &&
          item.level_id === newCorrectAnswer.level_id &&
          item.question.question_id === newCorrectAnswer.question_id
        ) {
          // let answers = item.answers;
          // answers.push(newAnswer.answer);
          item.answers = updatedAnswers;
        }
        return item;
      });
      // state.questions.map((item) => {
      //   if (
      //     item.test_id === newCorrectAnswer.test_id &&
      //     item.level_id === newCorrectAnswer.level_id &&
      //     item.question.question_id === newCorrectAnswer.question_id
      //   ) {
      //     let answers = item.answers;
      //     answers.map((item) => {
      //       console.log(item);
      //       switch (newCorrectAnswer.type) {
      //         case "oneAnswer":
      //           if (item.answer_id === newCorrectAnswer.answer_id) {
      //             item.correct = newCorrectAnswer.correct;
      //             return item;
      //           } else {
      //             item.correct = !newCorrectAnswer.correct;
      //             return item;
      //           }
      //         case "multipleAnswer":
      //           if (item.answer_id === newCorrectAnswer.answer_id) {
      //             item.correct = newCorrectAnswer.correct;
      //             return item;
      //           } else {
      //             return item;
      //           }
      //         default:
      //       }
      //     });
      //   }
      //   return item;
      // });
    },
    UPDATE_QUESTION(state, updatedQuestion) {
      state.questions = state.questions.map((item) => {
        if (
          item.test_id === updatedQuestion.test_id &&
          item.level_id === updatedQuestion.level_id &&
          item.question.question_id == updatedQuestion.question_id
        ) {
          item.question.text = updatedQuestion.newQuestionTitle;
        }
        return item;
      });
    },
    SET_UNIQ_QUESTIONS(state) {
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
      state.uniqQuestions = filter;
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
