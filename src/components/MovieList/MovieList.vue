<template>
  <body>
    <h1>List of Movies</h1>
    <div>
      <div class="row">
        <div v-for="movie in listOfMovies" :key="movie.imdbID">
          <div class="column">
            <div class="card">
              <h3>
                <strong
                  ><router-link :to="`/MovieList/${movie.imdbID}`">{{
                    movie.Title
                  }}</router-link></strong
                >
              </h3>
              <img
                :src="movie.Poster"
                alt="no-poster"
                width="250px"
                height="300px"
              />
              <div style="text-align:left">
                <p><strong>Release Year :</strong> {{ movie.Year }}</p>
                <p>
                  <strong>imdb Rating :</strong>
                  {{ movie.imdbRating || "Not Rated" }}
                </p>
              </div>
            </div>
            <br />
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
    };
  },
  mounted() {
    this.listOfMovies = this.$store.state.movies;
    //console.log("list:", this.listOfMovies);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: rgb(216, 213, 213);
}
</style>
