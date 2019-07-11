<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'form-index',
    props: ['model', 'rules'],
    provide: function() {
      return {
        form: this
      }
    },
    methods: {
      valiate(cb) {
        const children = this.$children; // 获取所有子组件实例
        const task = children.filter(item => item.prop).map(item => item.validate());// 过滤带有prop属性的实例，并执行实例的validate方法
        const {username, password} = this.model;
        const rules = [
          {username: this.rules['username'][0].message},
          {password: this.rules['password'][0].message}
        ]
        console.log('rules', rules)
        const message = [];
        if (!username) {
          message.push(rules[0]['username'])
        } else if (!password) {
          message.push(rules[1]['password']);
        }
        Promise.all(task).then(() => cb(true, message)).catch(() => cb(false, message))
      }
    },
  }
</script>

<style scoped>

</style>