<template lang="pug">
div
  div.student
    .student__info(:class="{student__info_edit:editMode}")
      div.student__text(v-if="!editMode") {{currentStudent.surname}}
      input(v-else type="text" :disabled="!editMode" v-model="currentStudent.surname").student__input

      div.student__text(v-if="!editMode") {{currentStudent.name}}
      input(v-else type="text" :disabled="!editMode" v-model="currentStudent.name").student__input.student__input--surname

      div.student__text(v-if="!editMode") {{currentStudent.thirdname}}
      input(v-else type="text" :disabled="!editMode" v-model="currentStudent.thirdname").student__input.student__input--thirdname
   
    .student__buttons(v-if="!editMode" :class="{student__buttons__disabled:isActiveModeActive}")
      div.icon_wrap(@click="editStudent")
        myIcon.student__buttons--edit(iconName="pencil")
      //- <svg @click="editStudent" class="student__buttons--edit" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
      //-     <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
      //- </svg>
      div.icon_wrap(@click="deleteCurrentStudent")
        myIcon.student__buttons--delete(iconName="trash")
      //- <svg class="student__buttons--delete" @click="deleteCurrentStudent" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
      //-   <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
      //- </svg>
    .student__buttons(v-else )
      div.icon_wrap(@click="saveStudent")
        myIcon.student__buttons--save(iconName="done")
      //- <svg version="1.1" @click="saveStudent" class="student__buttons--save" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
      //-   <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
      //- </svg>
      div.icon_wrap(@click="cancelEditStudent")
        myIcon.student__buttons--cancel(iconName="cancel")
      //- <svg version="1.1" @click="cancelEditStudent" class="student__buttons--cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
      //-   <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
      //- </svg>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import myIcon from './myIcon.vue'
export default {
	props: {
		student: Object,
	},
	components: {
		myIcon,
	},
	data() {
		return {
			currentStudent: { ...this.student },
			editMode: false,
			new: '',
		}
	},
	methods: {
		...mapActions('groups', ['editStudentInGroup', 'deleteStudent']),
		...mapActions('tooltips', ['showTooltip', 'hideTooltip']),
		...mapActions('helped', ['setEditStatus']),
		editStudent() {
			if (!this.isActiveModeActive) {
				this.editMode = !this.editMode
				this.setEditStatus(true)
			}
		},
		async deleteCurrentStudent() {
			if (!this.isActiveModeActive) {
				try {
					await this.deleteStudent(this.currentStudent)
					this.showTooltip({
						type: 'success',
						text: 'Студент успешно удален',
					})
				} catch (error) {
					this.showTooltip({
						type: 'error',
						text: error,
					})
				}
			}
		},
		saveStudent() {
			if (this.isActiveModeActive) {
				this.editMode = !this.editMode

				let editedStudent = {
					...this.currentStudent,
					fullName: `${this.currentStudent.surname} ${
						this.currentStudent.name
					} ${this.currentStudent.thirdname}`,
				}
				console.log(this.currentStudent)
				console.log(editedStudent)

				this.editStudentInGroup(editedStudent)
				this.showTooltip({
					type: 'success',
					text: 'Изменения успешно сохранены',
				})
				this.setEditStatus(false)
			}
		},
		cancelEditStudent() {
			if (this.isActiveModeActive) {
				this.currentStudent = { ...this.student }
				this.editMode = !this.editMode
				this.showTooltip({
					type: 'success',
					text: 'Изменения успешно отменены',
				})
				this.setEditStatus(false)
			}
		},
	},
	watch: {
		student: function(student) {
			this.currentStudent = { ...this.student }
		},
	},
	computed: {
		...mapState('helped', {
			isActiveModeActive: (state) => state.isEditActive,
		}),
	},
	// mounted() {
	//   this.setEditStatus(false);
	// }
}
</script>
<style lang="postcss" scoped>
/* .student__input_hidden {
  display: none;
} */
.green {
	width: 15px;
	height: 15px;
	border-radius: 50%;
}
.svgImage {
	width: 20px;
	heigth: 20px;
	background: svg-load('message.svg');
	background-position: center center;
}
.student {
	display: flex;
	width: 100%;
	justify-content: space-between;
	input {
		opacity: 0.7;
	}

	&__info {
		display: flex;
		justify-content: space-between;
		width: 80%;
		&_edit {
			width: 100%;
		}
	}
}

.student__buttons {
	display: flex;
	align-items: center;
}
.student__buttons--edit {
	position: relative;
	margin-right: 15px;
	width: 18px;
	height: 18px;
	color: #0a9ebe;
	&:hover {
		cursor: pointer;
		color: blue;
	}
}
.student__buttons--edit-icon {
	width: 15px;
	height: 15px;
	color: #0a9ebe;
	&:hover {
		cursor: pointer;
		color: blue;
	}
}
.student__buttons--delete {
	/* padding-right: 3.125rem; */
	position: relative;
	cursor: pointer;
	fill: red;
	width: 24px;
	height: 24px;
	color: #0a9ebe;
	&:hover {
		cursor: pointer;
		color: red;
	}
	/* &:before {
    content: "";
    background: svg-load("trash.svg", fill= "red") center center no-repeat /
      contain;
    width: 13px;
    height: 13px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.student__buttons--save {
	/* padding-right: 50px; */
	fill: green;
	position: relative;
	margin-right: 16px;
	width: 24px;
	height: 24px;
	cursor: pointer;
	color: #0a9ebe;
	&:hover {
		cursor: pointer;
		color: green;
	}
	/* &:before {
    content: "";
    background: svg-load("tick.svg", fill= "green") center center no-repeat /
      contain;
    width: 15px;
    height: 15px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}
.student__buttons--cancel {
	/* padding-right: 3.125rem; */
	position: relative;
	cursor: pointer;
	width: 20px;
	height: 20px;
	fill: red;
	color: #0a9ebe;
	&:hover {
		cursor: pointer;
		color: red;
	}
	/* &:before {
    content: "";
    background: svg-load("remove.svg", fill= "red") center center no-repeat /
      contain;
    width: 13px;
    height: 13px;
    opacity: initial;
    position: absolute;
    top: 15%;
    left: 63%;
  } */
}

.student__buttons__disabled {
	svg {
		opacity: 0.7;
	}
}
input[type='text']:disabled {
	border-bottom: 1px solid black;
	&:hover {
		border-bottom: 1px solid black;
	}
}
input[type='text'] {
	/* border-bottom: 1px solid #0078cf;
	&:hover {
		border-bottom: 1px solid #0078cf;
	} */
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 10px 12px;
	width: 100%;
}
.student__input {
	border: none;
	width: 28%;
	margin-right: 2%;
	border-bottom: 1px solid black;
	&--surname {
		width: 25%;
		/* margin-right: 2; */
	}
	&--thirdname {
		width: 30%;
		margin-right: 0px;
		/* margin-right: 2; */
	}
}

.icon_wrap {
	display: flex;
	align-items: center;
}

.student__text {
	font-weight: 700;
}
</style>
