<template>
  <div class="demo-page">
    {{title}}
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
.demo-page{
  margin-left: 20px;
}
</style>
