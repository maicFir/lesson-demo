import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/server/api'
Vue.use(Vuex)

// 初始化store实例
const store = new Vuex.Store({
  state: {
    // specilBiness所属的state
    specilBiness: {
      cardData: [],
      loadStatus: true, // 加载状态
      tabItem: [{name: '未报送', idx: '1'}, {name: '已报送', idx: '2'}, {name: '全部', idx: '3'}],
      pageInit: {
        pageIndex: 1,
        pageSize: 10,
        total: 100
      },
      infoArr: [], // 弹框的详细信息
      completetableData: [],
      desc: '', // 简要描述
      type: 1 // 是否可编辑 1可编辑 2 不可编辑
    }
  },
  // 异步请求
  actions: {
    FEATCH_LIST ({ commit, state }, payLoad) {
      const specilBiness = state.specilBiness
      specilBiness.loadStatus = true // 开启加载条
      specilBiness.cardData = [] // 每一次请求都清空cardData
      /**
       * commit 传入commit 相当于this.commit, state相当于this.state
       * payLoad  payLoad相当于this.$store.dispatch('FEATCH_LIST', parms)传过来的parms
       */
      api.getCard({...payLoad}).then(({data}) => {
        // SET_LIST
        commit('SET_LIST', data) // action这里提交mutations中的SET_LIST
      })
    }
  },
  // 同步请求
  mutations: {
    // data 是action中的回函调数ajax请求后返回中 data
    SET_LIST (state, data) {
      const specilBiness = state.specilBiness
      specilBiness.cardData = data.list
      specilBiness.pageInit.pageIndex = data.pageIndex
      specilBiness.pageInit.pageSize = data.pageSize
      specilBiness.pageInit.total = data.total
      if (specilBiness.cardData.length > 0) {
        specilBiness.loadStatus = false
      } else {
        specilBiness.loadStatus = true
      }
    },
    // 直接commit同步方式请求
    SET_DETAIL (state, payload) {
      let specilBiness = state.specilBiness
      return api.getDetail({...payload}).then((res) => {
        const data = res.data.data
        if (res.data.code !== 0) {
          return
        }
        specilBiness.infoArr = data.infoArr
        specilBiness.completetableData = data.completetableData
        specilBiness.type = data.type
        specilBiness.desc = data.desc
      })
    }
  }
})
export default store
