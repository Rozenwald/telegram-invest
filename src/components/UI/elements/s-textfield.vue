<template lang="pug">
.textfield
  .textfield__title(
    v-if="props.title"
    :style="{ color: props.titleColor }") {{props.title}}
  input.textfield__input(
    ref="input"
    :value="props.modelValue"
    @focusout="handler()"
    @input="$emit('update:modelValue', $event.target.value)"
    :class="{ isError: isError, isSuccess: (!isError && unfocus) }")
  .error-text(v-if="props.isError") {{props.isError}}
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const input = ref()
  const unfocus = ref(false)

  const props = defineProps<{
    type: string,
    title: string,
    titleColor: string
    modelValue: string,
    isError?: string,
  }>()

  const emit = defineEmits<{
    (evt: 'unfocus'): void,
  }>()

  function handler() {
    unfocus.value = true;
    emit('unfocus')
  }
</script>

<style lang="sass">

.textfield
  width: 100%
  margin-top: 8px
  margin-bottom: 8px
  &__title
    color: var(--black)
    margin: 8px 0
    font-size: 1vw
    font-weight: 500
  &__input
    width: 100%
    height: 54px
    border: solid 1px var(--grey)
    border-radius: 5px
    padding: 8px
    &:focus
      border: solid 1px var(--caramel)
    &:hover
      border: solid 1px var(--caramel)
  &__input.isError
    border: solid 1px var(--red-border)
  &__input.isSuccess
    border: solid 1px var(--green)

</style>