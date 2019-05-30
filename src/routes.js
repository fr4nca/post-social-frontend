import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Posts from './pages/Posts'
import Login from './pages/Login'

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
