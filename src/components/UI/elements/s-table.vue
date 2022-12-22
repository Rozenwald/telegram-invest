<template lang="pug">
.s-table.wrapper
  .headers
    .headers__item(v-for="item in headers"
        v-show="item.visible === true"
        :class="{ headers__package: ((item.type == 'packages') || (item.type == 'button')) }")
      .item {{ item.value }}

  .row(v-for="row in data" :width="100" justify="start" align="center")
    .cell(
        v-for="(cell, name, index) in row"
        v-show="headers[index].visible"
        :class="{ x2: ((headers[index].type == 'packages') || (headers[index].type == 'button')) }"
      )
      .cell__text(v-if="headers[index].type == 'text'") {{cell}}
      s-row.cell__packages(v-if="headers[index].type == 'packages'")
        s-column(align="start")
          .start Start x{{ cell.start }}
          .basic Basic x{{ cell.basic }}
        s-column(align="start")
          .vip VIP x{{ cell.vip }}
          .premium Premium x{{ cell.premium }}
    // v-slot(name="button")
    s-row.cell__btns(
        v-if="headers[headers.length - 1].type == 'button'"
        v-show="headers[headers.length - 1].visible"
        justify="center")
      s-btn.cell__btn(
        @click="router.push({ name: 'deal-process'})"
        :height="46"
        :width="80"
        textColor="var(--white)"
        color="var(--blue-purple)"
        rounded
      ) Выплатить
  
  s-row.navigation(:width="100")
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
    headers: object[],
    data: object[], // написать интерфейс пропсов на ts
    width: string | number
  }>()

  // generic type for input
  const btn = ref()

  onMounted(() => {
    console.log(props)
    console.log(props.headers)
  })
</script>

<style lang="sass">
.s-table
  width: 100%
  overflow-x: auto
  .headers
    width: 100%
    margin: 8px 0 
    padding: 8px 0
    justify-content: start
    align-items: center
    display: flex
    flex-wrap: nowrap
    &__item
      display: flex
      text-align: center
      justify-content: center
      padding: 0 8px
      min-width: 10%
      width: 10%
      color: var(--dark-grey)
    &__package
      min-width: 20%
      width: 20%
      margin: 0 8px 0 0

.row
  min-width: 100%
  height: 100px
  min-height: 140px
  text-align: center
  font-size: 1vw
  display: flex
  justify-items: center
  align-content: center
  align-items: center
  box-shadow: 0px 1px 0px 0px var(--grey) inset
.cell
  display: flex
  justify-content: center
  align-items: center
  min-width: 10%
  height: 100%
  border-top: 1px solid var(--grey)
  &__text
    display: flex
    justify-content: center
    align-items: center
    padding: 8px 8px
    height: 100%
    min-height: 100%
  &__btns
    min-width: 20%
    height: 100%
    border-top: 1px solid var(--grey)
  &__btn
    width: 80%
  &__packages
    min-width: 100%
    height: 100%
    .start, .basic, .vip, .premium
      padding: 10px 20px
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

.cell.x2
  min-width: 20%

.navigation
  width: 100%
  display: flex
  position: sticky
  left: 0
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