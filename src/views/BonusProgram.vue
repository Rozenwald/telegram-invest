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
        @click="open()"
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
    template(v-slot:button)
  
  s-modal(v-model="modalVisible" :width="40")
    s-column.modal-wrapper(:width="100" align="start")
      s-row(:width="100" justify="end")
        button.btn-icon(@click="close()")
          s-icon(
            :width="24"
            :height="24"
            name="close"
            fill="var(--black)"
            stroke="var(--black)")
      .title Подарить
      .info-wrap
        .subtitle Аккаунт
        .text @name1234
      .info-wrap
        .subtitle Приз
        .text Airpods
      .info-wrap
        .subtitle Стоимость в USDT
        .text 1236,00 USDT
      s-row.btns(:width="100")
        s-btn(:width="50" color="var(--blue-purple)") Выплачено
        s-btn.btn-black-border(:width="50" textColor="var(--black)") Отмена
</template>
  
<script setup lang="ts">
  import { defineAsyncComponent, reactive, ref } from 'vue';
  
  const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
  const sSelector = defineAsyncComponent(() => import('../components/UI/elements/s-selector.vue'))
  const sCheckboxSelector = defineAsyncComponent(() => import('../components/UI/elements/s-checkbox-selector.vue'))
  const sTable = defineAsyncComponent(() => import('../components/UI/elements/s-table.vue'))

  const rowCount = ref<number>(5)
  const packages = ref<string>('Все пакеты')
  const modalVisible = ref(false)

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


  function close() {
    modalVisible.value = false
  }
  function open() {
    modalVisible.value = true
  }
</script>
  
<style lang="sass">
.modal-wrapper
  padding: 12px
  .info-wrap
    margin: 8px 0
    .subtitle
      font-size: 1vw
      font-weight: 500
      color: var(--dark-grey)
    .text
      font-weight: 700
      margin: 0
  .title
    margin: 0 0 16px 0
  .text
    margin: 16px 0
    font-weight: 500
  .btns
    margin: 16px 0
    gap: 16px
  .btn-icon
    display: flex
    justify-content: center
    align-items: center
    padding: 0
    border-radius: 100%
    border: none
    width: 32px
    height: 32px
    background-color: var(--white)
    &:hover
      background-color: var(--grey)
</style>