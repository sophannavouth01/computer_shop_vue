<template>
	<div class="app-layout">
	<!-- <navbar/> -->
	  <div>
		<div>
		  <router-view />
		</div>
	  </div>
	  <!-- <div class="bg-[#6495ED] w-full">
		  <Footer />
		</div> -->
	</div>
  </template>
  
  <script>
	import Navbar from '../components/cashier/Navbarcashier.vue'
	import Footer from '../components/cashier/Navbarcashier.vue'
	export default {
	  components: {
		Navbar,
		Footer,
	  },
	}
  </script>
  
  <style></style>
  