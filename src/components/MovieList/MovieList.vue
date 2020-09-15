<template>
  <div>
    <span style="float:right">
      <label><strong>Search movies by Name : </strong></label>
      <input type="text" v-model="searchText" />
      <button style="margin:10px" @click="search(searchText)">
        🔍 Search
      </button>
    </span>
    <h1>All Movies</h1>
    <div class="bg column" v-for="movie in allMovies" :key="movie.imdbID">
      <div class="card">
        <h4>
          {{ movie.Title }}
        </h4>
        <router-link :to="`/MovieList/${movie.imdbID}`"
          ><img :src="movie.Poster" alt="no-poster"
        /></router-link>
        <p>
          <span style="float:left">
            <strong>Release Year :</strong> {{ movie.Year }}</span
          >
          <span style="float:right"
            ><strong>imdb Rating :</strong>
            {{ movie.imdbRating || "Not Rated" }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listOfMovies: null,
      searchText: "",
      allMovies: this.$store.state.movies,
    };
  },
  mounted() {
    this.listOfMovies = this.allMovies.sort((a, b) => {
      if (a.imdbID < b.imdbID) {
        return 1;
      }
      if (a.imdbID > b.imdbID) {
        return -1;
      }
      return 0;
    });
    //console.log("list:", this.listOfMovies);
  },
  methods: {
    search(text) {
      let movieTitle;
      const filteredMovies = this.$store.state.movies.filter((movie) => {
        movieTitle = movie.Title.toLowerCase();
        if (movieTitle.includes(text.toLowerCase())) return movie;
      });
      //console.log("filt:", filteredMovies);
      this.allMovies = filteredMovies;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
}
.bg {
  background-color: black;
}
/* Float four columns side by side */
.column {
  float: left;
  width: 33%;
  padding: 20px;
}

/* Style the counter cards */
.card {
  display: grid;
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  background-color: white;
  grid-template-rows: max-content 480px 1fr;
  align-content: space-between;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
