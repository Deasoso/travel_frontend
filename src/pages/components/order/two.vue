<template>
  <div class="demo-page">
      <div class="header">
          <div class="auto">
              <div class="left icon"><a href="#"><Icon type="md-arrow-back"/></a></div>
              <div class="left icon">我的订单</div>
              <div class="right icon"><a href="#"><Icon type="md-more"/></a></div>
              <div class="right icon"><a href="#"><Icon type="ios-git-merge"/></a></div>
          </div>

      </div>
      <div class="gray graymain">
          <div class="nav auto">
              <za-button ghost size="1.5sm"  class="left gray">全部</za-button>
              <za-button ghost size="1.5sm" class="left gray">待付款</za-button>
              <za-button ghost size="1.5sm" class="left gray">待出行</za-button>
              <za-button ghost size="1.5sm" class="left gray">全部</za-button>
              <za-button ghost size="1.5sm" class="left gray">待付款</za-button>
              <za-button ghost size="1.5sm" class="left gray">待出行</za-button>
          </div>
          <div class="main auto">
              <div class="one ">
                  <div class="left">
                    <a href="#"> 
                        <za-icon theme="primary" type="right-round" class="icon left" ></za-icon>
                        <div class="left">xxxxxxx旅行社</div> 
                        <za-icon theme="primary" type="arrow-right" class="icon left"></za-icon>
                    </a>
                  </div>
                  <div class="right">交易成功</div>
              </div>
              <div class="two">
                  <div class="left img"><img src="http://img3.imgtn.bdimg.com/it/u=305913667,298792892&fm=26&gp=0.jpg" alt=""></div>
                  <div class="left text"> 
                     <h2>云南美景xxxxxxxxx</h2> 
                     <h5> 云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好</h5>
                  </div>
                  <div class="right"><Icon type="logo-usd" />100.00</div>
              </div>
              <div class="three">
                  <za-button ghost size="1.5sm"  class="right">删除订单</za-button>
              </div>
          </div>

          <div class="main auto">
              <div class="one ">
                  <div class="left">
                    <a href="#"> 
                        <za-icon theme="primary" type="right-round" class="icon left" ></za-icon>
                        <div class="left">xxxxxxx旅行社</div> 
                        <za-icon theme="primary" type="arrow-right" class="icon left"></za-icon>
                    </a>
                  </div>
                  <div class="right">交易成功</div>
              </div>
              <div class="two">
                  <div class="left img"><img src="http://img3.imgtn.bdimg.com/it/u=305913667,298792892&fm=26&gp=0.jpg" alt=""></div>
                  <div class="left text"> 
                     <h2>云南美景xxxxxxxxx</h2> 
                     <h5> 云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好</h5>
                  </div>
                  <div class="right"><Icon type="logo-usd" />100.00</div>
              </div>
              <div class="three">
                  <za-button ghost size="1.5sm"  class="right">删除订单</za-button>
              </div>
          </div>
           <div class="main auto">
              <div class="one ">
                  <div class="left">
                    <a href="#"> 
                        <za-icon theme="primary" type="right-round" class="icon left" ></za-icon>
                        <div class="left">xxxxxxx旅行社</div> 
                        <za-icon theme="primary" type="arrow-right" class="icon left"></za-icon>
                    </a>
                  </div>
                  <div class="right">交易成功</div>
              </div>
              <div class="two">
                  <div class="left img"><img src="http://img3.imgtn.bdimg.com/it/u=305913667,298792892&fm=26&gp=0.jpg" alt=""></div>
                  <div class="left text"> 
                     <h2>云南美景xxxxxxxxx</h2> 
                     <h5> 云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好云南旅游好好</h5>
                  </div>
                  <div class="right"><Icon type="logo-usd" />100.00</div>
              </div>
              <div class="three">
                  <za-button ghost size="1.5sm"  class="right">删除订单</za-button>
              </div>
          </div>
     </div>

     <div class="footer auto">
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
.gray{
    background-color: rgb(240, 240, 240);
}
.left{
    float: left;
}
.right{
    float: right;
}
.auto{
    width: 95%;
    margin: auto;
}
.header .auto{
    height: 70px;
}
.header .auto .left{
    font-size:35px;
    padding-top: 10px;
    margin-right: 100px;
}
.header .auto .right{
    font-size:35px;
    padding-top: 10px;
    margin-right: 20px;
}
.nav{
    height: 50px;
}
.nav .left{
    margin-top: 4px;
    width: 16%;
    padding: 0 20px 0 20px;
    border: none;
}
.main{
    background-color: rgb(243, 234, 196);
    border-radius: 10px;
    height: 300px;
    margin-bottom: 30px;
}
.main .one {
    height: 55px;
}
.main .one .left{
    padding-top:10px;
    font-size: 20px;
    margin-right: 30px;
    margin-left: 10px;
}
.main .one .right{
    padding-top:20px;
    font-size: 20px;
    margin-right:10px;
}
.main .two{
    margin-top: 10px;
    height: 160px;
}
.main .two img{
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin-left: 20px;
}
.main .two .text{
    width: 25%;
    height: 150px;
    margin-left: 25px;
}
.main .two .right{
    width: 12%;
    height: 150px;
    font-size: 20px;
}
.mian .three{
    height:100px;
    margin-top: 5px;
}
.mian .three za-button{
    padding-right: 10px;
}
</style>




