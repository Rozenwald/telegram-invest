<template lang="pug">
s-column.table-wrapper(:width="100")
  .slider
    .check-hash.wrapper(v-for="item in hash" 
      :style="{ 'margin-left': `calc(var(--slide-margin) * (${page} - 1))` }"
    )
      s-row.slide(:width="100" justify="space-between")
        .info
          .subtitle Никнейм {{item}}
          .info-wrapper
            .text @Никнейм123
            s-icon(name="copy" fill="var(--dark-grey)" :width="16" :height="16")
        .info
          .subtitle Пакет
          .info-wrapper
            .text 5 Basic
        .info
          .subtitle Цена
          .info-wrapper
            .text USDT
      s-row(:width="100" justify="start")
        .info
          .subtitle Хэш транзакции
          .info-wrapper
            .text h183h4120432912j3833929j29109209e2
            s-icon(name="copy" fill="var(--dark-grey)" :width="16" :height="16")
      s-row(:width="100" align="center" justify="space-between")
        s-btn(:width="48" @click="open()" color="var(--blue-purple)") Рассчитать
        s-btn.btn-black-border(:width="48" color="var(--white)" textColor="var(--black)") Не оплачено
  s-row.navigation(:width="100")
    button.navigation__btn() &lt
    button.navigation__btn(
      v-for="item in btns"
      @click="page=item"
      :class="{ isActive: item === page}"
    ) {{item}}
    button.navigation__btn(
      @click="con()"
    ) >
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
      .title Оплата пакета "Basic"
      .text Вы проверили хэш транзакции
      s-row.btns(:width="100")
        s-btn(:width="50" color="var(--blue-purple)") Оплачено
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
  const hash = ref(6)
  const page = ref(1)
  const btns = [1, 2, 3, 4, 5]

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
      value: 'Ожидают подтверждения',
      visible: true,
      type: 'packages'
    },
    {
      value: 'Адрес',
      visible: true,
      type: 'text'
    },
    {
      value: 'Статус',
      visible: true,
      type: 'text'
    },
    {
      value: 'Посмотреть хэш транзакции',
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
        waitPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: 1.569,
        status: 1.569,
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
        waitPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: 1.569,
        status: 1.569,
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
        waitPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: 1.569,
        status: 1.569,
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
        waitPackages: {
          start: 3,
          basic: 1,
          vip: 0,
          premium: 27,
        },
        address: 1.569,
        status: 1.569,
      },
    ])

  function con() {
    console.log(page)
    console.log(page.value)
  }

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
  .title
    margin: 16px 0
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

.slider
  width: 100%
  gap: 20px
  display: grid
  grid-template-columns: repeat(2, minmax(50%, 1fr))
  grid-auto-columns: minmax(50%, 1fr)
  grid-auto-flow: column
  overflow-x: hidden
  --slide-margin: calc(-100% - 20px)

.btn-black-border
  border: 1px solid var(--black) !important

.check-hash
  display: flex
  flex: 0 0 auto
  flex-direction: column
  width: 100%
  margin-bottom: 80px
  padding: 32px
  transition: margin-left 2s
  .info
    display: flex
    flex-direction: column
    margin: 0 0 24px 0
  .subtitle
    width: 100%
    color: var(--dark-grey)
    font-weight: 500
    margin: 0 0 8px 0
  .info-wrapper
    display: flex
    justify-items: start
    align-items: center
    padding: 16px 24px
    border: 1px solid var(--grey)
    border-radius: 5px
  .text
    margin: 0 4px
    font-weight: 500
</style>