<template>
  <div class="sidebar" :class="isCollapse ? 'collapse' : ''">
    <Logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="true"
        mode="vertical"
        class="el-menu-vertical-demo"
        default-active="1-4-1"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <el-switch
      v-model="isCollapse"
      active-color="#13ce66"
      inactive-color="#ff4949"
    />
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
  </div>
</template>
<script>
import Logo from './Logo'

export default {
  name: 'Sidebar',
  components: {
    Logo,
  },
  data() {
    return {
      isCollapse: true,
    }
  },
  computed: {
    // isCollapse() {
    //   return false // !this.sidebar.opned
    // },
  },
  methods: {
    handleOpen(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="scss" scoped>
el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
}

.sidebar {
  &.collapse {
    width: 64px !important;
  }
}
</style>
