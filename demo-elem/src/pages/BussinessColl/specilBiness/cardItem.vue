<template>
  <el-row :gutter="24" class="box-card-container">
      <el-col :xs="24" :sm="8" :md="6" :lg="8" :xl="6" v-for="(item, idx) in cardData" :key="idx">
          <el-card class="box-card">
              <h1 class="card-header">{{item.title}}</h1>
              <div class="dec">涉税鉴证</div>
              <ul class="card-content">
                  <li>
                      <h2 class="CommissionNumber">委托协议信息采集编号：</h2>
                      <span class="CommissionId">{{item.number}}</span>
                  </li>
                  <li>
                      <h2 class="CommissionNumber">委托人统一社会信用代码：</h2>
                      <span class="CommissionId">{{item.code}}</span>
                  </li>
                  <li>
                      <h2 class="CommissionNumber">涉税专项业务报告编号：</h2>
                      <span>{{item.id}}</span>
                  </li>
              </ul>
              <div class="send" @click="openModel(item.status, item.code)">
                  <span class="option"
                    :class="{'active': item.status === 1,'hasactive': item.status === 2}">
                    {{item.status === 1?'未报送':'已报送'}}
                </span>
              </div>
          </el-card>
      </el-col>
      <slot name="Loading"/>
  </el-row>
</template>
<script>
export default {
  name: 'cardItem',
  props: ['cardData'],
  data () {
    return {}
  },
  methods: {
    openModel (status, code) {
      let parms = {status, code}
      this.$store.commit('SET_DETAIL', parms)
      this.$emit('showModel', true)
    }
  }
}
</script>

<style lang="stylus">
    .box-card-container {
      margin-top: 8px !important;
    }
    ul{
        padding:0px;
        margin:0px;
        >li{
            list-style:none;
            margin:0px;
            padding:0px;
        }
    }
    .card-header{
        padding:0px;
        margin:0px;
    }
    .CommissionNumber{
        font-size:13px;
    }
</style>
