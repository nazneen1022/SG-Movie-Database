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
      const imdbIDs = state.movies.map((movie) =>
        parseInt(movie.imdbID.replace("imdb", ""))
      );
      const newID = `${imdbIDs.length + 1}`.padStart(7, 0);
      const newMovie = {
        Title: payload.newMovie.title,
        Year: payload.newMovie.year,
        Rated: "",
        Released: payload.newMovie.date || "1900-01-01",
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
        imdbID: `imdb${newID}`,
        Type: "movie",
        DVD: "",
        BoxOffice: "",
        Production: payload.newMovie.production,
        Website: "N/A",
        Response: "False",
      };
      //console.log("new Movie:", newMovie);
      //console.log("new State:", state);
      state.movies = [...state.movies, newMovie];
    },
    editMovie(state, payload) {
      //console.log("here:", state, payload);
      const list = state.movies.filter(
        (movie) => movie.imdbID !== payload.imdbID
      );
      //console.log("list:", list);
      state = [...list, payload];
    },
  },
  actions: {},
  getters: {},
});
