<template>
  <div>
    <div class="breadcrumb">
      <h1 class="helo text-center mb-8">Courses</h1>
    </div>

    <div class="course-main">
      <div class="d-flex align-center justify-space-between">
        <div>
          <h1 class="primary--text helo-sub">All Courses</h1>
        </div>
        <div>
          <v-text-field
            :loading="loading"
            label="Search Courses"
            append-icon="mdi-magnify"
            outlined
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
        </div>
      </div>
      <div class="course-group">
        <!-- <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows="hover"
        > -->
        <!-- <v-carousel-item v-for="(slide, i) in slides" :key="i"> -->
        <div class="course-group-division">
          <div class="main-group-card" v-for="(course, i) in courses" :key="i">
            <v-card class="course-group-card">
              <div class="course-group-img">
                <img
                  :src="
                    require(`../../../public/image/course/course-${
                      (i + 1) % 2 == 0 ? 1 : 2
                    }.jpg`)
                  "
                  alt=""
                />
              </div>
            </v-card>
            <v-card class="bottom-card">
              <h2 class="mt-5 primary--text text-center">
                {{ course.title }}
              </h2>
              <h3 class="mt-2 text-center">{{ course.description }}</h3>
              <div class="mt-3 text-center">
                <v-btn class="primary">View Course</v-btn>
              </div>
            </v-card>
          </div>
        </div>
        <!-- </v-carousel-item> -->
        <!-- </v-carousel> -->
      </div>
      <!-- <div>
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
                  <span class="text-descriptin"> {{ item.description }}</span>
                </p>
              </div>
              <div class="text-center button-div">
                <v-btn class="primary"> view </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div> -->
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
    courses: [
      { title: "Bikram Yoga", description: "Art Of Living" },
      { title: "Bikram Yoga", description: "Silver Lake Yoga" },
      { title: "Bikram Yoga", description: "Art Of Living" },
      { title: "Bikram Yoga", description: "Silver Lake Yoga" },
      { title: "Bikram Yoga", description: "Silver Lake Yoga" },
      { title: "Bikram Yoga", description: "Silver Lake Yoga" },
    ],
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
.bottom-card {
  margin: 0px 20px;
  margin-top: -50px;
  /* height: 150px; */
  padding: 30px;
  padding-top: 5px;

  /* background-color: var(--primary) !important; */
}
.main-group-card {
  /* background-color: red; */
  min-width: 325px;
}
.course-group-division {
  margin-top: 20px;
  padding-bottom: 30px;
  display: grid;
  gap: 20px;
  grid-auto-flow: column;
  scroll-behavior: auto;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  /* grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); */
}
.course-group-card {
  /* background-image: url("../../../public/image/course/course-1.jpg"); */
  background-size: cover;
  height: 350px;
}
.course-group-card img {
  background-size: cover;
  width: 100%;
  /* height: 350px; */
}
.course-main {
  padding: 5vh 5vw;
}
.breadcrumb {
  position: relative;
  background-attachment: fixed !important;
  background-position: center left !important;
  background-image: url("../../../public/image/course-yoga-pose.jpg");
  height: 250px;
  color: white;
}
.breadcrumb h1 {
  /* padding: 10px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  color: white;
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 0.3rem;
}
.breadcrumb::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: black;
  opacity: 0.8;
}
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
  font-weight: 900;
  /* line-height: 1.1; */
  letter-spacing: 0.25rem;
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
