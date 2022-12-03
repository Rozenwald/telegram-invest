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
      value: 'Уровень',
      visible: true,
      type: 'text'
    },
    {
      value: 'Текущий оборот',
      visible: true,
      type: 'packages',
    },
    {
      value: 'Осталось для достижения ур.',
      visible: true,
      type: 'packages'
    },
    {
      value: 'Следующий приз',
      visible: true,
      type: 'text'
    },
    {
      value: 'Прошлый приз(выплачено)',
      visible: true,
      type: 'text'
    },
    {
      value: 'Подарить',
      visible: true,
      type: 'button'
    },
  ])

  const tableData = reactive([
      {
        name: '@Никнейм 1',
        level: 0,
        turnover: 1.569,
        forNextAward: 1.569,
        nextAward: 'Airpods',
        lastAward: 'Airpods',
      },
      {
        name: '@Никнейм 2',
        level: 0,
        turnover: 1.569,
        forNextAward: 1.569,
        nextAward: 'Airpods',
        lastAward: 'Airpods',
      },
      {
        name: '@Никнейм 3',
        level: 0,
        turnover: 1.569,
        forNextAward: 1.569,
        nextAward: 'Airpods',
        lastAward: 'Airpods',
      },
      {
        name: '@Никнейм 4',
        level: 0,
        turnover: 1.569,
        forNextAward: 1.569,
        nextAward: 'Airpods',
        lastAward: 'Airpods',
      },
    ])
</script>
  
<style lang="sass">

</style>