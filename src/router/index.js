import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About'),
    props: true
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/pages/Map'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
