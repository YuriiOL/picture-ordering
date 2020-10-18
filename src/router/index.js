import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main'
    },
    component: Home
  },
  {
    path: '/pictures',
    name: 'PicturesPage',
    meta: {
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "PicturesPage" */ '../views/PicturesPage.vue')
  },
  {
    path: '/borders',
    name: 'BordersPage',
    meta: {
      layout: 'main'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "BordersPage" */ '../views/BordersPage.vue')
  },
  {
    path: '/titles',
    name: 'TitlesPage',
    meta: {
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "PicturesPage" */ '../views/TitlesPage.vue')
  },
  {
    path: '/colors',
    name: 'ColorsPage',
    meta: {
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "PicturesPage" */ '../views/ColorsPage.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
