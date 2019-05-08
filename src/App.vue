<template>
  <v-app>
    <v-container fluid>
      <component :is="theme">
        <router-view />
      </component>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    theme() {
      return "theme-" + (this.$route.meta.theme || "default");
    }
  }
};
</script>
