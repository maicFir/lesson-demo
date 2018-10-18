import api from '@/server/api'
const actions = {
  getIncrementers: (context) => {
    return api.get('/incrementers')
      .then((response) => context.commit('GET_INCREMENTERS', response))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  createIncrementer: (context, data) => {
    return api.post(data.url, data.request)
      .then((response) => context.commit('CREATE_INCREMENTER', response))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  updateIncrementer: (context, data) => {
    return api.patch(data.url, data.request)
      .then((response) => context.commit('UPDATE_INCREMENTER', response))
      .catch((error) => context.commit('API_FAILURE', error))
  },
  deleteIncrementer: (context, url) => {
    return api.delete(url)
      .then((response) => context.commit('DELETE_INCREMENTER', response))
      .catch((error) => context.commit('API_FAILURE', error))
  }
}
export default actions
