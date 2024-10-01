import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import menu from '../view/menu.vue'
import about from '../view/about.vue'
import menudetail from '../view/menudetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/menu/:id',
      name: 'menudetail',
      component: menudetail
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
  ]
})

export default router
