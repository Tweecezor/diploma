export default [
  {
    path: "/drag",
    component: () => import("../components/drag"),
  },
  {
    path: "/",
    component: () => import("./../components/pages/test.vue"),
  },

  {
    path: "/tests",
    component: () => import("./../components/pages/test.vue"),
  },
  {
    path: "/showResult",
    component: () => import("./../components/showResult"),
  },
  {
    path: "/adminSettings",
    component: () => import("./../components/pages/adminSettings.vue"),
  },
  {
    path: "/login",
    component: () => import("./../components/pages/login"),
    meta: {
      public: true,
    },
  },
  {
    path: "/groups",
    component: () => import("./../components/settings_groups"),
  },
  {
    path: "/questions",
    component: () => import("./../components/pages/questions"),
  },
  {
    path: "/currentTest",
    component: () => import("./../components/pages/actionsWithCurrentTest.vue"),
  },
  {
    path: "/publicTests",
    component: () => import("./../components/tests_public"),
  },
  {
    path: "/passingTest",
    component: () => import("./../components/passing_test"),
  },
  {
    path: "/completedTest",
    component: () => import("./../components/completed_test"),
  },
  {
    path: "/settings",
    component: () => import("./../components/settings"),
  },
];
