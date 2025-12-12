import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from '@/_helpers/auth-guard.js'

localStorage.setItem('token', 'marcel');

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
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue')
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
});
