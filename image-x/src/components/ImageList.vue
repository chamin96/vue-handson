<template>
  <div>
    <div v-for="image in allImages" :key="image.id">
      <img :src="image.urls.small" alt="image.alt_description" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages"]),
  methods: mapActions(["fetchImages", "getPublicImages"]),
  created() {
    this.getPublicImages();
  },
};
</script>

<style>
</style>