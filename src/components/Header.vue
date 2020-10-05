<template>
  <div class="header">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style lang="stylus">
.header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0px 25px
  height: 12vh
  background: #ffffff
  color: #192734
  box-shadow: 0 0 5px rgba(0,0,0,0.4)
</style>
