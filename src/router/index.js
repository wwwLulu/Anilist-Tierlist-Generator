import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/user/:userName/',
        component: UserList,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history',
})

export default router
