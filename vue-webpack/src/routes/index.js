import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/:notFount(.*)',
            component: NotFound
        }
    ]
})
