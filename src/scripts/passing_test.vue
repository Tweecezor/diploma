<template lang="pug">
.container_
  //- pre {{currentStudentData}}
  TEST_RESULT(
    v-if="showResult",
    :countOfCorrect="countOfCorrect",
    :countOfQuestions="questions.length",
    :finalMark="finalMark",
    v-on:showUsersAnswers="showAnswers"
  )
  .passing_test(v-else)
    //- pre {{currentStudentData.testTime}}
    .passing_test__breadcrumbs-wrap
      ul.passing_test__breadcrumbs-list
        li.passing_test__breadcrumbs-item.breadcrumb(
          ref="breadcrumb",
          v-for="(question, pos) in questions",
          @click=""
        )
          .breadcrumb__content(
            @click="changeCurrentQuestion($event, question, pos)"
          ) {{ pos + 1 }}
      progress.passing_test__progress_bar(
        ref="progressBar",
        value="0",
        max="100"
      )
    .passing_test__question-wrap
      .passing_test__question.question
        .question__text-wrap
          p.question__text {{ currentQuestion.question.text || 'sgfdb' }}
        .question__img-wrap(v-if="currentQuestion.question.img")
          .question__img(
            :style="{ 'background-image': `url(${currentQuestion.question.img})` }"
          )
      .passing_test__answers
        .passing_test_answers_label Варианты ответов
        MULTY_ANSWER(
          v-if="currentQuestion.type === 'multipleAnswer'",
          :question_id="currentQuestion.question.question_id",
          :answers="currentQuestion.answers",
          v-on:changeAnswer="setAnswerWithUsersSelect_multy"
        )
        ONE_ANSWER(
          v-if="currentQuestion.type === 'oneAnswer'",
          :question_id="currentQuestion.question.question_id",
          :answers="currentQuestion.answers",
          v-on:changeAnswer_one="setAnswerWithUsersSelect_one"
        )
        HANDWRITING_ANSWER(
          v-if="currentQuestion.type === 'handwritingAnswer'",
          :keywords="currentQuestion.keywordsArray",
          :question_id="currentQuestion.question.question_id",
          :userHandwriteAnswer="currentQuestion.userHandwriteAnswer",
          v-on:saveHandwrite="saveUsersHandwriteAnswer"
        )
      .passing_test__answers_next-wrap
        button.passing_test__answers_next.btn(
          type="button",
          @click="completeTest",
          v-if="activeQuestion == questions.length - 1"
        ) Завершить тестирование
        button.passing_test__answers_next.btn(
          type="button",
          @click="setNextQuestion",
          v-else
        ) Следующий вопрос

  //- pre {{questions}}
</template>

<script>
import { mapActions, mapState } from 'vuex'
import MULTY_ANSWER from './passing_test_-answer_multy'
import ONE_ANSWER from './passing_test-answer_one'
import HANDWRITING_ANSWER from './pasing_test-answer_hand'
import TEST_RESULT from './passing_test_result_public'

export default {
	components: {
		MULTY_ANSWER,
		ONE_ANSWER,
		HANDWRITING_ANSWER,
		TEST_RESULT,
	},
	props: {
		// testTime:Number
	},
	data() {
		return {
			showResult: false,
			currentQuestion: '',
			activeQuestion: 0,
			usersAnswer: [], //массив из ответов студента. Изначально забиваем его на каждый вопрос ложным и потом меняем.
			questionsWithUsersAnswers: [],
			copyQuestions: '',
			breadcrumbs: [],
			countOfCorrect: 0,
			// countOfQuestions: this.questions.length,
			finalMark: '',
			id: '',
		}
	},
	methods: {
		...mapActions('helped', ['setCompletedTestQuestions']),
		...mapActions('results', ['addNewResult']),
		calculateResult() {},
		showAnswers() {
			this.setCompletedTestQuestions(this.copyQuestions)
			this.$router.push('/completedTest')
		},
		async completeTest() {
			// console.log(this.copyQuestions);
			this.countOfCorrect = this.countCorrectAnswers()
			// console.log(this.countOfCorrect);
			this.calc(this.countOfCorrect)
			let studentResult = {
				...this.currentStudentData,
				mark: this.finalMark,
				creatorId: localStorage.getItem('creatorIdPublic'),
			}
			// console.log(studentResult);
			this.showResult = true
			await this.$axios.post(
				'https://young-anchorage-15160.herokuapp.com/api/results',
				// `http://localhost:3000/api/results`,
				studentResult
			)
			let studentData = {
				fullName: this.currentStudentData.fullName,
				group_id: this.currentStudentData.group_id,
				student_id: this.currentStudentData.student_id,
			}
			let id = this.currentStudentData._id
			window.scrollTo(0, window.innerHeight)
			await this.$axios.delete(
				`https://young-anchorage-15160.herokuapp.com/api/passingTest/deleteUser/${id}`
				// `http://localhost:3000/api/passingTest/deleteUser/${id}`
			)
		},
		calculateMark(correct, all, half, mark, percentOfCorrect) {
			if (correct < half) {
				mark = 0
			}
			if (correct == half) {
				percentOfCorrect = (correct / all) * 100
				console.log(correct + ' : precent of correct ' + percentOfCorrect)
				console.log('Оценка 25')
				// mark = 25;
			} else if (correct > half) {
				percentOfCorrect = (correct / all) * 100
				console.log(correct + ' : precent of correct ' + percentOfCorrect)

				if (55 < percentOfCorrect && percentOfCorrect <= 60) {
					console.log('оценка 26')
					mark += 1
				}
				if (60 < percentOfCorrect && percentOfCorrect <= 65) {
					console.log('оценка 27')
					mark += 2
				}
				if (65 < percentOfCorrect && percentOfCorrect <= 70) {
					console.log('оценка 28')
					mark += 3
				}
				if (70 < percentOfCorrect && percentOfCorrect <= 75) {
					console.log('оценка 29')
					mark += 4
				}
				if (75 < percentOfCorrect && percentOfCorrect <= 80) {
					console.log('оценка 30')
					mark += 5
				}
				if (80 < percentOfCorrect && percentOfCorrect <= 85) {
					console.log('оценка 31')
					mark += 6
				}
				if (85 < percentOfCorrect && percentOfCorrect <= 90) {
					console.log('оценка 32')
					mark += 7
				}
				if (90 < percentOfCorrect && percentOfCorrect <= 95) {
					console.log('оценка 33')
					mark += 8
				}
				if (95 < percentOfCorrect && percentOfCorrect <= 100) {
					console.log('оценка 34')
					mark += 9
				}
			}
			this.finalMark = mark
		},
		calc(correct) {
			let all = this.questions.length
			console.log(all)
			let half = this.questions.length / 2
			half = Math.floor(half)
			console.log(half + ' = half')
			console.log('correct = ' + correct)
			let mark = 0
			var percentOfCorrect
			switch (this.currentStudentData.test_level) {
				case 1:
					mark = 25
					this.calculateMark(correct, all, half, mark, percentOfCorrect)
					break
				case 2:
					mark = 35
					this.calculateMark(correct, all, half, mark, percentOfCorrect)
					break
				case 3:
					mark = 45
					this.calculateMark(correct, all, half, mark, percentOfCorrect)
					break
			}
		},
		countCorrectAnswers() {
			let countOfCorrect = 0
			this.copyQuestions.forEach((item) => {
				console.log(item)
				item.isAnswerCorrect ? countOfCorrect++ : ''
			})
			// console.log(countOfCorrect);
			return countOfCorrect
		},
		saveUsersHandwriteAnswer(answerText, question_id, isAnswerCorrect) {
			console.log('emit event after select Handwrite')
			let updatedQuestions = this.copyQuestions.map((item) => {
				console.log(item)
				if (item.question.question_id === question_id) {
					item.isAnswerCorrect = isAnswerCorrect
					item.userHandwriteAnswer = answerText
				}
				return item
			})
			console.log(updatedQuestions)
			this.copyQuestions = updatedQuestions
		},
		setNextQuestion() {
			this.activeQuestion++

			this.currentQuestion = this.copyQuestions[this.activeQuestion]
			for (var i = 0; i < this.breadcrumbs.length; i++) {
				i == this.activeQuestion
					? this.breadcrumbs[i].classList.add('breadcrumb--active')
					: this.breadcrumbs[i].classList.remove('breadcrumb--active')
			}
			window.scrollTo(0, window.innerHeight)
		},
		setAnswerWithUsersSelect_one(answer, question_id, isAnswerCorrect) {
			console.log('emit event after select OneAsnwer')
			let updatedQuestions = this.questions.map((item) => {
				// console.log(item);
				if (item.question.question_id === question_id) {
					item.isAnswerCorrect = isAnswerCorrect
					item.answers.map((item) => {
						if (item.answer_id == answer.answer_id) {
							item.selectedByStudent = true
						} else {
							item.selectedByStudent = false
						}
						return item
					})
				}
				return item
			})
			console.log(updatedQuestions)
			this.copyQuestions = updatedQuestions
		},
		setAnswerWithUsersSelect_multy(answer, question_id, isAnswerCorrect) {
			let updatedQuestions = this.questions.map((item) => {
				if (item.question.question_id === question_id) {
					item.isAnswerCorrect = isAnswerCorrect
					item.answers.map((prevAnswer) => {
						prevAnswer.answer_id == answer.answer_id ? answer : prevAnswer
					})
				}
				return item
			})
			this.copyQuestions = updatedQuestions
		},

		createQuestionsArrayWithUsersAnswers(questions) {
			let newQuestionsArray = this.questions.forEach((item) => {
				// console.log(item);
				if (item.type !== 'handwritingAnswer') {
					item.answers.forEach((answer) => {
						answer.selectedByStudent = false
						return answer
					})
				} else {
					item.userHandwriteAnswer = ''
				}
				return item
			})
			console.log(newQuestionsArray)
		},
		changeCurrentQuestion(e, question, id) {
			for (var i = 0; i < this.breadcrumbs.length; i++) {
				i == id
					? this.breadcrumbs[i].classList.add('breadcrumb--active')
					: this.breadcrumbs[i].classList.remove('breadcrumb--active')
			}
			this.currentQuestion = question
			this.activeQuestion = id
		},
		setCurrentQuestion() {
			console.log(this.copyQuestions[this.activeQuestion])
			this.currentQuestion = this.copyQuestions[this.activeQuestion]
		},
		timeStart(progressBar, time) {
			console.log(time)
			let start = 0
			let lastMinute = ((time - 1) * 60000) / 100
			time = Math.round((time * 60000) / 100)
			console.log(time)
			let closeTest = this.completeTest
			// console.log(closeTest);
			let interval = setInterval(function() {
				if (start > 100) {
					clearInterval(interval)
					// alert("Время вышло");
					closeTest()
					// completeTest();
				} else {
					progressBar.value = start
				}
				start++
			}, time)
		},
	},
	computed: {
		...mapState('helped', {
			questions: (state) => state.questionsForCurrentPassingTest,
		}),
		...mapState('helped', {
			currentStudentData: (state) => state.currentTestStudentData,
		}),
		// ...mapState("results", {
		//   results: (state) => state.results,
		// }),
	},
	mounted() {
		// this.id = this.currentStudentData._id;
		// console.log(this.id);
		console.log(this.$refs.breadcrumb)
		console.log('fagfhgr')
		this.breadcrumbs = this.$refs.breadcrumb
		// this.currentStudentData.testTime
		this.timeStart(this.$refs.progressBar, this.currentStudentData.testTime)
		// console.log(this.$refs.progressBar);
		this.breadcrumbs[0].classList.add('breadcrumb--active')
		for (var i = 1; i < this.breadcrumbs.length; i++) {
			this.breadcrumbs[i].classList.remove('breadcrumb--active')
		}
	},
	created() {
		if (!this.questions.length) {
			console.log(this.currentStudentData)
			console.log('hei heo')
			this.$router.push('./')
		}
		console.log('adgsfdbg')
		console.log(this.questions)
		this.copyQuestions = { ...this.questions }
		this.setCurrentQuestion()
		this.createQuestionsArrayWithUsersAnswers(this.questions)
	},
	// beforeUpdate() {
	//   alert("afsdsgrwgfk");
	// }
	// updated() {

	// },
	// async bef() {
	//   alert(this.id);

	// }
}
</script>

<style lang="postcss" scoped>
@import url('../styles/mixins.pcss');

.passing_test__breadcrumbs-list {
	display: flex;
	width: 75%;
	/* margin-bottom: 20px; */
}
.breadcrumb {
	width: 1.25rem;
	line-height: 1.25rem;
	background: #fff;
	border: 1px solid #414c63;
	border-radius: 2px;
	text-align: center;
	margin-right: 0.3125rem;
	color: #414c63;
}
.passing_test__question-wrap {
	background: white;
	border: 1px solid #efefef;
	-webkit-box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.17);
	box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.17);
	border-radius: 6px;
	padding: 25px;
}
.question {
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
}
.question__img-wrap {
	width: 80%;
	margin: 0 auto;
	height: 300px;
	border: 1px dashed;
}
.question__img {
	width: 100%;
	height: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
.question__text {
	font-weight: 600;
	font-size: 32px;
	line-height: 38px;
	color: #183582;
	margin-bottom: 1.875rem;
}
.passing_test_answers_label {
	margin-bottom: 1.875rem;
	font-weight: 600;
	font-size: 24px;
	line-height: 38px;
	color: #183582;
}
.passing_test__answers {
	margin-bottom: 30px;
}
.passing_test__answers_next-wrap {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}
.breadcrumb {
	&:hover {
		cursor: pointer;
		color: #db9600;
		border: 1px solid #db9600;
	}
}
.breadcrumb--active {
	color: #db9600;
	border: 1px solid #db9600;
}
.passing_test__breadcrumbs-wrap {
	display: flex;
	margin-bottom: 20px;
}

progress {
	/* Отключаем стиль (как правило, не требуется, но на всякий случай)  */
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	/* Убираем границы по умолчанию в Firefox и Opera */
	border: none;
	/* Чтобы фоновое изображение в Safari работало, как надо */
	background-size: auto;
}
.passing_test__progress_bar {
	align-self: center;
	width: 25%;
	display: block;

	border: 1px solid black;
	/* border-radius: 10px; */
	color: red;
	/* background: #db9600;   */
}
progress::-webkit-progress-value {
	background: #db9600;
	/* border-radius: 10px; */
}
progress::-webkit-progress-bar {
	/* background-color: #db9600; */
	background: #fff;
	/* border-radius: 10px; */
}
</style>
