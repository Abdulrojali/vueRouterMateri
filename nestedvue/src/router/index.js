import { createRouter, createWebHistory } from 'vue-router'
import dashboardView from '../components/layouts/dashboard.vue'
import loginMenu from '../components/layouts/login.vue'
import home from '../view/home.vue'
import menu from '../view/menu.vue'
import about from '../view/about.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loginMenu
    },
    {
      path: '/',
      name: 'dashboard',
      component: dashboardView,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'menu',
          name: 'menu',
          component: menu
        },
        {
          path: 'about',
          name: 'about',
          component: about
        }
      ]
    }
  ]
})

export default router
