<template>
  <v-container fluid>
    <v-layout justify-end class="mt-5" wrap>
      <v-spacer> </v-spacer>
      <!-- <add-video-url v-if="$route.name !== 'Video-Gallery'" /> -->
    </v-layout>
    <v-layout wrap>
      <span v-for="(post, index) in videoData" :key="index">
        <v-flex>
          <video-card :post="post" />
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
import { limit, query ,getDocs} from '@firebase/firestore';
export default {
  components: { VideoCard },
  data() {
    return {
      videoData: [
        {
          video:
            "https://firebasestorage.googleapis.com/v0/b/master-your-soul.appspot.com/o/videos%2FnJPr0kl1rq1uAWnX1WWC.mp4?alt=media&token=ee68d76e-85a7-4213-9985-3242b578f4ef",
          postCaption: "Test Purpose 1",
          postText: "lorem text",
        },
        // {
        //   youtubeQueUrl: "https://youtu.be/9P9DiRpayFE",
        //   postCaption: "Test Purpose 2",
        //   postText: "lorem text",
        // },
        // {
        //   youtubeQueUrl: "https://youtu.be/9P9DiRpayFE",
        //   postCaption: "Test Purpose 3",
        //   postText: "lorem text",
        // },
        // {
        //   youtubeQueUrl: "https://youtu.be/9P9DiRpayFE",
        //   postCaption: "Test Purpose 4",
        //   postText: "lorem text",
        // },
      ],
    };
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
    // updatePost() {
    //   this.getvideoData();
    // },
  },
  created() {
    this.getVideoData(20);
  },
};
</script>

<style scoped></style>
