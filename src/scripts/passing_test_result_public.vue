<template lang="pug">
  .result
    myIcon.result__bg(iconName="welldone")
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
import myIcon from './myIcon.vue'
export default {
	props: {
		countOfCorrect: Number,
		countOfQuestions: Number,
		finalMark: Number,
	},
	components: {
		myIcon,
	},
	data() {
		return {}
	},
	methods: {
		showAnswers() {
			this.$emit('showUsersAnswers')
		},
	},
	mounted() {},
}
</script>

<style lang="postcss" scoped>
.result {
	width: 100%;
	/* background: white; */
	padding: 20px;
	display: flex;
	justify-content: center;
	position: relative;
}
.result-wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.result__mark {
	font-size: 90px;
	font-weight: 700;
	color: #183582;
}
.result__mark-wrap {
	margin-bottom: 10px;
}
.result__label-wrap {
	display: block;
	opacity: 0.5;
	color: #414c63;
	font-size: 20px;
	font-weight: 400;
	line-height: 1.875rem;
}

.result__bg {
	position: relative;
	width: 800px;
	height: 650px;
}
</style>
