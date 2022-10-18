<template>
  <section class="projects grid grid-cols-5">
    <div class="col-span-2"></div>
    <div class="m-auto col-span-3 -skew-x-12 -skew-y-1">
      <TitleComponent text="PROJECTS" />
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

.projects {
  height: 100vh;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8),
    #fff,
    #fff
  );
}
</style>
