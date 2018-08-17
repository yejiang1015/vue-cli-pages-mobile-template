const glob = require('glob')

module.exports = {
  getEntries(globPath) {
    let entries = {}
    let tmp // 文件夹数组[1] home || login
    glob.sync(globPath).forEach(entry => {
      tmp = entry.split('/').splice(-3)
      entries[tmp[1]] = {
        entry: `src/pages/${tmp[1]}/main.js`,
        template: `src/pages/${tmp[1]}/index.ejs`
        // 是否要把打包之后的html文件同意放到一个文件夹里面
        // filename: `pages/${tmp[1]}.html`
      }
    })
    return entries
  }
}
