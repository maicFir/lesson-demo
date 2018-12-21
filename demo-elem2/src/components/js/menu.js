const menu = [
  {
    index: '1',
    icon: 'el-icon-location',
    name: '首页',
    children: [
      {
        name: '涉税采集',
        icon: '',
        path: '/index',
        children: [
          {index: '1-1', name: '机构管理', path: 'Message'},
          {index: '1-2', name: '涉税分析', path: 'System'}
        ]
      }
    ]
  },
  {
    index: '2',
    icon: 'el-icon-setting',
    name: '设置'
  }
]
export default menu
