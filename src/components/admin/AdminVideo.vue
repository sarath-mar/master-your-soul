<template>
  <v-container fluid>
    <v-layout justify-end class="mt-5" wrap>
      <v-spacer> </v-spacer>
      <!-- <add-video-url v-if="$route.name !== 'Video-Gallery'" /> -->
    </v-layout>
    <v-layout wrap v-if="$vuetify.breakpoint.smAndUp">
      <span v-for="(post, index) in videoData" :key="index">
        <v-flex>
          <video-card :post="post" />
        </v-flex>
      </span>
    </v-layout>
    <v-layout wrap v-else justify-center>
      <span v-for="(post, index) in videoData" :key="index">
        <v-flex sm12>
          <video-card :post="post" @updatePost="updatePost" />
        </v-flex>
      </span>
    </v-layout>
  </v-container>
</template>

<script>
import { getAuth, onAuthStateChanged } from "@firebase/auth";
//   import { getDocs } from "@firebase/firestore";
//   import addVideoUrl from "./components/addVideoUrl.vue";
//   import { videoCollection } from "../../firebase";
import VideoCard from "./VideoCard.vue";
import { videoCollection } from "@/firebase";
import { limit, query, getDocs } from "@firebase/firestore";
export default {
  components: { VideoCard },
  props: {
    updateData: {
      required: true,
    },
  },
  data() {
    return {
      videoData: [],
      limitData: 20,
    };
  },
  watch: {
    updateData: {
      handler() {
        this.getVideoData(this.limitData);
      },
    },
  },
  methods: {
    async getVideoData(limitData) {
      this.videoData = [];

      const auth = getAuth();
      console.log(auth);
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const q = query(videoCollection, limit(limitData));
          const videoListData = await getDocs(q);
          if (videoListData.docs.lenght);
          //   let index = limitData - 20;
          videoListData.forEach((doc) => {
            let eachvideo = {
              //   si_no: index + 1,
              id: doc.id,
              ...doc.data(),
            };
            this.videoData.push(eachvideo);
            // index++;
            // console.log(doc.id, " => ", doc.data());
          });
        } else {
          this.videoData = [];
          this.$router.replace({ path: "/404-error" });
        }
      });

      console.log(this.videoData);
    },
    updatePost() {
      this.getvideoData(this.limitData);
    },
  },
  created() {
    this.getVideoData(this.limitData);
  },
};
</script>

<style scoped></style>
