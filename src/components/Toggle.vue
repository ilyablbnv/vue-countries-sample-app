<template>
  <div class="toggle" @click="setMode">
    <button :class="mode">
      <i :class="mode === 'light' ? 'fa fa-sun' : 'fa fa-mood'"></i>
      <span>{{ mode }} mode</span>
    </button>
  </div>
</template>

<script>
import { SET_MODE } from "@/store/constants";
import { mapState } from "vuex";

export default {
  name: "Toggle",
  computed: {
    ...mapState(["mode"])
  },
  methods: {
    setMode() {
      this.$store.commit(SET_MODE, this.mode === "light" ? "dark" : "light");
    }
  }
};
</script>

<style lang="stylus">
.toggle
  color #197432
  button
    background none
    outline none
    border none
    &.dark
      color #fff
  span
    font-weight 600
    margin-left 6px
    text-transform capitalize
    font-family "Nunito Sans", sans-serif
</style>
