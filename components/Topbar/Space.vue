<template>
  <div class="workspace-wrapper">
    <svg-icon icon-class="ico-workspace" />
    <div class="selector">
      <el-dropdown trigger="click" placement="bottom-end">
        <span class="el-dropdown-link">
          {{ currentWorkspace.name }}
          <!-- {{ workspace.name }} -->
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="workspace-list">
          <div v-for="(item, idx) in workspaceList" :key="idx">
            <el-dropdown-item @click.native="switchWorkSpace(item)">
              <div class="item">
                <div class="space">{{ item.spaceName }}</div>
                <svg-icon v-if="item.currentSpace" icon-class="ico-checked" />
              </div>
            </el-dropdown-item>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Space',
  data() {
    return {
      workspaceList: [
        {
          spaceId: 1,
          type: 'personal',
          spaceName: 'Test',
        },
        {
          spaceId: 2,
          type: 'enterprise',
          spaceName: 'Sun Rise',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      workspace: (state) => state.user.space,
    }),
    currentWorkspace: {
      get() {
        // eslint-disable-next-line no-console
        console.log('get', this.workspace)
        return this.workspace
      },
      set(val) {
        // todo
        // eslint-disable-next-line no-console
        this.$store.commit('user/SET_USER_SPACE', val)
        console.log('set: ', val.name)
      },
    },
  },
  methods: {
    switchWorkSpace(item) {
      const space = {
        name: item.spaceName,
        type: item.type,
      }
      // eslint-disable-next-line no-console
      console.log('switch space: --->', space)
      this.currentWorkspace = space
      this.$store.commit('user/SET_USER_SPACE', space)
      // eslint-disable-next-line no-console
      console.log('switch space: --->', this.$store.state.user)
    },
  },
}
</script>
<style lang="scss" scoped>
.workspace-wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  .selector {
    margin-left: 10px;
  }

  // &:hover {
  //   background-color: #f4f7fd;
  // }
}

.workspace-list {
  min-width: 200px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-dropdown {
    margin: 0 10px;
  }
  .el-dropdown-menu__item {
    &:hover {
      color: #275edb;
      background-color: #fff;
    }
  }
}
</style>
