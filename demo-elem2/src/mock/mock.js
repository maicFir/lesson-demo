import Mock from 'mockjs'
let Random = Mock.Random
const mock = {
  init () {
    this.index()
  },
  // 构造Mock接口的模拟数据
  index () {
    Mock.mock(/tax\/index\/list\.json/, {
      code: 0,
      'list|1-10': [{
        'id|+1': Random.id(),
        'title': Random.ctitle(),
        'code': Random.guid(),
        'number': Random.natural()
      }]
    })
  }
}
export {
  mock
}
