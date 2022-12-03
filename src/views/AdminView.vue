<template>
  <div>
    <!-- <add-user  class="add-user"/> -->
    <BothUserAndVideo class="add-user" />
  </div>
</template>
<script>
// import AddUser from "@/components/admin/AddUser.vue";
import BothUserAndVideo from "@/components/admin/BothUserAndVideo.vue";
import { userRole} from "@/utils/fetchUser";
export default {
  components: {  BothUserAndVideo },
  data() {
    return {};
  },
  created() {
    // if (!(userRole() && userRole() == "ADMIN")) {
    //   this.$router.replace({ path: "/" });
    // }
  },
};
</script>
<style>
.add-user {
  margin-top: 6rem;
}
</style>
