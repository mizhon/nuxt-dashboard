<template>
  <div class="breadcrumb-container">
    <div class="page-header">{{ pageTitle }}</div>
    <div class="separator" />
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
        {{  }}
      </el-breadcrumb-item> -->
      <el-breadcrumb-item>Meeting Management</el-breadcrumb-item>
      <el-breadcrumb-item>Meeting Analystics</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {},
  data() {
    return {
      pageTitle: 'Demo Title',
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
    font-weight: bold;
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
