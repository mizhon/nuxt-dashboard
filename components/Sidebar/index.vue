<template>
  <div class="sidebar">
    <Logo :collapse="isCollapse" />
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
      return false // !this.sidebar.opned
    },
  },
}
</script>
