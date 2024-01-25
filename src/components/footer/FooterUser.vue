<template>
    <header as="nav" class=" bg-[#343787] " >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-8 ">
        <div class="relative flex   items-center justify-between border-y-2 pb-2  ">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start py-8 ">
            <div class="flex flex-shrink-0 items-center ">
              <img class="h-[100px] w-[100px]" src="../../../public/images/logo/logo.png" alt="Your Company" />
            </div>
            <div class=" items-center   ml-[370px] pt-5 font-normal text-[18px] text-stone-50">
                <i class="fa-solid fa-location-dot text-lg px-5 py-3"><span class=" px-4">Keo Chenda St, Phnom Penh 12000</span></i><br>
                <i class="fa-solid fa-phone text-lg px-5 "><span class=" px-4">081684031 / 012013014</span></i><br>
                <i class="fa-solid fa-envelope text-lg px-5 py-3"><span class=" px-4">worldtechcambodia@gmail.com</span></i><br>
                <i class="fa-brands fa-facebook text-lg px-5  "><span class=" px-4">Worldtech</span></i>
            </div>
            
          </div>
          
        </div>
        <div class="relative flex   items-center justify-between  mt-2 ">
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <div class="flex flex-shrink-0 items-center ">
                <ul class=" text-white text-lg flex py-6">
                <router-link to="/user/contact"><li class="">About</li></router-link>
                <router-link to="/user/contact"><li class=" px-4">Contact us</li></router-link>
                <router-link to=""><li class=" px-4">Help</li></router-link>
                <router-link to=""><li class=" px-4">Privacy Policy</li></router-link>
                </ul>
            </div>
           
          </div>
          <div class="  h-[40px] absolute bg- inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               <p class=" text-white">Copyright © 2023 • WorldTech Cambodia.</p>             
          </div>
          
        </div>
      </div>
  
     
    </header>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            
        };
    },
    mounted() {},
    methods: {
       
    },
};
</script>

<style scoped>
</style>
