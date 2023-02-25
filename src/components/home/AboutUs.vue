<template>
  <div class="about-us">
    <div class="about-one">
      <img src="../../../public/image/yoga_pose.png" alt="" />
    </div>
    <div class="about-two">
      <h1 class="primary--text about">About us</h1>
      <h1 class="side-heading">
        Rise Up Your Inner Happinnes To The Next Level With Us
      </h1>
      <p class="paragraph">
        Master Your Soul is curated by certified Theta and Reiki healer AnaghaZ.
        What began as a quest for exploration and self-actualization, has
        brought her to the path of sharing her knowledge and helping others live
        their best life. Her healing techniques are not limited to one school of
        thought as it combines aspects Spirituality, Theta healing, Reiki,
        Ancestral healing & Raja Yoga
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false,
    cardDatas: [{ no: 1 }, { no: 2 }, { no: 3 }, { no: 4 }],
  }),
};
</script>
<style>
.about-us {
  padding: 5vh 5vw;
  display: flex;
  align-items: center;
}
.about-one {
  flex: 1;
}
.about-one img{
  height: 100%;
  width: 100%;
}
.about-two {
  flex: 1;
}
.about-two .about {
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}
.about-two .side-heading {
  margin-top: 20px;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
}
.about-two .paragraph{
  margin-top: 20px;
  font-size: 1.5rem;
}
.divider::before {
}
.divider p {
  display: inline-block;
  height: 2px;
  width: 40vw;
  background-color: rgba(0, 0, 0, 0.1);
}
*,
::before,
::after {
  box-sizing: inherit;
}
@media screen and (max-width: 600px){
  .about-us {
    flex-direction: column;
  }
  .about-two .side-heading {
    margin-top: 20px;
    font-size: 1.8em;
    line-height: 1.333;
  }
  .about-two .paragraph{
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
}
</style>
