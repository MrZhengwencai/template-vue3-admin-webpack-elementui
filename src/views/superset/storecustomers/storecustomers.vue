<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2024-01-24 15:15:51
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-27 15:04:43
 * @FilePath: \vue3-element-admin-webpack\src\views\superset\storecustomers\storecustomers.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="storeCustomers">
    <h1>测试页面</h1>
    <el-input v-model="data"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const data = ref('')
</script>

<style scoped lang="scss">
.storeCustomers {
  width: 100%;
  height: 100%;
}
</style>
