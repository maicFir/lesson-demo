import Vue from 'vue';
import VueRouter from 'vue-router';
import './styles.styl';
import navTabs from 'components/navtabs/navTabs.vue';
import listView from './listView.vue';
import headerView from './headerView.vue';

Vue.use(VueRouter);	

// 路由
const router = new VueRouter({
	routes: [
		{ path: '/', component: listView },
		{ path: '/type/:id', component: listView}
	]

})

const app = new Vue({

	el: '#J_indexPage',

	router,

	components: {
		headerView
	}

});


new Vue({ 
	el: '#J_navTabs',
	data: {
		activeTab: 'index'
	},
	components: {
		navTabs: navTabs
	}
});