<template lang="pug">
.selector(:style="{ width: `${props.width}%` }")
  .subtitle(v-if="props.title") {{props.title}}
  s-row.header(
    @click="isActive()"
    justify="space-between"
    :class="{ isActive: active }"
    :style="{ 'background-color': `${props.color}` }"
  )
    s-row.header__input(
      readonly
      ref="selector"
      @focusout="handler()"
      @keydown.enter="isActive()"
      :style="{ height: `${height}px`, 'background-color': `${props.color}`, 'color': `${props.textColor}` }"
      :class="{ isActive: active, isError: isError, isSuccess: (isError == '' && unfocus), }"
    ) {{selected}}
    s-icon.header__icon(
      name="triangle"
      :width="10"
      :height="10"
      :class="{ active: active, passive: !active}"
    )
  .error-text(v-if="props.isError") {{props.isError}}

  .selector__body(
    :class="{ isActive: active }"
    :style="{ 'background-color': `${props.color}` }"
  )
    .selector__item(
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

  export interface sSelectorProps {
    modelValue: string,
    data: object[],
    isEmpty?: boolean,
    title?: string,
    isError?: string,
    height?: number|string,
    width?: number|string,
    color?: string,
    textColor?: string,
  }

  const props = withDefaults(defineProps<sSelectorProps>(), {
    isEmpty: true,
    height: 54,
    color: 'var(--white)',
    textColor: 'var(--black)',
  })
  type data = string | object
  const active = ref(false)
  const unfocus = ref(false)
  const selected = ref(props.modelValue)

  const emit = defineEmits<{
    (evt: 'update:modelValue', item: data): void,
    (evt: 'unfocus'): void,
  }>()

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
    width: auto
    text-align: start
    padding: 8px 16px
    cursor: pointer
    border-radius: 5px
    border: solid 1px var(--grey)
    &:hover
      border: solid 1px var(--grey-hover)
    &:focus
      border: solid 1px var(--purple)
    &__input
      width: auto
      padding: 0 16px 0 0
      border: none
      cursor: pointer
    &__icon.active
      transform: rotate(0deg)
      transition: all 0.5s ease 0s
    &__icon.passive
      transform: rotate(90deg)
      transition: all 0.5s ease 0s
  .header.isActive
    border: solid 1px var(--purple)
  .header.isError
    border: solid 1px var(--red-border)
  .header.isSuccess
    border: solid 1px var(--green)
    
  &__body
    min-width: 100%
    display: flex
    max-height: calc(46px * 3 + 22px)
    flex-direction: column
    justify-content: start
    position: absolute
    left: 0
    z-index: 99
    overflow-y: auto
    scroll-snap-type: y mandatory
    transition: all 0.5s ease 0s
    margin-top: 2px

  &__body.isActive
    background-color: var(--white)
    border-radius: 5px
    border: 1px solid var(--light-grey)
  
  &__item
    width: 100%
    display: none
    scroll-snap-align: start
    transition: all 0.5s ease 0s
    min-height: 46px
    overflow: hidden
    cursor: pointer
    background-color: var(--white)
      
  &__item.isActive
    display: flex
    align-items: center
    font-size: 1vw
    transition: all 0.5s ease 0s
    min-height: 46px
    padding: 8px 16px
    overflow: visible
    &:hover
      background-color: var(--light-grey)
</style>