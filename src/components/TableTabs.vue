<template lang="pug">

.table-tabs
  button.table-tabs__btn(
    @click="changePage('payments')"
    :class="{ 'active-btn': $route.path == '/payments' }"
  ) Выплаты {{$path}}
  button.table-tabs__btn(
    @click="changePage('mailing')"
    :class="{ 'active-btn': $route.path == '/mailing' }"
  ) Рассылка
  button.table-tabs__btn(
    @click="changePage('check-hash')"
    :class="{ 'active-btn': $route.path == '/check-hash' }"
  ) Проверить хэш
  button.table-tabs__btn(
    @click="changePage('bonus-program')"
    :class="{ 'active-btn': $route.path == '/bonus-program' }"
  ) Бонусная программа
  button.table-tabs__btn(
    @click="changePage('referals')"
    :class="{ 'active-btn': $route.path == '/referals' }"
  ) Реферальная программа
  button.table-tabs__btn(
    @click="changePage('edit-content')"
    :class="{ 'active-btn': $route.path == '/edit-content' }"
  ) Редактировать лендинг

</template>

<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';

  const route = useRoute()

  function changePage(name: string) {
    if (route.path == `/${name}`) {
      console.log('if')
      router.push({ path: `/home`})
    } else {
      console.log('else')
      router.push({ path: `${name}`})
    }
  }
</script>

<style lang="sass">
.table-tabs
  display: grid
  width: 100%
  height: 100%
  grid-template-columns: calc(50% - 4px) calc(50% - 4px)
  grid-template-rows: repeat(3, 1fr)
  grid-column-gap: 8px
  grid-row-gap: 8px
  &__btn
    background: var(--grey)
    padding: 0 8px
    border: none
    border-radius: 5px
    color: var(--white)
    font-size: 1.5vw
    font-weight: 600
    cursor: pointer
  &__btn.active-btn
    background-image: linear-gradient(var(--blue) 0%, var(--purple) 100%)
</style>