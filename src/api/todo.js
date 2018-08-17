/**
 * @file 用户相关接口
 * @Date: 2018-06-09 11:04:37
 * @Last Modified time: 2018-08-15 14:56:20
 */
import axios from '@/axios'

export default {
  /**
   * “todo”接口
   *
   * @param {any} data 请求数据
   * @returns 后台返回的数据
   */
  getTodo(data) {
    return axios.get('/apis/getTodo', {
      params: data
    })
  }
}
