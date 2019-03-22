import App from '@/pages/home/app/app.vue'

export default [{
  path: '/',
  component: App,
  children: [
    {
      path: '/',
      component: r => require.ensure([], () => r(require('@/pages/home/index/index.vue')), 'index'),
      meta:{
        title: '首页'
      }
    },
    {
      path: '/account/login',
      component: r => require.ensure([], () => r(require('@/pages/account/login/login.vue')), 'login'),
      meta:{
        title: '登录'
      }
    }, {
      path: '/user/center',
      component: r => require.ensure([], () => r(require('@/pages/user/center/center.vue')), 'userCenter'),
      meta:{
        title: '个人中心'
      }
    }]
}]
