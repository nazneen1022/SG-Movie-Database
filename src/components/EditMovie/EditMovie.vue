<template>
  <div>
    <h1>Edit Movie</h1>
    <img :src="movie.Poster" alt="no poster" width="32%" />
    <div class="editdetails">
      <div>
        <p>
          <label>Title</label>
          <input type="text" v-model="movie.Title" />
        </p>
        <p>
          <label>Poster URL</label>
          <input type="text" v-model="movie.Poster" />
        </p>
        <p>
          <label>Plot</label>
          <textarea rows="7" v-model="movie.Plot"></textarea>
        </p>
        <p>
          <label><strong>Language : </strong></label>
          <span>{{ [...movie.Language, ", ", ...language] }}</span>
          <select v-model="language" multiple>
            <option>English</option>
            <option>Hindi</option>
            <option>Dutch</option>
            <option>French</option>
            <option>Italian</option>
            <option>Spanish</option>
            <option>Bulgarian</option>
            <option>Mandarian</option>
            <option>German</option>
            <option>Russian</option>
            <option>Japanese</option>
            <option>Swedish</option>
            <option>Sindarin</option>
            <option>Telugu</option>
            <option>Other</option>
          </select>
        </p>
        <div>
          <p><strong>Country : </strong>{{ movie.Country }}</p>
          <p><strong>Awards : </strong>{{ movie.Awards }}</p>
          <p><strong>Box Office : </strong>{{ movie.BoxOffice }}</p>
          <p><strong>Director : </strong> {{ movie.Director }}</p>
          <p><strong>Production : </strong>{{ movie.Production }}</p>
          <p><strong>Rating : </strong>{{ movie.Rated }}</p>
        </div>
        <button @click="saveChanges()">
          Save Changes
        </button>
        <button @click="cancelChanges()">
          Cancel
        </button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const movie = this.$store.state.movies.find(
      (movie) => movie.imdbID === this.$route.params.imdbId
    );

    return {
      movie,
      language: [],
    };
  },

  methods: {
    saveChanges() {
      this.$store.commit({ type: "editMovie", payload: this.movie });
    },
    cancelChanges() {},
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
</style>
