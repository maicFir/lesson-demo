<template>
  <div class="Message-container">
    <el-table ref="multipleTable"
      :data="dataTable"
      border fit
      v-loading="loading"
      element-loading-text="正在加载数据..."
      header-cell-class-name="vta-headerBack"
      tooltip-effect="light"
      empty-text="暂无数据" slot="empty" :show-overflow-tooltip="true" style="width: 90%">
      <el-table-column type="index" label="序号" align="center" width="60" />
      <el-table-column prop="wtrmc" label="纳税人名称" align="center" width="300">
        <template slot-scope="scope">
          <a class="text-over" href='javascript:;' :title="scope.row.wtrmc">{{scope.row.wtrmc ? scope.row.wtrmc : '暂无'}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="bqynse" label="本期应纳税额" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.bqynse ? scope.row.bqynse : '0.00'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="bqyjse" label="本期已缴税额" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.bqyjse ? scope.row.bqyjse : '0.00'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="bqjmse" label="本期免税额" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.bqjmse ? scope.row.bqjmse : '0.00'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="bqybtse" label="本期应补(退)税额" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.bqybtse ? scope.row.bqybtse : '0.00'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="150" label-class-name="option">
        <template slot-scope="scope">
           <span>查看</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'content-body',
  props: ['dataTable', 'activeIndex', 'loading'],
  data () {
    return {
    }
  }
}
</script>
