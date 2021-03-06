/**
 * @file 日期操作函数
 *
 * @Author: haiyangJ
 * @Date: 2016-10-27 10:27:42
 */

const dateUtil = {
  /**
   * 根据传入的日期，返回指定格式的日期
   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
   例子：
   (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
   (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
   *
   * @param {Date} date
   * @param {String} fmt
   * @return string
   */
  fmtDate: (val, fmt) => {
    let date;
    if (new Date(val)) {
      date = new Date(val);
    } else {
      // IE 格式化字符串时间 NAN 解决办法
      date = new Date(Date.parse(val.replace(/-/g, '/')));
    }
    let lFmt = fmt;
    const o = {
      'M+': date.getMonth() + 1, // 月份
      'd+': date.getDate(), // 日
      'h+': date.getHours(), // 小时
      'm+': date.getMinutes(), // 分
      's+': date.getSeconds(), // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      S: date.getMilliseconds() // 毫秒
    };

    if (/(y+)/.test(lFmt)) {
      lFmt = lFmt.replace(
        RegExp.$1,
        `${date.getFullYear()}`.substr(4 - RegExp.$1.length)
      );
    }

    // for (const k in o) {
    //   if (new RegExp(`(${k})`).test(lFmt)) {
    //     lFmt = lFmt.replace(RegExp.$1, (RegExp.$1.length === 1) ?
    //       (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    //   }
    // }
    Object.entries(o).forEach(obj => {
      if (new RegExp(`(${obj[0]})`).test(lFmt)) {
        lFmt = lFmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? obj[1]
            : `00${obj[1]}`.substr(`${obj[1]}`.length)
        );
      }
    });

    return lFmt;
  },

  /**
   * 根据传入的日期天数，返回新的日期
   *
   * @param {Date} date
   * @param {Number} num
   * @param {String} type 'd'：返回日期对象，默认。 或者返回指定格式的字符串，如'yyyy-MM-dd'
   * @returns {*}
   */
  addDate: (date, num, type = 'date') => {
    const curDate = date.getDate();
    date.setDate(curDate + Number(num));
    return type === 'date' ? date : dateUtil.fmtDate(date, type);
  },

  /**
   * 根据传入的日期年数，返回新的日期
   *
   * @param {Date} date
   * @param {Number} num
   * @param {String} type 'd'：返回日期对象，默认。 或者返回指定格式的字符串，如'yyyy-MM-dd'
   * @returns {*}
   */
  addFullYear: (date, num, type = 'date') => {
    const curYear = date.getFullYear();
    date.setFullYear(curYear + Number(num));
    return type === 'date' ? date : dateUtil.fmtDate(date, type);
  },

  /**
   * 根据传入的两个时间计算年龄
   *
   * @param {String} born 出生日期
   * @param {String} now 当前时间
   * @return {*|string}
   */
  getAge: (born, now = new Date()) => now.getFullYear() - born.getFullYear()
};

export default dateUtil;
