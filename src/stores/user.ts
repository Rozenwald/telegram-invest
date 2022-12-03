import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isAuth: true
  }),
  actions: {
    authenticate() {
      console.log('user.authenticate')
      console.log(this.isAuth)
      this.isAuth = true
      console.log(this.isAuth)
    }
  },
  getters: {
    getAuthStatus: (state) => state.isAuth
  },
})
