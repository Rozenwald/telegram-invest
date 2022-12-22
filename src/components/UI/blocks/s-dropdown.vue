<template lang="pug">
.dropdown(
  :style="stylesObject"
)
  .subtitle(v-if="props.title") {{props.title}}
  s-row.header
    slot(name="header")
  .body(
    v-show="props.bodyStatus"
  )
    slot(name="body")
</template>

<script setup lang="ts">
  import { ref, watch, onMounted, computed, reactive } from 'vue';

  export interface DropDownProps {
    bodyStatus: boolean
    align?: string,
    justify?: string,
    height?: number | string,
    width?: number | string,
  }

  const props = withDefaults(defineProps<DropDownProps>(), {
    justify: 'center',
    align: 'center',
    bodyStatus: false,
  })

  const stylesObject = reactive({
    height: (typeof props.height == "string") ? props.height : `${props.height}%`,
    width: (typeof props.width == "string") ? props.width : `${props.width}%`,
    'align-items': props.align,
    'justify-content': props.justify,
  })

  onMounted(() => {
    console.log(props.bodyStatus)
  })
</script>

<style lang="sass">
.dropdown
  position: relative
  cursor: pointer
  .header
    display: flex
  .body
    display: flex
    flex-direction: column

.body
  .content
    width: auto
    border-radius: 16px
    color: var(--white)
    background-color: var(--black)
</style>