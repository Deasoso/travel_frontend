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
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes
  ]
})
