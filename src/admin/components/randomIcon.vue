<template lang="pug">
   MyIcon.test__icon(:iconName="generateIconName")
</template>

<script>
import MyIcon from './myIcon.vue'
export default {
	components: {
		MyIcon,
	},
	props: {
		max: {
			type: Number,
			default: 3,
		},
		min: {
			type: Number,
			default: 1,
		},
	},
	computed: {
		randomInteger() {
			// случайное число от min до (max+1)
			let min = this.min
			let max = this.max
			let rand = min + Math.random() * (max + 1 - min)
			return Math.floor(rand)
		},

		generateIconName() {
			return `test_bg_${this.randomInteger}`
		},
		getIconNumber() {
			return this.generateIconName.split('_')[2]
		},
	},
}
</script>

<style lang="scss" scoped></style>
