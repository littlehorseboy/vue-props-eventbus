import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import IntroBranch from '@/pages/home/IntroBranch'
import Demo from '@/pages/Demo'
import BasicControl from '@/pages/demo/BasicControl'
import PropsTester from '@/pages/demo/PropsTester'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // {
    //   path: '/propsTester',
    //   name: 'propsTester',
    //   component: PropsTester
    // },
    {
      path: '/home',
      component: Home,
      // meta: { requireAuth: true },
      children: [
        {
          path: '',
          name: 'home',
          component: BasicControl
        },
        {
          path: 'welcome',
          name: 'welcome',
          component: BasicControl
        },
        {
          path: 'hello',
          name: 'hello',
          component: PropsTester
        },
        {
          path: 'introBranch/:branchName',
          name: 'introBranch',
          component: IntroBranch
        }
      ]
    },
    {
      path: '/demo',
      component: Demo,
      // meta: { requireAuth: true },
      children: [
        {
          path: '',
          name: 'demo',
          component: BasicControl
        },
        {
          path: 'basicControl',
          name: 'basicControl',
          component: BasicControl
        },
        {
          path: 'propsTester',
          name: 'propsTester',
          component: PropsTester
        }
      ]
    }
  ]
})
