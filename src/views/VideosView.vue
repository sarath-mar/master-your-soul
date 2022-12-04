<template>
  <div >
    <UnloggedUserVideo class="user-video" />
  </div>
</template>
<script>
import UnloggedUserVideo from "@/components/videos/UnloggedUserVideo.vue";
export default {
  components: {
    UnloggedUserVideo,
  },
};
</script>
<style>
.user-video {
  margin-top: 6rem;
}
</style>
