<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ title }} {{ name }}!</h1>
  <input type="text" ref="name" placeholder="your name" />
  <button @click="handleClick">Okay</button>
  <div v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">Sign in</a>
      </template>
      <h1>Welcome to MBox</h1>
      <p>
        MBox is the world's largest food community. We are glad you joined with
        us.
      </p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal theme="dark" @close="toggleModal2">
      <h1>MBox | Guest Area</h1>
      <p>
        MBox is the world's largest food community. You can taste the authentic
        foods from all around the world.
      </p>
    </Modal>
  </div>
  <p></p>
  <button @click="toggleModal" v-if="!showModal">Members</button>
  <p></p>
  <button @click="toggleModal2" v-if="!showModal2">Guests</button>
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
      title: "hello, good day",
      name: "",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.name = this.$refs.name.value;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
