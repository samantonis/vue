import Vue from "vue";
import vuexI18n from "vuex-i18n";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import Default from "@/themes/Default.vue";
import Other from "@/themes/Other.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import * as EN from "@/translations/EN";
import * as NL from "@/translations/NL";

Vue.config.productionTip = false;

Vue.component("theme-default", Default);
Vue.component("theme-other", Other);

Vue.use(Vuetify);
Vue.use(vuexI18n.plugin, store);

// add translations directly to the application
Vue.i18n.add("en", EN);
Vue.i18n.add("nl", NL);

// set the start locale to use
Vue.i18n.set("en");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
