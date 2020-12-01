import { createRouter, createWebHistory } from 'vue-router'

export const router =  createRouter({
    routes: [
        {
            path: '/',
            name: 'First',
            component: import('@/views/First.vue')
        },
        {
            path: '/s',
            name: 'Second',
            component: import('@/views/Second.vue')
        },
        {
            path: '/t',
            name: 'Third',
            component: import('@/views/Third.vue')
        }

    ],
    history: createWebHistory()
})