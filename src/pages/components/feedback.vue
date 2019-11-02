<template>
  <div class="page">
      <Header :style="{width: '100%', height:'50px'}">
        <Menu theme="dark">  
          <div class="layout-nav">
            <MenuItem :style="{width: '100%', height:'45px'}">
              <Icon class="back" type="md-arrow-round-back"></Icon>
            </MenuItem>
          </div>
        </Menu>
      </Header>     
    <div class="all">
      <p slot="title" class="form">
      </p>
      <p class="pl">使用以下表格将你的意见寄给我们，或报告你在此应用程序查找信息时遇到的问题，我们会仔细阅读你的反馈。</p>
      <Card class="card" style="width:100%">
        <div class="cardi">
          <p class="feedb">我的反馈是关于：</p>
          <RadioGroup v-model="phone">
            <Radio label="性能体验">
                <span class="radiogroup">性能体验</span>
            </Radio>
            <br>
            <Radio label="功能异常">
                <span class="radiogroup">功能异常</span>
            </Radio>
            <br>
            <Radio label="产品建议">
                <span class="radiogroup">产品建议</span>
            </Radio>
            <br>
            <Radio label="商品投诉">
                <span class="radiogroup">商品投诉</span>
            </Radio>
          </RadioGroup>
          <div class="describe">
            <ul>
              <p class="question">问题描述及建议：</p>
              <Input v-model="value5"  type="textarea" :rows="7" placeholder="请协助填写提示信息和问题描述，将有助于我们更快地发现和解决问题。" style="width: 100%" />
              <br>
              <p class="tel">联系方式：</p>
              <Input v-model="value6" type="textarea" :rows="1" placeholder="请填写联系方式以便于联系。" style="width: 100%" />
              <br>
              <br>
              <p>拍照或者上传文件</p>
              <Upload action="//jsonplaceholder.typicode.com/posts/">
              <!-- <Button icon="logo-twitter"></Button> -->
              <Button class="upload" icon="ios-camera-outline"></Button>
              </Upload>
            </ul>
          </div>
        </div>
      </Card>
    </div>
    <Button class="click" type="success" :loading="submit" icon="ios-paper-plane-outline" @click="tosubmit" long>
      <span v-if="!submit">提交</span>
      <span v-else>提交中...</span>
    </Button>
  </div>
</template>

<script>
import { timeout } from 'q';
export default {
  data () {
    return {
      value5: '',
      value6: '',
      file: null,
      submit: false,
      loadingStatus: false,
    }
  },
  methods: {
    handleUpload (file) {
        this.file = file;
        return false;
    },
    upload () {
        this.loadingStatus = true;
        setTimeout(() => {
            this.file = null;
            this.loadingStatus = false;
            this.$Message.success('Success')
        }, 1500);
    },
    tosubmit () {
        this.submit = true;
        setTimeout(() => {
        this.$Message.info('感谢反馈，我们会尽快处理');
        this.submit = false;
        }, 500);
        return {
          value5: '',
          value6: '',
        }
    }
  }
}
</script>

<style>
  body {
    height:100%;
    background-size: cover;
  }
  .back{
    margin-top: 10px;
    margin-left: -40px;
    color: white;
    font-size: 40px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .pp{
    margin-left: 50%;
    color: azure;
     width: 420px;
        margin: 0 auto;
        margin-right: 20px;
  }
  .feedb{
    font-size: 30px;
  }
  .page{
    width: auto;  
    height: auto;
  }
  .form{
    font-size: 55px;
    font-family: "Times New Roman",Times,serif;
    font-weight: bold;
    margin-top: 5%;
  }
  .card{
    margin-left: 0px;
    margin-right: 0px;
  }
  .pl{
    font-size: 20px;
    font-family: "Times New Roman",Times,serif;
    font-weight: bold;
    margin-left: 3%;
    margin-right: 5%;
  }
  .radiogroup{
    font-size: 30px;
    margin-top: 50px;
  }
  .cardi{
    margin-left: 1%;
    margin-right: 5%;
  }
  .f{
    font-size: 17px;
  }
  .card{
    margin-top: 20px;
    width: 800px;
  }
  .checkbox{
    margin-top: 10px;
  }
  .describe{
    margin-top: 10px;
    font-size: 30px;
  }
  .question{
    margin-top: 30px;
  }
  .tel{
    margin-top: 30px;
  }
  .upload{
    margin-top: 5px;
    height: 150px;
    width: 150px;
    font-size: 70px;
  }
  .click{
    font-size: 30px;
    height: 80px;
    margin-top: 105px;
  }
</style>

