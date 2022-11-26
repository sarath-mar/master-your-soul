<template>
  <div>
    <Banner />
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
};
</script>
<style>
.home {
  height: 100vh;
}
</style>
