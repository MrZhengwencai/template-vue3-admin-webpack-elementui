/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-02-01 19:24:00
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-27 16:59:40
 * @FilePath: \vue3-element-admin-webpack\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp, createVNode, h, render } from 'vue'
import ElementPlus from 'element-plus'
import { ElIcon } from 'element-plus'
import 'element-plus/dist/index.css'
import { appendChildInQiankun } from '@/utils/qiankun'
import '../public-path'
import * as Icons from '@element-plus/icons-vue'
import action from '@/qiankun/action'
// global css
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'
import Directives from './directive'

// permission control
import './permission'

// utils
import { DateFormat } from '@/utils/util'
// const app = createApp(App)
let instance = createApp(App)
function setupApp(container) {
  if (container) {
    instance = createApp(App)
  }
  instance.use(ElementPlus)
    .use(Directives)
    .use(router)
    .use(store)
    .provide('$DateFormat', DateFormat)
  const Icon = (props) => {
    const { name, size, color } = props
    return createVNode(
      ElIcon,
      {
        size: size || 16,
        color
      },
      () => createVNode(Icons[name])
    )
  }

  instance.component('I', Icon)
  instance.mount(container ? container.querySelector('#app') : '#app')
}
const isMicroEnv = window.__POWERED_BY_QIANKUN__ || false
// 保存微应用判断标识
window.$isQiankun = isMicroEnv
async function renderComponent(props = {}) {
  const { container, name, getCache, onGlobalStateChange, closeLoading, tagsList } = props
  console.log('props---', props)
  // 主应用页面Tag监听
  onGlobalStateChange &&
 onGlobalStateChange(state => {
   console.log('state', state, store)
   if (state.delTagPathList && state.delTagPathList.length > 0) {
     state.delTagPathList.forEach(path => {
       const list = []
       state.delTagPathList.forEach(element => {
         if (element.indexOf('/ums/') !== -1) {
           list.push(element.split('/ums')[1])
         }
       })
       store.commit('DEL_VISITED_VIEWS_LIST', list)
     })
   }
 }, true)
 // qiankun环境下处理弹出类组件挂载问题
 // container && appendChildInQiankun(container)
  setupApp(container)
  const instanceCache = getCache && getCache(name.replace('static', ''))
  console.log('instanceCache', instanceCache)
  console.log('instance---', instance)
}

if (!isMicroEnv) {
  renderComponent({})
}
export async function unmount(props) {
  const { name, createCache } = props
  console.log('卸载---', createCache)
  // 在销毁当前实例前向工作台发起创建当前实例的请求
  createCache && (await createCache(name.replace('static', ''), instance))
  window.$AppName = null
  window.$parentRouter = null
  window.$parentProps = null
  // const container = document.getElementById('app')
  // if (container) {
  //   instance.unmount(container)
  // }
  instance.unmount()
  // instance = null
  return
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
  console.log('props---', props)
  action.setActions(props.actions)
  if (props) {
    window.$AppName = props.name
    window.$parentRouter = props.router
    window.$parentProps = props
  }
  renderComponent(props)
}
