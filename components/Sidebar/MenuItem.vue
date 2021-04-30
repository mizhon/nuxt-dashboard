<template>
  <div class="menu-contianer">
    <template v-if="icon.includes('el-icon')">
      <i :class="[icon, 'sub-el-icon']" />
      <span slot="title">{{ title }}</span>
    </template>
    <template v-else>
      <svg-icon :icon-class="{ icon }" />
      <!-- <span>-</span> -->
      <span slot="title">{{ title }}</span>
    </template>
  </div>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
