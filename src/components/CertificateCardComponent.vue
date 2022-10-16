<template>
  <v-card class="cert-card drop-shadow-[-.5rem_.5rem_4px_#1f3f6f49] min-w-[15vw]">
    <!-- <v-card-title>{{ link }}</v-card-title> -->
    <!-- <v-img :src="link" :aspect-ratio="aspectRatio" cover /> -->
    <v-img :src="require(`../assets/${link}`)" :aspect-ratio="aspectRatio" cover />
  </v-card>
</template>

<script>
export default {
  props: ["link"],
  data: () => ({
    aspectRatio: 6 / 5,
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
