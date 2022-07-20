import { createRouter, createWebHashHistory } from 'vue-router'
// import layout from '@/layout'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/index',
    component: () => import('../layout'),
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
