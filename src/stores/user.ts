import { defineStore } from 'pinia'
// @ts-ignore
import { fbService } from '@/utils/index'

type Profile = {
  username: string,
  email: string,
  pictureUrl: string
}

type Auth = {
  userID: string,
  expiresIn: number,
  accessToken: string,
  signedRequest: string,
  graphDomain: string,
  data_access_expiration_time: number
}

type User = {
  profile: Profile,
  auth: Auth,
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {},
    auth: {},
    isAuthenticated: false,
  } as User),
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
      let { name: username, email, picture } = await fbService.fbMe()
      this.profile = { username, email, pictureUrl: picture?.data?.url }
    },
    async logout() {
      fbService.fbLogout()
      localStorage.removeItem("accessTokenFB")
      this.isAuthenticated = false
    }
  }
})