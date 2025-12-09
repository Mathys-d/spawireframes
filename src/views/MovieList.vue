<script>

import Movie from '../components/Movie.vue'
import {api} from '../apiMovies.js';
let page = 1

export default {
  data() {
    return {
      info: []
    }
  },
  mounted(){
    api.get(`/movies?page=${page}`)
        .then(response => {
          this.info = response.data
        })
        .catch(error => console.error(error))
  },
  name: "MoviesList",
  components: { Movie }}
</script>


<template>
  <div class="text-center mb-5">
    <h1 > Liste des films</h1>
  </div>
  <div class="d-flex flex-wrap justify-content-center gap-3">    <Movie
        v-for="movie in info?.member"
        :key="movie.id"
        :movie="movie"
    />
  </div>
</template>


<style scoped>

</style>
