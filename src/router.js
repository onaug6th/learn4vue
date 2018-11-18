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
    //  关于
    {
        path: "/about",
        name: "about",
        component: () => import("./views/About.vue"),
        meta : {
            showNav : true
        }
    }
];

export default new Router({
    routes
})
