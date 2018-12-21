import api from '@/server/api'
import mutationsType from './mutation-type'
const mutations = {
  // data 是action中的回函调数ajax请求后返回中 data
  [mutationsType.SET_LIST] (state, data) {
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
  [mutationsType.SET_DETAIL] (state, payload) {
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
  },
  // 涉税管理
  [mutationsType.set_message_table] (state, payload) {
    let Message = state.Message
    Message.tableData = [] // 清空每一次请求的数据
    state.Message.loadStatus = true
    Message.pageInit.pageIndex = 1
    Message.pageInit.pageSize = 10
    Message.pageInit.total = 0
    return api.getMessageData({...payload}).then((res) => {
      let data = res.data
      if (data.code === 0) {
        let {pageIndex, pageSize, total, list} = data.data
        Message.tableData = list
        Message.pageInit.pageIndex = pageIndex
        Message.pageInit.pageSize = pageSize
        Message.pageInit.total = total
        if (list.length > 0) {
          state.Message.loadStatus = false
        }
      }
    })
  }
}
export default mutations
