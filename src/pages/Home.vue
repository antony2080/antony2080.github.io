<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useToastStore } from '@/stores/toast'
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const store = useUserStore()
const toastStore = useToastStore()
const { isAuthenticated } = storeToRefs(store)
const router = useRouter()

const { profile } = storeToRefs(store)
const loading = ref(false)

const doGetMe = () => {
  setTimeout(async () => {
    loading.value = true
    await store.getMe()
    loading.value = false
  }, 100)
}

const logout = async () => {
  await store.logout()
  toastStore.add({
    message: "Logout successfully.",
    status: "alert-success"
  })
  router.push('/login')
}

onMounted(() => {
  doGetMe()
})
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <h1 class="text-3xl mb-4">Home</h1>
    <div class="card bg-white shadow-md">
      <div class="card-body">
        <span class="loading loading-spinner loading-lg text-primary" v-if="loading"></span>
        <div class="flex items-center" v-else>
          <div class="avatar">
            <div class="w-12 rounded">
              <img :src="profile.url" alt="me">
            </div>
          </div>
          <div class="pl-4">
            <h1 class="text-xl font-bold">{{ profile.name }}</h1>
            <p class="text-slate-500">{{ profile.email }}</p>
          </div>
        </div>
        <div class="card-actions justify-end" v-if="isAuthenticated">
          <button class="btn bg-purple-600 hover:bg-purple-500 text-white" @click="logout"><svg fill="currentColor"
              class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>facebook</title>
              <path
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>
