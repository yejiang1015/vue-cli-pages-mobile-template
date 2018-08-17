/**
 * @file action 中处理请求的回调函数
 * @Author: yejiang
 * @Date: 2018-06-09 11:22:02
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-06-09 13:47:54
 */

const actionCallback = (options, response) => {
  if (response.status === 200) {
    if (options && options.success) {
      options.success(response.data);
    }
    return;
  }
  if (options && options.error) {
    options.error(response);
  }
};

export default actionCallback;
