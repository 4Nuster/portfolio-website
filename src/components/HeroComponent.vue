<template>
  <section class="h-screen grid grid-cols-2 content-center">
    <div class="bg-gradient-to-r from-[#fffc] to-white flex flex-col justify-center">
      <!-- <div class="hero-left -skew-x-12 -skew-y-1"> -->
      <div class="2xl:ml-[6rem] ml-[2rem] -skew-x-12 -skew-y-1">
        <TitleComponent text="YASSINE BACHA"/>
        <div class="subtitle hero-text">
          FRONT-END DEVELOPER<br />
          MSc IN COMPUTER VISION
        </div>
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

.hero-right {
  /*background-image: linear-gradient(to right, rgba(255,255,255,0.7), rgba(0,0,0,0)), url("../assets/hero\ bg.png");*/
  /* background-image: url("../assets/V4.png"); */
  background-image: linear-gradient(to bottom, #fff0, #fff0, #fff),
    url("../assets/V4.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}

.hero-left-container {
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), #fff);
}

.subtitle {
  text-align: left;
  font-weight: 600;
  font-size: clamp(.5rem, 4vh, 2.5rem);
  font-family: "Nunito Sans", sans-serif;
  line-height: clamp(.5rem, 4vh, 2.5rem);
  color: #2b515f;

  margin-top: 1rem;
  margin-bottom: 5rem;
}

.scroll {
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: clamp(.5rem, 4vh, 2.5rem);
  color: #1b313f;

  animation: fade-in-out 2s ease alternate-reverse infinite;
}

.scroll .icon {
  margin-left: clamp(.25rem, 10vh, 1rem);
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
