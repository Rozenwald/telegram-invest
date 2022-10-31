<template lang="pug">
Transition
  .auth-modal(
    v-if="modelValue"
  )
    .overlay(@click="close()")
    s-column.content(justify="start" align="start")
      .title Вход
      s-column(:width="100" justify="start" align="start")
        s-textfield.login(
          title="Введите логин"
          titleColor="var(--white)"
          v-model="login"
        )
      s-column(:width="100" justify="start" align="start")
        s-textfield.password(
          title="Пароль"
          titleColor="var(--white)"
          v-model="password"
        )
      s-btn.btn(
        @click="scl()"
        :width="100") Войти
</template>
  
<script setup lang="ts">
  import { ref, defineAsyncComponent } from 'vue';

  const sModal = defineAsyncComponent(() => import('../blocks/s-modal.vue'))
  const sDivider = defineAsyncComponent(() => import('../elements/s-divider.vue'))
  const sTextfield = defineAsyncComponent(() => import('../elements/s-textfield.vue'))
  const sBtn = defineAsyncComponent(() => import('../elements/s-btn.vue'))

  const props = defineProps<{
    modelValue: boolean
    text?: string,
  }>()

  const emit = defineEmits<{
    (evt: 'update:modelValue', status: boolean): void,
  }>()

  const login = ref('')
  const password = ref('')

  function close() {
    emit('update:modelValue', false)
    console.log('out')
  }
  function authorization() {
    console.log('in')
  }
</script>

<style lang="sass">
.v-enter-active, .v-leave-active
  transition: opacity 0.3s ease
.v-enter-from, .v-leave-to
  opacity: 0

.auth-modal
  z-index: 100
  width: 100vw
  height: 100vh
  max-height: 100%
  position: fixed
  display: flex
  justify-content: center
  align-items: center
  backdrop-filter: blur(27px)
  .overlay
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.7)
    backdrop-filter: blur(27px)
    opacity: 1
  .content
    z-index: 100
    min-width: 500px
    border-radius: 20px
    padding: 50px 70px
    backdrop-filter: blur(7px)
    background-color: #141414
    opacity: 85%
    position: fixed
    display: flex
    justify-content: center
    align-items: center
    .title
      margin: 0 0 16px
      color: var(--white)
    .btn
      margin: 16px 0
</style>