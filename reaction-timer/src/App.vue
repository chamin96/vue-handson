<template>
  <h1>HOW FAST ARE YOU?!</h1>
  <h3>Let's See 😃</h3>
  <button @click="start" :disabled="isPlaying">PLAY</button>
  <Block v-if="isPlaying" :delay="delay"/>
</template>

<script>
import Block from "./components/Block";

export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e35852;
  margin-top: 60px;
}
</style>
