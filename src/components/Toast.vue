<script setup lang="ts">
import { useToastStore } from '@/stores/toast'
import { storeToRefs } from 'pinia';
const { toasts } = storeToRefs(useToastStore())

</script>

<template>
  <div class="toast toast-center">
    <div class="alert" v-for="t in toasts" :class="t.status">
      <svg v-if="t.status === 'alert-error'" xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6"
        fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{{ t.message }}</span>
    </div>
  </div>
</template>
