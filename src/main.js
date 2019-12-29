import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Login = {template: '<div>Login Page</div>'}
const NotFound = {template: '<div>Page not found</div>'}

const routes = [
  {path: '/', component: App},
  {path: '/login', component: Login},
  {path: '*', component: NotFound}
]

const route = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  el: '#app',
  router: route,
  render: h => h({template: '<router-view></router-view>'})
})
