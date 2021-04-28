<template>
  <div class="topbar-wrapper">
    <Space />
    <User />
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: calc(100% - 260px);
  height: 70px;
  background-color: #fff;
  box-shadow: 0 2px 9px -3px rgba(0, 0, 0, 0.2);
}
</style>
