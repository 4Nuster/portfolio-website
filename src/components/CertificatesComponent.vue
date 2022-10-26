<template>
  <section class="certificates flex flex-col align-center">
    <div class="title -skew-x-12 -skew-y-1">
      <TitleComponent text="CERTIFICATES" />
    </div>
    <!-- <div class="cert-cards -skew-x-6 -skew-y-1 flex flex-nowrap gap-4 overflow-x-hidden"> -->
    <div class="cert-cards grid grid-cols-4 gap-4 justify-items-center">  
      <CertificateCardComponent v-for="item in links" :link="item" :key="item"/>
    </div>
  </section>
</template>

<script>
import TitleComponent from "./TitleComponent.vue";
import CertificateCardComponent from "./CertificateCardComponent.vue";

export default {
  components: {
    TitleComponent,
    CertificateCardComponent,
  },
  data: () => ({
    photolink: "certificates/algeria-20.png",
    links: [
      "certificates/nasa.png",
      "certificates/microclub.jpg",
      "certificates/backend.png",
      "certificates/frontend.png",
      "certificates/js.png",
      "certificates/responsive-web-design.png",
      "certificates/junction.png",
      "certificates/ml-with-python.png",
      "certificates/intro-to-python.png",
      "certificates/lhd-build.png",
      "certificates/algeria-20.png"
    ]
  })
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
  padding-top: 1rem;
  padding-bottom: 1.3rem;
  text-align: center;
  font-size: clamp(1rem, 10vw, 4rem);
  -webkit-text-stroke: 0.2rem #fff;
}

.cert-cards {
  /* width: 120vw; */
  padding-bottom: 1rem;
}
</style>
