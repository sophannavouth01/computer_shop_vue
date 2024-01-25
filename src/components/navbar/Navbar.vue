<template>
  <va-navbar class="app-layout-navbar">
    <template #left>
      <div class="left">
        <va-icon-menu-collapsed :class="{ 'x-flip': isSidebarMinimized }" class="va-navbar__item"
          @click="isSidebarMinimized = !isSidebarMinimized" />
        <router-link to="/">
          <!-- <h1>Admin</h1> -->
          <img src="../../../public/images/2023-12-13 16.47.54.jpg" alt="" class="w-[65px] h-[65px]" />
          <!-- <vuestic-logo class="logo" /> -->
        </router-link>
      </div>
    </template>
    <div class="app-navbar-center">
      <!-- <span class="hidden md:block mr-2">{{ t('navbar.messageUs') }}</span> -->

      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <input type="text" id="simple-search"
            class="bg-gray-50 border h-8 w-60 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search branch name..." required />
        </div>
        <button type="submit"  class="p-2.5 mx-4 ms-2 text-sm font-medium text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
    <template #right>
      <div class="right">
        <app-navbar-actions class="app-navbar__actions" :user-name="userName" />
      </div>
    </template>
  </va-navbar>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../../stores/global-store'
import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'
import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
import AppNavbarActions from './components/AppNavbarActions.vue'

const GlobalStore = useGlobalStore()
const { t } = useI18n()

const { isSidebarMinimized, userName } = storeToRefs(GlobalStore)

const { getColors } = useColors()
const colors = computed(() => getColors())
</script>

<style lang="scss" scoped>
.va-navbar {
  box-shadow: var(--va-box-shadow);
  color: aliceblue !important;
  background-color: #2554c7 !important;
  z-index: 2;

  @media screen and (max-width: 950px) {
    .left {
      width: 100%;
    }

    .app-navbar__actions {
      width: 100%;
      display: flex;

      justify-content: space-between;
    }
  }
}

.left {
  display: flex;
  color: aliceblue !important;
  align-items: center;

  &>* {
    margin-right: 1.5rem;
  }

  &>*:last-child {
    margin-right: 0;
  }
}

.x-flip {
  transform: scaleX(-100%);
}

.app-navbar-center {
  display: flex;
  align-items: center;
  color: aliceblue;
  height: 1rem;

  @media screen and (max-width: 1200px) {
    &__github-button {
      display: none;
    }
  }

  @media screen and (max-width: 950px) {
    &__text {
      display: none;
    }
  }
}
</style>
