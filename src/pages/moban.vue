<template>
  <div class="demo-page">
    {{title}}
  </div>
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

<style>
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
