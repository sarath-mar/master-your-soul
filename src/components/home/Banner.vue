<template>
  <!-- <v-carousel
      elevation="12"
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      height="78vh"
      class="mt-n1 rounded-xl"
    >
      <v-carousel-item
        v-for="(item, i) in slides"
        :key="i"
        :src="require(`../../../public/image/${item.src}`)"
        reverse-transition="fade-transition"
        transition="fade-transition"
        elevation="12"
      >
      </v-carousel-item>
    </v-carousel> -->
  <div class="banner">
    <div class="banner-image">
      <div class="welcome">
        <v-row>
          <v-col cols="12" sm="8" class="ml-auto">
            <div class="pa-5">
              <p>Welcome to Master Your Soul </p>
              <h1>
                <!-- We are a creative group of people who design influential -->
                Learn How To Transform To State Of Bliss Using Unique Healing
                And Meditation Techniques.
              </h1>
              <div class="mt-10">
                <v-btn x-large outlined color="white" class="button mr-8" dark>
                  JOIN NOW
                </v-btn>
                <LoginForm/>
                <!-- <v-btn x-large outlined color="white" class="button" dark>
                  LOGIN 
                </v-btn> -->
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="2" class="ml-auto">
            <div class="welcome-social float-right pa-5">
              <ul class="d-flex d-sm-block">
                <li><v-icon large color="white"> mdi-facebook </v-icon></li>
                <li><v-icon large color="white"> mdi-instagram </v-icon></li>
                <li><v-icon large color="white"> mdi-youtube </v-icon></li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- <img src="../../../public/image/banner.webp" alt="" /> -->
    </div>
  </div>
</template>
<script>
import LoginForm from './LoginForm.vue';

export default {
    data() {
        return {
            bgImage: "url(\"../../../public/image/banner.webp\")",
            colors: [
                "indigo",
                "warning",
                "pink darken-2",
                "red lighten-1",
                "deep-purple accent-4",
            ],
            slides: [
                { count: "first", src: "banner1.webp" },
                { count: "second", src: "banner2.jpg" },
                { count: "second", src: "banner3.jpg" },
                { count: "second", src: "banner4.jpg" },
            ],
        };
    },
    components: { LoginForm }
};
</script>
<style>
/* .carousel{
        height: 90vh !important;
    } */
.button {
  /* border: red !important;; */
}
.banner {
  /* background: url("../../../public/image/banner2.jpg"); */
  background-image: url("../../../public/image/banner.webp");
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
  overflow: hidden;
  /* background-color: black; */
}
.welcome p {
  font-family: "montserrat-medium", sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}
.welcome h1 {
  font-family: "montserrat-medium", sans-serif;
  font-size: 2em;
  line-height: 1.333;
  margin-top: 0;
  color: #ffffff;
}
.welcome {
  /* filter: brightness(100%); */
  /* opacity:1; */
  /* position: relative; */
  /* top: 25vh; */
  padding-top: 10vh;
  min-height: 100vh;
  /* background-color: red; */
  display: flex;
  align-items: center;
  color: white;
  /* width: 100vw; */
  /* width: 50vw;
  margin-left: 10vw; */
}
.welcome-social ul {
  list-style: none;
}
.welcome-social ul li {
  padding: 5px;
}
</style>
