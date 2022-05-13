import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import SystemsView from '../views/SystemsView.vue'
import CalendarView from '../views/CalendarView.vue'
import EventsView from '../views/EventsView.vue'
import ReportsView from '../views/ReportsView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import SettingsView from '../views/SettingsView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/systems',
    name: 'system',
    component: SystemsView
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarView
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView
  },
  {
    path: '/user',
    name: 'user',
    component: UserProfileView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
