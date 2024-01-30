/*
 * @Author: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @Date: 2023-12-22 10:38:55
 * @LastEditors: zwc 6537397+uni-yunApp@user.noreply.gitee.com
 * @LastEditTime: 2024-01-27 14:54:52
 * @FilePath: \dd-static\src\router\routes\modules\superset.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Layout = () => import('@/layout/index.vue')

export const storeAnalysis = {
  name: 'superset',
  path: '/superset',
  component: Layout,
  authorityCode: 'SAAS_EEDH_STORE_VIEW',
  //  isNest: true,
  meta: {
    title: '一级菜单',
    icon: 'HomeFilled'
  },
  children: [
    {
      name: 'storecustomers',
      path: '/tenant/organization',
      authorityCode: 'SAAS_EEDH_STORE_CUSTOMER_LIST',
      component: () => import('@/views/superset/storecustomers/storecustomers.vue'),
      meta: {
        title: '二级菜单',
        keepAlive: true
      }
    }
  ]
}
