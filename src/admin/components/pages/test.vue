<template lang="pug">
.container
  .wrapper-test
    .addedWrapper(v-if="showAllTests")
      //- pre {{ groups }}
      ul.created_test-list
        li.created_test-item.test.test--new(
          v-if="",
          :class="{ testAdding: showAddNew }"
        )
          #preview.test__preview(
            v-if="!showAddNew",
            @click="showAddNew = true"
          )
            .test__preview_logo 
              <svg version="1.1" class="test__preview_logo-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                <path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/>
              </svg>
            .test__preview_test Добавить тест
          .test__add_new(v-else)
            .test__header
              .test__name-wrap
                label.test__name-label.test__label Введите название теста
              .test__name-wrap
                input.test__name-input(
                  type="text",
                  v-model="obj.name",
                  placeholder="Название теста"
                )
            .test__levels
              .test__levels-wrap
                label.test__levels-label.test__label Количество уровней
              .test__levels-wrap 
                select.test__levels-select(
                  name="level",
                  required,
                  v-model="obj.level"
                )
                  option.test__levels-option(value="1") 1
                  option.test__levels-option(value="2") 2
                  option.test__levels-option(value="3") 3
            .test__group.test__group_create
              .test__group-wrap
                label.test__group-label.test__label Выберите группу
              .test__group-wrap
                select.test__group-select(
                  name="groups",
                  required,
                  v-model="obj.group"
                )
                  option.test__group-option(
                    v-for="group in groups",
                    :groupID="group.group_id",
                    :value="group.groupName"
                  ) {{ group.groupName }}
            .actions
              button.btn.actions__btn(@click="addNewTest") Создать
              button.btn.btn__cancel.actions__btn( @click="cancelCreateTest") Отменить

        li.created_test-item.test.test__item(v-if="tests", v-for="item in tests")
          //- pre {{item}}
          randomIcon.test__icon_1
          randomIcon(:min="4" :max="5").test__icon_2
          .test__header
            .test__name-wrap
              //- label.test__label Название теста
            .test__name-wrap
              span.test__name {{item.name}}
              //- input.test__name-input.test__input(
              //-   type="text",
              //-   v-model="item.name",
              //-   disabled
              //- )
          //- .created-test__name {{item.name}}
          .test__levels
            .test__levels-wrap
              label.test__levels-label.test__label Количество уровней
            .test__levels-wrap 
              span {{item.level}}
              //- input.test__levels-input.test__input(
              //-   type="text",
              //-   v-model="item.level",
              //-   disabled
              //- )
          .test__group
            .test__group-wrap
              label.test__group-label.test__label Для группы
            .test__group-wrap
              span {{item.group}}
              //- input.test__group-input.test__input(
              //-   type="text",
              //-   v-model="item.group",
              //-   disabled
              //- )
            //- .created-test__group {{item.group}}
          button.btn(@click="openTest(item)") Открыть
</template>

<script>
console.log('hahaInScript')
var addBlock
console.log(addBlock)

import { mapActions, mapState } from 'vuex'
import CURRENT_TEST_GROUP from '../currentTestGroup'
import CURRENT_LEVEL_IN_TEST_GROUP from '../currentLevelInTestGroup'
import ALL_QUESTIONS_IN_GROUP from '../allQuestionsForTest'
//
import ACTIONS_WITH_CURRENT_TEST from './actionsWithCurrentTest'

import randomIcon from '../randomIcon.vue'

export default {
	components: {
		CURRENT_TEST_GROUP,
		CURRENT_LEVEL_IN_TEST_GROUP,
		ALL_QUESTIONS_IN_GROUP,
		//
		ACTIONS_WITH_CURRENT_TEST,
		randomIcon,
	},
	data() {
		return {
			showAllTests: true,
			currentLevelInTestGroup: {},
			currentTestGroup: {},
			filteredQuestions: [],
			showAddNew: false,
			obj: {
				level: '3',
				name: '',
				group: '',
			},
		}
	},
	methods: {
		...mapActions('tooltips', ['showTooltip', 'hideTooltip']),
		cancelCreateTest() {
			this.obj = {
				level: '3',
				name: '',
				group: '',
			}
			this.showAddNew = false
		},
		mouseover(e) {
			console.log(e.target)
		},
		openN() {
			console.log(addBlock)
		},
		showAllQuestionsInGroup(levelId, groupId) {
			if (this.questions.length) {
				console.log(levelId)
				console.log(groupId)
				// this.currecurrentLevelId = levelId;
				// this.currentGroupId = groupId;
				this.changeShowQuestionsStatus(true)
				this.changeCurrentTestStatus(false)
				let filtered = this.filterQuestion(this.questions, levelId, groupId)
				// console.log(filtered);

				// this.changeQuestionsId(filtered);
				this.filteredQuestions = filtered
				console.log(this.filteredQuestions)
			}
		},
		filterQuestion(questions, levelId, groupId) {
			let filteredQuestions = questions.filter(function(question) {
				console.log(question)
				if (question.level_id === levelId && question.test_id === groupId) {
					console.log('correct == equal ')
					console.log(question)
					return question
				} else {
					console.log('incorrect == equal')
					console.log(question)
				}
			})
			return filteredQuestions
		},
		OpenNew() {
			this.$router.push('/drag')
		},
		...mapActions('tests', ['addNew', 'fetchTests']),
		...mapActions('results', ['fetchResults']),
		...mapActions('groups', ['fetchGroups']),
		...mapActions('helped', [
			'changeCurrentTestStatus',
			'changeCurrentLevelStatus',
			'changeShowQuestionsStatus',
			'setCurrentLevelInTestGroup',
			'setCurrentTestGroup',
		]),
		setCurrentGroupId(groupName) {
			let groupId
			this.groups.forEach((group) => {
				group.groupName === groupName ? (groupId = group.group_id) : ''
			})
			return groupId
		},
		addNewTest() {
			let group_id = this.setCurrentGroupId(this.obj.group)
			const newTetsGroup = {
				// id: this.tests.length + 1,
				id: Date.now(),
				access: false,
				time: 0,
				group_id,
				creatorId: this.user._id,
				...this.obj,
			}
			this.addNew(newTetsGroup)
			this.showAddNew = false
			this.showTooltip({
				type: 'success',
				text: 'Тест успешно создан',
			})
		},
		CLICK() {
			console.log(this.tests)
		},
		openTest(item) {
			this.currentTestGroup = item
			this.setCurrentTestGroup(item)
			// console.log(this.currentTestGroup);
			this.$router.push('./currentTest')
			this.changeShowQuestionsStatus(false)
			this.changeCurrentTestStatus(true)
			this.showAllTests = false
		},
		addQuestion(obj) {
			console.log(obj)
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
	mounted() {
		this.changeCurrentLevelStatus(false)
		const addNewBlock = document.querySelector('#preview')
		addBlock = addNewBlock
		// this.fetchTests();
	},
	created() {
		// this.fetchTests();
		this.fetchResults()
		this.fetchGroups(this.user._id)
		this.fetchTests(this.user._id)
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
		...mapState('questions', {
			questions: (state) => state.questions,
		}),
		...mapState('user', {
			user: (state) => state.user,
		}),
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../../styles/mixins.pcss');

.wrapper-test {
	display: flex;
	justify-content: space-between;
}
.created_test-list {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}

.created_test-item {
	width: calc((100%-2%) / 3);
	margin-right: 1%;
	padding: 30px;
	background-color: white;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2%;
	&:nth-child(3n) {
		margin-right: 0px;
	}
	@include tablets {
		width: calc((100%-2%) / 2);
		&:nth-child(3n) {
			margin-right: 1%;
		}
	}
	@include phones {
		width: 100%;
		margin-right: 0;
	}
}
input {
	margin-bottom: 10px;
}
select {
	margin-bottom: 10px;
}
.test__send {
	padding: 20px;
	background: red;
	color: white;
	border-radius: 10px;
	&:hover {
		background: green;
	}
	.click {
		color: red;
	}
}
.created-test {
	&__name,
	&__level,
	&__group {
		border: 1px solid black;
		border-radius: 10px;
		padding-left: 10px;
	}
}
.addedWrapper {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
}

.test__label {
	color: #414c63;
	font-size: 1rem;
	line-height: 1.875rem;
	opacity: 0.5;
}
.test__name-input,
.test__input {
	width: 100%;
	background-color: transparent;
	font-weight: 700;
	border: none;
	border-bottom: 2px solid #414c63;
	padding: 0 0.3125rem 0.625rem;
	margin-bottom: 1.875rem;
}
.test--new {
	min-height: 253px;
	background: linear-gradient(
		190deg,
		#0078cf,
		#0177cc,
		#0673c3,
		#0d6cb4,
		#18629e,
		#255583,
		#324969
	);
	&:hover {
		background: linear-gradient(
			-190deg,
			#0078cf,
			#0177cc,
			#0673c3,
			#0d6cb4,
			#18629e,
			#255583,
			#324969
		);
		cursor: pointer;
	}
	/* background: linear-gradient(190deg, #0078cf, #0177cc,#0673c3,#0d6cb4,#18629e,#255583,#324969); */
}
/* .created-test {
  padding: 20px;
  background: white;
  color: red;
  margin-right: 10px;
} */
.sidebar {
	width: 32%;
	height: 300px;
	/* background: white; */
}
.sidebar-list {
	width: 100%;
	overflow: auto;
	display: flex;
	flex-direction: column;
	height: 100%;
}
.sidebar-item {
	width: 100%;
	background: #ccc;
	padding: 10px;
	margin-bottom: 10px;
}
.test {
	border: none;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
}
.test--add-new {
	/* position: absolute; */
	background: linear-gradient(
		190deg,
		#0078cf,
		#0177cc,
		#0673c3,
		#0d6cb4,
		#18629e,
		#255583,
		#324969
	);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
}
.test__add_new {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
.test__preview {
	height: 100%;
	min-height: 253px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.test__preview_logo {
	/* position: relative; */
	/* width: 9.375rem;
  height: 9.375rem;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-bottom: 20px; */
	display: flex;
	width: 9.375rem;
	height: 9.375rem;
	border: 2px solid #fff;
	border-radius: 50%;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	margin-bottom: 1.25rem;
	position: relative;
	/* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "#fff") center center no-repeat /
      contain;
    width: 2.125rem;
    height: 2.125rem;
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
  } */
	@include phones {
		/* width: 4.375rem; */
		/* height: 4.375rem; */
		margin-bottom: 5px;
	}
}
.test__preview_logo-icon {
	width: 2.125rem;
	height: 2.125rem;
	position: absolute;
	transform: translate(-50%, -50%) rotate(45deg);
	fill: white;
	top: 50%;
	left: 50%;
}
.testAdding {
	background: white;

	&:hover {
		background: white;
		cursor: default;
	}
}
.test__preview_test {
	font-size: 1.125rem;
	font-weight: 700;
	line-height: 1.875rem;
	color: #fff;
	width: 5.875rem;
	text-align: center;
	@include tablets {
		width: 100%;
		font-size: 23px;
	}
}

.test {
	&__name {
		font-weight: 600;
		font-size: 32px;
		line-height: 38px;
		/* identical to box height */
		color: #183582;
		word-wrap: break-word;
	}
}

.test__levels-wrap {
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 28px;

	/* Black */
	color: #000000;
}

.test__levels {
	margin-bottom: 12px;
}

.test__group {
	margin-bottom: 56px;
	&_create {
		margin-bottom: 24px;
	}
}

.test__group-wrap {
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 28px;
	/* Black */
	color: #000000;
}
.test__item {
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	padding: 30px;
	position: relative;
	transition: all 0.3s;
	overflow: hidden;
	&:hover {
		.test__icon_2 {
			transform: scale(1.1);
		}
		.test__icon_1 {
			transform: scale(1.1);
		}
	}
}
.test__icon_1 {
	width: 180px;
	height: 228px;
	position: absolute;
	top: 15%;
	left: 0%;
	opacity: 0.1;
	transition: all 0.3s;
}

.test__icon_2 {
	width: 100px;
	height: 150px;
	position: absolute;
	top: 30%;
	right: 0%;
	opacity: 0.1;
	transition: all 0.3s;
}
.test__header {
	margin-bottom: 12px;
}

.test__name-input {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	margin-bottom: 0;
	/* margin-bottom: 12px; */
}
select {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	margin-bottom: 0;
	width: 100%;
	font-size: 16px;
	font-weight: 600;
}
.actions {
	display: flex;
	justify-content: space-between;
	&__btn {
		width: calc((100%-16px) / 2);
	}
}
.btn__cancel {
	background: transparent;
	color: #0a9ebe;
	&:hover {
		background: lightgrey;
	}
}
</style>
