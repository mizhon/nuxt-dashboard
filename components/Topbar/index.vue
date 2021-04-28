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
  width: 100%;
  height: 70px;
  background-color: green;
}
</style>
