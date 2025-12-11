<script>
export default {
  name: "Navbar",
}
</script>

<template>
  <div class="fixed-top nav-param rounded-bottom d-flex justify-content-center w-100 mx-auto">
    <nav class="text-center mt-3">
      <RouterLink to="/" class="text-decoration-none fw-bold pe-2">FILMS</RouterLink>
      <!--
      <span class="px-1 text-white">|</span>
      <RouterLink to="/series" class="text-decoration-none fw-bold pe-2">SÉRIES</RouterLink>
      <span class="px-1 text-white">|</span>
      <RouterLink to="/games" class="text-decoration-none fw-bold pe-2">JEUX VIDÉO</RouterLink>
      <span class="px-1 text-white">|</span>
      <RouterLink to="/books" class="text-decoration-none fw-bold pe-2">LIVRES</RouterLink>
      <span class="px-1 text-white">|</span>
      <RouterLink to="/bd" class="text-decoration-none fw-bold pe-2">BD</RouterLink>
      <span class="px-1 text-white">|</span>
      <RouterLink to="/music" class="text-decoration-none fw-bold pe-2">MUSIQUES</RouterLink>
      <span class="px-1 text-white">|</span>
      <RouterLink to="/more" class="text-decoration-none fw-bold pe-2">LES PLUS</RouterLink>
      -->
    </nav>
  </div>
</template>

<style scoped>
.nav-param {
  background: rgb(22, 27, 38);
  box-shadow: rgba(26, 26, 26, 0.1) 3px 3px 20px;
  max-width: 1180px;
  animation: 0.3s ease-in-out tQSUm;
  border-bottom: 1px solid rgb(51, 55, 65);
  height: 64px;
}
</style>