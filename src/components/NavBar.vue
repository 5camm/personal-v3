<template>
    <nav class="fixed h-16 flex items-center w-full bg-white">
      <router-link
        to="/"
        class="px-2 font-bold transform transition-all"
        active-class="scale-125 font-extrabold font-serif text-lg"
        exact
      >
        <span class="p-2">$cam</span>
      </router-link>
      <ul class="flex justify-around w-full text-sm">
        <li>
          <router-link to="/find" active-class="underline" class="font-mono">find</router-link>
        </li>
        <li>
          <router-link to="/contact" active-class="underline" class="font-mono">contact</router-link>
        </li>
        <li>
          <router-link to="/about" active-class="underline" class="font-mono">about</router-link>
        </li>
        <li>
          <router-link to="/code" active-class="underline" class="font-mono">code</router-link>
        </li>
        <li>
          <dropdown />
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import Dropdown from './Dropdown.vue'
  
  const route = useRoute()
  </script>
  
  <style></style>