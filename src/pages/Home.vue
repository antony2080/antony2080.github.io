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
    <h1 class="text-3xl">Home</h1>
    <div class="card">
      <div class="card-body">
        {{ profile }}
      </div>
    </div>
  </div>
</template>
