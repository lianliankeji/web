export const moduleA = {
  namespaced: true,
  state: {
    countA: 0
  },
  mutations: {
    COUNT_INCREASE(state) {
      // 这里的 `state` 对象是模块的局部状态
      alert(1111)
    }
  },

  getters: {
    doubleCount(state) {
      return state.countA * 2
    },
    sumWithRootCount(state, getters, rootState) {
      return state.countA + rootState.count
    }
  },

  actions: {
    incrementIfOddOnRootSum({
      state,
      commit,
      rootState
    }) {
      if ((state.countA + rootState.count) % 2 === 1) {
        commit('COUNT_INCREASE')
      }
    }
  }
}