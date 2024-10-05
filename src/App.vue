<template>
    <nav-bar></nav-bar>
    <main class="min-h-screen flex flex-col pt-16 px-2">
      <router-view :key="route.fullPath" v-slot="{ Component }">
        <suspense>
          <component :is="Component" />
          <template #fallback>
            <loading></loading>
          </template>
        </suspense>
      </router-view>
    </main>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import Loading from './components/Loading.vue'
  import NavBar from './components/NavBar.vue'
  
  const route = useRoute()
  </script>
  
  <style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  </style>