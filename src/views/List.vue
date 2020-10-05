<template>
  <div class="list">
    <Search />
    <div class="cards">
      <div
        v-for="country in countries"
        :key="country.name"
        @click="$router.push(`/detail/${country.name}`)"
        class="card"
      >
        <div class="card__flag">
          <img :src="country.flag" alt="Flag" />
        </div>
        <div class="card__container">
          <h3>{{ country.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_COUNTRIES } from "@/store/constants";
import Search from "@/components/Search";
import { mapState } from "vuex";

export default {
  name: "List",
  components: { Search },
  async mounted() {
    await this.$store.dispatch(FETCH_COUNTRIES, {});
  },
  computed: {
    ...mapState(["countries"])
  }
};
</script>

<style lang="stylus">
.list
  padding: 25px 30px
  background: #f5f5f5
  .cards
    display flex
    justify-content space-between
    flex-wrap wrap
    .card
      flex: 0 1 24%
      margin 1rem .5rem .5rem 0
      padding .5rem
      box-sizing border-box
      background: #fff
      text-align center
      cursor pointer
      box-shadow 0 4px 8px 0 rgba(0,0,0,0.2)
      transition 0.3s
      &:hover
        box-shadow 0 8px 16px 0 rgba(0,0,0,0.2)
      &__flag
        img
          height 50px
          weight 50px
      &__container
        padding 16px
</style>
