/**
 * Created by helina620 on 17/1/11.
 */


/**
 *  点赞、收藏页面 数字大于万时显示'万'
 */

const changeNum = {

  overWan: (num) => {
    const temp = `${num}`;
    if (temp.length > 4) {
      const index = temp.length - 4;
      const isAdd = temp.charAt(index) * 1;
      let newNum = 0;
      if (isAdd > 4) {
        newNum = `${(temp.substr(0, index) * 1) + 1}万`;
      } else {
        newNum = `${temp.substr(0, index)}万`;
      }
      return newNum;
    }
    return num;
  },

};


export default changeNum;
