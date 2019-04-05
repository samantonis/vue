<template>
  <div id="app">
    <component :is="theme">
      <router-view />
    </component>
  </div>
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
