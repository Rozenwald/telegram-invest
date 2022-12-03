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
    height?: number,
    width?: number,
    rounded?: boolean,
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
    if (props.rounded) {
      btn?.value.style.setProperty('--border-radius', "35px");
    }
  })
</script>

<style lang="sass">

.s-btn
  --border-radius: 5px
  border: none
  border-radius: var(--border-radius)
  color: var(--white)

</style>