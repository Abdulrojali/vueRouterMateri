import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../view/home.vue'
import about from '../view/about.vue'
import menu from '../view/menu.vue'
import menudetail from '../view/menudetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/about',
      name: 'about',
      component: about
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
  ]
})

export default router
