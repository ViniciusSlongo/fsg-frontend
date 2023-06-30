import { createRouter, createWebHistory } from "vue-router";

const routes = [

    {
        path: "/events",
        name : "events",
        component: () => import("./views/Events.vue"),
    },

    {
        path: "/home/:layout?",
        name : "home",
        component: () => import("./views/Home.vue"),
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes,
})

export default router