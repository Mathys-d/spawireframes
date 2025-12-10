<script>
import Movie from '../components/Movie.vue'
import {api} from '../apiMovies.js'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
    PaginationLast,
    PaginationFirst,
} from "@/registry/new-york-v4/ui/pagination/index.ts";

export default {
  name: "MoviesList",
  components: {
    Movie,
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
    PaginationFirst,
    PaginationLast,
  },

  data() {
    return {
      info: null,
      currentPage: 1,
      itemsPerPage: 30
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
  <div class="justify-content-center mx-auto d-flex flex-column justify-content-center align-items-center ">
    <div class="text-start mb-5 movieList-gap-top border-bottom border-dark movieList-gap-x-abcsis w-full">
      <h3>{{ totalItems }} Résultats</h3>
    </div>
    <div class="d-flex">
      <div>
        <div class="filter-content ">
          <span>Préférences</span>
        </div>
      </div>
      <div class="parent-grid gap-3 movieList-gap-x-abcsis w-full ">
        <Movie
            v-for="movie in paginatedMovies"
            :key="movie.id"
            :movie="movie"
        />
      </div>
    </div>
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
        <PaginationFirst/>
        <PaginationPrevious/>

        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
        </template>

        <PaginationNext/>
        <PaginationLast />
      </PaginationContent>
    </Pagination>
  </div>
</template>

<style>
.movieList-gap-top {
  margin-top: 250px;
}

.movieList-gap-x-abcsis {
  left: 370px;
  right: 370px;
  max-width: 1180px;
}

.parent-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 0px;
}
.filter-content{
  justify-content: initial;
  box-shadow: initial;
  margin: 0px 20px;
  padding: 0px;
  position: sticky;
  top: 0px;
  left: 0px;
  width: 150px;
  padding-top: 75px;
}

</style>