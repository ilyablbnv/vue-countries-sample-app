import axios from "axios";
import {
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  SET_COUNTRIES,
  SET_COUNTRY
} from "./constants";

const apiPrefix = "https://restcountries.eu/rest/v2";

export default {
  async [FETCH_COUNTRIES]({ commit }, { name }) {
    const query = name ? `${apiPrefix}/name/${name}` : `${apiPrefix}/all`;
    const { data = [] } = await axios.get(query);
    commit(SET_COUNTRIES, data);
  },
  async [FETCH_COUNTRY]({ commit }, { name }) {
    const { data = [] } = await axios.get(`${apiPrefix}/name/${name}`);
    commit(SET_COUNTRY, data[0]);
  }
};
