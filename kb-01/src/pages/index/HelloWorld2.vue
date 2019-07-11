<template>
  <div class="hello">
      <span @click="hello2">我是hello2</span>
  </div>
</template>

<script>
  export default {
    name:'hello2',
    methods: {
      hello2() {
        this.$parent.$emit('hello2', {a:2222})
      }
    }
  }
</script>

<style scoped>

</style>