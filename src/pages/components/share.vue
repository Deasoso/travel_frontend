<template>
  <body class="backGroundPicture">
    <div class="container">
        <Button type="text"  class="back">
              <Icon type="ios-arrow-back"></Icon>
              取消
          </Button>
        <div id ="name" color>
          <Icon type="arrow-right-c"></Icon>
          分享到
        </div>
        <div class="buttonContainer">
          <Button-group  shape="circle">
              <Button class="buttonGroup" type="info">QQ</Button>
              <Button class="buttonGroup" type="info">空间</Button>
              <Button class="buttonGroup" type="info">微信</Button>
              <Button class="buttonGroup" type="info">朋友圈</Button>
          </Button-group>
        </div> 
      </div>
    </body>
</template>

<script>
module.exports = {
}
</script>
<style scoped>
#name{
  position: relative;
  top: 50px;
  color: aliceblue;
  font-size: 40px;
}
.backGroundPicture{
  background:url('../../assets/share.jpeg');
  background-size:100% 100%;
}
.back{
  position: relative;
  top: 20px;
  font-size: 50px;
  height: 80px;
  width: 30%;
}
.buttonContainer{
  position: relative;
  top: 80px;
}

.buttonGroup{
  position: relative;
  top: 400px;
  font-size: 40px;
  height: 175px;
  width: 175px;
}
</style>