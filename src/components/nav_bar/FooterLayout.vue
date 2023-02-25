<template>
  <div  >
    <!-- <v-layout justify-center>
      <v-card class="card" height="50vh" width="70%"> </v-card>
    </v-layout> -->
    <v-footer  padless>
      <v-card
        width="100%"
        elevation="8"
        tile
        color=""
        class="dark footer-card  primary--text text-center pt-10 "
      >
      <div class="yoga-footer">
        <img src="../../../public/image/yoga-logo.png" alt="">
      </div>
        <v-card-text>
          <a
            :href="icon.link"
            v-for="icon in icons"
            :key="icon"
            class="icon-link"
          >
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="24px">{{ icon.icon }}</v-icon>
            </v-btn>
          </a>
        </v-card-text>

        <!-- <v-card-text class="white--text pt-0"
          >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin.</v-card-text
        > --> 

        <v-divider></v-divider>

        <v-card-text class="primary--text">
          {{ new Date().getFullYear() }} —
          <strong>{{ title  }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-facebook", link: "" },
      { icon: "mdi-twitter", link: "" },
      { icon: "mdi-linkedin", link: "https://www.linkedin.com/groups/9202512" },
      { icon: "mdi-instagram", link: "" },
    ],
    title:'Master Your Soul'
  }),
};
</script>
<style>
.yoga-footer{
  height: 100px;
}
.yoga-footer img{
  height: 100%;
}
.icon-link {
  text-decoration: none;
}
.card {
  position: relative;
  margin-bottom: 100px;
  z-index: 10;
}
.footer-card{
  /* height: 30vh; */
}
</style>
