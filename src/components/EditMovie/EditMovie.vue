<template>
  <div>
    <h1>Edit Movie</h1>

    <img :src="movie.Poster" alt="no poster" width="32%" />
    <div class="editdetails">
      <div>
        <p>
          <label><strong>Title</strong></label>
          <input type="text" v-model="movie.Title" />
        </p>
        <p>
          <label><strong>Poster URL</strong></label>
          <input type="text" v-model="movie.Poster" />
        </p>
        <p>
          <label><strong>Plot</strong></label>
          <textarea rows="7" v-model="movie.Plot"></textarea>
        </p>
        <p><strong>Release Date : </strong>{{ movie.Released }}</p>
        <p><strong>Genre : </strong>{{ movie.Genre }}</p>
        <p>
          <label><strong>Language : </strong></label>
          <span>{{
            [...this.movie.Language, ", ", ...language.join(", ")]
          }}</span>

          <select v-model="language" multiple>
            <option v-for="lang in filteredLanguages" :key="lang">
              {{ lang }}
            </option>
          </select>
        </p>
        <p>
          <label><strong>Director</strong></label>
          <input type="text" v-model="movie.Director" />
        </p>
        <p>
          <label><strong>Production</strong></label>
          <input type="text" v-model="movie.Production" />
        </p>

        <div>
          <p><strong>Country : </strong>{{ movie.Country }}</p>
          <p><strong>Awards : </strong>{{ movie.Awards }}</p>
          <p><strong>Box Office : </strong>{{ movie.BoxOffice }}</p>
          <p><strong>Rating : </strong>{{ movie.Rated }}</p>
        </div>

        <h3 v-if="status === true" style="color:Green">
          <div class="alert">
            <span
              class="closebtn"
              onclick="this.parentElement.style.display='none';"
              >&times;</span
            >
            <strong>Details saved successfully!</strong>
          </div>
        </h3>
        <button @click="saveChanges()">
          Save Changes
        </button>
        <button @click="reset()">
          Reset
        </button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { allLanguages } from "../../../imdb";
export default {
  data() {
    const movie = this.$store.state.movies.find(
      (movie) => movie.imdbID === this.$route.params.imdbId
    );
    const filteredLanguages = allLanguages.filter((lang) => {
      if (!movie.Language.split(", ").includes(lang)) return lang;
    });
    return {
      movie,
      language: [],
      filteredLanguages,
      status: false,
    };
  },
  methods: {
    saveChanges() {
      const updatedDetails = {
        ...this.movie,
        Language: [...this.movie.Language.split(", "), ...this.language].join(
          ", "
        ),
      };
      //console.log("up:", updatedDetails);
      this.$store.commit({ type: "editMovie", updatedDetails });
      this.status = true;
    },
    reset() {
      return this.movie;
    },
  },
};
</script>

<style scoped>
.editdetails {
  padding-left: 35%;
  padding-right: 25%;
}
img {
  float: left;
}
input[type="text"],
textarea,
select {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  display: inline-block;
  box-sizing: border-box;
}
textarea {
  resize: vertical;
}
button {
  background-color: #333;
  color: white;
  padding: 10px;
  margin-right: 10%;
}
.alert {
  padding: 20px;
  background-color: green;
  color: white;
}
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
