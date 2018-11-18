import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

import appScss from "./App.scss";

//	http请求库
import httpClient from './providers/httpClient';
//	项目配置
import appConfig from './providers/appConfig';

//	关闭生产提示
Vue.config.productionTip = false;

//	挂载请求库
Vue.prototype.$http = httpClient;

//	监听路由改变事件
router.beforeEach((to, from, next) => {

	//  如果该路由设置了校验，检查token的存在。
	if (to.meta.requireAuth) {

		if (store.state.token) {
			next();
		}
		else {
			next({
				path: '/'
			});
		}
	}
	else {
		next();
	}

});

router.afterEach((to, from) => {
	//	回到顶部
	document.documentElement.scrollTop = 0;
});

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
