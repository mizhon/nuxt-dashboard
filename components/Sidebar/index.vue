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
import { routes } from '@/utils/routes'
import Logo from './Logo'
import SidebarItem from './SidebarItem'

export default {
  name: 'Sidebar',
  components: {
    Logo,
    // eslint-disable-next-line vue/no-unused-components
    SidebarItem,
  },
  data() {
    // eslint-disable-next-line no-console
    console.log('[Sidebar]', routes)
    return {
      permissionRoutes: routes.enterprise,
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
