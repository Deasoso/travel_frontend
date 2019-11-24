<template>
  <div class="demo-page">
    {{title}}
    {{name}}
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
      name:"老丁",
    }
  },
  methods(){
     
  }
}
</script>

<style scoped>
.demo-page{
  margin-left: 20px;
}
</style>
