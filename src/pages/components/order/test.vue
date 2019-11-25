<template>
  <div class="demo-page">
    
   <div class="header">
     <div class="maincenter">
       <div class="nav">
       <div class="left"><img src="F:\travel_frontend\travel_frontend\src\pages\components\order\IMG_20191121_194025.jpg" alt="">一个图片</div>
       <div class="right">
          <div  class="left"><a href="https://www.baidu.com/" class=" text-w">咨询</a></div>
          <div  class="left"><a href="https://www.baidu.com/" class=" text-w">分享</a></div>
       </div>
       <div class="center text-w" >订单详情</div>
       
     </div>
     <div class="one">
       <div class="img left" id="img">图片</div>
       <div class="left left1">
         <div class="left big text-w">已成交</div>
         <div class="left small text-w">感谢您的入住，欢迎点评该酒店</div>
       </div>
       <div class="right">
          <div class="left"><a href="https://www.baidu.com/" class=" text-w">详细</a></div>
          <div class="left"><img src="" alt="">图片</div>
       </div>
     </div>
     </div>
     
   </div>
   <div class="main1">
     <div class="one">
       <div class="left text-b">在线预付</div>
       <div class="left text-o">1000元</div>
       <div class="right"><a href="#" class="text-blue">费用明细</a></div>
     </div>
     <div class="two">
       <za-button block ghost @click="handleClick" class="left bu1 text-g">修改订单</za-button>
        <za-button block ghost @click="handleClick" class="right bu text-blue">再次预定</za-button>
       <za-button block ghost @click="handleClick" class="center bu1 text-g">取消订单</za-button>
     </div>
   </div>
   <div class="main2-background">
     <div class="gray"></div>
     <div class="main2"></div>

   </div>
   
  </div>
  
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
    }
  }
}
</script>

<style scoped>
/*.demo-page{
   
}*/
.left{
  float: left;
}
.center{
 margin: auto;
}
.right{
  float: right;
}
.text-g{
  color: rgb(100, 110, 117);
}
.text-w{
  color: aliceblue;
}
.text-o{
  color: darkorange;
}
.text-b{
  color: black;
}
.text-blue{
  color:cornflowerblue; 
}
img{
  width:100px;
  height: 24px;
}
.header{
   background-color: cornflowerblue;
}
.maincenter{
  width: 95%;
  margin: auto;
}
.header .nav{
  width: 100%;
  height: 25px;
}
.header .nav .center{
  width: 120px;
  height: 24px;
  font-weight: bold;
  font-size: 16px;
  }
.header .nav .right{
  width:70px;
  height: 24px;
}
.header .nav .right a{
  width: 27px;
  height: 24px;
  margin-right: 5px;
}
.header .one{
  width: 100%;
  height: 100px;
}
.header .one #img{
  margin-top: 5px;
  width:100px;
  height: 95px;
}
.header .one .left1{
  margin-top: 5px;
  width: 550px;
  height: 95px;
}
.header .one .left .big{
  font-size: 36px;
  width: 100%;
}
.header .one .left .small{
  padding-top: 10px;
  font-size: 0.7px;
  width: 100%;
}
.header .one .right{
  width:60px;
  padding-top: 68px;
}
.main1 .one{
  width: 100%;
  height: 50px;
  border-width: 0 0 1px 0;
  border-style:  solid;
  border-color: darkgray;
}
.main1 .one .left{
  font-size: 20px;
  width: 200px;
  text-emphasis: center;
  padding-top: 12px;
}
.main1 .one .right{
  font-size: 18px;
  width: 200px;
  text-emphasis: center;
  padding-top: 12px;
}
.main1{
  width: 95%;
  margin: auto;
}
.main1 .two{
  width: 100%;
  height: 60px;
  margin-top: 5px;
}
.main1 .two .bu1{
  width: 29%;
  background-color: rgb(228, 222, 223);
  font-size: 25px;
}
.main1 .two .bu{
  width: 29%;
  border: 1px solid cornflowerblue; 
  font-size: 25px;
}
.main2-background{
  background-color: rgb(228, 222, 223);
  width: 100%;
  height: 620px;
}
.main2-background .gray{
  width: 100%;
  height: 30px;
  background-color: rgb(228, 222, 223);
}
.main2{
  background-color: white;
  width: 95%;
  margin: auto;
  height: 580px;
  border-radius: 10px;
}
</style>
