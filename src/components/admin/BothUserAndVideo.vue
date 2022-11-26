<template>
  <v-card class="tab-card">
    <!-- <v-tabs v-model="tab" fixed-tabs icons-and-text>
      <v-tabs-slider></v-tabs-slider>

      <v-tab>
        Users
        <v-icon>mdi-account</v-icon>
      </v-tab>

      <v-tab>
        Videos
        <v-icon>mdi-video</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <add-user />
      </v-tab-item>
      <v-tab-item>
        <add-videos />
      </v-tab-item>
    </v-tabs-items> -->
  </v-card>
</template>
<script>
import AddUser from "./AddUser.vue";
import AddVideos from "./AddVideos.vue";
export default {
  components: { AddUser, AddVideos },
  data() {
    return {
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style>
.tab-card {
  width: 100vw;
}
</style>
