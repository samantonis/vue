<template>
  <div>    <v-toolbar absolute dark>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

  </v-toolbar></div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped></style>
