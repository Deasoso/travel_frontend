<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide, index in swiperSlides" :key="index">
        <img src="../1.jpeg" height="200px" width="100%"/>
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
            <img src="../1.jpeg" height="80px" width="100%"/>
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
  export default {
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
    mounted() {

    }
  }
</script>

<style scoped>
.inputview{
  margin: 10px;
  margin-top: 0px;
}
.background{
  background-image: url('../1.jpeg');
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