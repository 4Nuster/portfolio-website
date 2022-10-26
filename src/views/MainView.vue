<template>
  <article class="scroller h-screen">
    <HeroComponent />
    <SkillsComponent />
    <CertificatesComponent />
    <ProjectsComponent />
  </article>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import SkillsComponent from "../components/SkillsComponent.vue";
import CertificatesComponent from "../components/CertificatesComponent.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";

export default {
  name: "MainView",
  components: {
    HeroComponent,
    SkillsComponent,
    CertificatesComponent,
    ProjectsComponent,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans");
@import url("https://fonts.googleapis.com/css?family=Russo+One");

::-webkit-scrollbar {
  display: none;
}

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
