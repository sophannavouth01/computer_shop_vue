<template>
  <va-sidebar :width="width" :minimized="minimized" :minimized-width="minimizedWidth" :animated="animated" >
    <div class=" w-full  h-32   mt-0">
      <div class="   flex w-[160px]  m-auto  mt-3" >
         <router-link to="/">
          <img src="../../../public/images/2023-12-22 16.26.04.jpg" alt="" class="w-[80px] h-[80px]  ml-3"  :class="{ 'x-flip': isSidebarMinimized }"    @click="isSidebarMinimized = !isSidebarMinimized"/>
        </router-link>

       </div>
    </div>
    <menu-minimized v-if="minimized" :items="items" />
    <menu-accordion v-else :items="items" />
  </va-sidebar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import NavigationRoutes from './NavigationRoutes'
  import MenuAccordion from './menu/MenuAccordion.vue'
  import MenuMinimized from './menu/MenuMinimized.vue'
  import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../../stores/global-store'

const GlobalStore = useGlobalStore()

const { isSidebarMinimized, userName } = storeToRefs(GlobalStore)
  withDefaults(
    defineProps<{
      width?: string
      color?: string
      animated?: boolean
      minimized?: boolean
      minimizedWidth?: string
    }>(),
    {
      width: '16rem',
      color: 'green',
      animated: true,
      minimized: true,
      minimizedWidth: undefined,
    },
  )

  const items = ref(NavigationRoutes.routes)
</script>

<style lang="scss">
  .va-sidebar {
    &__menu {
      background-color: #FFFFFF;
    }

    &-item {
      &__icon {
        width: 1.5rem;
        height: 1.5rem;
        color: #4318FF;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
