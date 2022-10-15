<template>
  <section class="hero grid grid-cols-2 content-center">
    <div class="hero-left-container">
      <div class="hero-left -skew-x-12 -skew-y-1">
        <TitleComponent text="YASSINE BACHA" />
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
import TitleComponent from "./TitleComponent.vue";

export default {
  name: "HeroView",
  components: {
    TitleComponent,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.hero {
  height: 100vh;
}

.hero-right {
  /*background-image: linear-gradient(to right, rgba(255,255,255,0.7), rgba(0,0,0,0)), url("../assets/hero\ bg.png");*/
  /* background-image: url("../assets/V4.png"); */
  background-image: linear-gradient(to bottom, #fff0, #fff0, #fff),
    url("../assets/V4.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.hero-left {
  padding-left: 3rem;
  margin-top: 6rem;
  /*background: -webkit-linear-gradient(#196d7c, #1b313f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
}

.hero-left-container {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), #fff);
}

.subtitle {
  text-align: left;
  font-weight: 600;
  font-size: 2.5em;
  font-family: "Nunito Sans", sans-serif;
  line-height: 1em;
  color: #2b515f;

  margin-top: 1rem;
  margin-bottom: 5rem;
}

.scroll {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 2.5em;
  color: #1b313f;

  animation: fade-in-out 2s ease alternate-reverse infinite;
}

.scroll .icon {
  margin-left: 0.5rem;
}

@keyframes fade-in-out {
  from {
    color: #1b313f00;
  }
  to {
    color: #1b313fff;
  }
}
</style>
