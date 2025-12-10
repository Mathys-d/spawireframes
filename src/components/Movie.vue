<script>
export default {
  name: "Movie",
  props: {
    movie: Object
  }
}
</script>


<template>
  <div class="color-bg-movie div-style">
    <router-link :to="{ name: 'movie', params: { id: movie.id } }">
      <span class="">{{ movie.genres[1]?.label || '&nbsp;' }}</span>
    <img :src="movie?.poster || '/clap.jpg'" alt="&nbsp;" class="mt-2 img-fluid " />
    <div class="">
      <span class="w-full movie-title">{{ movie?.title || '&nbsp;' }}</span>
      <br>
      <span class="mb-0 w-full movie-rating "><strong></strong> {{ movie.imdb.rating || '&nbsp;' }}</span>
    </div>
  </router-link>
</div>
</template>


<style scoped>
.movie-title {
  margin-top: 10px;
  font-weight: bold;
}
.movie-rating {
  margin-top: 5px;
  font-size: 0.9rem;
}
img {
  height: 270px;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}
.div-style{
  height: 368px;
  width: 167px;       /* largeur fixe */
  display: flex;
  flex-direction: column; /* pour que le titre et l'image soient empilés */
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.2rem;
  overflow: hidden;
  text-align: center;
  padding: 10px;
}
</style>