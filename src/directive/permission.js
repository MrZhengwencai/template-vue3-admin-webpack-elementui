/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-24 17:27:29
 * @FilePath: \vue3-element-admin-webpack\src\directive\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from '@/store'
export default {
  mounted(el, binding) {
    const permission = binding.value // 获取到 v-permission的值
    if (permission) {
      const hasPermission = authorite(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  }
}

function authorite(key) {
  const arr = store.state.user.btnAuthor
  return arr.includes(key)
}
// 使用案例
// <el-button v-permission="'SAAS_EEDH_STORE_CUSTOMER_SOURCE'">按钮1</el-button>
