<template lang="pug">
  .currentTest
    .back(@click="backToTest")
      myIcon(iconName="arrow")
    ul.currentTest__list
      li.currentTest__item.level(v-for="(item,levelId) in +currentTestGroup.level")
        .level__title-wrap
          h2.level__title Уровень {{levelId+1}}
          ul.stars
            li.star(v-for="star in levelId+1" :class="{three_star:levelId+1===3}")
              myIcon(iconName="star")
            //- myIcon.star(iconName="star")
            //- myIcon.star(iconName="star")

        .level__actions
          .action(@click="addQuestions(levelId+1)")
            button.level__actions_btn Создать вопрос
            myIcon.action__icon(iconName="create")
          .action(@click="downloadQuestions")
            button.level__actions_btn Добавить вопрос
            myIcon.action__icon.upload(iconName="logout")
          .action(@click="showQuestions(levelId+1)")
            button.level__actions_btn Показать вопросы
            myIcon.action__icon(iconName="show")
</template>
<script>
import { mapActions, mapState } from 'vuex'
import myIcon from './myIcon.vue'
export default {
	props: {
		currentTestGroup: Object,
		levelsCount: Number,
	},
	components: {
		myIcon,
	},
	data() {
		return {
			levelId: '',
			filteredQuestions: [],

			// isTestOpen:false
		}
	},
	methods: {
		...mapActions('helped', ['changeShowQuestionsStatus']),
		backToTest() {
			this.$router.push('./tests')
		},
		filterQuestion(questions, levelId, groupId) {
			let filteredQuestions = questions.filter(function(question) {
				// console.log(question);
				if (question.level_id === levelId && question.test_id === groupId) {
					return question
					console.log('yes')
				} else {
					console.log('nOOO')
				}
			})
			return filteredQuestions
		},
		addQuestions(levelId) {
			this.levelId = levelId
			const obj = {
				levelId,
				testid: this.currentTestGroup.id,
			}
			this.$emit('addNewQuestion', obj)
		},
		downloadQuestions() {
			// console.log(this.filteredQuestions);
			this.$router.push('./questions')
			// alert(
			//   "Загрузить вопросы из банка вопросов. Вывести страницу со списокм всех вопросов и поиском"
			// );
		},
		showQuestions(levelId) {
			this.$emit('showAllQuestionsInGroup', levelId, this.currentTestGroup.id)
		},
	},
	computed: {
		...mapState('questions', {
			questions: (state) => state.questions,
		}),
		...mapState('helped', {
			showQuestionsStatus: (state) => state.showQuestions,
		}),
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');

.currentTest__list {
	display: flex;
	@include phones {
		flex-direction: column;
	}
}

.level {
	display: flex;
	flex-direction: column;
	padding: 5px;
	width: calc((100%-16px) / 3);
	background: white;
	position: relative;
	background: #ffffff;
	padding: 30px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	margin-right: 16px;
	:&nth-child(3)  {
		margin-right: 0px;
	}
	@include tablets {
	}
	@include phones {
		width: 100%;
		margin-right: 0;
		margin-bottom: 30px;
	}
}
.level__title {
	font-weight: 600;
	font-size: 28px;
	color: #183582;
	@include tablets {
		font-size: 20px;
	}
}
.level__actions_btn {
	background: transparent;
	/* border-bottom: 1px solid #414c63; */
	border-bottom: 1px solid transparent;
	width: 100%;
}
.level__actions {
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	font-weight: 600;
	font-size: 24px;
	color: #000000;
}
.stars {
	display: flex;
	justify-content: space-between;
}
.star {
	width: 28px;
	height: 28px;
	color: #0a9ebe;
	margin-right: 8px;
	position: relative;
	&:nth-child(3) {
		margin-right: 0px;
	}
	@include tablets {
		width: 15px;
		height: 15px;
	}
}
.three_star {
	&:nth-child(2) {
		top: -10px;
	}
}
.level__title-wrap {
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
	align-items: center;
}
.back {
	width: 30px;
	height: 30px;
	margin-bottom: 24px;
	&:hover {
		color: #0a9ebe;
		cursor: pointer;
	}
}

.action {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 10px;
	&__icon {
		width: 24px;
		height: 24px;
		/* color: turquoise; */
	}
}

.upload {
	transform: rotate(-90deg);
}

.action {
	&:hover {
		color: #0a9ebe;
		.level__actions_btn {
			color: #0a9ebe;
		}
	}
}
.action__icon {
	&:hover {
		cursor: pointer;
	}
}
</style>
