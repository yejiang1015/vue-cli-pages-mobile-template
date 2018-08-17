/**
 *  @file 项目入口文件
 * @Date: 2018-08-15 11:12:14
 * @Last Modified time: 2018-08-15 14:52:40
 */

import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import { MODULE_NAME } from '@/config'
import router from './router'
import axios from './axios'
import store from './store'
// import filtes from './filters/index'

let moduleNameApp = null
try {
  const mName = MODULE_NAME
  moduleNameApp = require(`@/pages/${mName}/app.vue`)
} catch (e) {
  console.log(new Error(e))
}

// Object.keys(filtes).forEach(key => {
//   Vue.filter(key, filtes[key])
// })

/**
 * fastClick
 * 解决Safari浏览器点击延迟
 */
const FastClick = require('fastclick')

FastClick.attach(window.document.body)

/**
 *
 * fix IOS手机有时需要点击两次才能生效，参考链接
 * https://github.com/ftlabs/fastclick/issues/506
 * 针对有问题的标签添加click-me样式
 */
window.document.addEventListener('touchend', e => {
  if (e.target.classList.contains('click-me')) {
    e.target.blur()
  }
})

sync(store, router)

Vue.prototype.$http = axios
const Application = new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(moduleNameApp.default)
})

export default Application
