import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../pages/Home.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../pages/About.vue')
        },
        {
            path: '/todo',
            name: 'TodoList',
            component: () => import('../pages/TodoList.vue')
        }
    ]
})
