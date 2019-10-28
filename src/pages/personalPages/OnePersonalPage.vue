<template>
<body class="kuang">
  <div class="container">
      <Button type="primary"  class="returnB">
            <Icon type="ios-arrow-back"></Icon>
            返回
        </Button>
        <br><br>
      <header id ="name">尊敬的用户</header>
      <div class="buttonContainer" style="text-align:center">
          <div>
            <Button class="buttonGroup" >全部订单<Icon class="BIcon" type="ios-arrow-forward" /></Button>
            </div>
          <div>
            <Button class="buttonGroup">待付款订单<Icon class="BIcon" type="ios-arrow-forward" /></Button>
            </div>
          <div>
            <Button class="buttonGroup">未出行订单<Icon class="BIcon" type="ios-arrow-forward" /></Button>
            </div>
          <div>
            <Button class="buttonGroup">账号关联<Icon class="BIcon" type="ios-arrow-forward" /></Button>
            </div>

            <br><br>
          <Button class="tellUs" ghost >
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
  top: 20px;
  text-align: center;
  color: aliceblue;
  font-size: 50px;
}
.kuang{
  background:url('bcgP.jpg');
  background-size:100%;
}
.container{
  margin: 0 auto;
}
.returnB{
  position: relative;
  top: 20px;
  left: 2px;
  font-size: 20px;
  height: 50px;
  width: 15%;
}
.buttonContainer{
  position: relative;
  top: 20px;
}
.buttonGroup{
  position: relative;
  top: 20px;
  font-size: 40px;
  height: 70px;
  width: 70%;
}
.BIcon{
  position: relative;
  /* right: 100%; */
}
.tellUs{
  position: relative;
  top: 20px;
  font-size: 20px;
  height: 30px;
  width: 20%;
}
</style>