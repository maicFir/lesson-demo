import axios from 'axios'
import {path} from '@/server/path'
let MockBaseUrl = 'https://www.easy-mock.com/mock/5a5f206b7ca36d6d969ad916/example_copy'
// mock模拟假数据请求接口
const SpecilBinessMock = {
  index (config) {
    const url = window.isMock ? `${MockBaseUrl}/${path.indexUrl}` : `${path.indexUrl}`
    return axios.get(url, {params: {...config}})
  }
}
export {
  SpecilBinessMock
}
