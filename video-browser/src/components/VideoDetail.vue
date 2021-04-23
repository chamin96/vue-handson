<template>
  <div class="col-lg-8">
    <div class="ratio ratio-16x9">
      <iframe
        :src="videoUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="container my-4">
      <h5>{{ video.snippet.title }}</h5>
      <small class="text-muted">{{ video.snippet.channelTitle }}</small>
      <br /><br />
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style>
</style>