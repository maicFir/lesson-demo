<template>
  <div class="diag-box" v-if="isShow">
    <p>{{title}}</p>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name:'tip',
    props:{
      title: {
        type: String,
        default: ''
      },
      duration: {
        type: Number,
        default: 1000
      },
      message: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true;
        setTimeout(this.hide, this.duration)
      },
      hide() {
        this.isShow = false;
        this.remove();
      }
    },
  }
</script>

<style scoped>
  .diag-box {
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border: 1px solid #111;
  }
</style>