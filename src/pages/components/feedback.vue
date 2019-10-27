<template>
  <div class="page">
    <div class="all">
      <p class="form">Contact Form</p>
      <p class="pl">Please fil all the text in the fileds</p>
      <Card class="card">
        <p>请选择问题反馈类型：</p>
        <CheckboxGroup v-model="fruit" class="checkbox">
          <Checkbox label="香蕉"></Checkbox>
          <Checkbox label="苹果"></Checkbox>
          <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <div class="describe">
          <ul>
            <p class="question">问题描述及建议：</p>
            <Input v-model="value5" type="textarea" :rows="4" placeholder="请协助填写提示信息和问题描述，将有助于我们更快地发现和解决问题。" style="width: 500px" />
            <br>
            <p class="tel">联系方式：</p>
            <Input v-model="value6" type="textarea" :rows="1" placeholder="请填写联系方式以便于联系。" style="width: 500px" />
            <br>
            <p class="upload">选择上传图片</p>
            <Upload 
              action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
            <!-- <div>
              <Upload
                :before-upload="handleUpload"
                action="//jsonplaceholder.typicode.com/posts/">
                <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
              </Upload>
              <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
            </div> -->
          </ul>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value5: '',
      value6: ''
    };
    return {
      file: null,
      loadingStatus: false
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
    }
  }
}
</script>

<style>
  
  .all{
    margin-top: 10%; 
    margin-left: 20%;
  }
  .form{
    font-size: 35px;
    font-family: "Times New Roman",Times,serif;
    font-weight: bold;
    margin-top: 50px;
    margin-left: 50px;
  }
  .card{
    margin-left: 50px;
  }
  .pl{
    font-size: 23px;
    font-family: "Times New Roman",Times,serif;
    font-weight: bold;
    margin-top: -15px;
    margin-left: 50px;
  }
  .card{
    margin-top: 20px;
    width: 800px;
  }
  .describe{
    margin-top: 5px;
    font-size: 20px;
  }
  .question{
    margin-top: 20px;
    font-size: 15px;
  }
  .tel{
    margin-top: 20px;
    font-size: 15px;
  }
  .upload{
    margin-top: 20px;
    font-size: 15px;
  }
</style>

