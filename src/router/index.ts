import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wl',
    name: 'WordList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "WordList" */ '../views/WordLists.vue')
  },
  {
    path: '/plans',
    name: 'PlanManage',
    component: () => import(/* webpackChunkName: "PlanManage" */ '../views/plan/PlanManage.vue')
  },
  {
    path: '/plan/:id',
    name: 'Plan',
    component: () => import(/* webpackChunkName: "Plan" */ '../views/plan/Plan.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
