<template>
    <h1>{{ msg }}</h1>
  
    <button class="w-48 bg-gray-200" @click="state.count++">
      count is: {{ state.count }}
    </button>
    <p>
      Edit
      <code>components/Hello.vue</code> to test hot module
      replacement.
    </p>
  </template>
  
  <script setup>
  import { defineProps, reactive } from 'vue'
  
  defineProps({
    msg: String
  })
  
  const state = reactive({ count: 0 })
  </script>
  
  <style scoped></style>