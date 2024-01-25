<template>
  <div class="pb-6 grid grid-cols-12 gap-6">
    <div class="col-span-12 lg:col-span-12 flex flex-wrap">
      <div class="w-full pb-6 grid grid-cols-10 gap-6">
        <va-card v-for="(info, idx) in infoTiles" :key="idx"  class="col-span-12 sm:col-span-2 mb-8 !bg-gradient-to-t" :class="info.color" >
          <va-card-content>
            <h2 class="va-h2 m-0">{{ info.value }} <va-icon :name="info.icon" /></h2>
            <p class="">{{ t('dashboard.info.' + info.text) }}</p>
          </va-card-content>
        </va-card>
      </div>

      <!-- <div class="w-full grid grid-cols-12 gap-6">
        <va-card class="col-span-12 sm:col-span-6">
          <va-card-content class="h-full flex flex-col justify-center">
            <h2 class="va-h2 m-0" :style="{ color: colors.primary }">291</h2>
            <p class="no-wrap">{{ t('dashboard.info.completedPullRequests') }}</p>
          </va-card-content>
        </va-card>
        <va-card class="col-span-12 sm:col-span-6">
          <va-card-content class="grid grid-cols-12 row-separated">
            <div class="col-span-4 p-4 flex flex-col">
              <h2 class="va-h2 m-0 va-text-center" :style="{ color: colors.primary }">3</h2>
              <p class="va-text-center">{{ t('dashboard.info.users') }}</p>
            </div>
            <div class="col-span-4 p-4 flex flex-col">
              <h2 class="va-h2 m-0 va-text-center" :style="{ color: colors.info }">24</h2>
              <p class="va-text-center no-wrap">{{ t('dashboard.info.points') }}</p>
            </div>
            <div class="col-span-4 p-4 flex flex-col">
              <h2 class="va-h2 m-0 va-text-center" :style="{ color: colors.warning }">91</h2>
              <p class="va-text-center">{{ t('dashboard.info.units') }}</p>
            </div>
          </va-card-content>
        </va-card>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { VaCard, VaCardContent, useColors } from 'vuestic-ui'

  const { t } = useI18n()
  const { colors } = useColors()

  const infoTiles = ref([
    {
      color: '!from-[#a1c4fd] !to-[#c2e9fb]',
      value: '803',
      text: 'commits',
      icon: 'call_missed_outgoing',
    },
    {
      color: '!from-[#a1c4fd] !to-[#c2e9fb]',
      value: '57',
      text: 'components',
      icon: '',
    },
    {
      color: '!from-[#a1c4fd] !to-[#c2e9fb]',
      value: '5',
      text: 'teamMembers',
      icon: '',
    },
    {
      color: '!from-[#a1c4fd] !to-[#c2e9fb]',
      value: '58,9M',
      text: 'teamMembers',
      icon: '',
    },
    {
      color: '!from-[#a1c4fd] !to-[#c2e9fb]',
      value: '12.35K',
      text: 'teamMembers',
      icon: '',
    },
  ])
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background-primary);
    }
  }

  .rich-theme-card-text {
    line-height: 1.5;
  }

  .gallery-carousel {
    width: 80vw;
    max-width: 100%;

    @media all and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
