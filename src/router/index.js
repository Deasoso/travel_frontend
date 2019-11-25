import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/components/Home/home'
import login from '@/pages/components/Login/Login'
import person1 from '@/pages/components/Person/PersonalPage1'
import comment from '@/pages/components/comment/comment'
import history from '@/pages/components/comment/history'
import test from '@/pages/components/Login/test'
import Login from '@/pages/components/Login/Login'
import feedback from '@/pages/components/Feedback/feedback'
import fbnew from '@/pages/components/Feedback/feedback1'
import Feedback1 from '@/pages/components/oldviews/feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: home
    },
   {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/fbnew',
      name: 'fbnew',
      component: fbnew
    },
    {
      path: '/Feedback1',
      name: 'Feedback',
      component: Feedback1
    },
    {
      path: '/moban',
      name: 'Moban',
      component: moban
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/person',
      name: 'Person1',
      component: person1
    },
    {
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
    },
  ]
})
