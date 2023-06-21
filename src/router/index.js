import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '*',
    redirect: '/map'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage'),
    props: true
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/pages/MapPage'),
    props: true
  },
  {
    path: '/map/:id',
    name: 'location',
    component: () => import('@/pages/MapPage'),
    props: (route) => ({ selectedMarkerId: Number(route.params.id) })
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
