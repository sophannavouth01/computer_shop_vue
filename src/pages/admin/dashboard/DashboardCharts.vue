<template>
  <div class="grid  grid-cols-2 gap-6">
    <div>
      <va-card v-if="lineChartDataGenerated" class="col-span-12 lg:col-span-6">
        <va-card-title>
          <h1>{{ t('dashboard.charts.trendyTrends') }}</h1>
        </va-card-title>
        <va-card-content>
          <va-chart class="chart" :data="lineChartDataGenerated" type="line" />
        </va-card-content>
      </va-card>
    </div>

    <div>
      <va-card v-if="barChartDataGenerated" class=" md:col-span-6 col-span-12 bg-slate-600">
        <va-card-title>{{ t('charts.verticalBarChart') }}</va-card-title>
        <va-card-content>
          <va-chart :data="barChartDataGenerated" type="bar" class=" chart"/>
        </va-card-content>
      </va-card>
    </div> 
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import {  lineChartData, barChartData } from '../../../data/charts'
import { useChartData } from '../../../data/charts/composables/useChartData'
import { usePartOfChartData } from './composables/usePartOfChartData'
import VaChart from '../../../components/va-charts/VaChart.vue'

const barChartDataGenerated = useChartData(barChartData)

const { t } = useI18n()


const dataGenerated = useChartData(lineChartData, 0.7)
const {
  dataComputed: lineChartDataGenerated, } = usePartOfChartData(dataGenerated)
</script>

<style scoped>
.chart {
  height: 350px;
}
</style>
