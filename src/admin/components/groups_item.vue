<template lang="pug">
  div
    //- pre {{group}}
    //- pre {{isActiveModeActive}}
    .group__preview
      .group__preview-info
        .group__name-wrap 
          input(:class="{group__active:editMode}" type="text" ref="groupName" :disabled="!editMode" v-model="currentGroup.groupName").group__name
        .group__status-wrap
          input(type="text" :class="{group__active:editMode}" :disabled="!editMode" v-model="currentGroup.headmanEmail").group__status
    .group__desc(ref="studentsList")
      .group__desc-text(v-for="student in group.studentsInGroup" )
        STUDENT_IN_GROUP(:student="student")
    label.group__desc-label Добавить студента:
    .group__desc-student.student
        input(type="text" placeholder="Фамилия" v-model="studentSurname ").student__input.student__input--surname
        input(type="text" placeholder="Имя"  v-model="studentName").student__input
        input(type="text" placeholder="Отчество"  v-model="studentThirdname").student__input.student__input--thirdname
        .student__add(@click="addStudent")
    .group__desc-controls(v-if="!editMode" :class="{group__desc__disabled:isActiveModeActive}")
      .group__desc-correct-wrap
        label.group__desc_label(for="editIcon"  @click="correctGroup") Править
        <svg @click="correctGroup" class="group__desc-correct" version="1.1" id="editIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
            <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
        </svg>
      .group__desc-correct-wrap
        label.group__desc_label(for="deleteIcon" @click="deleteCurrentGroup(group.group_id)") Удалить
        <svg id="deleteIcon" class="group__desc-remove" @click="deleteCurrentGroup(group.group_id)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
          <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
        </svg>
    .group__desc-controls(v-else)
      .group__desc-correct-wrap
        label.group__desc_label(for="deleteIcon" @click="saveGroup") Сохранить
        <svg version="1.1" @click="saveGroup" class="group__desc-correct correct-save" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
          <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
        </svg>
      .group__desc-correct-wrap
        label.group__desc_label(for="deleteIcon" @click="cancelEdited") Отменить
        <svg version="1.1" @click="cancelEdited" class="group__desc-remove remove-cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
          <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
        </svg>

</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import STUDENT_IN_GROUP from "./groups__student";
export default {
  components: {
    STUDENT_IN_GROUP
  },
  props: {
    group: Object
  },
  data() {
    return {
      currentGroup: { ...this.group },
      editMode: false,
      editedGroup: "",
      studentSurname: "",
      studentName: "",
      studentThirdname: ""
    };
  },
  methods: {
    ...mapActions("groups", ["editGroup", "deleteGroup", "addNewStudent"]),
    ...mapActions("tooltips", ["showTooltip", "hideTooltip"]),
    ...mapActions("helped", ["setEditStatus"]),
    cancelEdited() {
      if (this.isActiveModeActive) {
        this.editMode = !this.editMode;
        this.currentGroup = { ...this.group };
        this.showTooltip({
          type: "success",
          text: "Изменения успешно отменены"
        });
        this.setEditStatus(false);
      }
    },
    async deleteCurrentGroup(groupID) {
      if (!this.isActiveModeActive) {
        try {
          await this.deleteGroup(groupID);
          this.showTooltip({
            type: "success",
            text: "Группа успешно удалена"
          });
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: error
          });
        }
      }
    },
    correctGroup() {
      if (!this.isActiveModeActive) {
        this.editMode = !this.editMode;
        // document.querySelector("#groupName").focus();
        this.$refs.groupName.focus();
        this.setEditStatus(true);
        // console.log(document.querySelector("#groupName"));
      }
    },
    async saveGroup() {
      if (this.isActiveModeActive) {
        try {
          this.editedGroup = {
            ...this.currentGroup,
            groupName: this.currentGroup.groupName,
            headmanEmail: this.currentGroup.headmanEmail
          };
          // console.log(this.editedGroup);
          this.editMode = !this.editMode;
          await this.editGroup(this.editedGroup);
          this.showTooltip({
            type: "success",
            text: "Изменения успешно сохранены"
          });
          this.setEditStatus(false);
        } catch (error) {
          this.setEditStatus(false);
          this.showTooltip({
            type: "error",
            text: error
          });
        }
      }
    },
    addStudent() {
      let newStudent = {
        name: this.studentName,
        surname: this.studentSurname,
        thirdname: this.studentThirdname,
        fullName: `${this.studentSurname} ${this.studentName} ${this.studentThirdname}`,
        group_id: this.group.group_id,
        student_id: Date.now()
        // student_id: this.group.studentsInGroup.length + 1
      };
      // console.log(newStudent);
      if (this.studentName && this.studentSurname && this.studentThirdname) {
        this.addNewStudent(newStudent);
        this.showTooltip({
          type: "success",
          text: "Новый студент успешно добавлен"
        });
        this.studentName = "";
        this.studentSurname = "";
        this.studentThirdname = "";
        this.$refs.studentsList.scrollTop = 999;
      } else {
        this.showTooltip({
          type: "error",
          text: "Добавьте ФИО нового студента"
        });
      }
    }
  },
  computed: {
    ...mapState("helped", {
      isActiveModeActive: state => state.isEditActive
    })
  },
  mounted() {
    this.setEditStatus(false);
  },
  watch: {
    group: function(group) {
      this.currentGroup = { ...this.group };
    }
  },
  computed: {
    ...mapState("helped", {
      isActiveModeActive: state => state.isEditActive
    })
  },
  mounted() {
    this.setEditStatus(false);
  }
};
</script>

<style lang="postcss" scoped>
input[type="text"] {
  /* width: 100%; */
  &:hover {
    border-bottom: 1px solid #edb947;
  }
}
.group__desc_label {
  margin-right: 10px;
  cursor: pointer;
}
.group__desc-correct-wrap {
  display: flex;
  align-items: center;
}
.student__add {
  width: 30px;
  height: 30px;
  /* background-color: red; */
  background: linear-gradient(190deg, #db9600, #edb947);
  cursor: pointer;
  border-radius: 50%;
  position: relative;
  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background: svg-load("remove.svg", fill= "#fff") center center no-repeat /
      contain;
    /* width: 2.125rem;
    height: 2.125rem; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover {
    background: linear-gradient(to left, #db9600, #edb947);
  }
}
.group__name {
  width: 100%;
}

.group__name,
.group__status {
  &:hover {
    border-bottom: none;
  }
  border-bottom: none;
}

.student {
  /* padding-left: 55px; */
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.student__input {
  border: none;
  border-bottom: 1px solid black;
  margin-right: 1%;
  width: 25%;
  &--thirdname {
    width: 30%;
    margin-right: 0;
  }
  &--surname {
    width: 28%;
  }
  &:hover {
    border-bottom: 1px solid #edb947;
  }
}
.group__preview {
  display: flex;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #414c63;
  margin-bottom: 20px;
}
.group__avatar {
  margin-right: 20px;
}
.group__name {
  color: #414c63;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 5px;
}

.group__status {
  opacity: 0.5;
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  border: none;
}
.group__desc-text {
  width: 100%;
  /* opacity: 0.7; */
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 20px;
}
.group__desc-controls {
  display: flex;
  justify-content: space-between;
  min-width: 95%;
}
.group__desc {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.group__desc-controls {
  align-items: flex-end;
  position: absolute;
  bottom: 2%;
}
.group__desc-controls {
  display: flex;
  justify-content: space-between;
  /* opacity: 0.5; */
  color: #414c63;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
}
.group__desc-correct {
  /* padding-right: 50px; */
  position: relative;
  /* margin-right: 40px; */
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: blue;
  /* &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.group__desc-remove {
  /* padding-right: 3.125rem; */
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: red;
  /* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.group__desc {
  height: 200px;
  overflow: auto;
}

.group__name-wrap {
  margin-bottom: 5px;
}
.group__status {
  padding-bottom: 5px;
  border-bottom: 1px solid transparent;
}
.group__active {
  border-bottom: 1px solid #edb947;
  /* border-bottom: 1px solid orange; */
}
.student__input {
  padding-bottom: 5px;
}
.group__desc-label {
  display: block;
  margin-bottom: 10px;
  color: #db9600;
}
.correct-save {
  fill: green;
}
.remove-cancel {
  fill: red;
}
.group__desc__disabled {
  svg {
    opacity: 0.5;
  }
}
input[type="text"]:disabled {
  border-bottom: 1px solid black;
  &:hover {
    border-bottom: 1px solid black;
  }
}

.group__preview-info {
  width: 100%;
}
.group__status-wrap {
  input[type="text"]:disabled {
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid transparent;
    }
  }
}
</style>
