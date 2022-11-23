<template>
  <div>
    <div class="main" v-if="!showLoginPage">
      <h4 class="text-center mb-5">
        Grab The Free HAPPY PILL Masterclass, For People In Pain, Limitation And
        Trauma Today!
      </h4>
      <!-- <img height="600" src="../../../public/image/test2.png" alt="">   -->
      <p class="text-center mb-5">
        Learn How To Transform To State Of Bliss Using Unique Healing And
        Meditation Techniques
      </p>
      <p class="text-center green--text mb-5">
        Join my free group to grab the FREE MASTERCLASS
      </p>
      <div class="">
        <button
          @click="joinNow"
          class="green--text primary pa-3 mx-4 rounded-lg"
        >
          JOIN NOW
        </button>
        <button
          @click="LoginNow"
          class="green--text primary pa-3 mx-4 rounded-lg"
        >
          LOGIN NOW
        </button>
      </div>
    </div>
    <login-page v-else />
  </div>
</template>
<script>
import LoginPage from "./LoginPage.vue";
export default {
  components: {
    LoginPage,
  },
  data() {
    return {
      showLoginPage: true,
    };
  },
  methods: {
    LoginNow() {
      this.showLoginPage = true;
    },
  },
};
</script>
<style>
.main {
  /* height: 50vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
