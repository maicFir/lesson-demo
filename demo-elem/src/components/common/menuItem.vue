<template>
  <div class="menu-tab">
    <el-menu
        :default-active="activeIndex"
         mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item, idx) in tabItem"
        :key="idx" :index="item.idx">{{item.name}}</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menu-item',
  props: ['tabItem', 'activeIndex'],
  methods: {
    handleSelect (activeIndex) {
      this.$emit('handleSelect', activeIndex)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .menu-tab{
    width:100%;
    position: fixed;
    top: 0px;
    left: 200px;
    z-index: 100;
  }
</style>
