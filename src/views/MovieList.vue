<script>
import Movie from '../components/Movie.vue'
import { api } from '../apiMovies.js'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "@/registry/new-york-v4/ui/pagination/index.ts";

export default {
  name: "MoviesList",
  components: { Movie, Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis },

  data() {
    return {
      info: null,
      currentPage: 1,
      itemsPerPage: 10
    }
  },

  mounted() {
    this.fetchMovies()
  },

  methods: {
    fetchMovies() {
      api.get(`/movies?page=${this.currentPage}`)
          .then(response => {
            this.info = response.data
          })
          .catch(error => console.error(error))
    },

    handlePageChange(page) {
      this.currentPage = page
      this.fetchMovies()
    }
  },

  computed: {
    paginatedMovies() {
      // Si ton API renvoie déjà la pagination côté serveur, retourne juste info.member
      return this.info?.member || []
    },

    totalItems() {
      return this.info?.totalItems || 0
    }
  }
}
</script>

<template>
  <div class="text-center mb-5">
    <h1>Liste des films</h1>
  </div>

  <div class="d-flex flex-wrap justify-content-center gap-3">
    <Movie
        v-for="movie in paginatedMovies"
        :key="movie.id"
        :movie="movie"
    />
  </div>

  <div class="text-center mt-4">
    <Pagination
        v-slot="{ page }"
        :items-per-page="itemsPerPage"
        :total="totalItems"
        :default-page="currentPage"
        @update:page="handlePageChange"
    >
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />

        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
        </template>

        <PaginationEllipsis />
        <PaginationNext />
      </PaginationContent>
    </Pagination>
  </div>
</template>
