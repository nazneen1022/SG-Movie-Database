import Vue from "vue";
import Vuex from "vuex";
import { movieDB } from "../../imdb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movieDB,
  },
  mutations: {
    addMovie(state, payload) {
      // console.log("I'm here:", state, payload.newMovie);
      const newMovie = {
        Title: payload.newMovie.title,
        Year: payload.newMovie.year,
        Rated: "",
        Released: payload.newMovie.date,
        Runtime: "",
        Genre: payload.newMovie.genre.join(","),
        Director: payload.newMovie.director,
        Writer: "",
        Actors: "",
        Plot: payload.plot,
        Language: payload.newMovie.language.join(","),
        Country: "",
        Awards: "",
        Poster: payload.newMovie.posterUrl,
        Ratings: [],
        Metascore: "",
        imdbRating: "",
        imdbVotes: "",
        imdbID: "tt9999999",
        Type: "movie",
        DVD: "",
        BoxOffice: "",
        Production: payload.newMovie.production,
        Website: "N/A",
        Response: "False",
      };
      //console.log("new Movie:", newMovie);
      //console.log("new State:", state);
      return [...state.movies, newMovie];
    },
  },
  actions: {},
  getters: {},
});
