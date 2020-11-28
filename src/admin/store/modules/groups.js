export default {
  namespaced: true,
  state: {
    groups: [],
  },
  actions: {
    async deleteStudent(store, currentStudent) {
      try {
        await this.$axios.patch(
          `api/groups/deleteStudent/${currentStudent.group_id}`,
          currentStudent
        );
        store.commit("DELETE_STUDENT", currentStudent);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async addNewGroup(store, newGroup) {
      try {
        const response = await this.$axios.post(`api/groups/`, newGroup);
        const createdGroup = response.data;
        // console.log(createdGroup);
        store.commit("ADD_NEW_GROUP", createdGroup);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async editGroup(store, editedGroup) {
      try {
        await this.$axios.patch(`api/groups/${editedGroup._id}`, editedGroup);
        store.commit("EDIT_GROUP", editedGroup);
      } catch (error) {
        console.log(error.response.data);
        throw new Error(`${error.response.data.message}`);
      }
    },
    async deleteGroup(store, groupID) {
      try {
        const response = await this.$axios.delete(`api/groups/${groupID}`);
        const rez = response.data.type;
        // console.log(rez);
        store.commit("DELETE_GROUP", groupID);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async editStudentInGroup(store, editedStudent) {
      try {
        await this.$axios.patch(
          `api/groups/patchStudent/${editedStudent.group_id}`,
          editedStudent
        );
        store.commit("EDIT_STUDENT", editedStudent);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async addNewStudent(store, newStudent) {
      try {
        let response = await this.$axios.patch(
          `api/groups/addStudent/${newStudent.group_id}`,
          newStudent
        );
        let updatedGroup = response.data;
        store.commit("ADD_STUDENT", updatedGroup);
      } catch (error) {
        console.log(error.response.data.message);
        throw new Error(error.response.data.message);
      }
    },
    async fetchGroups(store, creatorID) {
      try {
        const response = await this.$axios.get(`api/groups/${creatorID}`);
        const groups = response.data;
        store.commit("SET_GROUPS", groups);
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
  },
  mutations: {
    SET_GROUPS(state, groups) {
      state.groups = groups.reverse();
    },
    async DELETE_STUDENT(state, currentStudent) {
      state.groups = state.groups.map((item) => {
        if (item.group_id === currentStudent.group_id) {
          item.studentsInGroup = item.studentsInGroup.filter((student) => {
            return student.student_id != currentStudent.student_id
              ? student
              : "";
          });
        }
        return item;
      });
    },

    async ADD_STUDENT(state, updatedGroup) {
      state.groups = state.groups.map((item) => {
        if (item.group_id === updatedGroup.group_id) {
          item = updatedGroup;
        }
        return item;
      });
    },
    async EDIT_STUDENT(state, editedStudent) {
      state.groups = state.groups.map((item) => {
        if (item.group_id === editedStudent.group_id) {
          item.studentsInGroup = item.studentsInGroup.map((student) => {
            return student.student_id === editedStudent.student_id
              ? editedStudent
              : student;
          });
        }
        return item;
      });
    },
    async DELETE_GROUP(state, groupID) {
      state.groups = state.groups.filter((item) => {
        return item.group_id !== groupID;
      });
    },
    async ADD_NEW_GROUP(state, newGroup) {
      state.groups.unshift(newGroup);
    },
    async EDIT_GROUP(state, editedGroup) {
      state.groups = state.groups.map((item) => {
        return item.group_id === editedGroup.group_id ? editedGroup : item;
      });
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
