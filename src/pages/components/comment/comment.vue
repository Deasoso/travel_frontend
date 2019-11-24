<template>
  <div class="demo-page">
      <!-- <div class="login-container"
       v-bind:style="{backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
</div> -->
    <Divider class="page">用户点评</Divider>
<za-cell title="评论内容">
  <za-input auto-height v-model="v3" type="textarea" placeholder="亲，请输入你的评价" rows="8"></za-input>
</za-cell>
<div class="uploader-wrapper" style="display:flex;padding:15px;">
  <za-badge sup v-for="(i, index) in files" class="uploader-item" shape="circle" :key="index" @click="remove(index)" style="display:inline-block;margin-right:15px;align-items: center;justify-content: center;width:74px;height:74px;border:2px solid #ddd;">
    <za-icon type="wrong" slot="text" style="font-size:10px;"></za-icon>
    <div class="uploader-item-img">
      <a :href="i.thumbnail" target="_blank"><img :src="i.thumbnail" alt></a>
    </div>
  </za-badge>
  <div class="uploader-wrapper">
    <za-file-picker class="uploader-btn" style="display:flex;align-items: center;justify-content: center;width:74px;height:74px;border:2px dashed #ddd;" accept="image/jpg, image/jpeg, image/gif, image/png" @change="handleChange">
      <za-icon type="add" style="fontSize:30px;">
    </za-icon></za-file-picker>
  </div>
</div>
    <za-panel>
  
  <za-panel-body>
    <za-cell class="comm">评分
    <za-icon theme="primary"  type="arrow-right" ></za-icon>
    <Rate show-text v-model="valueText" />

    </za-cell>
  </za-panel-body>
     <!-- <za-cell>
  <za-checkbox @change="handleChange">好评</za-checkbox>
  <za-checkbox @change="handleChange">风景美</za-checkbox>
  <za-checkbox @change="handleChange">导游讲解好</za-checkbox>
  <za-checkbox @change="handleChange">服务好</za-checkbox>
  <za-checkbox @change="handleChange">性价比高</za-checkbox>
  <za-checkbox @change="handleChange">行程棒</za-checkbox>
  <za-checkbox @change="handleChange">差评</za-checkbox>
</za-cell> -->

<!-- <za-cell>
  <za-button size="xs" slot="description" @click="visible5 = true">开启</za-button>
  评价
</za-cell>
<za-popup :visible.sync="visible5" animation-type="zoom" direction="center">
  <div class="popup-box" style="width:600px;height: 300px;padding: 20px;background: #fff;display: flex;justify-content: center;align-items: center;">
    <za-button size="sm" @click="visible5 = false">关闭弹层</za-button>
 <za-cell>
  <za-checkbox @change="handleChange">好评</za-checkbox>
  <za-checkbox @change="handleChange">风景美</za-checkbox>
  <za-checkbox @change="handleChange">导游讲解好</za-checkbox>
  <za-checkbox @change="handleChange">服务好</za-checkbox>
  <za-checkbox @change="handleChange">性价比高</za-checkbox>
  <za-checkbox @change="handleChange">行程棒</za-checkbox>
  <za-checkbox @change="handleChange">差评</za-checkbox>
</za-cell>
<div>
<za-button theme="primary" block>确认</za-button>
</div>
  </div> -->
<!-- </za-popup> -->
<za-cell>
  <za-button slot="description" size="xs" @click="visible5 = true">评价</za-button>
  请选择你的评价内容
</za-cell>
<za-modal :visible.sync="visible5" @close="handleClose" title="请选择" :showClose="true">
  <za-cell>
  <za-checkbox @change="handleChange">好评</za-checkbox>
  <za-checkbox @change="handleChange">风景美</za-checkbox>
  <za-checkbox @change="handleChange">导游讲解好</za-checkbox>
  <za-checkbox @change="handleChange">服务好</za-checkbox>
  <za-checkbox @change="handleChange">性价比高</za-checkbox>
  <za-checkbox @change="handleChange">行程棒</za-checkbox>
  <za-checkbox @change="handleChange">差评</za-checkbox>
</za-cell>
<div>
  <za-cell>
  <za-button slot="description" size="xs" @click="visible7 = true" theme="warning">提交</za-button>

</za-cell>
<za-confirm :visible="visible7" title="确认信息" message="你确定要这样做吗？" :ok="handleOk" :cancel="handleCancel"></za-confirm>
</div>
</za-modal>
<div class="progress" style="padding:20px 0;">
     <za-panel>
        <za-panel-body>好评率
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
    <za-panel>
        <za-panel-body>风景美
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
<za-panel>
        <za-panel-body>导游讲解好
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
<za-panel>
        <za-panel-body>服务好
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
<za-panel>
        <za-panel-body>性价比高
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
<za-panel>
        <za-panel-body>行程棒
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
<za-panel>
        <za-panel-body>差评
 <za-progress type="line" :percent="10" :theme="primary" :shape="rect" :weight="normal">10%
 </za-progress>
 </za-panel-body>
</za-panel>
</div>
</za-panel>
 <za-button theme="primary" block @click="visible1 = true">提交</za-button>    
  <za-toast :visible.sync="visible1" @close="toastClose">提交成功</za-toast>
  </div>
</template>

<script >
module.exports = {
  data() {
    return {
      title: '用户点评',
      value: [20, 50],
       files: [],
       fileList: [],
      visible: false,
      visible1: false,
       visible2: false,
       visible5: false,
           visible7: false,
    //   bg: require('@/assets/share.jpeg')
    //   i: 0
    }
  },
  handleChange(data){
      console.log(data);
      this.files.push(data)
    },
     methods: {
    showAlert() {
      this.$zaAlert('二次弹窗');
    },
    getContainer: () => div1,
    handleClose(reason, event){
      console.log(reason, event);
    },
     handleOk(){
      alert('ok')
    },
     handleCancel(){
      this.visible7 = false
    }
  },

    
}
</script>

<style scoped>
.demo-page{
  /* margin-left: 2px; */
  padding-left: 20px;
  padding-right: 20px;
}
.page{
     margin-left: 2px;
}
.comm{
     margin-right: 2px;
}
body {
            background: rgb(57, 169, 177);
            
            /* background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574504092260&di=25cb5608641f91d17ebe80112144e0f5&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F140704%2F330719-140F40S55222.jpg);设置背景图片 */
            /* background-repeat:no-repeat;图片适应窗口大小，这里设置的是不进行平铺 */
            /* background-attachment: scroll;图片相对于浏览器固定,这里设置背景图片固定，不随内容滚动 */
             /* background-origin: border-box;从边框区域显示 */
            /* background-size:cover;指定图片大小，此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小 */
 
        }
</style>
