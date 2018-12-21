const getters = {
  getTableData: state => state.Message.tableData,
  getMenuTab: state => state.Message.tabItem,
  getLoadStatus: state => state.Message.loadStatus,
  getPageInit: state => state.Message.pageInit
}
export default getters
