<template>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      size="mini"
      :inline="true"
      class="form-wrap"
    >
    <el-row>
        <el-col :xs="12" :sm="12" :md="15" :lg="10" :xl="8">
          <el-form-item
            class="specil-form-search"
            prop="name"
          >
          <i></i>
          <el-input
            class="numberInfo-text"
            v-model="ruleForm.name"
            placeholder="请输入委托人协议信息采集编号或是统一社会信用代码"
          ></el-input>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
            >搜索</el-button>
        </el-form-item>
        </el-col>
        <el-col :xs="12" :sm="10" :md="9" :lg="7" :xl="4">
          <el-form-item>
          <el-select
            v-model="ruleForm.value"
            placeholder="委托项目"
            @change="slectProject"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              </el-option>
              </el-select>
        </el-form-item>
        </el-col>
    </el-row>
        </el-form>

</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '1',
        label: '专业税务顾问'
      },
      {
        value: '2',
        label: '涉税鉴证'
      },
      {
        value: '3',
        label: '税收策划'
      },
      {
        value: '4',
        label: '纳税情况审查'
      }
      ],
      ruleForm: {
        name: '',
        value: ''
      },
      rules: {
        name: [{
          required: true,
          message: '委托人协议信息采集编号或是统一社会信用代码不能为空'
        }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.searchName()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    searchName () {
      let {name, value} = {...this.ruleForm}
      let config = {name, value}
      this.$emit('getCardData', {...config})
    },
    slectProject (value) {
      let config = {value}
      config = {...this.ruleForm, ...config}
      this.$emit('getCardData', {...config})
    }
  }
}
</script>
<style lang="stylus">
.form-wrap {
  text-align: left;
  margin-left: 12px;
  padding-top:60px;
}
.specil-form-search {
  width:100%;
  margin: 0px !important;
  .el-form-item__content {
   width:100%;
  }
}
.numberInfo-text{
  width:58%;
}
.numberInfo-text {
  input {
    width:95%;
    padding: 0px 20px;
  }
}

</style>
