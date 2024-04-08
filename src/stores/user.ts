import { defineStore } from 'pinia'
// @ts-ignore
import { fbService } from '@/utils/index'

type User = {
  name: string,
  email: string,
  url: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    auth: {},
    isAuthenticated: false,
    profile: {} as User
  }),
  actions: {
    async load() {
      const authResponse = await fbService.fbInit()
      if (authResponse) {
        console.log('[load] res:', authResponse)
        this.auth = authResponse
        localStorage.setItem("accessTokenFB", authResponse?.accessToken)
        this.isAuthenticated = true
      } else {
        console.log('[load fail] auth:', authResponse)
      }
    },
    async login() {
      console.log('[login start]')
      const authResponse = await fbService.fbLogin()
      if (authResponse) {
        console.log('[login success] auth:', authResponse)
        this.auth = authResponse
        localStorage.setItem("accessTokenFB", authResponse?.accessToken)
        this.isAuthenticated = true
      } else {
        console.log('[login fail] auth:', authResponse)
      }
    },
    async getMe() {
      let { name, email, picture } = await fbService.fbMe()
      this.profile = { name, email, url: picture?.data?.url }
    },
    async logout() {
      fbService.fbLogout()
      localStorage.setItem("accessTokenFB", "undefined")
      this.isAuthenticated = false
    }
  }
})