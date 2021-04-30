<template>
  <div class="breadcrumb-container">
    <!-- <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span
            v-if="
              item.redirect === 'noRedirect' || index == levelList.length - 1
            "
            class="no-redirect"
            >{{ item.meta.title }}</span
          >
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb> -->
    <div class="page-header">{{ title }}</div>
    <div class="separator" />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>Meeting Management</el-breadcrumb-item>
      <el-breadcrumb-item>Meeting Analystics</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      title: 'Demo Title',
      levelList: null,
    }
  },
  methods: {
    getBreadcrumb() {
      this.levelList = [
        {
          meta: 'Dashboard',
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 20px;
  font-size: 14px;
  line-height: 30px;

  .page-header {
    font-size: 24px;
    font-family: Helvetica;
    color: #141414;
  }

  .separator {
    width: 1px;
    margin: 0 15px;
    height: 30px;
    border: 1px solid #e4e7ed;
  }
}
</style>
