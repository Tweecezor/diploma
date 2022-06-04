<template lang="pug">
.container_settings
  ul.tests__list(v-if="tests.length")
    li.tests__item.test(v-for="test in tests")
      randomIcon.test__icon_1
      randomIcon(:min="4" :max="5").test__icon_2
      CURRENT_TEST(:test="test")
  div.no_content(v-else)
    myIcon.no_content_icon(iconName="notFound")
    div.no_content_text Тесты еще не созданы
        
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CURRENT_TEST from './settings__currentTest'
import randomIcon from './randomIcon.vue'
import myIcon from './myIcon.vue'
// import axios from "axios";
export default {
	components: {
		CURRENT_TEST,
		randomIcon,
		myIcon,
	},
	data() {
		return {
			// testTime: "",
			testAccess: false,
		}
	},
	methods: {
		...mapActions('helped', ['changeShowGroupStatus']),
		...mapActions('groups', ['fetchGroups']),
		...mapActions('tests', ['fetchTests']),
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
	},
	async mounted() {},
	async created() {
		await this.fetchTests(localStorage.getItem('creatorId'))
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

.tests__list {
	display: flex;
	flex-wrap: wrap;
}
.tests__item {
	width: calc((100%-32px) / 3);
	margin-right: 16px;
	margin-bottom: 30px;
	&:nth-child(3n) {
		margin-right: 0;
	}
	@include phones {
		width: 100%;
		margin-right: 0;
	}
}
.test {
	/* padding: 50px 20px; */
	background-color: white;
	/* border: 1px solid black; */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2%;
	border-radius: 5px;
	padding: 30px;
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.08);
	border-radius: 10px;
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
.test {
	position: relative;
	overflow: hidden;
	&:hover {
		.test__icon_1 {
			transform: scale(1.1);
		}
		.test__icon_2 {
			transform: scale(1.1);
		}
	}
}
.no_content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&_icon {
		width: 700px;
		height: 600px;
	}
	&_text {
		font-size: 32px;
		font-weight: 600;
		color: #183582;
	}
}
</style>
