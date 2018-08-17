/**
 * @file 配置文件，提供各种接口的域名、判断当前浏览器的系统，可新增
 */

// 当前浏览器
const ua = window.navigator.userAgent.toLocaleLowerCase()
const isIos = /iphone|ipod|ipad/.test(ua)
const isIpad = /ipad/.test(ua)
const isWx = /micromessenger/.test(ua)
const isAndroid = /android/.test(ua)
const isInTxhApp = /from:txhapp/.test(ua)

// 当前模块名
let MODULE_NAME = null
try {
  MODULE_NAME = window.location.pathname.match(/(^\/)?([\w-]*)+(.html$){1}/).splice(2, 1)
} catch (error) {
  MODULE_NAME = ['index']
}

export { MODULE_NAME, isIos, isIpad, isWx, isAndroid, isInTxhApp }
