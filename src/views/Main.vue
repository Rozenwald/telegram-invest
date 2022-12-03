<template lang="pug">
s-column.main(:width="100" :height="100" justify="start")
  s-row(v-show="true" :width="100" height="auto" justify="space-between")
    s-column.statistic-wrapper.wrapper(:width="65" height="auto")
      s-row.header(:width="100" :height="20" justify="space-between")
        .title Активность пользователей
        s-selector(
          v-model="period"
          :height="40" 
          color="var(--black)"
          textColor="var(--white)"
          :isEmpty="false"
          :data="['Неделя', 'Месяц', 'Квартал']"
        )
      s-row.body(:width="100" :height="70")
        canvas(ref="graph")
    s-row(:width="30" :height="100")
      tableTabs()
  RouterView.main__content
</template>
  
<script setup lang="ts">
  import router from '@/router'
  import { Chart } from 'chart.js'
  import { LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js'
  import type { ChartItem, ChartConfiguration } from 'chart.js'
  import { computed, defineAsyncComponent, onMounted, reactive, ref, watch } from 'vue';

  const tableTabs = defineAsyncComponent(() => import('../components/TableTabs.vue'))
  const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
  const sSelector = defineAsyncComponent(() => import('../components/UI/elements/s-selector.vue'))
  const sDivider = defineAsyncComponent(() => import('../components/UI/elements/s-divider.vue'))

  Chart.register(
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
  )

  enum DataRange {
    Week,
    Month,
    Cvartal,
  }
  const graph = ref<ChartItem | null>(null)
  const period = ref<DataRange>(DataRange.Week)


  function route(name:string) {
    router.push({ name: name})
  }

  onMounted(() => {
      const config = computed(() => {
        let labels: Array<string> = []
        let datasets: Array<any> = []

        switch (period.value) {
          case DataRange.Month:
            labels = [ 'Пон','Вт','Ср','Чт','Пт','Сб','Вск' ]
            datasets = [
              {
                label: 'Количество пользователей',
                data: [0, 10, 5, 2, 20, 30, 1, 100], 
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.2
              },
              {
                label: 'Количество регистраций',
                data: [10, 0, 0, 17, 53, 22, 15, 100], 
                backgroundColor: 'rgb(99, 255, 132)',
                borderColor: 'rgb(99, 255, 132)',
                tension: 0.2
              }
            ]
            break;
          case DataRange.Week:
            labels = [ 'Пон','Вт','Ср','Чт','Пт','Сб','Вск' ]
            datasets = [
              {
                label: 'Количество пользователей',
                data: [0, 10, 5, 2, 20, 30, 1, 100], 
                backgroundColor: 'rgb(255, 132, 99)',
                borderColor: 'rgb(255, 132, 99)',
                tension: 0.2
              },
              {
                label: 'Количество регистраций',
                data: [10, 0, 0, 17, 53, 22, 15, 100], 
                backgroundColor: 'rgb(132, 99, 255)',
                borderColor: 'rgb(132, 99, 255)',
                tension: 0.2
              }
            ]
            break;
          case DataRange.Cvartal:
            break;
          default: console.log('error')
            break;
        }
        const config: ChartConfiguration = {
          type: 'line',
          data: { labels, datasets },
        }
        return config
      })
      console.log(config.value)
      const chartItem: ChartItem = graph.value as ChartItem
      
      const хуй = new Chart(
        chartItem,
        config.value,
      )

      watch(period, () => {
        const хуй = new Chart(
          chartItem,
          config.value,
        )
      })
    })

</script>
  
<style lang="sass">

.main
  padding: calc(5% + 80px) 5% 5%
  &__table
    margin: 24px 0
    padding: 16px
    border-radius: 5px
  &__content
    margin: 80px 0 0

.statistic-wrapper
  border-radius: 5px
  .header
    background-color: var(--black)
    border-radius: 5px
    padding: 8px 16px
    .title
      color: var(--white)
      padding: 0 16px
  .body
    padding: 16px

</style>