<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useUserStore } from '@/stores/user'
import Toast from '@/components/Toast.vue'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const store = useUserStore()
const isDrawerOpen = ref(false)
const { isAuthenticated } = storeToRefs(store)
store.load()

const toggleDrawer = () => isDrawerOpen.value = !isDrawerOpen.value
</script>

<template>
  <div class="drawer md:drawer-open">
    <input type="checkbox" id="my-drawer-2" class="drawer-toggle" v-model="isDrawerOpen">
    <div class="drawer-content">
      <Navbar />
      <router-view></router-view>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu w-80 min-h-full p-4 bg-base-100">
        <li><router-link to="/" @click="toggleDrawer">Home</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/login" @click="toggleDrawer">Login</router-link></li>
        <li><router-link to="/404" @click="toggleDrawer">404</router-link></li>
      </ul>
    </div>
  </div>
  <Toast />
</template>
