export default {
  namespaced: true,
  state: {
    isCurrentLevelOpen: false,
    isTestOpen: false,
    showQuestions: false,
    showAddGroup: false,
    currentLevelInTestGroup: "",
    currentTestGroup: "",
  },
  actions: {
    setCurrentTestGroup(store, testGroup) {
      store.commit("SET_CURRENT_TEST_GROUP", testGroup);
    },

    setCurrentLevelInTestGroup(store, currentLevel) {
      store.commit("SET_CURRENT_LEVEL_IN_TEST_GROUP", currentLevel);
    },

    changeShowGroupStatus(store, newStatus) {
      store.commit("CHANGE_SHOW_GROUP_STATUS", newStatus);
    },

    changeCurrentLevelStatus(store, newStatus) {
      store.commit("CHANGE_CURRENT_LEVEL_STATUS", newStatus);
    },

    changeCurrentTestStatus(store, newStatus) {
      store.commit("CHANGE_CURRENT_TEST_STATUS", newStatus);
    },

    changeShowQuestionsStatus(store, newStatus) {
      store.commit("CHANGE_SHOW_QUESTIONS_STATUS", newStatus);
    },
  },
  mutations: {
    SET_CURRENT_TEST_GROUP(state, testGroup) {
      state.currentTestGroup = testGroup;
    },

    SET_CURRENT_LEVEL_IN_TEST_GROUP(state, currentLevel) {
      state.currentLevelInTestGroup = currentLevel;
    },

    CHANGE_CURRENT_LEVEL_STATUS(state, newStatus) {
      state.isCurrentLevelOpen = newStatus;
    },

    CHANGE_CURRENT_TEST_STATUS(state, newStatus) {
      state.isTestOpen = newStatus;
    },

    CHANGE_SHOW_QUESTIONS_STATUS(state, newStatus) {
      state.showQuestions = newStatus;
    },

    CHANGE_SHOW_GROUP_STATUS(state, newStatus) {
      state.showAddGroup = newStatus;
    },
  },
  getters: {},
};
