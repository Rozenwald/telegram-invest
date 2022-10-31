<template lang="pug">
button.s-btn(
  ref="btn"
  :style=" {height: `${height}px`, width: `${width}%`, 'background-color': props.color, color: props.textColor}"
)
  slot
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';

  const props = defineProps<{
    type?: string,
    height?: number,
    width?: number,
    color?: string,
    textColor?: string,
  }>()

  // generic type for input
  const btn = ref()

  const height = computed(() => {
    if (props.height) return props.height
    return 54
  })
  const width = computed(() => {
    if (props.width) return props.width
    return 50
  })

  onMounted(() => {
    switch (props.type) {
      case 'api':
        btn.value.classList.add('api-btn')
        break;
      case 'action':
        btn.value.classList.add('action-btn')
        break;
      case 'caramel':
        btn.value.classList.add('caramel-btn')
        break;
      case 'table':
        btn.value.classList.add('table-btn')
        break;
      default:
        break;
    }
  })
</script>

<style lang="sass">

.s-btn
  border: none
  color: var(--white)

.action-btn, .api-btn, .caramel-btn, .table-btn
  min-height: 46px
  padding: 8px
  border: none
  border-radius: 5px
  font-size: 1.15vw
  // 1 = 14px
  //1.15 ~ 16px
  //1.3 ~ 18px
  //1.6 ~ 22px
  //1.3 ~ 18px

.action-btn
  color: var(--white)
  background-color: var(--blue)
  &:hover
    background-color: var(--blue-hover)
  &:active
    background-color: var(--blue-active)
.action-btn.reverse
  color: var(--blue)
  border: 1px solid var(--blue)
  background-color: var(--white)
  &:hover
    background-color: rgba(226, 245, 255, 1) // ввести цвета
  &:active
    background-color: var(--grey)

.api-btn
  color: var(--black)
  background-color: var(--grey)
  font-size: 1.3vw
  &:hover
    background-color: var(--grey-hover)
  &:active
    background-color: var(--grey-active)

.caramel-btn
  color: var(--black)
  background-color: var(--caramel)
  font-size: 1.3vw
  &:hover
    background-color: var(--caramel-hover)
  &:active
    background-color: var(--caramel-active)

.table-btn
  color: var(--white)
  background-color: var(--green)
  font-size: 1.3vw
  &:hover
    background-color: var(--green-hover)
  &:active
    background-color: var(--green-active)

.close-btn
  display: flex
  background-color: transparent
  border-radius: 50%
  width: 32px
  height: 32px
  justify-content: center
  align-items: center
  border: none
  &:hover
    background-color: var(--blue) 50%
    border: 1px solid var(--blue)
.text-btn
  color: var(--caramel)
  font-size: 1.3vw
  text-decoration: none
  margin-top: 8px
  margin-bottom: 8px
  &:hover
    color: var(--пше-hover)
  &:active
    color: var(--caramel-active)
.icon-btn
  min-height: 24px
  min-width: 24px
  border: none
  border-radius: 100%
  .s-btn
    min-height: 46px
    padding: 8px
    border: none
    border-radius: 5px
    font-size: 1.15vw

</style>