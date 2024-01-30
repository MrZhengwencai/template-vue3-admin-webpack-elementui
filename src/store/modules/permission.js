/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-29 18:29:50
 * @FilePath: \vue3-element-admin-webpack\src\store\modules\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { asyncRoutes, constantRoutes, metchRouter } from '../../router'
import router from '../../router'
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param frontRoutes
 * @param roles
 */

function filterAsyncRouter(frontRoutes, roles) {
  return frontRoutes
    .filter(item => roles[item.authorityCode])
    .map(route => {
      const sort = roles[route.authorityCode].sort || 0
      const tempRoute = Object.assign({ sort }, route)
      if (route.url) {
        tempRoute.path = route.url
      }
      if (tempRoute.children) {
        tempRoute.children = filterAsyncRouter(route.children, roles).sort((a, b) => a.sort - b.sort)
      }
      return tempRoute
    })
}

function getRouteTree(routes) {
  const tempEntries = routes.reduce(
    (prev, cur) => ({
      ...prev,
      [cur.code]: cur
    }),
    {}
  )
  const finalRoutes = filterAsyncRouter(asyncRoutes, tempEntries)
  return finalRoutes.concat(constantRoutes)
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = routes
    for (const route of state.routes) {
      router.addRoute(route) // 动态添加可访问路由
    }
  }
}

const actions = {
  generateRoutesData({ commit, state }, { authorityResults }) {
    return new Promise((resolve, reject) => {
      try {
        const accessedRouters = getRouteTree(authorityResults || [])
        console.log('accessedRouters', [...accessedRouters, metchRouter])
        commit('SET_ROUTES', [...accessedRouters, metchRouter])
        resolve(true)
      } catch (err) {
        reject(err)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
