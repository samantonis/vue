<template>
  <v-layout row wrap>
    <v-flex>
      <navigation />
    </v-flex>
    <v-flex xs12>
      <slot />
    </v-flex>
  </v-layout>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>
