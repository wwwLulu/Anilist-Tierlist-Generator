import { createRouter, createWebhHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserList from '../views/UserList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/:type/:userName/',
        component: UserList,
        props: true,
    },
]

const router = createRouter({
    history: createWebhHistory(),
    routes,
    mode: 'history',
})

export default router
