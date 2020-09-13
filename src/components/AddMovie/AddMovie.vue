<template>
  <div>
    <h1>Add a New Movie</h1>
    <div class="myform">
      <!-- text -->
      <p>
        <label>Title</label>
        <input type="text" v-model="movie.title" />
      </p>
      <p>
        <label>Year</label>
        <input type="text" v-model="movie.year" />
      </p>
      <p>
        <label>Poster URL</label>
        <input type="text" v-model="movie.posterUrl" />
      </p>
      <p>
        <label>Release Date</label>
        <input type="date" v-model="movie.releaseDate" />
      </p>
      <!-- textarea -->
      <p>
        <label>Plot</label>
        <textarea rows="7" v-model="movie.plot"></textarea>
      </p>
      <!-- multiple select -->
      <p>
        <label>Genre</label>
        <select v-model="movie.genre" multiple>
          <option>Action</option>
          <option>Animation</option>
          <option>Adventure</option>
          <option>Biography</option>
          <option>Comedy</option>
          <option>Crime</option>
          <option>Drama</option>
          <option>Fantacy</option>
          <option>Romance</option>
          <option>Sci-Fi</option>
          <option>Thriller</option>
        </select>
      </p>
      <p>
        <label>Language</label>
        <select v-model="movie.language" multiple>
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
      <p>
        <label>Director</label>
        <input type="text" v-model="movie.director" />
      </p>
      <p>
        <label>Production</label>
        <input type="text" v-model="movie.production" />
      </p>
      <!-- <p><pre>movie: {{movie }}</pre></p> -->
      <p>
        <button
          class="mybutton"
          style="float:left"
          @click="handleSubmit(movie)"
        >
          Add Movie
        </button>
        <button class="mybutton" style="float:right" @click="handleCancel()">
          Cancel
        </button>
      </p>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "AddMovie",
  data() {
    return {
      movie: {
        title: "",
        year: "",
        posterUrl: "",
        releaseDate: "",
        plot: "",
        genre: [],
        language: [],
        director: "",
        production: "",
      },
    };
  },
  methods: {
    handleSubmit(movie) {
      //console.log("in Handle Submit:",movie)
      this.$store.commit({
        type: "addMovie",
        newMovie: movie,
      });
    },
    handleCancel() {
      return this.movie;
    },
  },
};
</script>

<style scoped>
.myform {
  padding-left: 30%;
  padding-right: 30%;
}
input[type="text"],
input[type="date"],
textarea,
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.mybutton {
  border: 2px solid;
  padding: 7px;
  border-radius: 3px;
  background-color: rgb(240, 228, 250);
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
