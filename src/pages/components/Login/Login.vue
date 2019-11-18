<template>
  <div class="demo-page">
    <za-button theme="primary" @click="addvalue" class="buttoncss">primary</za-button>
    {{title}}
    value: {{value}}
    <za-cell title="用户名">
      <za-input v-model="inputed" type="text" @change="handleChange"></za-input>
    </za-cell>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'Login',
      value: 1,
      inputed: '123',
    }
  },
  methods:{
    addvalue(){
      this.value += 1;
    },
    handleChange(e){
      console.log(e);
    }
  }
}
</script>

<style scoped>
.demo-page{
  margin-left: 20px;
  margin-top: 100px;
}
.buttoncss{
  margin-left: 200px;
}
</style>
