<script setup>
function onListClick(){
  window.alert("Hello world!");}
</script>

<template>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/movies">Go to movies</RouterLink>
  </nav>
  <main>
    <RouterView />
    <button @click="onListClick">alert</button>
  </main>
</template>

<style scoped>
</style>
