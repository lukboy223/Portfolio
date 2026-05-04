import About from '@/pages/about.vue'
import Projects from '@/pages/projects.vue'
import Home from '@/pages/home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

export const transitionPhase = ref('idle') // 'idle' | 'covering' | 'retracting'

// Single source of truth for the page-transition duration.
// Used by the router (cover/retract waits) AND by PageTransition.vue (CSS transition).
export const TRANSITION_MS = 1000

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

router.beforeEach(async (to, from) => {
  // Block any new navigation while a transition is still running
  if (from.name && transitionPhase.value !== 'idle') {
    return false
  }
  if (from.name && to.name !== from.name) {
    transitionPhase.value = 'covering'
    await new Promise((r) => setTimeout(r, TRANSITION_MS))
  }
})

router.afterEach((to, from) => {
  if (from.name && to.name !== from.name) {
    transitionPhase.value = 'retracting'
    setTimeout(() => {
      transitionPhase.value = 'idle'
    }, TRANSITION_MS)
  }
})

export default router
