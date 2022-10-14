<template>
  <section class="hero grid grid-cols-2 content-center">
    <div class="hero-left-container">
      <div class="hero-left -skew-x-12 -skew-y-1">
        <TitleView text="YASSINE BACHA" />
        <div class="subtitle hero-text">
          FRONT-END DEVELOPER<br />
          MSc IN COMPUTER VISION
        </div>
        <!-- <a class="projects-button drop-shadow-md" href="#">PROJECTS</a> -->
        <div class="scroll">
          SCROLL DOWN<font-awesome-icon
            class="icon"
            icon="fa-solid fa-caret-down"
          />
        </div>
      </div>
    </div>
    <div class="hero-right"></div>
  </section>
</template>

<script>
import TitleView from "./TitleView.vue";

export default {
  name: "HeroView",
  components: {
    TitleView,
  },
};
</script>

<style></style>
