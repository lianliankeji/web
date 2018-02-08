export const moduleB = {
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCounts(state) {
      return state.count * 2
    },
    sumWithRootCounts(state, getters, rootState) {
      return state.count + rootState.count
    }
  },

  actions: {
    incrementIfOddOnRootSums({
      state,
      commit,
      rootState
    }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}