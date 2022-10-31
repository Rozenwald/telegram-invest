<template lang="pug">
Teleport(to="#modals")
  .s-modal
    .content(
      :style="{ width: `${width}%`}"
    )
      slot
</template>

<script setup lang="ts">
  import { computed, ref, watch, onMounted } from 'vue';

  export interface modalProps {
    width?: number | string,
  }

  const props = withDefaults(defineProps<modalProps>(), {
    width: 50,
  })

  const emit = defineEmits<{
    (evt: 'update:modelValue', item:string): void,
  }>()

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
    .content
      z-index: 100
      border-radius: 10px
      background-color: var(--white)
      position: fixed
      display: flex
      justify-content: center
      align-items: center
</style>