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
  <div class="mt-50 pl-50 pr-50">
    <div v-if="movie" class="d-flex align-items-start gap-3 mb-4 bg-secondary">
      <img :src="movie.poster || '/clap.jpg'" alt="poster" class="img-fluid" style="width: 250px; height: auto;" />

      <div class="d-flex flex-column">
        <h1 class="mb-5 text-start">{{ movie.title }} - {{ movie.year }}</h1>

        <p class="text-break mb-4">{{ movie.fullPlot }}</p>

        <div class="d-flex gap-3">
          <p class="mb-0"><strong>Genre:</strong> {{ movie.genres[1]?.label }}</p>
          <p class="mb-0"><strong>Rating:</strong> {{ movie.imdb.rating || 'N/A' }}</p>
        </div>
      </div>
    </div>
  </div>

</template>
