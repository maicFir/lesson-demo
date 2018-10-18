<template>
<div class="pagation-container" style="padding: 10px 0px 32px;"
   v-if="pageDefault.total > 0">
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page.sync="pageDefault.pageIndex"
    :page-sizes="[10, 20, 30, 40]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageDefault.total"/>
</div>
</template>

<script>
export default {
  name: 'pagation',
  props: ['page'],
  data () {
    return {
    }
  },
  watch: {
    page: function (nVal) {
      // console.log(nVal)
      this.pageDefault = {...nVal} // 通过监听父级传过来的props，来设置当前分页参数
    }
  },
  computed: {
    pageDefault: function () {
      return this.toNumber({...this.page})
    }
  },
  methods: {
    toNumber (obj) {
      for (let key in obj) {
        obj[key] = Number(obj[key])
      }
      return obj
    },
    handleSizeChange (val) {
      this.pageDefault.pageSize = val
      let {pageSize, pageIndex} = {...this.pageDefault}
      let config = {pageSize, pageIndex}
      this.getCardData(config)
    },
    handleCurrentChange (val) {
      this.pageDefault.pageIndex = val
      let {pageSize, pageIndex} = {...this.pageDefault}
      let config = {pageSize, pageIndex}
      this.getCardData(config)
    },
    getCardData (parms) {
      this.$emit('getCardData', {...parms}) // 向父级通信，传递参数
    }
  }
}
</script>
