<template>
  <div class="hello">
    <h1>{{ msg }} --- {{test}} --- <slot></slot></h1>
    <hr/>
    ------
    <slot :foo="foo"></slot>
    <span @click="toParent">我是hello1</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      info: '子组件',
      foo: '1111'
    }
  },
  inject: ['test'],
  props: {
    msg: String
  },
  updated() {
   
  },
  methods: {
    toParent() {
       // this.$emit('c', {a:1});
       this.$parent.$on('hello2', function(parms) {
           console.log(parms)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
