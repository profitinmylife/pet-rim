import * as vRouter from 'vue-router'

const routes: Array<vRouter.RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        redirect: { name: 'Character' }
    },
    {
        path: '/characters',
        component: () => import(
          '@/pages/character'
          ),
        name: 'Character'
    },
    {
        path: '/locations',
        component: () => import(
          '@/pages/location'
          ),
        name: 'Location'
    },
    {
        path: '/episodes',
        component: () => import(
          '@/pages/episode'
          ),
        name: 'Episode'
    }
]

const router = vRouter.createRouter({
    history: vRouter.createWebHistory(),
    routes: routes
})

export default router
