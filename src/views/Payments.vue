<template lang="pug">
s-column.table-wrapper(:width="100")
  s-row(:width="100" justify="start")
    .payments.wrapper
      s-column(:width="50" align="start" justify="start")
        .title Выплаты
        .money-container
          .subtitle Введите сумму
          .input-container
            input.input(type="number")
            .text USDT
        s-btn(:width="80" color="var(--blue-purple)") Рассчитать
      s-row(:width="50" align="start" justify="start")
        s-column(align="start" justify="start")
          .package
            .subtitle Пакет “Start”
            .text 10%
          .package
            .subtitle Пакет “VIP”
            .text 24%
        s-column(align="start" justify="start")
          .package
            .subtitle Пакет “Basic”
            .text 17%
          .package
            .subtitle Пакет “Premium”
            .text 49%
  s-row(:width="100" justify="space-between")
    s-row(:width="60" justify="start")
      input.search
      s-selector.packages(
        v-model="packages"
        :height="40"
        color="var(--white)"
        textColor="var(--black)"
        :isEmpty="false"
        :data="['Все пакеты', 'Start', 'Basic', 'Vip', 'Premium']"
      )
      s-checkbox-selector.packages(
        v-model="tableHeaders"
        :height="40"
        :isEmpty="false"
        title='Столбцы'
        color="var(--white)"
        textColor="var(--black)"
      )
    s-row(:width="40" justify="end")
      s-btn.btn(
        @click="route('user-page')"
        textColor="var(--white)"
        color="var(--blue-purple)"
      ) Скопировать никнеймы
      s-selector(
        v-model="rowCount"
        :height="40"
        :isEmpty="false"
        :data="['5', '15', '30', '45', '60']"
      )
  s-table.table.wrapper(
    :width="100"
    :headers="tableHeaders"
    :data="tableData"
  )
    template(v-slot:buttton)
</template>
  
<script setup lang="ts">
  import { defineAsyncComponent, reactive, ref } from 'vue';
  
  const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
  const sSelector = defineAsyncComponent(() => import('../components/UI/elements/s-selector.vue'))
  const sCheckboxSelector = defineAsyncComponent(() => import('../components/UI/elements/s-checkbox-selector.vue'))
  const sTable = defineAsyncComponent(() => import('../components/UI/elements/s-table.vue'))

  const rowCount = ref<number>(5)
  const packages = ref<string>('Все пакеты')

  const tableHeaders = reactive([
    {
      value: 'Никнейм',
      visible: true,
      type: 'text'
    },
    {
      value: 'Дата регистрации',
      visible: true,
      type: 'text'
    },
    {
      value: 'Пакеты',
      visible: true,
      type: 'packages',
    },
    {
      value: 'Прошлая выплата',
      visible: true,
      type: 'text'
    },
    {
      value: 'Выплаты за всё время',
      visible: true,
      type: 'text'
    },
    {
      value: 'Адрес',
      visible: true,
      type: 'text'
    },
    {
      value: 'Текущая сумма',
      visible: true,
      type: 'text'
    },
    {
      value: 'Выплатить',
      visible: true,
      type: 'button'
    },
  ])

  const tableData = reactive([
      {
        name: 'Никнейм 1',
        date: '01.01.2022',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        beforePayment: 1000,
        allTimePayment: 1000,
        address: 1.569,
        summa: 1.569,
      },
      {
        name: 'Никнейм 2',
        date: '01.01.2022',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        beforePayment: 1000,
        allTimePayment: 1000,
        address: 1.569,
        summa: 1.569,
      },
      {
        name: 'Никнейм 3',
        date: '01.01.2022',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        beforePayment: 1000,
        allTimePayment: 1000,
        address: 1.569,
        summa: 1.569,
      },
      {
        name: 'Никнейм 4',
        date: '01.01.2022',
        packages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        beforePayment: 1000,
        allTimePayment: 1000,
        address: 1.569,
        summa: 1.569,
      },
    ])
</script>
  
<style lang="sass">
  .payments
    display: flex
    width: 60%
    margin-bottom: 80px
    padding: 32px
    .money-container
      width: 100%
      margin: 24px 0
      .input-container
        width: 80%
        display: flex
        align-items: center
        justify-content: space-between
        min-height: 50px
        padding: 8px 16px
        border: 1px solid var(--grey)
        border-radius: 5px
      .subtitle
        width: 100%
        color: var(--dark-grey)
        font-weight: 500
        margin: 0 0 8px 0
      .text
        color: var(--dark-grey)
        font-size: 20px
        font-weight: 500
      .input
        height: 32px
        padding: 0 16px 0 0
        min-width: 100px
        border: none
        color: var(--dark-grey)
        font-size: 20px
        font-weight: 500
        &::-webkit-inner-spin-button
          -webkit-appearance: none
          margin: 0

    .title
      font-size: 32px
      margin: 0
    .subtitle
      font-size: 16px
      color: var(--dark-grey)
      font-weight: 500
      margin: 0 0 8px 0
    .text
      font-size: 16px
      margin: 0
    .package
      margin: 0 8px 20px

</style>