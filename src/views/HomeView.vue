<template>
  <div id="main">
    <Banner id="banner" />
    <!-- <div class="arrow-up" @click="select">
      <img src="../../public/image/arrow-up.png" alt="">
    </div> -->
    <AboutUs />
    <WhatWeDo />
  </div>
</template>

<script>
import Banner from "@/components/home/Banner.vue";
import AboutUs from "@/components/home/AboutUs.vue";
import WhatWeDo from "@/components/home/WhatWeDo.vue";

export default {
  name: "Home",

  components: { Banner, AboutUs, WhatWeDo },
  methods:{
    select(event) {
      // console.log(event)
          // event.currentTarget.id="main";
            // console.log(targetId); // returns 'foo'
        }
  }
};
</script>
<style>
.arrow-up img{
  height: 60px;
}
.arrow-up{
  position: sticky;
  top: 65vh;
  right: 20px;
  float:right;
  animation: arrow-up-animation 1s infinite linear;
  cursor: pointer ;
  
}
@keyframes arrow-up-animation {
  0%{
   transform: translateY(-5px);
  }
  50%{
   transform: translateY(0px);
  }
  100%{
    transform: translateY(-5px);
  }
}
/* .home {
  height: 100vh;
} */
</style>
