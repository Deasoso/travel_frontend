<template>
  <div class="demo-page">
    <div v-for="(item, index) in data" :key="index" class="buttoncss">
    <Button type="primary">{{item.name}}</Button>
    </div>
    <div v-if="bool" @click="methodname">
      bool is true
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '示例页面',
      data: [{
        name: 'name2',
        value: 10
      },{
        name: 'name4',
        value: 1
      },{
        name: 'name7',
        value: 12
      },{
        name: 'name51',
        value: 15
      },],     
      bool: true 
    }
  },
  methods: { 
    methodname () {
      this.bool = false;
    }
  }
}
</script>

<style>
.demo-page{
  text-align: center;
}
.buttoncss{
  margin-top: 20px
}
</style>
