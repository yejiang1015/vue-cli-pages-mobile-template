/**
 * @file axios数据请求插件
 * @Date: 2018-06-05 22:12:29
 * @Last Modified time: 2018-08-15 15:03:00
 */

import axios from 'axios'
import getEnv from './getEnv'

// 创建axios实例
const instance = axios.create({
  baseURL: getEnv(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

// request过滤器
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response过滤器
instance.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

export default instance
