/**
 * @file 路由文件
 *
 * @Author: haiyangJ
 * @Date: 2016-10-27 10:27:42
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import { MODULE_NAME } from '@/config/index'
// import store from 'store';

let moduleNameRouter = null
try {
  const mName = MODULE_NAME
  moduleNameRouter = require(`@/pages/${mName}/router.js`).default
} catch (e) {
  console.log(new Error(e))
}

Vue.use(VueRouter)
const router = new VueRouter({
  // hash、abstract、history
  mode: 'hash',
  routes: [
    moduleNameRouter
  ]
})
/**
 * 全局钩子
 *
 * @param {Object} to 目标路由
 * @param {Object} from 当前路由
 * @param {Function} from 回调函数
 */
router.beforeEach((to, from, next) => {
  // if (!store.state.userId && MODULE_NAME[0] !== 'login') {
  //   window.location.href = './login.html'; // 如果浏览器里没有用户数据则退出重新登录
  // }
  window.scrollTo(0, 0)
  next()
})

export default router
