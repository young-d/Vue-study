import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import Docs from './Docs'
import DocsId from './DocsId'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'docs',
            path: '/documents',
            component: Docs,
            children: [{
                name: 'docsId',
                path: ':id',
                component: DocsId
            }]
        },
        {
            path: '/:notFount(.*)',
            component: NotFound
        }
    ]
})
