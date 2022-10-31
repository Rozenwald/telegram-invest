<template lang="pug">
s-row.appbar(justify="space-between")
  s-row.left-side
    // s-icon(
    //   name="logo"
    //   :width="24"
    //   :height="24"
    // )
    s-row.logo
      img.logo__img(
        @click="page = 'Home'"
        src="@/assets/logo.png"
      )
      s-column.title(:width="100")
        .title__text LEROY’S
        s-divider.divider(
          type="horizontal"
        )
    s-divider(
      type="vertical"
    )
    .title Админ панель
  s-row.right-side(justify="center" align="space-evenly")

    s-dropdown.notifications(justify="center" align="center")
      template.header(v-slot:header)
        s-row.header__icon(justify="center" align="center")
          s-icon(
            name="bell"
            :width="32"
            :height="32"
          )
      template(v-slot:body)
        .body__wrapper
          s-column.body__row(v-for="item in notifications" :key="item.name" justify="center" align="start")
            .body__title {{item.title}}
            s-row(align="center" justify="space-between")
              s-row.body__text(justify="start" align="start") {{item.text}}
              s-icon.body__arrow(
                name="arrow"
                :width="16"
                :height="16"
              )
        s-divider.body__divider(type="horizontal" color="var(--graphite)")
        s-row.body__all(align="center" justify="center")
          .body__text Просмотреть все
          s-icon.body__arrow(
            name="arrow"
            :width="16"
            :height="16"
            stroke="var(--blue-purple)"
          )

    s-dropdown.menu(justify="center" align="center")
      template.header(v-slot:header)
        .header__photo
        .header__name Admin 123
        s-icon.header__arrow(
          name="arrow"
          :width="16"
          :height="16"
        )
      template.body(v-slot:body)
        .body__wrapper(v-if="isAuth")
          s-row.body__row(v-for="item in menu" :key="item.name" align="center" justify="space-between")
            s-row
              s-icon.body__icon(
                :name="item.icon"
                fill="var(--white)"
                stroke="none"

              )
              .body__text(justify="start") {{item.text}}
            s-icon.body__arrow(
              name="arrow"
              :width="16"
              :height="16"
            )
          s-divider.body__divider(type="horizontal" color="var(--graphite)")
          s-row.body__row(align="center" justify="space-between")
            s-row
              s-icon.body__icon(name="exit")
              .body__text Выйти
            s-icon.body__arrow(
              name="arrow"
              :width="16"
              :height="16"
            )
        .body__wrapper(v-else)
          s-row.body__row(@click="openRegistrationModal()" align="center" justify="space-between")
            s-row
              s-icon.body__icon(name="exit")
              .body__text Войти
            s-icon.body__arrow(
              name="arrow"
              :width="16"
              :height="16"
            )

auth-modal(v-model="isAuth")

</template>

<script setup lang="ts">
  //! Переписать табы со ссылками, чтобы через пкм можно было открыть новую страницу
  import router from '@/router';
  import { ref, defineAsyncComponent, watch } from 'vue';

  const sSelector = defineAsyncComponent(() => import('./UI/elements/s-selector.vue'))
  const sDivider = defineAsyncComponent(() => import('./UI/elements/s-divider.vue'))
  const authModal= defineAsyncComponent(() => import('./UI/modals/auth-modal.vue'))

  const isAuth = ref(false)
  const page = ref('home')
  const notifications = [
    { title: 'Проверка хэша', text: '117 Пользователей предоставили для проверки хэш транзакций' },
    { title: 'Проверка хэша', text: '117 Пользователей предоставили для проверки хэш транзакций' },
    { title: 'Проверка хэша', text: '117 Пользователей предоставили для проверки хэш транзакций' },
    { title: 'Проверка хэша', text: '117 Пользователей предоставили для проверки хэш транзакций' },
  ]
  const menu = [
    { icon: 'money', text: 'Выплаты' },
    { icon: 'letter', text: 'Рассылка' },
    { icon: 'edit', text: 'Изменение контента' },
    { icon: 'fatBell', text: 'Уведомления' },
  ]

  watch(page, () => {
    console.log(router)
    router.push({ name: `${page.value}` })
    console.log(page.value);
  })
  watch(isAuth, () => {
    console.log(isAuth.value)
  })

  function openRegistrationModal() {
    console.log(isAuth.value)
    isAuth.value = !isAuth.value
  }
</script>

<style lang="sass">
.appbar
  width: 100%
  height: 80px
  position: absolute
  min-height: 80px
  z-index: 1
  top: 0px
  flex-basis: 80px
  flex-grow: 0
  flex-shrink: 0
  padding: 0 100px
  background-color: var(--black)

.left-side
  height: 100%
  .logo
    &__logo
      margin: 0 8px
  .title
    font-size:  1.5vw
    padding: 0 8px
    color: var(--white)

.right-side
  height: 100%
  text-align: center
  margin-right: 32px
  .notifications
    margin: 0 8px
    height: 100%
  .menu
    margin: 0 8px
    height: 100%

.notifications
  .header
    &__icon
      min-width: 48px
      min-height: 48px
      border-radius: 50%
      background-color: var(--graphite)
  .body
    min-width: 400px
    text-align: start
    &__wrapper
      margin: 16px 2px 0px
      max-height: 300px
      overflow-y: scroll
      overflow-x: hidden
      &::-webkit-scrollbar
        margin-top: 20px
      &::-webkit-scrollbar-track
        background-color: var(--black)
    &__row
      padding: 8px 32px
      margin: 8px 0
      &:first-child
        margin: 0 0 8px
      &:hover
        background-color: var(--graphite)
        .body__arrow
          transition: all 0.5s ease 0s
          transform: scale(1.3) translateX(5px)
    &__title
      margin: 8px 0 4px
    &__text
      margin: 4px 0 8px
      font-weight: 500
      white-space: pre-line
    &__arrow
      margin-left: 32px
      transition: all 0.5s ease 0s        
    &__divider
      color: var(--graphite)
    &__all
      padding: 0 32px
      margin: 16px 0
      color: var(--blue-purple)
      &:hover
        transition: all 0.5s ease 0s
        transform: scale(1.05)

.menu
  .header
    &__photo
      width: 50px
      height: 50px
      border-radius: 100%
      background: var(--blue)
    &__name
      margin: 0 16px
      color: var(--white)
    &__arrow
      transform: rotate(180deg)
      transition: all 0.5s ease 0s
    &:hover
      .header__arrow
        transform: rotate(90deg)
        transition: all 0.5s ease 0s

  .body
    text-align: center
    overflow: hidden
    &__wrapper
      margin: 16px 2px
    &__row
      padding: 8px 32px
      margin: 8px 0
      &:first-child
        margin: 0 0 8px
      &:last-child
        padding: 0px 32px
        margin: 8px 0 0
      &:hover
        background-color: var(--graphite)
        transition: all 0.5s ease 0s
        transform: scale(1.05)
    &__exit
      padding: 0 32px 8px
      margin: 0 0 16px
    &__divider
      color: var(--graphite)
      margin: 0
    &__text
      font-weight: 500
      line-height: 32px
      margin: 8px 32px 8px 16px
      white-space: nowrap
    &__arrow
      transition: all 0.5s ease 0s

</style>