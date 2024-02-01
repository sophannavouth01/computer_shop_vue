<template>
  <div class=" h-12 w-full bg-[#343787] mb-2">
  </div>
  <header as="nav" class=" border-b-2 pb-3">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div class="relative flex  h-20 items-center justify-between ">

        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center ">
            <img class="h-[75px] w-[70px]" src="../../../public/images/logo/5585333.png" alt="Your Company" />
          </div>
          <div class="flex flex-shrink-0 items-center  ml-10 pt-5 font-normal text-[18px]">
            <ul class=" flex">
              <router-link to="/user/home" class="   hover:underline">
                <li>Home</li>
              </router-link>
              <router-link to="/user/laptop">
                <li class=" px-4">Laptop</li>
              </router-link>
              <router-link to="/user/desktop">
                <li class=" px-4">Desktop</li>
              </router-link>
              <router-link to="/user/accessory">
                <li class=" px-4">Accessory</li>
              </router-link>
              <router-link to="/user/contact">
                <li>Contact us</li>
              </router-link>

            </ul>
          </div>

        </div>
        <div
          class=" w-[250px] h-[40px] mt-7 absolute bg- inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="relative w-80">
            <input type="text" placeholder="Search "
              class="bg-background-form border border-gray-500 rounded-full px-4 pl-10 py-2 outline-none focus:border-blue-500 w-80">
            <div class="absolute top-0 ml-3" style="top:10px">
              <svg fill="currentColor" class="text-gray-500 h-5 w-5" viewBox="0 0 24 24" width="24" height="24">
                <path class="heroicon-ui"
                  d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                </path>
              </svg>
            </div>

          </div>
        </div>
    </div>
  </div>


</header></template>
  
<script setup>

</script>