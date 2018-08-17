/**
 * @file 获取当前环境信息
 * @Date: 2018-08-17 16:00:41
 * @Last Modified time: 2018-08-17 16:00:41
 */

export default function getEnv() {
  const url = window.location.host
  let env = 'http://api.webhref.com/api/'
  if (/^(test-|dev|localhost)/.test(url)) {
    env = 'http://localhost:3000/' // 开发版本接口地址
  }
  return env
}
