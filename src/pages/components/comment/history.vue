<template>
  <div class="demo-page">
  <!-- <div>
    <div style="display:inline-block;width:20%;">
      123
    </div>
    <div style="display:inline-block;width:70%;">
      333
    </div>
  </div> -->
      <Divider class="page">历史评价</Divider>
      <div class="choose">
      <za-tabs v-model="activeName" @change="handleClick">
  <za-tab-panel label="全部" name="first" theme="primary">
    <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>

  <za-tab-panel label="好评" name="second">
    <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
  <za-tab-panel label="风景美" name="third">
   <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
   <za-tab-panel label="导游讲解好" name="4">
    <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
   <za-tab-panel label="服务好" name="5">
   <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
  <za-tab-panel label="性价比高" name="6">
    <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
  <za-tab-panel label="行程棒" name="7">
    <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
  <za-tab-panel label="差评" name="8">
  <div class="commenter">
        <za-panel>
            <za-panel-body>
  <div style="display:inline-block;margin-left:10px;">
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2441479199,3701248645&fm=26&gp=0.jpg" 
        width="80" height="60"/>
        <div style="margin-top:10px;margin-left:30px;">
        <label title="Bob" >Bob</label>
        </div>
       
    <Rate show-text v-model="valueText" />
  </div>
    <div style="display:inline-block;margin-top=0px">
  
        <Tag type="border" size="large" color="primary">好评</Tag>
    <Tag type="border" size="large" color="primary">风景美</Tag>
    <div>
        
  <za-input auto-height v-model="v8" rows="4" type="textarea" placeholder="我觉得这次旅行非常的棒，哈哈哈哈哈！" readonly></za-input>
  
    </div>
  
    </div>
            </za-panel-body>
        </za-panel>
  </div>
  </za-tab-panel>
</za-tabs>
      </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
       activeName: 'first',
    }
  }
}
</script>

<style scoped>
.demo-page{
  /* margin-left: 20px; */
  padding-left: 20px;
  padding-right: 20px;
}
.page{
     margin-left: 2px;
}
.commenter{
    
}
</style>
