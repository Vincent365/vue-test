/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/home'
Vue.use(Router)
export default new Router({
 routes: [
	{
		path: '/',
		name: 'home',
		component: resolve => {
		    require(['@/components/home'], resolve);
		}
		
	}
 ]
})