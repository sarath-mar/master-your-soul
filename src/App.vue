<template>
  <v-app>
    <navigation-bar />
    <v-main>
       <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        
      >
      <router-view />
       </v-sheet>
    </v-main>
    <footer-layout/> 
  </v-app>
</template>

<script>
import FooterLayout from './components/nav_bar/FooterLayout.vue';
import NavigationBar from "./components/nav_bar/NavigationBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterLayout,
  },
  data: () => ({
    //
  }),
};
</script>
<style >
  *{
    /* font-family: 'Poppins', sans-serif; */
    font-family: 'Merienda', cursive;
  }
  .heading-font{
    font-size: 2rem;

    font-family: 'Merienda', cursive;
  }
</style>
