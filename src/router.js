import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    //  首页
    {
        path: "/",
        name: "home",
        component: () => import("./views/home/home.vue")
    },
    //  课程一
    {
        path: "/lession1",
        name: "lession1",
        component: () => import("./views/lession1/lession1.vue")
    },
    //  课程二
    {
        path: "/lession2",
        name: "lession2",
        component: () => import("./views/lession2/lession2.vue")
    },
    //  课程三
    {
        path: "/lession3",
        name: "lession3",
        component: () => import("./views/lession3/lession3.vue")
    },
    //  关于
    {
        path: "/about",
        name: "about",
        component: () => import("./views/about/about.vue")
    }
];

//  实例化后的router
const router = new Router({
    routes
});

/**
 * 监听路由改变前事件
 * @param {object} to 前往的路由信息
 * @param {object} from 来自的路由信息
 * @param {Function} next 释放路由
 */
router.beforeEach((to, from, next) => {
	
	//  如果该路由设置了校验，检查是否登录
	if (to.meta.shouldAdmin) {
		
		//	如果存在登录标记，允许进入该路由
		if (localStorage.getItem("isLogin")) {
			next();
		}
		//	否则跳转回首页，或者去提示页（看业务需求）
		else {
			next({
				path: '/'
			});
		}
	}
	//	否则默认放行
	else {
		next();
	}

});

//	监听路由改变后事件
router.afterEach((to, from) => {
	//	页面回到顶部
	document.documentElement.scrollTop = 0;
});

export default router;
