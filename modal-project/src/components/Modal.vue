<template>
  <div class="backdrop" @click.self="closeModal">
    <div
      class="modal"
      :class="{ sale: theme === 'sale', dark: theme === 'dark' }"
    >
      <slot>Default Content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>


<style>
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
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #263442;
  padding: 8px;
  border: 1px solid #263442;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal.sale .actions a {
  color: snow;
  border: 1px solid #e6e6e6;
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