<template>
  <div class="app-layout">
    <div class="app-layout__content">
      <!-- left -->
      <div class="app-layout__sidebar-wrapper" :class="{ minimized: isSidebarMinimized }">
        <div v-if="isFullScreenSidebar" class="flex justify-end">
          <va-button class="px-4 py-4 " icon="md_close" preset="plain" @click="onCloseSidebarButtonClick" />
        </div>
        <sidebar :width="sidebarWidth" :minimized="isSidebarMinimized" :minimized-width="sidebarMinimizedWidth"
          :animated="!isMobile" />
      </div>
      <!-- right -->
      <div class="app-layout__page ">
        <div class="p-2 md:px-6 md:py-9  py-3">
          <div class="grid justify-items-end  pr-5">
            <div class=" flex  bg-white px-3 py-2   rounded-3xl">
              <div class=" bg-gray-100 rounded-2xl p-[2px] h-[30px] ">
                <input type="text" name="" id="" class="bg-gray-100  w-[170px] mx-2  h-6 ">
                <i class="fa-solid fa-magnifying-glass  text-gray-800 pr-2 py-1"></i>
              </div>
              <i class="fa-solid fa-bell   pt-2 ml-4"></i>
              <i class="fa-solid fa-moon pt-2 ml-4"></i>
              <i class="fa-solid fa-circle-info pt-2 ml-4"></i>
              <img @click="toggleDropdown" src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" alt="" class="w-[30px] h-[30px] ml-4 rounded-full cursor-pointer" >
               
            </div>
            <div v-if="showDropdown" class="dropdown-menu mt-12">
              <button @click="logout" class=" bg-slate-200 shadow-md rounded-md text-black  p-3">Log out</button>

            </div>
          </div>
           
        </div>
        <div class=" md:px-6  ">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onBeforeRouteUpdate } from 'vue-router'

import { useGlobalStore } from '../stores/global-store'
import { useRouter } from 'vue-router'

// import Navbar from '../components/navbar/Navbar.vue'
import Sidebar from '../components/sidebar/Sidebar.vue'

const GlobalStore = useGlobalStore()

const mobileBreakPointPX = 640
const tabletBreakPointPX = 768

const sidebarWidth = ref('16rem')
const sidebarMinimizedWidth = ref(undefined)

const isMobile = ref(false)
const isTablet = ref(false)
const { isSidebarMinimized } = storeToRefs(GlobalStore)
const checkIsTablet = () => window.innerWidth <= tabletBreakPointPX
const checkIsMobile = () => window.innerWidth <= mobileBreakPointPX
// Dropdown visibility state
const showDropdown = ref(false)

// Method to toggle dropdown visibility
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
const router = useRouter()

const logout = () => {
  localStorage.removeItem('token') // Clear the token
  router.push({ name: 'login' }); // Redirect to login page using named route
}



const onResize = () => {
  isSidebarMinimized.value = checkIsTablet()

  isMobile.value = checkIsMobile()
  isTablet.value = checkIsTablet()
  sidebarMinimizedWidth.value = isMobile.value ? '0' : '4.5rem'
  sidebarWidth.value = isTablet.value ? '100%' : '16rem'
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

onBeforeRouteUpdate(() => {
  if (checkIsTablet()) {
    // Collapse sidebar after route change for Mobile
    isSidebarMinimized.value = true
  }
})

onResize()

const isFullScreenSidebar = computed(() => isTablet.value && !isSidebarMinimized.value)

const onCloseSidebarButtonClick = () => {
  isSidebarMinimized.value = true
}
</script>

<style lang="scss">
$mobileBreakPointPX: 640px;
$tabletBreakPointPX: 768px;

.app-layout {
  height: 100vh;
  display: flex;
  background-color: #F4F7FE;
  flex-direction: column;



  &__content {
    display: flex;
    height: calc(100vh - 4rem);
    flex: 1;

    @media screen and (max-width: $tabletBreakPointPX) {
      height: calc(100vh - 6.5rem);
    }

    .app-layout__sidebar-wrapper {
      position: relative;
      height: 100%;

      @media screen and (max-width: $tabletBreakPointPX) {
        &:not(.minimized) {
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          z-index: 999;
        }

        .va-sidebar:not(.va-sidebar--minimized) {
          .va-sidebar__menu {
            padding: 0;
          }
        }
      }
    }
  }

  &__page {
    flex-grow: 2;
    overflow-y: scroll;

  }
}
.dropdown-menu {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 60px;
  z-index: 1;
}
</style>
