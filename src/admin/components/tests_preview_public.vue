<template lang="pug">
  .wrap 
    .current_test_back BACK
    .current_test_info
      //- pre {{currentTest}}
      //- pre {{studentsInCurrentGroup}}
      //- pre {{questions}}
      //- pre {{filteredQuestionsByLevel}}
      .current_test_info__desc-wrap
        .current_test_info__desc
          p {{description}}
      .current_test_actions-wrap
        .current_test_actions-level
          .current_test_label-wrap
            label.current_test_label Выберите уровень теста
          ul.current_test_level_list
            li.current_test_level_item.level(v-for="level in +currentTest.level" ref="levelList" @click="selectLevel($event,level)")
              .level__value {{level}}
        .current_test_actions-fullname
          .current_test_label-wrap
            label.current_test_label Выберите ФИО
          select.current_test_select(@change="selectStudent($event)")
            option() Выберите ФИО
            option(v-for="student in studentsInCurrentGroup" :value="student.fullName") {{student.fullName}}
          .current_test_start-wrap
            button(type="button" @click="startTest").current_test_start.btn  Начать тестирование

            
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
  props: {
    currentTest: Object,
    questions: Array,
    studentsInCurrentGroup: Array,
  },
  data() {
    return {
      selectedLevel: "",
      selectedStudent: "",
      filteredQuestionsByLevel: "",
      description:
        "Выберите один из трех предложенных уровней теста. 1 уровень соответствует оценке 25-34. 2 уровень оценке 35-44. 3 уровень оценке 45-54.Для успешного заврешения теста необходимо ответить на половину вопросов.",
    };
  },
  methods: {
    ...mapActions("helped", [
      "setQuestionsForCurrentPassingTest",
      "setCurrentTestStudentData",
    ]),

    filterQuestionsByLevel(level) {
      let deepCopyQuestions = this.$_.cloneDeep(this.questions);
      console.log(deepCopyQuestions);
      let filteredQuestions = deepCopyQuestions.filter((item) =>
        item.level_id === level ? item : ""
      );
      return filteredQuestions;
    },
    startTest() {
      if (this.selectedStudent === "" || this.selectedLevel === "") {
        alert("Выберите уровень теста и ФИО");
        return;
      }

      let studentData = {
        fullName: this.selectedStudent,
        test_level: this.selectedLevel,
        group: this.currentTest.group,
        test_id: this.currentTest.id,
        test_name: this.currentTest.name,
      };
      this.filteredQuestionsByLevel = this.filterQuestionsByLevel(
        this.selectedLevel
      );
      console.log(this.filteredQuestionsByLevel);
      console.log(studentData);
      this.setCurrentTestStudentData(studentData); // добавить на галвную прохожеления теста
      this.setQuestionsForCurrentPassingTest(this.filteredQuestionsByLevel);
      this.$router.push("./passingTest");
    },
    selectStudent(e) {
      // console.log(e.target.value);
      this.selectedStudent = e.target.value;
    },
    selectLevel(e, level) {
      this.selectedLevel = level;
      this.$refs.levelList.forEach((item) => {
        item.firstChild.classList.remove("level__value--active");
      });
      e.target.classList.add("level__value--active");
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
    // ...mapState("questions", {
    //   questions: state => state.questions
    // })
  },
  mounted() {},
  watch: {
    questions: (item) => {
      console.log(item);
    },
  },
};
</script>

<style lang="postcss" scoped>
.current_test_info {
  display: flex;
  width: 100%;
  /* border: 1px solid black; */
  padding: 10px;
  background: white;
  border-radius: 6px;
  box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.14);
}
.current_test_info__desc-wrap {
  width: 55%;
  margin-right: 5%;
}
.current_test_actions-wrap {
  width: 45%;
}
.current_test_level_list {
  display: flex;
}
.current_test_label {
  color: #363636;
  /* color: black; */
  font-size: 1rem;
  line-height: 1.875rem;
  opacity: 0.8;
}
.level__value {
  width: 50px;
  line-height: 50px;
  /* border: 2px solid #db9600; */
  border: 2px solid #efefef;
  margin-right: 10px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    border: 2px solid #db9600;
    cursor: pointer;
  }
  &--active {
    border: 2px solid #db9600;
    border-radius: 4px;
  }
}
.current_test_start-wrap {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.current_test_select {
  margin-bottom: 20px;
}
.current_test_actions-level {
  margin-bottom: 10px;
}
</style>
