/**
 * postcss  需要同步删除 package.json 文件中的关于postcss配置的内容
 * vue-cli 优先读取package.json文件
 * @Date: 2018-06-03 19:13:06
 * @Last Modified time: 2018-08-15 15:12:46
 */

module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    autoprefixer: { browsers: ['last 2 versions'] },
    precss: {},
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'],
      minPixelValue: 1
    }
  }
}
