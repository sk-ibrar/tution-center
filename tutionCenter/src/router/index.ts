import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/components/tution-Home/home-Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
   
  ],
})

export default router
