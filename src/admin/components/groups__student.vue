<template lang="pug">
//- include ../../../mixins.pug
div
  //- pre {{student}}
  //- pre {{currentStudent}}
  div.student
    //- .svgImage()
    input(type="text" :disabled="!editMode" v-model="currentStudent.surname").student__input
    input(type="text" :disabled="!editMode" v-model="currentStudent.name").student__input.student__input--surname
    input(type="text" :disabled="!editMode" v-model="currentStudent.thirdname").student__input.student__input--thirdname
    .student__buttons(v-if="!editMode")
      .student__buttons--edit(@click="editStudent")
      //- svg.edit
      //-   <use xlink:href="../../images/icons/pencil.svg"></use>
      //- +icon('pencil', 'student__buttons--edit-icon')
      .student__buttons--delete(@click="deleteCurrentStudent")
    .student__buttons(v-else)
      .student__buttons--save(@click="saveStudent")
      .student__buttons--cancel(@click="cancelEditStudent")
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    student: Object,
  },
  data() {
    return {
      currentStudent: { ...this.student },
      editMode: false,
      new: "",
    };
  },
  methods: {
    ...mapActions("groups", ["editStudentInGroup", "deleteStudent"]),
    editStudent() {
      this.editMode = !this.editMode;
    },
    deleteCurrentStudent() {
      console.log(this.currentStudent);
      this.deleteStudent(this.currentStudent);
    },
    saveStudent() {
      this.editMode = !this.editMode;
      console.log(this.currentStudent);
      this.editStudentInGroup(this.currentStudent);
    },
    cancelEditStudent() {
      this.currentStudent = { ...this.student };
      this.editMode = !this.editMode;
    },
  },
  watch: {
    student: function(student) {
      this.currentStudent = { ...this.student };
    },
  },
};
</script>
<style lang="postcss" scoped>
.svgImage {
  width: 20px;
  heigth: 20px;
  background: svg-load("message.svg");
  background-position: center center;
}
.student {
  display: flex;
  width: 100%;
}
.student__input {
  border: none;
  width: 28%;
  margin-right: 2%;
  border-bottom: 1px solid black;
  &--surname {
    width: 25%;
    /* margin-right: 2; */
  }
  &--thirdname {
    width: 33%;
    /* margin-right: 2; */
  }
}
.student__buttons {
  display: flex;
}
.student__buttons--edit {
  /* padding-right: 50px; */
  /* background: svg-load("trash.svg", fill= "red") center center no-repeat /
    contain; */
  position: relative;
  margin-right: 20px;
  /* width: 15px;
  height: 15px; */
  /* background: url("../../images/icons/pencil.svg"); */
  /* background-position: center center; */
  /* background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='528.899px' height='528.899px' viewBox='0 0 528.899 528.899' style='enable-background:new 0 0 528.899 528.899;' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A"); */

  cursor: pointer;
  &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#383bcf") center center no-repeat /
      contain;
    /* background: url("../../images/icons/pencil.svg"); */
    /* background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='528.899px' height='528.899px' viewBox='0 0 528.899 528.899' style='enable-background:new 0 0 528.899 528.899;' xml:space='preserve'%3E%3Cg%3E%3Cpath d='M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z'/%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A"); */
    width: 15px;
    height: 15px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.student__buttons--edit-icon {
  width: 15px;
  height: 15px;
}
.student__buttons--delete {
  /* padding-right: 3.125rem; */
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    background: svg-load("trash.svg", fill= "red") center center no-repeat /
      contain;
    width: 13px;
    height: 13px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.student__buttons--save {
  /* padding-right: 50px; */
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  &:before {
    content: "";
    background: svg-load("tick.svg", fill= "green") center center no-repeat /
      contain;
    width: 15px;
    height: 15px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
.student__buttons--cancel {
  /* padding-right: 3.125rem; */
  position: relative;
  cursor: pointer;
  &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 13px;
    height: 13px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  }
}
</style>
