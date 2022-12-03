<template lang="pug">
s-column.user-page(:width="100" :height="100" justify="start")
  s-row(:width="100" justify="space-between" align="start")
    s-column.user-page__information.wrapper(:width="49" :height="100" justify="start")
      s-row(justify="start" :width="100")
        .title Пользователь
      s-row(:width="100" align="start" justify="space-between")
        s-column(:width="60")
          s-column(:width="100" align="start")
            .subtitle Никнейм
            s-row(:width="100" justify="start")
              .copytext @Nikname
              s-icon(
                :width="16"
                :height="16"
                name="copy"
                fill="var(--black)"
              )
          s-column(:width="100" align="start")
            .subtitle Адрес кошелька
            s-row(:width="100" justify="start")
              .copytext 8239fh0m939180z03hf003f7h237hf
              s-icon(
                :width="16"
                :height="16"
                name="copy"
                fill="var(--black)"
              )
          s-column(:width="100" align="start")
            .subtitle Дата регистрации
            .text 01.01.2000
          s-row(:width="100" align="start" justify="space-between")
            s-column(:width="50" align="start")
              .subtitle Доход за все время
              .text 1000000$
            s-column(:width="50" align="start")
              .subtitle Общая инвестиция
              .text 1000000$
          s-column(:width="100" align="start")
            .subtitle Кто пригласил
            .text @Nikname
        s-column.packages(:width="35" :height="100" justify="start" align="start")
          .subtitle Пакеты
          .start Start
          .basic Basic
          .vip VIP
          .premium Premium

    s-column.user-page__referal-system.wrapper(:width="49" :height="100" justify="start")
      s-row(justify="start" :width="100")
        .title Реферальная программа
      s-row.main-info(:width="100" justify="space-between")
        s-column(:width="45" align="start")
          .subtitle Реферальная ссылка
          s-row(:width="100" justify="start")
            .copytext //jhb817f9941-0f1f13-1f3yo
            s-icon(
              name="copy"
            )
        s-column(:width="45" align="start")
          .subtitle Общий доход за 30 дней
          s-row(:width="100" justify="start")
            .text 1000$

      s-row.sub-info(:width="100" justify="space-between")
        s-row(:width="45" justify="space-between")
          s-column(:width="50" align="start")
            .subtitle Партнеры L1
            .text 75 человек
          s-column(:width="50" align="start")
            .subtitle Весь доход L1
            .text 75 человек
        s-row(:width="45" justify="space-between")
          s-column(:width="50" align="start")
            .subtitle Партнеры L2
            .text 75 человек
          s-column(:width="50" align="start")
            .subtitle Весь доход L2
            .text 75 человек
      s-row(:width="100" justify="space-between")
        s-row(:width="45" justify="space-between")
          s-column(:width="50" align="start")
            .subtitle Партнеры L3
            .text 75 человек
          s-column(:width="50" align="start")
            .subtitle Весь доход L3
            .text 75 человек
        s-row(:width="45" justify="space-between")
          s-column(:width="50" align="start")
            .subtitle Партнеры L4
            .text 75 человек
          s-column(:width="50" align="start")
            .subtitle Весь доход L4
            .text 75 человек
      s-row(:width="100" justify="space-between")
        s-row(:width="45" justify="space-between")
          s-column(:width="50" align="start")
            .subtitle Партнеры L5
            .text 75 человек
          s-column(:width="50" align="start")
            .subtitle Весь доход L5
            .text 75 человек
        s-row(:width="45" justify="space-between")
          s-column(:width="50" align="start")
            .subtitle Партнеры L1-L5
            .text 75 человек
          s-column(:width="50" align="start")
            .subtitle Весь доход L1-L5
            .text 75 человек

  s-row.user-page__bonus-programm.wrapper(:width="100")
    s-column(:width="100" align="start")
      .title Бонусная программа
      s-row(:width="100" justify="space-between")
        s-column(align="start")
          .subtitle Уровень
          .text 1
        s-column(align="start")
          .subtitle Текущий оборот
          .text 1374$
        s-column(align="start")
          .subtitle Рефералы L1
          .text 10 чел.
        s-column(align="start")
          .subtitle Осталось до достижения. ур.
          .text 126$
        s-column(align="start")
          .subtitle Следующий приз
          .text Airpods
        s-column(align="start")
          .subtitle Прошлый приз(выплачено)
          .text Airpods
        s-btn(
          width="20"
          :height="46"
          color="var(--blue-purple)"
          rounded
        ) Подарить
 
  s-column
</template>
  
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
</script>
  
<style lang="sass">

.user-page
  padding: calc(5% + 80px) 5% 5%
  &__information, &__referal-system, &__bonus-programm
    padding: 40px
  &__bonus-programm
    margin: 40px 0
  &__referal-system
    .main-info
      margin: 0 0 25px
  .title
    margin: 0 0 25px 0
  .subtitle
    font-weight: 500
    margin: 8px 0 0
    color: var(--dark-grey)
  .text
    margin: 0
  .copytext
    margin: 0 8px 0 0

.packages
  .subtitle
    margin: 8px 0 
  .start, .basic, .vip, .premium
    margin: 4px 0
    padding: 8px 16px
    border-radius: 20px
  .start
    background-color: rgba(121, 100, 245, 0.25)
  .basic
    background-color: rgba(100, 158, 245, 0.25)
  .vip
    background-color: rgba(245, 100, 239, 0.25)
  .premium
    background-color: rgba(129, 245, 100, 0.25)
</style>