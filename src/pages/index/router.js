import home from './view/home'

export default {
  path: '/',
  component: home,
  redirect: 'home',
  children: [
    {
      name: 'home',
      path: '/home',
      component: home
    },
    {
      path: '/forget',
      component: r => require(['./view/forget/'], r)
    }
  ]
}
