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
<img src="../../../public/image/banner.webp" alt="">
    </div>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
            {count:"first",src:"banner1.webp"},
            {count:"second",src:"banner2.jpg"},
            {count:"second",src:"banner3.jpg"},
            {count:"second",src:"banner4.jpg"},
         
        ],
      }
    },
  }
</script>
<style >
    /* .carousel{
        height: 90vh !important;
    } */
    /* .banner{
      background-image: url("../../../public/image/banner.webp");
      height: 100vh;
    } */
    .banner img{
      min-height: 100vh;
      width: 100vw;
/* object-fit: contain; */
    }
</style>