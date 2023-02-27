<template>
  <div>
    <div class="breadcrumb">
      <div class="main-line">
        <div class="first-line">
          <div class="inner-line ">
            <h3 class="primary--text">Instructor</h3>
            <h4>Anagha</h4>
          </div>
          <div class="inner-line mt-3 ">
            <h3 class="primary--text">Category</h3>
            <h4>Bhikran Yoga</h4>
          </div>
          <div class="inner-line mt-3">
            <h1 class="text-center">Arts of Living</h1>
          </div>
        </div>
      </div>
    </div>
   
    <course-view/>
  </div>
</template>

<script>
import CourseView from './CourseView.vue';
export default {
  components: { CourseView },};
</script>

<style>
.course-main {
  padding: 5vh 5vw;
}

.first-line {
  padding: 30px;
}
.first-line h1 {
  font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 0.3rem;
  /* padding: 10px; */
}
.first-line h3 {
  font-size: .8em;
  font-weight: 700;
  letter-spacing: 0.1rem;
}
.first-line h4 {
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.2rem;
}
.inner-line {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: start;  */
}
.breadcrumb {
  position: relative;
  background-attachment: fixed !important;
  background-position: center left !important;
  background-image: url("../../../public/image/course-yoga-pose.jpg");
  height: 250px;
  color: white;
}
.breadcrumb .main-line {
  /* padding: 10px; */
  position: absolute;
  width: 100%;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* display: flex; */
  color: white;
  /* font-size: 2.5em;
  font-weight: 700;
  letter-spacing: 0.3rem;*/
}
.breadcrumb::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  background: black;
  opacity: 0.8;
}
</style>
