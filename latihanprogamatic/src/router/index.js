import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import about from '../view/about.vue'
import list from '../view/list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})

export default router
