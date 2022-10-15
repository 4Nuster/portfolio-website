<template>
  <section class="skills grid grid-cols-5">
    <div class="skill-desc col-span-3 -skew-x-12 -skew-y-1">
      <TitleComponent text="SKILLS" />
    </div>
    <div class="skills-menu col-span-2 flex flex-wrap -skew-x-12 -skew-y-1">
      <button class="skill left-skills"><span>JAVASCRIPT</span></button>
      <button class="skill right-skills"><span>HTML/CSS</span></button>
      <button class="skill left-skills"><span>PYTHON</span></button>
      <button class="skill right-skills"><span>JAVA</span></button>
      <button class="skill left-skills"><span>DATABASES</span></button>
      <button class="skill right-skills"><span>UI/UX</span></button>
      <button class="skill left-skills"><span>GRAPHIC DESIGN</span></button>
      <button class="skill right-skills"><span>3D MODELING</span></button>
      <button class="skill left-skills"><span>GAME DEV</span></button>
      <button class="skill right-skills"><span>C/C++</span></button>
    </div>
  </section>
</template>

<script>
import TitleComponent from "./TitleComponent.vue";

export default {
  components: {
    TitleComponent,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
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
