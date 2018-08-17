import Vue from 'vue'
import Vuex from 'vuex'

import todo from './module/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    todo
  }
})
