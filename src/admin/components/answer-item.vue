<template lang="pug">
  .answers__wrapper
    //- pre {{answer}}
    .answers__data(v-if="typeOfQuestion==='oneAnswer' || typeOfQuestion==='multipleAnswer'")
      .answers__data_label-wrap
        label.answers__data_label Текст ответа
      .answers__data_content
        .answers__data_text-wrap
          input(type="text" v-model="currentAnswer.text" :disabled="!editMode").answers__data_text
        .answers__data_correct-wrap(v-if="typeOfQuestion === 'oneAnswer'")
          input( type="radio" :name="question_id" v-bind:value="currentAnswer.answer_id" :disabled="!editMode" :checked="answer.correct"  @change="setCorrectAnswer").answers__data_status
        .answers__data_correct-wrap(v-if="typeOfQuestion === 'multipleAnswer'")
          input( type="checkbox" :name="question_id" v-bind:value="currentAnswer.answer_id" :disabled="!editMode" :checked="answer.correct"  @change="setCorrectAnswer").answers__data_status
        .answers__actions(v-if="!editMode && !editPhotoMode" :class="{answers__actions__disabled:isActiveModeActive}")
            //- .answers__actions_correct(@click="editMode = true")
            div.icon_wrap(@click="setEditMode")
              myIcon.answers__actions_correct(iconName="pencil")
            //- <svg @click="setEditMode"  class="answers__actions_correct" version="1.1" id="editIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
            //-   <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
            //- </svg>
            //- .answer__actions-photo(@click="setAnswerImgUrl(answer)")
            div.icon_wrap(@click="setAnswerImgUrl(answer)")
              myIcon.answer__actions-photo(iconName="add_image" )
            //- <svg height="512pt" :disabled="isActiveModeActive" class="answer__actions-photo" @click="setAnswerImgUrl(answer)" viewBox="0 -64 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
            //-   <path d="m149.332031 106.667969c0 23.5625-19.101562 42.664062-42.664062 42.664062-23.566407 0-42.667969-19.101562-42.667969-42.664062 0-23.566407 19.101562-42.667969 42.667969-42.667969 23.5625 0 42.664062 19.101562 42.664062 42.667969zm0 0" />
            //-   <path d="m448 0h-384c-35.285156 0-64 28.714844-64 64v256c0 1.195312.296875 2.324219.363281 3.519531-.300781 2.558594-.171875 5.140625.765625 7.574219 5.269532 29.996094 31.382813 52.90625 62.871094 52.90625h384c35.285156 0 64-28.714844 64-64v-256c0-35.285156-28.714844-64-64-64zm-384 42.667969h384c11.753906 0 21.332031 9.578125 21.332031 21.332031v169.367188l-112.210937-112.214844c-14.59375-14.59375-38.335938-14.59375-52.90625 0l-101.546875 101.546875-26.882813-26.878907c-14.589844-14.59375-38.335937-14.59375-52.90625 0l-80.210937 80.210938v-212.03125c0-11.753906 9.578125-21.332031 21.332031-21.332031zm0 0" />
            //- </svg>
            //- .answers__actions_trash(@click="deleteCurrentAnswer") 
            div.icon_wrap(@click="deleteCurrentAnswer")
              myIcon.answers__actions_trash(iconName="trash" )
            //- <svg class="answers__actions_trash" :disabled="isActiveModeActive" @click="deleteCurrentAnswer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
            //-   <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
            //- </svg>
        .answers__actions(v-if="editMode")
          //- .answers__actions_update(@click="updateCurrentAnswer") 
          div.icon_wrap(@click="updateCurrentAnswer")
            myIcon.answers__actions_update(iconName="done")
          //- <svg version="1.1" @click="updateCurrentAnswer" class="answers__actions_update" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
          //-   <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
          //- </svg>
          //- .answers__actions_cancel(@click="cancelUpdate") 
          div.icon_wrap(@click="cancelUpdate")
            myIcon.answers__actions_cancel(iconName="cancel")
          //- <svg version="1.1" @click="cancelUpdate" class="answers__actions_cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
          //-   <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
          //- </svg>
        .answers__actions(v-if="editPhotoMode")
          //- .answers__actions_update(@click="saveNewImg") 
          div.icon_wrap(@click="saveNewImg")
            myIcon.answers__actions_update(iconName="done")
          //- <svg version="1.1" @click="saveNewImg" class="answers__actions_update" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
          //-   <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
          //- </svg>
          //- .answers__actions_cancel(@click="cancelImgUpdate")
          div.icon_wrap(@click="cancelImgUpdate")
            myIcon.answers__actions_cancel(iconName="cancel") 
          //- <svg version="1.1" @click="cancelImgUpdate" class="answers__actions_cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
          //-   <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
          //- </svg>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import myIcon from './myIcon.vue'
export default {
	props: {
		answer: Object,
		test_id: Number,
		level_id: Number,
		question_id: Number,
		answerLength: Number,
		typeOfQuestion: String,
		answerImgUrl: String,
		_id: String,
	},
	components: {
		myIcon,
	},
	data() {
		return {
			editPhotoMode: false,
			editMode: false,
			newAnswer: '',
			newAnswerImgURL: '',
			showQImg: false,
			currentAnswer: { ...this.answer },
			showAImg: false,
			prevCorrectAnswer: {
				correct: this.answer.correct,
				text: this.answer.text,
			},
			newImg: false,
			prevAnswerImgUrl: '',
		}
	},
	methods: {
		...mapActions('tooltips', ['showTooltip', 'hideTooltip']),
		...mapActions('questions', [
			'changeAnswerStatus',
			'updateAnswer',
			'addNewAnswer',
			'deleteAnswer',
		]),
		...mapActions('helped', ['setEditStatus']),
		setEditMode() {
			if (!this.isActiveModeActive) {
				this.editMode = true
				this.setEditStatus(true)
			}
		},
		cancelImgUpdate() {
			console.log('cancel')
			this.editPhotoMode = false
			this.$emit('emitResetAnswerImgUrl')
			this.setEditStatus(false)
		},
		async saveNewImg() {
			try {
				this.editPhotoMode = false
				await this.updateAnswer({
					text: this.currentAnswer.text,
					imgURL: this.answerImgUrl,
					answer_id: this.currentAnswer.answer_id,
					level_id: this.level_id,
					test_id: this.test_id,
					question_id: this.question_id,
					imgURL: this.answerImgUrl,
					_id: this._id,
				})
				this.showTooltip({
					type: 'success',
					text: 'Изображение успешно изменено',
				})
				this.$emit('emitResetAnswerImgUrl')
			} catch (error) {
				this.showTooltip({
					type: 'error',
					text: error,
				})
			}
			this.setEditStatus(false)
		},
		setAnswerImgUrl(answer) {
			if (!this.isActiveModeActive) {
				this.editPhotoMode = true
				console.log(this.answer.imgURL)
				this.prevAnswerImgUrl = this.answer.imgURL
				this.$emit('setAnswerImgURL', answer.imgURL)
				this.setEditStatus(true)
			}
		},
		newAnswerAdd() {
			let newAnswer = {
				answer: {
					text: this.newAnswer,
					correct: false,
					imgURL: this.newAnswerImgURL,
					answer_id: Date.now(),
					// answer_id: this.answerLength + 1
				},
				test_id: this.test_id,
				level_id: this.level_id,
				question_id: this.question_id,
			}
			console.log(newAnswer)
			this.addNewAnswer(newAnswer)
		},
		loadImg(e, isNewImg = false) {
			// console.log(isNewImg);
			this.newImg = isNewImg
			const file = e.target.files[0]
			console.log(file)
			const reader = new FileReader()
			try {
				reader.readAsDataURL(file)
				reader.onload = () => {
					this.currentAnswer.imgURL = reader.result
				}
			} catch (error) {
				alert(error.message)
				console.log(error.message.errors.photo)
				console.log(this.currentAnswer.imgURL)
			}
		},
		deleteImg() {
			this.currentAnswer.imgURL = ''
		},
		async deleteCurrentAnswer() {
			if (!this.isActiveModeActive) {
				try {
					await this.deleteAnswer({
						answer_id: this.currentAnswer.answer_id,
						level_id: this.level_id,
						test_id: this.test_id,
						question_id: this.question_id,
						_id: this._id,
					})
					this.showTooltip({
						type: 'success',
						text: 'Ответ успешно удален',
					})
				} catch (error) {
					this.showTooltip({
						type: 'error',
						text: error,
					})
				}
			}
		},
		async updateCurrentAnswer() {
			try {
				await this.updateAnswer({
					text: this.currentAnswer.text,
					imgURL: this.currentAnswer.imgURL,
					answer_id: this.currentAnswer.answer_id,
					level_id: this.level_id,
					test_id: this.test_id,
					question_id: this.question_id,
					imgURL: this.currentAnswer.imgURL,
					_id: this._id,
				})
				this.editMode = !this.editMode
				this.newImg = false
				this.showAImg = false
				this.showTooltip({
					type: 'success',
					text: 'Ответ успешно изменен',
				})
			} catch (error) {
				this.showTooltip({
					type: 'error',
					text: error,
				})
			}

			this.setEditStatus(false)
		},
		async cancelUpdate() {
			try {
				this.changeAnswerStatus({
					text: this.prevCorrectAnswer.text,
					correct: this.prevCorrectAnswer.correct,
					test_id: this.test_id,
					level_id: this.level_id,
					question_id: this.question_id,
				})
				this.currentAnswer = { ...this.answer }
				this.editMode = !this.editMode
				this.showTooltip({
					type: 'success',
					text: 'Изменения отменены',
				})
				this.setEditStatus(false)
			} catch (error) {
				this.showTooltip({
					type: 'error',
					text: error,
				})
			}
		},
		showAnswerImage() {
			this.showAImg = !this.showAImg
		},
		async setCorrectAnswer(e) {
			try {
				await this.changeAnswerStatus({
					answer_id: +e.target.value,
					correct: e.target.checked,
					test_id: this.test_id,
					level_id: this.level_id,
					question_id: this.question_id,
					type: this.typeOfQuestion,
					_id: this._id,
				})
			} catch (error) {}
		},
	},
	watch: {
		answer: function(answer) {
			// console.log(answer);
			this.currentAnswer = { ...this.answer }
		},
	},
	mounted() {
		this.setEditStatus(false)
	},
	computed: {
		...mapState('helped', {
			isActiveModeActive: (state) => state.isEditActive,
		}),
	},
}
</script>
<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
/* .answers__wrapper {
  display: flex;
}
.answers__image {
  width: 40%;
}
.answers__data {
  width: 60%;
} */

.answers__actions {
	display: flex;
	align-items: center;
}
.answer_img {
	/* width: 100%;
  height: 200px; */
	/* display: none; */
}
.answer_avatar {
	width: 200px;
	height: 200px;
	background-size: cover;
}
.answer__image_show-btn {
	margin-bottom: 10px;
}
.answer__image_input {
	display: none;
}
//--------

.answers__data_content {
	display: flex;
	align-items: center;
}
.answers__data_label {
	display: block;
	opacity: 0.5;
	color: #414c63;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.875rem;
}
.answers__data_text-wrap {
	width: 90%;
}
.answers__data_correct-wrap {
	heigth: 100%;
	display: flex;
	align-items: flex-end;
	margin-right: 10px;
	margin-left: 10px;
}
.answers__data_text {
	width: 100%;
	background-color: transparent;
	font-weight: 700;
	/* border: none; */
	/* border-bottom: 2px solid #414c63; */
	/* padding: 0 0.3125rem 0.625rem; */
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	background: #fff;
	border-radius: 8px;
}
.answers__actions_correct {
	position: relative;
	margin-right: 15px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	color: #0a9ebe;
	transition: all 0.3s;
	&:hover {
		color: green;
	}
	/* fill: blue; */
	/* &:before {
    content: "";
    background: svg-load("pencil.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answers__actions_trash {
	position: relative;
	/* margin-right: 20px; */
	cursor: pointer;
	width: 24px;
	height: 24px;
	color: #0a9ebe;
	transition: all 0.3s;
	&:hover {
		color: red;
	}

	/* &:before {
    content: "";
    background: svg-load("trash.svg", fill= "red") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answers__actions_update {
	position: relative;
	margin-right: 15px;
	cursor: pointer;
	width: 24px;
	height: 24px;
	color: #0a9ebe;
	transition: all 0.3s;
	&:hover {
		color: green;
	}
	/* &:before {
    content: "";
    background: svg-load("tick.svg", fill= "green") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answers__actions_cancel {
	position: relative;
	margin-right: 15px;
	cursor: pointer;
	width: 17px;
	height: 17px;
	color: #0a9ebe;
	transition: all 0.3s;
	&:hover {
		color: red;
	}
	/* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.answer__actions-photo {
	/* padding-right: 50px; */
	position: relative;
	margin-right: 15px;
	cursor: pointer;
	width: 20px;
	height: 20px;
	color: #0a9ebe;
	transition: all 0.3s;
	&:hover {
		color: blue;
		/* transition: all 0.3s; */
	}
	/* &:before {
    content: "";
    background: svg-load("photo.svg", fill= "#383bcf") center center no-repeat /
      contain;
    width: 20px;
    height: 20px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}

.current_level__files {
	width: 40%;
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
.answers__actions__disabled {
	svg {
		opacity: 0.5;
	}
}

.icon_wrap {
	display: flex;
	align-items: center;
}
</style>
