<template>
  <section class="skills grid grid-cols-5">
    <div class="skill-desc col-span-3 -skew-x-12 -skew-y-1">
      <TitleView text="SKILLS" />
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
import TitleView from "./TitleView.vue";

export default {
  components: {
    TitleView,
  },
};
</script>

<style></style>
