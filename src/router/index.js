import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
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
      path: '/propsTester',
      name: 'propsTester',
      component: PropsTester
    },
    {
      path: '/demo',
      component: Demo,
      meta: { requireAuth: true },
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
