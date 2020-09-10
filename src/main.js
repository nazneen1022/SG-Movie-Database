import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "es6-promise/auto";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
