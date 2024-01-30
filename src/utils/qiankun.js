/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-04-18 18:31:05
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2023-10-26 15:10:47
 * @FilePath: \ums-static\src\untils\qiankun.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function isInQianKun() {
  return window.__POWERED_BY_QIANKUN__
}
// 注释
export function appendChildInQiankun(container) {
  // 子应用中需要挂载到子应用的弹窗的className，用作标记
  const vxeTableToolTip = 'vxe-table--tooltip-wrapper'
  const elToolTip = 'el-tooltip__popper'
  const elMessage = 'el-message'
  const elMessageSuccess = 'el-message-success'
  const elMessageError = 'el-message-error'
  const elDropDownMenu = 'el-dropdown-menu'
  const elCascader = 'el-cascader-menu'
  const elCascaderItem = 'el-cascader-menu__item'
  const elPicker = 'el-picker-panel'
  const elSelectDropdown = 'el-select-dropdown'
  const elMessageBox = 'el-message-box'
  const viewContant = 'viewer-container'
  const elPoper = 'el-popper'
  const elDialogWrapper = 'el-dialog__wrapper'
  const selectOrgan = 'selectOrgan'
  const loadingMask = 'el-loading-mask'
  const whiteList =
    [vxeTableToolTip,
      elToolTip,
      elMessage,
      elDropDownMenu,
      elCascader,
      elCascaderItem,
      elPicker,
      elSelectDropdown,
      elMessageBox,
      elMessageSuccess,
      elMessageError,
      viewContant,
      elPoper,
      elDialogWrapper,
      selectOrgan,
      loadingMask
    ]

  // 保存原有document.body.appendChild方法
  const originFn = document.body.appendChild.bind(document.body)
  // const localUrl = window.location.href
  console.log('localUrl', container)
  if (document.URL.includes('ums')) {
    // 重写appendChild方法
    document.body.appendChild = (dom) => {
      // 根据标记，来区分是否用新的挂载方式
      console.log('dom---->ums', dom)
      if (whiteList.some(l => dom.className && dom.className.includes(l))) {
        container.querySelector('#umsContaniner').appendChild(dom)
        console.log('body', container.querySelector('#umsContaniner'))
      } else {
        originFn(dom)
      }
    }
  }
}
