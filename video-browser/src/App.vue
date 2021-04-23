<template>
  <div class="container-fluid">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" v-if="selectedVideo" />
      <VideoList :videoList="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";

const API_KEY = "AIzaSyAnzzgxCeTbYKHAhmow7cZg_T0mg-PtTMY";

export default {
  name: "App",
  components: { SearchBar, VideoList, VideoDetail },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    onTermChange(term) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            maxResults: 5,
            q: term,
          },
        })
        .then((res) => {
          this.videos = res.data.items;
        });
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
  },
};
</script>
