<script>
export default {
  name: "Movie",
  props: {
    movie: Object
  }
}
</script>


<template>
<div class="overflow-auto ">
  <router-link :to="{ name: 'movie', params: { id: movie.id } }">
    <img :src="movie?.poster || '/clap.jpg'" alt="poster" height="450px" width="303" class="float-center m-1" />
  </router-link>
</div>
</template>


<style scoped>

</style>