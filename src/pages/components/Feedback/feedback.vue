 
<template>
  <div class="demo-page">
    <div>
    <za-carousel direction="left" :swipeable="false" loop auto-play>
    <za-carousel-item :key="index" v-for="(i, index) in ITEMS">
      <div class="carousel-item-pic">
        <a href="##"><img :src="i.url" :alt="i.img" :draggable="false"></a>
      </div>
    </za-carousel-item>
    </za-carousel>
  </div>
    <div class="checkbox">
      <div class="txt" >
        <p >我的反馈是关于：</p>
             <RadioGroup v-model="phone">
              <br>
              <Radio label="性能体验">
                  <span class="radiogroup">性能体验</span>
              </Radio>
              <br>
              <br>
              <Radio label="功能异常">
                  <span class="radiogroup">功能异常</span>
              </Radio>
              <br>
              <br>
              <Radio label="产品建议">
                  <span class="radiogroup">产品建议</span>
              </Radio>
              <br>
              <br>
              <Radio label="商品投诉">
                  <span class="radiogroup">商品投诉</span>
              </Radio>
            </RadioGroup>
      </div> 
      <div class="contact">  

            <a href='##'><img src="static/contact.png/" width="61" height="184" alt="登录方式..."/></a>
      </div>  

    </div>  
    <br>
     <div class="submit" >
      <p class="tel">联系方式：</p>
              <Input v-model="value6" type="textarea" :rows="1" placeholder="请填写联系方式以便于联系。" style="width: 100%" />
              <br>
              <p>请上传相关文件</p>     
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
      <div class ="button">
      <za-button size="m" width='900px' slot="description" @click="visible1 = true" ><a href='##'>提交</a></za-button>
      </div>
   
     </div> 
          
          
            
      </div>  

    
</template>

<script name="vue">
  
const ITEMS = [
  { 
    url: 'https://i.loli.net/2019/11/21/FhSdQMqNbAD7K4I.jpg',
    img: '1',
  },
  {
    url: 'https://i.loli.net/2019/11/21/VdGblAgS1NszIhF.jpg',
    img: '2',
  },
  {
    url: 'https://i.loli.net/2019/11/21/EzCi2xpqSWL1vkK.jpg',
    img: '3',
  },
];
 const div1 = document.body;
export default {
  data() {
    
 
    return {
      ITEMS,
     // list,
       files: [],
      fileList: [],
      visible: false,
       visible1: false,

    }
  },
  methods: {
    handleChangeStart(index){
      console.log(index);
    },
    handleChangeEnd(index){
      console.log(index);
    },
    onJumpTo(){
      this.$refs.carousel.onJumpTo(0)
    },
    onSlideTo(){
      this.$refs.carousel.onSlideTo(2)
    },
     handleChange(data){
      console.log(data);
      this.files.push(data)
    },
    
    remove(index){
      this.files.splice(index, 1);
      this.visible = true
    },
    remove2(index){
      this.fileList.splice(index, 1);
      this.visible = true
    },
  
    getContainer: () => div1, 
    
 
  },
};
</script>



<style scoped>

.carousel-item-pic img{
  width:100%;
  padding-bottom: 0px;
  padding-top: 0px；
  
}
.checkbox{
  height: 300px;
  font-weight: 900;
  font-size: 25px;
  width: 1200px;
 
  
  
  position: relative;
  z-index: 5;
}
.txt,.contact{position:absolute}
 .txt{
   left: 240px;
 
  padding-top: 0px;
 
  font-size: 25px;
}
 .contact{
  right:120px;
 
  padding-top: 50px;
  
}
.radiogroup{
   font-size: 25px;
}
.submit{
  padding-left: 240px;
  padding-right: 240px;
   font-weight: 900;
  font-size: 25px;
}
.button{
  font-size: 300px;
  padding-left: 20px;width: 900px;}
</style>
