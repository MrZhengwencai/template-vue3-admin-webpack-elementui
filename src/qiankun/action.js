/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-08-26 15:03:31
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-12-05 10:32:11
 * @FilePath: \ums-static\src\qiankun\action.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function emptyAction() {
  // 提示当前使用的是空 Action
  console.warn('Current execute action is empty!')
}

class Actions {
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }
  setActions(action) {
    console.log('zhuce', action)
    this.actions.onGlobalStateChange = action.onGlobalStateChange
    this.actions.setGlobalState = action.setGlobalState
  }
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args)
  }
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args)
  }
}

const actions = new Actions()
export default actions
