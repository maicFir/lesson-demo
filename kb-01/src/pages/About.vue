<template>
  <div class="about">
    <Mc-Form :model="model" :rules="rules" ref="loginForm">
        <Mc-form-item label="用户名" prop="username">
            <Mc-form-input type="text" v-model="model.username" placeholder="请输入用户名"></Mc-form-input>
        </Mc-form-item>
        <Mc-form-item label="密码" prop="password">
            <Mc-form-input type="password" v-model="model.password" placeholder="请输入密码"></Mc-form-input>
        </Mc-form-item>
        <Mc-form-item>
            <button @click="submit('loginForm')">提交</button>
        </Mc-form-item>
        {{model}}
    </Mc-Form>
    关于页面
    <span @click="test">test</span>
  </div>
</template>

<script>
  import McForm from '../components/form/index';
  import McFormItem from '../components/form/mcformitem';
  import McFormInput from '../components/form/mcforminput';
  import Notice from '../components/Notice';
  import create from '../utils/create'
  export default {
    name:'about',
    components: {McForm, McFormItem, McFormInput},
    data() {
      return {
        model: {
          username: 'test',
          password: ''
        },
        rules: {
           username: [{required: true, message: '请输入用户名'}],
           password: [{required: true,message: '请输入密码'}]
        }
      }
    },
    mounted() {
     console.log(this.$mc);
    },
    methods:{
      // 提交
      submit(form) {
        console.log(form);
        this.$refs[form].valiate((valid,message) => {
          create(Notice, {
              title: '提示',
              message: valid ? '成功': message.toString(),
              duration: 2000
            }).show()
        });
       
      },
      test() {
        this.$mc.$mcEmit('c', 'test');
        this.$mc.$mcOn('c', function(parms) {
          console.log(parms)
        });
      }
    }
  }
</script>

<style scoped>

</style>