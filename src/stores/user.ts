import { defineStore } from 'pinia'
// @ts-ignore
import { apiLogin, apiMe, apiLogout } from '@/utils/index'
const appId = import.meta.env.VITE_FACEBOOK_APP_ID;

type User = {
  name: string,
  email: string,
  picture: {
    data: {
      url: string
    }
  }
}

export const useUserStore = defineStore('user', {
  state: () => ({
    auth: {},
    profile: {} as User
  }),
  actions: {
    async load() {
      const localAuth = sessionStorage.getItem(`fbssls_${appId}`) || ''
      this.auth = JSON.parse(localAuth)
    },
    async login() {
      const { authResponse } = await apiLogin()
      this.auth = authResponse
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