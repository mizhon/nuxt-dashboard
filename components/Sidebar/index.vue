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
    // eslint-disable-next-line no-console
    console.log('_vars: --->', _vars)
    return {
      permissionRoutes: [
        {
          path: '/',
          redirect: '/dashboard',
          children: [
            {
              path: 'dashboard',
              component: () => import('@/pages/index'),
              name: 'Dashboard',
              meta: { title: 'Dashboard', icon: 'dashboard', affix: true },
            },
          ],
        },
        {
          path: '/documentation',
          children: [
            {
              path: 'index',
              component: () => import('@/pages/index'),
              name: 'Documentation',
              meta: {
                title: 'Documentation',
                icon: 'documentation',
                affix: true,
              },
            },
          ],
        },
        {
          path: '/guide',
          redirect: '/guide/index',
          children: [
            {
              path: 'index',
              component: () => import('@/pages/index'),
              name: 'Guide',
              meta: { title: 'Guide', icon: 'guide', noCache: true },
            },
          ],
        },
      ],
    }
  },
  computed: {
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
      return false // !this.sidebar.opened
    },
  },
}
</script>
