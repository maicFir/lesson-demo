<template>
  <div id="app">
    <!--左侧菜单栏-->
    <LeftBar />
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import LeftBar from '@/components/common/leftBar'
export default {
  name: 'App',
  components: {LeftBar},
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
html,body{
  margin:0px;
  height:100%;
  width:100%;
}
html {
  oveflow-x: hidden !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
  padding:0px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
}
</style>
