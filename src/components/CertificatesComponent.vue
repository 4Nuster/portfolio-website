<template>
  <section class="certificates flex flex-col align-center">
    <div class="title -skew-x-12 -skew-y-1">
      <TitleComponent text="CERTIFICATES" />
    </div>
    <!-- <div class="cert-cards -skew-x-6 -skew-y-1 flex flex-nowrap gap-4 overflow-x-hidden"> -->
    <div class="cert-cards grid grid-cols-4 gap-4 justify-items-center -skew-x-6 -skew-y-1 ">  
      <CertificateCardComponent link="certificates/nasa.png" />
      <CertificateCardComponent link="certificates/microclub.jpg" />
      <CertificateCardComponent link="certificates/backend.png" />
      <CertificateCardComponent link="certificates/frontend.png" />
      <CertificateCardComponent link="certificates/js.png" />
      <CertificateCardComponent link="certificates/responsive-web-design.png" />
      <CertificateCardComponent link="certificates/junction.png" />
      <CertificateCardComponent link="certificates/ml-with-python.png" />
      <CertificateCardComponent link="certificates/intro-to-python.png" />
      <CertificateCardComponent link="certificates/lhd-build.png" />
      <CertificateCardComponent link="certificates/algeria-20.png" />
    </div>
    <!-- <v-card class="bg-red-500 drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49] min-h-[300px] min-w-[400px]">
      <v-card-title>{{photolink}}</v-card-title>
      <v-img :src="require(`../assets/${photolink}`)" />
    </v-card> -->
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
    photolink: "certificates/algeria-20.png"
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
  padding-bottom: 1.5rem;
  text-align: center;
  font-size: 5rem;
  -webkit-text-stroke: 0.2rem #fff;
}

.cert-cards {
  /* width: 120vw; */
  padding-bottom: 1rem;
}
</style>
