<template>
  <article class="scroller h-screen">
    <HeroView />
    <SkillsView />
  </article>
</template>

<script>
import HeroView from "./HeroView.vue";
import SkillsView from "./SkillsView.vue";

export default {
  name: "MainView",
  components: {
    HeroView,
    SkillsView,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans");
@import url("https://fonts.googleapis.com/css?family=Russo+One");

/* ::-webkit-scrollbar {
  display: none;
} */

.scroller {
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  text-align: center;
  background: url("../assets/pattern-bg.jpg");
  background-size: cover;
}

.scroller section {
  scroll-snap-align: start;
}
</style>
