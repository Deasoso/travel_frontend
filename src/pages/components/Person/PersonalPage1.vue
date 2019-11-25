<template>
<div>
  <div class="Title">
    <img class="head_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574503765396&di=e08c280212c417787491efe73c108d69&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201507%2F07%2F20150707225339_NxT3C.jpeg" />
    <div class="User-name">{{title}}</div>
  </div>
<za-search-bar shape="round" :showCancel="true" ></za-search-bar>

<za-panel style="margin-top:10px">
    <za-panel-body>
    <div class="custom-panel">
        <div class="message">
           <img style="width:100%;" src="https://i.52112.com/icon/jpg/256/20190806/52117/2356669.jpg">
          收藏
        </div>
        <div class="message">
           <img style="width:100%;" src="https://i.52112.com/icon/jpg/256/20140314/235/27990.jpg">
          历史
        </div>
        <div class="message">
           <img style="width:100%;" src="https://i.52112.com/icon/jpg/256/20160616/2231/122300.jpg">
            消息
        </div>
        <div class="message">
           <img style="width:100%;" src="https://i.52112.com/icon/jpg/256/20191108/66104/2867325.jpg">
          设置
        </div>
    </div>
    </za-panel-body>
  </za-panel>


<div class="order" style="margin-top:10px">
    <za-cell is-link title="我的订单" has-arrow @click="getOrders">
      <div slot="description">查看全部订单</div>
      </za-cell>
    <za-cell>
      <za-panel>
        <za-panel-body>
        <div class="custom-panel">
            <div class="box">
              <za-badge sup shape="circle" text="3" @click="handleClick">
              <img style="width:100%;" :src="pic[0]">
              </za-badge>
              待付款
            </div>
            <div class="box">
              <img style="width:100%;" :src="pic[1]">
              已付款
            </div>
            <div class="box">
              <img style="width:100%;" :src="pic[2]">
                充值
            </div>
            <div class="box">
              <img style="width:100%;" :src="pic[3]">
              售后
            </div>
        </div>
        </za-panel-body>
      </za-panel>
    </za-cell>
</div>

  <div class="tools" style="margin-top:30px">
    <za-cell is-link title="我的工具" has-arrow @click="() => {}">
      <div slot="description">查看更多</div>
      </za-cell>
    <za-cell>
      <za-panel>
        <za-panel-body>
        <div class="custom-panel">
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[0]">
              常用信息
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[1]">
              出行清单
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[2]">
               会员权益
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[3]">
              我的旅拍
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[4]">
              用户调研
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[5]">
              我的服务
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[6]">
                我的评价
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[7]">
              客服服务
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[8]">
              我的预约
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[9]">
              主题换肤
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[10]">
              优惠券
            </div>
            <div class="tool_box">
              <img style="width:100%;" :src="tool_pic[11]">
              推荐
            </div>
        </div>
        </za-panel-body>
      </za-panel>
    </za-cell>
</div>


<za-cell>
  <za-tab-bar :visible="visible" :defaultActiveKey="3" @change="handleChange" class="footbar">

    <za-tab-bar-item :item-key="1" title="首页" @click="handleClick">
        <za-icon slot="icon" tag="symbol" type="home" class="icon"></za-icon>
        <za-icon slot="activeIcon" tag="symbol" theme="primary" type="home" class="icon"></za-icon>
    </za-tab-bar-item>
    <za-tab-bar-item :item-key="2" title="搜索" @click="handleClick">
          <za-icon slot="icon" tag="symbol" type="search" class="icon"></za-icon>
          <za-icon slot="activeIcon" tag="symbol" theme="primary" type="insurance" class="icon"></za-icon>
    </za-tab-bar-item>

    <za-tab-bar-item :item-key="3" title="用户">
        <za-icon slot="icon" tag="symbol" type="user" class="icon"></za-icon>
        <za-icon slot="activeIcon" tag="symbol" theme="primary" type="user" class="icon"></za-icon>
    </za-tab-bar-item>
  </za-tab-bar>
</za-cell>
</div>
</template>

<script>
import global from '../../global/global.vue'
// import API from '../../../util/api.js';

export default  {
  data() {
    return {
      pic: ['https://i.52112.com/icon/jpg/256/20190404/35164/1704416.jpg',
            'https://i.52112.com/icon/jpg/256/20150804/817/59513.jpg',
            'https://i.52112.com/icon/jpg/256/20180124/11169/828151.jpg',
            'https://i.52112.com/icon/jpg/256/20181122/25162/1205520.jpg'],
      tool_pic:['https://i.52112.com/icon/jpg/256/20191105/65499/2846791.jpg',
                'https://i.52112.com/icon/jpg/256/20160421/1617/91069.jpg',
                'https://i.52112.com/icon/jpg/256/20190410/36097/1729076.jpg',
                'https://i.52112.com/icon/jpg/256/20191107/66031/2864510.jpg',
                'https://i.52112.com/icon/jpg/256/20150227/613/45746.jpg',
                'https://i.52112.com/icon/jpg/256/20181115/24696/1184899.jpg',
                'https://i.52112.com/icon/jpg/256/20180529/16199/747459.jpg',
                'https://i.52112.com/icon/jpg/256/20191015/63238/2779343.jpg',
                'https://i.52112.com/icon/jpg/256/20190123/28986/1445396.jpg',
                'https://i.52112.com/icon/jpg/256/20180703/17304/909052.jpg',
                'https://i.52112.com/icon/jpg/256/20170707/7422/454059.jpg',
                'https://i.52112.com/icon/jpg/256/20191004/61535/2714020.jpg'],
      title: '个人中心',
    }
  },
  methods:{
      async getOrders(){
        console.log("getting Orders massage...")
        const table = await global.API.getchaincode();
        // const table = await API.getchaincode();
        console.log(table);
      }
  },
  async mounted() {
    console.log('Connecting to Scatter desktop...');
    const connected = await global.API.connectScatterAsync();
    // const connected = await API.connectScatterAsync();
    console.log('Connect Scatter result: ', connected);
  }
}
</script>

<style scoped>
.Title{
  /* padding: 30px; */
  text-align: left;
}
.head_img{
  width: 19%;
  display:inline-block;
  vertical-align:middle;
  border-radius:50%;
}
.User-name{
  width: calc(80% - 80px);
  display: inline-block;
  vertical-align:middle;
  font-size: 40px;
}
.box{
  display: inline-block;
  width: 10%;
  margin-left: 12%;
  margin-top: 10px;
}
.tool_box{
  display: inline-block;
  width: 12%;
  margin-left: 13%;
  margin-top: 10px;
}
.message{
  display: inline-block;
  width: 7%;
  margin-left: 14%;
  margin-top: 10px;
}
</style>
