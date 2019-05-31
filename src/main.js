import setAuthToken from "./utils/setAuthToken";

import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";

Vue.config.productionTip = false;

if (localStorage.getItem("@PostSocial:token")) {
  const token = localStorage.getItem("@PostSocial:token", token);
  setAuthToken(token);

  store.dispatch("setCurrentUser");
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
