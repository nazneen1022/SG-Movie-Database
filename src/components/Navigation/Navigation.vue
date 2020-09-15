<template>
  <div>
    <ul class="topnav">
      <li>
        <img
          src="https://cdn3.androidworld.nl/media/thumbnails/a1/4f/a14ffbe3d6c0d5a896b1e392bd1e3b0d.jpg"
          width="150px"
          height="80px"
          alt="logo"
        />
      </li>
      <li>
        <router-link to="/MovieList">All Movies</router-link>
      </li>
      <li class="right">
        <router-link to="/AddMovie">Add Movie</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  padding-top: 5px;
  padding-left: 10px;
}
ul.topnav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
}

ul.topnav li {
  float: left;
}

ul.topnav li a {
  display: block;
  color: white;
  text-align: center;
  padding: 30px;
  text-decoration: none;
}

ul.topnav li.right {
  float: right;
}

@media screen and (max-width: 600px) {
  ul.topnav li.right,
  ul.topnav li {
    float: none;
  }
}
</style>
