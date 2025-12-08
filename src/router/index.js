import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MovieList.vue'),
    },
    {
      path: '/movie',
      name: 'movie',
      component: () => import('../components/Movie.vue'),
    }

  ],
})

export default router
