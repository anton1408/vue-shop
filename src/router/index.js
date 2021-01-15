import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index'

// Layouts
import LayoutMain from '@/layout/LayoutMain'
import LayoutAuthentication from '@/layout/LayoutAuthentication'

Vue.use(Router)

// const ifAuthenticated = (to, from, next) => {
//   console.log('ifAuthenticated')
// }

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    component: LayoutMain,
    // beforeEnter: ifAuthenticated,
    children: [{
      path: '',
      component: () => import('@/views/Home')
    }, {
      path: 'about',
      component: () => import('@/views/About')
    }]
  }, {
    path: '/login',
    component: LayoutAuthentication,
    children: [{
      path: '',
      component: () => import('@/views/Login')
    }]
  }, {
    path: '/registration',
    component: LayoutAuthentication,
    children: [{
      path: '',
      component: () => import('@/views/Registration')
    }]
  }]
})

export default router
