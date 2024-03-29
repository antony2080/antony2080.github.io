<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
const store = useUserStore()
const { profile } = storeToRefs(store)

onMounted(() => {
  setTimeout(() => { store.getMe() }, 200)
})
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <h1 class="text-3xl mb-4">Home</h1>
    <div class="card bg-white shadow-md">
      <div class="card-body">
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-12 rounded">
              <img :src="profile.picture.data.url" alt="me">
            </div>
          </div>
          <div class="pl-4">
            <h1 class="text-xl font-bold">{{ profile.name }}</h1>
            <p class="text-slate-500">{{ profile.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
