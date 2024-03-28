import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { router } from '@/router/index'
// @ts-ignore
import { initFacebookSdk } from '@/utils/index'

initFacebookSdk().then(startApp)

function startApp() {
  const app = createApp(App)
  app.use(router).use(createPinia())
  app.mount('#app')
}
startApp()