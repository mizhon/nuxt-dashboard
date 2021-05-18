<template>
<<<<<<< HEAD
  <div class="tabs-group">
    <section v-for="(tab, idx) in tabs" :key="idx">
      <div class="tab-warpper">
        <div class="tab">{{ tab.name }}</div>
      </div>
    </section>
  </div>
=======
  <div></div>
>>>>>>> 4b9096bd2def1d1514223f10dc697d086fdab13a
</template>
<script>
export default {
<<<<<<< HEAD
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
=======
  middleware: 'redirect',
}
</script>
>>>>>>> 4b9096bd2def1d1514223f10dc697d086fdab13a
