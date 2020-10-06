<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="stylus">
*, *::before, *::after
    margin 0
    padding 0
    outline none
    border none
#app
  height 100vh
  font-family 'Nutino Sans', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
