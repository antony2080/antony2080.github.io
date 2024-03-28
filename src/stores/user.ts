import { defineStore } from 'pinia'
// @ts-ignore
import { apiLogin, apiMe, apiLogout } from '@/utils/index'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    auth: {},
    profile: {}
  }),
  actions: {
    async load() {
      const localAuth = sessionStorage.getItem(`fbssls_395709766507934`) || ''
      this.auth = JSON.parse(localAuth)
    },
    async login() {
      let loginRes = await apiLogin()
      this.auth = loginRes
    },
    async getMe() {
      let meRes = await apiMe()
      this.profile = meRes
    },
    async logout() {
      apiLogout()
    }
  }
})