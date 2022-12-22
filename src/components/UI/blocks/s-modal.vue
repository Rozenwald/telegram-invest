<template lang="pug">
Teleport(to="#modals")
  .s-modal(v-if="modelValue")
    .overlay(@click="close()")
    .content(
      :style="{ width: `${width}%`}"
    )
      slot
</template>

<script setup lang="ts">
  import { computed, ref, watch, onMounted } from 'vue';

  export interface modalProps {
    modelValue: boolean
    width?: number | string,
  }

  const props = withDefaults(defineProps<modalProps>(), {
    width: 50,
  })

  const emit = defineEmits<{
    (evt: 'update:modelValue', status: boolean): void,
  }>()

  function close() {
    emit('update:modelValue', false)
    console.log('out')
  }

</script>

<style lang="sass">
  .s-modal
    z-index: 100
    width: 100vw
    height: 100vh
    max-height: 100%
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    background-color: rgba(0, 0, 0, 0.5)
    .overlay
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, 0.4)
      backdrop-filter: blur(5px)
      opacity: 1
    .content
      padding: 12px
      z-index: 100
      border-radius: 10px
      background-color: var(--white)
      position: fixed
      display: flex
      justify-content: center
      align-items: center
</style>