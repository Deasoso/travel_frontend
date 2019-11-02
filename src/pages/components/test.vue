<div id="example-1">
  <!-- 为按钮绑定点击事件，执行counter += 1的任务。 -->
  <button v-on:click="counter += 1">增加 1</button>
//   <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>
<script>
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
</script>