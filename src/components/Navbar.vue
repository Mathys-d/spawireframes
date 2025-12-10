<script>
export default {
  name: "Navbar",
}
</script>

<template>
  <div class="fixed-top  wm-1280 nav-param">
    <nav class="text-center mt-3">
      <RouterLink to="/"       class="text-decoration-none fw-bold pe-2">FILMS</RouterLink>
      <RouterLink to="/series" class="text-decoration-none fw-bold pe-2">SÉRIES</RouterLink>
      <RouterLink to="/games"  class="text-decoration-none fw-bold pe-2">JEUX VIDÉO</RouterLink>
      <RouterLink to="/books"  class="text-decoration-none fw-bold pe-2">LIVRES</RouterLink>
      <RouterLink to="/bd"     class="text-decoration-none fw-bold pe-2">BD</RouterLink>
      <RouterLink to="/music"  class="text-decoration-none fw-bold pe-2">MUSIQUES</RouterLink>
      <span class="px-1 text-white">|</span>
      <RouterLink to="/more"   class="text-decoration-none fw-bold pe-2">LES PLUS</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-param {
  left: 370px;
  right: 370px;
  background: rgb(22, 27, 38);
  box-shadow: rgba(26, 26, 26, 0.1) 3px 3px 20px;
  max-width: 1180px;
  animation: 0.3s ease-in-out tQSUm;
  border-bottom: 1px solid rgb(51, 55, 65);
  height: 64px;
}
</style>