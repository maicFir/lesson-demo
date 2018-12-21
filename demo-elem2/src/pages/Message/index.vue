<template>
  <div class="message-container">
    <MenuTab :tabItem="getMenuTab" :activeIndex="activeIndex" @handleSelect="handleTab">
      <div slot='menu-rt' class="shenbao-date">申报期限: {{formParms.sbqx}}</div>
    </MenuTab>
    <Content :dataTable="getTableData" :loading="getLoadStatus" />
    <Pagation :page="getPageInit" @getCardData="getVatSbjtList"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuTab from '@/components/common/menuItem'
import Content from './components/Content'
import Pagation from '@/components/common/pagation'
export default {
  name: 'Message',
  components: { MenuTab, Content, Pagation },
  data () {
    return {
      activeIndex: '1',
      formParms: {
        sbqx: '2015-07-08'
      }
    }
  },
  // 使用对象展开运算符将 getter 混入 computed 对象中
  computed: {
    ...mapGetters([
      'getTableData',
      'getMenuTab',
      'getLoadStatus',
      'getPageInit'
    ])
  },
  watch: {
  },
  mounted () {
    this.getVatSbjtList({ ...this.getPageInit })
  },
  methods: {
    handleTab (idx) {
      let parms = {}
      this.activeIndex = idx
      parms.state = this.activeIndex * 1
      this.getVatSbjtList({ ...this.getPageInit })
    },
    getVatSbjtList (parms = {}) {
      let config = {
        state: this.activeIndex * 1
      }
      config = {...parms, ...config}
      this.$store.commit('SET_MESSAGE_ABLEDATA_MUTATION', {...config})
    }
  }
}
</script>
<style lang="stylus" scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 0px 0px 0px 27px;
  overflow-x: hidden;
  background-color: #f2f2f2;
  margin-left: 180px;
}

.shenbao-date {
  width: 100%;
  text-align: left;
  padding: 10px 0px;
}
</style>
