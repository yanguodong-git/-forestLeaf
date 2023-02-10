import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 示例使用
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/channel',
    name: 'channel',
    meta: {
      title: 'channel'
    },
    component: () => import('@/views/channel/index.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/404.vue')
  }
]

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     component: () => import('@/layout/index.vue'),
//     redirect: '/index',
//     children: demoRoutes
//   },
//   // 替代vue2中的'*'通配符路径
//   { path: '/:pathMatch(.*)*', redirect: '/' }
// ]

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
})
export default router
