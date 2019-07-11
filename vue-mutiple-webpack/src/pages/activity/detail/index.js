import Vue from 'vue';
import Carousel from 'vue-m-carousel';
import './style.styl';
import navTabs from 'components/navtabs/navTabs.vue';

// 轮播
new Vue({

	el: '#J_header',
	
	components: {
		Carousel: Carousel.default
	}
});

new Vue({ 
	el: '#J_navTabs',
	data: {
		activeTab: 'activity'
	},
	components: {
		navTabs: navTabs
	}
});


