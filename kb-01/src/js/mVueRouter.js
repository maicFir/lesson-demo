/*
 * @Author: wmc
 * @Date: 2019-07-10 17:30:52
 * @LastEditors: wmc
 * @LastEditTime: 2019-07-11 18:50:30
 * @Description: vue-router原理实现
 */
import Vue from 'vue';
class McVueRouter {
  constructor(options) {
    this.$options = options;
    this.routerMap = {};// 收集页面的路由
    // 路由响应
    this.app = new Vue({
      data: {
        hash: '/'
      }
    })
  }
  init() {
    // 监听浏览器的hash事件
    this.bindEvent();// 监听url的hashchange
    this.createRouterMap(this.$options);
    this.initComponent();// 初始化<router-link />与<router-view />两个组件的
  }
  bindEvent() {
    window.addEventListener('load', this.onHashChange.bind(this));
    window.addEventListener('hashchange', this.onHashChange.bind(this));
  }
  onHashChange() {
    this.app.hash = window.location.hash.substring(1) || '/' // 获取hash值
  }
  initComponent() {
    // 全局注册router-link
    Vue.component('router-link', {
      props: {to: String},
      render(h) {
        return h('a', {
          attrs: {href: `#/${this.to}`}
        }),[this.$slots.default]
      }
    });
    // 全局注册router-view
    Vue.component('router-view', {
      render: h => {
        return h(this.routerMap[this.app.hash])
      }
    })
  }
  // 创建路由
  createRouterMap(options) {
    options.routes.map(item => {
      this.routerMap[item.path] = item.component;
    })
  }
}
// 插件，必须是一个静态方法
McVueRouter.install = function() {
  Vue.mixin({
    beforeCreate() { // 初始化时调用
      Vue.prototype.$router = this.$options.router; // new vue({router})
      this.$options.router.init();
    }
  })
}
Vue.use(McVueRouter)