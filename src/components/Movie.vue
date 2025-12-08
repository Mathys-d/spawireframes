<script>
export default {
  name: "Movie",
  props: {
    movie: Object
  }
}
</script>


<template>
<div>
  <h1>{{movie.title}} {{movie.year}}</h1>
  <p>{{movie.plot}}</p>
  <p>{{movie.genres[1].label}}</p>
  <router-link to="movie">More</router-link>
</div>
</template>


<style scoped>

</style>