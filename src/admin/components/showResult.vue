<template lang="pug">
.container
  .wrapper
    //- h1 Мои Настройки
    //- div.settings
    //- .group_item(v-for="group in groups")
    //- pre {{filteredTestByGroup}}
    //- pre {{results}}
    //- pre {{groups}}
    //- pre {{tests}}
    ul.sidebar__list
      li.sidebar__item.sidebar__item_content(
        v-for="(item,pos) in ['Графики','Таблица']" ref="sidebar_item" 
        @click="changeContent(item,pos)"
      )
        div.sidebar__text {{item}}
    
    div(v-if="currentMenuItem === 'Графики'")
      <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height"/>
      <Pie :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height"/>
    
    div(v-if="currentMenuItem === 'Таблица'")
      .group_breadcrumbs(v-if="groups")
        ul.group_breadcrumbs__list
          li.group_breadcrumbs_item.breadcrumb(
            ref="breadcrumb_group",
            v-for="(item, id) in groups",
            @click="changeCurrentGroup(item, id)"
          )
            .breadcrumb__text-wrap
              .breadcrumb__text {{ item.groupName }}
      .group_breadcrumbs
        ul.test_breadcrumbs__list
          li.test_breadcrumbs_item.breadcrumb(
            ref="breadcrumb_test",
            v-for="(item, id) in filteredTestByGroup",
            @click="showCurrentTestResult(item.name, id)"
          )
            .breadcrumb__text-wrap 
              .breadcrumb__text {{ item.name }}
        div(v-if="filteredResultByGroup.length")
          .result__table-wrap
            .result__table-top
              .result__table-head-wrap
                .result__table-head Группа
              .result__table-head-wrap
                .result__table-head ФИО
              .result__table-head-wrap
                .result__table-head Тест
              .result__table-head-wrap
                .result__table-head Оценка
            .result__table-bottom(v-for="result in filteredResultByGroup")
              .result__table-content-wrap
                .result__table-content {{ result.group }}
              .result__table-content-wrap
                .result__table-content {{ result.fullName }}
              .result__table-content-wrap
                .result__table-content {{ result.test_name }}
              .result__table-content-wrap
                .result__table-content {{ result.mark }}
          div.excel(@click="exportDataToExcel")
            MyIcon.icon(iconName="excel")
        div.no_content(v-else)
          myIcon(iconName="noData")
          div.no_content_text Результатов пока нет

    //- pre {{filteredResultByGroup}}
    //- pre {{results}}
      //- nav.settings__nav
      //-   ul.settings__list
      //-     li.settings__item( @click="setCurrentNav(item)" v-for="item in ['Личные данные','Группы','Помощь']") {{item}}
      //- .settings__content
      //-   GROUPS(v-if="currentNav==='Группы'")
</template>

<script>
import GROUPS from './settings_groups'
import MyIcon from './myIcon.vue'
import { mapState, mapActions } from 'vuex'
const xlsx = require('xlsx')
const path = require('path')

import { Bar } from 'vue-chartjs/legacy'
import { Pie } from 'vue-chartjs/legacy'

import {
	Chart as ChartJS,
	BarElement,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale,
} from 'chart.js'

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	CategoryScale
)

// const Chart = require('chart.js')

export default {
	components: {
		GROUPS,
		MyIcon,
		Bar,
		Pie,
	},
	props: {
		chartId: {
			type: String,
			default: 'bar-chart',
		},
		datasetIdKey: {
			type: String,
			default: 'label',
		},
		width: {
			type: Number,
			default: 400,
		},
		height: {
			type: Number,
			default: 200,
		},
		cssClasses: {
			default: '',
			type: String,
		},
		styles: {
			type: Object,
			default: () => {},
		},
		plugins: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			currentNav: 'Личные данные',
			currentGroup: '',
			filteredResultByGroup: [],
			filteredTestByGroup: [],
			currentTestName: '',
			breadcrumbGroup: '',
			breadcrumbTest: '',
			// chartData: {
			// 	labels: ['January', 'February', 'March'],
			// 	datasets: [{ data: [40, 20, 12] }],
			// },
			// chartOptions: {
			// 	responsive: true,
			// },

			chartData: {
				labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
				datasets: [
					{
						backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
						data: [40, 20, 80, 10],
					},
				],
			},
			chartOptions: {
				responsive: true,
				maintainAspectRatio: false,
			},

			showGraph: false,
			currentMenuItem: 'Графики',
			// results: "",
			// groups: "",
			// tests: "",
		}
	},
	methods: {
		...mapActions('results', ['fetchResults']),
		...mapActions('groups', ['fetchGroups']),
		...mapActions('tests', ['fetchTests']),

		changeContent(item, pos) {
			this.currentMenuItem = item
			for (var i = 0; i < this.sidebarItems.length; i++) {
				this.sidebarItems[i].classList.remove('sidebar__item_content__active')
				i === pos
					? this.sidebarItems[i].classList.add('sidebar__item_content__active')
					: ''
			}
		},

		exportToExcel(data, columnNames, workSheetName, filePath) {
			//создаем workBook
			const workBook = xlsx.utils.book_new()
			//собираем данные для файла
			const workSheetData = [columnNames, ...data]
			//создаем workSheet
			const workSheet = xlsx.utils.aoa_to_sheet(workSheetData)
			//добавляем workbook в worksheet
			xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName)
			//запись xls в файл
			xlsx.writeFile(workBook, path.resolve(filePath))
		},

		exportDataToExcel() {
			const columnNames = ['Группа', 'ФИО', 'Тест', 'Оценка']
			const workSheetName = 'test_result'
			const filePath = '../excel/users.xlsx'

			const data = this.filteredResultByGroup.map((item) => {
				return [item.group, item.fullName, item.test_name, item.mark]
			})

			this.exportToExcel(data, columnNames, workSheetName, filePath)
		},

		changeCurrentGroup(group, id) {
			// console.log(group);
			this.currentGroup = group.groupName
			this.filterResultByGroup()
			this.filterTestByGroup()
			this.setActiveBreadcrumbGroup(id)
			for (var i = 0; i < this.breadcrumbTest.length; i++) {
				this.breadcrumbTest[i].firstChild.classList.remove('breadcrumb--active')
			}
		},
		setCurrentNav(item) {
			// console.log(item);
			this.currentNav = item
		},
		filterTestByGroup() {
			this.filteredTestByGroup = this.tests.filter((item) => {
				// console.log(item);
				return item.group === this.currentGroup ? item : ''
			})
		},
		filterResultByGroup() {
			this.filteredResultByGroup = this.results.filter((item) => {
				return item.group === this.currentGroup ? item : ''
			})
			// console.log(this.filteredResultByGroup);
		},
		// filterResultByTestName() {
		//   this.filteredResultByGroup = this.results.filter((item) => {
		//     return item.name === this.currentTestName ? item : "";
		//   });
		// },
		showCurrentTestResult(testName, id) {
			// console.log(testName);
			this.filteredResultByGroup = this.results.filter((item) => {
				// console.log(item);
				return item.test_name === testName ? item : ''
			})
			this.setActiveBreadcrumbTest(id)
		},
		setActiveBreadcrumbGroup(id) {
			for (var i = 0; i < this.breadcrumbGroup.length; i++) {
				if (i === id) {
					this.breadcrumbGroup[i].firstChild.classList.add('breadcrumb--active')
				} else {
					this.breadcrumbGroup[i].firstChild.classList.remove(
						'breadcrumb--active'
					)
				}
			}
		},
		setActiveBreadcrumbTest(id) {
			this.breadcrumbTest = this.$refs.breadcrumb_test
			for (var i = 0; i < this.breadcrumbTest.length; i++) {
				if (i === id) {
					this.breadcrumbTest[i].firstChild.classList.add('breadcrumb--active')
				} else {
					this.breadcrumbTest[i].firstChild.classList.remove(
						'breadcrumb--active'
					)
				}
			}
		},
		sortBreadcrumbGroupList() {
			// this.groups = this.group.
		},
		showGraphic() {
			// filteredResultByGroup
			console.log(this.filteredResultByGroup)

			this.chartData = {
				labels: this.filteredResultByGroup.map((item) => item.fullName),
				datasets: [
					{ data: this.filteredResultByGroup.map((item) => item.mark) },
				],
			}
		},
	},
	mounted() {
		this.sidebarItems = this.$refs.sidebar_item
		this.sidebarItems[0].classList.add('sidebar__item_content__active')

		if (this.results.length) {
			this.currentGroup = this.results[0].group

			this.filteredResultByGroup = this.results
			this.chartData = {
				labels: this.filteredResultByGroup.map((item) => item.fullName),
				datasets: [
					{ data: this.filteredResultByGroup.map((item) => item.mark) },
				],
			}

			console.log('234234')
		}
		// this.showGraphic()
	},
	computed: {
		...mapState('results', {
			results: (state) => state.results,
		}),
		...mapState('groups', {
			groups: (state) => state.groups,
		}),
		...mapState('tests', {
			tests: (state) => state.tests,
		}),
	},
	async created() {
		await this.fetchResults(localStorage.getItem('creatorId'))
		await this.fetchGroups(localStorage.getItem('creatorId'))
		await this.fetchTests(localStorage.getItem('creatorId'))
		this.filteredResultByGroup = this.results
		// const REZ = await this.$axios("http://localhost:3002/api/results");
		// this.results = REZ.data;
		// console.log(this.results);
		// const GROUPS = await this.$axios("http://localhost:3002/api/groups");
		// const TESTS = await this.$axios("http://localhost:3002/api/tests");
		// console.log(results);
		// this.results = RESULTS.data;
		// this.groups = GROUPS.data;
		// // console.log(this.results[0].group);
		// this.tests = TESTS.data;
		// this.results =
		// this.currentGroup = this.results[0].group;
	},
	watch: {
		// currentMenuItem: {
		// 	immediate: true,
		// 	handler(val) {
		// 		if (val === 'Таблица') {
		// 			this.breadcrumbGroup = this.$refs.breadcrumb_group
		// 			for (var i = 1; i < this.breadcrumbGroup.length; i++) {
		// 				this.breadcrumbGroup[i].firstChild.classList.remove(
		// 					'breadcrumb--active'
		// 				)
		// 			}
		// 		}
		// 		if (val === 'Графики') {
		// 			this.showGraphic()
		// 			console.log('1k24')
		// 		}
		// 	},
		// },
	},
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
.settings {
	width: 100%;
	/* height: 500px; */
	/* background-color: white; */
	/* border: 1px solid black; */
	display: flex;
	justify-content: space-between;
}
.settings__nav {
	width: 10%;
	background-color: white;
}
.settings__content {
	width: 85%;
	height: 500px;
	background-color: white;
	border: 2px solid black;
}
.settings__item {
	border-bottom: 2px solid black;
}
.result__table-wrap {
	width: 100%;
	background: white;
	display: flex;
	flex-direction: column;
	border: 1px solid #0a9ebe;
	border-radius: 5px;
	color: #414c63;
	font-size: 22px;
	font-weight: 700;
}
.result__table-top,
.result__table-bottom {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.result__table-top {
	border-bottom: 1px solid #0a9ebe;
}
.result__table-bottom {
	border-bottom: 1px solid #0a9ebe;
	color: #414c63;
	/* font-size: 0.9rem; */
	font-size: 16px;
	opacity: 0.8;
	font-weight: 700;
	&:last-child {
		border-bottom: 0;
	}
}
.result__table-head {
	color: #183582;
}
.result__table-head,
.result__table-content {
	text-align: center;
	/* width: calc(100% / 4); */
	width: 100%;
	padding: 10px;
	word-wrap: break-word;
	/* white-space: pre-wrap;  */
	/* -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto; */
	@include phones {
		padding: 5px;
		font-size: 14px;
	}
}
.result__table-head-wrap,
.result__table-content-wrap {
	width: calc(100% / 4);
	display: flex;
	align-items: center;
	/* border: 1px solid black; */
	border-right: 1px solid #0a9ebe;
	&:last-child {
		border-right: 0;
	}
	@include phones {
		/* font-size: 14px; */
	}
}

.group_breadcrumbs,
.test_breadcrumbs {
	margin-bottom: 20px;
}
.group_breadcrumbs__list,
.test_breadcrumbs__list {
	display: flex;
}
.breadcrumb {
	&:hover {
		cursor: pointer;
		color: #0078cf;
	}
}
.breadcrumb__text-wrap {
	padding: 0.3125rem;
	background: #fff;
	border: 1px solid #efefef;
	margin-right: 0.3125rem;
	border-radius: 6px;
}
.breadcrumb--active {
	color: #db9600;
	border: 1px solid #db9600;
}

.excel {
	display: flex;
	justify-content: flex-end;
}

.no_content {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;

	&_text {
		margin-top: 32px;
		font-size: 32px;
		color: #183582;
		font-weight: 600;
	}
}
.sidebar__item {
	margin-bottom: 5px;
}
.sidebar__item_content__active {
	border-bottom: 3px solid #001f8b;
}

.sidebar__item_content {
	width: 100%;
	padding-bottom: 10px;
	cursor: pointer;
	&:hover {
		border-bottom: 3px solid #001f8b;

		.sidebar__item_content__active {
			border-bottom: 3px solid transparent;
		}
	}
}

.sidebar__list {
	display: flex;
}

.sidebar {
	margin-bottom: 32px;
}
.sidebar__text {
	text-align: center;
}
</style>
