export default {
  namespaced: true,
  state: {
    tests: [],
  },
  actions: {
    async addNew(store, obj) {
      try {
        let response = await this.$axios.post("api/tests", obj);
        let test = response.data;
        console.log(test);
        store.commit("ADD_NEW_GROUP", test);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async fetchTests(store) {
      try {
        const response = await this.$axios.get("api/tests");

        let tests = response.data;
        store.commit("SET_TESTS", tests);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async setNewSettingsToTest(store, updatedTest) {
      console.log(updatedTest);
      try {
        await this.$axios.patch("api/tests/updateSettings", updatedTest);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async deleteCurrentTest(store, test_ID) {
      try {
        await this.$axios.delete(`api/tests/${test_ID}`);
        store.commit("DELETE_CURRENT_TEST", test_ID);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
  },
  mutations: {
    DELETE_CURRENT_TEST(state, id) {
      state.tests = state.tests.filter((test) => {
        return test._id !== id ? test : "";
      });
    },
    async ADD_NEW_GROUP(state, obj) {
      state.tests.unshift(obj);
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
