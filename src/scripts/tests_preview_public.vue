<template lang="pug">
.wrap 
  .current_test_back(@click="$emit('closeTest')")
    myIcon.arrow_icon(iconName="arrow")
   
   
  .current_test_info
    //- pre {{selectedStudent}}
    //- pre {{studentsInCurrentGroup}}
    //- pre {{questions}}
    //- pre {{filteredQuestionsByLevel}}
    .current_test_info__desc-wrap
      .current_test_info__desc
        .desc 
          div.desc__txt Выберите один из трех предложенных уровней теста. 
          div.desc__txt 1 уровень - оценка 25-34. 
          div.desc__txt 2 уровень -  оценка 35-44. 
          div.desc__txt 3 уровень - оценка 45-54.
          div Для успешного заврешения теста необходимо ответить на половину вопросов. Желаем удачи!
    .current_test_actions-wrap
      .current_test_actions-level
        .current_test_label-wrap
          label.current_test_label Уровень теста
        ul.current_test_level_list
          li.current_test_level_item.level(
            v-for="level in +currentTest.level",
            ref="levelList",
            @click="selectLevel($event, level)"
          )
            button.level__btn {{ level }}
            ul.stars
              li.star(
                v-for="star in level" 
                :class="[{three_star:level===3}, {'mr-8':level === 2}, {'mr-8':level === 3}]"
              )
                myIcon(iconName="star2")

          
      .current_test_actions-fullname
        .current_test_label-wrap-fio
          label.current_test_label ФИО
       
      
        select.current_test_select(@change="selectStudent($event)")
          option Выберите ФИО
          option(
            v-for="student in studentsInCurrentGroup",
            :id="student.student_id",
            :value="student.fullName"
          ) {{ student.fullName }}
        .current_test_start-wrap
          button.current_test_start.btn(type="button", @click="startTest") Начать тестирование

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
import { mapActions, mapState } from 'vuex'
import myIcon from './myIcon.vue'
export default {
	props: {
		currentTest: Object,
		questions: Array,
		studentsInCurrentGroup: Array,
	},
	components: {
		myIcon,
	},
	data() {
		return {
			selectedLevel: '',
			selectedStudent: '',
			student_id: '',
			filteredQuestionsByLevel: '',
			description:
				'Выберите один из трех предложенных уровней теста. 1 уровень соответствует оценке 25-34. 2 уровень оценке 35-44. 3 уровень оценке 45-54.Для успешного заврешения теста необходимо ответить на половину вопросов.',
		}
	},
	methods: {
		...mapActions('helped', [
			'setQuestionsForCurrentPassingTest',
			'setCurrentTestStudentData',
		]),
		...mapActions('tooltips', ['showTooltip', 'hideTooltip']),

		filterQuestionsByLevel(level) {
			let deepCopyQuestions = this.$_.cloneDeep(this.questions)
			console.log(deepCopyQuestions)
			let filteredQuestions = deepCopyQuestions.filter((item) =>
				item.level_id === level ? item : ''
			)
			return filteredQuestions
		},
		async startTest() {
			if (this.selectedStudent === '' || this.selectedLevel === '') {
				// alert("Выберите уровень теста и ФИО");
				this.showTooltip({
					type: 'error',
					text: 'Выберите уровень теста и ФИО',
				})
				return
			}
			try {
				//  "https://young-anchorage-15160.herokuapp.com/api/passingTest/addUser"
				const response = await this.$axios.post(
					//- 'http://localhost:3000/api/passingTest/addUser',
					'https://young-anchorage-15160.herokuapp.com/api/passingTest/addUser',
					{
						fullName: this.selectedStudent,
						group_id: this.currentTest.group_id,
						student_id: this.student_id,
					}
				)
				let _id = response.data.user._id
				let studentData = {
					fullName: this.selectedStudent,
					test_level: this.selectedLevel,
					group: this.currentTest.group,
					test_id: this.currentTest.id,
					test_name: this.currentTest.name,
					testTime: this.currentTest.time,
					group_id: this.currentTest.group_id,
					student_id: this.student_id,
					_id,
				}
				this.filteredQuestionsByLevel = this.filterQuestionsByLevel(
					this.selectedLevel
				)
				// console.log(this.filteredQuestionsByLevel);
				// console.log(studentData);
				this.setCurrentTestStudentData(studentData) // добавить на галвную прохожеления теста
				let uniqueQuestions = this.shuffle(this.filteredQuestionsByLevel)
				console.log(uniqueQuestions)
				this.setQuestionsForCurrentPassingTest(uniqueQuestions)
				this.$router.push('./passingTest')
			} catch (error) {
				this.showTooltip({
					type: 'error',
					text: 'Выбранный пользователь уже начал прохождение тестирования',
				})
			}
		},
		selectStudent(e) {
			this.studentsInCurrentGroup.forEach((student) => {
				student.fullName === e.target.value
					? (this.student_id = student.student_id)
					: ''
			})
			// console.log(this.student_id);
			this.selectedStudent = e.target.value
		},
		selectLevel(e, level) {
			this.selectedLevel = level
			this.$refs.levelList.forEach((item) => {
				item.firstChild.classList.remove('level__value--active')
			})
			e.target.classList.add('level__value--active')
		},
		shuffle(arr) {
			var j, temp
			for (var i = arr.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1))
				temp = arr[j]
				arr[j] = arr[i]
				arr[i] = temp
			}
			return arr
		},
	},
	computed: {
		...mapState('groups', {
			groups: (state) => state.groups,
		}),
		...mapState('tests', {
			tests: (state) => state.tests,
		}),
		...mapState('helped', {
			isCurrentLevelOpen: (state) => state.isCurrentLevelOpen,
		}),
		...mapState('helped', {
			isTestOpen: (state) => state.isTestOpen,
		}),
		...mapState('helped', {
			showQuestions: (state) => state.showQuestions,
		}),
		// ...mapState("questions", {
		//   questions: state => state.questions
		// })
	},
	mounted() {},
	watch: {
		questions: (item) => {
			console.log(item)
		},
	},
}
</script>

<style lang="postcss" scoped>
@import url('../styles/mixins.pcss');

.current_test_info {
	display: flex;
	width: 100%;
	/* border: 1px solid black; */
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	padding: 30px;
	@include tablets {
		flex-direction: column;
	}
}
.current_test_info__desc-wrap {
	width: 55%;
	margin-right: 5%;
	@include tablets {
		width: 100%;
		margin-right: 0;
		margin-bottom: 20px;
	}
}
.current_test_actions-wrap {
	width: 45%;
	@include tablets {
		width: 100%;
		margin-right: 0;
		/* margin-bottom: 20px; */
	}
}
.current_test_level_list {
	display: flex;
}
/* .level {
  width: 100px;
  height: 50px;
} */
.current_test_label {
	color: #363636;
	/* color: black; */
	font-size: 1rem;
	line-height: 1.875rem;
	opacity: 0.8;
}
.current_test_label-wrap {
	margin-bottom: 16px;
}
.current_test_label-wrap-fio {
	margin-bottom: 8px;
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
	@include tablets {
		width: 70px;
		line-height: 70px;
	}
}
.current_test_start-wrap {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}
.current_test_select {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	margin-bottom: 20px;
	width: 100%;
	@include tablets {
		/* box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0); */
		border: 1px solid grey;
		border-radius: 5px;
	}
}
.current_test_actions-level {
	margin-bottom: 10px;
}
.current_test_back {
	width: 20px;
	height: 20px;
	transform: rotate(-180deg);
	margin-bottom: 12px;

	&:hover {
		cursor: pointer;
	}
	/* background: svg-load("pencil.svg", fill= "#434573") center center no-repeat / */
}

.arrow_icon {
	transform: rotate(-180deg);
	&:hover {
		color: #0ed4ff;
	}
}

.level__btn {
	padding: 30px;
	background: transparent;
	border: 1px solid #0a9ebe;
	border-radius: 10px;
	font-size: 20px;
	font-weight: 600;
	transition: all 0.3s;
	width: 100%;
	&:hover {
		color: white;
		transition: all 0.3s;
		background: linear-gradient(90deg, #001f8b 2.1%, #0ed4ff);
		.star {
			color: red;
		}
	}
}

.current_test_level_list {
	display: flex;
	/* justify-content: space-between; */
}

.current_test_level_item {
	width: calc((100%-32px) / 3);
	margin-right: 16px;
	position: relative;
	&:nth-child(3) {
		margin-right: 0px;
	}
}

.stars {
	display: flex;
	justify-content: center;
	position: absolute;
	width: 100%;
	top: -15px;
	z-index: 20;
}
.star {
	width: 28px;
	height: 28px;
	color: #0a9ebe;
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

.mr-8 {
	margin-right: 8px;
}

.level__value--active {
	background: linear-gradient(90deg, #001f8b 2.1%, #0ed4ff);
	color: white;

	.star {
		color: white;
	}
}

.desc {
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	&__txt {
		margin-bottom: 24px;
	}
}
</style>
