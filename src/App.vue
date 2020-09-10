<template>
  <div id="app">
    <Navigation />
    <MovieList />
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import MovieList from "./components/MovieList/MovieList";

export default {
  name: "App",
  components: {
    Navigation,
    MovieList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
