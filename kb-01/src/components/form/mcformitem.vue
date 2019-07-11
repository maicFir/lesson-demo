<template>
  <div>
    <label v-if="label" class="label-name">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'mc-form-item',
  props: ['label', 'prop'],
  inject: ['form'],
  data () {
    return {
      errorMessage: ''
    }
  },
  mounted () {
    // console.log(this.form)
    this.$on('validate', this.validate);
  },
  methods: {
    validate () {
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];
      const desc = {
        [this.prop]: rules
      }
      const schema = new Schema(desc);
      return schema.validate({[this.prop]: value}, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = '';
        }
      })
    }
  },
}
</script>

<style scoped>
.label-name {
  display: inline-block;
  width: 100px;
}
</style>