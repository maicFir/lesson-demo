import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import specilBiness from '@/pages/BussinessColl/specilBiness/index'
import Message from '@/pages/Message/index'
import System from '@/pages/System/index'
// // 路由懒加载，分模块
// const specilBiness = () => { import('../pages/BussinessColl/specilBiness/index.vue') }
// const Message = () => { import('../pages/Message/index.vue') }
// const System = () => { import('../pages/System/index.vue') }

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: specilBiness
    },
    {
      path: '/',
      name: 'index',
      component: specilBiness
    },
    {
      path: '/Message',
      name: 'message',
      component: Message
    },
    {
      path: '/System',
      name: 'system',
      component: System
    }
  ]
})
