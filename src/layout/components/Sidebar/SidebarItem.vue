<!--
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-25 16:47:10
 * @FilePath: \vue3-element-admin-webpack\src\layout\components\Sidebar\SidebarItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="nav.meta && !nav.hidden" class="menu-wrapper">
    <!-- 一级菜单 -->
    <el-menu-item
      v-if="!nav.children || !nav.children.length"
      :index="nav.path"
      :class="{ 'submenu-title-noDropdown': $route.path===nav.path ,'is-active': $route.path===nav.path}"
    >
      <I v-if="nav.meta.icon" :name="nav.meta.icon" size="18" class="sidebar-icon" />
      <template #title>
        <span>{{ nav.meta.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="nav.path">
      <!-- 二级菜单 -->
      <template #title>
        <I v-if="nav.meta.icon" :name="nav.meta.icon" size="18" class="sidebar-icon" />
        <span>{{ nav.meta.title }}</span>
      </template>
      <!-- 三级菜单 -->
      <div v-for="child in nav.children" :key="child.path">
        <SidebarItem
          v-if="child.children && child.children.length"
          :index="child.path"
          :is-nest="true"
          :nav="child"
          class="nest-menu"
        />
        <el-menu-item v-else :index="child.path">
          <template #title>
            <span>{{ child.meta.title }}</span>
          </template>
        </el-menu-item>
      </div>
    </el-sub-menu>
  </div>
</template>

<script setup>
// import { defineProps, toRefs } from 'vue'
import { toRefs } from 'vue'

const props = defineProps({
  nav: {
    type: Object,
    required: true
  }
})

toRefs(props)
</script>
<style scoped>
.submenu-title-noDropdown{
  min-width: 210px !important;
    background-color: #1f2d3d !important;
}
</style>
