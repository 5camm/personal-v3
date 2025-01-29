<template>
    <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <button>collections</button>
      <ul class="fixed bg-gray-200 flex flex-col top-100" v-if="isOpen">
        <li class="py-2 px-4 list-none" v-for="collection of content.collections">
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
      const content = ref({
        collections: [
          {
            title: 'F00B4rBa7',
            handle: 'foobar',
          },
          {
            title: 'F00B4rBa7',
            handle: 'foobar',
          },
          {
            title: 'F00B4rBa7',
            handle: 'foobar',
          }
        ]
      })
  
      return {
        isOpen,
        content
      }
    }
  }
  </script>
  
  <style scoped></style>