<template>
  <div class="mb-5 about-us pa-5">
    <div class="content">
    <p class="helo text-center">Hello There</p>
    <h1 class="we-are text-center">We Are Master Your Soul</h1>
    <div class="divider text-center"><p class="text-center"></p></div>
    <p class="description text-center ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam illo
      veritatis mollitia nulla earum odit ea ipsum repudiandae animi accusamus
      veniam molestias, officia consectetur? Minus, accusantium in! Quibusdam,
      distinctio magnam!
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
  background-color: #39b54a;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
.content{
  margin:0px 5vw;
  /* background: red; */
}
.helo {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
}
.we-are {
  color: white;
  font-size: 3.2rem;
}
.description{
  padding: 10px;
  font-size: 1.5rem;
  /* line-height: 1.1; */
}
.divider::before {

}
.divider p{
  display: inline-block;
  height: 2px;
  width: 40vw;
  background-color: rgba(0, 0, 0, 0.1);
}
*, ::before, ::after {
  box-sizing: inherit;
}
/* #39B54A */
</style>
