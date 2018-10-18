<template>
  <div class="specil-container">
    <MenuItem :activeIndex="activeIndex" :tabItem="tabItem" @handleSelect="handleSelect" />
    <SearchForm @getCardData="getCardData"/>
    <CardItem @showModel="showModel" :cardData="cardData">
      <Loading slot="Loading" :loadStatus="loadStatus" />
    </CardItem>
    <Pagation :page="pageInit" @getCardData="getCardData"/>
    <Specil-Model :isVisible="isVisibleModel"
       :infoArr="infoArr"
       :completetable="completetableData"
       :type="type"
       :descInfo="desc"
       @showModel="showModel"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MenuItem from '@/components/common/menuItem.vue'
import Loading from '@/components/common/Loading.vue'
import Pagation from '@/components/common/Pagation.vue'
import SearchForm from './searchFormItem.vue'
import CardItem from './cardItem.vue'
import SpecilModel from './specilModel.vue'
export default {
  components: {MenuItem, Loading, SearchForm, CardItem, SpecilModel, Pagation},
  data () {
    return {
      isVisibleModel: false,
      isVuexTest: true, // vuex方式异步请求
      activeIndex: '1'
    }
  },
  computed: {
    ...mapState({
      cardData: state => {
        return state.specilBiness.cardData
      },
      tabItem: state => state.specilBiness.tabItem,
      loadStatus: state => state.specilBiness.loadStatus,
      pageInit: state => state.specilBiness.pageInit,
      infoArr: state => state.specilBiness.infoArr,
      completetableData: state => state.specilBiness.completetableData,
      type: state => state.specilBiness.type,
      desc: state => state.specilBiness.desc
    })
  },
  mounted: function () {
    let {pageSize, pageIndex} = {...this.pageInit} // 取computed的pageInit
    let parms = {pageSize, pageIndex}
    if (this.isVuexTest) {
      this.getCardData({...parms})
    }
  },
  methods: {
    handleSelect (activeIndex) {
      this.activeIndex = activeIndex
      let {pageSize, pageIndex} = {...this.pageInit} // 取computed的pageInit
      let parms = {pageSize, pageIndex}
      if (this.isVuexTest) {
        this.getCardData({...parms})
      }
    },
    showModel (bool) {
      this.isVisibleModel = bool
    },
    // 请求卡片数据
    getCardData (parms = {}) {
      let config = {
        status: this.activeIndex
      }
      // 合并对象参数
      config = {...parms, ...config}
      // 异步请求， parms是dispatch请求的ajax参数
      this.$store.dispatch('FEATCH_LIST', config)
    }
  }
}
</script>
<style lang="stylus">
@import './index.styl';
</style>
