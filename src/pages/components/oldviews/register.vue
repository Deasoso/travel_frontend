<template>
  <div class="demo-page">
    <div class="image">
      <Card class="card" style="text-align:center">
        <div style="text-align:center">
          <p class="message0">注册 
          <br><br>
          <Input class="teleno" prefix="ios-contact" placeholder="手机号码" />
          <br><br>
          <Input class="yz" prefix="md-text" placeholder="验证码" />
          <button class="btn">获取验证码</button>
          <br><br>
          <Input class ="pass" v-model="value18" type="password" prefix="ios-key-outline" password placeholder="请输入密码" />
          <br><br>
          <Input class ="pass1" type="password" prefix="ios-key" password placeholder="请确认密码" />
          <br><br>
          <Input class="email" prefix="ios-mail-outline" placeholder="邮箱地址" />
          <br><br>
          <p class="message">已有账号？<a href="http://localhost:8080/#/login">登陆<span style="color=#3399ff;"></span></a></p>
          <p class="message1">注册即代表您已阅读并同意《<a href="http://localhost:8080/#/login">使用协议</a>》</p>
          <br><br>
          <button class="btn1">注册</button>
        </div>
      </Card>
    </div> 
  </div>      
</template>

<script>
export default {
  data () {
    return {
      title: '注册页面',
      value18: ''
    }
  }
}
</script> 

<style scoped>
.demo-page{
  text-align: center;
}
.image{
  padding-top: 130px;
  background:url('1.jpeg') no-repeat center;
  position: fixed;
  width:100%;
  height:100%;
  background-size: 100% 100%;
  object-fit:cover;
}
.card{
  height:590px;
  font-size: 18px;
  width: 70%;
  margin-left: 110px; 
}
.message0{
  font-size: 24px;
  color:#2b85e4;
}
.teleno{
    
}
.yz{
  display: block;
	float: left;
  width:60%;
}
.btn{
  width: 30%;
  height: 40px;
  display: block;
	float: right;
  margin-top: -5px; 
  border-radius: 5px;
  background-color:#2d8cf0;
  font-size: 14px;
  font-family:"Hiragino Sans GB";
  color:#ffffff; 
}
.pass{
  
}
.pass1{
  
}
.email{
  
}
.btn1{
  height: 40px;
  width: 490px;
  border-radius: 5px;
  background-color:#2d8cf0;
  font-size: 14px;
  font-family:"Hiragino Sans GB";
  color:#ffffff; 
}
.message{
	display: block;
	float: left;
	font-size: 13px;
}
.message1{
  display: block;
	float: right;
	font-size: 13px;
}
</style>
