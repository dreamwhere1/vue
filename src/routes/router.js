import Vue from 'vue'
import Router from 'vue-router'
import { Toast } from 'vant'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
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
          meta: {
            requirePath: true
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
      component: () => import('../components/BeforeLogin.vue'),
      meta: {
        requireId: true
      }
    },
    {
      path: '/phoneLogin',
      component: () => import('../views/PhoneLogin.vue'),
      meta: {
        requireId: true
      }
    },
    {
      path: '/phoneRegister',
      component: () => import('../views/PhoneRegister.vue')
    },
    {
      path: '/changeSelf',
      name: 'changeSelf',
      component: () => import('../components/ChangeInformation.vue'),
      meta: {
        requirePath: true
      }
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

router.beforeEach((to, from, next) => {
  let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : ''
  if (to.meta.requirePath) {
    if (!userInfo.id) {
      next('/login')
    } else {
      next()
    }
  } else if (to.meta.requireId && userInfo.id) {
    Toast.fail('请先退出登录!')
    setTimeout(() => {
      next('/changeSelf')
    }, 2000)
  } else {
    next()
  }
})

export default router
