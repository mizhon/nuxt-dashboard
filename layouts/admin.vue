<template>
  <div class="layout-container">
    <!-- offline notificaiton -->
    <div v-show="$nuxt.isOffline" class="app__offline">
      <!-- {{ offlineNotification }} -->
    </div>
    <section class="app-sidebar">
      <Sidebar />
    </section>
    <section class="app-content">
      <Topbar />
      <div class="main-content">
        <nuxt />
      </div>
    </section>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default {
  components: {
    Sidebar,
    Topbar,
  },
}
</script>
<style lang="scss" scoped>
.layout-container {
  display: flex;
  height: 100%;
  .app-sidebar {
    background-color: yellow;
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
