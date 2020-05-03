<template lang="pug">
  .container_
    .wrap
      .admin__content(v-if="!opened")
        //- pre {{questions}}
        //- pre {{groups}}
        //- pre {{currentTestsList}}
        //- pre {{studentsInCurrentGroup}}
        //- pre {{filteredQuestions}}
        .group_breadcrumbs
          ul.group_breadcrumbs__list
            li.group_breadcrumbs_item.breadcrumb(v-for="(item,id) in groups" ref="breadcrumb_group")
              .breadcrumb__text-wrap(@click="filterTestByGroup(item,id)") 
                .breadcrumb__text {{item.groupName}}
        .test__content
          ul.test__list
            li.test__item(v-for="item in currentTestsList")
              .test__header
                .test__name-wrap
                  label.test__label Название теста
                .test__name-wrap
                  input(type="text" v-model="item.name" disabled).test__name-input.test__input
              //- .created-test__name {{item.name}}
              .test__levels
                .test__levels-wrap
                  label.test__levels-label.test__label Количество уровней
                .test__levels-wrap 
                  input(type="text" v-model="item.level" disabled).test__levels-input.test__input
              .test__group
                .test__group-wrap
                  label.test__group-label.test__label Для группы
                .test__group-wrap
                  input(type="text" v-model="item.group" disabled).test__group-input.test__input
                //- .created-test__group {{item.group}}
              button(@click="openTest(item)").btn Открыть
      TEST_PREVIEW(
        v-if="opened"
        :currentTest="currentTest"
        :studentsInCurrentGroup="studentsInCurrentGroup"
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
      breadcrumbGroup: "",
    };
  },
  methods: {
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
      console.log(this.$route);
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
    ...mapState("groups", {
      groups: (state) => state.groups,
    }),
    ...mapState("tests", {
      tests: (state) => state.tests,
    }),
    ...mapState("helped", {
      isCurrentLevelOpen: (state) => state.isCurrentLevelOpen,
    }),
    ...mapState("helped", {
      isTestOpen: (state) => state.isTestOpen,
    }),
    ...mapState("helped", {
      showQuestions: (state) => state.showQuestions,
    }),
    ...mapState("questions", {
      questions: (state) => state.questions,
    }),
  },
  mounted() {
    this.currentTestsList = this.tests;
    this.breadcrumbGroup = this.$refs.breadcrumb_group;
    console.log(this.breadcrumbGroup);
  },
};
</script>

<style lang="postcss" scoped>
.group_breadcrumbs {
  margin-bottom: 20px;
}
.group_breadcrumbs__list {
  display: flex;
}
.breadcrumb {
  &:hover {
    cursor: pointer;
    color: #edb947;
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
