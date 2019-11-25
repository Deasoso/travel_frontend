<template>
  <div class="demo-page">
    <div class="header blue">
        <div class="main auto">
            <div class="top">
                <za-nav-bar class="blue">
                    <div slot="left">
                        <za-icon theme="primary" type="arrow-left" @click="clickHandle" class="icon white"></za-icon>
                    </div>
                    <div slot="title" class="white">订单详情</div>
                    <div slot="right">
                    <Icon type="ios-git-merge"  class="icons white"/>
                    <Icon type="md-headset"  class="icons white"/>
                    </div>
                </za-nav-bar>
            </div>
            <div class="mid">
                <za-icon theme="primary" type="right-round" class="icon left"></za-icon>
                <div class="left icon">已成交</div>
                <a href="#" class="right"><div class="right white">详细</div></a>
            </div>
        </div>
    </div>
    <div class="nav auto">
        <div class="top">
            <div class="left">在线支付</div>
            <div class="left yell">$10000xxx</div>
            <div class="right bluetext"> <a href="#">费用明细</a></div>
        </div>
        <div class="bottom">
            <div class="button left"><za-button block ghost @click="handleClick" class="left bluetext gray">修改订单</za-button></div>
            <div class="button right"><za-button block ghost @click="handleClick" class="right bluetext ">再次预定</za-button></div>
            <div class="button center"><za-button block ghost @click="handleClick" class="center bluetext gray">取消订单</za-button></div>
            
        </div>
    </div>
    <div class="gray main1">
        <div class="main auto whiteg">
            <div class="top">
                <div class="left"><img src="http://img3.imgtn.bdimg.com/it/u=305913667,298792892&fm=26&gp=0.jpg" alt="">
                </div>
                <div class="left text ">xxxx景点（xxxxx scenic spot）</div>
                <div class="right bluetext"> <a href="#">景点详情</a></div>
            </div>
            <div class="mid">
                <div class="left bluetext"><a href="#">联系旅行社</a></div>
                <div class="left bluetext"><a href="#">地图导航</a></div>
                <div class="left bluetext"><a href="#">送机</a></div>
            </div>
            <div class="bottom">
                <div class="left black">
                    景点简介xxxxxxxxxxx
                </div>
                <div class="left black">
                    游玩项目xxxxxx
                </div>
                <div class="left black">
                    景点简介xxxxxxxxxxx
                </div>
                <div class="left black">
                    游玩项目xxxxxx
                </div>
            </div>
            <div class="footer">
                <div class="left">探索附近</div>
                <div class="left border"><a href="#">美食</a></div>
                <div class="left border"><a href="#">购物</a></div>
                <div class="left border"><a href="#">玩乐</a></div>
                <div class="left"><a href="#">攻略</a></div>
        </div>
        </div>
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

.auto{
    width: 95%;
    margin: auto;
}
.left{
    float: left;
}
.right{
    float: right;
}
.center{
    margin: auto;
}
.whiteg{
    background-color: white;
}
.white{
    color: white;
}
.blue{
    background-color: rgb(136, 136, 255);
}
.gray{
    background-color: rgb(212, 208, 208);
}
.bluetext{
    color: rgb(88, 88, 255);
}
.yell{
    color: rgb(255, 150, 75);
}
.black{
    color: black;
}
.header .top{
    height: 50px;
}
a{
    display: inline-block;
}
.header .top  a .icon{
    font-size: 30px;
    width: 18%;
}
.header .top .icons{
    margin-left: 10px;
    font-size: 20px;
}
.header .top .txt{
    padding-top: 10px;
    font-size: 25px;
    margin-left: 3px;
    text-align: center;
}
.header .mid{
    height: 50px;
}
.header .mid .icon{
    font-size: 25px;
    color: white;
    margin-right: 20px;
    margin-left: 20px;
}
.header .mid a .right{
    padding-top: 20px;
}
.nav .top{
    height: 40px;
    margin-top: 10px;
}
.nav .top div{
    width: 20%;
    height: 30px;
    margin-left: 10px;
}
.nav .top .left{
    font-size: 20px;
}
.nav .top .right{
    font-size: 15px;
    text-align: right;
}
.nav .bottom .button{
    width:32%;
    margin-bottom: 10px;
}
.demo-page .gray{
    padding-top: 10px;
}
.demo-page .gray .left{
    width:31%; 
}
.demo-page .gray .main{
    padding-top: 10px;
    border-radius: 10px 10px 0 0;
}
.demo-page .gray .top{
    height: 160px;
}
.demo-page .gray .top img{
    width: 90%;
    margin-left: 20px;
    border-radius: 10px;
}
.demo-page .gray .top .bluetext{
    text-align: center;
    padding-top: 10px;
    width: 20%;
    height: 160px;
    font-size: 28px;
    margin-left: 20px；
}
.demo-page .gray .top .text{
    width: 40%;
    height: 160px;
    font-size: 28px;
    margin-left: 20px;
}
.demo-page .gray .mid{
    height: 50px;
}
.demo-page .gray .mid .left{
    font-size: 20px;
    width: 15%;
    text-align: center;
    border-right: solid rgb(197, 197, 197) 2px;
}
.demo-page .gray .bottom{
    width: 100%;
    height: 180px;
    border-top: solid rgb(230, 230, 230) 1px; 
    border-bottom: solid rgb(230, 230, 230) 1px;
}
.demo-page .gray .bottom .left{
    width: 100%;
    height: 40px;
    font-size: 20px;
    margin-left: 20px;
}
.demo-page .gray .footer{
    margin-top: 2px;
    height: 30px;
}
.demo-page .gray .footer .left{
    width: 20%;
    height: 29px;
    text-align: center
}
.demo-page .gray .footer .border{
    border-right: solid rgb(230, 230, 230) 1px;
}
</style>
