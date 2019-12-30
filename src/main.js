import Vue from 'vue'
import route from './router'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  router: route,
  store: store,
  render: h => h(App)
})
