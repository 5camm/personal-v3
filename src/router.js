import {
    createRouter as _createRouter,
    createWebHistory,
    createMemoryHistory
  } from 'vue-router'
  import Home from './pages/Home.vue'
  import Find from './pages/Find.vue'
  import Contact from './pages/Contact.vue'
  import About from './pages/About.vue'
  import Code from './pages/Code.vue'
  import Collections from './pages/Collections.vue'
  
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
  ]
  
  export const createRouter = (isServer = import.meta.env.SSR) => {
    const history = isServer
      ? createMemoryHistory()
      : createWebHistory()
  
    return _createRouter({
      history,
      routes
    })
  }