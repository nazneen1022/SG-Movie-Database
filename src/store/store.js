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
        Rated: "PG",
        Released: payload.newMovie.releaseDate,
        Runtime: "",
        Genre: payload.newMovie.genre.join(", ") || "Other",
        Director: payload.newMovie.director,
        Writer: "",
        Actors: "",
        Plot: payload.plot,
        Language: payload.newMovie.language.join(", "),
        Country: "",
        Awards: "N/A",
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
      console.log("test", list);
      state.movies = list;
    },
  },
  actions: {},
  getters: {},
});
