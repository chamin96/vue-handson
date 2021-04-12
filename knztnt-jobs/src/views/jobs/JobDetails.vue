<template>
  <div class="job" v-if="job">
    <h1>{{ job.title }}</h1>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
  <button @click="back">Back</button>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // id: this.$route.params.id,
      job: null,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
};
</script>

<style scoped>
.job {
  margin: 10px 40px;
}

.job p {
  margin: 5px 100px;
}

button {
  padding: 10px 15px;
  border: none;
  outline: none;
  border-radius: 8px;
  background: #2c3e50;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background: #0b917d;
}

button:active {
  border: none;
}
</style>