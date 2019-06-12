import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../views/Home.vue')
        },
        {
          path: 'center',
          name: 'center',
          component: () => import('../views/Center.vue')
        },
        {
          path: '',
          redirect: '/index'
        }
      ]
    },
    {
      path: '/study',
      component: () => import('../views/Study.vue')
    },
    {
      path: '/search',
      component: () => import('../components/Search.vue')
    },
    {
      path: '/callApp',
      component: () => import('../components/Callapp.vue')
    },
    {
      path: '/course',
      component: () => import('../views/Course.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
