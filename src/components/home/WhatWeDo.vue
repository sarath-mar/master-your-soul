<template>
  <div class="mb-5 what-we pa-5">
    <div class="content">
      <p class="what-we-first text-center">What We Do</p>
      <h1 class="we-do-for text-center">
        Learn How To Transform To State Of Bliss Using Unique Healing And
        Meditation Techniques
      </h1>
      <div class="divider text-center"><p class="text-center"></p></div>
      <h1 class="text-center">
        Masterclass I'll Share With You The Secrets On
      </h1>
      <div class="list-data mt-5">
        <v-row class="">
          <v-col cols="12" sm="6">
            <span v-for="data in masterClassDataFirst" :key="data">
              <v-card  elevation="7" class="pa-3 pt-6 mt-5 ">
                <p>
                  {{ data }}
                </p>
              </v-card>
            </span>
          </v-col>
          <v-col cols="12" sm="6">
            <span v-for="data in masterClassDataSecond" :key="data">
              <v-card elevation="7" class="pa-3 pt-6 mt-5">
                <p>
                  {{ data }}
                </p>
              </v-card>
            </span>
          </v-col>

          <!-- <v-col cols="12" class="green ">
       <p>How to be least affected by challenging situations in your life.</p> 
      </v-col> -->
        </v-row>
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

      "How to be the creator of your life.",
      "To be a happy cool wonder human being where people will want to be like you.",
    ],
    masterClassDataSecond: [
      "How to convert the challenges into possibilities.",

      "How to be that strong magnet to attract all the good things around you.",

      "How to stay neutral in difficult situations.",

      "Who you are and the infinite energy you have.",

      "Healing your traumas and to start manifesting your dreams.",

      "Upgrading your life style just by creating a structure in your life.",
    ],
  }),
};
</script>
<style>
.what-we {
  /* background-color: #39b54a; */
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
}
.what-we-first {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  color: #39b54a;
}
.we-do-for {
  font-size: 3rem;
  color: black;
}
.description {
  padding: 10px;
  font-size: 1.5rem;
  /* line-height: 1.1; */
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
ul {
  list-style: none;
}
.list-data p {
  font-size: 1rem;
  font-weight: 600;
  color: #39b54a;
}
v-card{
 background-color: #39b54a !important; 
}
/* #39B54A */
</style>
