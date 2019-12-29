import Vue from 'vue'
import App from './App.vue'

const Login = {template: '<div>Login Page</div>'}

const routes = {
  '/': App,
  '/login': Login
}

new Vue({
  el: '#app',
  computed: {
    VueComponent1() {
      console.log(window.location);
      return routes[window.location.pathname] || {template: '<div>Page not found</div>'}
    }
  },
  render(h) {
    return h(this.VueComponent1)
  }
})
