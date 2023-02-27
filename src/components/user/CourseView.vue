<template>
  <div class="tab-course-main">
    <div class="my-4 view-all-course">
      <router-link
        :to="{
          name: 'courses',
          // params: { customerId: celebrity.customer._id },
          // query: { customerId: celebrity.customer._id },
        }"
      >
        <v-btn class=" primary--text"> view all courses </v-btn>
      </router-link>
    </div>
    <v-tabs v-model="tabs" color="primary" align-tabs="center">
      <v-tab v-for="(tabData, i) in tabDatas" :key="i">{{
        tabData.title
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs" class="mt-5 tab-items">
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
<style>
.view-all-course {
  display: flex;
  justify-content: end ;
}
.tab-course-main {
  padding: 5vh 5vw;
  padding-bottom: 100px;
}
@media screen and (max-width: 600px) {
  .tab-course-main {
    padding: 5vh 0vw;
  }
  .tab-items {
    padding: 0vh 5vw;
  }
}
</style>
