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
]

const enterprise = [
  {
    path: '/enterprise/dashboard',
    name: 'Dashboard',
    meta: {
      title: 'Dashboard',
      level: ['Dashboard'],
      icon: 'ico-home',
    },
    children: [
      {
        path: '/enterprise/dashboard',
        component: () => import('@/pages/enterprise/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'Dashboard',
          // breadcrumb 层级关系
          level: ['Dashboard'],
          icon: 'ico-home',
        },
      },
    ],
  },
  // {
  //   path: '/meetings',
  //   alwaysShow: true,
  //   name: 'Meeting Management',
  //   meta: {
  //     title: 'Meeting Management',
  //     icon: 'ico-conference',
  //   },
  //   children: [
  //     {
  //       path: '/enterprise/meetings/overview',
  //       component: () => import('@/pages/enterprise/meetings/overview.vue'),
  //       name: 'Overview',
  //       meta: {
  //         title: 'Overview',
  //         // breadcrumb 层级关系
  //         level: ['Meeting Management', 'Overview'],
  //         noCache: true,
  //       },
  //     },
  //     {
  //       path: '/enterprise/meetings/ongoing',
  //       component: () => import('@/pages/enterprise/meetings/ongoing.vue'),
  //       name: 'Ongoing',
  //       meta: {
  //         title: 'Ongoing',
  //         // breadcrumb 层级关系
  //         level: ['Meeting Management', 'Ongoing'],
  //         noCache: true,
  //       },
  //     },
  //     {
  //       path: '/enterprise/meetings/upcoming',
  //       component: () => import('@/pages/enterprise/meetings/upcoming.vue'),
  //       name: 'Upcoming',
  //       meta: {
  //         title: 'Upcoming',
  //         level: ['Meeting Management', 'Upcoming'],
  //         noCache: true,
  //       },
  //     },
  //   ],
  // },
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
          level: ['Organizations', 'test'],
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
          level: ['System', 'test1'],
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
