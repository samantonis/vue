<template>
  <v-footer app absolute dark height="auto" class="justify-center">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-3 justify-center"
        dark
        icon
      >
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
      <div class='text-xs-center'>
        &copy;2019 — <strong>Sam Antonis</strong>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "app-footer",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style scoped></style>
