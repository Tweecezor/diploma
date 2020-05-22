export default {
  namespaced: true,
  state: {
    results: [],
  },
  actions: {
    async fetchResults(store) {
      const response = await this.$axios.get(
        "http://localhost:3002/api/results"
      );
      const results = response.data;
      store.commit("SET_RESULTS", results);
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
      console.log(result);

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
