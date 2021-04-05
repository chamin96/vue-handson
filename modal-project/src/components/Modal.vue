<template>
  <div class="backdrop">
    <div
      class="modal"
      :class="{ sale: theme === 'sale', dark: theme === 'dark' }"
    >
      <h1>{{ header }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "subtitle", "theme"],
};
</script>


<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
h1 {
  color: seagreen;
}
.modal.sale {
  background: seagreen;
  color: seashell;
}
.modal.sale h1 {
  color: seashell;
}
.modal.dark {
  background: darkslategray;
  color: seashell;
}
.modal.dark h1 {
  color: seagreen;
}
</style>