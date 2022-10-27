<template>
  <section class="skills grid grid-cols-5">
    <iframe class="col-span-3 min-h-[100vh]" v-if="skill == 'js'" src='https://my.spline.design/untitled-b4c9e929a7288bca4d4a5de0ee06bfac/' frameborder='0' width='100%' height='100%'></iframe>
    <div v-if="skill == ''" class="m-auto col-span-3 -skew-x-12 -skew-y-1">
      <TitleComponent text="SKILLS" />
    </div>
    <!-- <div class="skills-menu col-span-2 flex flex-wrap -skew-x-12 -skew-y-1"> -->
    <div class="align-center my-[4rem] pr-[8rem] col-span-2 grid grid-cols-2 content-center gap-8 -skew-x-12 -skew-y-1">
      <button class="skill left-skills justify-self-end" @click="skill = 'js'"><span>JAVASCRIPT</span></button>
      <button class="skill right-skills justify-self-start"><span>HTML/CSS</span></button>
      <button class="skill left-skills justify-self-end"><span>PYTHON</span></button>
      <button class="skill right-skills justify-self-start"><span>JAVA</span></button>
      <button class="skill left-skills justify-self-end"><span>C/C++</span></button>
      <button class="skill right-skills justify-self-start"><span>DATABASES</span></button>
      <button class="skill left-skills justify-self-end"><span>UI/UX</span></button>
      <button class="skill right-skills justify-self-start"><span>GRAPHIC DESIGN</span></button>
      <button class="skill left-skills justify-self-end"><span>3D MODELING</span></button>
      <button class="skill right-skills justify-self-start"><span>GAME DEV</span></button>
    </div>
  </section>
</template>

<script>
import TitleComponent from "./TitleComponent.vue";

export default {
  components: {
    TitleComponent,
  },
  data: () => ({
    skill: ""
  })
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.skills {
  height: 100vh;
  background-image: linear-gradient(to right, #fff0, #fff0, #fff0, #fff, #fff),
    linear-gradient(to top, #fff, #fff0, #fff0, #fff),
    url("../assets/sixteen-by-nine.png");
  background-size: contain;
  background-position-x: -100%;
}

.left-skills {
  border: 3px solid #196d7c;
  border-left-width: 6px;
  border-radius: 2rem 0.5rem 0.5rem 2rem;
  background: linear-gradient(to right, #eee, #fff, #fff);
}

.right-skills {
  border: 3px solid #196d7c;
  border-right-width: 6px;
  border-radius: 0.5rem 2rem 2rem 0.5rem;
  background: linear-gradient(to left, #eee, #fff, #fff);
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
