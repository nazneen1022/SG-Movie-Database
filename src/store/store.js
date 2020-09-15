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
        Released: payload.newMovie.releaseDate,
        Genre: payload.newMovie.genre.join(", ") || "Other",
        Director: payload.newMovie.director,
        Plot: payload.newMovie.plot,
        Language: payload.newMovie.language.join(", "),
        Country: payload.newMovie.country,
        Awards: payload.newMovie.awards,
        Poster: payload.newMovie.posterUrl,
        imdbRating: payload.newMovie.rating,
        imdbID: `imdb${newID}`,
        Production: payload.newMovie.production,
      };

      state.movies = [...state.movies, newMovie];
    },
    editMovie(state, payload) {
      const list = state.movies.map((movie) => {
        if (movie.imdbID === payload.updatedDetails.imdbID) {
          return payload.updatedDetails;
        } else {
          return movie;
        }
      });
      //console.log("test", list);
      state.movies = list;
    },
  },
  actions: {},
  getters: {},
});
