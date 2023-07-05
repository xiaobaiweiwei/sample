import { createRouter, createWebHistory } from 'vue-router'
import LayOut from '@/LayOut/IndexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LayOut
    },
  ]
})

export default router
