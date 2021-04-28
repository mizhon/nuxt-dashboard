<template>
  <div class="topbar-wrapper">
    <div class="space-container">
      <Space />
    </div>
    <div class="user-container">
      <User />
    </div>
  </div>
</template>
<script>
import Space from './Space'
import User from './User'

export default {
  name: 'Topbar',
  components: {
    Space,
    User,
  },
}
</script>
<style lang="scss" scoped>
.topbar-wrapper {
  position: fixed;
  width: 100%;
}
</style>
