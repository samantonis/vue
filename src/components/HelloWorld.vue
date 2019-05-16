<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import pusher from "../pusher";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    pusher.subscribe("messages");
    pusher.bind("message_added", data => {
      console.log(data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  text-align: center;
}
</style>
