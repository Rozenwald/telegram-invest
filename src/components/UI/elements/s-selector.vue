<template lang="pug">
.selector(
  :style="{width: `${props.width}%`}"
)
  .subtitle(v-if="props.title") {{props.title}}
  s-row.header(
    @click="isActive()"
  )
    input.header__input(
      v-model="selected"
      ref="selector"
      readonly
      @focusout="handler()"
      @keydown.enter="isActive()"
      :class="{isActive: active, isError: isError, isSuccess: (isError == '' && unfocus), }"
      :style="{height: `${height}px`}"
    )
    s-icon.header__icon(
      name="triangle"
      :width="10"
      :height="10"
      :class="{ active: active, passive: !active}"
    )
  .error-text(v-if="props.isError") {{props.isError}}

  .selector__body(:class="{ isActive: active }")
    .selector__item(
      ref="btn"
      v-for="(item, index) in data"
      :key="index"
      :class="{ isActive: active }"
      @mousedown.prevent
      @click="chooseSelected(item)"
      @keydown.enter="chooseSelected(item)"
    ) {{item}}

</template>

<script setup lang="ts">
  import { ref, watch, onMounted, computed } from 'vue';

  const props = defineProps<{
    modelValue: string,
    data: string[],
    isEmpty: boolean,
    title?: string,
    isError?: string,
    height?: number,
    width?: number,
  }>()

  const active = ref(false)
  const unfocus = ref(false)
  const selected = ref(props.modelValue)

  const emit = defineEmits<{
    (evt: 'update:modelValue', item:string): void,
    (evt: 'unfocus'): void,
  }>()

  const height = computed(() => {
    if (props.height) return props.height
    return 54
  })

  onMounted(() => {
    if (props.isEmpty == false) emit('update:modelValue', props.data[0])
  })

  function chooseSelected(item: string) {
    console.log('choose')
    emit('update:modelValue', item)
    selected.value = item
    console.log(active.value )
    unfocus.value = true
    active.value = false
    console.log(active.value )
  }

  function handler() {
    console.log('handler')
    emit('unfocus')
    unfocus.value = true
    active.value = false;
  }

  function isActive() {
    console.log('isActive')
    active.value = !active.value;
  }
</script>

<style lang="sass">
.selector
  position: relative
  margin: 8px 0
  .header
    padding: 8px 16px
    background-color: var(--black)
    border: solid 1px var(--grey)
    border-radius: 5px
    text-align: start
    cursor: pointer
    &:hover
      border: solid 1px var(--caramel)
    &:focus
      border: solid 1px var(--caramel)
    &__input
      background-color: var(--black)
      color: var(--white)
      border: none
      cursor: pointer
    &__icon.active
      transform: rotate(0deg)
      transition: all 0.5s ease 0s
    &__icon.passive
      transform: rotate(90deg)
      transition: all 0.5s ease 0s
  &__header.isError
    border: solid 1px var(--red-border)
  &__header.isSuccess
    border: solid 1px var(--green)
    
  &__body
    display: flex
    max-height: calc(46px * 3 + 22px)
    flex-direction: column
    justify-content: start
    position: absolute
    left: 0
    right: 0
    z-index: 99
    overflow-y: auto
    scroll-snap-type: y mandatory
    transition: all 0.5s ease 0s
    margin-top: 2px
    background-color: var(--white)
  &__body.isActive
    border: 1px solid var(--light-grey)

  &__item
    display: none
    width: 100%
    scroll-snap-align: start
    transition: all 0.5s ease 0s
    line-height: 46px
    min-height: 46px
    overflow: hidden
    cursor: pointer
    &:hover
      background-color: var(--light-grey)
      
  &__item.isActive
    display: flex
    align-items: center
    font-size: 1vw
    transition: all 0.5s ease 0s
    line-height: 46px
    padding: 8px 16px
    overflow: visible
</style>