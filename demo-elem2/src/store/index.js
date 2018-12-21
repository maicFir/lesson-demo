import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
Vue.use(Vuex)

// 初始化store实例
const store = new Vuex.Store({
  // state数据
  state,
  // 异步请求
  // getters可以修改state的数据，相当于state的computed
  getters,
  actions,
  // 同步请求
  mutations
})
export default store
