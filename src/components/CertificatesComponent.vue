<template>
  <section class="certificates flex flex-col align-center">
    <div class="title -skew-x-12 -skew-y-1">
      <TitleComponent text="CERTIFICATES" />
    </div>
    <div
      class="cert-cards -skew-x-6 -skew-y-1 flex flex-nowrap gap-4 overflow-x-hidden"
    >
      <CertificateCardComponent link="../assets/certificates/nasa.png" />
      <CertificateCardComponent link="../assets/certificates/microclub.jpg" />
      <CertificateCardComponent link="../assets/certificates/backend.png" />
      <CertificateCardComponent link="../assets/certificates/frontend.png" />
      <CertificateCardComponent link="../assets/certificates/js.png" />
      <CertificateCardComponent
        link="../assets/certificates/responsive-web-design.png"
      />
      <CertificateCardComponent link="../assets/certificates/junction.png" />
      <CertificateCardComponent
        link="../assets/certificates/ml-with-python.png"
      />
      <CertificateCardComponent
        link="../assets/certificates/intro-to-python.png"
      />
      <CertificateCardComponent link="../assets/certificates/lhd-build.png" />
      <CertificateCardComponent link="../assets/certificates/algeria-20.png" />
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
</style>
