<template>
  <div class="d-flex justify-content-center">
    <form class="d-inline-flex" @submit.prevent>
      <input
        v-model="searchTerm"
        class="form-control me-2"
        type="search"
        placeholder="search on YouTube"
        aria-label="Search"
      />
      <button @click="onSearch" class="btn btn-outline-danger" type="submit">
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("termChange", this.searchTerm);
    },
  },
};
</script>

<style scoped>
form {
    width: 75%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>