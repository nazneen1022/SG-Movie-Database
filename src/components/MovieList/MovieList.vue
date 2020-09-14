<template>
  <body>
    <div>
      <h1>All Movies</h1>
      <p>
        <label>Search by movie name : </label>
        <input type="text" v-model="searchText" />
        <button style="margin:10px" @click="search(searchText)">
          Search
        </button>
      </p>
    </div>
    <div>
      <div class="row">
        <div v-for="movie in allMovies" :key="movie.imdbID">
          <div class="column">
            <div class="card">
              <h3>
                <strong
                  ><router-link :to="`/MovieList/${movie.imdbID}`">{{
                    movie.Title
                  }}</router-link></strong
                >
              </h3>
              <img :src="movie.Poster" alt="no-poster" />
              <div style="text-align:left">
                <p><strong>Release Year :</strong> {{ movie.Year }}</p>
                <p>
                  <strong>imdb Rating :</strong>
                  {{ movie.imdbRating || "Not Rated" }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
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
      console.log("filt:", filteredMovies);
      this.allMovies = filteredMovies;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
h1 {
  color: rgb(167, 1, 65);
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 32%;
  padding: 25px;
}

/* Style the counter cards */
.card {
  display: grid;
  border: 2px rgb(61, 2, 66);
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  background-color: rgb(238, 236, 241);
  grid-template-rows: max-content 200px 1fr;
}

.card img {
  object-fit: cover;
  padding: 10px;
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

/* input[type="text"] {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
} */
</style>
