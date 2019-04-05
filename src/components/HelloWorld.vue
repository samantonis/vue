<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>hello {{ fullName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: mapGetters(["fullName"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
