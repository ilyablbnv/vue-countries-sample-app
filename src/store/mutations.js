import Vue from "vue";

import { SET_MODE, SET_COUNTRIES, SET_COUNTRY } from "./constants";

export default {
  [SET_MODE](state, value) {
    Vue.set(state, "mode", value);
  },
  [SET_COUNTRIES](state, value) {
    Vue.set(state, "countries", value);
  },
  [SET_COUNTRY](state, value) {
    Vue.set(state, "country", value);
  }
};
