import axios from "../../requests";
import { wrapIntoFormData } from "@/helpers/forms";

export default {
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    LOGOUT__USER(state) {
      state.user = {};
    },
  },
  getters: {
    userIsLogged: (state) => {
      const userObj = state.user;
      const userObjectIsEmpty =
        Object.keys(userObj).length === 0 && userObj.constructor === Object;
      return userObjectIsEmpty === false;
    },
    userId: (state) => {
      return state.user.id;
    },
    // userIsLogout: (state) => {
    //   const userObj = state.user;
    //   const isUserObjectIsEmpty =
    //     Object.keys(userObj).length !== 0 && userObj.constructor !== Object;
    //   if (isUserObjectIsEmpty === true) {
    //     return true;
    //   } else return false;
    // },
  },
  actions: {
    async createNewUser(store, userData) {
      try {
        await this.$axios.post(`api/register`, userData);
      } catch (error) {
        throw new Error("Ошибка при регистрации");
      }
    },
    async changeUsersData(store, newData) {
      // console.log(newData);
      const data = wrapIntoFormData(newData);
      console.log(data);
      try {
        const response = await this.$axios.patch(
          `api/user/edit/${newData.id}`,
          data
        );
        let user = response.data.user;
        store.commit("SET_USER", user);
      } catch (error) {
        throw new Error("Новый пароль совпадает со старым");
      }
    },
    async userLogout(store) {
      try {
        const response = await this.$axios.post("api/logout");
        store.commit("LOGOUT__USER");
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
  },
};
