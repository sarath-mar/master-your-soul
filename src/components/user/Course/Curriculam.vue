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
    <div class="pt-5 pr-8" v-for="(item, i) in videoData" :key="i">
      <v-card class="pa-3 card-data">
        <div>
          <h1 class="primary--text">{{ i + 1 }} . {{ item.title }}</h1>
        </div>
        <div><v-btn class="primary">View </v-btn></div>
      </v-card>
      <!-- <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(item, i) in videoData"
          :key="i"
        >
          <v-card>
            <div class="card-content">
              <h1 class="text-title font-weight-bold">
                {{ item.title }}
              </h1>
              <p
                class="ma-0 mt-5 text-body-1 font-italic"
                :class="
                  $vuetify.breakpoint.smAndUp ? ' text-left ' : 'text-class'
                "
              >
                <span class="text-descriptin"> {{ item.description }}</span>
              </p>
            </div>
            <div class="text-center button-div">
              <v-btn class="primary"> view </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row> -->
    </div>
  </div>
</template>

<script>
import { videoCollection } from "@/firebase";
import { limit, query, getDocs } from "@firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
export default {
  data: () => ({
    limitData: 20,
    videoData: [],
    transparent: "rgba(255, 255, 255, 0)",
    counter: 0,
    progress:true
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
          this.progress=false
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

.progress{
    padding:10px;
    display: flex;
    justify-content: center;
}
.card-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
