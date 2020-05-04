export default {
  namespaced: true,
  state: {
    tests: [
      {
        id: 1,
        level: "3",
        name: "Тут название теста",
        group: "ИДБ 16 01",
      },
      {
        id: 2,
        level: "3",
        name: "Тест по 1 лекции",
        group: "МДБ 17 02",
      },
      {
        id: 3,
        level: "3",
        name: "Тест по 2 лекции",
        group: "МДБ 17 02",
      },
      {
        id: 4,
        level: "3",
        name: "Лекция 1. ТЕстирование",
        group: "ИДБ 16 01",
      },
    ],
  },
  actions: {
    async addNew(store, obj) {
      // console.log(obj);
      store.commit("ADD_NEW_GROUP", obj);
    },
  },
  mutations: {
    ADD_NEW_GROUP(state, obj) {
      console.log(state);
      state.tests.push(obj);
    },
  },
  getters: {
    getTests(state) {
      return state.tests;
    },
  },
};
