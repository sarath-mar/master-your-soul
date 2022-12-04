<template >
    <div>  
       <UserVideoPage class="user-video"/>
    </div>
</template>
<script>
import UserVideoPage from '@/components/user/UserVideoPage.vue';
export default{
    components:{
        UserVideoPage
    },
    data() {
        return {
            
        }
    },

}
</script>
<style>
.user-video {
  margin-top: 6rem;
}
</style>