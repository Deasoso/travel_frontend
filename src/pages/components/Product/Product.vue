<template>
  <div class="demo-page">
    <div class="title">
      <za-nav-bar>
      <div slot="left">
      <za-icon theme="primary" type="arrow-left" @click="clickHandle"></za-icon>
      </div>
      <div slot="title">{{introduces[0].s_title}}</div>
      <div slot="right">
      <za-icon theme="primary" type="add" @click="visible2 = true"></za-icon>
      <za-icon theme="primary" type="question-round" @click="clickHandle"></za-icon>
      <za-popup :visible.sync="visible2" direction="bottom">
      <div class="popup-box" style="height: 100%;padding: 20px 20px 100px;background: #fff;">
      <za-button size="sm" @click="visible2 = false" style="width:100%; height:30px;">关闭</za-button>
      <za-button size="sm" @click="showAlert" style="width:100%; height:30px;">分享</za-button>
      </div>
      </za-popup>
      </div>
      </za-nav-bar>
    </div>
    <div style="height:210px">
      <img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=49ea6e613bfa828bd5239de3cd1e41cd/80cb39dbb6fd526625c2d670a318972bd50736ed.jpg"  class="scenery_css" width="100%">
    </div>
    <div class="price">
      <div class = "price_css" font-color = "red">
        ￥{{introduces[0].n_price}}
        <za-button size="xs" theme="primary">{{issell}}</za-button>
      </div>
      <div class = "o_price_css">
        <s>原价: ￥{{introduces[0].o_price}}</s>
      </div>
    </div>
    <div class="present">
      <div class="name">
        {{introduces[0].sce_name}}
      </div>
      <div class="info">
        <za-tabs v-model="activeName" @change="handleClick" slideable>
          <za-tab-panel label="景区介绍" name="first">
            <div style="width:100%; white-space:normal;word-break:break-all">
                {{introduces[0].introduce}}
            </div>
          </za-tab-panel>
          <za-tab-panel label="游玩推荐" name="second">
            <div class="content">
              <za-message>{{introduces[0].top_rec01}}</za-message>
              <img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=49ea6e613bfa828bd5239de3cd1e41cd/80cb39dbb6fd526625c2d670a318972bd50736ed.jpg"  width="99%" height="200px">
              <za-message>{{introduces[0].top_rec02}}</za-message>
              <img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D500/sign=49ea6e613bfa828bd5239de3cd1e41cd/80cb39dbb6fd526625c2d670a318972bd50736ed.jpg"  width="99%"  height="200px">
            </div>
          </za-tab-panel>
          <za-tab-panel label="评价" name="third">
            <div class="content">
              
            </div>
          </za-tab-panel>
        </za-tabs>
      </div>
    </div>
    <div class="tobott">
      <za-nav-bar height="70px">
        <div slot="left">
          <za-icon theme="primary" type="arrow-left">
          </za-icon>
        </div>
        <div slot="right">
          <za-button size="xs" theme="primary" style="height:100%;width:80px;background:orange;">
            加入购物车
          </za-button>    
          <za-button size="xs" theme="primary" style="height:100%;width:80px;background:red;">
            立即购买
          </za-button>
        </div>
      </za-nav-bar>
    </div>
  </div>
</template>

<script>
const introduces = require('./introduces.json');
export default {
  data() {
    return {
      title: 'MoBan',
      value: [20, 50],
      number: 1,
      issell:"正在促销",
      activeName: 'first',
      introduces: '',
      visible2: false,
    }
  },
  methods: {
      async add(){
        console.log("logging..");
        this.number = this.number+1
        console.log("login result:", this.number);
      },
    handleClick(tab, event){
      console.log(tab,event)
      this.activeName7 = this.activeName6;
    },
    clickHandle(tab, event){
      alert('clickHandle');
    },
    showAlert() {
      console.log("分享");
    },
    getContainer: () => div1,
  },
  mounted(){
    this.introduces = introduces;
  }
}
</script>
<style scoped>
.scenery_css{
  height: 100%;
}

.price_css{ 
  margin-left:5%;
  color:red;
  font-size: 250%;
  font-weight: 300;
  display:block; 
}
.o_price_css{
  margin-left:6%;
}
.name{
  font-weight: bold;
  line-height: 60px;
  font-size: 260%;
  text-indent: 1em;
  width: 100%;
  background: rgb(376,376,376);
}
.text{
  width: 100%;
}
.za-carousel__item{
  vertical-align: top;
}
.tobott{
  position:fixed;
  bottom:1px;
  width:100%;
  height:50px;
}
</style>