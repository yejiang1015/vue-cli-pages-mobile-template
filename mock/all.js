/**
 * @file mock 接口和数据
 * @Last Modified time: 2018-07-29 15:33:49
 */
module.exports = {
  name: 'vue-cli-service-template-todo-list',
  apis: [
    {
      name: '获取当前已有todolist',
      url: '/apis/getTodo',
      data: {
        retCode: 1000,
        retMessage: '调用成功',
        data: [
          {
            id: Math.floor(Math.random() * 1000000).toString(),
            title: 'todo01',
            flag: true
          },
          {
            id: Math.floor(Math.random() * 1000000).toString(),
            title: 'todo02',
            flag: false
          },
          {
            id: Math.floor(Math.random() * 1000000).toString(),
            title: 'todo03',
            flag: true
          }
        ]
      }
    }
  ]
}
