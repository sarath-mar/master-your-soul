<template>
  <div class="what-we">
    <p class="course text-center primary--text">Courses</p>
    <h1 class="we-do-for">
      Learn How To Transform To State Of Bliss Using Unique Healing And
      Meditation Techniques
    </h1>
    <div class="list-data mt-5">
      <div v-for="data in masterClassDataFirst" :key="data">
        <v-card elevation="7" class="card-main">
          <p>
            {{ data }}
          </p>
          <div>
            
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    masterClassDataFirst: [
      "How to be least affected by challenging situations in your life.",

      "How to make peace with your life and with people around you.",

      "How you can start loving yourself more and what you can gain from it.",

      "How to bring harmony into your life.",
    ],
    masterClassDataSecond: [
      "How to convert the challenges into possibilities.",

      "How to be that strong magnet to attract all the good things around you.",

      "How to stay neutral in difficult situations.",

      "Who you are and the infinite energy you have.",
    ],
  }),
};
</script>
<style>
.what-we {
  background-color: var(--secondary);
  padding: 5vh 5vw;
}
.course {
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
}
.list-data  {
  font-size: 1rem;
  font-weight: 600;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
  gap: 20px;
}
.card-main{
  min-height: 200px;
  padding:10px
}
.we-do-for {
  margin-top: 20px;
  font-size: 2.5rem;
  letter-spacing: 0.2rem;
}
@media screen and (max-width: 600px){
 
  .we-do-for  {
    margin-top: 20px;
    font-size: 1.8em;
    text-align: center;
  }
 
}

/* #39B54A */
</style>
