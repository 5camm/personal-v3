<template>
    <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <button>collections</button>
      <ul class="fixed flex flex-col top-100 bg-white" v-if="isOpen">
        <li class="p-2" v-for="collection of collection.collections">
          <router-link
            :to="`/collections/${collection.handle}`"
            active-class="underline"
          >
            {{ collection.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const isOpen = ref(false)
      const collection = []
  
      return {
        isOpen,
        collection
      }
    }
  }
  </script>
  
  <style scoped></style>