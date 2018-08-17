# 基于 vue-cli 3.0.0 多页面架构

## webapp 架构

### 项目启动

\*. See to packag.json

### 目录结构

--- docs ---> 规范文档
--- mock ---> 自定义 mock 数据
--- public ---> vue-cli 默认公共文件
--- src ---> 核心文件
------- api ---> 抽象异步请求接口
------- assets ---> 静态资源
------- axios ---> ，
------- components ---> 项目公共组件
------- config ---> 项目配置辅助
------- ejs-include ---> 模板核心文件
------- filters ---> vue 公共过滤器
------- pages ---> 项目页面目录
------- router ---> 项目路由文件
------- store ---> 项目状态管理文件
------- utils ---> 公共函数
------- main.js ---> 核心入口文件
--- 其他 ---> 配置文件

### 开发说明

### 浏览器 URL 地址

http://localhost:3000/pages/page.html#/component-router
http://localhost:3000/index.html#/home

### git 操作

打 tags

```js
// https://blog.csdn.net/albertsh/article/details/63253614
git tag v0.1.0 -m "release 0.1.0 version"

git push origin v0.1.0
git push origin -–tags
```
