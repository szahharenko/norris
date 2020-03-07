import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    likes: []
  },
  getters: {
    likes (state) {
      const likes = state.likes
      return likes
    },
    categories (state) {
      const categories = state.categories
      return categories
    }
  },
  mutations: {
    set (state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    likes ({ commit }, data) {
      commit('set', { type: 'likes', items: data })
    },
    categories ({ commit }, data) {
      commit('set', { type: 'categories', items: data })
    }
  }
})

export default store
