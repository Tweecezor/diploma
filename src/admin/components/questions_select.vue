<template lang="pug">
  div.select
    div.select__row
      .select_wrapper.select__group
        .select__label-wrap
          label.select__label Выберите группу
        .select-wrap
          select(@change="setGroup").select_select
            option(value="") Выберите группу
            option(v-if="groups" v-for="(group,position) in groups" ref="selectedGroup"  :value="group.groupName").select_option {{group.groupName}}
      .select_wrapper.select__level
        .select__label-wrap
          label.select__label Выберите уровень
        .select-wrap.select-wrap--level
          select(name="level" required v-model="level").select_select
            option(value="") Выберите уровень
            option(v-for="level in levels" :value="level").select_option {{level}}
    .select_wrapper.select__test
      .select__label-wrap
        label.select__label Выберите тест
      .select-wrap(v-if="filteredTests.length")
        select( @change="setTest" ).select_select
          option(value="") Выберите тест
          option( v-for="test in filteredTests" ref="selectedTest" :data-levels="test.level" :value="test.id").test__students-group   {{test.name}}
      .select-wrap(v-else)
        select.select_select
          option(value="").select_option Тесты еще не созданы
    
    div.actions
      button.btn.upload(@click="addQuestionTo(question)") Добавить
      slot
     
  
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
	props: {
		question: Object,
	},
	data() {
		return {
			level: '',
			filteredTests: [],
			selectedGroupName: '',
			test_id: '',
			filteredQuestions: '',
			levels: '',
		}
	},
	methods: {
		...mapActions('tooltips', ['showTooltip', 'hideTooltip']),
		fn() {
			console.log('asfew')
		},
		filterQ() {
			let filter = []
			let arr = this.questions
			console.log(arr.length)
			var uniq
			for (var i = 0; i < arr.length; i++) {
				uniq = true
				for (var j = i + 1; j < arr.length; j++) {
					if (
						arr[i].question.text === arr[j].question.text &&
						arr[i].type === arr[j].type
					) {
						uniq = false
					}
				}
				if (uniq) {
					filter.push(arr[i])
				}
			}
			// console.log(filter);
			this.filteredQuestions = filter
		},
		...mapActions('questions', ['addNew']),
		setTest(e) {
			// console.log(typeof e.target.value);
			// console.log(this.$refs.selectedTest[0].dataset.levels);
			// this.levels = +this.$refs.selectedTest[0].dataset.levels;
			this.test_id = e.target.value

			let level = this.filteredTests.filter((item) => item.id === +this.test_id)
			// console.log(level);
			this.levels = +level[0].level
			console.log(this.levels)
		},
		filterTestByGroup(groupName) {
			this.filteredTests = this.tests.filter((item) => {
				// console.log(item);
				// console.log(groupName);
				return item.group === groupName
			})
			// console.log(this.filteredTests);
		},
		setGroup(e) {
			// console.log(e.target.value);
			this.selectedGroupName = e.target.value
			this.filterTestByGroup(this.selectedGroupName)
		},
		addQuestionTo(questionOld) {
			// console.log(this.test_id);
			// console.log(questionOld);
			let filtered = this.filterQuestion(
				this.questions,
				+this.level,
				+this.test_id
			)
			let newQuestion = {
				...questionOld,
				question: {
					text: questionOld.question.text,
					img: questionOld.question.img,
					question_id: Date.now(),
					// question_id: filtered.length + 1
				},
				level_id: +this.level,
				test_id: +this.test_id,
			}
			if (+this.level && +this.test_id) {
				this.addNew(newQuestion)
				this.showTooltip({
					type: 'success',
					text: 'Вопрос успешно загружен',
				})
			} else {
				this.showTooltip({
					type: 'error',
					text: 'ВЫберите группу и уровень теста',
				})
			}
			console.log(newQuestion)
		},
		filterQuestion(questions, levelId, groupId) {
			let filteredQuestions = questions.filter(function(question) {
				console.log(question)
				if (question.level_id === levelId && question.test_id === groupId) {
					return question
				} else {
				}
			})
			return filteredQuestions
		},
	},
	computed: {
		...mapState('questions', {
			questions: (state) => state.questions,
		}),
		...mapState('tests', {
			tests: (state) => state.tests,
		}),
		...mapState('groups', {
			groups: (state) => state.groups,
		}),
		...mapGetters('questions', ['uniqueQuestions']),
	},
}
</script>
<style lang="postcss" scoped>
.select {
	display: flex;
	flex-direction: column;
}
.questions {
	display: flex;
	flex-wrap: wrap;
}
.questions__list {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
}
.questions__item {
	width: calc((100%-4%) / 3);
	margin-right: 2%;
	background: white;
	border: 1px solid black;
	margin-bottom: 10px;
	&:nth-child(3n) {
		margin-right: 0;
	}
	/* display: flex; */
}
.select__label {
	color: #414c63;
	font-size: 1rem;
	line-height: 1.875rem;
	opacity: 0.5;
}
.select-wrap {
	&--level {
		margin-bottom: 20px;
	}
}

input[type='text'] {
	border-bottom: 2px solid #000;
}

.actions {
	display: flex;
	justify-content: space-between;
}

select {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	margin-bottom: 0;
	width: 100%;
}
.select__row {
	display: flex;
	justify-content: space-between;
}
.select__group {
	/* width: 60%; */
	width: calc((100%-16px) / 2);
	margin-right: 16px;
}
.select__level {
	width: calc((100%-16px) / 2);
	margin-right: 0px;
}

.select__test {
	margin-bottom: 35px;
}

.upload {
	width: 100%;
	margin-right: 24px;
}
/* .select_wrapper {
  width: 30%;
} */
</style>
