import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import TodoMVC from '@/pages/TodoMVC/index'
import product from '@/pages/components/product'
import feedback from '@/pages/components/feedback'
import OnePersonalPage from'@/pages/personalPages/OnePersonalPage'

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
    }
    ,
    {
      path: '/product',
      name: 'product',
      component: product
    }
    ,
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/person_1',
      name: 'personalPage',
      component: OnePersonalPage
    }
  ]
})
