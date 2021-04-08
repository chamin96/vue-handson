<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    <h3>Click Me</h3>
  </div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
  mounted() {
    console.log("Mounted");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  //   updated() {
  //     console.log("Updated");
  //   },
  //   unmounted() {
  //     console.log("Unmounted");
  //   },
};
</script>

<style scoped>
h3 {
  size: 24px;
}
.block {
  width: 300px;
  border-radius: 20px;
  background: #03ad83;
  color: white;
  text-align: center;
  padding: 50px 0;
  margin: 40px auto;
}
</style>