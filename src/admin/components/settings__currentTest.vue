<template lang="pug">
  .container_ 
    //- randomIcon.test__icon_1
    //- randomIcon(:min="4" :max="5").test__icon_2
    //- pre {{currentTest}}
    //- pre {{test }}
    .test__name
      .test__name_text(v-if="!editMode") {{currentTest.name}}
      div(v-else)
        .test__label-wrap
          label.test__label Название теста
        .test__input_name-wrap
          input.test__input_name.test__input(v-model="currentTest.name" :disabled="!editMode")
    .test__group
      .test__label-wrap
        label.test__label Для группы
      .test__input_group-wrap
        .test__group_text(v-if="!editMode") {{currentTest.group}}
        input.test__input_group.test__input(v-else v-model="currentTest.group" disabled)
    .test__info_row
      .test__time
        .test__label-wrap
          label.test__label Длительность
        .test__input_time-wrap
          .test__text(v-if="!editMode") {{currentTest.time}}
          div(v-else)
            input.test__input_time.test__input(v-model="currentTest.time" :disabled="!editMode")
            //- .test__time_text мин
      .test__access
        .test__label-wrapper
          .test__label-wrap.test__label-select.test__label Доступ
          .test__text(v-if="!editMode") {{showAccess(currentTest.access)}}
          select( v-else @change="changeAccess" :disabled="!editMode" ref="selectBox").test__input_access-wrap
            //- option(value="").test__levels-option Выберите доступ 
            option(value="false").test__access-option Закрыт
            option(value="true" :selected="currentTest.access").test__access-option Открыт
    //- .test__save
    //-   button.test__save_button.btn(@click="saveSettings") Сохранить
    //- .test__actions
    //-   <svg @click="correctTest(test)" class="group__desc-correct" version="1.1" id="editIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
    //-       <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
    //-   </svg>
    //-   <svg id="deleteIcon" class="group__desc-remove" @click="deleteTest(test)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
    //-     <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
    //-   </svg>
    .test__actions(v-if="!editMode" :class="{group__desc__disabled:isActiveModeActive}")
      .group__desc-correct-wrap.edit
        label.group__desc_label(for="editIcon"  @click="correctTest(test)") Править
        .icon(@click="correctTest(test)")
          myIcon(iconName="pencil")
        //- <svg  @click="correctTest(test)"  class="group__desc-correct" version="1.1" id="editIcon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899" style="enable-background:new 0 0 528.899 528.899;"xml:space="preserve">
        //-     <path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069L27.473,390.597L0.3,512.69z"/>
        //- </svg>
      .group__desc-correct-wrap.remove
        label.group__desc_label(for="deleteIcon" @click="deleteTest(test)") Удалить
        .icon(@click="deleteTest(test)")
          myIcon(iconName="trash")
        //- <svg id="deleteIcon" class="group__desc-remove"@click="deleteTest(test)" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="459px" height="459px" viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
        //-   <path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/>
        //- </svg>
    .test__actions(v-else)
      .group__desc-correct-wrap.save
        label.group__desc_label(for="deleteIcon" @click="saveSettings") Сохранить
        .icon.icon_save(@click="saveSettings")
          myIcon(iconName="done")
        //- <svg version="1.1"@click="saveSettings" class="group__desc-correct correct-save" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 342.357 342.357" style="enable-background:new 0 0 342.357 342.357;" xml:space="preserve">
        //-   <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 "/>
        //- </svg>
      .group__desc-correct-wrap.cancel
        label.group__desc_label(for="deleteIcon" @click="cancelEdited") Отменить
        .icon(@click="cancelEdited")
          myIcon(iconName="cancel")
        //- <svg version="1.1" @click="cancelEdited" class="group__desc-remove remove-cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
        //-   <g><path d="M585.8,500l385.9-385.9c24.5-24.5,24.5-61.3,0-85.8c-24.5-24.5-61.3-24.5-85.8,0L500,414.3L114.1,28.4c-24.5-24.5-61.2-24.5-85.8,0c-24.5,24.5-24.5,61.3,0,85.8L411.2,500L28.4,885.9c-24.5,24.5-24.5,61.3,0,85.8c9.2,12.3,27.6,18.4,42.9,18.4c15.3,0,30.6-6.1,42.9-18.4L500,585.8l385.9,385.9c12.3,12.3,27.6,18.4,42.9,18.4s30.6-6.1,42.9-18.4c24.5-24.5,24.5-61.3,0-85.8L585.8,500z"/></g>
        //- </svg>
      //- .test__save_button.(@click="deleteTest(test)") Удалить
            
</template>

<script>
import { mapActions, mapState } from 'vuex'
import myIcon from './myIcon.vue'
import randomIcon from './randomIcon.vue'

// import axios from "axios";
export default {
	components: { myIcon, randomIcon },
	props: {
		test: Object,
	},
	data() {
		return {
			testTime: '',
			changeStatus: false,
			testAccess: false,
			editMode: false,
			currentTest: '',
		}
	},
	methods: {
		...mapActions('helped', ['changeShowGroupStatus']),
		...mapActions('groups', ['fetchGroups']),
		...mapActions('tooltips', ['showTooltip']),
		...mapActions('tests', ['setNewSettingsToTest', 'deleteCurrentTest']),
		...mapActions('helped', ['setEditStatus']),

		showAccess(access) {
			return access ? 'Открыт' : 'Закрыт'
		},
		cancelEdited() {
			if (this.isActiveModeActive) {
				this.editMode = !this.editMode
				this.setEditStatus(false)
				this.currentTest = { ...this.test }
				if (this.changeStatus) {
					console.log(this.$refs.selectBox.value)

					// this.$refs.selectBox.value = this.currentTest.access;
				}
			}
		},
		correctTest(test) {
			if (!this.isActiveModeActive) {
				this.editMode = !this.editMode
				this.setEditStatus(true)
			}
		},
		async deleteTest(test) {
			if (!this.isActiveModeActive) {
				try {
					await this.deleteCurrentTest(test._id)
					this.showTooltip({
						type: 'success',
						text: 'Тест успешно удален',
					})
				} catch (error) {
					this.showTooltip({
						type: 'error',
						text: 'Произошла ошибка при удалении',
					})
				}
			}
		},
		changeAccess(e) {
			console.log(e.target.value)
			this.testAccess = e.target.value
			this.changeStatus = true
		},
		saveSettings() {
			if (this.isActiveModeActive) {
				let newSettings
				try {
					if (this.changeStatus) {
						newSettings = {
							...this.currentTest,
							access: this.testAccess,
							time: +this.currentTest.time,
							// time: this.testTime
						}
					} else {
						newSettings = {
							...this.currentTest,
							access: this.test.access,
							time: +this.currentTest.time,
							// time: this.testTime
						}
					}
					this.showTooltip({
						type: 'success',
						text: 'Изменения успешно сохранены',
					})
					this.setNewSettingsToTest(newSettings)
				} catch (error) {
					this.showTooltip({
						type: 'error',
						text: 'Ошибка',
					})
				}
				this.editMode = !this.editMode
				this.setEditStatus(false)
			}
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
			showAddGroup: (state) => state.showAddGroup,
		}),
		...mapState('helped', {
			isActiveModeActive: (state) => state.isEditActive,
		}),
	},
	async mounted() {
		this.setEditStatus(false)
		this.currentTest = { ...this.test }
	},
	// watch: {
	//   groups: function() {
	//     this.groups = this.groups;
	//   }
	// }
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');

.test__input {
	width: 100%;
	background-color: transparent;
	font-weight: 700;
	border: none;
	border-bottom: 2px solid #414c63;
	padding: 0 0.3125rem 0.625rem;
	/* margin-bottom: 1.875rem; */
}
.test__input_access-wrap {
	margin-bottom: 1.875rem;
}
.test__save_button {
	width: 100%;
}
.test__input_time-wrap {
	display: flex;
}
.test__name,
.test__group,
.test__time {
	margin-bottom: 1.875rem;
}
.test__time_text {
	align-self: flex-end;
}
.test__input_time {
	/* margin-right: 10px; */
}
.test__label {
	color: #414c63;
	font-size: 1rem;
	line-height: 1.875rem;
	opacity: 0.5;
}
.test__label-wrap {
	margin-bottom: 5px;
}
.test__save_button {
	margin-bottom: 20px;
}
.test__actions {
	display: flex;
	justify-content: space-between;
}
.group__desc-remove {
	position: relative;
	cursor: pointer;
	width: 24px;
	height: 24px;
	transition: all 0.3s;
	color: #0a9ebe;
	&:hover {
		color: red;
	}
}
.group__desc-correct {
	position: relative;
	cursor: pointer;
	width: 24px;
	height: 24px;
	transition: all 0.3s;
	color: #0a9ebe;
	&:hover {
		color: blue;
	}
}
.group__desc_label {
	margin-right: 5px;
}
.group__desc__disabled {
	svg {
		opacity: 0.5;
	}
}
.correct-save {
	&:hover {
		color: green;
	}
}
.remove-cancel {
	&:hover {
		color: red;
	}
}

.test {
	&__name {
		&_text {
			font-size: 32px;
			font-weight: 600;
			color: #183582;
		}
	}

	&__group {
		&_text {
			font-size: 24px;
			color: #000000;
			font-weight: 600;
		}
	}

	&__info {
		&_row {
			display: flex;
			justify-content: space-between;
		}
	}
}

.test__text {
	font-size: 24px;
	color: #000000;
	font-weight: 600;
}

.test__time {
	width: calc((100% - 16px) / 2);
	margin-right: 16px;
}
.test__access {
	width: calc((100% - 16px) / 2);
}

select {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 8px 12px;
	margin-bottom: 0;
	width: 100%;
}

.test__input {
	background: #fff;
	border-radius: 8px;
	border: 1px solid #0a9ebe;
	padding: 0.625rem 0.75rem;
	margin-bottom: 0;
	width: 100%;
}

.group__desc-correct-wrap {
	display: flex;
	align-items: center;
	transition: all 0.3s;
	color: #0a9ebe;
	&:hover {
		cursor: pointer;
	}
}

.icon {
	display: flex;
	align-items: center;
	width: 24px;
	height: 24px;
	&_save {
		width: 28px;
		height: 28px;
	}
}

.edit {
	&:hover {
		color: blue;
		cursor: pointer;
	}
}
.remove {
	&:hover {
		color: red;
		cursor: pointer;
	}
}
.save {
	&:hover {
		color: green;
		cursor: pointer;
	}
}
.cancel {
	&:hover {
		color: red;
		cursor: pointer;
	}
}
label {
	&:hover {
		cursor: pointer;
	}
}
.test__label-select {
	/* margin-bottom: 11px; */
}

.container_ {
	position: relative;
}
.test__icon_1 {
	width: 180px;
	height: 228px;
	position: absolute;
	top: 15%;
	left: 0%;
	opacity: 0.1;
}

.test__icon_2 {
	width: 100px;
	height: 150px;
	position: absolute;
	top: 30%;
	right: 0%;
	opacity: 0.1;
}
</style>
