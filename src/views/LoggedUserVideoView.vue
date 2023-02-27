<template>
  <div class="user-video">
    <UserCoursePage />
  </div>
</template>
<script>
import UserCoursePage from "@/components/user/UserCoursePage.vue";
export default {
  components: {
    UserCoursePage,
  },
  data() {
    return {};
  },
};
</script>
<style>
.user-video {
  margin-top: 6rem;
}
</style>
