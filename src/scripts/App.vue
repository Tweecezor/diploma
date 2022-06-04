<template lang="pug">
  div.test_content
      router-view  
      tooltips
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import store from '@/store'
export default {
	components: {
		tooltips: () => import('../admin/components/tooltips'),
	},
	computed: {
		...mapState('tooltips', {
			status: (state) => state.toolData.active,
		}),
	},
	methods: {
		...mapActions('tooltips', ['hideTooltip']),
	},
	watch: {
		status: function() {
			if (this.status) {
				let timeout
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					this.hideTooltip()
				}, 3000)
			}
		},
	},
}
</script>

<style lang="postcss">
@import 'normalize.css';
@import '../styles/mixins.pcss';
@import '../styles/layout/base.pcss';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
.test_content {
	position: relative;
}
.title-wrap {
	display: flex;
	margin-bottom: 30px;
	@include phones {
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		margin-bottom: 30px;
	}
}
.title {
	color: #414c63;
	font-size: 21px;
	font-weight: 700;
	line-height: 34px;
	margin-right: 50px;
	@include phones {
		margin-bottom: 30px;
	}
}

.btn {
	font-size: 16px;
	font-weight: 600;
	padding: 10px 20px;
	/* background: linear-gradient(to right, #ea7400 0%, #f29400 100%); */
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
	border-radius: 25px;
	color: white;
	border: none;
	cursor: pointer;
	transition: all 0.3s;

	/* from Yana */
	background: linear-gradient(90deg, #001f8b 2.1%, #0ed4ff 100%);
	border-radius: 8px;
	padding: 15px 15px;
	&:hover {
		/* background: linear-gradient(to left, #ea7400 0%, #f29400 100%); */
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
	}
}

.user__img {
	border-radius: 50%;
	object-fit: cover;
	width: 45px;
	height: 45px;
	max-width: 45px;
	max-height: 45px;
}
.content {
	padding: 30px 30px;
	box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
	margin-bottom: 50px;
}

.wrapper__container {
	/* background: url("../images/content/background-main.jpg") no-repeat; */
	background: #f7f8f9;
	/* background: #dbdbdb; */

	min-height: 100vh;
	background-size: cover;
	position: relative;
	z-index: 2;
	&:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		/* background-color: rgba(255, 255, 255, 0.7); */
	}
}
.admin__content {
	position: relative;
	z-index: 5;
}
/* input[type='text'] {
	border-bottom: 2px solid #000;
}
input[type='text']:disabled {
	&:hover {
		border-bottom: 2px solid #000;
	}
}
input[type='text'] {
	&:hover {
		border-bottom: 2px solid #0078cf;
	}
	&:active {
		border-bottom: 2px solid #0078cf;
	}
} */
</style>
