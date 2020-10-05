<template>
  <div class="detail">
    <div class="card"></div>
    <h1>Detail {{ $route.params.country }}</h1>
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
    ...mapState(["country"])
  }
};
</script>
