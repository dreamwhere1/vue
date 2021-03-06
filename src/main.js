import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import { Swipe, SwipeItem, Toast, Tab, Tabs, PullRefresh, Dialog } from 'vant'

import './style/base.scss'

Vue.use(Swipe).use(SwipeItem).use(Toast).use(Tab).use(Tabs).use(PullRefresh).use(Dialog)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
