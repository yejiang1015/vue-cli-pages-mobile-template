module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'module'
  },
  env: {
    node: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  plugins: ['html', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 分号
    // 函数声明的括号前添加一个空格
    'space-before-function-paren': 0,
    'import/first': 0,
    // 空大括号
    'no-empty-pattern': 0
  },
  // 指定全局变量
  globals: {
    window: true,
    wx: true,
    process: true,
    console: true,
    require: true,
    Promise: true
  }
};
