<template lang="pug">
.dropdown(
  :style="stylesObject"
  @click="activated()"
  @mouseover="activated()"
  @mouseout="deactivated()"
)
  .subtitle(v-if="props.title") {{props.title}}
  s-row.header(
  )
    slot(name="header")
  .body(
    v-show="active"
  )
    .layer
    .content
      slot(name="body")
</template>

<script setup lang="ts">
  import { ref, watch, onMounted, computed, reactive } from 'vue';

  export interface DropDownProps {
    align?: string,
    justify?: string,
    height?: number | string,
    width?: number | string,
  }

  const props = withDefaults(defineProps<DropDownProps>(), {
    justify: 'center',
    align: 'center',
  })

  const stylesObject = reactive({
    height: (typeof props.height == "string") ? props.height : `${props.height}%`,
    width: (typeof props.width == "string") ? props.width : `${props.width}%`,
    'align-items': props.align,
    'justify-content': props.justify,
  })

  const active = ref(false)

  function activated() {
    active.value = true;
  }

  function deactivated() {
    active.value = false;
  }
</script>

<style lang="sass">
.dropdown
  position: relative
  cursor: pointer
  .header
    display: flex
    height: 100%
  .layer
    width: 100%
    background-color: var(--graphite)
    display: flex
    flex-direction: column
    height: 8px
    opacity: 0
  .body
    position: absolute
    display: flex
    flex-direction: column
    right: 0
    z-index: 1

.body
  .content
    width: auto
    border-radius: 16px
    color: var(--white)
    background-color: var(--black)
</style>