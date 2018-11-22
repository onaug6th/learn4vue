/**
 * 项目主入口
 * 应该只包含挂载第三方库、挂载全局组件、全局方法，而不应该留下逻辑代码。
 */

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store';

//	项目配置样式
import appScss from "./App.scss";
//	http请求库
import httpClient from './providers/httpClient';

//	第三方依赖——代码美化
import "../static/dependence/prism/prism.css";
import "../static/dependence/prism/prism.js";

//	关闭生产提示
Vue.config.productionTip = false;

//	挂载请求库
Vue.prototype.$http = httpClient;

//	注册全局组件，回形针
Vue.component('paperClip', () => import("./components/paperClip.vue"));

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
