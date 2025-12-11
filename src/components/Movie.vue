<script>
import etoile_full from '@/assets/etoile_full.png'

export default {
  name: "Movie",
  props: {
    movie: Object,
  },
  data() {
    return {
      etoile_full: etoile_full,
    }
  },
}
</script>


<template>
  <div class="color-bg-movie div-style">
    <router-link :to="{ name: 'movie', params: { id: movie.id } }">
      <span class="">{{ movie.genres[1]?.label || '&nbsp;' }}</span>
      <img :src="movie?.poster || '/clap.jpg'" alt="&nbsp;" class="mt-2 img-fluid poster"/>
      <div class="">
        <span class="w-full movie-title">{{ movie?.title || '&nbsp;' }}</span>
        <div class="d-flex justify-content-center align-items-center">
          <span v-if="movie.imdb.rating" class="movie-rating d-inline-flex align-items-center">
            {{ movie.imdb.rating || '&nbsp;' }}
            <img class="aspect-square h-3 ms-1" :src="etoile_full" alt="star"/>
          </span>
        </div>

      </div>
    </router-link>
  </div>
</template>


<style scoped>
.movie-title {
  margin-top: 10px;
  font-weight: bold;
  font-size: 0.7rem;
}

.movie-rating {
  margin-top: 5px;
  font-size: 0.9rem;
}

.poster {
  height: 230px;
  width: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
}

.div-style {
  height: 368px;
  width: 167px; /* largeur fixe */
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