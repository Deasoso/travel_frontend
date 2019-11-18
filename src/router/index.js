import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/components/Home/home'
import moban from '@/pages/moban'
import login from '@/pages/components/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: home
    },
    {
      path: '/moban',
      name: 'Moban',
      component: moban
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
  ]
})
