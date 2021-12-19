import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sandbox from '../views/Sandbox.vue'
import Api from '../views/Api.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: Sandbox
  },
  {
    path: '/sandbox/:airplane',
    name: 'SandboxAirplane',
    component: Sandbox
  },
  {
    path: '/api',
    name: 'API',
    component: Api
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
