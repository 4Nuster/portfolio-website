<template>
  
  <v-dialog v-model="displayCertificate" scroll-strategy="close" close-on-content-click="true">
    <template v-slot:activator="{ props }">
      <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49] min-w-[15vw]" v-bind="props">
        <!-- <v-card-title>{{ link }}</v-card-title> -->
        <!-- <v-img :src="link" :aspect-ratio="aspectRatio" cover /> -->
        <v-img :src="require(`../assets/${link}`)" :aspect-ratio="aspectRatio" cover />
      </v-card>
    </template>

    <!-- <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="displayCertificate = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card> -->

    <v-img :src="require(`../assets/${link}`)" height="80vh"/>
  </v-dialog>
</template>

<script>
export default {
  props: ["link"],
  data: () => ({
    aspectRatio: 6 / 5,
    displayCertificate: false
  }),
};
</script>

<style scoped>
.cert-card {
  border-radius: 5%;
  /* animation: scroll-certs 25s linear alternate infinite; */
}

/* @keyframes scroll-certs {
  from {
    left: 10%;
  }
  to {
    left: -210%;
  }
} */
</style>
