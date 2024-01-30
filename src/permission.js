/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-25 14:28:48
 * @FilePath: \vue3-element-admin-webpack\src\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { configure, start, done } from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import router from './router'
import store from './store'
import { getToken, getRoles } from './utils/auth' // get token from cookie
import getPageTitle from './utils/get-page-title'
import { toLogin } from '@/utils/common'
configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  start()
  // 判断是否已经登录
  if (whiteList.includes(to.path)) {
    next()
  } else {
    if (JSON.stringify(store.getters['user/userInfo']) === '{}') {
      try {
        const res = await store.dispatch('user/getUserInfoData')
        console.log('res---', res)
        if (res) {
          const data = await store.dispatch('permission/generateRoutesData', res)
          if (data) {
            next(to.path)
          } else {
            next({
              path: '/401',
              query: {
                msg: res && res.errorMessage,
                code: res && res.errorCode,
                loginUrl: res && res.redirectURL
              }
            })
          }
          console.log('data---', data)
        } else {
          next({ name: 'noPermission', query: { msg: '获取用户信息失败' }})
        }
      } catch (error) {
        console.log('error', error)
        setTimeout(() => {
          toLogin()
        }, 2000)
      }
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  done()
})
