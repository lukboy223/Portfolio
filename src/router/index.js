import About from '@/pages/about.vue'
import Projects from '@/pages/projects.vue'
import Home from '@/pages/home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
  ],
})

export default router
