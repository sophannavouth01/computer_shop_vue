<template >
   <div class=" bg-white">
	<navbaruser/>
	<header  class=" my-5" >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8  ">
        <div class="relative flex  items-center justify-between ">
			<router-view />
        </div>
      </div>
  
    </header>
	<footeruser/>
   </div>
	
</template>
<script>
import navbaruser from "../components/navbar/NavbarUser.vue"
import footeruser from "../components/footer/FooterUser.vue"

 export default {
	name:'AppLayoutUser',
	components:{
		navbaruser,
		footeruser

	}

 }
</script>