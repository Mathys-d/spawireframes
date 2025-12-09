import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'movies',
        component: () => import('../views/MovieList.vue')
    },
    {
        path: '/movie/:id',
        name: 'movie',
        component: () => import('../views/MoviePage.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
