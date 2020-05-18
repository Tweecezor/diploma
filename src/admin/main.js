import Vue from "vue";

import App from "./App.vue";
import router from "./router/router";
import store from "./store";
// import axios from "./requests";
import axios from "axios";
import SimpleVueValidation from "simple-vue-validator";
import _ from "lodash";
Object.defineProperty(Vue.prototype, "$axios", { value: axios });
Object.defineProperty(Vue.prototype, "$_", { value: _ });

Vue.use(SimpleVueValidation);

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: (h) => h(App),
});
