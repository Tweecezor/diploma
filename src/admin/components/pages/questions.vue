<template lang="pug">
.container
  //- pre {{uniqueQuestions}}
  .questions_current__list-wrap 
    .questions_current__list(v-if="showQuestion")
      .questions__belongs
        .questions__belongs_wrap
          .questions__belongs__item
            label Группа:
            .aa {{ currentGroupName }}
          .questions__belongs__item 
            label Название:
            .aa {{ currentTestName }}
          .questions__belongs__item 
            label Уровень:
            .aa {{ item.level_id }}
        .questions__belongs_close-wrap
          .questions__belongs_close(@click="closeCurrentQuestion") X
      //- CURRENT_QUESTION(:item="item")
      .questions_current__item.question_current
        QUESTION_ITEM(
          :qText="qText",
          :_id="item._id",
          :item="item.question",
          :test_id="item.test_id",
          :level_id="item.level_id",
          v-on:closeQuestion="closeCurrentQuestion"
        )
        div.answer__content(v-if="item.type !== 'handwritingAnswer'")
          .answers__title Просмотр ответов
          .answers__data
            .answers__data_img
              .current_level__files(
                :style="{ 'background-image': `url(${currentAnswerImgUrl})` }"
              )
                .current_level__file-upload
                  label.current_level__load-text(for="photoFile")
                    p Изображение для вопроса
                    #drop1.dropzone(, v-if="currentAnswerImgUrl == ''")
                      input#photoFile.current_level__file-input(
                        type="file",
                        @change="loadAnwerPhoto",
                        accept="image/*"
                      )
                      .current_level__file-btn.btn Загрузить
                    .dropzone(v-else)
                      input#photoFile.current_level__file-input(
                        type="file",
                        @change="changeAnswerPhoto",
                        accept="image/*"
                      )
                      .current_level__file-btn.btn Изменить
            .answers__data_content
              ul.answers__list
                li.answers__item.answer(v-for="answer in item.answers")
                  ANSWER_ITEM(
                    :typeOfQuestion="item.type",
                    :answerLength="item.answers.length",
                    :question_id="item.question.question_id",
                    :answer="answer",
                    :test_id="item.test_id",
                    :level_id="item.level_id",
                    :answerImgUrl="currentAnswerImgUrl",
                    :_id="item._id",
                    v-on:setAnswerImgURL="setCurrentAnswerIMG",
                    v-on:emitResetAnswerImgUrl="resetAnswerImgUrl"
                  )
              ADD_NEW_ANSWER(
                :answerLength="item.answers.length",
                :question_id="item.question.question_id",
                :test_id="item.test_id",
                :level_id="item.level_id",
                :currentAnswerImgUrl="currentAnswerImgUrl",
                :answerImgUrl="currentAnswerImgUrl",
                :_id="item._id",
                v-on:emitResetAnswerImgUrl="resetAnswerImgUrl"
              )
        div(v-else)
          KEYWORDS_ANSWER(
            :keywords="item.keywordsArray",
            :typeOfQuestion="item.type",
            :_id="item._id"
          )
    .wrapper.questions
      .filterQuestionsBreadcrumb
        ul.filterQuestionsBreadcrumb__list
          li.filterQuestionsBreadcrumb__item
            .breadcrumb(ref="filter", @click="setFilter($event, 'Уровень')") {{ 'Уровень' }}
            ul.filterList
              li.filterItem(v-for="item in filtersLevel") 
                .item(@click="filterQuestionsByChoosenFilter(item)") {{ item }}
          //- li.filterQuestionsBreadcrumb__item()
          //-   .breadcrumb( ref="filter" @click="setFilter($event,'Группа')") {{'Группа'}}
          //-   ul.filterList()
          //-     li.filterItem(v-for="item in filtersGroups") 
          //-       .item(@click="filterQuestionsByChoosenFilter(item)") {{item}}
          li.filterQuestionsBreadcrumb__item
            .breadcrumb(ref="filter", @click="setFilter($event, 'Тип вопроса')") {{ 'Тип вопроса' }}
            ul.filterList
              li.filterItem(v-for="item in filtersType") 
                .item(@click="filterQuestionsByChoosenFilter(item)") {{ item }}
          li.filterQuestionsBreadcrumb__item
            .breadcrumb(@click="setFilter($event, 'Сброс')") {{ 'Сброс' }}
      ul.questions__list(v-if="!isFiltered")
        li.questions__item.question(v-for="question in uniqueQuestions")
          //- pre {{question}}
          //- .question__add_topic-wrap
            h1.question__add_topic Содержание вопроса
          //- .question__label-wrap
            label.question__label Текст вопроса
          //- .question__text-wrap
            input.question__text(type="text", v-model="question.question.text")
          .question__text {{question.question.text}}
          
          .question__info
            .question__info_type
              label.question__info_label Тип вопроса
              .question__info_text {{rusQuestionType(question.type)}}
            .question__info_group
              label.question__info_label Уровень вопроса
              .question__info_text {{question.level_id}}
            
          
          //- .question__add
          //-   .question__add_topic-wrap
          //-     h1.question__add_topic Загрузка вопроса

          QUESTION_SELECT(:question="question")
            template
              button.question__show.btn(@click="showCurrentQuestion(question)") Посмотреть вопрос  
          //-
      ul.questions__list(v-else="isFiltered")
        li.questions__item.question(
          v-for="question in filteredUniqueQuestions"
        )
          //- .question__add_topic-wrap
          //-   h1.question__add_topic Содержание вопроса
          //- .question__label-wrap
          //-   label.question__label Текст вопроса
          //- .question__text-wrap
          //-   input.question__text(type="text", v-model="question.question.text")
          //- button.question__show.btn(@click="showCurrentQuestion(question)") Посмотреть вопрос
          .question__text {{question.question.text}}
          
          .question__info
            .question__info_type
              label.question__info_label Тип вопроса
              .question__info_text {{rusQuestionType(question.type)}}
            .question__info_group
              label.question__info_label Уровень вопроса
              .question__info_text {{question.level_id}}

          //- .question__add
          //-   .question__add_topic-wrap
          //-     h1.question__add_topic Загрузка вопроса

          QUESTION_SELECT(:question="question")
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import QUESTION_ITEM from '../question-item'
import QUESTION_SELECT from '../questions_select'
import ANSWER_ITEM from '../answer-item'
import ADD_NEW_ANSWER from '../answerAddNew'
import KEYWORDS_ANSWER from '../keywordsAnswer'
import CURRENT_QUESTION from '../currentQuestionOnLevel'
export default {
	components: {
		QUESTION_SELECT,
		QUESTION_ITEM,
		ANSWER_ITEM,
		ADD_NEW_ANSWER,
		KEYWORDS_ANSWER,
		CURRENT_QUESTION,
	},
	props: {},
	data() {
		return {
			level: '',
			filteredTests: [],
			selectedGroupName: '',
			test_id: '',
			filteredQuestions: '',
			currentQuestion: '',
			showQuestion: false,
			currentGroupName: '',
			currentTestName: '',
			prevYcoords: '',
			activeQuestion: 0,
			qText: '',
			item: '',
			filtersLevel: [],
			filtersGroups: [],
			filtersType: [],
			// item: this.questions[0],
			// currentQuestionItem: this.questions[1],
			showQImg: false,
			showAImg: false,
			isTestOpen: false,
			currentQuestionID: 1,
			currentAnswerImgUrl: '',
			breadcrumbs: [],
			questionsUnique: '',
			filteredUniqueQuestions: '',
			isFiltered: false,
			activeBreadcrumb: '',
			// prevActiveBreadcrumb: this.$refs.filter,
		}
	},
	methods: {
		...mapActions('questions', ['fetchQuestions']),
		rusQuestionType(type) {
			const types = {
				oneAnswer: 'Одиночный ответ',
			}
			return types[type]
		},
		filterQuestionsByChoosenFilter(filter, groups) {
			// console.log(filter);
			switch (filter) {
				case 'Однозначный':
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						return item.type === 'oneAnswer' ? item : ''
					})
					this.isFiltered = true
					break
				case 'Множественный':
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						return item.type === 'multipleAnswer' ? item : ''
					})
					this.isFiltered = true
					break
				case 'Рукописный':
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						return item.type === 'handwritingAnswer' ? item : ''
					})
					this.isFiltered = true
					break
				case 1:
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						return item.level_id === 1 ? item : ''
					})
					this.isFiltered = true
					break
				case 2:
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						return item.level_id === 2 ? item : ''
					})
					this.isFiltered = true
					break
				case 3:
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						return item.level_id === 3 ? item : ''
					})
					this.isFiltered = true
					break
				default:
					this.filteredUniqueQuestions = this.uniqueQuestions.filter((item) => {
						console.log(item)
						return item.groupName === filter ? item : ''
					})
					this.isFiltered = true

					break
			}
			this.filtersGroups = []
			this.filtersType = []
			this.filtersLevel = []
			this.activeBreadcrumb.classList.remove('breadcrumb__active')
		},
		setFilter(e, filter) {
			// console.log(this.prevActiveBreadcrumb);
			if (this.prevActiveBreadcrumb) {
				this.prevActiveBreadcrumb.classList.remove('breadcrumb__active')
			}
			switch (filter) {
				case 'Уровень':
					this.filtersLevel = [1, 2, 3]
					this.filtersGroups = []
					this.filtersType = []
					this.activeBreadcrumb = e.target
					this.activeBreadcrumb.classList.add('breadcrumb__active')
					break
				case 'Группа':
					// this.filters = [];
					this.filtersLevel = []
					this.filtersType = []
					this.filtersGroups = []
					this.groups.forEach((item) => {
						this.filtersGroups.push(item.groupName)
					})
					this.activeBreadcrumb = e.target
					this.activeBreadcrumb.classList.add('breadcrumb__active')
					// this.filters = this.groups;
					break
				case 'Тип вопроса':
					this.filtersGroups = []
					this.filtersLevel = []
					this.filtersType = ['Однозначный', 'Множественный', 'Рукописный']
					this.activeBreadcrumb = e.target
					this.activeBreadcrumb.classList.add('breadcrumb__active')
					break
				case 'Сброс':
					console.log('afewgr')
					this.filtersGroups = []
					this.filtersLevel = []
					this.filtersType = []
					this.isFiltered = false
					// console.log(this.uniqueQuestions);
					break

				default:
					break
			}
			this.prevActiveBreadcrumb = e.target
		},
		closeCurrentQuestion() {
			this.showQuestion = false
			window.scrollTo(0, this.prevYcoords)
		},
		showCurrentQuestion(question) {
			// console.log(question);
			this.showQuestion = true
			let currentTestId = question.test_id

			// console.log(currentTestId);
			let currentGroupName
			let currentTestName
			this.tests.filter((item) => {
				item.id === currentTestId
					? ((currentGroupName = item.group), (currentTestName = item.name))
					: ''
			})
			// console.log(currentGroupName);
			this.currentGroupName = currentGroupName
			this.currentTestName = currentTestName
			// console.log(currentTestName);
			this.currentQuestion = question
			this.item = question
			this.prevYcoords = window.pageYOffset
			window.scrollTo(0, 0)
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
		...mapActions('questions', ['addNew', 'findUniqQuestions']),
		setTest(e) {
			console.log(e.target.value)
			this.test_id = e.target.value
		},
		filterTestByGroup(groupName) {
			this.filteredTests = this.tests.filter((item) => {
				console.log(item)
				console.log(groupName)
				return item.group === groupName
			})
			console.log(this.filteredTests)
		},
		setGroup(e) {
			console.log(e.target.value)
			this.selectedGroupName = e.target.value
			this.filterTestByGroup(this.selectedGroupName)
		},
		addQuestionTo(questionOld) {
			// let test_id;
			// for (var i = 0; i < this.groups.length; i++) {
			//   if (this.groups[i].groupName === this.selectedGroupName) {
			//     // console.log("correct");
			//     // console.log(this.groups[i].group_id);
			//     test_id = this.groups[i].group_id;
			//   }
			// }
			console.log(this.test_id)
			console.log(questionOld)
			let filtered = this.filterQuestion(
				this.questions,
				+this.level,
				+this.test_id
			)
			console.log(filtered)
			// console.log(this.$refs.selectedGroup);
			console.log(questionOld.question)
			let newQuestion = {
				...questionOld,
				question: {
					text: questionOld.question.text,
					img: questionOld.question.img,
					question_id: filtered.length + 1,
				},
				level_id: +this.level,
				test_id: +this.test_id,
			}

			console.log(newQuestion)
			this.addNew(newQuestion)
		},
		filterQuestion(questions, levelId, groupId) {
			let filteredQuestions = questions.filter(function(question) {
				console.log(question)
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

		/////////-allQuestions

		setCurrentQuestion() {
			this.item = this.questions[this.activeQuestion]
		},
		changeCurrentQuestion(e, currentQuestion, id) {
			console.log(e.target)
			// console.log(currentQuestion);
			// console.log(typeof currentQuestion);
			// this.breadcrumbs[0].classList.add("breadcrumb--active");
			for (var i = 0; i < this.breadcrumbs.length; i++) {
				// if (i === id) {
				//   this.breadcrumbs[i].classList.add("breadcrumb--active");
				// } else {
				//   this.breadcrumbs[i].classList.remove("breadcrumb--active");
				// }
				i == id
					? this.breadcrumbs[i].classList.add('breadcrumb--active')
					: this.breadcrumbs[i].classList.remove('breadcrumb--active')
			}
			this.item = currentQuestion
			this.qText = currentQuestion.question.text
			// console.log(this.questions[id]);
			// this.item = this.questions[id];
			// console.log(this.item);
			// this.qText = item.question.text;
			// this.activeQuestion = id;
		},
		loadAnwerPhoto(e) {
			const file = e.target.files[0]
			console.log(file)
			const reader = new FileReader()
			try {
				reader.readAsDataURL(file)
				reader.onload = () => {
					this.currentAnswerImgUrl = reader.result
				}
			} catch (error) {
				alert(error.message)
				console.log(error.message.errors.photo)
			}
		},
		changeAnswerPhoto(e) {
			const file = e.target.files[0]
			console.log(file)
			const reader = new FileReader()
			try {
				reader.readAsDataURL(file)
				reader.onload = () => {
					this.currentAnswerImgUrl = reader.result
				}
			} catch (error) {
				alert(error.message)
				console.log(error.message.errors.photo)
			}
		},
		resetAnswerImgUrl() {
			this.currentAnswerImgUrl = ''
		},
		setCurrentAnswerIMG(imgURL) {
			this.currentAnswerImgUrl = imgURL
		},
		closeSection() {
			this.changeShowQuestionsStatus(false)
		},
		filterUniqQuestions() {
			console.log(this.questions)
			let filter = []
			let arr = this.questions
			// console.log(arr.length);
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
			return filter
		},
	},
	computed: {
		...mapState('questions', {
			questions: (state) => state.questions,
		}),
		// ...mapGetters("tests", ["getTests"]),
		...mapState('tests', {
			tests: (state) => state.tests,
		}),
		...mapState('groups', {
			groups: (state) => state.groups,
		}),
		// ...mapState("questions", {
		//   uniqueQuestions: (state) => state.uniqQuestions,
		// }),

		...mapGetters('questions', ['uniqueQuestions']),
	},
	mounted() {
		// console.log(this.uniqueQuestions);
		// this.findUniqQuestions();
		// this.questionsUnique = this.filterUniqQuestions();
	},
	async created() {
		await this.fetchQuestions(localStorage.getItem('creatorId'))
	},
}
</script>
<style lang="postcss" scoped>
@import url('../../../styles/mixins.pcss');
.answers__list {
	margin-bottom: 24px;
	@include tablets {
		margin-bottom: 30px;
	}
}
.answer__list-wrapper {
	height: 100px;
	overflow: auto;
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
	width: calc((100%-2%) / 2);
	margin-right: 2%;
	background: white;
	/* border: 1px solid black; */
	border-radius: 6px;
	margin-bottom: 10px;
	border: 1px solid #efefef;
	box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.14);
	padding: 30px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	&:nth-child(2n) {
		margin-right: 0;
	}
	@include phones {
		width: 100%;
		margin-right: 0;
	}
	/* display: flex; */
}
.question__label {
	color: #414c63;
	font-size: 1rem;
	line-height: 1.875rem;
	opacity: 0.5;
}
.question__text {
	width: 100%;
	/* background-color: transparent; */
	/* font-weight: 700; */
	/* border: none; */
	/* border-bottom: 2px solid #414c63; */
	/* padding: 0 0.3125rem 0.625rem; */
	margin-bottom: 1.875rem;
	font-size: 32px;
	color: #183582;
	overflow: hidden;
	word-break: break-all;
}
.question__add_topic {
	padding-bottom: 1.25rem;
	border-bottom: 1px solid #414c63;
	margin-bottom: 0.875rem;
	font-size: 1.125rem;
	font-weight: 700;
}
.question__show {
	/* margin-bottom: 10px; */
	border: none;
	background: transparent;
	width: 100%;
	color: #0a9ebe;
	&:hover {
		background: lightgrey;
		cursor: pointer;
	}
}
/////
.questions_current__list {
	margin-bottom: 30px;
}
.questions_current__item {
	border: 1px solid #efefef;
	box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.17);
	border-radius: 6px;
	padding: 1.625rem;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
}
.current_level__files {
	width: 90%;
	margin-right: 5%;
	height: 11.1875rem;
	background-color: #dee4ed;
	border: 1px dashed #a1a1a1;
	position: relative;
	background-size: cover;
	background-position: 50%;
	&--answer {
		height: 15.3875rem;
	}
	@include tablets {
		width: 100%;
		margin-right: 0;
		height: 250px;
	}
}
.current_level__file-upload {
	height: 100%;
}
.current_level-data {
	width: 65%;
}
.current_level__load-text {
	color: #414c63;
	font-size: 1rem;
	font-weight: 400;
	line-height: 2.11813rem;
	text-align: center;
	height: 100%;
	display: -webkit-box;
	display: -ms-flexbox;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	margin: 0 auto;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	cursor: pointer;
	position: relative;
}
.current_level__file-input {
	display: none;
}
.answers__data {
	display: flex;
	@include tablets {
		flex-direction: column;
	}
}
.answers__data_img {
	width: 40%;
	@include tablets {
		width: 100%;
	}
}
.answers__data_content {
	width: 60%;
	@include tablets {
		width: 100%;
	}
}
.questions__belongs {
	display: flex;
	justify-content: space-between;
}
.questions__belongs_wrap {
	display: flex;
	margin-bottom: 5px;
}
.questions__belongs__item {
	padding: 5px;
	background: white;
	border: 1px solid #efefef;
	margin-right: 5px;
	border-radius: 6px;
}
.questions__belongs_close-wrap {
	display: flex;
	align-items: center;
}
.questions__belongs_close {
	font-size: 17px;
	font-weight: bold;
	color: black;
	cursor: pointer;
	/* height: 100%; */
}
.questions__belongs__item label {
	font-weight: bold;
	/* border-bottom: 1px solid #414c63; */
}
.aa {
	text-align: center;
}
.answers__title {
	padding-bottom: 1.25rem;
	border-bottom: 1px solid #414c63;
	margin-bottom: 1.875rem;
	font-size: 1.125rem;
	font-weight: 700;
}
.filterQuestionsBreadcrumb__list {
	display: flex;
	margin-bottom: 20px;
}
.filterQuestionsBreadcrumb__item {
	margin-right: 10px;
	position: relative;
	border-radius: 5px;
	cursor: pointer;
	/* padding: 10px; */
	/* background: white; */
}
.breadcrumb {
	background: white;
	padding: 5px;
	/* padding-right: 25px; */
	position: relative;
	color: #0a9ebe;
	&:hover {
		color: #db9600;
	}
	&:not(:last-child) {
		padding-right: 25px;
		&:after {
			content: '^';
			transform: rotate(180deg);
			width: 10px;
			height: 10px;
			position: absolute;
			right: 10%;
			color: black;
			top: 50%;
		}
	}

	/* background: #414c63; */
}
.filterList {
	position: absolute;
	display: flex;
	flex-direction: column;
	min-width: 100%;
	/* height: 40px; */
	/* bottom: 0; */
}
.filterItem {
	cursor: pointer;
	background: white;
	padding: 10px;
	text-align: center;
	color: #414c63;
	border-bottom: 1px solid black;
	border-radius: 2px;
	/* border-right: 1px solid black; */
	/* border-left: 1px solid black; */
	&:hover {
		color: #db9600;
	}
	&:first-child {
		border-top: 1px solid black;
	}
}
.breadcrumb__active {
	color: #db9600;
}
.filterQuestionsBreadcrumb {
	width: 100%;
}

.question__info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;
	&_type {
		width: calc((100%-16px) / 2);
		margin-right: 16px;
	}
	&_group {
		width: calc((100%-16px) / 2);
		margin-right: 0px;
	}

	&_text {
		font-size: 24px;
		color: #000000;
		font-weight: 600;
	}
}
</style>

// questions: { // 0: { // type: "handwritingAnswer", // question: { // text:
"fweq", // img: "", // question_id: 1 // }, // keywordsArray: ["efwq", "efwqgr",
"wefqgr"], // level_id: 1, // test_id: 1 // }, // 1: { // type: "oneAnswer", //
question: { // text: "fewqgr", // img: "", // question_id: 2 // }, // answers: [
// { // text: "fewqgr", // correct: false, // imgURL: "", // answer_id: 1 // },
// { // text: "qfwegr", // correct: true, // imgURL: "", // answer_id: 2 // },
// { // text: "qwrge", // correct: false, // imgURL: "", // answer_id: 3 // } //
], // level_id: 1, // test_id: 1 // }, // 2: { // type: "multipleAnswer", //
question: { // text: "sadvfw", // img: "", // question_id: 3 // }, // answers: [
// { // text: "asdvefw", // correct: false, // imgURL: "", // answer_id: 1 // },
// { // text: "we43", // correct: true, // imgURL: "", // answer_id: 2 // }, //
{ // text: "asdfwer", // correct: true, // imgURL: "", // answer_id: 3 // } //
], // level_id: 1, // test_id: 1 // } // }
