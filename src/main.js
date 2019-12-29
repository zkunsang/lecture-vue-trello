import Vue from 'vue'
import route from './router'

new Vue({
  el: '#app',
  router: route,
  render: h => h({template: '<router-view></router-view>'})
})
