import Vue from 'vue';
import './style.styl';
import navTabs from 'components/navtabs/navTabs.vue';

new Vue({ 
	el: '#J_navTabs',
	data: {
		activeTab: 'center'
	},
	components: {
		navTabs: navTabs
	}
});