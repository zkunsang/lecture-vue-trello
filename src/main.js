import Vue from 'vue'
import route from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router: route,
  render: h => h(App)
})
