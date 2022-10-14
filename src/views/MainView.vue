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

.skills {
  height: 100vh;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), #fff, #fff);
}

.skill-desc {
  margin: auto;
}

.skills-menu {
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.left-skills {
  border: 3px solid #196d7c;
  border-left-width: 6px;
  border-radius: 2rem 0.5rem 0.5rem 2rem;
  margin-right: 1.8rem;
  background: linear-gradient(to right, #f8f8f8, #fff, #fff);
}

.right-skills {
  border: 3px solid #196d7c;
  border-right-width: 6px;
  border-radius: 0.5rem 2rem 2rem 0.5rem;
  background: linear-gradient(to left, #f8f8f8, #fff, #fff);
}

.skill {
  position: relative;
  height: 5rem;
  width: 12rem;
  color: #196d7c;
  /* background-color: #fff; */
  font-family: "Nunito Sans", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
}

.skill span {
  line-height: 5rem;
  vertical-align: middle;
}

.left-skills:hover {
  animation: left-skills-hover 500ms ease forwards;
}

.right-skills:hover {
  animation: right-skills-hover 500ms ease forwards;
}

@keyframes left-skills-hover {
  to {
    background: linear-gradient(to right, #2b515f, #196d7c, #196d7c);
    border-color: #fff;
    /* background-color: #196d7c; */
    color: #fff;
    transform: translateX(10%) translateY(-10%);
    box-shadow: -0.5rem 0.5rem 8px #1f3f6f49;
  }
}

@keyframes right-skills-hover {
  to {
    background: linear-gradient(to right, #196d7c, #196d7c, #2b515f);
    border-color: #fff;
    /* background-color: #196d7c; */
    color: #fff;
    transform: translateX(10%) translateY(-10%);
    box-shadow: -0.5rem 0.5rem 8px #1f3f6f49;
  }
}

.left-skills:active {
  animation: left-skills-clicked 500ms ease forwards;
}

.right-skills:active {
  animation: right-skills-clicked 500ms ease forwards;
}

@keyframes left-skills-clicked {
  to {
    background: linear-gradient(to right, #2b515f, #196d7c, #196d7c);
    border-color: #fff;
    color: #fff;
  }
}

@keyframes right-skills-clicked {
  to {
    background: linear-gradient(to right, #196d7c, #196d7c, #2b515f);
    border-color: #fff;
    color: #fff;
  }
}
</style>
