<template>
  <body class="background">
    <za-nav-bar class="column">
      <div slot="left">
        <za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon>
      </div>
      <div slot="title" class="backtext">取消</div>
      <div slot="right"></div>
    </za-nav-bar>
    <!-- <Button type="text"  class="back">
      <Icon type="ios-arrow-back"></Icon>
      取消
    </Button> -->
    <div class="sharething">
      <div>
        <img style="width:70%;" src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=49ea6e613bfa828bd5239de3cd1e41cd/80cb39dbb6fd526625c2d670a318972bd50736ed.jpg">   
        <img style="width:70%;" src="https://i.loli.net/2019/11/26/73DXLRYW1Fdbn9U.png"> 
        <div class="sharethingtext">
          世界文化遗产 丽江古城（国家5A级景区）
        </div>  
      </div>
    </div>
    <div type="text" class="sharetext">
      分享到
    </div>
    <div class="sharechose" style="margin-top:10px">
      <div class="box">
        <img style="width:90%;" :src="pic[0]">
        <div type="text" class="icontext">
          QQ
        </div>
      </div>
      <div class="box">
        <img style="width:90%;" :src="pic[1]">
        <div type="text" class="icontext">
          QQ空间
        </div>
      </div>
      <div class="box">
        <img style="width:105%;" :src="pic[2]">
        <div type="text" class="icontext">
          微信
        </div>
      </div>
      <div class="box">
        <img style="width:90%;" :src="pic[3]">
        <div type="text" class="icontext">
          朋友圈
        </div>
      </div>
      <div class="box">
        <img style="width:90%;" :src="pic[4]">
        <div type="text" class="icontext">
          微博
        </div>
      </div>
      <div class="box">
        <img style="width:90%;" :src="pic[5]">
        <div type="text" class="icontext">
          链接
        </div>
      </div>
      <div class="box">
        <img style="width:90%;" :src="pic[6]">
        <div type="text" class="icontext">
          更多
        </div>
      </div>
    </div>
  </body>
</template>

<script>
module.exports = {
  data() {
    return {
      pic:['https://static.easyicon.net/preview/116/1164430.gif',
          'https://static.easyicon.net/preview/116/1164432.gif',
          'https://static.easyicon.net/preview/122/1226623.gif',
          'https://static.easyicon.net/preview/116/1164515.gif',
          'https://static.easyicon.net/preview/116/1164436.gif',
          'https://static.easyicon.net/preview/122/1223965.gif',
          'https://static.easyicon.net/preview/120/1201159.gif'],
    }
  }
}
</script>

<style scoped>
.sharething{
  text-align:center;
  margin-top:180px;
  /* border:3px solid rgb(134, 134, 134) 
  border-width 15px; */
}
.sharethingtext{
  font-weight: bold;
  line-height: 60px;
  font-size: 210%;
  text-indent: 1em;
  width: 100%;
  background: rgb(376,376,376);
  }
.sharetext{
  position: absolute;
  color:black;
  font-size: 30px;
  bottom: 360px;
  left: 50px;
}
.sharechose{
  position:absolute;
  /* left:100px; */
  bottom:200px;
  left: 10px;
}
.box{
  display: inline-block;
  width: 10%;
  margin-left: 3%;
  margin-top: 10px;
}
.icontext{
  text-align:center;
}
</style>




