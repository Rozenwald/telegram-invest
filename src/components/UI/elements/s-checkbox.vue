<template lang="pug">
.container(@click="changeStatus()")
  input(v-model="props.modelValue.visible" type="checkbox")
  label(v-if="props.modelValue.value") {{props.modelValue.value}}
</template>

<script setup lang="ts">
  import { reactive, ref, toRefs } from 'vue';

  const props = defineProps<{
    modelValue: {
      visible: boolean,
      value: string,
    },
  }>()

  const emit = defineEmits<{
    (evt: 'update:modelValue', item: object): void,
  }>()

  const item = toRefs(props.modelValue)

  function changeStatus() {
    item.visible.value = !item.visible.value;
    emit('update:modelValue', item)
  }
</script>

<style lang="sass">
</style>