<template>
  <body class="kuang">
    <div class="container">
      <div class="returnBar">
        <Button type="text"  class="returnB">
            <Icon type="ios-arrow-back"></Icon>
            返回
          </Button>
      </div>
        <div id ="name">
          <Icon type="ios-person"></Icon>
          尊敬的用户
          </div>
        <div class="buttonContainer" style="text-align:center">
          <Button-group  shape="circle" vertical>
                <Button class="buttonGroup" >全部订单<Icon class="BIcon" type="ios-arrow-forward" /></Button>
                <Button class="buttonGroup" >待付款订单<Icon class="BIcon" type="ios-arrow-forward" /></Button>
                <Button class="buttonGroup" >未出行订单<Icon class="BIcon" type="ios-arrow-forward" /></Button>
                <Button class="buttonGroup" >账号关联<Icon class="BIcon" type="ios-arrow-forward" /></Button>
            </Button-group> 

              <Button type="text" class="tellUs" ghost >
                <Icon type="ios-call-outline" />
                联系客服
                </Button>
        </div> 
      </div>

    </body>
</template>

<script>
module.exports = {
  data() {
    return {
      name: 'PersonName',
      value: [20, 50],
    }
  }
}
</script>

<style scoped>
#name{
  position: relative;
  top: 50px;
  /* text-align: center; */
  color: aliceblue;
  font-size: 80px;
}
.kuang{
  background:url('bcgP.jpg');
  background-size:100% 100%;
}
.returnB{
  position: relative;
  top: 10px;
  font-size: 50px;
  height: 80px;
  width: 30%;
  color: rgb(244, 244, 247);
}
.returnBar{
   background-color:rgba(73, 71, 70, 0.5);
   height: 90px;
}
.buttonContainer{
  position: relative;
  top: 80px;
}

.buttonGroup{
  position: relative;
  top: 70px;
  font-size: 40px;
  height: 90px;
  width: 700px;
}
.buttonGroup2{
  position: relative;
  top: 70px;
  font-size: 40px;
  height: 90px;
  /* width: 100% */
}
.tellUs{
  position: relative;
  top: 110px;
  right: 20px;
  font-size: 30px;
  height: 50%;
  width: 30%;
}
</style>