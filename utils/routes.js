/**
 * @desc: Used to store router settings for different workspace
 * - PERSONAL: persoanl user related router contents
 * - ENTERPRISE: enterprise user related router contents
 */

const personal = [
  {
    path: '/profile',
    children: [
      {
        name: 'Profile',
        path: '',
        component: () => import('@/pages/personal/profile/index.vue'),
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
        path: '',
        component: () => import('@/pages/personal/coupon/index.vue'),
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
    path: '/enterprise/dashboard',
    meta: {
      title: 'Dashboard',
      icon: 'ico-home',
    },
    children: [
      {
        path: '/enterprise/dashboard',
        component: () => import('@/pages/enterprise/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          icon: 'ico-home',
        },
      },
    ],
  },
  {
    path: '/meetings',
    alwaysShow: true,
    meta: {
      title: 'Meeting Management',
      icon: 'ico-conference',
    },
    children: [
      {
        path: '/enterprise/meetings/overview',
        component: () => import('@/pages/enterprise/meetings/overview.vue'),
        name: 'Overview',
        meta: {
          title: 'Overview',
          noCache: true,
        },
      },
      {
        path: '/enterprise/meetings/ongoing',
        component: () => import('@/pages/enterprise/meetings/ongoing.vue'),
        name: 'Ongoing',
        meta: {
          title: 'Ongoing',
          noCache: true,
        },
      },
      {
        path: '/enterprise/meetings/upcoming',
        component: () => import('@/pages/enterprise/meetings/upcoming.vue'),
        name: 'Upcoming',
        meta: {
          title: 'Upcoming',
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/organizations',
    alwaysShow: true,
    name: 'Organizations',
    meta: {
      title: 'Organizations',
      icon: 'ico-organizations',
    },
    children: [
      {
        path: '/enterprise/organizations/',
        component: () => import('@/pages/enterprise/organizations/index.vue'),
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
    alwaysShow: true,
    name: 'System',
    meta: {
      title: 'System',
      icon: 'ico-system',
    },
    children: [
      {
        path: '/enterprise/system',
        component: () => import('@/pages/enterprise/system/index.vue'),
        name: 'System',
        meta: {
          title: 'System',
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
