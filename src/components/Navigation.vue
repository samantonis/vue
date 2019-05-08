<template>
  <div>
    <v-btn color="black" dark @click.stop="drawer = !drawer">
      <v-icon>dehaze</v-icon>
    </v-btn>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list>
        <v-list-tile v-if="mini">
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon v-if="mini">chevron_right</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-title>
              {{ fullName }}
              <v-btn icon @click.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ $t("default." + item.title) }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "navigation",
  computed: mapGetters(["fullName"]),
  data() {
    return {
      drawer: null,
      mini: true,
      items: [
        { title: "home", icon: "dashboard", url: "/" },
        { title: "about", icon: "question_answer", url: "/about" }
      ]
    };
  }
};
</script>
