<template>
  <div class="app-wrapper" :class="classObj">
    <!-- Sidebar Container -->
    <SideNavbar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <TopNavbar />
      </div>
      <section class="app-main">
        <div class="page-header">
          <!-- 页面导航展示 -->
          <Breadcrumb />
        </div>
        <transition name="fade-transform" mode="out-in">
          <Nuxt :nuxt-child-key="key" />
        </transition>
      </section>
      <el-backtop target=".app-main" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import SideNavbar from '@/components/Sidebar'
import TopNavbar from '@/components/Topbar'
import Breadcrumb from '@/components/common/Breadcrumb'
import ResizeMixin from '@/mixins/resize-handler'

export default {
  name: 'Admin',
  components: {
    SideNavbar,
    TopNavbar,
    Breadcrumb,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
      device: (state) => state.app.device,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile',
      }
    },
    key() {
      return this.$route.path
    },
  },
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f7f8fb;
}
</style>
