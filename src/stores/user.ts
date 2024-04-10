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
  token: string,
  auth: Auth
}

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {},
    token: '',
    auth: {},
  } as User),
  getters: {
    isAuthenticated: state => !!state.token
  },
  actions: {
    async load() {
      this.token = localStorage.getItem("accessTokenFB") || ""
      const authResponse = await fbService.fbInit()
      if (authResponse) {
        this.auth = authResponse
      }
    },
    async login() {
      console.log('[login start]')
      const authResponse = await fbService.fbLogin()
      if (authResponse) {
        this.auth = authResponse
        this.token = authResponse?.accessToken
        localStorage.setItem("accessTokenFB", authResponse?.accessToken)
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
      this.auth = {} as Auth
      this.token = ''
    }
  }
})