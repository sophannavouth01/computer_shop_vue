<template>
     <div class=" h-12 w-full bg-[#343787] mb-2">
     </div>
    <header as="nav" class=" border-b-2 pb-3" >
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div class="relative flex  h-20 items-center justify-between ">

          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center ">
              <img class="h-[75px] w-[70px]" src="../../../public/images/logo/5585333.png" alt="Your Company" />
            </div>
            <div class="flex flex-shrink-0 items-center  ml-10 pt-5 font-normal text-[18px]">
                <ul class=" flex">
                   <router-link to="/user/home" class="   hover:underline"> <li>Home</li></router-link>
                   <router-link to="/user/laptop"> <li class=" px-4">Laptop</li></router-link>
                   <router-link to="/user/desktop"> <li class=" px-4">Desktop</li></router-link>
                   <router-link to="/user/accessory"> <li class=" px-4">Accessory</li></router-link>
                   <router-link to="/user/contact"> <li>Contact us</li></router-link>

                </ul>
            </div>
            
          </div>
          <div class=" w-[250px] h-[40px] mt-7 absolute bg- inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="w-[200px] h-[30px] ml-3 rounded-sm bg-[#d4d3d3] py-[6px] px-3 text-white">What are you looking for?</div>
              <i class="fa-solid fa-magnifying-glass ml-3"></i>
          </div>
        </div>
      </div>
  
     
    </header>
  </template>
  
  <script setup>

  </script>