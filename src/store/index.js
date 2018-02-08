import Vuex from 'vuex'
import Vue from 'vue'

import * as types from './mutation-types'
import {
	moduleA
} from './modules/home.js'
import {
	moduleB
} from './modules/production.js'

Vue.use(Vuex);


export default new Vuex.Store({

	state: {
		count: 1,
		id: 0,
		todos: [{
			id: 1,
			text: '第一',
			done: true
		}, {
			id: 2,
			text: '第二',
			done: false
		}, {
			id: 3,
			text: '第三',
			done: true
		}]
	},
	getters: {
		doneTodo(state) {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			return getters.doneTodo.length
		}
	},
	mutations: {
		[types.COUNT_INCREASE](state, payloads) {
			state.count += payloads.amount
		}
	},
	actions: {
		actionA(context, payload) {
			console.log(context)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit(types.COUNT_INCREASE, payload)
					resolve()
				}, 1000)
			})
		}
	},

	modules: {
		a: moduleA,
		b: moduleB
	}

})