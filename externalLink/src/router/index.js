import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import icon from '../view/icon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    }
  ]
})

export default router
