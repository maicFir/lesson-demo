<template>
  <div class="input-item">
    <input :type="type" :value="value" @input="onInput" :placeholder="placeholder"/>
  </div>
</template>

<script>
  export default {
    name: 'mc-form-input',
    props: ['type', 'placeholder', 'value'],
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value);
        this.$parent.$emit('validate');
      }
    },
  }
</script>

<style scoped>
  .input-item {
    display: inline-block;
  }
</style>