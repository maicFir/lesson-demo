import api from '@/server/api'
import actionsType from './action-type'
import mutationsType from './mutation-type'
const actions = {
  [actionsType.FEATCH_LIST] ({ commit, state }, payLoad) {
    const specilBiness = state.specilBiness
    specilBiness.loadStatus = true // 开启加载条
    specilBiness.cardData = [] // 每一次请求都清空cardData
    /**
     * commit 传入commit 相当于this.commit, state相当于this.state
     * payLoad  payLoad相当于this.$store.dispatch('FEATCH_LIST', parms)传过来的parms
     */
    api.getCard({...payLoad}).then(({data}) => {
      // SET_LIST
      commit(mutationsType.SET_LIST, data) // action这里提交mutations中的SET_LIST
    })
  }
}
export default actions
