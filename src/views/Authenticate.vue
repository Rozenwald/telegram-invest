<template lang="pug">
s-column(:height="100" justify="start")
  s-column(:height="30")
    s-row.logo
      img.logo__img(
        @click="page = 'Home'"
        src="@/assets/logo.png"
      ) 
      s-column(:width="100")
        .logo__text LEROY’S
        s-divider(
          horizontal
        )
  s-column.auth.wrapper(:width="30" align="start" justify="space-between")
    .auth__title Вход
    s-textfield.auth__field(
      v-model="login"
      title="Введите логин")
    s-textfield.auth__field(
      v-model="password"
      title="Пароль")
    s-btn.auth__btn(
      @click="authenticate()"
      :width="100"
      color="var(--purple)") Подтвердить
</template>
  
<script setup lang="ts">
    import router from '@/router'
    import { useUserStore } from '@/stores/user';
    import { defineAsyncComponent, onMounted, reactive, ref, watch } from 'vue';
  
    const sBtn = defineAsyncComponent(() => import('../components/UI/elements/s-btn.vue'))
    const sTextfield = defineAsyncComponent(() => import('../components/UI/elements/s-textfield.vue'))
    const sSelector = defineAsyncComponent(() => import('../components/UI/elements/s-selector.vue'))
    const sDivider = defineAsyncComponent(() => import('../components/UI/elements/s-divider.vue'))

    const login = ref('')
    const password = ref('')

    function authenticate() {
      // Сюда код авторизации
      const response = 200
      if (response == 200) {
        const user = useUserStore()
        user.authenticate()
        route('Home')
      }
    }

    function route(name:string) {
      router.push({ name: name })
    }

    onMounted(() => {
      console.log('AUTHENTICATE')
    })

</script>
  
<style lang="sass">
.logo
  &__img
    margin: 0 24px 0 0
  &__text
    font-size: 2.5vw
    letter-spacing: 5px

.auth
  padding: 48px
  &__title
    margin: 0 0 12px
    font-size: 1.5vw
  &__field
    padding: 2px
  &__btn
    margin: 12px 0 0 
    border-radius: 5px

</style>