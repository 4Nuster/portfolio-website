<template>
  <section class="certificates flex flex-col align-center">
    <div class="title -skew-x-12 -skew-y-1">
      <TitleComponent text="CERTIFICATES" />
    </div>
    <div
      class="cert-cards -skew-x-6 -skew-y-1 flex flex-nowrap gap-4 overflow-x-hidden"
    >
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/microclub.jpg"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/nasa.png"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/lhd-build.png"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/ml-with-python.png"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/junction.png"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/intro-to-python.png"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49]">
        <v-img
          src="../assets/certificates/algeria-20.png"
          :aspect-ratio="aspectRatio"
          cover
        />
      </v-card>
    </div>
  </section>
</template>

<script>
import TitleComponent from "./TitleComponent.vue";
export default {
  data: () => ({
    aspectRatio: 6 / 5,
  }),
  components: {
    TitleComponent,
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

.certificates {
  height: 100vh;
  overflow: hidden;
  align-content: center;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), #fff, #fff);
}

.title {
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  text-align: center;
  font-size: 5rem;
  -webkit-text-stroke: 0.2rem #fff;
}

.cert-cards {
  width: 120vw;
  padding-bottom: 1rem;
}
.cert-card {
  /* min-height: 300px; */
  min-width: 450px;
  border-radius: 5%;
  animation: scroll-certs 20s linear alternate infinite;
}

@keyframes scroll-certs {
  from {
    left: 10%;
  }
  to {
    left: -110%;
  }
}
</style>
