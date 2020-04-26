<template lang="pug">
  .container
    .wrapper__container
      .admin__content
        //- pre {{tests}}
        //- pre {{groups}}
        //- pre {{currentTestsList}}
        .group_breadcrumbs
          ul.group_breadcrumbs__list
            li.group_breadcrumbs_item.breadcrumb(v-for="item in groups")
              .breadcrumb__text-wrap(@click="filterTestByGroup(item)") 
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
export default {
  data() {
    return {
      currentTestsList: []
    };
  },
  methods: {
    openTest(item) {
      console.log(item);
      let studentsInCurrentGroup;
      this.groups.filter(group =>
        group.groupName === item.group
          ? (studentsInCurrentGroup = group.studentsInGroup)
          : ""
      );
      console.log(studentsInCurrentGroup);
    },
    filterTestByGroup(group) {
      console.log(group);
      let filteredTests = this.tests.filter(item =>
        item.group === group.groupName ? item : ""
      );
      console.log(filteredTests);
      this.currentTestsList = filteredTests;
    }
  },
  computed: {
    ...mapState("groups", {
      groups: state => state.groups
    }),
    ...mapState("tests", {
      tests: state => state.tests
    }),
    ...mapState("helped", {
      isCurrentLevelOpen: state => state.isCurrentLevelOpen
    }),
    ...mapState("helped", {
      isTestOpen: state => state.isTestOpen
    }),
    ...mapState("helped", {
      showQuestions: state => state.showQuestions
    }),
    ...mapState("questions", {
      questions: state => state.questions
    })
  },
  mounted() {
    this.currentTestsList = this.tests;
  }
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
</style>