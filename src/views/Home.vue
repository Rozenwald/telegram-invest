<template lang="pug">
s-column.home(:width="100" :height="100" justify="start")
  s-row(:width="100" height="auto")
    s-column.home-statistic.wrapper(:width="70" height="auto")
      s-row.header(:width="100" :height="20" justify="space-between")
        .title Активность пользователей
        s-selector(
          v-model="status"
          :isEmpty="false"
          :height="40" 
          :data="['Неделя', 'Месяц', 'Квартал']"
        )
      s-row.body(:width="100" :height="70")
        canvas(ref="graph")
    s-column(:width="30" :height="100" align="space-between" justify="space-between")
      button.home__btn Выплаты
      button.home__btn Отправить СМС
      button.home__btn Изменить контент
  s-column(:width="100")
    s-row(:width="100")
    s-table.home__table.wrapper(
      :width="100"
      :headers="tableHeaders"
      :data="tableData"
    )
</template>
  
<script setup lang="ts">
    import router from '@/router'
    import { Chart } from 'chart.js'
    import { LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js'
    import type { ChartItem, ChartConfiguration } from 'chart.js'
    import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue';
  
    const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
    const sTable = defineAsyncComponent(() => import('../components/UI/elements/s-table.vue'))
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

    const graph = ref<ChartItem | null>(null)
    const status = ref<string>('Неделя')

    const tableHeaders = [
      'Никнейм',
      'Дата регистрации',
      'Пакеты',
      'Адрес',
      'Сумма выплаты',
      'Выплатить'
    ]
    const tableData = [
      {
        name: 'Никнейм 1',
        date: '1000',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: '1000',
        cost: '1000',
        btn: 'Выплатить'
      },
      {
        name: 'Никнейм 2',
        date: '',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: '',
        cost: '',
      },
      {
        name: 'Никнейм 3',
        date: '',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: '',
        cost: '',
      },  
    ]

    function route(name:string) {
      router.push({ name: name})
    }

    onMounted(() => {
      const config = computed(() => {
        let labels: Array<string> = []
        let datasets: Array<any> = []

        switch (status.value) {
          case 'Неделя':
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
          case 'Месяц':
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
          case 'Квартал':
            break;
          default: console.log('хуйня какая-то')
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

      watch(status, () => {
        const хуй = new Chart(
          chartItem,
          config.value,
        )
      })
    })
</script>
  
<style lang="sass">

.home
  padding: calc(5% + 80px) 5% 5%
  .home-statistic
    margin: 0 8px 0 0

.home-statistic
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

.home
  &__table
    margin: 24px 0
    padding: 16px
    border-radius: 5px
  &__btn
    width: 100%
    background-image: linear-gradient(var(--blue) 0%, var(--purple) 100%)
    min-height: 30%
    padding: 12px
    border: none
    border-radius: 5px
    color: var(--white)
    font-size: 1.5rem
    font-weight: 600
    cursor: pointer
</style>