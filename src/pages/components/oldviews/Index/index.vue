<template>
  <div class="demo-page">
    {{get}}
    <h3 class="title"><span>欢迎打开{{title}}</span></h3>
    <button class="btn" @click="routeDetail">跳转到TodoMVC</button>
    <button class="btn" @click="info">跳转到反馈页面</button>
     <button class="btn" @click="login">跳转到登录页面</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  data () {
    return {
      title: '示例页面',
      get: 0,
    }
  },
  methods: {
    routeDetail () {
      this.$router.push({
        path: '/TodoMVC',
        query: { userInfo: {name: 'John', id: 100}, flag: true, flag2: 'true' }
      })
    },
    info(){
      this.$router.push({
        path: '/feedback'
      })
    },
    login(){
    this.$router.push({
        path: '/login',
      })
    }
  },
  async created(){
    // this.get = await axios.post('http://127.0.0.1:8080/post' , {username: 80808080}); // baidu Promise
    // console.log(this.get)
    // eos 智能合约 
    // vue 前端
    // koa 后端
  }
}

</script>

<style>
  /* quick app ignore start */
  @import '../../css/web-reset.css';
  /* quick app ignore end */
  @import '../../css/reset.css';

  .demo-page {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 40px;
    text-align: center;
  }

  .btn {
    width: 550px;
    height: 86px;
    margin-top: 75px;
    border-radius: 43px;
    background-color: #09ba07;
    font-size: 30px;
    color: #ffffff;
  }
</style>
