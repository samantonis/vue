<template>
  <div>
    <navigation />
    <slot />
  </div>
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
