import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/components/Home/home'
import moban from '@/pages/moban'
import login from '@/pages/components/Login/Login'
<<<<<<< Updated upstream
import person1 from '@/pages/components/Person/PersonalPage1'
=======
import comment from '@/pages/components/comment/comment'
import history from '@/pages/components/comment/history'
import test from '@/pages/components/Login/test'
>>>>>>> Stashed changes
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
    {
<<<<<<< Updated upstream
      path: '/person',
      name: 'Person1',
      component: person1
=======
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/test',
      name: 'test',
      component: test
>>>>>>> Stashed changes
    },
  ]
})
