<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 10px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    float: inherit;
    margin-right: 50%;
}
.layout-footer-center{
    text-align: center;
}
</style>
<template>
  <div class="page">
    <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">
              <Icon type="ios-arrow-back"></Icon>
            </div>
            <div class="layout-nav">
                <MenuItem>
                    问题反馈
                </MenuItem>
            </div>
          </Menu>
        </Header>
        <!-- <Content>Content</Content>
        <Footer>Footer</Footer> -->
        
    </Layout>
    <div class="all">
      <p slot="title" class="form">
        <!-- <Icon type="ios-arrow-back"></Icon>
        问题反馈 -->
      </p>
      <p class="pl">使用以下表格将你的意见寄给我们，或报告你在此网站查找信息时遇到的问题，我们会仔细阅读你的反馈。</p>
      <Card class="card" style="width:95%">        
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
            <Input v-model="value5"  type="textarea" :rows="7" placeholder="请协助填写提示信息和问题描述，将有助于我们更快地发现和解决问题。" style="width: 90%" />
            <br>
            <p class="tel">联系方式：</p>
            <Input v-model="value6" type="textarea" :rows="1" placeholder="请填写联系方式以便于联系。" style="width: 90%" />
            <br>
            <br>
            <p>选择上传文件</p>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button class="upload" icon="ios-cloud-upload-outline" size="large">Upload files</Button>
            </Upload>
          </ul>
        </div>
        <Button class="click" size="large" type="primary" :loading="submit" icon="ios-paper-plane-outline" @click="tosubmit">
          <span v-if="!submit">提交</span>
          <span v-else>提交中...</span>
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
    height:100%;
    background-size: cover;
    /* background-image:url('http://www.zhicheng.com/uploadfile/2018/0816/20180816112641376.jpeg'); */
  }
  .feedb{
    font-size: 30px;
  }
  .page{
    width: auto;  
    height: auto;
  }
  .all{
    /* margin-top: 20%;  */
    margin-left: 5%;
  }
  .form{
    font-size: 55px;
    font-family: "Times New Roman",Times,serif;
    /* color: white; */
    font-weight: bold;
    margin-top: 10%;
    margin-left: 0px;
  }
  .card{
    margin-left: 0px;
    width: 100px;
  }
  .pl{
    /* color: white; */
    font-size: 20px;
    font-family: "Times New Roman",Times,serif;
    font-weight: bold;
    margin-top: 0px;
    margin-left: 0%;
    margin-right: 5%;
  }
  .radiogroup{
    font-size: 25px;
    margin-top: 50px;
  }
  .f{
    font-size: 17px;
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
    /* font-size: 15px; */
  }
  .tel{
    margin-top: 30px;
    /* font-size: 15px; */
  }
  .upload{
    margin-top: 5px;
  }
  .click{
    margin-top: 30px;
  }
</style>

