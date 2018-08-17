/**
 *  @file user模块
 * @Date: 2018-06-09 12:42:13
 * @Last Modified time: 2018-08-15 14:56:37
 */

import actionCallback from '@/utils/ajaxUtil'
import todo from '@/api/todo'
import * as types from '@/store/mutation-types'

const state = {
  TODO: []
}
const getters = {
  TODO: State => State.TODO
}
const actions = {
  /**
   * todo方法
   *
   * @param {any} { commit }
   * @param {any} options
   */
  async getTodo({ commit }, options) {
    const result = await todo.getTodo(options.data)
    actionCallback(options, result)
    if (result && result.data && result.data.data) {
      commit(types.TODO, result.data.data)
    }
  },
  /**
   * todo方法
   *
   * @param {any} { commit }
   * @param {any} options
   */
  async addTodo({ commit }, options) {
    commit(types.ADDTODO, options.data)
  },
  /**
   * todo方法
   *
   * @param {any} { commit }
   * @param {any} options
   */
  async updateTodo({ commit }, options) {
    commit(types.UPDATETODO, options.data)
  }
}

const mutations = {
  [types.TODO](State, data) {
    State.TODO = data
  },
  [types.ADDTODO](State, data) {
    State.TODO.push(data)
  },
  [types.UPDATETODO](State, data) {
    State.TODO.forEach(val => {
      if (val.id === data.id) {
        val.flag = data.flag
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
