<template>
  <body class="backGroundPicture">
    <div class="container">
        <Button type="text"  class="back">
              <Icon type="ios-arrow-back"></Icon>
              取消
          </Button>
        <div type="text" class="shareFront">
          分享到
          <Icon type="share"></Icon>
        </div>
        <div class="buttonContainer">
          <Button-group  shape="circle">
              <Button class="buttonGroup" type="info" icon="person">QQ</Button>
              <Button class="buttonGroup" type="success">空间</Button>
              <Button class="buttonGroup" type="info">微信</Button>
              <Button class="buttonGroup" type="success">朋友圈</Button>
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
  font-size: 40px;
  height: 80px;
  width: 30%;
}
.shareFront{
  position: relative;
  color:blue;
  font-size: 60px;
  top: 200px;
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