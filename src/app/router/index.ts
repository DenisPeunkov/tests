import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all-forms',
      component: () => import('@/pages/main-page'),
    },
    {
      path: '/first-form',
      name: 'first-form',
      component: () => import('@/pages/first-form'),
    },
    {
      path: '/second-form',
      name: 'second-form',
      component: () => import('@/pages/second-form'),
    },
    {
      path: '/custom-form',
      name: 'custom-form',
      component: () => import('@/pages/custom-form'),
    },
  ],
})

export default router
