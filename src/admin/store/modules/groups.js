export default {
  namespaced: true,
  state: {
    groups: [
      // {
      //   group_id: 1,
      //   groupName: "ИДБ 16 01",
      //   headmanEmail: "test@mail.ru",
      //   studentsInGroup: [
      //     {
      //       name: "Никита",
      //       surname: "Еремеев",
      //       thirdname: "Владиславович",
      //       fullName: "Еремеев Никита Владиславович",
      //       group_id: 1,
      //       student_id: 1,
      //     },
      //     {
      //       name: "Василий",
      //       surname: "Петров",
      //       thirdname: "Иванович",
      //       fullName: "Петров Василий Иванович",
      //       group_id: 1,
      //       student_id: 2,
      //     },
      //   ],
      // },
      // {
      //   group_id: 2,
      //   groupName: "МДБ 17 02",
      //   headmanEmail: "test@mail.ru",
      //   studentsInGroup: [
      //     {
      //       name: "Иван",
      //       surname: "Петров",
      //       thirdname: "Владиславович",
      //       fullName: "Петров Иван Владиславович",
      //       group_id: 2,
      //       student_id: 1,
      //     },
      //     {
      //       name: "Антон",
      //       surname: "Сидиров",
      //       thirdname: "Андреевич",
      //       fullName: "Сидиров Антон Андреевич",
      //       group_id: 2,
      //       student_id: 2,
      //     },
      //   ],
      // },
    ],
  },
  actions: {
    deleteStudent(store, currentStudent) {
      store.commit("DELETE_STUDENT", currentStudent);
    },
    addNewGroup(store, newGroup) {
      store.commit("ADD_NEW_GROUP", newGroup);
    },
    editGroup(store, editedGroup) {
      store.commit("EDIT_GROUP", editedGroup);
    },
    deleteGroup(store, groupID) {
      store.commit("DELETE_GROUP", groupID);
    },
    editStudentInGroup(store, editedStudent) {
      console.log(editedStudent);
      store.commit("EDIT_STUDENT", editedStudent);
    },
    addNewStudent(store, newStudent) {
      console.log(newStudent);
      store.commit("ADD_STUDENT", newStudent);
    },
    async fetchGroups(store) {
      const response = await this.$axios.get(
        "http://localhost:3002/api/groups"
      );
      const groups = response.data;
      console.log(groups);
      store.commit("SET_GROUPS", groups);
    },
  },
  mutations: {
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },
    async DELETE_STUDENT(state, currentStudent) {
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/groups/deleteStudent/${
            currentStudent.group_id
          }`,
          currentStudent
        );
        state.groups = state.groups.map((item) => {
          console.log(item);
          if (item.group_id === currentStudent.group_id) {
            // console.log(item.studentsInGroup);
            item.studentsInGroup = item.studentsInGroup.filter((student) => {
              console.log(student.student_id);
              console.log(currentStudent.student_id);
              return student.student_id != currentStudent.student_id
                ? student
                : "";
            });
            console.log(item.studentsInGroup);
          }
          return item;
        });
        console.log(state.groups);
      } catch (error) {
        console.log("error");
      }
    },

    async ADD_STUDENT(state, newStudent) {
      // console.log(newStudent);
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/groups/addStudent/${newStudent.group_id}`,
          newStudent
        );
        state.groups = state.groups.map((item) => {
          // console.log(item);
          // console.log(newStudent);
          if (item.group_id === newStudent.group_id) {
            item.studentsInGroup.push(newStudent);
          }
          return item;
        });
      } catch (error) {
        console.log("error");
      }
    },
    async EDIT_STUDENT(state, editedStudent) {
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/groups/patchStudent/${
            editedStudent.group_id
          }`,
          editedStudent
        );
      } catch (error) {}
      state.groups = state.groups.map((item) => {
        // console.log(item);
        if (item.group_id === editedStudent.group_id) {
          item.studentsInGroup = item.studentsInGroup.map((student) => {
            // console.log(student);
            // console.log(editedStudent);
            // if (student.student_id === editedStudent.student_id) {
            //   console.log("меняем студента");
            //   return editedStudent;
            // } else {
            //   return student;
            // }
            return student.student_id === editedStudent.student_id
              ? editedStudent
              : student;
          });
        }
        return item;
      });
      console.log(state.groups);
    },
    async DELETE_GROUP(state, groupID) {
      state.groups = state.groups.filter((item) => {
        return item.group_id !== groupID;
      });
      try {
        const response = await this.$axios.delete(
          `http://localhost:3002/api/groups/${groupID}`
        );
        const rez = response.data.type;
        console.log(rez);
      } catch (error) {
        console.log(error);
      }

      console.log(state.groups);
    },
    async ADD_NEW_GROUP(state, newGroup) {
      // console.log(newGroup);
      state.groups.push(newGroup);
      try {
        const response = await this.$axios.post(
          `http://localhost:3002/api/groups/`,
          newGroup
        );
        const rez = response.data;
        console.log(rez);
      } catch (error) {
        console.log(error);
      }
    },
    async EDIT_GROUP(state, editedGroup) {
      try {
        await this.$axios.patch(
          `http://localhost:3002/api/groups/${editedGroup._id}`,
          editedGroup
        );
        console.log(editedGroup);
        state.groups = state.groups.map((item) => {
          // console.log(item);
          // console.log(editedGroup);
          // if (item.group_id === editedGroup.group_id) {
          //   console.log("Нужная группа и меняем");
          //   return editedGroup;
          // } else {
          //   return item;
          // }
          return item.group_id === editedGroup.group_id ? editedGroup : item;
        });
        console.log(state.groups);
      } catch (error) {
        console.log("error");
      }
    },
  },
  getters: {
    groupId: (state) => () => {
      let ID = "empty";
      state.groups.forEach((item) => {
        return (ID = item.group_id);
      });
      return ID;
    },
  },
};
