<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-26 09:59:14
 * @FilePath: \vue3-element-admin-webpack\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home-view">
    <el-empty description="首页" />
    <h2 class="title">{{ msg }}</h2>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// import { ElMessage } from 'element-plus'
const msg = ref('首页')
onMounted(() => {
  // ElMessage.warning('this is a message.')
})
</script>

<style lang="scss" scoped>

.home-view {
  .title {
    text-align: center;
  }
}
</style>
