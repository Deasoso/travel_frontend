<template>
  <div>
    <za-cell title="数字">
      <za-input-number v-model="v5" type="number" placeholder="type is number" @change="handleChange"></za-input-number>
    </za-cell>
    <Button type="success" @click="login">登录</Button>
    <Button type="success" @click="getchaincode">获取链上数据</Button>
    <Button type="success" @click="dochain">执行链上方法</Button>
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide, index in swiperSlides" :key="index">
        <img src="https://edu-image.nosdn.127.net/bfcfb254a0324c159c50434e98aaac1f.png?imageView&quality=100" height="200px" width="100%"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="inputview">
      <Input search enter-button placeholder="Enter something..." />
    </div>
    <div class="background" v-for="item1, index1 in jingdianList" :key="index1">
      <Card style="width:100%">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          景区名称
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          详细信息
        </a>
        <!-- <ul> -->
          <div class="leftcard">
            <img src="https://edu-image.nosdn.127.net/bfcfb254a0324c159c50434e98aaac1f.png?imageView&quality=100" height="80px" width="100%"/>
          </div>
          <div class="rightcard">
            <li v-for="item, index in movieList" :key="index">
              <a target="_blank">{{ item.name }}</a>
              <span>
                <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                {{ item.rate }}
              </span>
            </li>
          </div>
        <!-- </ul> -->
      </Card>
    </div>
  </div>
</template>
 
<script>
// import API from '../../../util/api.js';
import global from '../../global/global.vue'

  export default {
    components:{
      Global123: global,
    },
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [1, 2, 3, 4, 5],
        movieList: [
          {
              name: '环境评分',
              rate: 9.6
          },
          {
              name: '设施评分',
              rate: 9.4
          },
          {
              name: '景区评分',
              rate: 9.5
          },
          {
              name: '服务评分',
              rate: 9.4
          },
          {
              name: '综合评分',
              rate: 9.5
          },
        ],
        randomMovieList: [],
        jingdianList: [1, 2, 3, 4, 5]
      }
    },
    methods:{
      async login(){
        console.log("logging..");
        const identity = await global.API.loginScatterAsync();
        // const identity = await API.loginScatterAsync();
        console.log("login result:", identity);
      },
      async getchaincode(){
        console.log("getting chain code...")
        const table = await global.API.getchaincode();
        // const table = await API.getchaincode();
        console.log(table);
      },
      async dochain(){
        console.log("doing chain code...")
        const merchant = await global.API.AddmerchantAsync();
        // const merchant = await API.AddmerchantAsync();
        console.log(merchant)
      }
    },
    async mounted() {
      global.name = '123';
      console.log('Connecting to Scatter desktop...');
      const connected = await global.API.connectScatterAsync();
      // const connected = await API.connectScatterAsync();
      console.log('Connect Scatter result: ', connected);
    }
  }
</script>

<style scoped>
.inputview{
  margin: 10px;
  margin-top: 0px;
}
.background{
  background-image: url('https://edu-image.nosdn.127.net/bfcfb254a0324c159c50434e98aaac1f.png?imageView&quality=100');
  margin-bottom: 10px;
}
.leftcard{
  display: inline-block;
  width: 40%;
  margin-right: 10%;
}
.rightcard{
  margin-right: 0;
  text-align: right;
  display: inline-block;
  width: 45%;
}
</style>