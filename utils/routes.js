/**
 * @desc: Used to store router settings for different workspace
 * - personal: persoanl user related router contents
 * - enterprise: enterprise user related router contents
 */

const personal = [
  {
    path: '/profile',
    children: [
      {
        name: 'Profile',
        path: 'profile',
        component: () => import('@/pages/profile/index.vue'),
        meta: {
          title: 'Profle',
          icon: 'el-icon-s-home',
        },
      },
    ],
  },
  {
    path: '/coupon',
    children: [
      {
        name: 'Coupon Center',
        path: 'coupon',
        component: () => import('@/pages/coupon/index.vue'),
        meta: {
          title: 'Coupon Center',
          icon: 'el-icon-s-home',
        },
      },
    ],
  },
]

const enterprise = [
  {
    path: '/',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'el-icon-s-home',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/meetings',
    redirect: 'noRedirect',
    alwaysShow: true,
    meta: {
      title: 'Meeting Management',
      icon: 'el-icon-monitor',
    },
    children: [
      {
        path: '',
        component: () => import('@/pages/meetings/overview.vue'),
        name: 'Meeting Management',
        meta: {
          title: 'Meeting Management',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/organizations',
    redirect: 'noRedirect',
    alwaysShow: true,
    name: 'Organizations',
    meta: {
      title: 'Components',
      icon: 'el-icon-monitor',
    },
    children: [
      {
        path: '',
        component: () => import('@/pages/organizations/index.vue'),
        name: 'Organizations',
        meta: {
          title: 'Organizations',
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/system',
    redirect: 'noRedirect',
    alwaysShow: true,
    name: 'System',
    meta: {
      title: 'System',
      icon: 'el-icon-monitor',
    },
    children: [
      {
        path: '',
        component: () => import('@/pages/system/index.vue'),
        name: 'System',
        meta: {
          title: 'System',
          icon: 'system',
          noCache: true,
        },
      },
    ],
  },
]

export const routes = {
  personal,
  enterprise,
}
