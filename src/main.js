import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "es6-promise/auto";

import store from "./store/store";

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
