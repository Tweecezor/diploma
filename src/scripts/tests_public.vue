<template lang="pug">
.container-
  .wrap
    .admin__content(v-if="!opened")
      //- pre {{breadcrumbGroup}}
      //- pre {{questions}}
      //- pre {{questions}}
      //- pre {{currentTestsList}}
      //- pre {{studentsInCurrentGroup}}
      //- pre {{filteredQuestions}}
      .group_breadcrumbs
        ul.group_breadcrumbs__list
          li.group_breadcrumbs_item.breadcrumb(
            v-for="(item, id) in groups",
            ref="breadcrumb_group"
          )
            .breadcrumb__text-wrap(@click="filterTestByGroup(item, id)") 
              .breadcrumb__text {{ item.groupName }}
      .test__content
        ul.test__list
          li.test__item(v-for="item in currentTestsList")
            .test__header
              .test__name-wrap
                label.test__label Название теста
              .test__name-wrap
                input.test__name-input.test__input(
                  type="text",
                  v-model="item.name",
                  disabled
                )
            //- .created-test__name {{item.name}}
            .test__levels
              .test__levels-wrap
                label.test__levels-label.test__label Количество уровней
              .test__levels-wrap 
                input.test__levels-input.test__input(
                  type="text",
                  v-model="item.level",
                  disabled
                )
            .test__group
              .test__group-wrap
                label.test__group-label.test__label Для группы
              .test__group-wrap
                input.test__group-input.test__input(
                  type="text",
                  v-model="item.group",
                  disabled
                )
              //- .created-test__group {{item.group}}
            button.btn(@click="openTest(item)") Открыть
    TEST_PREVIEW(
      v-if="opened",
      :currentTest="currentTest",
      :studentsInCurrentGroup="studentsInCurrentGroup",
      :questions="filteredQuestions"
    )
      //- div(v-if="$route.meta.public")
      //-   router-view
      //-   tooltips
      //- div(v-else)
      //-   headerComponent
      //-   navComponent
      //-   router-view
      //-   tooltips  
</template>

<script>
import { mapActions, mapState } from "vuex";
import TEST_PREVIEW from "./tests_preview_public";
// import PASSING_TEST from "./passing_test";
export default {
  components: {
    TEST_PREVIEW,
    // PASSING_TEST
  },
  data() {
    return {
      currentTestsList: [],
      studentsInCurrentGroup: [],
      currentTest: "",
      opened: false,
      filteredQuestions: "",
      tests: "",
      groups: "",
      questions: "",
      breadcrumbGroup: "hello",
    };
  },
  methods: {
    ...mapActions("tests", ["fetchTests"]),
    openTest(item) {
      console.log(item);
      this.currentTest = item;
      console.log();
      let studentsInCurrentGroup;
      this.groups.filter((group) =>
        group.groupName === item.group
          ? (studentsInCurrentGroup = group.studentsInGroup)
          : ""
      );
      this.studentsInCurrentGroup = studentsInCurrentGroup;
      console.log(this.studentsInCurrentGroup);
      this.opened = true;
      this.filteredQuestions = this.filterQuestionsByTest(item);
    },
    filterQuestionsByTest(currentTest) {
      console.log(currentTest);
      let filteredQuestionsByTest = this.questions.filter((item) =>
        item.test_id === currentTest.id ? item : ""
      );
      console.log(filteredQuestionsByTest);
      return filteredQuestionsByTest;
    },
    filterTestByGroup(group, id) {
      console.log(group);
      let filteredTests = this.tests.filter((item) =>
        item.group === group.groupName ? item : ""
      );
      console.log(filteredTests);
      this.currentTestsList = filteredTests;
      this.setActiveBreadcrumbGroup(id);
    },
    setActiveBreadcrumbGroup(id) {
      this.breadcrumbGroup = this.$refs.breadcrumb_group;
      for (var i = 0; i < this.breadcrumbGroup.length; i++) {
        if (i === id) {
          this.breadcrumbGroup[i].firstChild.classList.add(
            "breadcrumb--active"
          );
        } else {
          this.breadcrumbGroup[i].firstChild.classList.remove(
            "breadcrumb--active"
          );
        }
      }
    },
  },
  computed: {
    // ...mapState("groups", {
    //   groups: (state) => state.groups,
    // }),
    // ...mapState("tests", {
    //   tests: (state) => state.tests,
    // }),
    ...mapState("helped", {
      isCurrentLevelOpen: (state) => state.isCurrentLevelOpen,
    }),
    ...mapState("helped", {
      isTestOpen: (state) => state.isTestOpen,
    }),
    ...mapState("helped", {
      showQuestions: (state) => state.showQuestions,
    }),
    // ...mapState("questions", {
    //   questions: (state) => state.questions,
    // }),
    ...mapState("results", {
      results: (state) => state.results,
    }),
  },
  async mounted() {
    // let response = await this.$axios.get("http://localhost:3002/api/tests");
    // const GROUPS = await this.$axios.get("http://localhost:3002/api/groups");
    // this.groups = GROUPS.data;
    // this.currentTestsList = response.data;
    // this.currentTestsList = this.tests;
    // this.breadcrumbGroup = this.$refs.breadcrumb_group;
    // console.log(this.$refs);
    // console.log(this.$refs["breadcrumb_group"]);
    // let ref = this.$refs;
    // console.log(this.breadcrumbGroup);
    // this.fetchTests();
    // this.breadcrumbGroup = this.$refs.breadcrumb_group;
    // console.log(this.breadcrumbGroup);
  },
  async created() {
    // console.log(this.$refs);

    console.log(this.breadcrumbGroup);
    // const TESTS = await this.$axios.get(
    //   "https://young-anchorage-15160.herokuapp.com/api/tests/public"
    // );
    // const GROUPS = await this.$axios.get(
    //   "https://young-anchorage-15160.herokuapp.com/api/groups"
    // );
    // const QUESTIONS = await this.$axios.get(
    //   "https://young-anchorage-15160.herokuapp.com/api/questions"
    // );
    const TESTS = await this.$axios.get(
      `http://localhost:3000/api/tests/public/${localStorage.getItem(
        "creatorIdPublic"
      )}`
    );
    const GROUPS = await this.$axios.get(
      `http://localhost:3000/api/groups/${localStorage.getItem(
        "creatorIdPublic"
      )}`
    );
    const QUESTIONS = await this.$axios.get(
      `http://localhost:3000/api/questions/${localStorage.getItem(
        "creatorIdPublic"
      )}`
    );
    this.questions = QUESTIONS.data;
    this.tests = TESTS.data;
    this.currentTestsList = TESTS.data;
    this.groups = GROUPS.data;
  },
};
</script>

<style lang="postcss" scoped>
@import url("../styles/mixins.pcss");
.group_breadcrumbs {
  margin-bottom: 20px;
}
.group_breadcrumbs__list {
  display: flex;
}
.breadcrumb {
  &:hover {
    cursor: pointer;
    color: #db9600;
    .breadcrumb__text-wrap {
      border: 1px solid #db9600;
    }
  }
}
.breadcrumb__text-wrap {
  padding: 0.3125rem;
  background: #fff;
  border: 1px solid #efefef;
  margin-right: 0.3125rem;
  border-radius: 6px;
}
.test__list {
  display: flex;
  flex-wrap: wrap;
}
.test__item {
  width: calc((100%-3%) / 3);
  margin-right: 1%;
  padding: 3.125rem 1.25rem;
  background-color: #fff;
  border: 1px solid #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 2%;
  box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.14);
  border-radius: 6px;
  &:nth-child(3n) {
    margin-right: 0px;
  }
  @include tablets {
    width: calc((100%-3%) / 2);
    margin-right: 2%;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:nth-child(3n) {
      margin-right: 2%;
    }
  }
  @include phones {
    width: 100%;
    margin-right: 0%;
    &:nth-child(2n) {
      margin-right: 0px;
    }
    &:nth-child(3n) {
      margin-right: 0%;
    }
  }
}
.test__label {
  color: #414c63;
  font-size: 1rem;
  line-height: 1.875rem;
  opacity: 0.5;
}
.test__name-input,
.test__input {
  width: 100%;
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  margin-bottom: 1.875rem;
}
.current_test_info {
  display: flex;
  width: 100%;
  border: 1px solid black;
  padding: 10px;
}
.current_test_info__desc-wrap {
  width: 55%;
  margin-right: 5%;
}
.current_test_actions-wrap {
  width: 45%;
}
.breadcrumb--active {
  color: #db9600;
  border: 1px solid #db9600;
}
</style>
