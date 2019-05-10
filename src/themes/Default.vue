<template>
  <v-layout row wrap>
    <v-flex>
      <toolbar />
      <navigation />
    </v-flex>
    <v-flex class="mt-5" xs12>
      <slot />
    </v-flex>
    <v-flex>
      <app-footer />
    </v-flex>
  </v-layout>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import Toolbar from "../components/Toolbar.vue";
import AppFooter from "../components/Footer.vue";

export default {
  components: {
    Navigation,
    Toolbar,
    AppFooter
  }
};
</script>
