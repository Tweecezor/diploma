<template lang="pug">
  li.answers__item.answer
    //- pre {{answerPhotoURl}}
    //- pre {{isActiveModeActive}}
    .answer__text-wrap
      input(type="text" v-model="answer.text"  ).answers__text
    .answer__correct-wrap
      input(type="radio" name="isCorrect" v-bind:value="answer.text" id="isCorrect" @change="setCorrectAnswer").answer__correct 
    .answer__actions(v-if="!editAnswer" :class="{answers__actions__disabled:isActiveModeActive}") 
      //- .answer__actions-edit(v-if="!editAnswer" @click="editAnswer = true")
      <svg height="512pt" class="answer__actions-photo" @click="showAnswerImg(answer)" viewBox="0 -64 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
        <path d="m149.332031 106.667969c0 23.5625-19.101562 42.664062-42.664062 42.664062-23.566407 0-42.667969-19.101562-42.667969-42.664062 0-23.566407 19.101562-42.667969 42.667969-42.667969 23.5625 0 42.664062 19.101562 42.664062 42.667969zm0 0" />
        <path d="m448 0h-384c-35.285156 0-64 28.714844-64 64v256c0 1.195312.296875 2.324219.363281 3.519531-.300781 2.558594-.171875 5.140625.765625 7.574219 5.269532 29.996094 31.382813 52.90625 62.871094 52.90625h384c35.285156 0 64-28.714844 64-64v-256c0-35.285156-28.714844-64-64-64zm-384 42.667969h384c11.753906 0 21.332031 9.578125 21.332031 21.332031v169.367188l-112.210937-112.214844c-14.59375-14.59375-38.335938-14.59375-52.90625 0l-101.546875 101.546875-26.882813-26.878907c-14.589844-14.59375-38.335937-14.59375-52.90625 0l-80.210937 80.210938v-212.03125c0-11.753906 9.578125-21.332031 21.332031-21.332031zm0 0" />
      </svg>
      //- .answer__actions-photo( @click="showAnswerImg(answer)")
      <svg id="deleteIcon" class="answer__actions-delete" @click="deleteCurrentAnswer(answer)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
        <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
      </svg>

    .answer__actions(v-if="editAnswer")
      <svg version="1.1" @click="changeAnswer(answer)" class="answer__actions-save" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
        <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
      </svg>

      <svg version="1.1" @click="cancelChangeAnswer(answer)" class="answer__actions-cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
      </svg>

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    answer: Object,
    answers: Array,
    answerPhotoURl: String,
    prevAnswerPhotoURl: String
  },
  data() {
    return {
      editAnswer: false
    };
  },
  methods: {
    ...mapActions("helped", ["setEditStatus"]),
    deleteCurrentAnswer(answer) {
      if (!this.isActiveModeActive) {
        console.log(answer);
        this.$emit("emitDeleteAnswer", answer);
        // this.setEditStatus(true);
      }
    },
    cancelChangeAnswer(answer) {
      this.answers.forEach(item => {
        if (item.answer_id === answer.answer_id) {
          item.imgURL = this.prevAnswerPhotoURl;
        }
      });
      this.editAnswer = false;
      this.setEditStatus(false);
      this.$emit("emitDropAnswerURL");
    },
    changeAnswer(answer) {
      console.log(answer);
      this.answers.forEach(item => {
        if (item.answer_id === answer.answer_id) {
          item.imgURL = this.answerPhotoURl;
        }
      });
      this.editAnswer = false;
      this.setEditStatus(false);
      this.$emit("emitDropAnswerURL");
    },
    showAnswerImg(answer) {
      if (!this.isActiveModeActive) {
        this.editAnswer = true;
        this.$emit("emitShowAnswerImg", { answer });
        this.setEditStatus(true);
      }
    },
    setCorrectAnswer(e) {
      console.log(this.answers);
      console.log(e.target.value);
      console.log(e.target.checked);
      let updatedAnswers = this.answers.map(function(item) {
        // console.log(item);
        if (item.text === e.target.value) {
          item.correct = e.target.checked;
          return item;
        } else {
          item.correct = false;
          return item;
        }
      });
      console.log(updatedAnswers);
      this.$emit("emitSetCorrectAnswer", { updatedAnswers: updatedAnswers });
      // this.answers = updatedAnswers;
      // this.isCorrectAnswerSet = true;
      // console.log(e.target.value);
      // console.log(e.target.checked);
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
@import url("../../styles/mixins.pcss");
.answer {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.answer__text-wrap {
  width: 75%;
  margin-right: 2%;
  width: 100%;
  @include tablets {
    width: 100%;
  }
}
.answer__correct-wrap {
  margin-right: 2%;
}
.answer__correct {
  height: 100%;
}
.answers__text {
  /* width: 100%; */
  background-color: transparent;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid #414c63;
  padding: 0 0.3125rem 0.625rem;
  /* margin-bottom: 1.875rem; */
  margin-bottom: 15px;
  width: 100%;
}
.answer__actions-edit {
  /* padding-right: 50px; */
  position: relative;
  margin-right: 25px;
  cursor: pointer;
  width: 20px;
  height: 20px;
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
.answer__actions-photo {
  /* padding-right: 50px; */
  position: relative;
  margin-right: 15px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  fill: blue;
  /* &:before {
    content: "";
    background: svg-load("photo.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answer__actions-delete {
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  fill: red;
  /* &:before {
    content: "";
    background: svg-load("trash.svg", fill= "red") center center no-repeat /
      contain;
    width: 18px;
    height: 18px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answer__actions-save {
  position: relative;
  margin-right: 15px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  fill: green;
  /* &:before {
    content: "";
    background: svg-load("tick.svg", fill= "green") center center no-repeat /
      contain;
    width: 18px;
    height: 18px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answer__actions-cancel {
  position: relative;
  cursor: pointer;
  fill: red;
  width: 17px;
  height: 17px;
  /* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 16px;
    height: 16px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answer__actions {
  width: 15%;
  display: flex;
  position: relative;
  /* margin-top: 10px; */
  align-items: center;
  @include tablets {
    width: auto;
  }
}
.answers__actions__disabled {
  svg {
    opacity: 0.5;
  }
}
</style>
