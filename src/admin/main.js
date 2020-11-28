import Vue from "vue";

import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "element-ui/lib/theme-chalk/index.css";
// import axios from "./requests";
import axios from "axios";
import SimpleVueValidation from "simple-vue-validator";
import _ from "lodash";
Object.defineProperty(Vue.prototype, "$axios", { value: axios });
Object.defineProperty(Vue.prototype, "$_", { value: _ });

Vue.use(SimpleVueValidation);
Vue.use(ElementUI);
Vue.prototype.hello = () => {
  console.log("helloWorls");
};

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: (h) => h(App),
});
