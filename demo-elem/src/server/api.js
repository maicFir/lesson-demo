import axios from 'axios'
import { path } from '@/server/path'
const MockBaseUrl = 'https://www.easy-mock.com/mock/5a5f206b7ca36d6d969ad916/example_copy'
const api = {
  getCard (config) {
    const url = window.isMock ? `${MockBaseUrl}/${path.indexUrl}` : `${path.indexUrl}`
    return axios.get(url, {params: {...config}})
  },
  getDetail (config) {
    const url = window.isMock ? `${MockBaseUrl}/${path.detailUrl}` : `${path.detailUrl}`
    return axios.get(url, {params: {...config}})
  }
}
export default api
