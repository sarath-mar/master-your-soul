<template>
  <div class="mb-5">
    <h2 class="text-center heading-font mb-5">A BRIEF DESCRIPTION ABOUT THE WAYS OF YOGA</h2>
    <p class="text-center mb-5 ">
      We at KRIYA provide various services to the nature of the clients. Wish
      how you would like to spend the time here we can talk and come to a
      conclusion.
    </p>
    <!-- class="mx-auto" -->
    <!-- <v-layout wrap gutters>
        <v-flex  sm12 md4 lg3 v-for="cardData in cardDatas" :key="cardData.no">
            <v-card  class="mb-5">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
        </v-flex>
    </v-layout> -->
    <v-row>
      <v-col
        sm="12"
        md="4"
        lg="3"
        v-for="cardData in cardDatas"
        :key="cardData.no"
      >
        <v-card class="mb-5">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange lighten-2" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
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
