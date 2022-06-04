<template lang="pug">
header.header
  .header-container.container
    Navigation
    //- pre {{userAvatar}}
    .header__info
      .user
        .user__avatar
          img.user__img(:src="userAvatar")
        div
          .user__name
            span {{ `${user.name} ${user.surname}` }}
          .header__title-wrap
            h1.header__title Преподаватель
      .header__logout(@click="logout")
        myIcon.header__logout_icon(iconName="logout")
        a.header__logout-link Выход
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { getAbsoluteImgPath } from '@/helpers/photos'
import store from '@/store'
import Navigation from './navigation.vue'
import myIcon from './myIcon.vue'
export default {
	data() {
		return {
			userAvatar: '',
		}
	},
	components: {
		Navigation,
		myIcon,
	},
	methods: {
		...mapActions('user', ['userLogout']),
		...mapActions('tooltips', ['showTooltip']),
		async logout() {
			try {
				await this.userLogout()
				delete this.$axios.defaults.headers.common['Authorization']
				localStorage.removeItem('token')
				store.commit('user/LOGOUT__USER')
				this.showTooltip({
					type: 'success',
					text: 'Скоро увидимся',
				})
				this.$router.push('/login')
			} catch (error) {
				this.showTooltip({
					type: 'error',
					text: error.message,
				})
			}
		},
	},
	computed: {
		...mapState('user', {
			user: (state) => state.user,
		}),
	},
	created() {
		this.userAvatar = getAbsoluteImgPath(this.user.photoUser)
		// console.log(this.$axios);
	},
	watch: {
		user() {
			// this.currentWork = {...this.work};
			this.userAvatar = getAbsoluteImgPath(this.user.photoUser)
			// this.tagArray = this.work.techs.split(',');
		},
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');

.header {
	/* background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%); */
	/* background-image: linear-gradient(90deg, #373556 0, #434573); */
	background: #283b63;
	/* background: #011b76; */
	/* opacity: 0.8; */
	color: #fff;
	padding: 24px 0;
	margin-bottom: 56px;
}
.header-container {
	display: flex;
	/* color: white; */
	/* padding: 17px 0px; */
	align-items: center;
	justify-content: space-between;
}
.header__info {
	display: flex;
	align-items: center;
}
.user {
	display: flex;
	align-items: center;
	/* border-right: 1px solid white; */
	padding-right: 30px;
	margin-right: 30px;
	position: relative;
	/* border-height: 70%; */
	&::after {
		content: '';
		position: absolute;
		right: 0;
		width: 1px;
		height: 70%;
		background: #fff;
	}
	&__avatar {
		margin-right: 12px;
	}
	&__name {
		font-size: 24px;
	}
}

/* .user {
	display: flex;
	align-items: center;
}
.user__avatar {
	overflow: hidden;
	margin-right: 20px;
}
.user__img {
	border-radius: 50%;
	object-fit: cover;
	width: 45px;
	height: 45px;
	max-width: 45px;
	max-height: 45px;
}
.user__name {
	font-size: 18px;
	font-weight: 400;
	margin-right: 20px;
}
*/
.header__title {
	font-size: 14px;
	font-weight: 400;
	opacity: 0.5;
	@include phones {
		display: none;
	}
}
.header__title-wrap {
	align-items: center;
	display: flex;
}
.header__logout {
	display: flex;
	align-items: center;
	cursor: pointer;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
	&_icon {
		widht: 32px;
		height: 32px;
		margin-right: 16px;
	}
}
.header__logout-link {
}
</style>
