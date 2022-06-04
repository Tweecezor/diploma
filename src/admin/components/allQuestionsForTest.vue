<template lang="pug">
  section.questions
    //- pre {{activeQuestion}}
    ul.breadcrumbs_list
      li.breadcrumbs_item.breadcrumb( ref="breadcrumb" v-for="(currentQuestion,id) in questions")
        .breadcrumb_item( @click="changeCurrentQuestion($event,currentQuestion,id)" :class="") {{id+1}}
    .questions__close(@click="closeSection") X
    .questions__list-wrap
      .questions__list(v-if="questions.length")
        //- CURRENT_QUESTION(:item="item")
        .questions__item.question()
          QUESTION_ITEM( :qText="qText"  :_id="item._id" :item="item.question" :test_id="item.test_id" :level_id="item.level_id")
          div(v-if="item.type!=='handwritingAnswer'").answer__content
            .answers__title Варианты ответов
            .answers__data
              .answers__data_img
                .current_level__files(:style="{'background-image':`url(${currentAnswerImgUrl})`}")
                  .current_level__file-upload
                    label(for="photoFile").current_level__load-text
                      p Изображение для вопроса
                      .dropzone(id="drop1" v-if="currentAnswerImgUrl==''")
                        input(type="file" id="photoFile" @change="loadAnwerPhoto" accept="image/*").current_level__file-input
                        .current_level__file-btn.btn Загрузить
                      .dropzone(v-else)
                        input(type="file" id="photoFile" @change="changeAnswerPhoto" accept="image/*").current_level__file-input
                        .current_level__file-btn.btn Изменить
              .answers__data_content
                ul().answers__list
                  li.answers__item.answer(v-for="answer in item.answers")
                    ANSWER_ITEM(
                      :typeOfQuestion="item.type" :answerLength="item.answers.length" 
                      :question_id="item.question.question_id" :answer="answer" 
                      :test_id="item.test_id" :level_id="item.level_id"
                      :answerImgUrl="currentAnswerImgUrl"
                      :_id="item._id"
                      v-on:setAnswerImgURL="setCurrentAnswerIMG"
                      v-on:emitResetAnswerImgUrl="resetAnswerImgUrl"
                    )
                ADD_NEW_ANSWER(
                  :answerLength="item.answers.length" :question_id="item.question.question_id" 
                  :test_id="item.test_id" :level_id="item.level_id"
                  :currentAnswerImgUrl="currentAnswerImgUrl"
                  :answerImgUrl="currentAnswerImgUrl"
                  :_id="item._id"
                  v-on:emitResetAnswerImgUrl="resetAnswerImgUrl"
                )
          div(v-else)
            KEYWORDS_ANSWER(:keywords="item.keywordsArray" :typeOfQuestion="item.type" :_id="item._id")
      div.no_content(v-else)
        myIcon.no_content_icon(iconName="void")
        .no_content_text Вопросы еще не добавлены
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QUESTION_ITEM from './question-item'
import ANSWER_ITEM from './answer-item'
import ADD_NEW_ANSWER from './answerAddNew'
import KEYWORDS_ANSWER from './keywordsAnswer'
import CURRENT_QUESTION from './currentQuestionOnLevel'
import myIcon from './myIcon.vue'
export default {
	components: {
		QUESTION_ITEM,
		ANSWER_ITEM,
		ADD_NEW_ANSWER,
		KEYWORDS_ANSWER,
		CURRENT_QUESTION,
		myIcon,
	},
	props: {
		questions: Array,
	},
	data() {
		return {
			activeQuestion: 0,
			qText: '',
			item: '',
			// item: this.questions[0],
			// currentQuestionItem: this.questions[1],
			showQImg: false,
			showAImg: false,
			isTestOpen: false,
			currentQuestionID: 1,
			currentAnswerImgUrl: '',
			breadcrumbs: [],
			// answerImgUrl: ""
		}
	},
	methods: {
		...mapActions('helped', [
			'changeCurrentTestStatus',
			'changeCurrentLevelStatus',
			'changeShowQuestionsStatus',
		]),
		...mapActions('tooltips', ['showTooltip']),
		setCurrentQuestion() {
			console.log(this.activeQuestion)
			if (this.activeQuestion === this.questions.length) {
				this.activeQuestion = this.questions.length - 1
				for (var i = 0; i < this.breadcrumbs.length; i++) {
					i == this.activeQuestion
						? this.breadcrumbs[i].classList.add('breadcrumb--active')
						: this.breadcrumbs[i].classList.remove('breadcrumb--active')
				}
			}
			this.item = this.questions[this.activeQuestion]
		},
		changeCurrentQuestion(e, currentQuestion, id) {
			console.log(e.target)
			this.activeQuestion = id
			console.log(this.activeQuestion)

			for (var i = 0; i < this.breadcrumbs.length; i++) {
				i == id
					? this.breadcrumbs[i].classList.add('breadcrumb--active')
					: this.breadcrumbs[i].classList.remove('breadcrumb--active')
			}
			this.item = currentQuestion
			this.qText = currentQuestion.question.text
		},
		loadAnwerPhoto(e) {
			const file = e.target.files[0]
			// console.log(file);
			const reader = new FileReader()
			try {
				reader.readAsDataURL(file)
				// console.log(reader.result);
				reader.onload = () => {
					this.currentAnswerImgUrl = reader.result
				}
				this.showTooltip({
					type: 'success',
					text: 'Изображение успешно добавлено',
				})
			} catch (error) {
				// alert(error.message);
				this.showTooltip({
					type: 'error',
					text: 'Ошибка при добавлении изображения',
				})
				// console.log(error.message.errors.photo);
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
				this.showTooltip({
					type: 'success',
					text: 'Изображение успешно добавлено',
				})
			} catch (error) {
				// alert(error.message);
				// console.log(error.message.errors.photo);
				this.showTooltip({
					type: 'error',
					text: 'Ошибка при добавлении изображения',
				})
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
			this.changeCurrentTestStatus(true)
		},
	},
	computed: {
		...mapState('helped', {
			showQuestions: (state) => state.showQuestions,
		}),
	},
	created() {
		this.setCurrentQuestion()
	},
	mounted() {
		console.log(this.$refs.breadcrumb)
		this.breadcrumbs = this.$refs.breadcrumb
		this.breadcrumbs[0].classList.add('breadcrumb--active')
		for (var i = 1; i < this.breadcrumbs.length; i++) {
			this.breadcrumbs[i].classList.remove('breadcrumb--active')
		}
	},
	watch: {
		questions: function(questions) {
			console.log('wowowowoow')
			// console.log(this.activeQuestion);
			this.setCurrentQuestion()
		},
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
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
		margin-bottom: 20px;
	}
}
.answers__data_content {
	width: 60%;
	@include tablets {
		width: 100%;
	}
}
.answer__content {
	padding: 10px;
}
.breadcrumbs_list {
	display: flex;
}
.breadcrumb {
	width: 20px;
	line-height: 20px;
	background: #fff;
	border: 1px solid #414c63;
	border-radius: 2px;
	text-align: center;
	margin-right: 5px;
	color: #414c63;
	&:hover {
		border: 1px solid #db9600;
		cursor: pointer;
		color: #db9600;
	}
}
.questions {
	position: relative;
	width: 100%;
	/* padding: 40px; */
	margin-bottom: 20px;
	background: transparent;
	display: flex;
	flex-direction: column;
	/* display: flex; */
}
.question {
	width: 100%;
}
/* .questions__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
} */
/* .questions__item {
  width: 400px;
  background-color: white;
  min-height: 300px;
  border: 1px solid black;
} */
.question_img {
	width: 100%;
	height: 200px;
}
.question_avatar {
	width: 100%;
	height: 100%;
	background-size: cover;
}
.answer_img {
	width: 100%;
	height: 200px;
}
.answer_avatar {
	/* width: 100%; */
	height: 200px;
	background-size: cover;
}
.questions__empty {
	width: 100%;
	padding: 30px;
	background-color: white;
	height: 100px;
}
.questions__close {
	/* position: absolute;
  top: -10%;
  right: -5%; */
	text-align: right;
	color: black;
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
	align-self: flex-end;
	width: 20px;
	cursor: pointer;
}
.question {
	margin-bottom: 10px;
	width: 100%;
	padding: 10px;
}

//------
.answers__title {
	padding-bottom: 1.25rem;
	border-bottom: 1px solid #414c63;
	margin-bottom: 1.875rem;
	font-size: 1.125rem;
	font-weight: 700;
	/* new */
	font-size: 24px;
	line-height: 38px;
	color: #183582;
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
		margin-right: 0;
		width: 100%;
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
.answers__item {
	margin-bottom: 20px;
}
.answers__list {
	margin-top: -8px;
	margin-bottom: 10px;
}
/* .questions__list {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.question {
  position: relative;
} */
.questions__list-wrap {
	/* width: 100vh; */
	/* overflow: hidden;
  width: 800px; */
}
.questions__list {
	/* display: flex;
  display: flex; */
	/* position: relative; */
	/* display: flex;
  position: relative;
  overflow: hidden; */
	/* width: 300PX; */
	/* width: 500px; */
	/* OVERFLOW: hidden; */
	/* left: 0px; */
}
.questions__item {
	/* border: 1px solid black; */
	/* border: 1px solid #efefef;
	box-shadow: 0.25rem 0.1875rem 1.25rem rgba(0, 0, 0, 0.17);
	border-radius: 6px; */
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
	/* width: 100%; */
	/* width: 2000px; */
	/* width: 800px; */
}
.breadcrumb--active {
	color: #db9600;
	border: 1px solid #db9600;
}

.no_content {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&_icon {
		width: 600px;
		height: 600px;
		margin-bottom: 32px;
	}

	&_text {
		font-weight: 600;
		font-size: 32px;
		color: #183582;
	}
}
</style>
