<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-27 15:08:29
 * @FilePath: \vue3-element-admin-webpack\src\layout\components\AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="app-main">
    <router-view v-slot="{ Component,route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" v-if="route.meta.keepAlive" />
        </keep-alive>

      </transition>
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" v-if="!route.meta.keepAlive" />
      </transition>

    </router-view>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppMain'
})
</script>

<style scoped>
.app-main {
  position: relative;

  /* 84 = navbar + tags-view = 50 +34 */
  height: calc(100vh - 84px);
  padding: 20px;
  overflow-x: hidden;
}
</style>
