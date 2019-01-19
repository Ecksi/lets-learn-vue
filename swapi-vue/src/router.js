import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('@/components/pages/Films.vue')
    },
    {
      path: '/people',
      name: 'people',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "people" */ '@/components/pages/People.vue')
    },
    {
      path: '/species',
      name: 'species',
      component: () => import('@/components/pages/Species.vue')
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('@/components/pages/Planets.vue')
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('@/components/pages/Starships.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('@/components/pages/Vehicles.vue')
    }
  ]
})
