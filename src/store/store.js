import Vue from "vue";
import Vuex from "vuex";
import { movieDB } from "../../imdb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movieDB,
  },
  mutations: {},
  actions: {},
  getters: {},
});
