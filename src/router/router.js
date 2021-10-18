// import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import BoardIndex from "../view/board/index.vue";
// 要告诉 vue 使用 vueRouter
// Vue.use(VueRouter);

const routes = [
    {
        path: "/board/edit",
        component: () => import('../view/home/home.vue')
    },
    {
        // 当 /home 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: '/board/index',
        component: BoardIndex
    },
    {
        path: "/login",
        component: () => import('../view/user/login.vue')
    },
    {
        path: '/',
        redirect: '/board/index'
    },
    {
        path: '*',
        component: () => import('../notfound/404.vue')
    }
]

var router = new VueRouter({
    mode: 'history',
    routes
})
export default router;