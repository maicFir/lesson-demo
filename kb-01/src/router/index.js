import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index'
import About from '../pages/About'
Vue.use(Router);

const vueRouter = new Router({
  routes: [
    {path: '/', component: Index},
    {path: '/about', component: About}
  ]
});
export default vueRouter