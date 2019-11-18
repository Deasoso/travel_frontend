<template>

  <div class="demo-page">
    
    <van-row type="flex" justify="center"> 
    
    <textarea name="content" cols="40" rows="7" id="content"></textarea>
    <Divider>评论区</Divider>
    <!-- <div style="background-color:blue;width:100px;height:100px"></div> -->
    <div>
    <Upload
        multiple
        action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    
     <Upload
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="2048"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/"
        style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
        </div>
    </Upload>
    
    <Modal title="View Image" v-model="visible">
        <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal> 
    </div>
    <div>
      <Divider>评论</Divider> 
    <Input v-model="value3" size="large" placeholder="small size" clearable style="width: 200px"/>
    <Divider>评分</Divider> 
    <Rate show-text v-model="valueText" />
     </div>
     <div>
    <Button type="primary" shape="circle" size='large'>提交</Button>
    </div>
      
    </van-row>
  </div>
   
</template>
<script>
export default {
  data () {
    return {
      value3:'',
      valueText:"评分",
       
  }
  },
   methods: {
    methodname () {
      
    }
  }
  }

</script>

<style>
.demo-page{
  margin-top:5ch 
  
}
body {
            /*background: rgb(185, 246, 246);*//*设置颜色背景*/
            
            background-image: url(photo.jpg);/*设置背景图片*/
            background-repeat:no-repeat;/*图片适应窗口大小，这里设置的是不进行平铺*/
            background-attachment: fixed;/*图片相对于浏览器固定,这里设置背景图片固定，不随内容滚动*/
            background-origin: border-box;/*从边框区域显示*/
            background-size:cover;/*指定图片大小，此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小*/
 
        }
</style>
