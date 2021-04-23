<template>
  <div>Please wait...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    const callback = window.location.search;
    this.finalizeLogin(callback);
  },
};
</script>

<style>
</style>