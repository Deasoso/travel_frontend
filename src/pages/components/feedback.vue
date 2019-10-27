<template>
  <div class="page">
    <div class="all">
      <p class="form">Contact Form</p>
      <p class="pl">Please fil all the text in the fileds</p>
      <Card class="card">
        <p>请选择反馈类型：</p>
        <CheckboxGroup v-model="fruit" class="checkbox">
          <Checkbox class="f" label="性能体验"></Checkbox>
          <Checkbox class="f" label="功能异常"></Checkbox>
          <Checkbox class="f" label="产品建议"></Checkbox>
          <Checkbox class="f" label="商品投诉"></Checkbox>
        </CheckboxGroup>
        <div class="describe">
          <ul>
            <p class="question">问题描述及建议：</p>
            <Input v-model="value5"  type="textarea" :rows="5" placeholder="请协助填写提示信息和问题描述，将有助于我们更快地发现和解决问题。" style="width: 600px" />
            <br>
            <p class="tel">联系方式：</p>
            <Input v-model="value6" type="textarea" :rows="1" placeholder="请填写联系方式以便于联系。" style="width: 600px" />
            <br>
            <p class="upload">选择上传文件</p>
            <!-- <Upload 
              action="//jsonplaceholder.typicode.com/posts/">
              <Button class="upbtn" size='large' icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload> -->
            <Upload
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/">
              <div style="padding: 20px 0">
                  <Icon type="ios-cloud-upload" size="50" style="color: #3399ff"></Icon>
                  <p>Click or drag files here to upload</p>
              </div>
            </Upload>
          </ul>
        </div>
        <Button class="click" size='large' type="primary" :loading="submit" icon="ios-paper-plane-outline" @click="tosubmit">
          <span v-if="!submit">Submit</span>
          <span v-else>submitting...</span>
        </Button>
      </Card>
    </div>
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
    }
  }
}
</script>

<style>
  body {
    /* widows: 100px; */
    height:100px;
    /* width: 100%; */
    background-size: cover;
    /* background-image:url('http://www.51pptmoban.com/d/file/2018/03/09/19375a83fc004035fb1102a4551f2287.jpg'); */
    background-image:url('http://www.zhicheng.com/uploadfile/2018/0816/20180816112641376.jpeg');
  }
  .page{
    width: auto;
    height: auto;
  }
  .all{
    margin-top: 8%; 
    margin-left: 22%;
  }
  .form{
    font-size: 35px;
    font-family: "Times New Roman",Times,serif;
    color: white;
    font-weight: bold;
    margin-top: 50px;
    margin-left: 50px;
  }
  .card{
    margin-left: 50px;
  }
  .pl{
    color: white;
    font-size: 23px;
    font-family: "Times New Roman",Times,serif;
    font-weight: bold;
    margin-top: -15px;
    margin-left: 50px;
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
    /* font-size: 20px; */
  }
  .question{
    margin-top: 20px;
    /* font-size: 15px; */
  }
  .tel{
    margin-top: 20px;
    /* font-size: 15px; */
  }
  .upload{
    margin-top: 20px;
    /* font-size: 15px; */
  }
  .upbtn{
    margin-top: 5px;
  }
  .click{
    margin-top: 20px;
  }
</style>

