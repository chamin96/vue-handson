<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and I am {{ age }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "Chamin";
    let age = 25;

    return { name, age };
  },
};
</script>
