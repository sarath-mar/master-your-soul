<template>
  <div>
    <!-- <add-user  class="add-user"/> -->
    <BothUserAndVideo class="add-user"/>
  </div>
</template>
<script> 
import AddUser from "@/components/admin/AddUser.vue";
import BothUserAndVideo from '@/components/admin/BothUserAndVideo.vue';
export default {
  components: { AddUser, BothUserAndVideo },
  data() {
    return {};
  }, 
};
</script>
<style>
.add-user{
    margin-top: 6rem;
}</style>
