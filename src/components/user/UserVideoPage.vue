<template>
  <div>
    <h1 class="helo text-center mb-8">Courses</h1>
    <!--  <iframe
                    width="100%"
                    height="150"
                    src="https://firebasestorage.googleapis.com/v0/b/master-your-soul.appspot.com/o/videos%2FAYEUGkWrOI15fLBaoQ3b.mp4?alt=media&token=adc611fc-ddd9-4906-b9c4-2e8f114b3ea1"
                    frameborder="0"
                    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe> -->
    <template>
      <v-container class="pa-4 text-center">
        <!-- <v-row > -->
        <v-card
          class="px-3 video-card my-8"
          width="100%"
          v-for="(item, i) in videoData"
          :key="i"
        >
          <v-row class="fill-height" align="center " justify="center">
            <v-col cols="12" sm="12" md="4">
              <iframe
                width="100%"
                height="100%"
                :src="item.postUrl"
                frameborder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </v-col>
            <v-col cols="12" sm="12" md="8">
              <div class="pa-5">
                <p
                  :class="
                    $vuetify.breakpoint.smAndUp ? ' text-left ' : 'text-class'
                  "
                >
                  <!-- green pa-2 rounded-tr-xl -->
                  <span class="text-title font-weight-bold">
                    {{ item.title }}</span
                  >
                </p>
                <p
                  class="ma-0 text-body-1 font-italic"
                  :class="
                    $vuetify.breakpoint.smAndUp ? ' text-left ' : 'text-class'
                  "
                >
                  <span
                    class="yellow pa-2 rounded-tr-xl rounded-bl-xl text-descriptin"
                  >
                    {{ item.description }}</span
                  >
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </template>
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
<style>
.helo {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
.text-class {
  text-align: center;
  /* padding:10px */
}
.text-descriptin {
  font-size: 1.5rem;
}
.text-title {
  font-size: 2.1rem;
}
</style>
