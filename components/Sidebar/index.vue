<template>
  <div class="has-logo">
    <Logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- will add el-menu and related items here ... -->
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from './Logo'

export default {
  name: 'Sidebar',
  components: {
    Logo,
  },
  computed: {
    isCollapse() {
      return false // !this.sidebar.opened
    },
  },
}
</script>
