<template lang="pug">
svg.s-icon(
  :style="stylesObject"
)
  use(
    :href="iconPath"
    :width="props.width"
    :height="props.width"
    :fill="props.fill"
    :stroke="props.stroke"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  )
</template>
  
<script setup lang="ts">
import { computed, onMounted, reactive,} from 'vue';

  export interface sRowProps {
    name: string,
    height?: number,
    width?: number,
    fill?: string,
    stroke?: string,
  }

  const props = withDefaults(defineProps<sRowProps>(), {
    width: 24,
    height: 24,
    stroke: 'var(--white)',
    fill: 'none'
  })

  const iconPath = computed( () => {
    return `/src/assets/icons/${props.name}.svg#${props.name}`
  })
  
  const stylesObject = reactive({
    'min-height': `${props.height}px`,
    'min-width': `${props.width}px`,
    height: `${props.height}px`,
    width: `${props.width}px`,
  })

</script>

<style lang="sass">
.s-icon
  display: flex
</style>