export const homePageRoute = {
  path: '/',
  authorityCode: 'SAAS_EEDH_FACTORY_VIEW',
  component: () => import('@/layout/index.vue'),
  redirect: '/home',
  hidden: true,
  meta: {
    title: '菜单',
    icon: 'Promotion'

  },
  children: [
    {
      authorityCode: 'SAAS_EEDH_FACTORY_VIEW',
      path: '/home',
      component: () => import('@/views/home/index.vue'),
      name: 'Home',
      meta: { title: '首页', icon: 'Promotion' }
    }
  ]
}
