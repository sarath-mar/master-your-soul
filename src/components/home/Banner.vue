<template>
  <div class="main">
    <div class="content-main">
      <div class="pa-5">
        <p>Welcome to Master Your Soul</p>
        <h1>
          Learn How To Transform To State Of Bliss Using Unique Healing And
          Meditation Techniques.
        </h1>
        <div class="mt-10 login-join" >
          <v-btn color="primary" x-large outlined class="mr-8">
            JOIN NOW
          </v-btn>
          <LoginForm />
        </div>
      </div>
    </div>
    <div class="img-content-main">
      <div>
        <div class="banner-round-image">
          <img
            class="banner-round"
            src="../../../public/image/home-design.png"
            alt=""
          />
          <img
            class="banner-round-second"
            src="../../../public/image/yoga_pose1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "./LoginForm.vue";

export default {
  data() {
    return {
      bgImage: 'url("../../../public/image/banner.webp")',
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        { count: "first", src: "banner1.webp" },
        { count: "second", src: "banner2.jpg" },
        { count: "second", src: "banner3.jpg" },
        { count: "second", src: "banner4.jpg" },
      ],
    };
  },
  components: { LoginForm },
};
</script>
<style scoped>
/*  */

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15vh 5vw;
  background-image: url("../../../public/image/home-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--primary);
}
.content-main {
  flex: 1.5;
}
.img-content-main {
  flex: 1;
}
.content-main p {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}
.content-main h1 {
  font-size: 3em;
  line-height: 1.333;
  font-weight: 500;
  letter-spacing: 0.1rem;
  margin-top: 0;
}
.login-join{
  display: flex;
}
.banner-round-image {
  background-image: url("../../../public/image/round.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
}
.banner-round-image .banner-round {
  position: relative;
  height: 100%;
  width: 100%;
  animation: infiniteRotate infinite 20s linear;
}
.banner-round-second {
  position: absolute;
  left: 30px;
  height: 90%;
  width: 90%;
}

@keyframes infiniteRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.welcome-social ul {
  list-style: none;
}
.welcome-social ul li {
  padding: 5px;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .main {
    flex-direction: column;
    padding-top: 15vh;
    text-align: center;
  }
  .banner-round-image {
    margin-top: 20px;
    height: 350px;
  }
  .banner-round-second {
    left: 20px;
  }
  .content-main p {
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
  }
  .content-main h1 {
    font-size: 1.8em;
    line-height: 1.333;
    font-weight: 600;
  }
}
</style>
