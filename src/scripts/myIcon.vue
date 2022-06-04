<template>
	<component :is="iconName" />
</template>

<script>
import * as icons from '../images/icons/index'

export default {
	name: 'Icon',
	components: {
		...icons,
	},
	props: {
		iconName: {
			required: true,
			type: String,
			validator(name) {
				return Object.keys(icons).includes(name)
			},
		},
	},

	setup() {
		return {}
	},
}
</script>

<style lang="scss" scoped></style>
