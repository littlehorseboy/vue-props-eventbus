// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import toastrSetup from './setup/toastrSetup'
import eventBus from './setup/eventBus'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap'

Vue.config.productionTip = false

toastrSetup()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      bus: eventBus
    }
  },
  router,
  components: {
    App
  },
  template: '<App/>'
})
