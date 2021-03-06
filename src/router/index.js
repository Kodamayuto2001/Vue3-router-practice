import { createWebHistory,createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
// import User from "@/views/User.vue";
import NotFound from "@/views/NotFound.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    // 動的セグメント
    // {
    //     path: "/:name",
    //     name: "User",
    //     component: User,
    //     props: true,
    // },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;