import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from "@/store";
import routes from "@/router/routes";

Vue.use(VueRouter);

// import about from './components/pages/about'
// import works from './components/pages/works'
// import reviews from './components/pages/reviews'
// import login from './components/pages/login'

const baseURL = "https://young-anchorage-15160.herokuapp.com/api";

const guard = axios.create({
  baseURL,
});

const router = new VueRouter({ routes });

// router.beforeEach((to, from, next) => {
//   console.log("перед роутами");
//   next();
// });
router.beforeEach(async (to, from, next) => {
  // console.log("BeforeEachROuter");
  // console.log(guard.defaults.headers["Authorization"]);
  const isPublicRoute = to.matched.some((record) => record.meta.public);
  // console.log(isPublicRoute);
  const isUserLogged = store.getters["user/userIsLogged"];
  // console.log(isUserLogged);
  if (isPublicRoute === false && isUserLogged === false) {
    console.log("inside router IF");
    const token = localStorage.getItem("token");
    // console.log(localStorage);
    // console.log(token);
    guard.defaults.headers["Authorization"] = token;
    // console.log(guard.defaults.headers["Authorization"]);
    try {
      console.log("try user");
      const response = await guard.get("/user");
      console.log(response);
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace("/login");
      localStorage.removeItem("token");
    }
  } else {
    next();
  }

  // if (isPublicRoute === false && isUserLogged === false) {
  //   const token = localStorage.getItem("token");
  //   guard.defaults.headers["Authorization"] = `Bearer ${token}`;

  //   try {
  //     const response = await guard.get("/user");
  //     store.commit("user/SET_USER", response.data.user);
  //     next();
  //   } catch (error) {
  //     router.replace("/login");
  //     localStorage.removeItem("token");
  //   }
  // } else {
  //   next();
  // }
  // const isUserLogout = store.getters["user/userIsLogout"];
  // if (isUserLogout) {
  //   router.replace("/login");
  // }
});

export default router;
