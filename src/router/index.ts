import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// Убрать правило eslint на двойной нейминг компонентов - +

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/content-editor',
    name: 'ContentEditor',
    component: () => import ('../views/ContentEditor.vue'),
  },
  {
    path: '/user-controller',
    name: 'UserController',
    component: () => import ('../views/UserController.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
