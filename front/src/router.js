import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/p_about'
import Account from '@/components/p_account'
import Login from '@/components/p_login'
import LoginDemo from '@/components/p_login_demo'
import Logout from '@/components/p_logout'
import Register from '@/components/p_register'
import Index from '@/components/p_index'
import Missing from '@/components/p_missing'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/demo',
      name: 'LoginDemo',
      component: LoginDemo
    },    
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      // beforeEnter: secureRoute,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      // beforeEnter: secureRoute,      
    },
    {
      path: '/*',
      name: 'Missing',
      component: Missing
    }   
  ]
})