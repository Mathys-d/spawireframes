<script>
//function onListClick(){window.alert("Hello world!");}
//<button @click="onListClick">alert</button>
import Navbar from "./components/Navbar.vue"
import Footer from "@/components/footer.vue";

export default {
  components: {Footer, Navbar}
}
</script>

<template>
  <Navbar/>
  <main class="mt-5 container text-center">
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped>
</style>
