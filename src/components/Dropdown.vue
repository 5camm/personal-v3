<template>
    <div class="relative" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <button>projects</button>
      <ul class="fixed bg-green-200 text-gray-800 flex flex-col top-100 rounded py-2" v-if="isOpen">
        <li class="py-2 px-4 list-none" v-for="project of content.projects">
          <router-link
            :to="`/projects/${project.route}`"
            active-class="underline"
          >
            {{ project.title }}
              
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
        projects: [
          {
            title: 'mesh',
            route: 'foobar',
          },
          {
            title: 'givii',
            route: 'foobar',
          },
          {
            title: 'greenbot',
            route: 'foobar',
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