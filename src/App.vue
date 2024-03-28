<script setup lang="ts">
import { useUserStore } from '@/stores/user'
const store = useUserStore()
store.load()
</script>

<template>
  <div class="drawer drawer-open">
    <input type="checkbox" id="my-drawer-2" class="drawer-toggle">
    <div class="drawer-content">
      <router-view></router-view>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu w-80 min-h-full p-4 bg-base-100">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/404">404</router-link></li>
      </ul>
    </div>
  </div>
</template>
