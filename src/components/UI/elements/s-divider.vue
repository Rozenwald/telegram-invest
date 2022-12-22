<template lang="pug">
s-row.wrap(v-if="props.horizontal" :width="100")
  .horizontal(
    v-if="!props.text"
    :style="{color: props.color}"
  )
  .d-wrapper(v-else)
    .d-divider(:style="{color: props.color}")
    .d-text {{props.text}}
    .d-divider(:style="{color: props.color}")
    
s-row.vertical(v-if="props.vertical"  :style="{color: props.color}")
</template>

<script setup lang="ts">
  import { onMounted, useAttrs } from 'vue';
  
  export interface sDivider {
    horizontal?: boolean,
    vertical?: boolean,
    text?: string,
    color?: string,
  }

  const props = withDefaults(defineProps<sDivider>(), {
    color: 'var(--black)',
  })
  onMounted(() => {
    const atr = useAttrs()
    if (props.color) {
      const root = document.querySelector(':root') as HTMLElement;
      root?.style.setProperty('--border-color', props.color);
    }
  })
</script>

<style lang="sass">

:root
  --border-color: var(--white)

.horizontal
  width: 100%
  height: 0
  border-top: 1px solid var(--border-color)

.vertical
  width: 1px
  height: 80%
  border-left: 1px solid var(--border-color)
  margin: 0 30px

.d-wrapper
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  .d-text
    width: 50%
    font-weight: 700
    font-size: 1.4vw
    color: var(--dark-grey)
    margin-right: 5px
    margin-left: 5px
  .d-divider
    width: 25%
    height: 0
    border-top: 1px solid var(--grey)
    margin-top: 16px
    margin-bottom: 16px

</style>