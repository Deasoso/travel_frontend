<template>

  <div class="demo-page">
    <div class="image">
      <Card class="card">
        <div style="text-align:center">
          登录
          <br>
		  <br>
          <Input id="teleno" prefix="ios-contact" placeholder="手机号码或邮箱" />
          <br>
		  <br>
          <Input id ="pass" v-model="value18" type="password" prefix="ios-key" password placeholder="请输入密码" />
          <br>
		  <br>
		  <p class="bstyle">
			    <Checkbox v-model="single">记住密码</Checkbox> <a href="http://localhost:8080/#/register">忘记密码</a></p>
          <p class="cstyle">没有账号？<a href="http://localhost:8080/#/register">立即注册</a></p>
          <br>
		   <Button class="btn" type="primary" shape="circle" long>登录 </Button>
          <!-- <button type="primary">登录</button> -->
        </div>
      </Card>
    </div> 
  </div>      
</template>

<script>
export default {
  data () {
    return {
      title: '登录页面',
      value18: ''
    }
  }
}
</script> 

<style scoped>
.demo-page{
  text-align: right;
}

.teleno{
    width:auto;
}



.image{
  padding-top: 250px;
  background:url('timg1.jpg') no-repeat center center;
  position: fixed;
  width:100%;
  height:100%;
  background-size: 100% 100%;
  object-fit:cover;
}
.card{
  height:400px;
  text-align:center;
  /* float:left;
  padding:80px 0px; */
  font-size: 18px;
}
.btn{
  width: 720px;
  height: 50px;
  margin-top: 30px;
  border-radius: 5px;
  background-color:#2d8cf0;
  font-size: 14px;
  font-family:"Hiragino Sans GB";
  color:#ffffff; 
}
.bstyle{
	display: block;
	float: left;
	margin-left: 46px;
	font-size: 15px;
}
.cstyle{
	display: block;
	float: right;
	margin-right: 46px;
	font-size: 15px;

}
.message{
	display: block;
	float: right;
	margin-right: 46px;
	font-size: 12px;
}
.message1{
  display: block;
	float: right;
	margin-right: 46px;
	font-size: 12px;
}
</style>