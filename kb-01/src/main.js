import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Event from './utils/event.js'
Vue.prototype.$mc = new Event();

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
