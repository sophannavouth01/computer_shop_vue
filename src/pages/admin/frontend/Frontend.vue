<template>
	<button @click="logout" class="bg-gray-600 rounded-md text-white p-3">Log out</button>
  </template>
  
<script>
export default {
  data() {
    return {
      // data properties
    };
  },
  methods: {
  logout() {
    localStorage.removeItem('token'); // Clear the token
    this.$router.push('/login'); // Redirect to login page
  }
}
}
</script>

<style>

</style>
