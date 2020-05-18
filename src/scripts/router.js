import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: () => import("./tests_public"),
  },
  {
    path: "/testPreview",
    component: () => import("./tests_preview_public"),
  },
  {
    path: "/passingTest",
    component: () => import("./passing_test"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes, // сокращённая запись для `routes: routes`
});

export default router;
