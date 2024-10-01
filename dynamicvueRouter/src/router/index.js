import { createRouter, createWebHistory } from 'vue-router'
import home from '../view/home.vue'
import list from '../view/list.vue'
import detailList from '../view/detaillist.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/list/:id/:nama/:alamat/:usia/:jurusan',
      name: 'detailList',
      component: detailList
    },
  ]
})

export default router
