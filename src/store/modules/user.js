/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-30 10:31:39
 * @FilePath: \vue3-element-admin-webpack\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ElMessage } from 'element-plus'
import { getUserInfo } from '@/api/user/user.js'

const state = {
  avatar: '',
  introduction: '',
  userInfo: {},
  btnAuthor: []
}
const getters = {
  avatar: state => state.avatar,
  name: state => state.name,
  userInfo: state => state.userInfo,
  // 按钮权限判断 后端会返回一个按钮权限码  传入参数到本getter中 判断当前按钮权限码是否在允许操作的权限码中
  getBtnAuthor: (state) => (authorCode) => {
    return state.btnAuthor.find(code => code === authorCode)
  },
  init: state => state.init
}

const mutations = {
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_BTN_AUTHOR: (state, btnAuthor = []) => {
    const arr = []
    for (const item of btnAuthor) {
      arr.push(item.code)
    }
    state.btnAuthor = arr
  }
}

const actions = {
  // 获取用户信息
  getUserInfoData({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo({ systemId: 'SAAS_EEDH' }).then(res => {
        // console.log('用户接口', res)
        if (res) {
          commit('SET_USERINFO', res)
          commit('SET_BTN_AUTHOR', res.authorityResults)
          resolve(res)
        } else {
          this.$message.error('获取用户信息失败,请重新登录')
          setTimeout(() => {
            // window.location.href = process.env.VUE_APP_ISSO_LOGOUT_URL + window.location.href
          }, 2000)
        }
        // resolve(res)
      }).catch(error => {
        console.log(error)
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
