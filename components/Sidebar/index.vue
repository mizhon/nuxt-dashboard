<template>
  <div class="has-logo">
    <Logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        :default-active="activeMenu"
        :text-color="vars.menuText"
        :background-color="vars.menuBg"
        :active-text-color="vars.menuActiveText"
      >
        <SidebarItem
          v-for="route in permissionRoutes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import _vars from '@/assets/styles/_vars.scss'
import Logo from './Logo'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    Logo,
    SidebarItem,
  },
  data() {
    return {
      permissionRoutes: [
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
                icon: 'dashboard',
                affix: true,
              },
            },
          ],
        },
        {
          path: '/meetings',
          children: [
            {
              path: '',
              component: () => import('@/pages/meetings/overview.vue'),
              name: 'Meeting Management',
              meta: {
                title: 'Meeting Management',
                icon: 'meetings',
                affix: true,
              },
            },
          ],
        },
        // {
        //   path: '/organizations',
        //   children: [
        //     {
        //       path: '',
        //       // component: () => import('@/pages/organizations/index.vue'),
        //       name: 'Organizations',
        //       meta: {
        //         title: 'Organizations',
        //         icon: 'organizations',
        //         noCache: true,
        //       },
        //     },
        //   ],
        // },
        // {
        //   path: '/system',
        //   children: [
        //     {
        //       path: '',
        //       // component: () => import('@/pages/system/index.vue'),
        //       name: 'System',
        //       meta: {
        //         title: 'System',
        //         icon: 'system',
        //         noCache: true,
        //       },
        //     },
        //   ],
        // },
      ],
    }
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
    vars() {
      return _vars
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }

      return path
    },
    isCollapse() {
      return !this.sidebar.opened
    },
  },
}
</script>
