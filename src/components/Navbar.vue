<script setup>
import imageUrl from '@/assets/favicon-32x32.png';
</script>
<template>
  <div class="w-full navbar bg-base-300">
    <div class="navbar-start">
      <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block w-6 h-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div>
    <div class="navbar-center">
      <img :src="imageUrl" alt="logo">
    </div>
    <div class="navbar-end"></div>
  </div>
</template>