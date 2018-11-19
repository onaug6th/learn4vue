import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

//	项目配置样式
import appScss from "./App.scss";
//	http请求库
import httpClient from './providers/httpClient';
//	项目配置
import appConfig from './providers/appConfig';
//	第三方依赖——代码美化
import "../static/dependence/prism/prism.css";
import "../static/dependence/prism/prism.js";

//	关闭生产提示
Vue.config.productionTip = false;

//	挂载请求库
Vue.prototype.$http = httpClient;

//	监听路由改变前事件
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

//	注册全局组件，回形针
Vue.component('paperClip', () => import("./components/common-component/paperClip.vue"));

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
