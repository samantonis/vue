<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h3>{{ $t("default.chooselang") }}</h3>
    <div
      :key="locale"
      v-for="locale in locales"
      @click="() => $i18n.set(locale)"
    >
      {{ locale }}
    </div>
    <div>current locale : {{ $i18n.locale() }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    locales() {
      return Object.keys(this.$store.state.i18n.translations);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
</style>
