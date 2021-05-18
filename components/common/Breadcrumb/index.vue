<template>
  <div class="breadcrumb-container">
    <div class="page-header">{{ breadcrumb.name }}</div>
    <template v-if="breadcrumb.level.length > 1">
      <div class="separator" />
      <el-breadcrumb separator="/">
        <!-- <transition-group name="breadcrumb">
          <el-breadcrumb-item
            v-for="(item, index) in breadcrumb.level"
            :key="index + 1"
          >
            {{ item }}
          </el-breadcrumb-item>
        </transition-group> -->
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumb.level"
          :key="index"
        >
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Breadcrumb',
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      breadcrumb: (state) => state.app.breadcrumb,
    }),
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
