<template>
  <form @submit.prevent="loginIt">
    <div class="h-[50px] bg-gray-500">
      <input
        placeholder="Email address"
        type="email"
        class="h-[50px] w-full border-b-2 px-2"
        id="email"
        name="email"
        v-model="login.email" />
    </div>
    <div class="h-[50px] bg-gray-500 mt-3">
      <input
        type="password"
        placeholder="Password"
        class="h-[50px] w-full border-b-2 px-2"
        name="password"
        v-model="login.password" />
    </div>
    <div class="m-auto w-[100px]">
      <button type="submit" class="bg-blue-500 py-3 px-3 mt-5 text-white rounded-lg">
        Login Now
      </button>
    </div>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    loginIt() {
      axios.post("http://127.0.0.1:8000/api/auth/login", this.login)
        .then(response => {
          localStorage.setItem('token', response.data.access_token);
          localStorage.setItem('user_id', response.data.user_id);

          this.routeUser(response.data.role);
        }) 
        .catch(error => {
          if (error.response && error.response.data && error.response.data.error) {
            this.errorMessage = error.response.data.error;
          } else {
            this.errorMessage = 'Login failed. Please check your credentials.';
          }
        });
    },
    routeUser(role) {
      if (role === 'admin') {
        this.$router.push('/admin/dashboard');
      } else {
        this.$router.push('/cashier/pos-order');
      }
    }
  }
};
</script>

<style>
/* Add your CSS styling here */
</style>
