<script>
import { api } from '../apiMovies.js';
import rating from "@/components/ui/rating.vue";
import Rating from "@/components/ui/rating.vue";
import {ChevronRight} from 'lucide-vue-next';
import {ChevronDown} from 'lucide-vue-next';
import etoile_full from '@/assets/etoile_full.png'

export default {
  components: {Rating,
    ChevronDown,
    ChevronRight,
  },
  data() {
    return {
      movie: null,
      info: null,
      rating,
      openRat: false,
      etoile_full: etoile_full,
    }
  },
  mounted() {
    const id = this.$route.params.id;
    api.get(`/movies/${id}`)
        .then(res => this.movie = res.data);
    this.fetchMoviesReviews();
  },
  methods:{
    fetchMoviesReviews() {
      api.get(`/movies/${this.$route.params.id}/reviews`)
          .then(response => {
            this.info = response.data
          })
          .catch(error => console.error(error))
    },
  }
}
</script>

<template>
  <div class="mt-50 pl-25 pr-25">
    <div v-if="movie" class="d-flex align-items-start gap-3 mb-4">
      <img :src="movie.poster || '/clap.jpg'" alt="poster" class="img-fluid" style="width: 250px; height: auto;" />

      <div class="d-flex flex-column">
        <h1 class="mb-4 text-start">{{ movie.title }} - {{ movie.year }}</h1>

        <div class="d-flex gap-3 my-2 align-items-center ms-2">
          <img class="aspect-square" :src="etoile_full" alt="star" /><p class="mb-0">{{ movie.imdb?.rating || '&nbsp;' }}</p>
        </div>
        <div class="d-flex gap-3 my-3 align-items-center ms-4">
          <strong>Genre:</strong> <p v-for="gen in movie.genres" class="mb-0">{{ gen?.label }}</p>
        </div>

        <p class="text-break mb-4">{{ movie.fullPlot }}</p>
        <div>
          <div class=" p-1 m-1">
            <button @click="openRat = !openRat" class="d-flex justify-content-center align-items-center gap-2 ">
              Rating<chevron-right v-if="!openRat"/><chevron-down v-if="openRat"/>
            </button>
            <div v-if="openRat" class="content">
              <p v-for="rev in info.member" class="mb-0"><strong>{{ rev.user.username }}:</strong> {{ rev?.content || '&nbsp;' }}</p>
              <rating class="mb-0"></rating>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  </div>

</template>
