import Vue from 'vue';
import './style.styl';
import navTabs from 'components/navtabs/navTabs.vue';
import listView from './listView.vue';


new Vue({
	
	el: '#app',

	data: {
		activeTab: 'gift'
	},

	components: {
		listView: listView,
		navTabs: navTabs
	}
})