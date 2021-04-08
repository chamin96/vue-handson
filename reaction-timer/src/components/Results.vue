<template>
  <h2>Your Score</h2>
  <h1>{{ score }} | {{ rank }}</h1>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 300) {
      this.rank = "amazing fast";
    } else if (this.score < 500) {
      this.rank = "human fast";
    } else {
      this.rank = "snail pace";
    }
  },
};
</script>

<style scoped>
h2 {
  margin-top: 50px;
  color: salmon;
}
h1 {
  color: plum;
}
</style>