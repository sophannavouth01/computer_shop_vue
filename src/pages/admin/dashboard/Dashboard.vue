<template>
  <div class="dashboard">
    <div class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-4 xl:grid-cols-5  justify-items-around gap-x-6 gap-y-1 xl:gap-y-0 xl:gap-x-8 ">
      <div class=" bg-white mb-5  rounded-xl">
        <div  class="w-full focus:outline-none border    focus:border-gray-800 border-transparent  rounded-xl flex   flex-col   ">
          <div class="  w-[100px] h-[30px] m-auto mt-4">
            <i class=" fa-brands fa-shopify float-left text-2xl text-[#4318FF] font-medium  "></i>
            <p class=" text-xl float-right font-medium   text-gray-800 ">Order</p>
          </div>
          <p class=" text-2xl  font-bold  text-center  text-gray-800 pb-3 ">15,06k</p>

        </div>
      </div>
      <div class=" bg-white mb-5  rounded-xl">
        <div  class="w-full focus:outline-none border    focus:border-gray-800 border-transparent  rounded-xl flex   flex-col   ">
          <div class="  w-[100px] h-[30px] m-auto mt-4">
            <i class=" fa-solid fa-signal float-left text-2xl text-[#4318FF] font-medium  "></i>
            <p class=" text-xl float-right font-medium   text-gray-800 ">Graph</p>
          </div>
          <p class=" text-2xl  font-bold  text-center  text-gray-800 pb-3 ">25,56k</p>

        </div>
      </div>
      <div class=" bg-white mb-5  rounded-xl">
        <div  class="w-full focus:outline-none border    focus:border-gray-800 border-transparent  rounded-xl flex   flex-col   ">
          <div class="  w-[100px] h-[30px] m-auto mt-4">
            <i class=" fa-solid fa-dollar-sign float-left text-2xl text-[#4318FF] font-medium  "></i>
            <p class=" text-xl float-right font-medium   text-gray-800 ">Money</p>
          </div>
          <p class=" text-2xl  font-bold  text-center  text-gray-800 pb-3 ">1299,300k</p>

        </div>
      </div>
      <div class=" bg-white mb-5  rounded-xl">
        <div  class="w-full focus:outline-none border    focus:border-gray-800 border-transparent  rounded-xl flex   flex-col   ">
          <div class="  w-[100px] h-[30px] m-auto mt-4">
            <i class="fa-solid fa-people-carry-box float-left text-2xl text-[#4318FF] font-medium  "></i>
            <p class=" text-xl float-right font-medium   text-gray-800 ">User</p>
          </div>
          <p class=" text-2xl  font-bold  text-center  text-gray-800 pb-3 ">5,90k</p>

        </div>
      </div>
      <div class=" bg-white mb-5  rounded-xl">
        <div  class="w-full focus:outline-none border    focus:border-gray-800 border-transparent  rounded-xl flex   flex-col   ">
          <div class="  w-[100px] h-[30px] m-auto mt-4">
            <i class=" fa-solid fa-right-left float-left text-2xl text-[#4318FF] font-medium  "></i>
            <p class=" text-xl float-right font-medium   text-gray-800 ">Star</p>
          </div>
          <p class=" text-2xl  font-bold  text-center  text-gray-800 pb-3 ">439,00k</p>

        </div>
      </div>
    </div>
    <!-- <dashboard-info-block /> -->

    <dashboard-charts />

    <div class="flex justify-center mt-2">
      <va-button class="mr-2" size="small" preset="plain" href="https://www.iubenda.com/privacy-policy/19055770"
        title="Privacy Policy">
        Privacy Policy
      </va-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardCharts from './DashboardCharts.vue'
</script>

<style lang="scss">
.dashboard {
  .va-card {
    margin-bottom: 0 !important;

    &__title {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
