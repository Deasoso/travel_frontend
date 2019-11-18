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
import home from '@/pages/components/Home/home'
import comment from '@/pages/components/comment'
import productslist from '@/pages/components/productslist'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: home//Index
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
    },{
      path: '/comment',
      name: 'comment',
      component:comment
    }
    ,
    {
      path: '/productslist',
      name: 'productslist',
      component: productslist
    }
  ]
})
