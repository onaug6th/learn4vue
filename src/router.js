import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    //  首页
    {
        path: "/",
        name: "home",
        component: () => import("./views/Home.vue")
    },
    //  课程一
    {
        path: "/lession1",
        name: "lession1",
        component: () => import("./components/lession1/lession1.vue")
    },
    //  课程二
    {
        path: "/lession2",
        name: "lession2",
        component: () => import("./components/lession2/lession2.vue")
    },
    //  关于
    {
        path: "/about",
        name: "about",
        component: () => import("./views/About.vue"),
        meta: {
            showNav: true
        }
    }
];

export default new Router({
    routes
})
