<template>
    <nav class="fixed h-16 flex items-center w-full bg-gray-200">
      <router-link
        to="/"
        class="px-2 font-bold transform transition-all"
        active-class="scale-125 font-extrabold font-serif text-lg"
        exact
      >
        <span class="p-2 text-blue-600">$cam</span>
      </router-link>
      <ul class="flex justify-around w-full font-sans text-sm text-gray-700">
        <li>
          <router-link to="/find" active-class="underline">find</router-link>
        </li>
        <li>
          <router-link to="/contact" active-class="underline">contact</router-link>
        </li>
        <li>
          <router-link to="/about" active-class="underline">about</router-link>
        </li>
        <li>
          <router-link to="/code" active-class="underline">code</router-link>
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