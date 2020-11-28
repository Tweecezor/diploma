<template lang="pug">
.container
  .wrapper
    //- h1 Мои Настройки
    //- div.settings
    //- .group_item(v-for="group in groups")
    //- pre {{filteredTestByGroup}}
    //- pre {{results}}
    //- pre {{groups}}
    //- pre {{tests}}
    .group_breadcrumbs(v-if="groups")
      ul.group_breadcrumbs__list
        li.group_breadcrumbs_item.breadcrumb(
          ref="breadcrumb_group",
          v-for="(item, id) in groups",
          @click="changeCurrentGroup(item, id)"
        )
          .breadcrumb__text-wrap
            .breadcrumb__text {{ item.groupName }}
    .group_breadcrumbs
      ul.test_breadcrumbs__list
        li.test_breadcrumbs_item.breadcrumb(
          ref="breadcrumb_test",
          v-for="(item, id) in filteredTestByGroup",
          @click="showCurrentTestResult(item.name, id)"
        )
          .breadcrumb__text-wrap 
            .breadcrumb__text {{ item.name }}
    .result__table-wrap
      .result__table-top
        .result__table-head-wrap
          .result__table-head Группа
        .result__table-head-wrap
          .result__table-head ФИО
        .result__table-head-wrap
          .result__table-head Тест
        .result__table-head-wrap
          .result__table-head Оценка
      .result__table-bottom(v-for="result in filteredResultByGroup")
        .result__table-content-wrap
          .result__table-content {{ result.group }}
        .result__table-content-wrap
          .result__table-content {{ result.fullName }}
        .result__table-content-wrap
          .result__table-content {{ result.test_name }}
        .result__table-content-wrap
          .result__table-content {{ result.mark }}

    //- pre {{filteredResultByGroup}}
    //- pre {{results}}
      //- nav.settings__nav
      //-   ul.settings__list
      //-     li.settings__item( @click="setCurrentNav(item)" v-for="item in ['Личные данные','Группы','Помощь']") {{item}}
      //- .settings__content
      //-   GROUPS(v-if="currentNav==='Группы'")
</template>

<script>
import GROUPS from "./settings_groups";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    GROUPS,
  },
  data() {
    return {
      currentNav: "Личные данные",
      currentGroup: "",
      filteredResultByGroup: [],
      filteredTestByGroup: [],
      currentTestName: "",
      breadcrumbGroup: "",
      breadcrumbTest: "",
      // results: "",
      // groups: "",
      // tests: "",
    };
  },
  methods: {
    ...mapActions("results", ["fetchResults"]),
    ...mapActions("groups", ["fetchGroups"]),
    ...mapActions("tests", ["fetchTests"]),
    changeCurrentGroup(group, id) {
      // console.log(group);
      this.currentGroup = group.groupName;
      this.filterResultByGroup();
      this.filterTestByGroup();
      this.setActiveBreadcrumbGroup(id);
      for (var i = 0; i < this.breadcrumbTest.length; i++) {
        this.breadcrumbTest[i].firstChild.classList.remove(
          "breadcrumb--active"
        );
      }
    },
    setCurrentNav(item) {
      // console.log(item);
      this.currentNav = item;
    },
    filterTestByGroup() {
      this.filteredTestByGroup = this.tests.filter((item) => {
        // console.log(item);
        return item.group === this.currentGroup ? item : "";
      });
    },
    filterResultByGroup() {
      this.filteredResultByGroup = this.results.filter((item) => {
        return item.group === this.currentGroup ? item : "";
      });
      // console.log(this.filteredResultByGroup);
    },
    // filterResultByTestName() {
    //   this.filteredResultByGroup = this.results.filter((item) => {
    //     return item.name === this.currentTestName ? item : "";
    //   });
    // },
    showCurrentTestResult(testName, id) {
      // console.log(testName);
      this.filteredResultByGroup = this.results.filter((item) => {
        // console.log(item);
        return item.test_name === testName ? item : "";
      });
      this.setActiveBreadcrumbTest(id);
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
    setActiveBreadcrumbTest(id) {
      this.breadcrumbTest = this.$refs.breadcrumb_test;
      for (var i = 0; i < this.breadcrumbTest.length; i++) {
        if (i === id) {
          this.breadcrumbTest[i].firstChild.classList.add("breadcrumb--active");
        } else {
          this.breadcrumbTest[i].firstChild.classList.remove(
            "breadcrumb--active"
          );
        }
      }
    },
    sortBreadcrumbGroupList() {
      // this.groups = this.group.
    },
  },
  mounted() {
    if (this.results.length) {
      this.currentGroup = this.results[0].group;

      this.filteredResultByGroup = this.results;

      this.breadcrumbGroup = this.$refs.breadcrumb_group;

      for (var i = 1; i < this.breadcrumbGroup.length; i++) {
        this.breadcrumbGroup[i].firstChild.classList.remove(
          "breadcrumb--active"
        );
      }
    }
  },
  computed: {
    ...mapState("results", {
      results: (state) => state.results,
    }),
    ...mapState("groups", {
      groups: (state) => state.groups,
    }),
    ...mapState("tests", {
      tests: (state) => state.tests,
    }),
  },
  async created() {
    await this.fetchResults(localStorage.getItem("creatorId"));
    await this.fetchGroups(localStorage.getItem("creatorId"));
    await this.fetchTests(localStorage.getItem("creatorId"));
    this.filteredResultByGroup = this.results;
    // const REZ = await this.$axios("http://localhost:3002/api/results");
    // this.results = REZ.data;
    // console.log(this.results);
    // const GROUPS = await this.$axios("http://localhost:3002/api/groups");
    // const TESTS = await this.$axios("http://localhost:3002/api/tests");
    // console.log(results);
    // this.results = RESULTS.data;
    // this.groups = GROUPS.data;
    // // console.log(this.results[0].group);
    // this.tests = TESTS.data;
    // this.results =
    // this.currentGroup = this.results[0].group;
  },
};
</script>

<style lang="postcss" scoped>
@import url("../../styles/mixins.pcss");
.settings {
  width: 100%;
  /* height: 500px; */
  /* background-color: white; */
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
}
.settings__nav {
  width: 10%;
  background-color: white;
}
.settings__content {
  width: 85%;
  height: 500px;
  background-color: white;
  border: 2px solid black;
}
.settings__item {
  border-bottom: 2px solid black;
}
.result__table-wrap {
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  color: #414c63;
  font-size: 22px;
  font-weight: 700;
}
.result__table-top,
.result__table-bottom {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.result__table-top {
  border-bottom: 1px solid black;
}
.result__table-bottom {
  border-bottom: 1px solid black;
  color: #414c63;
  /* font-size: 0.9rem; */
  font-size: 16px;
  opacity: 0.8;
  font-weight: 700;
  &:last-child {
    border-bottom: 0;
  }
}
.result__table-head,
.result__table-content {
  text-align: center;
  /* width: calc(100% / 4); */
  width: 100%;
  padding: 10px;
  word-wrap: break-word;
  /* white-space: pre-wrap;  */
  /* -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto; */
  @include phones {
    padding: 5px;
    font-size: 14px;
  }
}
.result__table-head-wrap,
.result__table-content-wrap {
  width: calc(100% / 4);
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  border-right: 1px solid black;
  &:last-child {
    border-right: 0;
  }
  @include phones {
    /* font-size: 14px; */
  }
  /* &:last-child {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  } */
}
/* .result__table-bottom {
  &:last-child {

    .result__table-content-wrap {
      border-bottom: 1px solid black;
    }
  }
} */
/* .passing_test__answers_next-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.breadcrumb {
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    color: #db9600;
    border: 1px solid #db9600;
  }
}
.breadcrumb--active {
  color: #db9600;
  border: 1px solid #db9600;
}
.passing_test__breadcrumbs-list {
  display: flex;
  margin-bottom: 20px;
}
.breadcrumb {
  width: 1.25rem;
  line-height: 1.25rem;
  background: #fff;
  border: 1px solid #414c63;
  border-radius: 2px;
  text-align: center;
  margin-right: 0.3125rem;
  color: #414c63;
} */
.group_breadcrumbs,
.test_breadcrumbs {
  margin-bottom: 20px;
}
.group_breadcrumbs__list,
.test_breadcrumbs__list {
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
.breadcrumb--active {
  color: #db9600;
  border: 1px solid #db9600;
}
</style>
