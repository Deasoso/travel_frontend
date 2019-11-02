import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import TodoMVC from '@/pages/TodoMVC/index'
import product1 from '@/pages/components/login'
import product from '@/pages/components/product'
import feedback from '@/pages/components/feedback'
import OnePersonalPage from'@/pages/personalPages/OnePersonalPage'
import indent from '@/pages/Indent/indent'
import register from '@/pages/components/register'
import share from '@/pages/components/share'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/TodoMVC',
      name: 'TodoMVC',
      component: TodoMVC
    },
    {
      path: '/login',
      name: 'login',
      component: product1
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
    ,
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/person_1',
      name: 'personalPage',
      component: OnePersonalPage,
    },
    {
      path: '/indent',
      name:'indent',
      component:indent
    }
  ]
})
