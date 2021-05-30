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
import SideNavbar from '@/components/Sidebar'
import TopNavbar from '@/components/Topbar'
import Breadcrumb from '@/components/common/Breadcrumb'
import ResizeMixin from '@/mixins/resize-handler'

export default {
  components: {
    SideNavbar,
    TopNavbar,
    Breadcrumb,
  },
  mixins: [ResizeMixin],
}
</script>
<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100%;
  .app-sidebar {
    background-color: #fff;
  }
  .app-content {
    width: 100%;
    height: 100%;

    .main-content {
      height: calc(100% - 70px);
    }
  }
}
</style>
