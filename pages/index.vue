<template>
  <div class="tabs-group">
    <section v-for="(tab, idx) in tabs" :key="idx">
      <div class="tab-warpper">
        <div class="tab">{{ tab.name }}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      tabs: [
        {
          name: 'Meetings',
        },
        {
          name: 'Messages',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.tabs-group {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 70px;
  background-color: #f6f7f9;
  width: 100%;
  height: 100%;
  .tab-wrapper {
    border: 1px solid #efefef;
    padding: 20px;
  }
}
</style>
