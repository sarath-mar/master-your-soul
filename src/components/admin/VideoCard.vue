<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <!-- {{post.youtubeQueUrl}}  -->
    <v-card :class="{ 'on-hover': hover }" :loading="loading" class="cardClass">
      <!--         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
 -->
      <iframe
        width="100%"
        height="150"
        :src="post.postUrl"
        frameborder="0"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <v-card-title>
        <span>{{ post.title }}</span></v-card-title
      >

      <v-card-text style="overflow-y: auto; height: 40px">
        <div class="grey--text">
          {{ post.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-layout justify-center>
          <delete-vidoe :post="post" @updatePost="updatePost" />
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>
<script>
import deleteVidoe from "./deleteVidoe.vue";
export default {
  components: { deleteVidoe },
  props: {
    post: {
      required: true,
      type: Object,
    },
  },

  data: () => ({
    loading: false,
    selection: 1,
    image: "",
  }),
  methods: {
    updatePost() {
      console.log("root emit updated");
      this.$emit("updatePost");
    },
  },
};
</script>
<style>
.cardClass:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.cardClass {
  transition: transform 0.2s;
  background-color: rgb(234, 242, 242) !important;
  padding: 10px;
  position: relative;
}
iframe {

}
</style>
