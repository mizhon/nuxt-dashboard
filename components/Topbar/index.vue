<template>
  <div class="topbar">
    <Hamburger
      id="hamburger-container"
      class="hamburger-container"
      :is-active="sidebar.opened"
      @toggleClick="toggleSideBar"
    />
    <section class="op-container">
      <Space />
      <UserInfo />
    </section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Hamburger from '@/components/common/Humburger'
import Space from '@/components/Topbar/Space'
import UserInfo from '@/components/Topbar/UserInfo'

export default {
  name: 'Topbar',
  components: {
    Hamburger,
    Space,
    UserInfo,
  },
  computed: {
    ...mapState({
      sidebar: (state) => state.app.sidebar,
    }),
  },
  methods: {
    toggleSideBar() {
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
  box-shadow: 4px 2px 9px -3px rgba(0, 0, 0, 0.2);

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

  .op-container {
    display: flex;
    align-items: center;
    line-height: 70px;
    height: 100%;
    float: right;
    margin: 0 10px;
  }
}
</style>
