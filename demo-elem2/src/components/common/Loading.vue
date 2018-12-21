<template>
  <div class="loading-container" v-if="loadStatus">
    <div v-loading="loadStatus" element-loading-text="加载中..."></div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: ['loadStatus']
}
</script>
<style lang="stylus">
    .loading-container{
      position: absolute;
      width:100%;
      height: 100%;
      min-height: 800px;
      .el-loading-mask {
        width: 100%;
        height: 100%;
        min-height:800px;
      }
    }
</style>
