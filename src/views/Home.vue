<template lang="pug">
s-column.table-wrapper(:width="100")
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
        :height="58"
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
    v-show="true"
    :width="100"
    :headers="tableHeaders"
    :data="tableData"
  )
    template(v-slot:buttton)
</template>
      
<script setup lang="ts">
    import router from '@/router'
    import { defineAsyncComponent, reactive, ref } from 'vue';
  
    const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
    const sTable = defineAsyncComponent(() => import('../components/UI/elements/s-table.vue'))
    const sSelector = defineAsyncComponent(() => import('../components/UI/elements/s-selector.vue'))
    const sCheckboxSelector = defineAsyncComponent(() => import('../components/UI/elements/s-checkbox-selector.vue'))
    const sDivider = defineAsyncComponent(() => import('../components/UI/elements/s-divider.vue'))
  
    const rowCount = ref<number>(5)
    const packages = ref<string>('Все пакеты')
    // const packages = ref<string>('Все пакеты')
  
    // Замокнутые даты
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
        value: 'Перешло по реф. ссылке',
        visible: true,
        type: 'text'
      },
      {
        value: 'Зарег. по реф. ссылке',
        visible: true,
        type: 'text'
      },
      {
        value: 'Куплено пакетов по реф. ссылке',
        visible: true,
        type: 'packages',
      },
      {
        value: 'Общ. сумма покупок по реф. ссылке',
        visible: true,
        type: 'text'
      },
      {
        value: 'Общ. сумма зачислений по реф. ссылке',
        visible: true,
        type: 'text'
      },
      {
        value: 'Оборот по бон. программе',
        visible: true,
        type: 'text'
      },
      {
        value: 'Сумма выплаты',
        visible: true,
        type: 'text'
      },
      {
        value: 'Выплатить',
        visible: true,
        type: 'button',
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
        refTransition: 1000,
        refRegistration: 1000,
        refPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        refSummBuy: 1.569,
        refSummAddition: 1.569,
        bonusProgrammSumm: 1.568,
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
        refTransition: 1000,
        refRegistration: 1000,
        refPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        refSummBuy: 1.569,
        refSummAddition: 1.569,
        bonusProgrammSumm: 1.568,
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
        refTransition: 1000,
        refRegistration: 1000,
        refPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        refSummBuy: 1.569,
        refSummAddition: 1.569,
        bonusProgrammSumm: 1.568,
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
        refTransition: 1000,
        refRegistration: 1000,
        refPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        refSummBuy: 1.569,
        refSummAddition: 1.569,
        bonusProgrammSumm: 1.568,
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
        refTransition: 1000,
        refRegistration: 1000,
        refPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        refSummBuy: 1.569,
        refSummAddition: 1.569,
        bonusProgrammSumm: 1.568,
        summa: 1.569,
      },
    ])
  
    function route(name:string) {
      router.push({ name: name})
    }
</script>
      
<style lang="sass">

.table-wrapper
  .packages
    margin: 0 8px
  .btn
    margin: 0 8px
  .search
    height: 58px
    padding: 8px 16px
    margin: 0 8px 0 0

</style>
