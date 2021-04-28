<template>
  <div class="layout-container">
    <!-- offline notificaiton -->
    <div v-show="$nuxt.isOffline" class="app__offline">
      <!-- {{ offlineNotification }} -->
    </div>

    <section class="app-sidebar">
      <Sidebar />
    </section>
    <section class="app-topbar">
      <Topbar />
    </section>
    <section class="app-content">
      <nuxt />
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
