<template>
  <h1>HOW FAST ARE YOU?!</h1>
  <h3>Let's See 😃</h3>
  <button class="custom-btn" @click="start" :disabled="isPlaying">PLAY</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />
  <Results v-if="showResult" :score="score" />
</template>

<script>
import "./assets/styles.css";
import Block from "./components/Block";
import Results from "./components/Results";

export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 60px;
  color: tomato;
}
h3 {
  color: tan;
}
.custom-btn {
  size: 20px;
  background: rebeccapurple;
  color: whitesmoke;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
.custom-btn[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
