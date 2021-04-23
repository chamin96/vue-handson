<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item"> ImageX </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="nav-items">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a class="item" @click="logout">Logout</a>
      </div>
      <div v-else>
        <a class="ui item" @click="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"]),
};
</script>

<style>
.nav-items {
  display: flex;
  flex-direction: row;
}
</style>