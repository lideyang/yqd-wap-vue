// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store/index'
import VueRouter from 'vue-router'
import routes from '@/router/router'
import localStore from '@/utils/localStore'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueRouter)
Vue.use(VueAxios,axios);
const router = new VueRouter({
  routes,
  store
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  const nextRoute = ['user', 'account'] // 需要登录的页面
  let isLogin = localStore.get('userMsg')  // 判断是否登录，本地存储有用户数据则视为已经登录
  // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
  if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
    if (!isLogin) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
      if (from.name === 'UserLogIn') {
        next('/')
        return
      }
      // 登录后，跳到到当前页面
      router.push("")
    }
  }
  // 已登录状态；当路由到 UserLogIn 时，跳转至 Home
  if (to.name === 'UserLogIn') {
    if (isLogin) {
      next('/')
      return
    }
  }
  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})
new Vue({
  router,
}).$mount('#app')

