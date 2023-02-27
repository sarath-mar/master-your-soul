<template>
  <div class="pa-10">
    <v-tabs v-model="tabs" color="primary" align-tabs="center">
      <v-tab v-for="(tabData, i) in tabDatas" :key="i">{{
        tabData.title
      }}</v-tab>
      <!-- <v-tab :key="1">City</v-tab>
      <v-tab :key="2">Abstract</v-tab> -->
      <!-- <v-tab
        class="
          font-weight-bold 
          text-caption text- sm-body-2
          dark--text     
          text-capitalize
          white
          elevation-2
          mb-1
          ms-4
          rounded-lg
        "
        :class="{ 'font-weight-bold white--text ': tabs === 1 }"
        :key="1"
        ><label style="cursor: pointer" class="custom_slider"
          >Refund</label
        ></v-tab
      > -->
    </v-tabs>

    <v-tabs-items v-model="tabs" class="mt-5">
      <v-tab-item v-for="(tabData, i) in tabDatas" :key="i">
        <CourseDescription v-if="i == 0" />
        <curriculam v-if="i == 1" />
        <reviews v-if="i == 2" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import CourseDescription from "./Course/CourseDescription.vue";
import Curriculam from "./Course/Curriculam.vue";
import Reviews from "./Course/Reviews.vue";
export default {
  components: { CourseDescription, Curriculam, Reviews },
  data: () => ({
    tabs: 0,
    tabDatas: [
      { title: "Overview" },
      { title: "Curriculum" },
      { title: "Reviews" },
    ],
  }),
};
</script>
