// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import routes from './routes'

import VueResource from 'vue-resource'
import VueEvents from './plugins/events'
import store from './store/index'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueEvents)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: `
    <div id="app">
      <!-- component will be showed here -->
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `
})
