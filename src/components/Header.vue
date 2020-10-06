<template>
  <div class="header" :class="mode">
    <h2>{{ title }}</h2>
    <Toggle />
  </div>
</template>

<script>
import Toggle from "@/components/Toggle";
import { mapState } from "vuex";

export default {
  name: "Header",
  components: { Toggle },
  computed: {
    ...mapState(["mode"]),
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
  &.dark
    background: hsl(209, 23%, 22%);
    color: #fff;
</style>
