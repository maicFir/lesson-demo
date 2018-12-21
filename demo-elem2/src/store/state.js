const state = {
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
  },
  Message: {
    tableData: [],
    tabItem: [
      {name: '未申报', idx: '1'},
      {name: '申报失败', idx: '2'},
      {name: '已申报', idx: '3'}
    ],
    pageInit: {
      pageIndex: 1,
      pageSize: 10,
      total: 0
    },
    loadStatus: true// 加载状态
  }
}
export default state
