/**
 * @file 函数库
 *
 * @Author: haiyangJ
 * @Date: 2016-10-27 10:27:42
 */

import { isIos } from 'config/index';

/**
 * 设置title
 * @param {String} name 标题
 */
export const setPageTitle = (name) => {
  window.document.title = name;

  // hack ios设备无法修改title
  if (isIos) {
    const iFrame = window.document.createElement('iframe');
    iFrame.src = '//m.baidu.com/favicon.ico';
    iFrame.style.display = 'none';
    iFrame.onload = () => {
      setTimeout(() => {
        iFrame.remove();
      }, 20);
    };
    window.document.body.appendChild(iFrame);
  }
};

export const test = () => {};
