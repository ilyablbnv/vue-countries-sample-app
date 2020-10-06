<template>
  <div class="detail" :class="mode">
    <div class="card" :class="mode">
      <img class="card__flag" :src="country.flag" alt="Flag" />
      <h3>{{ country.name }}</h3>
      <div class="card__info">
        <div class="card__info-item">Capital: {{ country.capital }}</div>
        <div class="card__info-item">Native Name: {{ country.nativeName }}</div>
        <div class="card__info-item">Region: {{ country.region }}</div>
        <div class="card__info-item">Currencies: {{ currencies }}</div>
        <div class="card__info-item">Languages: {{ languages }}</div>
        <div class="card__info-item">Population: {{ country.population }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_COUNTRY } from "@/store/constants";
import { mapState } from "vuex";

export default {
  name: "Detail",
  async mounted() {
    await this.$store.dispatch(FETCH_COUNTRY, {
      name: this.$route.params.country
    });
  },
  computed: {
    ...mapState(["country", "mode"]),
    currencies() {
      return this.country?.currencies.map(l => l.name).join(", ");
    },
    languages() {
      return this.country?.languages.map(l => l.name).join(", ");
    }
  }
};
</script>
<style lang="stylus">
.detail
  display flex
  justify-content center
  align-items baseline
  height 100%
  &.dark
    background: #192734;
    color: #fff;
  .card
    flex: 0 1 50%
    margin 1rem .5rem .5rem 0
    padding .5rem
    box-sizing border-box
    background: #fff
    text-align center
    cursor pointer
    box-shadow 0 4px 8px 0 rgba(0,0,0,0.2)
    transition 0.3s
    &.dark
      background: #192734;
    &:hover
      box-shadow 0 8px 16px 0 rgba(0,0,0,0.2)
    background-color #fff
    &__flag
      width 70px
    &__info
      margin 10px 0
    &__info-item
      margin-top 30px
</style>
