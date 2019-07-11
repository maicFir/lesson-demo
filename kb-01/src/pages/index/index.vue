<template>
  <div>
    <HelloWorld1 msg="你好" ref="hello">
        <span>test</span>
        <template v-slot:default="ctx">{{ctx.foo}}</template>
    </HelloWorld1>
    <HelloWorld2 />
    <a href="javascript:void(0)" @click="getChildrenInfo">获取子组件</a>
  </div>
</template>

<script>
  import HelloWorld1 from './HelloWorld1';
  import HelloWorld2 from './HelloWorld2';
  export default {
    name: 'index',
    provide:function() {
      return {
        test: 'this is a foo'
      }
    },
    components: { HelloWorld1, HelloWorld2},
    mounted() {
      this.$on('c', function(parms) {
        console.log(parms)
      });
    },
    methods:{
      getChildrenInfo() {
        console.log(this.$refs.hello.info)
      }
    }
  }
</script>

<style scoped>

</style>