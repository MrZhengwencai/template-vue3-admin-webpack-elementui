/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-26 11:48:39
 * @FilePath: \vue3-element-admin-webpack\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import { storeAnalysis } from './module/superset'
import { homePageRoute } from './module/home'
export const constantRoutes = [
  {
    path: '/404',
    hidden: true,
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/401',
    hidden: true,
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      title: '401'
    }
  }
]
export const metchRouter = {
  path: '/:pathMatch(.*)*',
  redirect: '/'
}
const dashBoard = {
  authorityCode: 'SAAS_EEDH_FACTORY_VIEW',
  path: '/home',
  component: () => import('@/views/home/index.vue'),
  name: 'Home',
  meta: { title: '首页', icon: 'Promotion' }
}
export const asyncRoutes = [dashBoard, homePageRoute, storeAnalysis]

export const router = createRouter({
  history: createWebHistory('ums'),
  routes: constantRoutes
})

export default router
