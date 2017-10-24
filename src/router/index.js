import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/index.vue'

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 80,
			y: 0
		}
	}
})