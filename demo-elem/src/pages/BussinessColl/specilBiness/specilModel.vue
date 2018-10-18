<template>
  <el-dialog title="基本信息" :visible.sync="ishide" @close="closeModel(false)" width="80%" center>
    <div class="base-info">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" width="180">
        </el-table-column>
        <el-table-column prop="code" width="180">
        </el-table-column>
        <el-table-column prop="name2">
        </el-table-column>
        <el-table-column prop="code2">
        </el-table-column>
      </el-table>
    </div>
    <div class="complete-date">
      <p class="title">业务完成日期</p>
      <template slot-scope="scope">
        <el-date-picker v-if="isEdit === 1" v-model="formInline.date" type="date" placeholder="选择日期" />
        <p v-else>{{scope.row.date}}</p>
      </template>
    </div>
    <div class="bussin-completion">
      <p class="title">业务完成情况</p>
      <div class="bussin-table">
        <el-table :data="completetableData" stripe style="width: 100%">
          <el-table-column prop="name" label="业务内容" width="240">
          </el-table-column>
          <el-table-column prop="option" label="业务报告签署人" width="180">
            <template slot-scope="scope">
              <el-select v-model="selectArr[scope.$index]"
                v-if="isEdit === 1"
                placeholder="请选择签署人" size="medium">
                <el-option v-for="(item, idx) in scope.row.option"
                  :key="idx"
                  :label="item.regName"
                  :value="item.id"
                />
              </el-select>
              <p v-else>
                <span v-for="(item, idx) in scope.row.option" :key="idx">
                  {{item.regName}}
                </span>
              </p>
            </template>
          </el-table-column>
          <el-table-column label="业务收入金额">
             <template slot-scope="scope">
                <el-input
                  placeholder="请输入业务收入金额"
                  v-model="scope.row.cashed"
                  clearable
                  v-if="isEdit === 1"
                />
                <p v-else>{{scope.row.cashed}}</p>
             </template>
          </el-table-column>
          <el-table-column label="涉及委托人税款金额">
              <template slot-scope="scope">
                <el-input
                  placeholder="请输入涉及委托人税款金额"
                  v-model="scope.row.percashed"
                  clearable
                  v-if="isEdit === 1"
                />
                <p v-else>{{scope.row.percashed}}</p>
             </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="bussin-sum">
      <p class="title">业务情况摘要</p>
      <el-input
          v-if="isEdit === 1"
          type="textarea"
          autosize
          :rows="2"
          :value="desc"
          placeholder="请输入情况摘要"
          v-model="desc"/>
        <p v-else>{{desc}}</p>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="save">保存</el-button>
      <el-button type="primary" class="cancel-btn" @click="cancel">取消</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'specilModel',
  props: ['isVisible', 'infoArr', 'completetable', 'type', 'descInfo'],
  data () {
    return {
      ishide: this.isVisible,
      selectArr: [],
      formInline: {
        region: '',
        date: '',
        textarea: ''
      }
    }
  },
  computed: {
    tableData: function () {
      return this.infoArr
    },
    completetableData: function () {
      return this.completetable
    },
    isEdit: function () {
      return this.type
    },
    desc: function () {
      return this.descInfo
    }
  },
  watch: {
    isVisible: function (nVal, oldVal) {
      this.ishide = nVal
    }
  },
  methods: {
    save () {
      this.ishide = false
      this.$emit('showModel', false)
      this.showModel = true
    },
    closeModel (bool) {
      this.$emit('showModel', bool)
    },
    cancel () {
      this.closeModel(false)
    }
  }
}
</script>

<style lang="stylus">
.specil-container {
  .el-dialog__title {
    line-height: 0px !important;
    font-size: 20px !important;
    color: #111 !important;
  }

  .el-button--default {
    background: #6799D4;
    color: #fff;
    border: none;
  }

  .cancel-btn {
    background: #ddd;
    color: #111;
    border: none;
  }

  .bussin-table {
    border: 1px solid #111;
  }
}

.base-info {
  background: #F3F3F3;
  border: 1px solid #111;
  margin: 12px 0px 0px;
  overflow: hidden;
  font-size: 13px;

  .el-table thead {
    display: none;
  }

  .el-table--enable-row-transition {
    .el-table__body {
      td:nth-of-type(2n+1) {
        color: #000;
        font-size: 13px;
        background: #DDEDFF;
      }

      td:nth-of-type(2n) {
        background: #F3F3F3;
      }
    }
  }
}

.el-dialog--center {
  padding: 17px 20px;
}

.el-dialog__header {
  padding: 0px;
  text-align: left;
  font-size: 20px;
  color: #000000;
}

.el-dialog--center .el-dialog__body {
  padding: 0px;
}

.el-dialog__body {
  padding: 0px;
}

.complete-date, .bussin-completion, .bussin-sum {
  p {
    padding: 0px;
    margin: 0px;
  }

  .title {
    font-size: 20px;
    padding: 31px 0px 15px;
    color: #000;
  }
}

.bussin-completion {
  .has-gutter {
    tr {
      th {
        background: #DDEDFF;
      }
    }
  }

  .el-table {
    .cell {
      font-size: 13px;
    }

    th>.cell {
      color: #111;
    }
  }
}
</style>
