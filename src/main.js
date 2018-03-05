// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// ========================
// Router
// ========================
import VueRouter from 'vue-router'
import routes from './routes'

// ========================
// Resource
// ========================
import VueResource from 'vue-resource'

// ========================
// Events
// ========================
import VueEvents from './plugins/events'
Vue.use(VueEvents)

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
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
