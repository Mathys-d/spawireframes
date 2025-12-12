<script>
import {api} from "@/apiMovies.js";

export default{
  name: 'LogIn',
  data() {
    return {
      user:{
        email:'',
        password:'',
      }
    }
  },
  methods: {
    login(){
    api.post(`/auth`,this.user)
        .then(response => {console.log(response)})
      .catch(error => console.log(error))
    }
  }
}
</script>


<template>
<div class="pt-5 mt-5">
  <h1 class="mt-5">Connexion</h1>
  Welcome
  <form @submit.prevent="login">

    <div class="form-group d-flex justify-content-center align-items-center w-100 p-3">
      <label for="user_login" class="me-2">email</label>
      <input type="text" class="form-control w-25  " id="user_login" v-model="user.email">
    </div>

    <div class="form-group d-flex justify-content-center align-items-center w-100 p-3">
      <label for="user_password" class="me-2">password</label>
      <input type="password" class="form-control w-25" id="user_password" v-model="user.password">
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
</div>
</template>


<style scoped>

</style>