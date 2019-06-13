import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
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
          path: 'study',
          name: 'study',
          component: () => import('../views/Study.vue'),
          beforeEnter (to, from, next) {
            let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : ''
            if (!userInfo.name) {
              next('/login')
            } else {
              next()
            }
          }
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
      path: '/login',
      component: () => import('../components/BeforeLogin.vue')
    },
    {
      path: '/phoneLogin',
      component: () => import('../views/PhoneLogin.vue')
    },
    {
      path: '/phoneRegister',
      component: () => import('../views/PhoneRegister.vue')
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

export default router
