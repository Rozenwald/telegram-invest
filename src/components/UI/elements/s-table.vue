<template lang="pug">
.s-table(:style="{ width: `${props.width}%`}")
  .headers
    .headers__item(v-for="item in headers") {{ item }}
  .data
    s-row.row(v-for="item in data" justify="center" align="center")
      .row__name {{ item.name }}
      .row__date {{ item.date }}
      s-column.row__packages(align="start")
        .start Start x{{ item.packages.start }}
        .basic Basic x{{ item.packages.basic }}
        .vip VIP x{{ item.packages.vip }}
        .premium Premium x{{ item.packages.premium }}
      .row__address {{ item.address }}
      .row__cost {{ item.cost }}
      s-row(:width="100" justify="center" align="center")
        s-btn.row__btn(
          @click="router.push({ name: 'deal-process'})"
          :width="80"
          :height="46"
          textColor="var(--white)"
          color="var(--blue-purple)"
        ) Выплатить
  .navigation
    button.navigation__btn() &lt
    button.navigation__btn(
      v-for="item in btns"
      @click="page=item"
      :class="{ isActive: item === page}"
    ) {{item}}
    button.navigation__btn() >
</template>

<script setup lang="ts">
  import router from '@/router';
  import { ref, onMounted, defineAsyncComponent } from 'vue';

  const sBtn = defineAsyncComponent(() => import('./s-btn.vue'))
  const sDivider = defineAsyncComponent(() => import('./s-divider.vue'))

  const btns = [1, 2, 3, 4, 5]
  const page = ref(1)

  const props = defineProps<{
    headers: string[],
    data: object[], // написать интерфейс пропсов на ts
    width: string | number
  }>()

  // generic type for input
  const btn = ref()

  onMounted(() => console.log(props.data))
</script>

<style lang="sass">
.s-table
  .headers
    width: 100%
    margin: 8px 0
    padding: 8px 0
    display: grid
    grid-template-columns: repeat(6, 1fr)
    justify-items: start
    &__item
      margin: 0 16px 0 0
      color: var(--dark-grey)

  .data
    width: 100%
    .row
      width: 100%
      padding: 8px 0
      font-size: 1vw
      display: grid
      grid-template-columns: repeat(6, 1fr)
      justify-items: start
      align-items: center
      border-top: 1px solid var(--grey)
      &__name
        color: var(--black)
      &__data
        color: var(--black)
      &__packages
        .start, .basic, .vip, .premium
          margin: 4px 0
          padding: 8px 16px
          border-radius: 20px
        .start
          background-color: var(--blue-purple)
        .basic
          background-color: var(--lite-blue)
        .vip
          background-color: var(--pink)
        .premium
          color: var(--black)
          background-color: rgba(129, 245, 100, 0.25)
      &__address
        color: var(--black)
      &__cost
        color: var(--black)
      &__btn
        justify-items: center
        justify-content: center
        border-radius: 35px

  .navigation
    width: 100%
    display: flex
    padding: 16px 0
    justify-content: end
    &__btn
      width: 32px
      height: 32px
      margin: 0 8px 0 0
      border-radius: 5px
      border: 1px solid var(--grey)
      background-color: var(--white)
      &:last-child
        margin: 0
      &:hover
        color: var(--black)
        background-color: var(--grey)
        border: 1px solid var(--dark-grey)
      &:active
        color: var(--blue)
        background-color: var(--white)
        border: 1px solid var(--blue)
    &__btn.isActive
        color: var(--blue)
        background-color: var(--white)
        border: 1px solid var(--blue)

</style>