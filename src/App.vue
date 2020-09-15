<template>
  <div id="app">
    <Navigation />
    <!--<MovieList /> -->
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Navigation from "./components/Navigation/Navigation.vue";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import EditMovie from "./components/EditMovie/EditMovie";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "MovieList", component: MovieList },
    { path: "/AddMovie", name: "AddMovie", component: AddMovie },
    { path: "/MovieList/:imdbId", name: "EditMovie", component: EditMovie },
  ],
});

Vue.use(VueRouter);

export default {
  router,
  name: "App",
  components: {
    Navigation,
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
