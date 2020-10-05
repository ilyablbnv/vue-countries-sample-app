<template>
  <div class="search">
    <input
      v-model="searchName"
      @input="search"
      type="search"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
import { FETCH_COUNTRIES } from "@/store/constants";
import { mapState } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      searchName: ""
    };
  },
  computed: {
    ...mapState(["countries"])
  },
  methods: {
    async search() {
      await this.$store.dispatch(FETCH_COUNTRIES, { name: this.searchName });
    }
  }
};
</script>

<style lang="stylus">
.search
  input[type="search"]
    width 350px
    height 45px
    background #ffffff
    padding 2px 18px 0 0
    border-radius 4px
    text-indent 18px
    box-shadow 0 0 10px rgba(0, 0, 0, 0.2)
    font-weight 600
  input[type="search"]::placeholder
    font-family "Nunito Sans"
    font-weight 600
    font-size 16px
    color #2c3e50
.dark
  .search
    input[type="search"]
      background hsl(209, 23%, 22%)
      color #fff
    input[type="search"]::placeholder
      color #fff
</style>
