<template lang="pug">
.container
  //- pre {{filteredQuestions.length}}
  .actionsCurrentTest-wraper 
    CURRENT_LEVEL_IN_TEST_GROUP(
      :currentLevel="this.currentLevelInTestGroup",
      v-if="isCurrentLevelOpen"
    )
    CURRENT_TEST_GROUP(
      v-if="isTestOpen",
      @showAllQuestionsInGroup="showAllQuestionsInGroup",
      @addNewQuestion="addQuestion",
      :currentTestGroup="this.currentTestGroup",
      :levelsCount="+this.currentTestGroup.level"
    )
    ALL_QUESTIONS_IN_GROUP(
      v-if="showQuestions",
      :questions="filteredQuestions"
    )
</template>
<script>
import { mapActions, mapState } from 'vuex'
import CURRENT_TEST_GROUP from '../currentTestGroup'
import CURRENT_LEVEL_IN_TEST_GROUP from '../currentLevelInTestGroup'
import ALL_QUESTIONS_IN_GROUP from '../allQuestionsForTest'
export default {
	components: {
		CURRENT_TEST_GROUP,
		CURRENT_LEVEL_IN_TEST_GROUP,
		ALL_QUESTIONS_IN_GROUP,
	},
	data() {
		return {
			showAllTests: true,
			currentLevelInTestGroup: {},
			// currentTestGroup: {},
			filteredQuestions: [],
			level_id: '',
			group_id: '',
			obj: {
				level: '3',
				name: 'Тут название теста',
				group: '',
			},
		}
	},
	methods: {
		...mapActions('tests', ['addNew']),
		...mapActions('helped', [
			'changeCurrentTestStatus',
			'changeCurrentLevelStatus',
			'changeShowQuestionsStatus',
			'setCurrentLevelInTestGroup',
			'setCurrentTestGroup',
		]),
		...mapActions('questions', ['fetchQuestions']),

		showAllQuestionsInGroup(levelId, groupId) {
			// if (this.questions.length) {
			console.log(levelId)
			console.log(groupId)
			this.level_id = levelId
			this.group_id = groupId
			// this.currecurrentLevelId = levelId;
			// this.currentGroupId = groupId;
			this.changeShowQuestionsStatus(true)
			this.changeCurrentTestStatus(false)
			let filtered = this.filterQuestion(this.questions, levelId, groupId)
			// console.log(filtered);

			// this.changeQuestionsId(filtered);
			this.filteredQuestions = filtered
			console.log(this.filteredQuestions)
			// }
		},
		filterQuestion(questions, levelId, groupId) {
			let filteredQuestions = questions.filter(function(question) {
				// console.log(question);
				if (question.level_id === levelId && question.test_id === groupId) {
					// console.log("correct == equal ");
					// console.log(question);
					return question
				} else {
					// console.log("incorrect == equal");
					// console.log(question);
				}
			})
			return filteredQuestions
		},
		addQuestion(obj) {
			console.log(obj)
			// this.setCurrentLevelInTestGroup(obj);
			this.currentLevelInTestGroup = {
				...obj,
			}
			console.log('my event !!')
			// this.isTestOpen = !this.isTestOpen;
			this.changeCurrentTestStatus(!this.isTestOpen)
			this.changeCurrentLevelStatus(!this.isCurrentLevelOpen)
			// this.isCurrentLevelOpen = !this.isCurrentLevelOpen;
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
			currentTestGroup: (state) => state.currentTestGroup,
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
		...mapState('questions', {
			questions: (state) => state.questions,
		}),
	},
	async created() {
		this.fetchQuestions(localStorage.getItem('creatorId'))
	},
	watch: {
		questions: function(questions) {
			// console.log(questions);
			this.filteredQuestions = this.filterQuestion(
				questions,
				this.level_id,
				this.group_id
			)
			// console.log(this.filteredQuestions);
		},
	},
}
</script>
