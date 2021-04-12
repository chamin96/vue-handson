<template>
  <h2>Oops!</h2>
  <h1>Error <b>404</b> : Page Not Found</h1>
  <div class="goback">
    <router-link :to="{ name: 'Home' }">
      <h3>GO BACK</h3>
    </router-link>
  </div>
</template>


<style>
.goback h3 {
  background: #0b917d;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 100px;
  cursor: pointer;
  color: white;
}

.goback h3:hover {
  background: #2c3e50;
}

.goback a {
  text-decoration: none;
}
</style>