// 不需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router'

const AuthorIntro = () => import('@/pages/intro/AuthorIntro.vue')

const commonRoutes: Array<RouteRecordRaw> = [
    // {
    //     path: '/',
    //     redirect: '/blog',
    // },
    {
        path: '/',
        name: 'AuthorIntro',
        component: AuthorIntro,
    },
]

export default commonRoutes
