<script>
import { api } from '../apiMovies.js';

export default {
  data() {
    return {
      movie: null
    }
  },
  mounted() {
    const id = this.$route.params.id;

    api.get(`/movies/${id}`)
        .then(res => this.movie = res.data);
  }
}
</script>

<template>
  <div class="d-flex flex-wrap justify-content-start gap-3 w-25">
    <img v-if="movie" :src="movie.poster" alt="poster" height="650px"/>
  </div>
  <div class="d-flex  justify-content-start gap-3 w-25">
    <h1 v-if="movie">{{ movie.title }}</h1>
  </div>
  <div>
    <p v-if="movie">{{ movie.fullPlot }}</p>
    <p v-if="movie">{{ movie.genres[1].label }}</p>
    <p v-if="movie">{{ movie.imdb.rating }}</p>

    <p v-else>Chargement...</p>
  </div>
</template>