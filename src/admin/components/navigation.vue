<template lang="pug">
  nav.nav
    //- .container
    ul.nav__list
      li.nav__item(
        v-for="item in nav"
        :class="{active:  `/${item.route2}`===$route.path || `/${item.route}`===$route.path}"
      )
        a(@click.prevent="clickLink(item.text)").nav__link {{item.text}}
        //- router-link(to="/works") {{item}}
</template>

<script>
export default {
	data() {
		return {
			nav: [
				{
					text: 'Тесты',
					route: '/',
					route2: 'tests',
				},

				{
					text: 'Группы',
					route: 'groups',
				},
				{
					text: 'Результаты',
					route: 'showResult',
				},
				{
					text: 'Вопросы',
					route: 'questions',
				},
				{
					text: 'Управление',
					route: 'settings',
				},
			],
		}
	},
	methods: {
		clickLink(item) {
			switch (item) {
				case 'Обо мне':
					return this.$router.push('/')
				case 'Отзывы':
					return this.$router.push('/reviews')
				case 'Работы':
					return this.$router.push('/works')
				case 'Тесты':
					this.$router.push('/test')
					return this.$router.push('/tests')
				case 'Результаты':
					return this.$router.push('/showResult')
				case 'Группы':
					return this.$router.push('/groups')
				case 'Вопросы':
					return this.$router.push('/questions')
				case 'Управление':
					return this.$router.push('/settings')
				case 'Прохождение':
					return this.$router.push('/publicTests')
			}
		},
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
.nav {
	/* background: #fff; */
	color: black;
	font-size: 16px;
	font-weight: 400;
	/* margin-bottom: 30px; */
	/* border-bottom: 2px solid #efefef; */
	color: #fff;
}
.nav__list {
	display: flex;
	flex-wrap: wrap;
}
.nav__item {
	/* border-bottom: 2px solid white; */
	border-bottom: 2px solid transparent;
	&:hover {
		/* color: #0078cf; */
		/* border-bottom: 2px solid #0078cf; */
		color: #fff;
		/* font-weight: bold; */
		/* font-weight: 500; */
	}
	&-active {
		/* border-bottom: 2px solid #0078cf; */
		color: #fff;
		font-weight: bold;
	}
}
.nav__link {
	display: block;
	padding: 0 20px;
	font-size: 20px;
	@include tablets {
		font-size: 16px;
	}
	/* padding:0 20px; */
}
.active {
	/* color: #0078cf; */
	/* border-bottom: 2px solid #0078cf; */
	color: #fff;
	font-weight: bold;
}
</style>
