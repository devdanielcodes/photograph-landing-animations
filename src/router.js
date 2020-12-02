import { createRouter, createWebHistory } from 'vue-router'

import First from '@/views/First.vue'
import Second from '@/views/Second.vue'
import Third from '@/views/Third.vue'


export const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'First',
            component: First
        },
        {
            path: '/s',
            name: 'Second',
            component: Second
        },
        {
            path: '/t',
            name: 'Third',
            component: Third
        }

    ],
    history: createWebHistory()
})

export default router