<template lang="pug">
  li.answers__item.answer
    //- pre {{answerPhotoURl}}
    //- pre {{isActiveModeActive}}
    .answer__text-wrap
      input(type="text" v-model="answer.text"  ).answers__text
    .answer__correct-wrap
      input(type="radio" name="isCorrect" v-bind:value="answer.text" id="isCorrect" @change="setCorrectAnswer").answer__correct 
    .answer__actions(v-if="!editAnswer" :class="{answers__actions__disabled:isActiveModeActive}") 
      .icon(@click="showAnswerImg(answer)")
        myIcon.answer__actions-photo(iconName="add_image")
      .icon(@click="deleteCurrentAnswer(answer)")
        myIcon.answer__actions-delete(iconName="trash")
    .answer__actions(v-if="editAnswer")
      .icon(@click="changeAnswer(answer)")
        myIcon.answer__actions-save(iconName="done")
      .icon(@click="cancelChangeAnswer(answer)")
        myIcon.answer__actions-cancel(iconName="cancel")
     

</template>

<script>
import { mapActions, mapState } from 'vuex'
import myIcon from './myIcon.vue'
export default {
	components: {
		myIcon,
	},
	props: {
		answer: Object,
		answers: Array,
		answerPhotoURl: String,
		prevAnswerPhotoURl: String,
	},
	data() {
		return {
			editAnswer: false,
		}
	},
	methods: {
		...mapActions('helped', ['setEditStatus']),
		deleteCurrentAnswer(answer) {
			if (!this.isActiveModeActive) {
				console.log(answer)
				this.$emit('emitDeleteAnswer', answer)
				// this.setEditStatus(true);
			}
		},
		cancelChangeAnswer(answer) {
			this.answers.forEach((item) => {
				if (item.answer_id === answer.answer_id) {
					item.imgURL = this.prevAnswerPhotoURl
				}
			})
			this.editAnswer = false
			this.setEditStatus(false)
			this.$emit('emitDropAnswerURL')
		},
		changeAnswer(answer) {
			console.log(answer)
			this.answers.forEach((item) => {
				if (item.answer_id === answer.answer_id) {
					item.imgURL = this.answerPhotoURl
				}
			})
			this.editAnswer = false
			this.setEditStatus(false)
			this.$emit('emitDropAnswerURL')
		},
		showAnswerImg(answer) {
			if (!this.isActiveModeActive) {
				this.editAnswer = true
				this.$emit('emitShowAnswerImg', { answer })
				this.setEditStatus(true)
			}
		},
		setCorrectAnswer(e) {
			console.log(this.answers)
			console.log(e.target.value)
			console.log(e.target.checked)
			let updatedAnswers = this.answers.map(function(item) {
				// console.log(item);
				if (item.text === e.target.value) {
					item.correct = e.target.checked
					return item
				} else {
					item.correct = false
					return item
				}
			})
			console.log(updatedAnswers)
			this.$emit('emitSetCorrectAnswer', { updatedAnswers: updatedAnswers })
			// this.answers = updatedAnswers;
			// this.isCorrectAnswerSet = true;
			// console.log(e.target.value);
			// console.log(e.target.checked);
		},
	},
	computed: {
		...mapState('helped', {
			isActiveModeActive: (state) => state.isEditActive,
		}),
	},
	mounted() {
		this.setEditStatus(false)
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
.answer {
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-bottom: 16px;
}
.answer__text-wrap {
	width: 75%;
	margin-right: 2%;
	width: 100%;
	@include tablets {
		width: 100%;
	}
}
.answer__correct-wrap {
	margin-right: 2%;
}
.answer__correct {
	height: 100%;
}
.answers__text {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	width: 100%;
}
.answer__actions-edit {
	/* padding-right: 50px; */
	position: relative;
	margin-right: 25px;
	cursor: pointer;
	width: 20px;
	height: 20px;
}
.answer__actions-photo {
	/* padding-right: 50px; */
	position: relative;
	margin-right: 15px;
	cursor: pointer;
	width: 24px;
	height: 24px;
	&:hover {
		color: blue;
	}
}
.answer__actions-delete {
	position: relative;
	cursor: pointer;
	width: 24px;
	height: 24px;
	&:hover {
		color: red;
	}
}
.answer__actions-save {
	position: relative;
	margin-right: 15px;
	width: 24px;
	height: 24px;
	cursor: pointer;
	&:hover {
		color: green;
	}
}
.answer__actions-cancel {
	position: relative;
	cursor: pointer;

	width: 20px;
	height: 20px;
	&:hover {
		color: red;
	}
}
.answer__actions {
	width: 15%;
	display: flex;
	position: relative;
	/* margin-top: 10px; */
	align-items: center;
	@include tablets {
		width: auto;
	}
}
.answers__actions__disabled {
	svg {
		opacity: 0.5;
	}
}

.icon {
	color: #0a9ebe;
	display: flex;
	align-items: center;
}
</style>
