<template lang="pug">
  .result
    .result-wrap
      .result__label-wrap
        label.result__label Ваша оценка
      .result__mark-wrap
        h1.result__mark(v-if="finalMark") {{finalMark}}
        h1.result__mark(v-else) Не сдал 
      .result_btn-wrap
        button(type="button" @click="showAnswers").result__btn.btn Просмотр ответов
      //- button.btn(@click="calc") перерасчет
</template>

<script>
export default {
  props: {
    countOfCorrect: Number,
    countOfQuestions: Number,
    finalMark: Number,
  },
  data() {
    return {};
  },
  methods: {
    showAnswers() {
      this.$emit("showUsersAnswers");
    },
  },
  mounted() {},
};
</script>

<style lang="postcss" scoped>
.result {
  width: 100%;
  background: white;
  padding: 20px;
}
.result-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.result__mark {
  font-size: 70px;
  font-weight: 700;
}
.result__mark-wrap {
  margin-bottom: 10px;
}
.result__label-wrap {
  display: block;
  opacity: 0.5;
  color: #414c63;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875rem;
}
</style>
