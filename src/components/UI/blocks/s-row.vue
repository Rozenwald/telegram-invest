<template lang="pug">
.s-row(
  :style="stylesObject"
)
  slot
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  export interface sRowProps {
    align?: string,
    justify?: string,
    height?: number | string,
    width?: number | string,
  }

  const props = withDefaults(defineProps<sRowProps>(), {
    align: 'center',
    justify: 'center',
  })

  const stylesObject = reactive({
    height: (typeof props.height == "string") ? props.height : `${props.height}%`,
    width: (typeof props.width == "string") ? props.width : `${props.width}%`,
    'align-items': props.align,
    'justify-content': props.justify,
  })

</script>

<style lang="sass">
.s-row
  display: flex
  flex-direction: row
</style>