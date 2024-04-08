import { defineStore } from 'pinia'

type Toast = {
  message: string,
  status: string
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[]
  }),
  actions: {
    add(payload: Toast) {
      this.toasts.push(payload)
      setTimeout(() => {
        this.toasts.shift()
      }, 3000)
    }
  }
})