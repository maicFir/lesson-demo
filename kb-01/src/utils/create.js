import Vue from 'vue';
export default (Component, props) => {
  // 创建实例
  var vm = new Vue({
    render: (h) => {
      return h(Component, {props})
    }
  }).$mount();
  document.body.appendChild(vm.$el);// 挂在到虚拟dom的根实例上
  const children = vm.$children[0];
  children.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }
  return children
}