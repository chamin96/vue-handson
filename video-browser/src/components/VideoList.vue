<template>
  <div class="col-lg-4">
    <ul v-for="video in videoList" :key="video.id.videoId">
      <VideoListItem :video="video" @videoSelect="onVideoSelect" />
    </ul>
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem.vue";
export default {
  components: { VideoListItem },
  name: "VideoList",
  props: ["videoList"],
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    },
  },
};
</script>

<style>
</style>