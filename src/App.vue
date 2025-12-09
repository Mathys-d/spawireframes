<script setup>
//function onListClick(){window.alert("Hello world!");}
//<button @click="onListClick">alert</button>

</script>

<template>
  <nav class="text-center mt-3">
    <RouterLink to="/" class="text-decoration-none fw-bold">Home</RouterLink>
  </nav>
  <main class="mt-5 container text-center">
    <RouterView />
  </main>
</template>

<style scoped>
</style>
