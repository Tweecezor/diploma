export default {
  namespaced: true,
  state: {
    results: [],
  },
  actions: {
    addNewResult(store, result) {
      store.commit("ADD_NEW_RESULT", result);
    },
  },
  mutations: {
    // CHANGE_RESULT(state,newResult){

    // },
    ADD_NEW_RESULT(state, result) {
      console.log(result);

      if (state.results.length) {
        let isNewResult = true;
        state.results.forEach((item) => {
          console.log(item);
          // item.test_id === result.test_id && item.fullName === result.fullName
          //   ? CHANGE_RESULT(state, result)
          //   : isNewResult = true
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

      // if (state.results.length) {
      //   state.results = state.results.map((item) => {
      //     return item.fullName === result.fullName ? result : item;
      //   });
      // } else {
      //   state.results.push(result);
      // }
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
