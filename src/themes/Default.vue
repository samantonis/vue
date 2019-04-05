<template>
  <v-layout row wrap>
    <v-flex xs4>
      <navigation />
    </v-flex>
    <v-flex xs8>
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

<style scoped>
#app {
  background-color: aqua;
}
</style>
