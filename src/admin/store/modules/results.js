export default {
  namespaced: true,
  state: {
    results: [],
  },
  actions: {
    async fetchResults(store) {
      try {
        const response = await this.$axios.get("api/results");
        const results = response.data;
        store.commit("SET_RESULTS", results);
      } catch (error) {
        throw new Error(error.respone.data.message);
      }
    },
    addNewResult(store, result) {
      store.commit("ADD_NEW_RESULT", result);
    },
  },
  mutations: {
    SET_RESULTS(state, results) {
      state.results = results;
    },
    ADD_NEW_RESULT(state, result) {
      if (state.results.length) {
        let isNewResult = true;
        state.results.forEach((item) => {
          if (
            item.test_id === result.test_id &&
            item.fullName === result.fullName
          ) {
            CHANGE_RESULT(state, result);
            isNewResult = false;
          }
        });
        if (isNewResult) {
          PUSH_NEW_RESULT(state, result);
        }
      } else {
        state.results.push(result);
      }
    },
  },
  getters: {},
};
function CHANGE_RESULT(state, result) {
  state.results = state.results.map((item) => {
    return item.test_id === result.test_id && item.fullName === result.fullName
      ? result
      : item;
  });
}
function PUSH_NEW_RESULT(state, newResult) {
  state.results.push(newResult);
}
