<template>
  <div>
    <h1>Curriculam</h1>
    <div v-if="progress" class="progress">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-expansion-panels accordion class="my-5">
      <v-expansion-panel v-for="(data, index) in videoData" :key="index">
        <v-expansion-panel-header>
          <span class="title"
            ><h4 class="primary--text">
              {{ index + 1 }} . {{ data.title }}
            </h4></span
          >
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <chapter-video-card :course="data" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { videoCollection } from "@/firebase";
import { limit, query, getDocs } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import ChapterVideoCard from "./ChapterVideoCard.vue";
export default {
  components: { ChapterVideoCard },
  data: () => ({
    limitData: 20,
    videoData: [],
    transparent: "rgba(255, 255, 255, 0)",
    counter: 0,
    progress: true,
  }),
  methods: {
    async getVideoData(limitData) {
      this.videoData = [];
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const q = query(videoCollection, limit(limitData));
          const videoListData = await getDocs(q);
          if (videoListData.docs.lenght);
          this.progress = false;
          videoListData.forEach((doc) => {
            let eachvideo = {
              id: doc.id,
              ...doc.data(),
            };
            this.videoData.push(eachvideo);
          });
        } else {
          this.videoData = [];
          this.$router.replace({ path: "/404-error" });
        }
      });

      console.log(this.videoData);
    },
  },
  created() {
    this.getVideoData(this.limitData);
  },
};
</script>

<style scoped>
.progress {
  padding: 10px;
  display: flex;
  justify-content: center;
}
.card-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
