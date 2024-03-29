import { defineStore } from 'pinia'
// @ts-ignore
import { apiLogin, apiMe, apiLogout, initFacebookSdk } from '@/utils/index'

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
      const auth = await initFacebookSdk()
      this.auth = auth
      localStorage.setItem("accessTokenFB", auth?.accessToken)
      if (auth) {
        this.isAuthenticated = true
      }
    },
    async login() {
      const { authResponse } = await apiLogin()
      this.auth = authResponse
      if (authResponse) {
        localStorage.setItem("accessTokenFB", 'has auth response')
        this.isAuthenticated = true
      }
    },
    async getMe() {
      let { name, email, picture } = await apiMe()
      this.profile = { name, email, url: picture?.data?.url }
    },
    async logout() {
      apiLogout()
      localStorage.setItem("accessTokenFB", "undefined")
      this.isAuthenticated = false
    }
  }
})