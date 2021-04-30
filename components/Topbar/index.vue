<template>
  <div class="topbar">
    <Hamburger
      id="hamburger-container"
      class="hamburger-container"
      :is-active="true"
      @toggleClick="toggleSideBar"
    />
  </div>
</template>
<script>
import Hamburger from '@/components/common/Humburger'
export default {
  name: 'Topbar',
  components: {
    Hamburger,
  },
  methods: {
    toggleSideBar() {
      // eslint-disable-next-line no-console
      console.log('trigger toggleSidebar')
      this.$store.dispatch('app/toggleSideBar')
    },
  },
}
</script>
<style lang="scss" scoped>
.topbar {
  height: 70px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 2px 9px -3px rgba(0, 0, 0, 0.2);

  .hamburger-container {
    line-height: 70px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      color: #275edb;
      background: rgba(0, 0, 0, 0.02);
    }
  }
}
</style>
