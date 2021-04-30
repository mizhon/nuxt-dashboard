<template>
  <div class="user-container">
    <div class="avatar">
      <Avatar
        ref="topbarAvatar"
        :username="user.name"
        :size="user.size"
        :rounded="false"
        :custom-style="user.style"
      />
    </div>
    <div class="user-info">
      <div class="name">
        {{ user.name }}
      </div>
      <div class="role">
        {{ user.role }}
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from 'vue-avatar'

export default {
  name: 'User',
  components: {
    Avatar,
  },
  data() {
    return {
      user: {
        name: 'Hey Joe',
        size: 40,
        style: {
          'border-radius': '6px',
        },
        role: '',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  height: 70px;

  .avatar {
    display: flex;
    align-items: center;
  }

  .user-info {
    padding-left: 10px;
    // width: 100px;
  }
}
</style>
