<template>
  <div class="app-wrapper" :class="classObj">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <Topbar />
        <Breadcrumb />
      </div>
      <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          <!-- https://stackoverflow.com/questions/57531898/how-can-i-use-keep-alive-in-nuxt-js -->
          <Nuxt :nuxt-child-key="key" keep-alive />
        </transition>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Breadcrumb from '@/components/common/Breadcrumb'

export default {
  name: 'Default',
  components: {
    Sidebar,
    Topbar,
    Breadcrumb,
  },
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
      // eslint-disable-next-line no-console
      console.log(this.$route.path, this.$route)
      return this.$route.path
    },
  },
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

// 正常尺寸
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.main-container {
  .app-main {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
}

// 设置折叠时的效果
.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
