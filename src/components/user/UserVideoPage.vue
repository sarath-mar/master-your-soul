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
    <!-- <template> -->
    <div class="">
      <h1 class="text-center primary--text helo-sub">
        BECOME A HEALING FACILITATOR & LEARN POWERFUL TOOLS
      </h1>
    </div>
    <div class="pa-14">
      <v-row>
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
                <!-- yellow pa-2 rounded-tr-xl rounded-bl-xl -->
                <span class="text-descriptin"> {{ item.description }}</span>
              </p>
            </div>
            <div class="text-center button-div">
              <v-btn class="primary"> view </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- <h1>Counter : {{ counter }}</h1>
      <button @click="add">Add</button> -->
    </div>
    <!-- </template> -->
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
  }),

  methods: {
    // add(){
    //   this.counter++;
    // },
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
  /* line-height: 1.1; */
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.card-content {
  min-height: 310px;
}
.helo-sub {
  font-size: 2rem;
  font-weight: 600;
  /* line-height: 1.1; */
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
  padding: 20px;
  transition: 0.5s;
}
.v-card:hover {
  transform: scale(1.05);
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
  font-size: 1.1rem;
}
.text-title {
  font-size: 1.5rem;
  text-align: center;
}
</style>
