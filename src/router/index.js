import Vue from 'vue'
import Router from 'vue-router'

const HomeMobile = ((resolve) => {
	import('@/containers/indexMobile.vue').then(module => {
		resolve(module)
	})
})

const Home = ((resolve) => {
	import('@/containers/index.vue').then(module => {
		resolve(module)
	})
})



Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{
		path: '/',
		name: 'home',
		component: window.screen.width < 768 ? 　HomeMobile : Home
	}],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})