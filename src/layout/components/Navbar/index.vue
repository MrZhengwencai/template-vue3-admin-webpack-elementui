<template>
  <div class="navbar" mode="horizontal">
    <Hamburger class="hamburger-container" :is-active="opened" @toggleClick="toggleSideBar" />
    <!-- <Breadcrumb class="breadcrumb-container" /> -->
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item">
        <div class="avatar-wrapper">
          <img :src="avatar ? avatar : '/img/logo.png'" class="user-avatar" />
          <I name="CaretBottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided @click="loginOut">登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import { useStore } from 'vuex'
import Hamburger from './Hamburger.vue'
// import Breadcrumb from './Breadcrumb.vue'
import { toLogin } from '@/utils/common'

const store = useStore()
const opened = computed(() => store.state.app.sidebar.opened)
const avatar = computed(() => store.getters['user/userInfo'].avatar)

const toggleSideBar = () => {
  store.dispatch('app/toggleSideBar')
}

const loginOut = () => {
  store.dispatch('tagsView/delAllViews', null, { root: true })
  toLogin()
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  line-height: 50px;

  .hamburger-container {
    float: left;
    height: 50px;
    padding: 0 10px;
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  :deep(.right-menu) {
    display: flex;
    align-items: center;
    float: right;
    height: 100%;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      margin: 0 4px;
      vertical-align: middle;
    }

    .international {
      vertical-align: top;
    }

    .theme-switch {
      vertical-align: 15px;
    }

    .avatar-container {
      // height: 50px;
      margin-right: 30px;

      .avatar-wrapper {
        position: relative;
        margin-top: 5px;

        .user-avatar {
          width: 40px;
          height: 40px;
          cursor: pointer;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 20px;
          right: -16px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
