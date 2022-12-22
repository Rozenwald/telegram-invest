<template lang="pug">
s-column.mailing(:width="100" align="start" justify="start")
  .title Рассылка
  s-row.settings(:width="80" justify="space-between" align="start")
    s-column(:width="50" align="start")
      .subtitle Введите название рассылки
      input.input(placeholder="Название рассылки")
    s-column
      s-selector(
        v-model="packages"
        title="Выберите группы"
        :height="34"
        :data="['Все пакеты', 'Start', 'Basic', 'Vip', 'Premium']"
      )
    s-column
      .subtitle Выбранных пользователей
      .title 1274 Человек
  .description(:width="80" justify="space-between" align="start")
    .subtitle Текст рассылки
    textarea.textarea(rows="7")
  s-row.file-btn
    s-icon(name="copy" fill="var(--black)")
    button.btn Добавить вложение
  s-btn.send-btn(
    :width="20"
    color="var(--blue-purple)"
  ) Отправить

s-column.history(:width="100" align="start" justify="start")
  .title История рассылок
  s-dropdown(v-for="(row, index) in mailing" :bodyStatus="row.bodyStatus" :width="100")
    template.header(v-slot:header)
      s-row(@click="changeStatus(index)" :width="100" justify="start")
        s-column(:width="20" align="start")
          .date 21:38 01/01/2022
        s-row(v-show="!row.bodyStatus" :width="75" justify="start" align="center")
          .title Название рассылки длинное
          .cherta -
          .description Текст рассылки большой Текст рассылки большой
        s-row(v-show="row.bodyStatus" :width="75" justify="start" align="center")
          .packages 
            .start Start
            .basic Basic
            .vip VIP
            .premium Premium
          .users 1128 пользователей
        s-row(:width="5" justify="end" align="center")
          s-icon.header__arrow(
            :class="{ active: row.bodyStatus }"
            name="arrow"
            stroke="var(--black)"
            :width="16"
            :height="16"
          )
    template.body(v-slot:body)
      s-row(:width="100" justify="start")
        s-column(:width="20" align="start")
        s-column(:width="75" justify="start" align="start")
          .title Название рассылки длинное
          .description Текст рассылки большой Текст рассылки большой
</template>
  
<script setup lang="ts">
  import { defineAsyncComponent, reactive, ref } from 'vue';

  const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
  const sSelector = defineAsyncComponent(() => import('../components/UI/elements/s-selector.vue'))

  const packages = ref<string>('Все пакеты')
  const mailing = reactive([
    {
      index: 1,
      bodyStatus: false
    },
    {
      index: 2,
      bodyStatus: false
    },
    {
      index: 3,
      bodyStatus: false
    },
    {
      index: 4,
      bodyStatus: false
    },
    {
      index: 5,
      bodyStatus: false
    },
  ])
  const active = ref(false)

  function changeStatus(index: number) {
    mailing[index].bodyStatus = !mailing[index].bodyStatus
  }
</script>
  
<style lang="sass">
.mailing
  color: var(--dark-grey)
  font-weight: 500
  margin-top: 80px
  .title
    color: var(--black)
    font-weight: 600
  .settings
    margin-top: 32px
    .input
      width: 100%
      height: 52px
      border: 1px solid var(--grey)
      border-radius: 5px
      padding: 8px 16px
    .selector
      margin: 0
      font-weight: 500
  .description
    width: 100%
    margin-top: 32px
    .textarea
      width: 80%
      font-weight: 500
      border-radius: 5px
      border: 1px solid var(--grey)
      resize: none
      padding: 12px
      &:hover
        border: 1px solid var(--grey-hover)
      &:focus-visible
        border: 1px solid var(--grey-hover)
        outline: none
  .file-btn
    width: 25%
    margin-top: 24px
    padding: 16px 24px
    color: var(--black)
    border-radius: 5px
    border: 1px solid var(--grey)
    .btn
      background: none
      border: none
      margin-left: 8px
      height: 100%
  .send-btn
    margin-top: 24px

.history
  margin-top: 80px
  .header
    padding: 16px 0px
    border-top: 1px solid var(--grey)
    &__arrow
      transform: rotate(180deg)
      transition: all 0.5s ease 0s
    &__arrow.active
      transform: rotate(90deg)
      transition: all 0.5s ease 0s
    .packages  
      display: flex
      font-size: 1vw
      margin-right: 16px
      .start, .basic, .vip, .premium
        padding: 8px 16px
        border-radius: 20px
      .start, .basic
        margin: 4px 4px 4px 0
      .vip, .premium
        margin: 4px 0 4px 4px
      .start
        background-color: rgba(121, 100, 245, 0.25)
      .basic
        background-color: rgba(100, 158, 245, 0.25)
      .vip
        background-color: rgba(245, 100, 239, 0.25)
      .premium
        background-color: rgba(129, 245, 100, 0.25)
    .users
      font-size: 1.4vw
    .title
      font-size: 1.5vw
    .cherta
      font-size: 1.5vw
      margin: 0 8px
      font-weight: 500
    .description
      font-size: 1.5vw
      font-weight: 500
  .body
    transition: all 0.5s ease 0s
    padding: 0 0 16px 0px
    border: none
    .title
      font-size: 1.5vw
    .cherta
      font-size: 1.5vw
      margin: 0 8px
      font-weight: 500
    .description
      font-size: 1.5vw
      font-weight: 500
</style>