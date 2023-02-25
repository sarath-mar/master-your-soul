<template>
  <div class="what-we">
    <p class="course text-center primary--text">Courses</p>
    <h1 class="we-do-for">
      Learn How To Transform To State Of Bliss Using Unique Healing And
      Meditation Techniques
    </h1>
    <div class="list-data mt-5">
      <div v-for="(course,index) in courseDetails" :key="course">
        <v-card elevation="7" class="card-main">
          <div class="icon">
            <img :src="require(`../../../public/image/yoga_small/yoga-${index+1}.png`)" alt="" />
          </div>
          <div>
            <h1>
              {{ course.title }}
            </h1>
            <h3 class="mt-3">{{ course.description }}</h3>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    courseDetails: [
      {
        title: "Hatha Yoga",
        description:
          "Lorem simply text of the printing and typesetting industry.",
      },
      {
        title: "Karma Yoga",
        description:
          "Lorem simply text of the printing and typesetting industry.",
      },
      {
        title: "Tantra Yoga",
        description:
          "Lorem simply text of the printing and typesetting industry.",
      },
      {
        title: "Bhakti Yoga",
        description:
          "Lorem simply text of the printing and typesetting industry.",
      },
    ],
  }),
};
</script>
<style>
.what-we {
  background-color: var(--secondary);
  padding: 5vh 5vw;
  padding-bottom: 10vh;
}
.course {
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}
.list-data {
  font-size: 1rem;
  font-weight: 600;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.card-main {
  min-height: 200px;
  padding: 10px;
  background-color: var(--primary) !important;
  color: white !important;
  display: flex;
  align-items: center; 
  gap: 15px;
  transition: .2s ease-in;
  cursor: pointer;
}
.card-main:hover{
  transform: scale(1.04);
}
.we-do-for {
  margin-top: 20px;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
}
.icon img{
  height: 100px;
}
@media screen and (max-width: 600px) {
  .we-do-for {
    margin-top: 20px;
    font-size: 1.8em;
    text-align: center;
  }
}

/* #39B54A */
</style>
