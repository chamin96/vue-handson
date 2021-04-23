<template>
  <div>
    <li class="list-group-item" @click="onVideoSelect">
      <div class="row">
        <div class="col-4">
          <img :src="thumbnailUrl" class="img-fluid" alt="..." />
        </div>
        <div class="col-8">
          <h6>{{ video.snippet.title }}</h6>
          <small class="text-muted">{{ video.snippet.channelTitle }}</small>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["video"],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    },
  },
};
</script>

<style>
li {
  cursor: pointer;
}
li:hover {
  background: #eee;
}
</style>