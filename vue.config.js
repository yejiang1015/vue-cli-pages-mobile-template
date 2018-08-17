const mockRouter = require('./mock')
const getEntries = require('./config').getEntries

module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  pages: getEntries('src/pages/**/main.js'),
  // 在production环境下 设置为 false 不生成 .map文件
  productionSourceMap: process.env.NODE_ENV !== 'production',
  // TODO 需要同时配置多个时...
  chainWebpack: config => {
    config.module
      .rule('ejs')
      .test(/\.ejs$/)
      // See https://www.jianshu.com/p/ae0c46c8e99c 由ejs-compiled-loader替换而来
      .use('underscore-template-loader')
      .loader('underscore-template-loader')
      .end()
  },
  devServer: {
    port: 3000,
    before: function(app) {
      mockRouter(app)
    }
  }
}
