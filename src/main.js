import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import Default from "@/themes/Default.vue";
import Other from "@/themes/Other.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.component("theme-default", Default);
Vue.component("theme-other", Other);

Vue.use(Vuetify);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
