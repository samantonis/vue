<template>
  <v-toolbar dark app>
    <v-toolbar-side-icon @click.stop="drawerClick"></v-toolbar-side-icon>
    <v-toolbar-title> {{ $t("default.header.title") }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-menu :nudge-width="100">
      <template v-slot:activator="{ on }">
        <v-toolbar-title v-on="on">
          <span>{{ $i18n.locale() }}</span>
          <v-icon dark>flag</v-icon>
        </v-toolbar-title>
      </template>

      <v-list>
        <v-list-tile
          v-for="locale in locales"
          :key="locale"
          @click="() => $i18n.set(locale)"
        >
          <v-list-tile-title v-text="locale"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  computed: {
    locales() {
      return Object.keys(this.$store.state.i18n.translations);
    }
  },
  methods: {
    drawerClick() {
      this.$store.dispatch("toggleDrawer");
    }
  }
};
</script>

<style scoped></style>
