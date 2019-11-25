<template>
  <div class="demo-page">
   <div class="top">
     <div class="cansle"  ><a href="##">取消</a></div>
     <div class="question">反馈问题</div>
     </div>
   <div class="link"> 
      <a href="##"> <img src="https://i.loli.net/2019/11/23/NluC6by3IUj8fKH.png"></a>
    </div>
   <div class="detail">
       <div class="txt">您遇到了什么问题?</div>
       <br>
       <div class="checkbox">
        <div class="checkbox1">
        <za-button ghost>功能故障</za-button>
        </div>
        <div class="checkbox2">
        <za-button ghost>表诉含糊</za-button>  
        </div>
        <div class="checkbox3">
        <za-button ghost>信息有误</za-button> 
        </div>
        
       </div>
        <div class="checkboxm">
        <div class="checkbox1">
        <za-button ghost>加载缓慢</za-button>
        </div>
        <div class="checkbox2">
        <za-button ghost>更多建议 </za-button>  
        </div>
        <div class="checkbox3">
        <za-button ghost>其他问题</za-button> 
        </div>
       <br>
        <div class="more">
          <input type="textarea" placeholder="请详细描述你所遇到的问题" >
          <br>
          <div>
            <za-cell title="联系方式">
            <za-input ref="inputFirst" v-model="v1" type="联系方式" placeholder="请填写手机或邮箱" @change="handleChange" :clearable="true"></za-input>
            </za-cell>
           </div>
           <div class="button"> 
             <za-button theme="提交" block>提交</za-button>
          </div> 
        </div> 
       </div>

   </div>
   
  </div>
</template>

<script>
module.exports = {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.top{background-color: cornflowerblue}
.cansle{float: left;margin:20px 0px 0px 20px ;font-size: 25px;color: cornsilk}
.question{margin:auto;width:200px;font-size: 50px;color: cornsilk;background-color: cornflowerblue}
.link img{width: 100%}

.detail .txt {float:left;margin-left:20px;font-size: 25px;font-weight: 900}
.detail .checkbox {margin:30px 50px 50px 20px ;}
.detail .checkbox .checkbox1{float: left;}
.detail .checkbox .checkbox1 .za-button{font-size:30px;margin-right: 60px;padding:30px;margin-top:20px;}
.detail .checkbox .checkbox2{float: left;}
.detail .checkbox .checkbox2 .za-button{font-size: 30px;padding:30px;margin-right: 60px;margin-top:20px;}
.detail .checkbox .checkbox3{float: left;}
.detail .checkbox .checkbox3 .za-button{font-size: 30px;padding:30px;margin-top:20px;}
.detail .checkboxm {margin:30px 50px 50px 20px ;padding-top:20px }
.detail .checkboxm .checkbox1{float: left;}
.detail .checkboxm .checkbox1 .za-button{font-size:30px; margin-top:20px;margin-right: 60px;padding:30px;}
.detail .checkboxm .checkbox2{float: left;}
.detail .checkboxm .checkbox2 .za-button{font-size: 30px;padding:30px;margin-right: 60px;margin-top:20px;}
.detail .checkboxm .checkbox3{float: left;}
.detail .checkboxm .checkbox3 .za-button{font-size: 30px;padding:30px;margin-top:20px;}
.detail .more{padding-top: 0px}
.detail .more input{width: 98%;height:200px;margin-top:20px;padding-top: 0px;
border:rgba(177, 166, 166, 0.808) solid rgba(0.1,0,0,0.1) ;}
.detail .button .za-button{margin:auto;background-color:  cornflowerblue;font-size: 30px;height: 60px;

}

</style>
