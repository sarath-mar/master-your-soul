<template>
  <div>
    <div class="d-flex align-center home">
      <banner />
    </div>
    <!-- <brief-discription class="mt-10"/> -->
  </div>
</template>

<script>
import Banner from "@/components/home/Banner.vue";
import BriefDiscription from "@/components/home/BriefDiscription.vue";

export default {
  name: "Home",

  components: { Banner, BriefDiscription },
};
</script>
<style>
.home {
  height: 100vh;
}

</style>
