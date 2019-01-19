import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import('./views/Films.vue')
    },
    {
      path: '/people',
      name: 'people',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "people" */ './views/People.vue')
    },
    {
      path: '/species',
      name: 'species',
      component: () => import('./views/Species.vue')
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('./views/Planets.vue')
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('./views/Starships.vue')
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: () => import('./views/Vehicles.vue')
    }
  ]
})
