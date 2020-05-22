export default {
  namespaced: true,
  state: {
    tests: [
      // {
      //   id: 1,
      //   level: "3",
      //   name: "Тест по первой лекции",
      //   group: "ИДБ 16 01",
      // },
      // {
      //   id: 2,
      //   level: "3",
      //   name: "Тест по 1 лекции",
      //   group: "МДБ 17 02",
      // },
      // {
      //   id: 3,
      //   level: "3",
      //   name: "Тест по 2 лекции",
      //   group: "МДБ 17 02",
      // },
      // {
      //   id: 4,
      //   level: "3",
      //   name: "Лекция 1. ТЕстирование",
      //   group: "ИДБ 16 01",
      // },
    ],
  },
  actions: {
    async addNew(store, obj) {
      // console.log(obj);
      store.commit("ADD_NEW_GROUP", obj);
    },
    async fetchTests(store) {
      console.log("IN STATE");
      try {
        const response = await this.$axios.get(
          "http://localhost:3002/api/tests"
        );

        let tests = response.data;
        console.log(tests);
        store.commit("SET_TESTS", tests);
      } catch (error) {
        console.log("error");
      }
    },
  },
  mutations: {
    async ADD_NEW_GROUP(state, obj) {
      // console.log(state);
      state.tests.unshift(obj);
      await this.$axios.post("http://localhost:3002/api/tests", obj);
    },
    SET_TESTS(state, tests) {
      state.tests = tests.reverse();
    },
  },
  getters: {
    getTests(state) {
      return state.tests;
    },
  },
};
