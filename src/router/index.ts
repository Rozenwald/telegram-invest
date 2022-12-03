import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import Main from '@/views/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: 'home', component: () => import('../views/Home.vue') },
      { path: 'payments', component: () => import('../views/Payments.vue') },
      { path: 'check-hash', component: () => import('../views/CheckHash.vue') },
      { path: 'referals', component: () => import('../views/Referals.vue') },
      { path: 'mailing', component: () => import('../views/Mailing.vue') },
      { path: 'bonus-program', component: () => import('../views/BonusProgram.vue') },
      { path: 'edit-content', component: () => import('../views/EditContent.vue') },
    ]
  },
  {
    path: '/auth',
    name: 'Authenticate',
    component: () => import ('../views/Authenticate.vue'),
  },
  {
    path: '/user-page',
    name: 'user-page',
    component: () => import ('../views/UserPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  // console.log(to.fullPath)
  // console.log(to.name)
  // console.log(user.getAuthStatus)
  if ((!user.getAuthStatus) && (to.name !== 'Authenticate')) router.push({ name: 'Authenticate' })
  else if ((user.getAuthStatus) && ((to.name == 'Authenticate') || (to.name == 'Main'))) router.push({ path: '/home' })
  else next()
});

export default router
