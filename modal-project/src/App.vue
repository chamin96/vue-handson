<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ title }} {{ name }}</h1>
  <input type="text" ref="name" placeholder="your name" />
  <button @click="handleClick">Okay</button>
  <Modal :header="header" :subtitle="subtitle" theme="sale"/>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "hello, good afternoon :)",
      name: "",
      header: "Welcome to MBox",
      subtitle: "MBox is the world's largest food community.",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.name = this.$refs.name.value;
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
