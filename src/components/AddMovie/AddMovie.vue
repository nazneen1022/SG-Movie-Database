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
          <option v-for="language in filteredLanguages" :key="language">
            {{ language }}
          </option>
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
    <div>
      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </p>
    </div>
    <h3 v-if="status === true" style="color:Green">
      <div class="alert">
        <span
          class="closebtn"
          onclick="this.parentElement.style.display='none';"
          >&times;</span
        >
        <strong> New Movie Added! </strong>
      </div>
    </h3>
  </div>
</template>

<script>
import { allLanguages } from "../../../imdb";
const filteredLanguages = allLanguages.filter((lang) => lang);
export default {
  name: "AddMovie",
  props: "",
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
      filteredLanguages,
      errors: [],
      status: false,
    };
  },
  methods: {
    handleSubmit(movie) {
      //console.log("in Handle Submit:",movie)
      if (!movie.title || !movie.posterUrl || !movie.year) 
        return this.errors = ["Title, Poster URL and Year are required!"]
      //Year Validation - should be a number with 4 digits
      else if(isNaN(movie.year) || movie.year.length !== 4)
       return  this.errors=["Year should be a 4-digit number!"];
      else  {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        const result=pattern.test(movie.posterUrl)
        
        // Poster URL validations
        if(!result) return this.errors=["Poster URL is invalid!"];
          // no errors - blank out errors array
        else this.errors=[]
      }
      
      this.$store.commit({
        type: "addMovie",
        newMovie: movie,
      });
      this.status = true;
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

.alert {
  padding: 10px;
  background-color: #61a125;
  color: white;
}
.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 20px;
  line-height: 15px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>
