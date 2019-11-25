<template>
  <div class="demo-page">
    {{name1}}
  </div>
</template>

<script>
import API from '../../util/api.js';

export default {
  'API': API,
  data() {
    return {
      name1: 'xxx',
      title: 'global',
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
